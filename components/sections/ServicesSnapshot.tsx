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
    deliverables: ["Conversion-focused design", "Payment + subscription setup", "CTA hierarchy engineering"],
  },
  {
    id: "authority",
    number: "02",
    title: "Authority Systems",
    description:
      "Personal brand platforms and executive digital presence built to position you as the clear, credible choice in your market.",
    deliverables: ["Brand narrative + positioning", "Premium web experience", "Speaking + consulting infrastructure"],
  },
  {
    id: "systems",
    number: "03",
    title: "System Builds",
    description:
      "CRM-connected sites, community platforms, and operational infrastructure built for organizations that need scalable architecture.",
    deliverables: ["GoHighLevel integration", "Community + member systems", "Automation-ready infrastructure"],
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative">
      <div className="container-tight">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Not websites.
              <br />
              <span className="text-white/40">Systems that move businesses forward.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            Full services breakdown
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={`/services#${service.id}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_auto] gap-6 p-8 bg-black hover:bg-white/[0.02] transition-colors duration-300 items-start border-b border-white/[0.06] last:border-b-0">
                  <span className="text-3xl font-bold text-white/10 group-hover:text-nexus-blue/30 transition-colors tabular-nums">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-1">
                      {service.deliverables.map((d) => (
                        <li key={d} className="text-xs text-white/30 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-glow-blue/40" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-white/15 group-hover:text-white/40 transition-colors mt-1 hidden lg:block"
                  >
                    <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <Button href="/services" variant="secondary" size="md">
            View All Services + Pricing
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
