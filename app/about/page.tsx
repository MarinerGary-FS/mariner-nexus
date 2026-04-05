import { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Button from "@/components/ui/Button";
import ConversionSection from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "About — Mariner Nexus",
  description:
    "Mariner Nexus was built for businesses that need more than a nice-looking site — systems that bring clarity, automation, and execution together.",
};

const values = [
  {
    title: "Systems Over Chaos",
    body: "Every engagement starts with a systems map — understanding the full operational picture before designing or building anything.",
  },
  {
    title: "Intelligence Over Busywork",
    body: "AI and automation should remove friction, not add complexity. We implement what actually improves operations.",
  },
  {
    title: "Execution Over Theory",
    body: "Strategy without implementation is speculation. We ship production-ready systems that businesses can immediately operate.",
  },
  {
    title: "Premium Design With Purpose",
    body: "Visual quality is a trust signal. Every design decision serves clarity, conversion, or perception — not decoration.",
  },
  {
    title: "Outcomes Over Output",
    body: "Everything is measured by business performance, not just deliverables. The system isn't done until the metrics move.",
  },
];

const approach = [
  {
    number: "01",
    title: "We start with the business, not the brief.",
    body: "Most agencies start with a scope of work. We start with a systems audit — understanding what you have, what's missing, and what the right outcome actually is.",
  },
  {
    number: "02",
    title: "We architect before we execute.",
    body: "No code or design is produced until the system map is clear. This prevents expensive rework, misaligned deliverables, and launches that miss the target.",
  },
  {
    number: "03",
    title: "We build for the next phase, not just the current one.",
    body: "Every system is designed with future evolution in mind. Automation layers, CRM connections, and integrations are architected to grow cleanly.",
  },
  {
    number: "04",
    title: "We measure outcomes, not deliverables.",
    body: "The job isn't done when the site launches. It's done when the system is performing — converting, operating, and scaling the way it was designed to.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative">
          <FadeIn className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              About
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Built for businesses
              <br />
              <span className="text-white/35">that need more than a site.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              Mariner Nexus exists to create systems that bring clarity, automation, and
              execution together in one modern operating layer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin — with founder photo */}
      <section className="section-padding bg-[#0A0A0A] relative">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — context */}
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                The same problem.
                <br />
                <span className="text-white/40">Everywhere we looked.</span>
              </h2>
              <div className="space-y-5 text-white/50 text-base leading-relaxed">
                <p>
                  Businesses with real potential, real products, and real value — stuck inside
                  digital infrastructure that couldn&apos;t keep up. Websites that looked generic.
                  Operations running on manual processes. Systems that weren&apos;t talking to
                  each other.
                </p>
                <p>
                  The gap wasn&apos;t effort. It was architecture. The businesses weren&apos;t
                  failing because their team wasn&apos;t working hard. They were failing because
                  the systems underneath the business weren&apos;t built to support growth.
                </p>
                <p>
                  Mariner Nexus was founded to close that gap — not by selling generic services,
                  but by engineering the specific system each business actually needs to operate
                  at the next level.
                </p>
              </div>
            </FadeIn>

            {/* Right — founder card with photo */}
            <FadeIn direction="right" delay={0.15}>
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Founder photo */}
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                  <Image
                    src="/founder/gary-mariner-ii.png"
                    alt="Gary L Mariner II — Founder, Mariner Nexus"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                  {/* Bottom gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  {/* Name overlay */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-white font-bold text-lg tracking-tight leading-tight">
                      Gary L Mariner II
                    </p>
                    <p className="text-white/50 text-sm font-normal mt-0.5">
                      Founder, Mariner Nexus
                    </p>
                  </div>
                </div>

                <div className="p-7 space-y-5">
                  <blockquote className="text-white/55 text-base leading-relaxed italic border-l-2 border-glow-blue/30 pl-5">
                    &ldquo;I kept seeing the same story: a great business, a weak system, and a team
                    doing double the work to compensate. My job is to fix the system — and make the
                    work easier, faster, and more effective.&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <p className="text-white/40 text-sm">
                      Operating at the intersection of AI automation, conversion strategy, and
                      premium design — Gary brings first-principles thinking to every engagement
                      and executes with the discipline of someone who cares about outcomes, not
                      just deliverables.
                    </p>
                    <Button href="/case-studies/gary-mariner" variant="ghost" size="sm">
                      View personal brand case study →
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Five Principles */}
      <section className="section-padding bg-black">
        <div className="container-tight">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Five principles. Zero compromise.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <StaggerItem key={value.title}>
                {/* Fifth card spans full width on sm+ */}
                <div className={`glass-card rounded-xl p-7 glass-card-hover h-full ${i === 4 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-[0.625rem] font-bold text-white/15 tabular-nums shrink-0 mt-1 tracking-widest">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2.5 tracking-tight">{value.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{value.body}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/15 to-transparent" />
        <div className="container-tight">
          <FadeIn className="mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
              How We Operate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              The thinking behind
              <br />
              <span className="text-white/40">every engagement.</span>
            </h2>
          </FadeIn>

          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {approach.map((item) => (
              <FadeIn key={item.number}>
                <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-6 p-7 sm:p-8 bg-black hover:bg-white/[0.018] transition-colors duration-300">
                  <span className="text-3xl font-bold text-white/8 tabular-nums">{item.number}</span>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ConversionSection />
    </>
  );
}
