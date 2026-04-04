"use client";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="10" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="1" y="10" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <rect x="10" y="10" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
    title: "Systems Over Chaos",
    body: "We build structured, connected infrastructure. Not one-off projects. Everything serves a larger operating logic.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.25" />
        <path d="M9 1v3M9 14v3M1 9h3M14 9h3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M3.22 3.22l2.12 2.12M12.66 12.66l2.12 2.12M3.22 14.78l2.12-2.12M12.66 5.34l2.12-2.12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Intelligence Over Busywork",
    body: "AI and automation should elevate how your business thinks, responds, and scales — not just execute repetitive tasks.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15L9 3l6 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Execution Over Theory",
    body: "Strategy without implementation is speculation. We architect and ship — with precision and measurable purpose.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Designed for Outcomes",
    body: "Every visual decision, automation, and system is measured by one standard: does it move the business forward?",
  },
];

export default function PositioningSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Side accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-start">

          {/* Left — manifesto text */}
          <FadeIn direction="left">
            <p className="eyebrow mb-5">What We Build</p>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-6">
              This isn&apos;t a website agency.
            </h2>
            <p className="text-white/45 text-[0.9375rem] leading-[1.75] mb-6 max-w-sm">
              Mariner Nexus transforms disconnected tools, unclear positioning,
              and slow operations into intelligent systems built for modern growth.
            </p>
            <p className="text-white/30 text-sm leading-[1.7] max-w-sm">
              We approach every engagement as a systems problem — mapping the
              full architecture before writing a line of code. The result is a
              build that fits how your business actually works and where it
              needs to go.
            </p>
          </FadeIn>

          {/* Right — pillars grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="bg-black p-7 h-full flex flex-col gap-4 hover:bg-white/[0.02] transition-colors duration-300 group">
                  <span className="text-glow-blue/50 group-hover:text-glow-blue/80 transition-colors duration-200 w-fit">
                    {pillar.icon}
                  </span>
                  <div>
                    <h3 className="text-white/90 font-semibold text-[0.875rem] mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-white/38 text-[0.8125rem] leading-[1.65]">{pillar.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
