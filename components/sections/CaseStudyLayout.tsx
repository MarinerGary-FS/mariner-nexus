"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Button from "@/components/ui/Button";

interface CaseStudyData {
  category: string;
  title: string;
  industry: string;
  tagline: string;
  problem: string;
  strategy: string;
  systemBuilt: string[];
  tools: string[];
  outcome: string;
  outcomePoints: string[];
  mockupImage?: string; // /case-studies/[slug]/mockup.png
  themeAccentRgb?: string; // optional client identity accent, e.g. "212,175,55" for gold
  nextStudy?: {
    title: string;
    href: string;
  };
}

/* ── Mockup Frame — real image when available, premium wireframe otherwise ── */
function MockupFrame({ src, title }: { src?: string; title: string }) {
  if (src) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        whileHover={{ scale: 1.012 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 2px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.09), 0 24px 64px rgba(0,0,0,0.65), 0 0 80px rgba(37,99,235,0.1)",
        }}
      >
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 z-30 h-8 flex items-center gap-1.5 px-4 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
          <div className="ml-4 h-3 rounded-full bg-white/[0.05] flex-1 max-w-[180px] flex items-center px-2.5">
            <span className="text-[0.5rem] text-white/18 font-medium tracking-wide">marinernexus.com</span>
          </div>
        </div>
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent_60%)] z-10 pointer-events-none" />
        <Image
          src={src}
          alt={`${title} — site mockup`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority={false}
        />
        {/* Top-edge glass reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
      </motion.div>
    );
  }

  // Premium wireframe placeholder
  return (
    <div
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden"
      style={{
        background: "rgba(15,15,15,1)",
        boxShadow: "0 2px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.025] border-b border-white/[0.05] flex items-center gap-1.5 px-4">
        <div className="w-2 h-2 rounded-full bg-white/[0.12]" />
        <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
        <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
        <div className="ml-4 flex-1 max-w-[180px] h-3 rounded-full bg-white/[0.05]" />
      </div>
      {/* Wireframe layout */}
      <div className="absolute top-8 left-0 right-0 bottom-0 p-5 flex flex-col gap-3">
        <div className="h-5 w-3/5 rounded bg-white/[0.06]" />
        <div className="h-3 w-4/5 rounded bg-white/[0.04]" />
        <div className="h-3 w-2/3 rounded bg-white/[0.04]" />
        <div className="flex gap-3 mt-2">
          <div className="h-8 w-28 rounded-lg bg-nexus-blue/20" />
          <div className="h-8 w-24 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="flex-1 mt-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center">
          <p className="text-white/15 text-[0.6875rem] font-medium tracking-wide">
            Mockup · {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  const accentRgb = data.themeAccentRgb ?? "77,163,255";
  const accentColor = `rgba(${accentRgb},0.7)`;
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(37,99,235,0.11),transparent_62%)]" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black to-transparent" />

        <div className="container-tight relative z-10">
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[0.8125rem] text-white/25 hover:text-white/55 transition-colors mb-10 group"
            >
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              >
                <path d="M10 6H2M5 9L2 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
              <p className="eyebrow" style={{ color: `rgba(${accentRgb},0.65)` }}>{data.category}</p>
            </div>
            <h1 className="text-[3rem] md:text-[4.25rem] lg:text-[5.25rem] font-bold tracking-[-0.036em] text-white mb-4 leading-[0.96]">
              {data.title}
            </h1>
            <p className="text-white/35 text-[1rem] md:text-[1.125rem] max-w-[520px] leading-[1.74] mb-10">
              {data.tagline}
            </p>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.12} className="flex flex-wrap gap-2">
            {data.tools.map((tool) => (
              <span
                key={tool}
                className="text-[0.6875rem] font-medium text-white/32 bg-white/[0.045] border border-white/[0.065] px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Problem / Strategy / Outcome ── */}
      <section className="bg-black pb-0">
        <div className="container-tight">
          <StaggerContainer
            className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.05]"
          >
            {[
              { label: "The Problem", body: data.problem },
              { label: "The Strategy", body: data.strategy },
              { label: "The Outcome", body: data.outcome },
            ].map((block, i) => (
              <StaggerItem key={block.label}>
                <div
                  className="bg-black p-8 lg:p-10 h-full"
                  style={{
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        background: i === 0 ? "rgba(255,255,255,0.25)" : i === 1 ? `rgba(${accentRgb},0.7)` : `rgba(${accentRgb},0.45)`,
                      }}
                    />
                    <p className="eyebrow text-glow-blue/50">{block.label}</p>
                  </div>
                  <p className="text-white/45 text-[0.875rem] leading-[1.8]">{block.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Mockup + System Built ── */}
      <section className="section-padding bg-black">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-start">

            {/* Mockup */}
            <div>
              <p className="eyebrow mb-4" style={{ color: `rgba(${accentRgb},0.45)` }}>The Build</p>
              <MockupFrame src={data.mockupImage} title={data.title} />
            </div>

            {/* System Built */}
            <FadeIn direction="right" delay={0.08}>
              <p className="eyebrow mb-4 text-glow-blue/45">System Architecture</p>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold text-white tracking-[-0.025em] mb-7 leading-tight">
                What we engineered
              </h2>
              <ul className="space-y-4">
                {data.systemBuilt.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="mt-[0.3rem] w-4 h-4 rounded-full border border-glow-blue/22 bg-nexus-blue/8 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: `rgba(${accentRgb},0.55)` }} />
                    </span>
                    <span className="text-white/45 text-[0.875rem] leading-[1.74]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Results */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-glow flex-1 opacity-60" />
              <p className="eyebrow shrink-0" style={{ color: `rgba(${accentRgb},0.52)` }}>Outcomes Delivered</p>
              <div className="divider-glow flex-1 opacity-60" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.outcomePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card glass-card-hover rounded-xl p-5 flex items-start gap-3.5 group"
                >
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-nexus-blue/12 border border-nexus-blue/22 flex items-center justify-center shrink-0 group-hover:border-nexus-blue/40 transition-colors duration-300">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l1.5 1.5L6.5 2" stroke="#4DA3FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/52 text-[0.8125rem] leading-[1.68] group-hover:text-white/65 transition-colors duration-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_50%,rgba(37,99,235,0.09),transparent)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="eyebrow mb-5">Ready to build yours?</p>
            <h2 className="text-[2.25rem] md:text-[3.25rem] font-bold text-white tracking-[-0.032em] mb-3 leading-[1.06]">
              This level of execution
            </h2>
            <h2 className="text-[2.25rem] md:text-[3.25rem] font-bold tracking-[-0.032em] leading-[1.06] mb-8 text-white/25">
              is available for your business.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              {data.nextStudy && (
                <Button href={data.nextStudy.href} variant="ghost" size="lg">
                  Next: {data.nextStudy.title}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
