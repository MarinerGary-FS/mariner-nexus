"use client";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Understand the system before building it.",
    description:
      "We start with a strategy call to map your current state, identify the real constraints, and define what success looks like — before writing a single line of code.",
  },
  {
    number: "02",
    phase: "Architect",
    title: "Design the system with purpose.",
    description:
      "Every page, flow, and integration is planned before execution. We define the structure, narrative, and technical architecture so there are no surprises.",
  },
  {
    number: "03",
    phase: "Build",
    title: "Execute with precision.",
    description:
      "We build clean, production-ready systems — premium design, CRM-connected infrastructure, and performance-aware code — delivered with discipline.",
  },
  {
    number: "04",
    phase: "Optimize",
    title: "Improve based on signal, not assumptions.",
    description:
      "After launch, we monitor performance, conversion behavior, and operational efficiency. Continuous refinement is built into the engagement.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/20 to-transparent" />

      <div className="container-tight">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            The operating sequence.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col gap-5">
                {/* Connector line (desktop only) */}
                <div className="absolute top-5 left-14 right-0 h-px bg-white/[0.05] hidden lg:block last:hidden" />

                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full border border-glow-blue/20 flex items-center justify-center bg-nexus-blue/5 shrink-0 z-10">
                    <span className="text-glow-blue/70 text-xs font-bold">{step.number}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30">
                    {step.phase}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
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
