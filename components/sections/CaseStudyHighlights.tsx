"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

// Category accent colors — used for top-edge highlight on each card
const categoryAccents: Record<string, string> = {
  "Revenue":   "rgba(77,163,255,0.55)",
  "Authority": "rgba(125,211,252,0.5)",
  "Systems":   "rgba(37,99,235,0.65)",
};

const caseStudies = [
  // ── Revenue / Service Business ────────────────────────────────
  {
    slug: "act-of-valor",
    categoryGroup: "Revenue",
    category: "Revenue · Service Business",
    industry: "Emergency Services",
    title: "Act of Valor",
    description:
      "A high-trust emergency services platform built for same-day conversion — credentials-forward design with urgent CTA architecture.",
    outcome: "Trust-first conversion system + CRM lead intake",
    tags: ["Conversion Architecture", "GoHighLevel", "Local Authority"],
  },
  {
    slug: "serene-origins",
    categoryGroup: "Revenue",
    category: "Revenue · Wellness",
    industry: "Digital Business",
    title: "Serene Origins",
    description:
      "A wellness concept transformed into a structured digital business platform with premium positioning and a defined subscription revenue pathway.",
    outcome: "Subscription infrastructure + conversion-focused redesign",
    tags: ["Brand Redesign", "Stripe", "Conversion Design"],
  },
  // ── Authority / Creator / Personal Brand ──────────────────────
  {
    slug: "eaziedagod",
    categoryGroup: "Authority",
    category: "Authority · Creator",
    industry: "Music / Artist",
    title: "EazieDaGod",
    description:
      "An artist brand rebuilt into an immersive digital identity — full-experience entry design, link architecture, and premium creative brand presentation.",
    outcome: "Immersive creator platform + strategic link architecture",
    tags: ["Creator Brand", "Immersive Design", "Link Architecture"],
  },
  {
    slug: "gary-mariner",
    categoryGroup: "Authority",
    category: "Authority · Executive",
    industry: "Personal Brand",
    title: "Gary L Mariner II",
    description:
      "Personal brand elevated into a structured authority platform — reflecting leadership, strategic execution, and systems thinking.",
    outcome: "Executive digital presence + booking integration",
    tags: ["Personal Brand", "Positioning System", "Cal.com"],
  },
  // ── Systems / Community / Media ───────────────────────────────
  {
    slug: "undugu",
    categoryGroup: "Systems",
    category: "Systems · Community",
    industry: "Foundation",
    title: "Undugu",
    description:
      "A community foundation rebuilt for scale — CRM intake, member tracking, and communication architecture that supports organizational growth.",
    outcome: "CRM-ready workflows + operational infrastructure",
    tags: ["GoHighLevel", "CRM Architecture", "Community Platform"],
  },
  {
    slug: "amplify-voices",
    categoryGroup: "Systems",
    category: "Systems · Media",
    industry: "Media Platform",
    title: "Amplify Voices",
    description:
      "A media platform reimagined with story-driven layout, elevated brand presentation, and authority positioning that commands attention.",
    outcome: "Premium media presence + brand authority",
    tags: ["Media Platform", "Storytelling Design", "Brand System"],
  },
];

export default function CaseStudyHighlights() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(37,99,235,0.05),transparent)]" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="eyebrow mb-4">Case Studies</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Six builds.
              <br />
              <span className="text-white/32">One consistent principle.</span>
            </h2>
          </div>
          <Link href="/case-studies" className="link-arrow shrink-0">
            View all case studies
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

        {/* Grid — 2 cols, category color accent on top edge */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs) => {
            const accentColor = categoryAccents[cs.categoryGroup] ?? "rgba(77,163,255,0.4)";
            return (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full glass-card glass-card-hover rounded-2xl flex flex-col overflow-hidden"
                  >
                    {/* Category accent bar */}
                    <div
                      className="h-px w-full transition-all duration-300 group-hover:opacity-100 opacity-40"
                      style={{ background: `linear-gradient(90deg, ${accentColor}, transparent 70%)` }}
                    />

                    <div className="p-7 flex flex-col gap-5 flex-1">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="eyebrow text-glow-blue/55">{cs.category}</span>
                          <span className="text-white/15 text-xs">·</span>
                          <span className="text-[0.6875rem] text-white/28 font-medium">{cs.industry}</span>
                        </div>
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          className="text-white/15 group-hover:text-white/40 transition-colors duration-200 mt-0.5 shrink-0"
                        >
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Title + description */}
                      <div>
                        <h3 className="text-[1.125rem] font-bold text-white mb-2.5 tracking-tight group-hover:text-gradient transition-all duration-300">
                          {cs.title}
                        </h3>
                        <p className="text-white/40 text-[0.8125rem] leading-[1.65]">
                          {cs.description}
                        </p>
                      </div>

                      {/* Outcome callout */}
                      <div className="rounded-lg bg-white/[0.025] border border-white/[0.05] px-4 py-3">
                        <p className="text-[0.625rem] text-white/25 uppercase tracking-[0.14em] font-semibold mb-1">
                          Outcome
                        </p>
                        <p className="text-white/60 text-[0.8125rem] font-medium leading-snug">
                          {cs.outcome}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.6875rem] text-white/28 bg-white/[0.04] border border-white/[0.055] px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
