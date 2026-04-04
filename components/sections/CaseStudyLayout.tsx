import Link from "next/link";
import Image from "next/image";
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
  mockupImage?: string; // Optional: /case-studies/[slug]/mockup.png
  nextStudy?: {
    title: string;
    href: string;
  };
}

/* ── Mockup placeholder — renders a real image if available,
   otherwise a premium wireframe placeholder ── */
function MockupFrame({ src, title }: { src?: string; title: string }) {
  if (src) {
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.07] bg-black">
        <Image
          src={src}
          alt={`${title} mockup`}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 600px"
          priority={false}
        />
      </div>
    );
  }

  // Placeholder — structured wireframe feel
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.07] bg-surface-1">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-1.5 px-4">
        <div className="w-2 h-2 rounded-full bg-white/[0.1]" />
        <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
        <div className="w-2 h-2 rounded-full bg-white/[0.07]" />
        <div className="ml-4 flex-1 max-w-[200px] h-3 rounded-full bg-white/[0.05]" />
      </div>
      {/* Wireframe content */}
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
            {/* PLACEHOLDER — Add mockup: public/case-studies/[slug]/mockup.png */}
            Mockup · {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent_65%)]" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="container-tight relative z-10">
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[0.8125rem] text-white/28 hover:text-white/55 transition-colors mb-10 group"
            >
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              >
                <path d="M10 6H2M5 9L2 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>

            <p className="eyebrow mb-5">{data.category}</p>
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.035em] text-white mb-4 leading-[1.0]">
              {data.title}
            </h1>
            <p className="text-white/38 text-[1rem] md:text-[1.125rem] max-w-xl leading-[1.72] mb-10">
              {data.tagline}
            </p>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.12} className="flex flex-wrap gap-2">
            {data.tools.map((tool) => (
              <span
                key={tool}
                className="text-[0.6875rem] font-medium text-white/35 bg-white/[0.05] border border-white/[0.07] px-3 py-1.5 rounded-full"
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
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {[
              { label: "The Problem", body: data.problem },
              { label: "The Strategy", body: data.strategy },
              { label: "The Outcome", body: data.outcome },
            ].map((block) => (
              <StaggerItem key={block.label}>
                <div className="bg-black p-8 lg:p-10 h-full">
                  <p className="eyebrow text-glow-blue/55 mb-5">{block.label}</p>
                  <p className="text-white/48 text-[0.875rem] leading-[1.78]">{block.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Mockup + System Built ── */}
      <section className="section-padding bg-black">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

            {/* Mockup */}
            <FadeIn direction="left">
              <MockupFrame src={data.mockupImage} title={data.title} />
            </FadeIn>

            {/* System Built */}
            <FadeIn direction="right" delay={0.08}>
              <h2 className="text-[1.625rem] font-bold text-white tracking-[-0.025em] mb-6">
                The system we built
              </h2>
              <ul className="space-y-4">
                {data.systemBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-1.5 w-4 h-4 rounded-full border border-glow-blue/25 bg-nexus-blue/8 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-glow-blue/60" />
                    </span>
                    <span className="text-white/48 text-[0.875rem] leading-[1.72]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Results */}
          <FadeIn>
            <h2 className="text-[1.625rem] font-bold text-white tracking-[-0.025em] mb-7">
              The results delivered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.outcomePoints.map((point, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-5 flex items-start gap-3.5"
                >
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-nexus-blue/15 border border-nexus-blue/25 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l1.5 1.5L6.5 2" stroke="#4DA3FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/55 text-[0.8125rem] leading-[1.65]">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.09),transparent)]" />

        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="eyebrow mb-5">Ready to build yours?</p>
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-white tracking-[-0.03em] mb-3 leading-[1.1]">
              This level of execution
            </h2>
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold tracking-[-0.03em] leading-[1.1] mb-8 text-white/28">
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
