"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cal.com Booking Embed — V3
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads from environment variables (set in .env.local):
 *   NEXT_PUBLIC_CAL_USERNAME=your-cal-username
 *   NEXT_PUBLIC_CAL_EVENT_SLUG=strategy-call
 *
 * When both are present:
 *   Renders a real Cal.com inline embed via the official embed script.
 *
 * When not configured:
 *   Renders a clean, premium placeholder with a direct booking link fallback.
 *
 * Cal.com embed docs: https://cal.com/docs/enterprise-features/embed
 * ─────────────────────────────────────────────────────────────────────────────
 */

const CAL_USERNAME  = process.env.NEXT_PUBLIC_CAL_USERNAME  ?? "";
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG ?? "strategy-call";

const isConfigured = CAL_USERNAME !== "" && CAL_USERNAME !== "YOUR_CAL_USERNAME";

export default function CalEmbed() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured) return;

    // Load Cal.com embed script once
    const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isConfigured || !scriptLoaded || !embedRef.current) return;
    // Initialize Cal inline embed
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;
    if (!Cal) return;
    Cal("init", { origin: "https://app.cal.com" });
    Cal("inline", {
      elementOrSelector: embedRef.current,
      calLink: `${CAL_USERNAME}/${CAL_EVENT_SLUG}`,
      config: {
        layout: "month_view",
        theme: "dark",
      },
    });
    Cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [scriptLoaded]);

  if (isConfigured) {
    return (
      <div className="glass-card rounded-2xl overflow-hidden">
        <div ref={embedRef} className="w-full min-h-[500px]" />
      </div>
    );
  }

  // ── Clean placeholder when not configured ──
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 py-14 px-8 text-center min-h-[380px]">
        {/* Calendar icon */}
        <div className="w-14 h-14 rounded-full border border-glow-blue/28 bg-nexus-blue/8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="17" rx="2" stroke="#4DA3FF" strokeWidth="1.5" />
            <path d="M3 9h18M8 2v4M16 2v4" stroke="#4DA3FF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="14" r="1" fill="#4DA3FF" opacity="0.6" />
            <circle cx="12" cy="14" r="1" fill="#4DA3FF" opacity="0.6" />
            <circle cx="16" cy="14" r="1" fill="#4DA3FF" opacity="0.6" />
          </svg>
        </div>

        <div>
          <p className="text-white/70 font-semibold text-base mb-2">
            Schedule a Strategy Call
          </p>
          <p className="text-white/32 text-sm leading-relaxed max-w-[260px]">
            Booking calendar connects once Cal.com credentials are added to{" "}
            <code className="text-glow-blue/60 text-[0.75rem]">.env.local</code>
          </p>
        </div>

        {/* Integration status */}
        <span className="text-xs font-semibold bg-yellow-500/8 text-yellow-400/70 border border-yellow-500/18 px-3 py-1.5 rounded-full">
          Integration Pending — Add NEXT_PUBLIC_CAL_USERNAME
        </span>

        {/* Direct Cal.com link as fallback */}
        <a
          href={`https://cal.com/${CAL_USERNAME || "your-username"}/${CAL_EVENT_SLUG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-colors duration-200"
        >
          Book via Cal.com
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
