"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

// Category system — accent color + label color
const categoryConfig: Record<string, {
  accentColor: string;
  labelColor: string;
  dotColor: string;
}> = {
  Revenue:   { accentColor: "rgba(77,163,255,0.6)",   labelColor: "rgba(77,163,255,0.65)",   dotColor: "#4DA3FF" },
  Authority: { accentColor: "rgba(125,211,252,0.55)",  labelColor: "rgba(125,211,252,0.65)",  dotColor: "#7DD3FC" },
  Systems:   { accentColor: "rgba(37,99,235,0.7)",     labelColor: "rgba(37,99,235,0.75)",    dotColor: "#2563EB" },
};

const caseStudies = [
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
    mockup: "/case-studies/act-of-valor/mockup.png",
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
    mockup: "/case-studies/serene-origins/mockup.png",
  },
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
    mockup: "/case-studies/eaziedagod/mockup.png",
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
    mockup: "/case-studies/gary-mariner-ii/mockup.png",
  },
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
    mockup: "/case-studies/undugu/mockup.png",
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
    mockup: "/case-studies/amplify-voices/mockup.png",
  },
];

export default function CaseStudyHighlights() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(37,99,235,0.04),transparent)]" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="eyebrow mb-4">Case Studies</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Six builds.
              <br />
              <span className="text-white/28">One consistent principle.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 items-start md:items-end shrink-0">
            <Link href="/case-studies" className="link-arrow">
              View all case studies
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {/* Category legend */}
            <div className="flex items-center gap-4">
              {Object.entries(categoryConfig).map(([group, cfg]) => (
                <div key={group} className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: cfg.dotColor, opacity: 0.7 }}
                  />
                  <span className="text-[0.625rem] text-white/25 font-medium tracking-[0.1em] uppercase">
                    {group}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs) => {
            const config = categoryConfig[cs.categoryGroup] ?? categoryConfig.Revenue;
            return (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={!prefersReduced ? { y: -4 } : {}}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full flex flex-col overflow-hidden rounded-2xl relative"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.06) inset",
                    }}
                  >
                    {/* Category accent bar — brighter on hover */}
                    <div
                      className="h-px w-full transition-opacity duration-350"
                      style={{
                        background: `linear-gradient(90deg, ${config.accentColor}, transparent 65%)`,
                        opacity: 0.45,
                      }}
                    />

                    {/* Mockup preview strip */}
                    <div className="relative w-full h-[140px] sm:h-[160px] overflow-hidden bg-black/60">
                      <Image
                        src={cs.mockup}
                        alt={`${cs.title} preview`}
                        fill
                        className="object-cover object-top opacity-55 group-hover:opacity-75 transition-opacity duration-500 scale-[1.02] group-hover:scale-[1.0] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 560px"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                      {/* Category dot */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/[0.08]">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: config.dotColor, opacity: 0.8 }}
                        />
                        <span className="text-[0.5625rem] text-white/45 font-semibold tracking-[0.1em] uppercase">
                          {cs.categoryGroup}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4 flex-1">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-[0.625rem] font-semibold uppercase tracking-[0.14em]"
                            style={{ color: config.labelColor }}
                          >
                            {cs.category}
                          </span>
                          <span className="text-white/12 text-xs">·</span>
                          <span className="text-[0.6875rem] text-white/25 font-medium">{cs.industry}</span>
                        </div>
                        <svg
                          width="13" height="13" viewBox="0 0 14 14" fill="none"
                          className="text-white/12 group-hover:text-white/38 transition-colors duration-200 mt-0.5 shrink-0"
                        >
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Title + description */}
                      <div>
                        <h3 className="text-[1.0625rem] font-bold text-white mb-2 tracking-tight group-hover:text-gradient transition-all duration-300 leading-snug">
                          {cs.title}
                        </h3>
                        <p className="text-white/36 text-[0.8125rem] leading-[1.65]">
                          {cs.description}
                        </p>
                      </div>

                      {/* Outcome callout */}
                      <div
                        className="rounded-lg px-4 py-3 border"
                        style={{
                          background: `rgba(${cs.categoryGroup === "Revenue" ? "77,163,255" : cs.categoryGroup === "Authority" ? "125,211,252" : "37,99,235"},0.04)`,
                          borderColor: `rgba(${cs.categoryGroup === "Revenue" ? "77,163,255" : cs.categoryGroup === "Authority" ? "125,211,252" : "37,99,235"},0.1)`,
                        }}
                      >
                        <p className="text-[0.5625rem] text-white/22 uppercase tracking-[0.14em] font-semibold mb-1">
                          Outcome
                        </p>
                        <p className="text-white/58 text-[0.8125rem] font-medium leading-snug">
                          {cs.outcome}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.625rem] text-white/25 bg-white/[0.035] border border-white/[0.05] px-2.5 py-1 rounded-full"
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
