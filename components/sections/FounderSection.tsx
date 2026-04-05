"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const stats = [
  {
    metric: "6",
    unit: "",
    label: "Production Systems Built",
    note: "Revenue · Authority · Creator · Community · Media · Operations",
    accentRgb: "77,163,255",
  },
  {
    metric: "AI",
    unit: "",
    label: "Automation-First Methodology",
    note: "Every system is designed to reduce manual work and improve decision velocity",
    accentRgb: "125,211,252",
  },
  {
    // Doctrine card — not a dashboard stat
    metric: "Strategy",
    unit: "",
    label: "Before a Single Line of Code",
    note: "No build starts without a mapped system — scoped, approved, and outcome-aligned",
    accentRgb: "37,99,235",
    isDoctrine: true,
  },
];

const capabilities = [
  "AI Workflow Design",
  "CRM Architecture",
  "Conversion Systems",
  "Brand Positioning",
  "Web Infrastructure",
  "Automation Strategy",
];

export default function FounderSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_55%_70%_at_100%_40%,rgba(37,99,235,0.055),transparent)]" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.032] to-transparent" />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — narrative + founder photo */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <p className="eyebrow mb-5">The Operator Behind the System</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.04] mb-3">
              Gary L Mariner II
            </h2>

            <p className="text-white/46 text-[0.9375rem] leading-[1.82] mb-4 max-w-[420px]">
              Mariner Nexus was built after watching the same story repeat: businesses with
              real potential, operating inside digital infrastructure that couldn&apos;t keep up.
              The gap wasn&apos;t effort — it was architecture.
            </p>

            {/* Bridge line — connects problem to operator */}
            <p className="text-white/62 text-[0.9375rem] leading-[1.72] mb-5 max-w-[420px] font-medium">
              That&apos;s the problem I built Mariner Nexus to solve.
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-[0.6875rem] font-medium text-white/28 bg-white/[0.035] border border-white/[0.055] px-2.5 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-glow-blue/20 pl-5 mb-8">
              <p className="text-white/35 text-[0.875rem] leading-[1.72] italic">
                &ldquo;Strategy without implementation is speculation.
                My job is to build the system — and make the work easier,
                faster, and more effective than it was before.&rdquo;
              </p>
            </blockquote>

            <Button href="/about" variant="secondary" size="md">
              The Vision Behind the Work
            </Button>
          </FadeIn>

          {/* Right — founder photo + stats */}
          <FadeIn direction="right" delay={0.1} className="order-1 lg:order-2">
            {/* Founder photo — answer to the narrative on the left */}
            <motion.div
              className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6 border border-white/[0.07]"
              style={{ boxShadow: "0 2px 0 0 rgba(255,255,255,0.05) inset, 0 20px 56px rgba(0,0,0,0.55)" }}
              whileHover={!prefersReduced ? { scale: 1.012, y: -3 } : {}}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/founder/gary-mariner-ii.png"
                alt="Gary L Mariner II — Founder, Mariner Nexus"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              {/* Blue atmospheric depth */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(37,99,235,0.1),transparent_60%)] pointer-events-none" />
              {/* Floating name badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-white/90 font-semibold text-[0.9375rem] leading-tight tracking-tight">
                    Gary L Mariner II
                  </p>
                  <p className="text-white/45 text-[0.75rem] mt-0.5">
                    Founder, Mariner Nexus
                  </p>
                </div>
                {/* Subtle MN mark */}
                <div className="w-7 h-7 rounded-full border border-white/[0.12] bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="rgba(77,163,255,0.5)" strokeWidth="0.75" />
                    <circle cx="7" cy="7" r="1.75" fill="rgba(77,163,255,0.85)" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Stats — below photo, aligned to it */}
            <StaggerContainer className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
              {stats.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    className="flex items-start gap-5 px-6 py-5 bg-black hover:bg-white/[0.016] transition-colors duration-300"
                    whileHover={!prefersReduced ? { x: 1.5 } : {}}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Metric */}
                    <div className="shrink-0 min-w-[60px]">
                      {item.isDoctrine ? (
                        // Doctrine card — word treatment, not number
                        <span
                          className="text-[1.125rem] font-bold leading-tight block"
                          style={{
                            background: `linear-gradient(135deg, rgba(${item.accentRgb},0.9), rgba(${item.accentRgb},0.5))`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {item.metric}
                        </span>
                      ) : (
                        <span className="text-[2.25rem] font-bold leading-none text-gradient">
                          {item.metric}
                          {item.unit && <span className="text-[1.375rem]">{item.unit}</span>}
                        </span>
                      )}
                    </div>
                    <div className="pt-0.5 flex-1">
                      <p className="text-white/70 font-semibold text-[0.875rem] mb-1 leading-snug tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-white/24 text-[0.75rem] leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust footnote */}
            <div className="mt-4 flex items-start gap-2.5 px-1">
              <div className="w-1 h-1 rounded-full bg-glow-blue/35 shrink-0 mt-1.5" />
              <p className="text-white/17 text-[0.75rem] leading-relaxed">
                All systems are designed for compounding returns. Infrastructure built today
                should work harder for your business six months from now.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
