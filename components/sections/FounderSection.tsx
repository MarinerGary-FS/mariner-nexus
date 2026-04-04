"use client";

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
  },
  {
    metric: "AI",
    unit: "",
    label: "Automation-First Methodology",
    note: "Every system is designed to reduce manual work and improve decision velocity",
  },
  {
    metric: "100",
    unit: "%",
    label: "Strategy Before Code",
    note: "No build starts without a mapped system — scoped, approved, and outcome-aligned",
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
      {/* Directional ambient — right-side depth source */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_55%_70%_at_100%_40%,rgba(37,99,235,0.06),transparent)]" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — founder context */}
          <FadeIn direction="left">
            <p className="eyebrow mb-5">The Operator Behind the System</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.04] mb-5">
              Gary L Mariner II
            </h2>

            <p className="text-white/42 text-[0.9375rem] leading-[1.82] mb-4 max-w-[420px]">
              Mariner Nexus was built by a systems thinker who kept seeing the same problem: businesses with real potential, operating inside digital infrastructure that couldn&apos;t keep up.
            </p>

            <p className="text-white/26 text-[0.875rem] leading-[1.76] mb-5 max-w-[420px]">
              Gary operates at the intersection of AI automation, conversion strategy, and premium design. Every engagement starts with a systems audit — not a brief — and ends with infrastructure engineered to run, scale, and compound over time.
            </p>

            {/* Capability tags — V3: adds visual specificity */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-[0.6875rem] font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-glow-blue/22 pl-5 mb-8">
              <p className="text-white/38 text-[0.875rem] leading-[1.72] italic">
                &ldquo;Strategy without implementation is speculation.
                My job is to build the system — and make the work easier,
                faster, and more effective than it was before.&rdquo;
              </p>
            </blockquote>

            <Button href="/about" variant="secondary" size="md">
              The Vision Behind the Work
            </Button>
          </FadeIn>

          {/* Right — stats + proof */}
          <FadeIn direction="right" delay={0.1}>
            <StaggerContainer className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
              {stats.map((item, i) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    className="flex items-start gap-6 p-7 bg-black hover:bg-white/[0.018] transition-colors duration-300"
                    whileHover={!prefersReduced ? { x: 2 } : {}}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Metric */}
                    <div className="shrink-0 w-16">
                      <span className="text-[2.5rem] font-bold leading-none text-gradient">
                        {item.metric}
                        {item.unit && (
                          <span className="text-[1.5rem]">{item.unit}</span>
                        )}
                      </span>
                    </div>
                    <div className="pt-1 flex-1">
                      <p className="text-white/72 font-semibold text-[0.875rem] mb-1 leading-snug tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-white/26 text-[0.75rem] leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                    {/* Right accent line on hover */}
                    <div
                      className="self-stretch w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: i === 0
                          ? "linear-gradient(to bottom, rgba(77,163,255,0.4), transparent)"
                          : i === 1
                          ? "linear-gradient(to bottom, rgba(125,211,252,0.4), transparent)"
                          : "linear-gradient(to bottom, rgba(37,99,235,0.5), transparent)",
                      }}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust footnote */}
            <div className="mt-5 flex items-center gap-3 px-1">
              <div className="w-1 h-1 rounded-full bg-glow-blue/40 shrink-0" />
              <p className="text-white/20 text-[0.75rem] leading-relaxed">
                All systems are designed for compounding returns — not one-time launches.
                Infrastructure built today should work harder for the business six months from now.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
