'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ChatWidget from '@/components/chat/ChatWidget';

export default function WidgetDemoPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative flex flex-col">
      {/* Top Banner indicating preview mode */}
      <div className="bg-[#1a1a2e] text-white text-xs px-4 py-2 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Sample Website Integration Demo — Horizon Properties</span>
        </div>
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 font-medium underline text-xs"
        >
          ← Return to PropChat AI Pitch
        </Link>
      </div>

      {/* Horizon Properties Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              H
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Horizon<span className="text-emerald-600">Properties</span>
              </span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest -mt-1">
                Luxury Real Estate
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="text-emerald-600">Home</a>
            <a href="#properties" className="hover:text-emerald-600 transition-colors">Properties</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors">
              Schedule Viewing
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-emerald-500/30">
            Exclusive Architectural Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Discover luxury penthouses, modern waterfront villas, and bespoke urban residences tailored to your lifestyle.
          </p>
          <div className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2">
            <div className="flex-1 w-full px-3 py-2 text-left">
              <label className="block text-[11px] font-bold uppercase text-slate-400">Location</label>
              <input
                type="text"
                placeholder="Downtown, Marina, Suburbs..."
                className="w-full text-slate-900 text-sm font-medium focus:outline-none placeholder:text-slate-400"
                readOnly
                defaultValue="Downtown District"
              />
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
            <div className="flex-1 w-full px-3 py-2 text-left">
              <label className="block text-[11px] font-bold uppercase text-slate-400">Property Type</label>
              <input
                type="text"
                placeholder="Apartment, Villa, Penthouse"
                className="w-full text-slate-900 text-sm font-medium focus:outline-none placeholder:text-slate-400"
                readOnly
                defaultValue="Modern Penthouses"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Curated Portfolio</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured Listings</h2>
          </div>
          <p className="text-slate-500 text-sm mt-2 sm:mt-0 max-w-xs">
            Handpicked premium residences currently open for private viewings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-900 relative p-4 flex flex-col justify-between">
              <span className="self-start px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-semibold uppercase">
                Featured
              </span>
              <div>
                <span className="text-2xl font-black text-white">$1,250,000</span>
                <span className="text-xs text-slate-300 ml-1">USD</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-1">Azure Skyline Penthouse</h3>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Downtown Financial District, Floor 42
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 border-t border-slate-100 pt-4">
                <span>3 Beds</span>
                <span>•</span>
                <span>3.5 Baths</span>
                <span>•</span>
                <span>2,850 sq ft</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-56 bg-gradient-to-br from-emerald-800 to-slate-900 relative p-4 flex flex-col justify-between">
              <span className="self-start px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold uppercase">
                New Listing
              </span>
              <div>
                <span className="text-2xl font-black text-white">$2,400,000</span>
                <span className="text-xs text-slate-300 ml-1">USD</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-1">The Glass Oasis Villa</h3>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Hillside Crest Estates, Green Valley
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 border-t border-slate-100 pt-4">
                <span>5 Beds</span>
                <span>•</span>
                <span>6 Baths</span>
                <span>•</span>
                <span>5,200 sq ft</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-56 bg-gradient-to-br from-indigo-900 to-slate-900 relative p-4 flex flex-col justify-between">
              <span className="self-start px-2.5 py-1 rounded-md bg-purple-600 text-white text-xs font-semibold uppercase">
                Waterfront
              </span>
              <div>
                <span className="text-2xl font-black text-white">$980,000</span>
                <span className="text-xs text-slate-300 ml-1">USD</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-1">Harbor Point Residence</h3>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Marina Promenade Boulevard
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 border-t border-slate-100 pt-4">
                <span>2 Beds</span>
                <span>•</span>
                <span>2 Baths</span>
                <span>•</span>
                <span>1,740 sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 py-8 bg-white text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Horizon Properties LLC. All mock rights reserved.</p>
      </footer>

      {/* FLOATING CHAT WIDGET OVERLAY */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Expanded Chat Widget Modal */}
        {isOpen && (
          <div className="mb-4 w-[92vw] sm:w-[420px] h-[650px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-200 animate-in fade-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] text-white">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">Horizon Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                aria-label="Close Chat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full h-[calc(100%-48px)] overflow-hidden">
              <ChatWidget fullScreen={false} />
            </div>
          </div>
        )}

        {/* Floating Bubble Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full bg-[#7047eb] hover:bg-[#5f34dc] active:scale-95 text-white shadow-xl shadow-purple-500/40 flex items-center justify-center transition-all focus:outline-none focus:ring-4 focus:ring-purple-300"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
