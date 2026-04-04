import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Button from "@/components/ui/Button";
import ConversionSection from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "Services — Mariner Nexus",
  description:
    "Revenue Systems, Authority Systems, and System Builds. We don't sell websites — we deliver transformation, business impact, and execution.",
};

const services = [
  {
    id: "revenue",
    number: "01",
    category: "Revenue Systems",
    tagline: "Built to convert. Designed to scale.",
    description:
      "We build high-performance digital systems focused on one outcome: increasing qualified leads, conversions, and revenue. Every design decision, CTA, and flow is engineered around your business goal.",
    bestFor: ["Service businesses", "Product brands", "Growth-stage companies", "E-commerce operators"],
    includes: [
      "Conversion-focused website design and architecture",
      "E-commerce + Stripe subscription infrastructure",
      "Funnel design and lead capture integration",
      "CTA hierarchy and friction-reduction engineering",
      "GoHighLevel CRM connection and lead segmentation",
    ],
    caseStudy: { label: "See Serene Origins", href: "/case-studies/serene-origins" },
  },
  {
    id: "authority",
    number: "02",
    category: "Authority Systems",
    tagline: "Position yourself as the obvious choice.",
    description:
      "We build personal brand platforms and executive digital presences that communicate credibility, expertise, and leadership at first glance. For founders and operators who know their reputation is a business asset.",
    bestFor: ["Founders", "Consultants", "Executives", "Speakers + thought leaders"],
    includes: [
      "Premium personal brand website design",
      "Messaging and narrative positioning system",
      "Booking integration (Cal.com) for frictionless engagement",
      "Content architecture for authority building over time",
      "Brand identity refinement aligned to strategic goals",
    ],
    caseStudy: { label: "See Gary L Mariner II", href: "/case-studies/gary-mariner" },
  },
  {
    id: "systems",
    number: "03",
    category: "System Builds",
    tagline: "Infrastructure that actually scales.",
    description:
      "For organizations that need more than a website. We design and build CRM-connected platforms, community systems, and operational infrastructure — the kind of digital architecture that supports real organizational growth.",
    bestFor: ["Nonprofits + foundations", "Community organizations", "Operational teams", "Multi-stakeholder platforms"],
    includes: [
      "Full website architecture + community platform build",
      "GoHighLevel CRM intake, tagging, and automation setup",
      "Member onboarding and engagement tracking systems",
      "Discord, Slack, or community platform integration",
      "Internal dashboard and reporting infrastructure (scope dependent)",
    ],
    caseStudy: { label: "See Undugu", href: "/case-studies/undugu" },
  },
];

const tiers = [
  {
    tier: "Foundation",
    range: "$2K – $5K",
    description: "Clean, fast, and professional. For businesses that need a strong digital presence without complexity.",
    includes: ["Core website (5–8 pages)", "Mobile-optimized build", "Performance-first delivery", "Basic CTA structure"],
    timeline: "2–3 weeks",
  },
  {
    tier: "Growth",
    range: "$6K – $12K",
    description: "Conversion-focused with strategic architecture. For brands ready to use their website as a real business tool.",
    includes: ["Full strategy session", "Conversion-engineered design", "CRM or booking integration", "UX refinement + copy review"],
    timeline: "3–5 weeks",
    featured: true,
  },
  {
    tier: "Authority",
    range: "$12K – $25K",
    description: "Premium positioning and brand system integration. For leaders who need a digital presence that commands the room.",
    includes: ["Brand system design", "Advanced interaction design", "Positioning + messaging framework", "Full integration layer"],
    timeline: "5–8 weeks",
  },
  {
    tier: "Systems",
    range: "$20K – $50K+",
    description: "Full-stack operational architecture. For organizations building serious digital infrastructure.",
    includes: ["Complex CRM + automation setup", "Custom dashboards or platforms", "Multi-stakeholder architecture", "Ongoing retainer option"],
    timeline: "8–12 weeks",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              We don&apos;t sell websites.
              <br />
              <span className="text-white/35">We deliver systems.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Every engagement is defined by transformation, business impact, and execution
              level — not page counts or feature lists.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-black">
        <div className="container-tight space-y-5">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <div
                id={service.id}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
                  {/* Left */}
                  <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col gap-6">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-white/20 block mb-2">
                        {service.number}
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                        {service.category}
                      </h2>
                      <p className="text-glow-blue/60 text-sm font-medium italic">
                        {service.tagline}
                      </p>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-3">
                        Best For
                      </p>
                      <ul className="space-y-1.5">
                        {service.bestFor.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-white/45">
                            <span className="w-1 h-1 rounded-full bg-glow-blue/40" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="p-8 lg:p-10 flex flex-col gap-6">
                    <div>
                      <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-4">
                        What&apos;s Included
                      </p>
                      <ul className="space-y-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/55">
                            <span className="w-4 h-4 rounded-full bg-nexus-blue/15 border border-nexus-blue/25 flex items-center justify-center shrink-0 mt-0.5">
                              <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                <path d="M1 3.5l1.5 1.5 3.5-3.5" stroke="#4DA3FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/[0.06]">
                      <Link
                        href={service.caseStudy.href}
                        className="text-sm text-glow-blue/60 hover:text-glow-blue transition-colors flex items-center gap-2 font-medium"
                      >
                        {service.caseStudy.label}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-tight">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
              Investment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Scoped to your stage.
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Pricing is based on complexity, system depth, and business impact — not arbitrary package tiers.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier) => (
              <StaggerItem key={tier.tier}>
                <div
                  className={`h-full rounded-2xl p-7 flex flex-col gap-5 transition-all ${
                    tier.featured
                      ? "bg-nexus-blue/10 border border-nexus-blue/30 relative"
                      : "glass-card"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-nexus-blue text-white px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">
                      {tier.tier}
                    </h3>
                    <p className="text-2xl font-bold text-gradient">{tier.range}</p>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{tier.description}</p>
                  <ul className="space-y-2 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/50">
                        <span className="w-3.5 h-3.5 rounded-full bg-nexus-blue/15 border border-nexus-blue/25 flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <path d="M1 3l1.2 1.2 2.8-2.8" stroke="#4DA3FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs text-white/30">
                      Timeline: <span className="text-white/50">{tier.timeline}</span>
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-10 text-center">
            <p className="text-white/35 text-sm mb-6">
              Not sure which tier is right? The strategy call answers that.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Strategy Call
            </Button>
          </FadeIn>
        </div>
      </section>

      <ConversionSection />
    </>
  );
}
