"use client";

import { useState } from "react";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const REDIRECT_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default function Home() {
  const [loading, setLoading] = useState(false);

  function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!e.target.value) return;
    setLoading(true);
    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 250);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)" }}>
      {/* Nav */}
      <nav className="w-full px-8 py-4 flex items-center border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚖️</span>
          <span className="text-white font-semibold tracking-wide text-sm">CLE Tracker</span>
        </div>
        <div className="ml-auto flex items-center gap-6 text-slate-400 text-sm">
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Features</span>
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Pricing</span>
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Sign In</span>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Gold accent line */}
        <div className="w-16 h-0.5 mb-10 fade-in-up" style={{ background: "linear-gradient(90deg, transparent, #b8972a, transparent)" }} />

        <h1
          className="fade-in-up text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Get ready to seamlessly track your CLE compliance.
        </h1>

        <p className="fade-in-up-delay mt-5 text-lg text-slate-300 font-medium">
          First, select your state
        </p>

        <div className="fade-in-up-delay-2 mt-6 w-full max-w-sm">
          <div className="relative">
            <select
              onChange={handleStateChange}
              disabled={loading}
              className="w-full appearance-none rounded-lg px-4 py-3 pr-10 text-slate-800 font-medium bg-white border border-slate-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all disabled:opacity-70 cursor-pointer text-sm"
              defaultValue=""
            >
              <option value="" disabled>Select your state…</option>
              {STATES.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              {loading ? (
                <svg className="animate-spin h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>

          {loading && (
            <p className="mt-3 text-xs text-slate-400 animate-pulse">
              Loading your compliance dashboard…
            </p>
          )}
        </div>

        {/* Trust badges */}
        <div className="fade-in-up-delay-2 mt-12 flex items-center gap-6 text-slate-500 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500">✓</span>
            <span>Bar-approved tracking</span>
          </div>
          <div className="w-px h-3 bg-slate-600" />
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500">✓</span>
            <span>MCLE compliant</span>
          </div>
          <div className="w-px h-3 bg-slate-600" />
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500">✓</span>
            <span>SOC 2 certified</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 py-4 border-t border-slate-700/50 flex items-center justify-between text-slate-500 text-xs">
        <span>© 2026 CLE Tracker, Inc. All rights reserved.</span>
        <span>Trusted by attorneys in all 50 states</span>
      </footer>
    </div>
  );
}
