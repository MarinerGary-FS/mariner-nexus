"use client";

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
    metric: "3",
    unit: "",
    label: "Service Categories",
    note: "Foundation · Growth · Authority — scoped to your stage and goals",
  },
  {
    metric: "100",
    unit: "%",
    label: "Strategy-First",
    note: "No code written until the system is mapped, aligned, and approved",
  },
];

export default function FounderSection() {
  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_70%_80%_at_100%_50%,rgba(37,99,235,0.055),transparent)]" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — founder context */}
          <FadeIn direction="left">
            <p className="eyebrow mb-5">Behind the System</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-6">
              Gary L Mariner II
            </h2>
            <p className="text-white/42 text-[0.9375rem] leading-[1.8] mb-5 max-w-[400px]">
              Mariner Nexus was built by a systems thinker who kept seeing the same problem: businesses with real potential, operating inside digital infrastructure that couldn&apos;t keep up.
            </p>
            <p className="text-white/26 text-[0.875rem] leading-[1.75] mb-8 max-w-[400px]">
              Gary operates at the intersection of strategy, technology, and design. Every engagement begins with a systems audit — not a brief — and ends with infrastructure that scales.
            </p>

            {/* Inline quote */}
            <blockquote className="border-l-2 border-glow-blue/25 pl-5 mb-8">
              <p className="text-white/40 text-[0.875rem] leading-[1.7] italic">
                &ldquo;Strategy without implementation is speculation.
                My job is to build the system — and make the work easier,
                faster, and more effective.&rdquo;
              </p>
            </blockquote>

            <Button href="/about" variant="secondary" size="md">
              The Vision Behind the Work
            </Button>
          </FadeIn>

          {/* Right — stats */}
          <FadeIn direction="right" delay={0.1}>
            <StaggerContainer className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
              {stats.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-start gap-6 p-7 bg-black hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="shrink-0 w-16">
                      <span className="text-[2.5rem] font-bold leading-none text-gradient">
                        {item.metric}
                        {item.unit && (
                          <span className="text-[1.5rem]">{item.unit}</span>
                        )}
                      </span>
                    </div>
                    <div className="pt-1">
                      <p className="text-white/72 font-semibold text-[0.875rem] mb-1 leading-snug tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-white/28 text-[0.75rem] leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
