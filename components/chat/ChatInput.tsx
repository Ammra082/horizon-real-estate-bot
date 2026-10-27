'use client';

import React from 'react';

interface ChatInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: ChatInputProps) {
  const isSendDisabled = !input.trim() || isLoading;

  return (
    <div className="bg-white border-t border-gray-100 p-3 sm:p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Message..."
            disabled={isLoading}
            className="w-full px-4 py-2.5 text-sm bg-white text-gray-900 placeholder-gray-400 rounded-full border border-gray-200 focus:border-[#7047eb] focus:outline-none focus:ring-2 focus:ring-[#7047eb]/20 transition-all disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={isSendDisabled}
          aria-label="Send message"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7047eb] text-white flex items-center justify-center hover:bg-[#5f34dc] active:scale-95 transition-all shadow-md shadow-purple-500/20 disabled:opacity-40 disabled:hover:bg-[#7047eb] disabled:active:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#7047eb] focus:ring-offset-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
