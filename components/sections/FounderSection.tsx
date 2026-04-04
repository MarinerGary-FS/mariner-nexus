"use client";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";

const stats = [
  {
    metric: "4",
    label: "Production Systems Built",
    note: "Across wellness, media, community, and personal brand verticals",
  },
  {
    metric: "3",
    label: "Service Tiers",
    note: "Foundation · Growth · Authority — scoped to your stage",
  },
  {
    metric: "100%",
    label: "Strategy-First",
    note: "No code written before the system is mapped and aligned",
  },
];

export default function FounderSection() {
  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-[radial-gradient(ellipse_80%_80%_at_100%_50%,rgba(37,99,235,0.06),transparent)]" />

      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <FadeIn direction="left">
            <p className="eyebrow mb-5">Behind the System</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-6">
              Gary L Mariner II
            </h2>
            <p className="text-white/45 text-[0.9375rem] leading-[1.75] mb-5 max-w-[400px]">
              Mariner Nexus was built by a systems thinker who saw the same problem
              repeatedly: businesses with real potential, stuck inside digital
              infrastructure that couldn&apos;t keep up.
            </p>
            <p className="text-white/28 text-[0.875rem] leading-[1.7] mb-8 max-w-[400px]">
              Gary operates at the intersection of strategy, technology, and design —
              building solutions that close the gap between how a business operates
              today and how it needs to operate to scale.
            </p>
            <Button href="/about" variant="secondary" size="md">
              The Vision Behind the Work
            </Button>
          </FadeIn>

          {/* Right: Stat block */}
          <FadeIn direction="right" delay={0.1}>
            <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/[0.05]">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-6 p-7 hover:bg-white/[0.015] transition-colors duration-300"
                >
                  <span className="text-[2.25rem] font-bold text-gradient shrink-0 w-16 leading-none">
                    {item.metric}
                  </span>
                  <div className="pt-0.5">
                    <p className="text-white/75 font-semibold text-[0.875rem] mb-1 leading-snug">{item.label}</p>
                    <p className="text-white/30 text-[0.75rem] leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
