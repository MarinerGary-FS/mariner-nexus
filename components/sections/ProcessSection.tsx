"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Understand the system before building it.",
    description:
      "A strategy call to map your current state, identify real constraints, and define what success looks like — before writing a line of code.",
    accentRgb: "77,163,255",
  },
  {
    number: "02",
    phase: "Architect",
    title: "Design the system with purpose.",
    description:
      "Every page, flow, and integration is planned before execution. Structure, narrative, and technical architecture defined — no surprises.",
    accentRgb: "77,163,255",
  },
  {
    number: "03",
    phase: "Build",
    title: "Execute with precision.",
    description:
      "Clean, production-ready systems — premium design, CRM-connected infrastructure, performance-aware code — delivered with discipline.",
    accentRgb: "125,211,252",
  },
  {
    number: "04",
    phase: "Optimize",
    title: "Improve based on signal.",
    description:
      "After launch we monitor performance, conversion behavior, and operational efficiency. Continuous refinement built into the engagement.",
    accentRgb: "125,211,252",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_50%,rgba(37,99,235,0.04),transparent)]" />

      <div className="container-tight relative">
        <FadeIn className="text-center mb-16">
          <p className="eyebrow mb-4">The Method</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white text-balance">
            Four stages.{" "}
            <span className="text-white/32">One standard of execution.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest:  { y: 0,  boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 1px 0 0 rgba(255,255,255,0.06) inset" },
                  hover: { y: -3, boxShadow: `0 0 0 1px rgba(${step.accentRgb},0.22), 0 12px 40px rgba(0,0,0,0.4), 0 1px 0 0 rgba(255,255,255,0.06) inset` },
                }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full rounded-2xl flex flex-col gap-5 p-7 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                {/* Top-edge accent — variant-driven */}
                <motion.div
                  variants={{
                    rest:  { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.22 }}
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, rgba(${step.accentRgb},0.75), transparent 60%)`,
                  }}
                />

                {/* Step number — large watermark, brightens on hover */}
                <motion.div
                  variants={{
                    rest:  { opacity: 0.055 },
                    hover: { opacity: 0.13 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-5 text-[3.5rem] font-black leading-none select-none pointer-events-none"
                  style={{ color: `rgba(${step.accentRgb},1)` }}
                >
                  {step.number}
                </motion.div>

                {/* Phase badge */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0"
                    style={{
                      borderColor: `rgba(${step.accentRgb},0.28)`,
                      background: `rgba(${step.accentRgb},0.06)`,
                    }}
                  >
                    <span
                      className="text-[0.5625rem] font-bold tabular-nums"
                      style={{ color: `rgba(${step.accentRgb},0.75)` }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase"
                    style={{ color: `rgba(${step.accentRgb},0.55)` }}
                  >
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3 className="text-white/85 font-semibold text-[0.9375rem] leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-[0.8125rem] leading-[1.7]">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot — bottom right on desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-px z-10"
                    style={{
                      background: `linear-gradient(90deg, rgba(${step.accentRgb},0.25), transparent)`,
                    }}
                  />
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom footnote */}
        <FadeIn delay={0.2} className="mt-10 flex items-start gap-2.5 justify-center px-1">
          <div className="w-1 h-1 rounded-full bg-glow-blue/30 shrink-0 mt-1.5" />
          <p className="text-white/18 text-[0.75rem] leading-relaxed text-center max-w-md">
            Every stage is gated — the next doesn&apos;t begin until the previous is confirmed.
            No scope creep. No surprises.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
