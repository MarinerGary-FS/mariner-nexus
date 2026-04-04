import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ConversionSection from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "Case Studies — Mariner Nexus",
  description:
    "Six builds across revenue systems, authority platforms, and operational infrastructure. One consistent principle: better systems create better outcomes.",
};

const categoryGroups = [
  {
    group: "Revenue · Service Business",
    accentColor: "rgba(77,163,255,0.6)",
    description: "Systems engineered to increase leads, conversions, and revenue.",
    studies: [
      {
        slug: "act-of-valor",
        category: "Revenue · Service Business",
        industry: "Emergency Services",
        title: "Act of Valor",
        problem: "A high-stakes service business losing conversions at the most critical moment of consideration — when trust is required and time is short.",
        system: "Credentials-forward homepage + urgent CTA architecture + GoHighLevel CRM intake + persistent call-to-action across all scroll depths.",
        outcome: "A high-trust conversion platform where authority is communicated immediately and the path to contact is frictionless.",
        tags: ["Conversion Architecture", "GoHighLevel", "Local Authority", "Emergency UX"],
      },
      {
        slug: "serene-origins",
        category: "Revenue · Wellness",
        industry: "Digital Business",
        title: "Serene Origins",
        problem: "A wellness brand with real potential but a digital experience that undermined trust and offered no clear path to subscription.",
        system: "Premium brand redesign + conversion-focused web experience + Stripe subscription infrastructure + onboarding journey.",
        outcome: "A structured digital wellness platform with clear monetization, stronger visual authority, and a defined revenue system.",
        tags: ["Brand Redesign", "Stripe", "Subscription System", "Conversion Design"],
      },
    ],
  },
  {
    group: "Authority · Creator · Personal Brand",
    accentColor: "rgba(125,211,252,0.55)",
    description: "Platforms built to position individuals and brands as the clear, credible choice.",
    studies: [
      {
        slug: "eaziedagod",
        category: "Authority · Creator",
        industry: "Music / Artist",
        title: "EazieDaGod",
        problem: "A distinct creative identity with a fragmented digital footprint — scattered links, no immersive entry point, and a presence that didn't match the caliber of the art.",
        system: "Immersive full-experience entry design + premium artist presentation platform + strategic link architecture + creator-specific CTA flows.",
        outcome: "A unified digital identity that communicates brand authority within seconds and routes every visitor with intention.",
        tags: ["Creator Brand", "Immersive Design", "Link Architecture", "Artist Platform"],
      },
      {
        slug: "gary-mariner",
        category: "Authority · Executive",
        industry: "Personal Brand",
        title: "Gary L Mariner II",
        problem: "A high-level operator without a digital presence that matched the depth of his thinking, network, or strategic capability.",
        system: "Premium personal website + messaging and positioning system + Cal.com booking integration + authority platform architecture.",
        outcome: "A professional digital presence that commands trust, communicates leadership, and creates clear pathways for the right people to connect.",
        tags: ["Personal Brand", "Positioning System", "Cal.com", "Executive Presence"],
      },
    ],
  },
  {
    group: "Systems · Community · Media",
    accentColor: "rgba(37,99,235,0.7)",
    description: "Operational infrastructure and digital systems built for organizations that need to scale.",
    studies: [
      {
        slug: "undugu",
        category: "Systems · Community",
        industry: "Foundation",
        title: "Undugu",
        problem: "A growing community foundation operating without the systems to support its growth — manual intake, inconsistent communication, no engagement tracking.",
        system: "Website + funnel structure + GoHighLevel CRM + Discord community alignment + event and engagement tracking.",
        outcome: "A foundation positioned for scale with structured intake, targeted communication, and operational infrastructure that grows with the organization.",
        tags: ["GoHighLevel", "CRM Architecture", "Community Platform", "Workflow Design"],
      },
      {
        slug: "amplify-voices",
        category: "Systems · Media",
        industry: "Media Platform",
        title: "Amplify Voices",
        problem: "A media platform with an important mission undermined by a visual presence and information architecture that didn't match its credibility.",
        system: "High-end website redesign + content hierarchy restructuring + storytelling-driven layout + brand system refinement.",
        outcome: "A modern, compelling media platform that communicates authority and purpose effectively — and looks like it belongs at the top of its category.",
        tags: ["Media Platform", "Storytelling Design", "Brand System", "Authority Positioning"],
      },
    ],
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
            <p className="eyebrow mb-5">Case Studies</p>
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.035em] text-white mb-5 leading-[1.0]">
              Six builds.
              <br />
              <span className="text-white/32">One consistent principle.</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto leading-[1.7]">
              Better systems create better outcomes — across revenue, authority,
              and operational infrastructure.
            </p>
          </FadeIn>

          {/* Category legend */}
          <FadeIn delay={0.12} className="mt-8 flex flex-wrap items-center justify-center gap-5">
            {[
              { label: "Revenue · Service Business", color: "rgba(77,163,255,0.6)" },
              { label: "Authority · Creator · Personal Brand", color: "rgba(125,211,252,0.55)" },
              { label: "Systems · Community · Media", color: "rgba(37,99,235,0.7)" },
            ].map((cat) => (
              <span key={cat.label} className="flex items-center gap-2 text-[0.75rem] text-white/35 font-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                {cat.label}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Case Studies — grouped by category */}
      <section className="pb-0 bg-black">
        <div className="container-tight space-y-20">
          {categoryGroups.map((group) => (
            <FadeIn key={group.group}>
              {/* Group header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: group.accentColor }}
                />
                <div>
                  <h2 className="text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-white/45">
                    {group.group}
                  </h2>
                  <p className="text-white/25 text-[0.75rem] mt-0.5">{group.description}</p>
                </div>
              </div>

              {/* Studies in group */}
              <StaggerContainer className="grid grid-cols-1 gap-4">
                {group.studies.map((cs) => (
                  <StaggerItem key={cs.slug}>
                    <Link href={`/case-studies/${cs.slug}`} className="group block">
                      <div
                        className="glass-card glass-card-hover rounded-2xl overflow-hidden"
                      >
                        {/* Category accent line */}
                        <div
                          className="h-px w-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                          style={{ background: `linear-gradient(90deg, ${group.accentColor}, transparent 60%)` }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0">
                          {/* Left panel */}
                          <div className="p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-white/[0.055] flex flex-col justify-between gap-6">
                            <div>
                              <span className="eyebrow text-glow-blue/55 block mb-3">
                                {cs.category}
                              </span>
                              <h3 className="text-[1.25rem] font-bold text-white tracking-tight group-hover:text-gradient transition-all duration-300">
                                {cs.title}
                              </h3>
                              <p className="text-white/30 text-[0.8125rem] mt-1">{cs.industry}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cs.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[0.6875rem] text-white/30 bg-white/[0.04] border border-white/[0.055] px-2.5 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right content */}
                          <div className="p-8 lg:p-9 grid grid-cols-1 md:grid-cols-3 gap-7">
                            {[
                              { label: "Problem", body: cs.problem },
                              { label: "System", body: cs.system },
                              { label: "Outcome", body: cs.outcome },
                            ].map((block) => (
                              <div key={block.label}>
                                <p className="text-[0.625rem] text-white/22 uppercase tracking-[0.14em] font-semibold mb-2">
                                  {block.label}
                                </p>
                                <p className={`text-[0.8125rem] leading-[1.65] ${
                                  block.label === "Outcome" ? "text-white/55 font-medium" : "text-white/40"
                                }`}>
                                  {block.body}
                                </p>
                                {block.label === "Outcome" && (
                                  <div className="mt-4 flex items-center gap-1.5 text-white/22 group-hover:text-glow-blue/60 transition-colors duration-200 text-[0.8125rem] font-medium">
                                    View case study
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom padding before CTA */}
      <div className="pb-20 bg-black" />

      <ConversionSection />
    </>
  );
}
