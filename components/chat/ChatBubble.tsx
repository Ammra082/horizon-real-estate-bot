'use client';

import React from 'react';
import { type Message } from 'ai';
import { Property, EMIResult, VisitBooking } from '@/lib/types';
import PropertyCard from './PropertyCard';

interface ChatBubbleProps {
  message: Message;
  isLast: boolean;
}

export default function ChatBubble({ message, isLast }: ChatBubbleProps) {
  const isUser = message.role === 'user';
  const animationClass = isLast ? 'animate-slideUp' : '';

  // Helper for loading labels based on tool name
  const getToolLoadingLabel = (toolName: string) => {
    switch (toolName) {
      case 'search_properties':
        return 'Looking up properties...';
      case 'calculate_emi':
        return 'Calculating EMI breakdown...';
      case 'schedule_visit':
        return 'Opening calendar...';
      default:
        return 'Working on your request...';
    }
  };

  return (
    <div
      className={`flex flex-col gap-1.5 my-3 ${
        isUser ? 'items-end' : 'items-start'
      } ${animationClass}`}
    >
      <div className={`flex gap-2.5 max-w-[92%] sm:max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Assistant Avatar matching user reference image */}
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7047eb] text-white flex items-center justify-center text-xs font-semibold shadow-sm mt-0.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a5 5 0 0 1 5 5v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a5 5 0 0 1 5-5h2V5.72A2.002 2.002 0 0 1 12 2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z" />
            </svg>
          </div>
        )}

        <div className="flex flex-col gap-2.5 w-full">
          {/* Main Text Bubble matching reference image (Lavender for Assistant, Purple for User) */}
          {message.content && (
            <div
              className={`px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap break-words shadow-xs ${
                isUser
                  ? 'bg-[#7047eb] text-white rounded-2xl rounded-tr-sm font-normal self-end'
                  : 'bg-[#f3f0fc] text-[#2d2745] rounded-2xl rounded-tl-sm self-start border border-purple-100/60'
              }`}
              dangerouslySetInnerHTML={{
                __html: message.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                  .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
              }}
            />
          )}

          {/* Tool Invocations */}
          {message.toolInvocations && message.toolInvocations.length > 0 && (
            <div className="flex flex-col gap-3 w-full">
              {message.toolInvocations.map((tool) => {
                const { toolCallId, toolName, state } = tool;

                // 1. Tool Call State (Loading)
                if (state === 'call' || state === 'partial-call') {
                  return (
                    <div
                      key={toolCallId}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-50 border border-purple-100 rounded-xl text-purple-800 text-xs font-medium w-fit animate-pulse"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#7047eb] animate-ping" />
                      <span>{getToolLoadingLabel(toolName)}</span>
                    </div>
                  );
                }

                // 2. Tool Result State
                if (state === 'result') {
                  // A. Search Properties
                  if (toolName === 'search_properties') {
                    const properties: Property[] = Array.isArray(tool.result)
                      ? tool.result
                      : tool.result?.properties || [];

                    if (properties.length === 0) {
                      return (
                        <div
                          key={toolCallId}
                          className="p-3 text-xs text-gray-500 bg-gray-50 rounded-xl border border-gray-100 italic"
                        >
                          No properties found matching those exact filters. Try broadening your budget or location.
                        </div>
                      );
                    }

                    return (
                      <div
                        key={toolCallId}
                        className="flex flex-col gap-3 w-full py-1 animate-fadeIn"
                      >
                        {properties.map((prop: Property) => (
                          <PropertyCard key={prop.id || prop.title} property={prop} />
                        ))}
                      </div>
                    );
                  }

                  // B. Calculate EMI
                  if (toolName === 'calculate_emi') {
                    const emiData: EMIResult = tool.result;
                    if (!emiData) return null;

                    return (
                      <div
                        key={toolCallId}
                        className="w-full max-w-sm bg-white rounded-2xl border border-purple-100 p-4 shadow-sm animate-fadeIn"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Estimated Monthly Payment
                            </h4>
                            <div className="text-xl font-bold text-[#7047eb] mt-0.5">
                              ${emiData.emi?.toLocaleString()}{' '}
                              <span className="text-xs font-normal text-gray-500">/ month</span>
                            </div>
                          </div>
                          <div className="p-2 bg-purple-50 text-[#7047eb] rounded-xl font-bold text-xs">
                            {emiData.interestRate}% p.a.
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                          <div>
                            <span className="text-gray-400 block text-[11px]">Property Price</span>
                            <span className="font-semibold text-gray-800">
                              ${emiData.propertyPrice?.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400 block text-[11px]">Down Payment</span>
                            <span className="font-semibold text-gray-800">
                              ${emiData.downPayment?.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400 block text-[11px]">Loan Amount</span>
                            <span className="font-semibold text-gray-800">
                              ${emiData.loanAmount?.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400 block text-[11px]">Loan Term</span>
                            <span className="font-semibold text-gray-800">
                              {emiData.loanTermYears} Years
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex justify-between items-center text-xs">
                          <span className="text-gray-500 font-medium">Total Payment</span>
                          <span className="font-bold text-gray-900">
                            ${emiData.totalPayment?.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  // C. Schedule Visit
                  if (toolName === 'schedule_visit') {
                    const booking: VisitBooking = tool.result;
                    if (!booking) return null;

                    return (
                      <div
                        key={toolCallId}
                        className="w-full max-w-sm bg-white rounded-2xl border border-purple-100 p-4 shadow-sm animate-fadeIn"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-purple-50 text-[#7047eb] flex items-center justify-center flex-shrink-0 font-bold">
                            📅
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">Viewing Details</h4>
                            <p className="text-xs text-[#7047eb] font-medium">
                              Select your preferred time slot
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs">
                          {booking.propertyTitle && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Property:</span>
                              <span className="font-semibold text-gray-800 text-right truncate max-w-[180px]">
                                {booking.propertyTitle}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-gray-100">
                          <a
                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                              'Horizon Properties Viewing: ' + (booking.propertyTitle || 'Property Tour')
                            )}&details=${encodeURIComponent(
                              'Private in-person property viewing tour with Aura from Horizon Properties.'
                            )}&location=${encodeURIComponent('Horizon Properties Downtown')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#7047eb] hover:bg-[#5f34dc] text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
                          >
                            <span>Open Google Calendar to Book</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    );
                  }
                }

                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
