'use client';

import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2.5 my-2 animate-fadeIn">
      {/* Assistant Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7047eb] text-white flex items-center justify-center text-xs font-semibold shadow-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a5 5 0 0 1 5 5v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a5 5 0 0 1 5-5h2V5.72A2.002 2.002 0 0 1 12 2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
        </svg>
      </div>

      {/* Bubble with "Thinking..." from reference image */}
      <div className="bg-[#f3f0fc] border border-purple-100/60 rounded-2xl rounded-tl-sm px-4 py-2.5 flex items-center gap-2 text-xs text-[#2d2745] font-medium shadow-xs">
        <span>Thinking...</span>
        <div className="flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#7047eb] animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '0.8s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#7047eb] animate-bounce"
            style={{ animationDelay: '150ms', animationDuration: '0.8s' }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#7047eb] animate-bounce"
            style={{ animationDelay: '300ms', animationDuration: '0.8s' }}
          />
        </div>
      </div>
    </div>
  );
}
