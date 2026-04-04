"use client";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";

export default function FounderSection() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-nexus-blue/5 blur-3xl rounded-full" />

      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <FadeIn direction="left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              Behind the System
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Gary L Mariner II
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-5">
              Mariner Nexus was built by a systems thinker who saw the same problem
              repeatedly: businesses with real potential, stuck inside digital
              infrastructure that couldn&apos;t keep up.
            </p>
            <p className="text-white/40 text-base leading-relaxed mb-8">
              Gary operates at the intersection of strategy, technology, and design —
              building solutions that close the gap between how a business operates
              today and how it needs to operate to scale. Every Mariner Nexus
              engagement is built on first-principles thinking and executed with
              precision.
            </p>
            <Button href="/about" variant="secondary" size="md">
              Learn More About the Vision
            </Button>
          </FadeIn>

          {/* Right: Stats / Proof block */}
          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card rounded-2xl p-8 space-y-6">
              {[
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
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-6 pb-6 border-b border-white/[0.06] last:border-b-0 last:pb-0"
                >
                  <span className="text-4xl font-bold text-gradient shrink-0 w-16 leading-none">
                    {item.metric}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{item.note}</p>
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
