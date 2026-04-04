import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ConversionSection from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "Case Studies — Mariner Nexus",
  description:
    "Four builds. Four very different use cases. One consistent principle: better systems create better outcomes.",
};

const caseStudies = [
  {
    slug: "serene-origins",
    category: "Revenue",
    categoryLabel: "Revenue System",
    title: "Serene Origins",
    industry: "Wellness / Digital Business",
    problem: "A wellness concept with strong potential but no structured digital business platform, unclear monetization path, and inconsistent brand presentation.",
    system: "Premium brand redesign + conversion-focused web experience + Stripe subscription infrastructure + scalable digital customer journey.",
    outcome: "A structured digital wellness platform with improved clarity, stronger visual authority, and a defined revenue system built for scale.",
    tags: ["Brand Redesign", "Subscription System", "Stripe Integration", "Conversion Design"],
  },
  {
    slug: "undugu",
    category: "Systems",
    categoryLabel: "System Build",
    title: "Undugu",
    industry: "Community / Foundation",
    problem: "A growing community foundation with fragmented communication, no structured member intake, and no operational infrastructure to support scale.",
    system: "Website + funnel structure + GoHighLevel CRM intake + Discord community flow alignment + event and engagement tracking system.",
    outcome: "A foundation positioned for scale with clear communication pathways, organized member engagement, and operational infrastructure that grows with them.",
    tags: ["GoHighLevel", "Community Platform", "CRM Architecture", "Workflow Design"],
  },
  {
    slug: "amplify-voices",
    category: "Authority",
    categoryLabel: "Authority System",
    title: "Amplify Voices",
    industry: "Media / Messaging",
    problem: "A media platform with an important mission but a visual presence and information architecture that undermined the credibility it deserved.",
    system: "High-end website redesign + content hierarchy restructuring + storytelling-driven layout + brand system refinement.",
    outcome: "A modern, visually compelling platform that communicates authority and purpose effectively — and looks like it belongs at the top of its category.",
    tags: ["Media Platform", "Brand System", "Storytelling Design", "Authority Positioning"],
  },
  {
    slug: "gary-mariner",
    category: "Authority",
    categoryLabel: "Personal Brand",
    title: "Gary L Mariner II",
    industry: "Personal Brand / Executive",
    problem: "A high-level operator without a digital presence that matched the depth of his thinking, network, or strategic capability.",
    system: "Personal website + messaging and positioning system + booking and contact integration + authority platform architecture.",
    outcome: "A professional digital presence that supports credibility, influence, and future opportunities — structured to evolve with the brand.",
    tags: ["Personal Brand", "Positioning System", "Cal.com", "Executive Presence"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Four builds.
              <br />
              <span className="text-white/35">One consistent principle.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Better systems create better outcomes. These engagements prove it across four
              different industries and use cases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-black">
        <div className="container-tight">
          <StaggerContainer className="grid grid-cols-1 gap-6">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group block">
                  <div className="glass-card rounded-2xl overflow-hidden glass-card-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
                      {/* Left accent panel */}
                      <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between gap-8">
                        <div>
                          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-glow-blue/60 block mb-3">
                            {cs.categoryLabel}
                          </span>
                          <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-gradient transition-all">
                            {cs.title}
                          </h2>
                          <p className="text-white/35 text-sm mt-2">{cs.industry}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cs.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-white/35 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right content */}
                      <div className="p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-2">
                            Problem
                          </p>
                          <p className="text-white/50 text-sm leading-relaxed">{cs.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-2">
                            System
                          </p>
                          <p className="text-white/50 text-sm leading-relaxed">{cs.system}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-2">
                            Outcome
                          </p>
                          <p className="text-white/55 text-sm leading-relaxed font-medium">{cs.outcome}</p>
                          <div className="mt-4 flex items-center gap-2 text-white/25 group-hover:text-glow-blue/70 transition-colors text-sm font-medium">
                            <span>View case study</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ConversionSection />
    </>
  );
}
