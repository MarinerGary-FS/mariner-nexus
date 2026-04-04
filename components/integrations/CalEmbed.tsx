"use client";

/**
 * Cal.com Booking Embed
 *
 * INTEGRATION PLACEHOLDER
 * ─────────────────────────────────────────────────────────────────────────────
 * To activate: replace CAL_USERNAME and CAL_EVENT_SLUG with your Cal.com
 * credentials and uncomment the Cal.com embed script in app/layout.tsx.
 *
 * Cal.com embed docs: https://cal.com/docs/enterprise-features/embed
 *
 * Option 1 — Inline embed (recommended):
 *   Add to layout.tsx head:
 *   <Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />
 *   Then set type="inline" below.
 *
 * Option 2 — Popup button:
 *   Use Cal("ui", { ... }) and Cal("on", { ... }) API.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const CAL_USERNAME = "YOUR_CAL_USERNAME"; // TODO: replace with real Cal.com username
const CAL_EVENT_SLUG = "strategy-call"; // TODO: replace with real event slug

export default function CalEmbed() {
  // When Cal.com is connected, replace this with:
  // <div data-cal-link={`${CAL_USERNAME}/${CAL_EVENT_SLUG}`} data-cal-config='{"theme":"dark"}' className="w-full min-h-[500px]" />

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 py-16 px-8 text-center min-h-[400px]">
        {/* Placeholder UI */}
        <div className="w-14 h-14 rounded-full border border-glow-blue/30 bg-nexus-blue/10 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="17" rx="2" stroke="#4DA3FF" strokeWidth="1.5" />
            <path d="M3 9h18M8 2v4M16 2v4" stroke="#4DA3FF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <p className="text-white/70 font-semibold text-base mb-2">
            Cal.com Booking
          </p>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs">
            Booking calendar will appear here once Cal.com is connected.
          </p>
        </div>

        {/* Integration status badge */}
        <span className="text-xs font-semibold bg-yellow-500/10 text-yellow-400/80 border border-yellow-500/20 px-3 py-1.5 rounded-full">
          ⚡ Integration Placeholder — Awaiting Cal.com Credentials
        </span>

        <a
          href={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-nexus-blue hover:bg-glow-blue text-white text-sm font-semibold transition-colors"
        >
          Book via Cal.com
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
