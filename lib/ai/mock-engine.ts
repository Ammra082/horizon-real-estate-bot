import { PROPERTIES, searchProperties, getPropertyById } from '@/lib/ai/property-data';
import { Property, EMIResult, VisitBooking } from '@/lib/types';

interface MessageInput {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SimulatedStreamChunk {
  type: 'text' | 'tool_call' | 'tool_result';
  data: any;
}

/**
 * Intelligent autonomous conversational engine for PropChat AI.
 * Runs completely offline with zero API keys required, streaming
 * natural responses formatted in the Vercel AI SDK data-stream protocol.
 */
export function generateOfflineResponse(messages: MessageInput[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const text = lastUserMessage.toLowerCase().trim();

  // Also check prior messages for conversation context (e.g. prior budget or property type)
  const conversationContext = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content.toLowerCase())
    .join(' ');

  const chunks: SimulatedStreamChunk[] = [];

  // Helper to schedule a search_properties tool call
  const triggerPropertySearch = (filters: Parameters<typeof searchProperties>[0], introductoryText: string, followUpQuestion: string) => {
    let results = searchProperties(filters);
    if (results.length === 0) {
      // Fallback to top featured if filter was too strict
      results = PROPERTIES.slice(0, 3);
    } else {
      results = results.slice(0, 3);
    }

    const toolCallId = `call_${Date.now()}_search`;
    chunks.push({
      type: 'text',
      data: introductoryText + '\n\n',
    });
    chunks.push({
      type: 'tool_call',
      data: {
        toolCallId,
        toolName: 'search_properties',
        args: filters,
      },
    });
    chunks.push({
      type: 'tool_result',
      data: {
        toolCallId,
        result: results,
      },
    });
    chunks.push({
      type: 'text',
      data: '\n\n' + followUpQuestion,
    });
  };

  // Helper to schedule a calculate_emi tool call
  const triggerEmiCalculation = (price: number, introText: string) => {
    const downPayment = Math.round(price * 0.2);
    const loanAmount = price - downPayment;
    const monthlyRate = 8.5 / (12 * 100);
    const totalMonths = 20 * 12;
    const compounding = Math.pow(1 + monthlyRate, totalMonths);
    const emi = Math.round((loanAmount * monthlyRate * compounding) / (compounding - 1));
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    const toolCallId = `call_${Date.now()}_emi`;
    const emiResult: EMIResult = {
      propertyPrice: price,
      downPayment,
      loanAmount,
      emi,
      interestRate: 8.5,
      loanTermYears: 20,
      totalPayment,
      totalInterest,
    };

    chunks.push({
      type: 'text',
      data: introText + '\n\n',
    });
    chunks.push({
      type: 'tool_call',
      data: {
        toolCallId,
        toolName: 'calculate_emi',
        args: { propertyPrice: price, downPaymentPercent: 20, interestRate: 8.5, loanTermYears: 20 },
      },
    });
    chunks.push({
      type: 'tool_result',
      data: {
        toolCallId,
        result: emiResult,
      },
    });
    chunks.push({
      type: 'text',
      data: '\n\nThis assumes a standard 20% down payment over 20 years at 8.5%. Would you like me to adjust the down payment or loan duration for you?',
    });
  };

  // Helper to schedule a schedule_visit tool call
  const triggerVisitSchedule = (propTitle: string, date: string, time: string, name: string, phone: string) => {
    const toolCallId = `call_${Date.now()}_visit`;
    const booking: VisitBooking = {
      confirmed: true,
      propertyId: 'crest-residences',
      propertyTitle: propTitle,
      name,
      phone,
      preferredDate: date,
      preferredTime: time,
      message: `Your visit for ${propTitle} has been scheduled for ${date} at ${time}. Our agent will be waiting to walk you through.`,
    };

    chunks.push({
      type: 'text',
      data: `I have got that booked in for you right away. Here are your visit confirmation details:\n\n`,
    });
    chunks.push({
      type: 'tool_call',
      data: {
        toolCallId,
        toolName: 'schedule_visit',
        args: { propertyTitle: propTitle, preferredDate: date, preferredTime: time, name, phone },
      },
    });
    chunks.push({
      type: 'tool_result',
      data: {
        toolCallId,
        result: booking,
      },
    });
    chunks.push({
      type: 'text',
      data: '\n\nOur property manager will give you a quick confirmation call before the visit. Is there anything specific you would like to inspect during the tour?',
    });
  };

  // INTENT ROUTING LOGIC

  // 1. AI check deflection (robust regex for any "ai", "bot", "robot", "human", "automated")
  if (/\b(ai|bot|robot|automated|chatgpt|gpt)\b/i.test(text) || text.includes('are you human') || text.includes('are you real') || text.includes('is this a person')) {
    chunks.push({
      type: 'text',
      data: "Ha, I get that a lot! I just type fast because I have been doing this for over eight years with Horizon. Are you looking for a place for yourself, or are you scouting investment options?",
    });
  }
  // 2. Schedule visit / viewing / appointment
  else if (text.includes('visit') || text.includes('tour') || text.includes('viewing') || text.includes('schedule') || text.includes('appointment') || text.includes('book')) {
    triggerVisitSchedule('The Crest Residences', 'Tomorrow (Saturday)', '11:00 AM', 'Guest Client', '+1 (555) 234-8900');
  }
  // 3. EMI / Mortgage / Monthly payment / Financing
  else if (text.includes('emi') || text.includes('mortgage') || text.includes('monthly payment') || text.includes('financing') || text.includes('loan') || text.includes('down payment') || text.includes('interest rate')) {
    let price = 450000;
    if (text.includes('1.2') || text.includes('oakwood') || text.includes('villa')) price = 1200000;
    else if (text.includes('850') || text.includes('skyline') || text.includes('penthouse')) price = 850000;
    else if (text.includes('280') || text.includes('sunrise')) price = 280000;
    else if (text.includes('145') || text.includes('studio') || text.includes('metro')) price = 145000;
    else if (text.includes('500')) price = 500000;

    triggerEmiCalculation(price, "Here is a breakdown of what the monthly payments look like on our standard financing package:");
  }
  // 4. Budget Range queries (e.g. "500k to 1m", "range of 500k", "under 1 million", "around 600k")
  else if (
    (text.includes('500') && (text.includes('1m') || text.includes('million') || text.includes('1000k') || text.includes('to'))) ||
    text.includes('500k') || text.includes('700k') || text.includes('800k') || text.includes('range') || text.includes('budget') ||
    (conversationContext.includes('500k') && (text.includes('show') || text.includes('ok') || text.includes('yes') || text.includes('see')))
  ) {
    triggerPropertySearch(
      { minPrice: 450000, maxPrice: 1000000 },
      "Here are three standout properties between $500K and $1M. These are some of our most requested homes in that bracket:",
      "All three have high-end finishes and strong neighborhood appreciation. Would you lean more towards a private terrace like Skyline, or beachfront living like Marina Bay?"
    );
  }
  // 5. Continuation / Confirmation ("ok show me", "show me", "yes show", "options", "what do you have")
  else if (text === 'ok show me' || text === 'show me' || text.includes('show me') || text === 'yes' || text === 'sure' || text === 'let me see' || text === 'show') {
    if (conversationContext.includes('villa')) {
      triggerPropertySearch(
        { type: 'villa' },
        "Here are our premium villas with private gardens and pools:",
        "Would you like to schedule a walk-through for one of these this weekend?"
      );
    } else if (conversationContext.includes('investment')) {
      triggerPropertySearch(
        { minPrice: 400000, maxPrice: 850000 },
        "Here are our top high-yield investment properties right in the downtown and waterfront corridors:",
        "Are you aiming for immediate rental yield or capital growth over the next 3 to 5 years?"
      );
    } else {
      triggerPropertySearch(
        {},
        "Here is a curated look at our top active listings right now across our residential portfolio:",
        "Which of these three catches your attention, or do you have a specific neighborhood in mind?"
      );
    }
  }
  // 6. Quick reply button: "Looking for a home"
  else if (text === 'looking for a home' || text.includes('buy a home') || text.includes('new home') || text.includes('house for my family')) {
    triggerPropertySearch(
      { type: 'apartment' },
      "Awesome. We have got some great move-in ready homes right now. Here are three of our most popular residential options:",
      "Do you prefer living close to downtown with city views, or somewhere quieter with more green space?"
    );
  }
  // 7. Quick reply button: "Investment opportunity"
  else if (text === 'investment opportunity' || text.includes('investment') || text.includes('rental yield') || text.includes('invest')) {
    triggerPropertySearch(
      { minPrice: 400000, maxPrice: 900000 },
      "Smart move. Current rental yields in the downtown corridor and marina area are running around 7-9% annually. Take a look at these high-yield assets:",
      "Are you prioritizing steady rental yields or long-term capital appreciation?"
    );
  }
  // 8. Quick reply button: "Commercial space"
  else if (text === 'commercial space' || text.includes('commercial') || text.includes('office')) {
    triggerPropertySearch(
      { type: 'commercial' },
      "We have got prime corporate spaces right in the central business district. Here is what is currently available:",
      "What kind of square footage or team size are you planning for?"
    );
  }
  // 9. Quick reply button: "Just exploring options"
  else if (text === 'just exploring options' || text.includes('just looking') || text.includes('exploring')) {
    triggerPropertySearch(
      {},
      "No pressure at all! To give you a feel for what the market looks like right now, here are a few handpicked listings across different price points:",
      "Take your time browsing through them. Which style stands out to you the most?"
    );
  }
  // 10. Villa search
  else if (text.includes('villa') || text.includes('mansion') || text.includes('independent house')) {
    triggerPropertySearch(
      { type: 'villa' },
      "Villas are in high demand right now. Here are our top private villa listings featuring spacious gardens and pools:",
      "Would you like to walk through any of these this coming weekend?"
    );
  }
  // 11. Penthouse search
  else if (text.includes('penthouse') || text.includes('top floor')) {
    triggerPropertySearch(
      { type: 'penthouse' },
      "If you are looking for privacy and skyline views, penthouses are hard to beat. Here is our flagship listing in City Center:",
      "Would you like me to check if private elevator access is included for this unit?"
    );
  }
  // 12. Affordable / Starter budget inquiries (<$300k)
  else if (text.includes('under 300k') || text.includes('200k') || text.includes('cheap') || text.includes('starter') || text.includes('affordable')) {
    triggerPropertySearch(
      { maxPrice: 300000 },
      "Got it. Keeping things comfortably within an accessible starter range, here are our best options:",
      "Are you planning to finance this with a mortgage, or are you looking at an all-cash purchase?"
    );
  }
  // 13. Bedroom search (3 bed, 2 bed, 1 bed)
  else if (text.includes('3 bed') || text.includes('3bhk') || text.includes('3 bedroom')) {
    triggerPropertySearch(
      { bedrooms: 3 },
      "Here are our top 3-bedroom residences available right now:",
      "Do you have a preferred location like Downtown or closer to the water?"
    );
  } else if (text.includes('2 bed') || text.includes('2bhk') || text.includes('2 bedroom')) {
    triggerPropertySearch(
      { bedrooms: 2 },
      "Here are our best 2-bedroom listings with excellent layouts:",
      "Are you looking to move in immediately, or is your timeline a bit more flexible?"
    );
  } else if (text.includes('1 bed') || text.includes('1bhk') || text.includes('studio')) {
    triggerPropertySearch(
      { bedrooms: 1 },
      "For 1-bedroom and studio living, here is a high-demand modern unit steps from transit:",
      "Would you be living here yourself or renting it out as an investment?"
    );
  }
  // 14. Location inquiries (Downtown, Marina, Waterfront, Lakeside)
  else if (text.includes('downtown') || text.includes('marina') || text.includes('waterfront') || text.includes('beach') || text.includes('lake')) {
    const locKeyword = text.includes('marina') || text.includes('beach') || text.includes('waterfront') ? 'marina' : text.includes('lake') ? 'lakeside' : 'downtown';
    triggerPropertySearch(
      { location: locKeyword },
      `That area has fantastic connectivity and solid appreciation potential. Here is what is active in that neighborhood:`,
      "What do you think of these locations? We can also expand the search to neighboring communities."
    );
  }
  // 15. General greetings
  else if (text === 'hi' || text === 'hello' || text === 'hey' || text === 'good morning' || text === 'good evening' || text === 'good afternoon') {
    chunks.push({
      type: 'text',
      data: "Hey there! Good to meet you. I am Aura from Horizon Properties. Are you on the hunt for a new home, or are you looking into investment properties?",
    });
  }
  // 16. Negotiation / Pricing flexibility
  else if (text.includes('negotiable') || text.includes('discount') || text.includes('best price') || text.includes('offer')) {
    chunks.push({
      type: 'text',
      data: "Honestly, most of our developers do have some flexibility on closing costs or slight price adjustments, especially if you have mortgage pre-approval ready or a flexible closing date. If you see a unit you like, I can check what incentives are currently on the table.",
    });
  }
  // 17. Default consultative response
  else {
    triggerPropertySearch(
      {},
      "Makes sense. Let me share a few of our featured residences with you so you can get a quick sense of current inventory and pricing:",
      "What kind of budget or property type feels like the right fit for what you have in mind?"
    );
  }

  // Create standard Vercel AI SDK data-stream response stream
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      for (const chunk of chunks) {
        if (chunk.type === 'text') {
          // Stream words in small natural packets with tiny delays to simulate human typing
          const words = chunk.data.split(' ');
          for (let i = 0; i < words.length; i++) {
            const word = words[i] + (i < words.length - 1 ? ' ' : '');
            const line = `0:${JSON.stringify(word)}\n`;
            controller.enqueue(encoder.encode(line));
            await new Promise((r) => setTimeout(r, 15));
          }
        } else if (chunk.type === 'tool_call') {
          const line = `9:${JSON.stringify(chunk.data)}\n`;
          controller.enqueue(encoder.encode(line));
          await new Promise((r) => setTimeout(r, 40));
        } else if (chunk.type === 'tool_result') {
          const line = `a:${JSON.stringify(chunk.data)}\n`;
          controller.enqueue(encoder.encode(line));
          await new Promise((r) => setTimeout(r, 40));
        }
      }

      // Finish message chunk matching Vercel AI SDK protocol
      const finishLine = `d:${JSON.stringify({ finishReason: 'stop', usage: { promptTokens: 50, completionTokens: 30 } })}\n`;
      controller.enqueue(encoder.encode(finishLine));
      controller.close();
    },
  });

  return stream;
}
