"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const paths = [
  {
    outcome: "Make More Money",
    description:
      "Revenue systems built for conversion — from premium web experiences to subscription and e-commerce infrastructure.",
    tags: ["Conversion Systems", "E-commerce", "Funnel Design"],
    caseStudies: [
      { label: "Serene Origins", href: "/case-studies/serene-origins" },
    ],
    href: "/services#revenue",
    accentColor: "rgba(77,163,255,0.15)",
    borderColor: "rgba(77,163,255,0.2)",
  },
  {
    outcome: "Build Authority",
    description:
      "Position yourself or your brand as the clear choice. We create digital presences that command trust and attention.",
    tags: ["Personal Brand", "Executive Positioning", "Authority Platforms"],
    caseStudies: [
      { label: "Gary L Mariner II", href: "/case-studies/gary-mariner" },
    ],
    href: "/services#authority",
    accentColor: "rgba(125,211,252,0.12)",
    borderColor: "rgba(125,211,252,0.18)",
  },
  {
    outcome: "Build Systems",
    description:
      "Operational infrastructure that scales. CRM-connected platforms, community systems, and intelligent workflow design.",
    tags: ["CRM Integration", "Community Platforms", "Automation"],
    caseStudies: [
      { label: "Undugu", href: "/case-studies/undugu" },
      { label: "Amplify Voices", href: "/case-studies/amplify-voices" },
    ],
    href: "/services#systems",
    accentColor: "rgba(37,99,235,0.15)",
    borderColor: "rgba(37,99,235,0.2)",
  },
];

export default function OutcomePaths() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(37,99,235,0.05),transparent)]" />

      <div className="container-tight relative">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
            Choose Your Outcome
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What do you need to build?
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {paths.map((path) => (
            <StaggerItem key={path.outcome}>
              <Link href={path.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${path.accentColor}, transparent 70%), rgba(255,255,255,0.03)`,
                    border: `1px solid ${path.borderColor}`,
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {path.outcome}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {path.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/40 bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/[0.06]">
                    <p className="text-xs text-white/30 mb-2 uppercase tracking-widest font-medium">
                      Case Studies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {path.caseStudies.map((cs) => (
                        <span
                          key={cs.href}
                          className="text-sm text-glow-blue/70 group-hover:text-glow-blue transition-colors"
                        >
                          {cs.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors text-sm font-medium">
                    <span>Explore</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
