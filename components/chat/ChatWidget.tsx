'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';

interface ChatWidgetProps {
  fullScreen?: boolean;
}

const INITIAL_GREETING =
  'Hey there! Welcome to Horizon Properties. Are you looking for a new home, or more of an investment opportunity? I can help you find something that fits.';

const INITIAL_QUICK_REPLIES = [
  'Looking for a home',
  'Investment opportunity',
  'Commercial space',
  'Just exploring options',
];

export default function ChatWidget({ fullScreen = false }: ChatWidgetProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome-msg',
        role: 'assistant',
        content: INITIAL_GREETING,
      },
    ],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick replies disappear after the user sends their first message
  const hasUserSentMessage = messages.some((m) => m.role === 'user');

  // Auto-scroll to bottom on message list updates or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleQuickReplySelect = (reply: string) => {
    append({
      role: 'user',
      content: reply,
    });
  };

  return (
    <div
      className={`flex flex-col bg-white border border-purple-100 transition-all ${
        fullScreen
          ? 'w-full h-screen rounded-none'
          : 'w-full max-w-md h-[680px] max-h-[90vh] rounded-3xl shadow-2xl shadow-purple-500/15 overflow-hidden'
      }`}
    >
      {/* Header */}
      <ChatHeader />

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {messages.map((message, idx) => (
          <ChatBubble
            key={message.id || idx}
            message={message}
            isLast={idx === messages.length - 1}
          />
        ))}

        {/* Typing indicator when awaiting assistant response */}
        {isLoading && <TypingIndicator />}

        {/* Initial Quick Replies shown until the user sends their first message */}
        {!hasUserSentMessage && (
          <div className="pt-2">
            <QuickReplies
              replies={INITIAL_QUICK_REPLIES}
              onSelect={handleQuickReplySelect}
            />
          </div>
        )}

        <div ref={messagesEndRef} className="h-1" />
      </div>

      {/* Input Field */}
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
