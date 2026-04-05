"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const beforeItems = [
  "Generic website presence with no conversion strategy",
  "Disconnected tools and platforms that don't communicate",
  "Manual, time-consuming workflows that don't scale",
  "Unpredictable lead flow with no qualification system",
  "No architecture connecting traffic to revenue",
];

const afterItems = [
  "Conversion-engineered digital system built to close",
  "Integrated CRM + automation stack working as one",
  "Workflows that run without you — 24 hours a day",
  "Qualified leads delivered on a repeatable path",
  "A connected system where every layer compounds",
];

export default function BeforeAfterSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(37,99,235,0.03),transparent)]" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">The Transformation</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
            What changes when the
            <br />
            <span className="text-white/28">system is built right.</span>
          </h2>
        </FadeIn>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-0 items-stretch">

          {/* Before panel */}
          <FadeIn direction="left">
            <div
              className="rounded-2xl md:rounded-r-none md:rounded-l-2xl p-7 md:p-8 h-full border border-white/[0.06] md:border-r-0"
              style={{ background: "rgba(255,255,255,0.015)" }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-5 h-5 rounded-full border border-white/[0.12] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-[0.6875rem] font-semibold text-white/28 uppercase tracking-[0.14em]">Before</p>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.3rem] shrink-0 w-4 h-4 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.25" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-white/30 text-[0.8125rem] leading-[1.68]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Center divider */}
          <div className="flex flex-col items-center justify-center py-6 md:py-0 px-0 md:px-4 relative">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent left-1/2" />
            {/* Arrow orb */}
            <motion.div
              animate={!prefersReduced ? { scale: [0.95, 1.05, 0.95] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="absolute w-12 h-12 rounded-full bg-nexus-blue/10 blur-xl" />
              <div className="w-8 h-8 rounded-full border border-glow-blue/20 bg-black flex items-center justify-center relative">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-glow-blue/60">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
            {/* Horizontal connector — mobile */}
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-white/[0.06] to-transparent mt-3" />
          </div>

          {/* After panel */}
          <FadeIn direction="right">
            <div
              className="rounded-2xl md:rounded-l-none md:rounded-r-2xl p-7 md:p-8 h-full border border-glow-blue/[0.12] md:border-l-0 relative overflow-hidden"
              style={{ background: "rgba(37,99,235,0.04)" }}
            >
              {/* Subtle top-edge glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/25 to-transparent" />

              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-5 h-5 rounded-full border border-glow-blue/25 bg-nexus-blue/10 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 4.5-5" stroke="rgba(77,163,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase" style={{ color: "rgba(77,163,255,0.65)" }}>
                  After
                </p>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: i * 0.07 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.3rem] shrink-0 w-4 h-4 rounded-full border border-glow-blue/22 bg-nexus-blue/8 flex items-center justify-center">
                      <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l1.5 1.5L6.5 2" stroke="rgba(77,163,255,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/58 text-[0.8125rem] leading-[1.68]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
