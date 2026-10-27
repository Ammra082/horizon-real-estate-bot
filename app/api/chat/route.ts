import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/ai/system-prompt';
import { chatTools } from '@/lib/ai/tools';
import { generateOfflineResponse } from '@/lib/ai/mock-engine';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check which free or paid provider keys are configured
    const groqKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;
    const openrouterKey = process.env.OPENROUTER_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    let modelInstance = null;

    // 1. Groq (100% Free Tier, No credit card needed, 300+ tok/s)
    if (groqKey) {
      const groq = createOpenAI({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: groqKey,
      });
      const groqModel = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
      modelInstance = groq(groqModel);
    }
    // 2. Google Gemini Free Tier (Via OpenAI-compatible endpoint)
    else if (geminiKey) {
      const gemini = createOpenAI({
        baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
        apiKey: geminiKey,
      });
      modelInstance = gemini('gemini-1.5-flash');
    }
    // 3. OpenRouter Free Tier
    else if (openrouterKey) {
      const openrouter = createOpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: openrouterKey,
      });
      modelInstance = openrouter('meta-llama/llama-3.3-70b-instruct:free');
    }
    // 4. OpenAI (If user provides one later)
    else if (openaiKey) {
      const openai = createOpenAI({
        apiKey: openaiKey,
      });
      modelInstance = openai('gpt-4o-mini');
    }

    // If an external AI provider is configured, try streaming through it
    if (modelInstance) {
      try {
        const result = streamText({
          model: modelInstance,
          system: SYSTEM_PROMPT,
          messages,
          tools: chatTools,
          maxSteps: 5,
        });

        return result.toDataStreamResponse();
      } catch (externalError) {
        console.warn('External AI call failed, falling back to built-in conversational engine:', externalError);
        // Seamless fallback to offline engine below
      }
    }

    // 5. Zero-cost Built-in Conversational Engine (Zero API Key required)
    // Runs 100% free with no credit card, no tokens, and works out of the box on Vercel
    const stream = generateOfflineResponse(messages);
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1',
      },
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    // Return graceful fallback stream even in fatal exceptions
    const fallbackStream = generateOfflineResponse([{ role: 'user', content: 'hello' }]);
    return new Response(fallbackStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1',
      },
    });
  }
}
