"use client";

import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "revenue",
    number: "01",
    title: "Revenue Systems",
    description:
      "High-conversion web builds, e-commerce infrastructure, and funnel architecture designed to increase qualified leads and close rates.",
    deliverables: ["Conversion-focused design", "Payment + subscription setup", "CTA hierarchy"],
  },
  {
    id: "authority",
    number: "02",
    title: "Authority Systems",
    description:
      "Personal brand platforms and executive digital presence built to position you as the clear, credible choice in your market.",
    deliverables: ["Brand narrative + positioning", "Premium web experience", "Booking integration"],
  },
  {
    id: "systems",
    number: "03",
    title: "System Builds",
    description:
      "CRM-connected sites, community platforms, and operational infrastructure built for organizations that need scalable architecture.",
    deliverables: ["GoHighLevel integration", "Community + member systems", "Automation-ready builds"],
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="section-padding bg-surface-1 relative">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container-tight">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="eyebrow mb-4">What We Build</p>
            <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Not websites.
              <br />
              <span className="text-white/32">Systems that move businesses forward.</span>
            </h2>
          </div>
          <Link href="/services" className="link-arrow shrink-0">
            Full breakdown + pricing
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

        {/* Service rows */}
        <StaggerContainer className="rounded-2xl overflow-hidden border border-white/[0.06] divide-y divide-white/[0.05]">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={`/services#${service.id}`} className="group block">
                <div className="relative grid grid-cols-[64px_1fr] lg:grid-cols-[64px_1fr_auto] items-start gap-0 bg-black hover:bg-white/[0.018] transition-colors duration-300">
                  {/* Left-edge accent — materializes on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-glow-blue/38 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number gutter */}
                  <div className="flex items-start justify-center pt-7 pb-7 pl-7">
                    <span className="text-[0.75rem] font-semibold tabular-nums text-white/15 group-hover:text-nexus-blue/55 transition-colors duration-200 mt-0.5">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="py-7 pr-7 lg:pr-0">
                    <h3 className="text-white/88 group-hover:text-white font-semibold text-base mb-2 tracking-tight transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-white/38 text-[0.8125rem] leading-[1.65] mb-4 max-w-lg">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-1.5 text-[0.6875rem] text-white/28">
                          <span className="w-1 h-1 rounded-full bg-glow-blue/35 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow — desktop */}
                  <div className="hidden lg:flex items-center justify-center px-8 self-stretch">
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                      className="text-white/12 group-hover:text-white/35 transition-colors duration-200"
                    >
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <Button href="/services" variant="secondary" size="md">
            View All Services + Pricing
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
