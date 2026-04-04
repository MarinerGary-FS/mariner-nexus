"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const trustSignals = [
  { label: "30-Minute Call", note: "Focused, no fluff" },
  { label: "No Obligation", note: "Clarity before commitment" },
  { label: "Fast Delivery", note: "Systems launched on schedule" },
];

export default function ConversionSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden noise-overlay">
      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="container-tight relative text-center">
        <FadeIn>
          <p className="eyebrow mb-6">Ready to Build</p>

          <h2 className="text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.035em] text-white leading-[1.0] mb-3 max-w-2xl mx-auto">
            If your business is outgrowing your systems —
          </h2>
          <h2 className="text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.035em] leading-[1.0] mb-8 text-white/30 max-w-2xl mx-auto">
            it&apos;s time to build the infrastructure that matches.
          </h2>

          <p className="text-white/38 text-[0.9375rem] max-w-md mx-auto leading-[1.7] mb-10">
            Book a strategy call. We&apos;ll map the system, identify the gaps, and define
            the right build — no pitch, no pressure.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-colors duration-200 glow-ring"
              >
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white/45 hover:text-white/75 text-sm font-medium transition-colors duration-200"
              >
                View the Work First
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={0.15}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.018]">
            {trustSignals.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-7 py-4 ${
                  i < trustSignals.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/[0.06]" : ""
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-glow-blue/40 shrink-0" />
                <div className="text-left">
                  <p className="text-white/55 text-[0.8125rem] font-semibold leading-none mb-0.5">{item.label}</p>
                  <p className="text-white/22 text-[0.6875rem]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
