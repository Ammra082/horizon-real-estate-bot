'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#7047eb] selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-purple-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#5c35d9] to-[#7047eb] flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1a1a2e]">
                PropChat<span className="text-[#7047eb]">.ai</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-400 -mt-1">
                Real Estate AI Assistant
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#7047eb] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#7047eb] transition-colors">How it Works</a>
            <a href="#channels" className="hover:text-[#7047eb] transition-colors">Channels</a>
            <a href="#stats" className="hover:text-[#7047eb] transition-colors">Performance</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/widget-demo"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#7047eb] transition-colors"
            >
              Widget View
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7047eb] hover:bg-[#5f34dc] active:bg-[#522cc2] transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35"
            >
              See Live Demo
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f8f7ff] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e9e4fc_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3f0fc] border border-purple-200/70 text-[#7047eb] text-xs sm:text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#7047eb] animate-pulse"></span>
            Built for Modern Real Estate Agencies & Brokers
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1a1a2e] tracking-tight leading-[1.1] mb-6">
            Your Smartest Sales Agent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7047eb] to-[#9b6ef3]">
              Never Sleeps
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 font-normal">
            AI-powered conversations that qualify leads, show properties, and book visits — all while your team focuses on closing deals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#7047eb] hover:bg-[#5f34dc] active:scale-[0.98] transition-all shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 gap-2"
            >
              <span>See Live Demo</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/widget-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-slate-800 bg-white border border-purple-200 hover:border-purple-300 hover:bg-[#f3f0fc]/50 active:scale-[0.98] transition-all shadow-sm gap-2"
            >
              <span>Try Widget Demo</span>
              <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Zero Code Setup
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant MLS / Portfolio Sync
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Works on All CMS & Websites
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-[#1a1a2e] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors text-center">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
                24/7
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                Always Available
              </div>
              <p className="mt-1 text-xs text-slate-400">Never miss midnight inquiries</p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors text-center">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
                &lt; 2s
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                Response Time
              </div>
              <p className="mt-1 text-xs text-slate-400">Instant engagement with zero lag</p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors text-center">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
                3x
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                More Leads Qualified
              </div>
              <p className="mt-1 text-xs text-slate-400">Pre-filtered high-intent buyers</p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors text-center">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
                85%
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                Customer Satisfaction
              </div>
              <p className="mt-1 text-xs text-slate-400">Loved by home buyers and agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#f8f7ff] border-y border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7047eb] font-semibold text-sm uppercase tracking-wider">Powerful Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] tracking-tight mt-2 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered specifically for real estate workflows to automate client discovery, showcase listings, and schedule on-site viewings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Natural Conversations</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Talks like a real person, not a robot. Your customers won&apos;t even know it is AI. Handles complex buyer questions with empathy and nuance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Property Showcase</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Shows beautiful property cards with images, pricing, and details right in the chat. Clients can view specs and take immediate action.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Smart Lead Qualification</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Automatically qualifies leads by understanding budget, timeline, and preferences. Routes high-value leads instantly to your top agents.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Instant Appointment Booking</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Lets customers book property visits directly through the conversation. Syncs with your agent calendars and sends automated confirmations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Multi-Channel Ready</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Deploy on your website, WhatsApp, Instagram, or Facebook Messenger. Engage buyers wherever they spend their time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-6 group-hover:bg-[#7047eb] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Works For Any Business</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Real estate today. E-commerce, healthcare, hospitality tomorrow. Scalable architecture configured to your exact catalog and sales playbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#7047eb] font-semibold text-sm uppercase tracking-wider">Fast & Seamless Onboarding</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] tracking-tight mt-2 mb-4">
              Up and Running in 3 Steps
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We handle the AI training, data ingestion, and testing so you can start capturing leads right away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-8 rounded-2xl bg-[#f8f7ff] border border-purple-100 relative">
              <div className="w-12 h-12 rounded-full bg-[#7047eb] text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Share Your Business Info</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Tell us about your properties, services, and brand voice. Feed in brochures, listings URL, or custom agent FAQs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f7ff] border border-purple-100 relative">
              <div className="w-12 h-12 rounded-full bg-[#7047eb] text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">We Build Your Chatbot</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We create a custom AI agent trained on your specific business, tuning tone, qualification criteria, and response logic.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f7ff] border border-purple-100 relative">
              <div className="w-12 h-12 rounded-full bg-[#7047eb] text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Deploy Everywhere</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Install on your website with one line of code. Connect WhatsApp and Instagram to start converting visitors on autopilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section id="channels" className="py-20 bg-[#f8f7ff] border-t border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#7047eb] font-semibold text-sm uppercase tracking-wider">Omnichannel Reach</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] tracking-tight mt-2 mb-3">
            One Bot. Every Channel.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-12 max-w-xl mx-auto">
            Same great experience across all platforms. Keep all client conversations unified.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Website */}
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col items-center hover:border-purple-500/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-base">Website</h4>
              <p className="text-xs text-slate-500 mt-1">Floating Widget & Full Page</p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col items-center hover:border-emerald-500/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-base">WhatsApp</h4>
              <p className="text-xs text-slate-500 mt-1">Official Cloud API</p>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col items-center hover:border-pink-500/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-base">Instagram</h4>
              <p className="text-xs text-slate-500 mt-1">DM Auto-responder</p>
            </div>

            {/* Facebook Messenger */}
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col items-center hover:border-purple-500/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#f3f0fc] text-[#7047eb] flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-base">Facebook</h4>
              <p className="text-xs text-slate-500 mt-1">Messenger Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7047eb_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Ready to Transform Your Customer Conversations?
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            See how PropChat AI can help your business convert more leads into customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#7047eb] hover:bg-[#5f34dc] active:scale-[0.98] transition-all shadow-xl shadow-purple-600/30 gap-2"
            >
              <span>See Live Demo</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/widget-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 active:scale-[0.98] transition-all gap-2"
            >
              <span>Try On Real Website</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#7047eb] flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
            <span className="font-bold text-slate-800 tracking-tight">PropChat AI</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} PropChat AI. All rights reserved. Built for intelligent real estate conversion.
          </p>
        </div>
      </footer>
    </div>
  );
}
