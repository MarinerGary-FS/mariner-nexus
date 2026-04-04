"use client";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Understand the system before building it.",
    description:
      "A strategy call to map your current state, identify real constraints, and define what success looks like — before writing a line of code.",
  },
  {
    number: "02",
    phase: "Architect",
    title: "Design the system with purpose.",
    description:
      "Every page, flow, and integration is planned before execution. Structure, narrative, and technical architecture defined — no surprises.",
  },
  {
    number: "03",
    phase: "Build",
    title: "Execute with precision.",
    description:
      "Clean, production-ready systems — premium design, CRM-connected infrastructure, performance-aware code — delivered with discipline.",
  },
  {
    number: "04",
    phase: "Optimize",
    title: "Improve based on signal.",
    description:
      "After launch we monitor performance, conversion behavior, and operational efficiency. Continuous refinement built into the engagement.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="divider-glow absolute bottom-0 left-0 right-0" />

      <div className="container-tight">
        <FadeIn className="text-center mb-16">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white">
            The operating sequence.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col gap-5">
                {/* Step indicator + connector */}
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full border border-glow-blue/20 flex items-center justify-center bg-nexus-blue/5 shrink-0 z-10">
                    <span className="text-glow-blue/60 text-[0.6875rem] font-bold">{step.number}</span>
                  </div>
                  {/* Connector line to next step (lg only) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-9 top-4.5 w-[calc(100%+1.5rem)] h-px bg-gradient-to-r from-white/8 to-transparent" />
                  )}
                  <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-white/25">
                    {step.phase}
                  </span>
                </div>

                <div>
                  <h3 className="text-white/80 font-semibold text-[0.875rem] mb-2 leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/32 text-[0.8125rem] leading-[1.65]">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
