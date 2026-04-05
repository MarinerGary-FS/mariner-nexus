"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const paths = [
  {
    outcome: "Make More Money",
    index: "01",
    description:
      "Revenue systems built for conversion — from premium web experiences to emergency services UX and subscription infrastructure.",
    tags: ["Conversion Architecture", "E-commerce", "Service Business"],
    caseStudies: [
      { label: "Act of Valor", href: "/case-studies/act-of-valor" },
      { label: "Serene Origins", href: "/case-studies/serene-origins" },
    ],
    href: "/services#revenue",
    glow: "rgba(37,99,235,0.12)",
    accent: "rgba(77,163,255,0.55)",
  },
  {
    outcome: "Build Authority",
    index: "02",
    description:
      "Position yourself or your brand as the clear, credible choice — from executive platforms to immersive creator identities.",
    tags: ["Personal Brand", "Creator Platform", "Executive Positioning"],
    caseStudies: [
      { label: "EazieDaGod", href: "/case-studies/eaziedagod" },
      { label: "Gary L Mariner II", href: "/case-studies/gary-mariner" },
    ],
    href: "/services#authority",
    glow: "rgba(125,211,252,0.09)",
    accent: "rgba(125,211,252,0.55)",
  },
  {
    outcome: "Build Systems",
    index: "03",
    description:
      "Operational infrastructure that scales — CRM-connected platforms, community systems, and media architecture built for organizations.",
    tags: ["CRM Integration", "Community Platforms", "Media Systems"],
    caseStudies: [
      { label: "Undugu", href: "/case-studies/undugu" },
      { label: "Amplify Voices", href: "/case-studies/amplify-voices" },
    ],
    href: "/services#systems",
    glow: "rgba(37,99,235,0.1)",
    accent: "rgba(37,99,235,0.6)",
  },
];

export default function OutcomePaths() {
  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(37,99,235,0.04),transparent)]" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container-tight relative">
        <FadeIn className="mb-14">
          <p className="eyebrow mb-4">Start With the Outcome</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              What do you need to build?
            </h2>
            <p className="text-white/30 text-[0.8125rem] max-w-[280px] leading-relaxed hidden md:block">
              Every engagement begins with clarity on the outcome — before strategy, before scope, before a single line of code.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {paths.map((path) => (
            <StaggerItem key={path.outcome}>
              <Link href={path.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${path.glow}, transparent 65%), rgba(255,255,255,0.025)`,
                    border: `1px solid rgba(255,255,255,0.07)`,
                  }}
                >
                  {/* Accent top line */}
                  <div
                    className="h-px w-full opacity-25 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${path.accent}, transparent 70%)` }}
                  />

                  <div className="p-7 flex flex-col gap-6 flex-1">
                    {/* Index + title */}
                    <div>
                      <span className="text-[0.6875rem] font-semibold tracking-[0.15em] text-white/18 block mb-3">
                        {path.index}
                      </span>
                      <h3 className="text-[1.125rem] font-bold text-white mb-3 tracking-tight leading-tight">
                        {path.outcome}
                      </h3>
                      <p className="text-white/40 text-[0.8125rem] leading-[1.65]">
                        {path.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {path.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6875rem] font-medium text-white/32 bg-white/[0.05] border border-white/[0.06] px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Case study refs */}
                    <div className="mt-auto pt-5 border-t border-white/[0.05]">
                      <p className="text-[0.6875rem] text-white/20 uppercase tracking-[0.12em] font-semibold mb-2.5">
                        Case Studies
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {path.caseStudies.map((cs) => (
                          <span
                            key={cs.href}
                            className="text-[0.8125rem] font-medium transition-colors duration-200"
                            style={{ color: path.accent.replace("0.6", "0.7").replace("0.55", "0.65") }}
                          >
                            {cs.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-1.5 text-white/22 group-hover:text-white/55 transition-colors duration-200 text-[0.8125rem] font-medium">
                      See the builds
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
