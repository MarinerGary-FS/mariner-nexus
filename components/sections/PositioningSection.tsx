"use client";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const pillars = [
  {
    icon: "◈",
    title: "Systems Over Chaos",
    body: "We build structured, connected infrastructure — not one-off projects. Everything serves a larger operating logic.",
  },
  {
    icon: "◇",
    title: "Intelligence Over Busywork",
    body: "AI doesn't just automate tasks. It elevates how your business thinks, responds, and scales.",
  },
  {
    icon: "◆",
    title: "Execution Over Theory",
    body: "Strategy without implementation is speculation. We architect and ship — with precision and purpose.",
  },
  {
    icon: "○",
    title: "Designed for Outcomes",
    body: "Every visual decision, automation, and system is measured by one standard: does it move the business forward?",
  },
];

export default function PositioningSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Subtle edge glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-60 bg-gradient-to-b from-transparent via-glow-blue/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-60 bg-gradient-to-b from-transparent via-glow-blue/20 to-transparent" />

      <div className="container-tight">
        {/* Section header */}
        <FadeIn className="max-w-3xl mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            This isn&apos;t a website agency.
            <br />
            <span className="text-white/40">It&apos;s a systems company.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Mariner Nexus transforms disconnected tools, unclear positioning, and
            slow operations into intelligent systems built for modern growth.
          </p>
        </FadeIn>

        {/* Pillars grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="bg-black p-8 h-full flex flex-col gap-5 hover:bg-white/[0.02] transition-colors duration-300">
                <span className="text-2xl text-glow-blue/60">{pillar.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
