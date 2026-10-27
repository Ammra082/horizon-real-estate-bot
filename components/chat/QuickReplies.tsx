'use client';

import React from 'react';

interface QuickRepliesProps {
  replies: string[];
  onSelect: (reply: string) => void;
}

export default function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="py-2.5 animate-fadeIn">
      <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto gap-2 no-scrollbar pb-1">
        {replies.map((reply, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(reply)}
            className="flex-shrink-0 text-xs px-3.5 py-1.5 rounded-full border border-purple-200 text-[#7047eb] font-medium bg-purple-50/70 hover:bg-[#7047eb] hover:text-white hover:border-[#7047eb] transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#7047eb] active:scale-95"
          >
            {reply}
          </button>
        ))}
      </div>
    </div>
  );
}
