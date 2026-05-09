import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Button from "@/components/ui/Button";
import ConversionSection from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "Evolution Systems - Mariner Nexus",
  description:
    "Entry ecosystems and operational evolution systems for creators, personal brands, scaling businesses, nonprofits, and organizations ready for synchronized growth.",
};

const entryEcosystems = [
  {
    name: "Creator Identity System",
    investment: "Starting at $950",
    audience: "Creators, artists, solo operators",
    description:
      "A focused digital identity layer that gives social traffic a coherent place to land, understand, trust, and move.",
    includes: [
      "Immersive one-page or compact multi-section experience",
      "Strategic link architecture for music, offers, booking, or collaboration",
      "Mobile-first interface for audience movement from social platforms",
      "Foundational brand alignment across typography, color, and motion",
    ],
  },
  {
    name: "Personal Brand Ecosystem",
    investment: "Starting at $1,750",
    audience: "Founders, consultants, speakers, emerging brands",
    description:
      "A premium presence system for operators who need credibility, positioning, and conversion clarity without enterprise complexity.",
    includes: [
      "3-5 page personal brand ecosystem",
      "Authority narrative, offer framing, and proof architecture",
      "Evolution-entry CTA flow for briefing, booking, or inquiry",
      "Search-ready structure and performance-conscious implementation",
    ],
  },
  {
    name: "Nexus Identity System",
    investment: "Starting at $2,900",
    audience: "Early-stage businesses and future-state brands",
    description:
      "An elevated entry ecosystem for organizations that need more than a page, but are not yet ready for full operational transformation.",
    includes: [
      "Core website ecosystem with essential conversion routes",
      "Positioning refinement and trust architecture",
      "Scheduling or intake integration path",
      "Scalable structure for future CRM, automation, and content expansion",
    ],
  },
];

const continuityLayer = {
  name: "Nexus Continuity Layer",
  investment: "$39.99/month",
  description:
    "Ongoing ecosystem stewardship that keeps the identity layer stable, current, synchronized, and ready for future evolution.",
  includes: [
    "Ecosystem health checks",
    "Core updates and continuity monitoring",
    "Minor content synchronization",
    "Future compatibility review",
    "Operational stability oversight",
  ],
};

const operationalSystems = [
  {
    name: "Revenue Evolution System",
    focus: "Trust, lead movement, conversion paths, CRM handoff, and follow-up architecture.",
    bestFor: ["Service businesses", "Product brands", "E-commerce operators", "Growth-stage companies"],
    proof: [
      { label: "Act of Valor", href: "/case-studies/act-of-valor" },
      { label: "Serene Origins", href: "/case-studies/serene-origins" },
    ],
  },
  {
    name: "Authority Evolution System",
    focus: "Executive credibility, thought leadership, strategic narrative, and high-trust digital presence.",
    bestFor: ["Executive brands", "Consultants", "Founders", "Transformation-focused leaders"],
    proof: [
      { label: "Gary L Mariner II", href: "/case-studies/gary-mariner" },
      { label: "Amplify Voices", href: "/case-studies/amplify-voices" },
    ],
  },
  {
    name: "Operational Ecosystem Architecture",
    focus: "Connected platforms, community infrastructure, intake flows, automations, and scalable operations.",
    bestFor: ["Nonprofits", "Community organizations", "Operational teams", "Multi-stakeholder platforms"],
    proof: [
      { label: "Undugu", href: "/case-studies/undugu" },
      { label: "Amplify Voices", href: "/case-studies/amplify-voices" },
    ],
  },
];

