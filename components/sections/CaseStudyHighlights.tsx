"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { caseStudies } from "@/lib/case-studies";

// Category accent system — single source
const categoryConfig: Record<string, {
  accentColor: string;
  labelColor: string;
  dotColor: string;
  tintRgb: string;
}> = {
  Revenue:   { accentColor: "rgba(77,163,255,0.6)",  labelColor: "rgba(77,163,255,0.65)",  dotColor: "#4DA3FF", tintRgb: "77,163,255"  },
  Authority: { accentColor: "rgba(125,211,252,0.55)", labelColor: "rgba(125,211,252,0.65)", dotColor: "#7DD3FC", tintRgb: "125,211,252" },
  Systems:   { accentColor: "rgba(37,99,235,0.7)",   labelColor: "rgba(37,99,235,0.75)",   dotColor: "#2563EB", tintRgb: "37,99,235"   },
};

export default function CaseStudyHighlights() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(37,99,235,0.04),transparent)]" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="eyebrow mb-4">Proof of Work</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Six builds.
              <br />
              <span className="text-white/28">One consistent principle.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end shrink-0">
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
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.dotColor, opacity: 0.65 }} />
                  <span className="text-[0.5625rem] text-white/22 font-medium tracking-[0.1em] uppercase">
                    {group}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid — driven by canonical caseStudies */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs) => {
            const config = categoryConfig[cs.categoryGroup] ?? categoryConfig.Revenue;
            return (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={!prefersReduced ? { y: -5 } : {}}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full flex flex-col overflow-hidden rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Category accent bar */}
                    <div
                      className="h-px w-full transition-opacity duration-300 opacity-40 group-hover:opacity-80"
                      style={{ background: `linear-gradient(90deg, ${config.accentColor}, transparent 65%)` }}
                    />

                    {/* Mockup preview strip */}
                    <div className="relative w-full h-[200px] sm:h-[224px] overflow-hidden bg-black/60">
                      {/* Browser chrome */}
                      <div className="absolute top-0 left-0 right-0 z-20 h-7 flex items-center gap-1.5 px-3 bg-gradient-to-b from-black/85 to-transparent pointer-events-none">
                        <div className="w-2 h-2 rounded-full opacity-40" style={{ background: config.dotColor }} />
                        <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                        <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                        <div className="ml-3 h-2.5 rounded-full bg-white/[0.05] flex-1 max-w-[120px]" />
                      </div>
                      <Image
                        src={cs.mockupImage}
                        alt={`${cs.title} preview`}
                        fill
                        className="object-cover object-top opacity-[0.72] group-hover:opacity-[0.9] scale-[1.02] group-hover:scale-[1.0] transition-[opacity,transform] duration-500"
                        sizes="(max-width: 768px) 100vw, 560px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                      {/* Category badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/[0.07]">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: config.dotColor, opacity: 0.75 }} />
                        <span className="text-[0.5625rem] text-white/42 font-semibold tracking-[0.1em] uppercase">
                          {cs.categoryGroup}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4 flex-1">
                      {/* Category + industry */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-[0.625rem] font-semibold uppercase tracking-[0.14em]"
                            style={{ color: config.labelColor }}
                          >
                            {cs.category}
                          </span>
                          <span className="text-white/12 text-xs">·</span>
                          <span className="text-[0.6875rem] text-white/24 font-medium">{cs.industry}</span>
                        </div>
                        <svg
                          width="12" height="12" viewBox="0 0 14 14" fill="none"
                          className="text-white/12 group-hover:text-white/38 transition-colors duration-200 mt-0.5 shrink-0"
                        >
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Title + description */}
                      <div>
                        <h3 className="text-[1.125rem] font-bold text-white mb-2 tracking-tight group-hover:text-gradient transition-all duration-300 leading-snug">
                          {cs.title}
                        </h3>
                        <p className="text-white/35 text-[0.8125rem] leading-[1.65]">
                          {cs.description}
                        </p>
                      </div>

                      {/* Outcome callout */}
                      <div
                        className="rounded-lg px-4 py-3 border"
                        style={{
                          background: `rgba(${config.tintRgb},0.04)`,
                          borderColor: `rgba(${config.tintRgb},0.1)`,
                        }}
                      >
                        <p className="text-[0.5625rem] text-white/20 uppercase tracking-[0.14em] font-semibold mb-1">
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
                            className="text-[0.625rem] text-white/24 bg-white/[0.035] border border-white/[0.05] px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hover CTA — slides into view */}
                      <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-[0.75rem] font-semibold" style={{ color: "rgba(77,163,255,0.7)" }}>
                          Read the build
                        </span>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ color: "rgba(77,163,255,0.55)" }}>
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
