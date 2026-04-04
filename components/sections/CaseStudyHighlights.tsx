"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const caseStudies = [
  {
    slug: "serene-origins",
    category: "Revenue System",
    title: "Serene Origins",
    tagline: "A wellness concept transformed into a structured digital business platform with clear monetization.",
    outcome: "Subscription infrastructure + conversion-focused redesign",
    tags: ["Brand Redesign", "Subscription System", "Stripe Integration"],
  },
  {
    slug: "undugu",
    category: "System Build",
    title: "Undugu",
    tagline: "Community foundation rebuilt for scale — with CRM intake, member tracking, and communication architecture.",
    outcome: "CRM-ready workflow + operational infrastructure",
    tags: ["GoHighLevel", "Community Platform", "CRM Architecture"],
  },
  {
    slug: "amplify-voices",
    category: "Authority System",
    title: "Amplify Voices",
    tagline: "A media platform reimagined with story-driven layout and authority positioning that commands attention.",
    outcome: "Premium web presence + brand authority",
    tags: ["Media Platform", "Brand System", "Storytelling Design"],
  },
  {
    slug: "gary-mariner",
    category: "Personal Brand",
    title: "Gary L Mariner II",
    tagline: "Personal brand elevated into a structured authority platform reflecting leadership and strategic execution.",
    outcome: "Executive digital presence + booking integration",
    tags: ["Personal Brand", "Positioning System", "Cal.com"],
  },
];

export default function CaseStudyHighlights() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.07),transparent)]" />

      <div className="container-tight relative">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Four builds.
              <br />
              <span className="text-white/40">One consistent principle.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="shrink-0 text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            View all case studies
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.slug}>
              <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full glass-card rounded-2xl p-8 flex flex-col gap-5 glass-card-hover"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-glow-blue/60">
                      {cs.category}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/20 group-hover:text-white/50 transition-colors mt-0.5"
                    >
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Title + tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-gradient transition-all">
                      {cs.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {cs.tagline}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="py-4 border-t border-b border-white/[0.06]">
                    <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-1">
                      Outcome
                    </p>
                    <p className="text-white/65 text-sm font-medium">{cs.outcome}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/35 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
