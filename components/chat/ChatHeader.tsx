'use client';

import React from 'react';

interface ChatHeaderProps {
  onClose?: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 py-4 bg-[#7047eb] text-white z-10 shadow-sm">
      <div className="flex items-center gap-3">
        {/* White circular badge with purple bot icon */}
        <div className="w-9 h-9 rounded-full bg-white text-[#7047eb] flex items-center justify-center font-bold text-sm shadow-md">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a5 5 0 0 1 5 5v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a5 5 0 0 1 5-5h2V5.72A2.002 2.002 0 0 1 12 2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
          </svg>
        </div>

        {/* Agent Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-white tracking-tight leading-tight">Aura</h2>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[11px] text-white/80 font-medium">Horizon Real Estate Advisor</p>
        </div>
      </div>

      {/* Down arrow / collapse chevron matching reference image */}
      <button
        onClick={onClose}
        aria-label="Minimize Chat"
        className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </header>
  );
}
