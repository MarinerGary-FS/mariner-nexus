import Link from "next/link";
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
  nextStudy?: {
    title: string;
    href: string;
  };
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        <div className="container-tight relative">
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 11l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Case Studies
            </Link>

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              {data.category}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-tight">
              {data.title}
            </h1>
            <p className="text-white/40 text-xl max-w-2xl leading-relaxed">{data.tagline}</p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 flex flex-wrap gap-3">
            {data.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-medium text-white/40 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black">
        <div className="container-tight">
          {/* Three-column breakdown */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-20">
            {[
              { label: "The Problem", content: data.problem },
              { label: "The Strategy", content: data.strategy },
              { label: "The Outcome", content: data.outcome },
            ].map((block) => (
              <StaggerItem key={block.label}>
                <div className="bg-black p-8 lg:p-10 h-full">
                  <p className="text-xs font-semibold text-glow-blue/60 uppercase tracking-widest mb-4">
                    {block.label}
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">{block.content}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* System Built */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                The system we built
              </h2>
              <ul className="space-y-4">
                {data.systemBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full border border-glow-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-glow-blue/60" />
                    </span>
                    <span className="text-white/60 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                The results delivered
              </h2>
              <ul className="space-y-4">
                {data.outcomePoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full bg-nexus-blue/20 border border-nexus-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="#4DA3FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/65 text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="text-white/30 text-sm uppercase tracking-widest font-semibold mb-4">
              Ready to build yours?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              This level of execution
              <br />
              <span className="text-white/40">is available for your business.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Book a Strategy Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              {data.nextStudy && (
                <Button href={data.nextStudy.href} variant="ghost" size="lg">
                  Next: {data.nextStudy.title} →
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