const scopeSignals = [
  "Current operational friction",
  "Future-state ecosystem goals",
  "Audience complexity and decision pathways",
  "CRM, scheduling, automation, and integration depth",
  "Content, proof, and trust architecture requirements",
  "Launch timeline, internal readiness, and continuity needs",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black pt-40 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.16]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-glow-blue/70">
              Evolution Pathways
            </span>
            <h1 className="mx-auto mb-6 max-w-[22rem] text-4xl font-bold leading-tight tracking-tight text-white sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl">
              Enter at the right layer.
              <br />
              <span className="text-white/35">Evolve with the right system.</span>
            </h1>
            <p className="mx-auto max-w-[21rem] text-base leading-8 text-white/50 sm:max-w-2xl md:text-lg">
              Mariner Nexus operates through two synchronized pathways: accessible entry ecosystems for emerging brands, and strategic operational evolution systems for organizations ready to transform.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-black pb-16">
        <div className="container-tight">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] lg:grid-cols-2">
            <FadeIn>
              <Link href="#entry-ecosystems" className="group block h-full min-w-0 overflow-hidden bg-[#06080d] p-8 transition duration-300 hover:bg-white/[0.035] lg:p-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-glow-blue/65">Pathway 01</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white">Entry Ecosystems</h2>
                <p className="mb-8 max-w-lg break-words text-sm leading-7 text-white/46">
                  Low-friction entry into the Nexus for creators, personal brands, solo operators, and emerging businesses that need a serious identity layer without enterprise scope.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-glow-blue/70">
                  Review starting investments
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.08}>
              <Link href="#operational-evolution" className="group block h-full min-w-0 overflow-hidden bg-[#050608] p-8 transition duration-300 hover:bg-white/[0.035] lg:p-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-glow-blue/65">Pathway 02</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white">Operational Evolution Systems</h2>
                <p className="mb-8 max-w-lg break-words text-sm leading-7 text-white/46">
                  Strategic evolution partnerships for scaling businesses, nonprofits, executive brands, and organizations where scope must be architected around real operating conditions.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-glow-blue/70">
                  Explore strategic scope
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="entry-ecosystems" className="section-padding relative overflow-hidden bg-surface-1">
        <div className="divider-glow absolute left-0 right-0 top-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_20%,rgba(77,163,255,0.07),transparent)]" />
        <div className="container-tight relative">
          <FadeIn className="mb-12 max-w-3xl">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-glow-blue/70">
              Entry Ecosystems
            </span>
            <h2 className="mb-4 max-w-[21rem] text-3xl font-bold tracking-tight text-white sm:max-w-none sm:text-4xl md:text-5xl">
              Accessible entry without cheapening the standard.
            </h2>
            <p className="text-base leading-8 text-white/45">
              These starting investment levels create a lower-friction path into the Nexus while preserving strategic clarity, atmosphere, and future compatibility.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {entryEcosystems.map((item) => (
              <StaggerItem key={item.name}>
                <div className="glass-card flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-7">
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/24">{item.audience}</p>
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{item.name}</h3>
                    <p className="text-2xl font-bold text-gradient">{item.investment}</p>
                  </div>
                  <p className="mb-6 text-sm leading-7 text-white/45">{item.description}</p>
                  <ul className="mt-auto space-y-3">
                    {item.includes.map((include) => (
                      <li key={include} className="flex items-start gap-3 text-sm leading-6 text-white/50">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow-blue/50" />
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-5">
            <div className="grid grid-cols-1 gap-5 rounded-2xl border border-glow-blue/16 bg-nexus-blue/[0.045] p-7 lg:grid-cols-[0.85fr_1.15fr] lg:p-9">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-glow-blue/60">Continuity Layer</p>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">{continuityLayer.name}</h3>
                <p className="text-3xl font-bold text-gradient">{continuityLayer.investment}</p>
              </div>
              <div>
                <p className="mb-5 text-sm leading-7 text-white/45">{continuityLayer.description}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {continuityLayer.includes.map((item) => (
                    <div key={item} className="rounded-xl border border-white/[0.07] bg-black/25 px-4 py-3 text-sm text-white/48">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="operational-evolution" className="section-padding relative overflow-hidden bg-[#050608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(37,99,235,0.09),transparent_62%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
        <div className="container-tight relative">
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-glow-blue/70">
              Operational Evolution Systems
            </span>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Transformation is architected, not purchased.
            </h2>
            <p className="text-base leading-8 text-white/45">
              Every operational ecosystem is architected around the realities, friction points, future-state goals, and scalability requirements of the organization it serves. Strategic scope and investment are defined through the Evolution Briefing process.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {operationalSystems.map((system) => (
              <FadeIn key={system.name}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7">
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-white">{system.name}</h3>
                  <p className="mb-6 text-sm leading-7 text-white/46">{system.focus}</p>
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/24">Best aligned for</p>
                    <ul className="space-y-2">
                      {system.bestFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/44">
                          <span className="h-1 w-1 rounded-full bg-glow-blue/45" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto border-t border-white/[0.06] pt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/24">Transformation records</p>
                    <div className="flex flex-wrap gap-2">
                      {system.proof.map((proof) => (
                        <Link key={proof.href} href={proof.href} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-white/45 transition hover:border-glow-blue/25 hover:text-white/70">
                          {proof.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-5">
            <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-7 lg:p-9">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-glow-blue/60">Strategic Scope Framing</p>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Investment follows operational reality.</h3>
                  <p className="text-sm leading-7 text-white/45">
                    This pathway does not use public fixed pricing, package comparisons, or deliverable menus. The briefing defines the shape of the system before investment is discussed with precision.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {scopeSignals.map((signal) => (
                    <div key={signal} className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/48">
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Begin Your Evolution Briefing
            </Button>
            <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-white/22">
              The briefing determines whether the correct next step is entry ecosystem, continuity layer, or operational evolution partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      <ConversionSection />
    </>
  );
}
