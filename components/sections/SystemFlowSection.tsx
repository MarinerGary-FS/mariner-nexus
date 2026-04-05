"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const nodes = [
  {
    label: "Traffic",
    description: "Organic, paid, and referral channels",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentRgb: "77,163,255",
  },
  {
    label: "Website",
    description: "Conversion-ready digital infrastructure",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7h16" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="5" cy="5.5" r="0.75" fill="currentColor" />
        <circle cx="7.5" cy="5.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    accentRgb: "77,163,255",
  },
  {
    label: "Capture",
    description: "Forms, booking, and lead qualification",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    accentRgb: "99,179,255",
  },
  {
    label: "CRM",
    description: "Pipeline and contact management",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M4 6h12M4 10h8M4 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
      </svg>
    ),
    accentRgb: "125,211,252",
  },
  {
    label: "Automation",
    description: "Nurture sequences and follow-up",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l1.5 4h4l-3.25 2.5 1.25 4L10 11l-3.5 2.5 1.25-4L4.5 7h4L10 3z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    ),
    accentRgb: "125,211,252",
  },
  {
    label: "Revenue",
    description: "Closed deals and compounding growth",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M3 15l4-5 3 3 4-6 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentRgb: "77,163,255",
  },
];

export default function SystemFlowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(37,99,235,0.04),transparent)]" />

      <div className="container-tight relative" ref={ref}>
        {/* Header */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">The System</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-4">
            Every build is a connected system.
            <br />
            <span className="text-white/28">Not a collection of parts.</span>
          </h2>
          <p className="text-white/32 text-[0.9375rem] max-w-[420px] mx-auto leading-[1.7]">
            Traffic enters. Systems qualify. Revenue compounds.
          </p>
        </FadeIn>

        {/* Flow — desktop horizontal, mobile vertical */}
        <div className="hidden lg:flex items-start justify-between gap-0 relative">
          {/* Connector lines layer */}
          <div className="absolute top-[28px] left-0 right-0 flex items-center px-[calc(100%/12)]">
            {nodes.slice(0, -1).map((_, i) => (
              <div key={i} className="flex-1 relative h-px mx-2">
                <div className="absolute inset-0 bg-white/[0.06]" />
                {isInView && !prefersReduced && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: `rgba(77,163,255,0.22)` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </div>
            ))}
          </div>

          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center gap-4 flex-1 max-w-[140px]"
            >
              {/* Node icon */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl blur-md scale-[1.8]"
                  style={{ background: `rgba(${node.accentRgb},0.08)` }}
                />
                <div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center border"
                  style={{
                    background: `rgba(${node.accentRgb},0.06)`,
                    borderColor: `rgba(${node.accentRgb},0.15)`,
                    color: `rgba(${node.accentRgb},0.75)`,
                    boxShadow: `0 0 0 1px rgba(${node.accentRgb},0.05) inset`,
                  }}
                >
                  {node.icon}
                </div>
              </div>
              {/* Label */}
              <div>
                <p className="text-white/75 font-semibold text-[0.875rem] mb-1 tracking-tight">{node.label}</p>
                <p className="text-white/24 text-[0.6875rem] leading-[1.5] max-w-[110px]">{node.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow — mobile vertical */}
        <div className="lg:hidden flex flex-col gap-0 relative">
          {/* Vertical connector */}
          <div className="absolute left-[27px] top-[56px] bottom-[56px] w-px bg-gradient-to-b from-white/[0.06] via-glow-blue/[0.12] to-white/[0.06]" />

          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.38, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 py-3.5 relative z-10"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border"
                style={{
                  background: `rgba(${node.accentRgb},0.06)`,
                  borderColor: `rgba(${node.accentRgb},0.14)`,
                  color: `rgba(${node.accentRgb},0.7)`,
                }}
              >
                {node.icon}
              </div>
              <div>
                <p className="text-white/72 font-semibold text-[0.9375rem] mb-0.5">{node.label}</p>
                <p className="text-white/28 text-[0.8125rem] leading-[1.5]">{node.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
