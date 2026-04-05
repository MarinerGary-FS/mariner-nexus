"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const signals = [
  { metric: "6", label: "Production Systems Built" },
  { metric: "5+", label: "Industries Served" },
  { metric: "AI", label: "Automation-First Methodology" },
  { metric: "100%", label: "Custom — No Templates" },
];

export default function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div
      ref={ref}
      className="relative bg-black border-t border-b border-white/[0.045] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(37,99,235,0.04),transparent)]" />
      <div className="container-tight relative py-5 md:py-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-0 gap-y-4">
          {signals.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 px-6 md:px-0"
            >
              {/* Separator dot — not on first item on desktop */}
              {i > 0 && (
                <div className="hidden md:block w-px h-5 bg-white/[0.07] mx-3" />
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-[1.125rem] font-bold text-gradient leading-none tabular-nums">
                  {s.metric}
                </span>
                <span className="text-[0.75rem] text-white/28 font-medium tracking-tight">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
