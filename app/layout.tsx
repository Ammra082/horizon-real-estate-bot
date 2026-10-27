import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PropChat AI - Intelligent Real Estate Chatbot',
  description:
    'AI-powered conversational agent for real estate. Qualify leads 24/7, showcase property listings, and schedule instant client viewings automatically.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
