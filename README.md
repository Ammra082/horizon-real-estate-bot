# 🏠 PropChat AI — Next-Gen Conversational Real Estate Chatbot

PropChat AI is a high-converting, human-like AI chatbot built for real estate agencies, brokers, and developers. It qualifies leads, showcases properties with interactive cards, calculates mortgage EMIs, and books client viewings directly inside the chat.

Designed specifically to be deployed on **Vercel** and pitched to business owners to boost their lead conversion rates.

---

## 🌟 Key Features

1. **Human-Like Personality (Zero Robotic Sound)**:
   - Configured as **Aura**, a senior real estate advisor with 8 years of experience.
   - Text message formatting with natural contractions, consultative pacing, and smooth deflections.
   - **Strict Zero Emojis**: Speaks with grounded professionalism so it never looks like generic AI spam.

2. **Interactive Property Cards**:
   - Embeds rich property cards with photos, pricing, bed/bath stats, square footage, amenities, and "Schedule Visit" buttons directly inside the chat stream.

3. **Autonomous Lead Qualification (BANT Framework)**:
   - Discovers **Budget**, **Authority**, **Need**, and **Timeline** organically through conversation without boring interrogation forms.

4. **Live EMI & Mortgage Calculator**:
   - Computes monthly payments, down payments, loan amounts, and interest breakdowns on the fly.

5. **Instant Site Viewing Scheduler**:
   - Confirms property tour appointments and issues instant confirmation summaries.

6. **100% Free / Zero Paid API Requirement**:
   - **Zero-Key Mode**: Works out of the box with built-in consultative intelligence — no API key needed at all!
   - **Free Cloud LLM Providers**: Compatible with **Groq Cloud** (free Llama 3.3 70B, no credit card needed) and **Google Gemini Free Tier**.

7. **Showcase Pitch Pages**:
   - `/` — SaaS pitch landing page to show agency owners the value proposition, stats, and multichannel reach.
   - `/demo` — Fullscreen dedicated conversation experience.
   - `/widget-demo` — Simulated luxury real estate website showing the floating widget integration.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Choose Your AI Mode (100% Free)

You have two free options:

- **Option A (Zero Keys)**: You do not need to configure anything! PropChat AI runs its built-in engine right away.
- **Option B (Free Groq Cloud)**:
  1. Get a free API key at [console.groq.com/keys](https://console.groq.com/keys) (Takes 30 seconds, NO credit card needed).
  2. Create a `.env.local` file:
     ```env
     GROQ_API_KEY=gsk_your_free_key_here
     ```

### 3. Run Dev Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel (For Client Pitches)

1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PropChat AI"
   git branch -M main
   git remote add origin https://github.com/your-username/propchat-ai.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. *(Optional)* Add `GROQ_API_KEY` or `GEMINI_API_KEY` under Environment Variables (or leave empty to use the zero-key built-in engine).
5. Click **Deploy**!

Your live pitch demo will be available at your custom `propchat-ai.vercel.app` URL within 60 seconds!

---

## 💼 How to Pitch This to Real Estate Businesses

When presenting to a real estate broker or agency owner:

1. **Open the Landing Page (`/`)**: Show them the clean value proposition — *"Your Smartest Sales Agent Never Sleeps"*, 24/7 responsiveness, and 3x lead qualification rate.
2. **Open the Widget Demo (`/widget-demo`)**: Click the floating chat bubble on the bottom-right of the sample agency website to demonstrate how seamless it embeds on their existing WordPress, Webflow, or custom site.
3. **Showcase Property Recommendations**: Click *"Looking for a home"* or type *"Show me 3-bedroom villas"* to demonstrate the interactive property cards.
4. **Showcase Mortgage Assistance**: Ask *"What would the EMI be for $450k?"* to show the financial tool.
5. **Showcase Lead Booking**: Type *"Can I visit this property on Saturday?"* to demonstrate how client viewings are captured automatically.
6. **Offer Multichannel Integration**: Explain that the same engine can connect to their WhatsApp Business API, Instagram DMs, and website!

---

## 🛠️ Project Structure

```
├── app/
│   ├── api/chat/route.ts      # Multi-provider streaming endpoint (Groq / Gemini / Offline)
│   ├── demo/page.tsx          # Fullscreen chat demo
│   ├── widget-demo/page.tsx   # Simulated real estate website with floating widget
│   ├── globals.css            # Tailwind styles & smooth animations
│   ├── layout.tsx             # Root layout with Inter typography
│   └── page.tsx               # SaaS pitch & marketing landing page
├── components/
│   └── chat/
│       ├── ChatBubble.tsx     # Message bubbles, interactive property & EMI cards
│       ├── ChatHeader.tsx     # Agent avatar, name, and online status badge
│       ├── ChatInput.tsx      # Clean input with submit-on-enter & send button
│       ├── ChatWidget.tsx     # Chat orchestrator with useChat and auto-scroll
│       ├── PropertyCard.tsx   # Interactive property cards with specs & actions
│       ├── QuickReplies.tsx   # Pill buttons for instant discovery
│       └── TypingIndicator.tsx# Staggered 3-dot typing animation
├── lib/
│   ├── ai/
│   │   ├── mock-engine.ts     # Zero-key offline consultative engine
│   │   ├── property-data.ts   # 12 curated real estate listings & search logic
│   │   ├── system-prompt.ts   # Priya Sharma personality & consultative guidelines
│   │   └── tools.ts           # Vercel AI SDK tool definitions (search, EMI, visit)
│   ├── types.ts               # Full TypeScript definitions
│   └── utils.ts               # Formatting and utility helpers
├── package.json
└── tailwind.config.ts
```
