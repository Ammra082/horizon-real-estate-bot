'use client';

import React from 'react';
import { AppointmentSlot } from '@/lib/types';

interface AppointmentPickerProps {
  slots?: AppointmentSlot[];
  onSelect?: (slot: AppointmentSlot) => void;
  propertyTitle?: string;
}

export default function AppointmentPicker({
  slots = [],
  onSelect,
  propertyTitle = 'Horizon Properties Tour',
}: AppointmentPickerProps) {
  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Private Viewing Tour: ' + propertyTitle
  )}&details=${encodeURIComponent(
    'Private in-person property viewing with Aura from Horizon Properties. Please select a time that fits your availability.'
  )}&location=${encodeURIComponent('Horizon Properties Downtown Metro City')}`;

  return (
    <div className="w-full max-w-sm my-2 bg-white rounded-2xl border border-blue-100 p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
          📅
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            Schedule a Private Viewing
          </h4>
          <p className="text-xs text-gray-500">Pick a time that fits your availability</p>
        </div>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed mb-3">
        Book directly onto our team calendar. Our listing specialist will meet you at the property with all disclosures.
      </p>

      {/* Direct Google Calendar Button */}
      <a
        href={calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
      >
        <span>Open Google Calendar to Book</span>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* Available Slots Grid if provided */}
      {slots.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
            Or choose a fast slot:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                disabled={!slot.available}
                onClick={() => slot.available && onSelect && onSelect(slot)}
                className="p-2.5 rounded-lg border border-gray-200 hover:border-blue-500 text-left text-xs transition-colors"
              >
                <span className="block font-semibold text-gray-800">{slot.time}</span>
                <span className="block text-[10px] text-gray-400">{slot.date}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
