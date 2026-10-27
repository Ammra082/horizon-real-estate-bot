'use client';

import React from 'react';
import Link from 'next/link';
import ChatWidget from '@/components/chat/ChatWidget';

export default function DemoPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-[#f1edff] to-[#e8e2fd] flex flex-col">
      {/* Subtle top header with back button and brand */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-purple-100/60 shadow-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7047eb] hover:text-[#5f34dc] transition-colors bg-purple-50 hover:bg-purple-100 border border-purple-200/60 px-3.5 py-1.5 rounded-full"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-[#7047eb] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Aura • Live Agent
          </div>
        </div>
      </header>

      {/* Centered ChatWidget with sleek card presentation */}
      <main className="w-full h-full flex-1 flex items-center justify-center p-4 pt-20">
        <ChatWidget fullScreen={false} />
      </main>
    </div>
  );
}
