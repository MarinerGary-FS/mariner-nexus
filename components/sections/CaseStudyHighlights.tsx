"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const caseStudies = [
  {
    slug: "serene-origins",
    category: "Revenue System",
    industry: "Wellness",
    title: "Serene Origins",
    description:
      "A wellness concept transformed into a structured digital business platform with premium positioning and a defined subscription revenue pathway.",
    outcome: "Subscription infrastructure + conversion-focused redesign",
    tags: ["Brand Redesign", "Stripe", "Conversion Design"],
    span: "col-span-1",
  },
  {
    slug: "undugu",
    category: "System Build",
    industry: "Community",
    title: "Undugu",
    description:
      "A foundation rebuilt for scale — CRM intake, member tracking, and communication architecture that supports organizational growth.",
    outcome: "CRM-ready workflows + operational infrastructure",
    tags: ["GoHighLevel", "CRM Architecture", "Community Platform"],
    span: "col-span-1",
  },
  {
    slug: "amplify-voices",
    category: "Authority System",
    industry: "Media",
    title: "Amplify Voices",
    description:
      "A media platform reimagined with story-driven layout, elevated brand presentation, and authority positioning that holds attention.",
    outcome: "Premium media presence + brand authority",
    tags: ["Media Platform", "Storytelling Design", "Brand System"],
    span: "col-span-1",
  },
  {
    slug: "gary-mariner",
    category: "Personal Brand",
    industry: "Executive",
    title: "Gary L Mariner II",
    description:
      "Personal brand elevated into a structured authority platform — reflecting leadership, strategic execution, and the depth of the thinking behind it.",
    outcome: "Executive digital presence + booking integration",
    tags: ["Personal Brand", "Positioning System", "Cal.com"],
    span: "col-span-1",
  },
];

export default function CaseStudyHighlights() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(37,99,235,0.06),transparent)]" />

      <div className="container-tight relative">
        {/* Section header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="eyebrow mb-4">Case Studies</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Four builds.
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

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.slug}>
              <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full glass-card glass-card-hover rounded-2xl p-7 flex flex-col gap-5"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
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
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
