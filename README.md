# PropChat AI

PropChat AI is an AI-powered real estate chatbot that helps agencies qualify leads, recommend properties, calculate mortgage payments, and schedule property viewings through natural conversations.

## Features

- **Conversational AI:** Provides natural, context-aware responses to property inquiries.
- **Lead Qualification:** Identifies buyer requirements, budget, decision-making authority, and purchase timeline using the BANT framework.
- **Property Recommendations:** Displays interactive property cards with pricing, specifications, amenities, and viewing options.
- **Mortgage Calculator:** Calculates estimated monthly payments, down payments, loan amounts, and interest.
- **Viewing Scheduler:** Supports property viewing requests and booking confirmations.
- **Multiple AI Modes:** Supports a built-in offline engine, Groq, and Google Gemini.
- **Demo Interfaces:** Includes a landing page, full-screen chatbot, and a simulated real estate website with an embedded chat widget.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel AI SDK
- Groq and Google Gemini
- Vercel

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/propchat-ai.git
cd propchat-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the AI Provider (Optional)

The built-in engine can run without an API key. To use Groq, create a `.env.local` file in the project root:

```env
GROQ_API_KEY=your_api_key
```

Alternatively, configure `GEMINI_API_KEY` to use Google Gemini.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy PropChat AI to [Vercel](https://vercel.com) by importing your GitHub repository. Configure the required environment variables in your Vercel project settings when using an external AI provider.

## Project Structure

```text
app/
├── api/
│   └── chat/
│       └── route.ts
├── demo/
│   └── page.tsx
├── widget-demo/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── chat/
    ├── ChatBubble.tsx
    ├── ChatHeader.tsx
    ├── ChatInput.tsx
    ├── ChatWidget.tsx
    ├── PropertyCard.tsx
    ├── QuickReplies.tsx
    └── TypingIndicator.tsx

lib/
├── ai/
│   ├── mock-engine.ts
│   ├── property-data.ts
│   ├── system-prompt.ts
│   └── tools.ts
├── types.ts
└── utils.ts

package.json
tailwind.config.ts
```
