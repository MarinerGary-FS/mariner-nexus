"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";

const forItems = [
  "Businesses with proven products or services ready to scale",
  "Founders investing in real infrastructure, not just aesthetics",
  "Teams outgrowing their current digital and operational stack",
  "Organizations serious about measurable conversion outcomes",
  "Operators who think in systems, not just one-off tactics",
];

const notForItems = [
  "Early-stage ideas without market validation or revenue",
  "Businesses expecting template-level pricing or timelines",
  "Clients who want fast and cheap instead of right and lasting",
  "One-off projects with no long-term vision or commitment",
  "Teams not ready to be direct partners in the process",
];

export default function QualificationSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="mb-10 md:mb-14">
          <p className="eyebrow mb-4">Right Fit Matters</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-4">
            Built for businesses
            <br />
            <span className="text-white/28">serious about growth.</span>
          </h2>
          <p className="text-white/32 text-[0.9375rem] max-w-[440px] leading-[1.74]">
            We work with a small number of clients each quarter. We&apos;re selective because
            execution at this level demands it.
          </p>
        </FadeIn>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

          {/* This is for */}
          <FadeIn direction="left">
            <div
              className="rounded-2xl p-7 md:p-8 h-full border relative overflow-hidden"
              style={{
                background: "rgba(37,99,235,0.04)",
                borderColor: "rgba(77,163,255,0.12)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/22 to-transparent" />
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "rgba(77,163,255,0.3)", background: "rgba(77,163,255,0.1)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 4.5-5" stroke="rgba(77,163,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em]" style={{ color: "rgba(77,163,255,0.65)" }}>
                  This is for
                </p>
              </div>
              <ul className="space-y-3.5">
                {forItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.34, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.3rem] shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "rgba(77,163,255,0.5)" }} />
                    <span className="text-white/55 text-[0.8125rem] leading-[1.65]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* This is not for */}
          <FadeIn direction="right" delay={0.06}>
            <div
              className="rounded-2xl p-7 md:p-8 h-full border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/22">
                  This is not for
                </p>
              </div>
              <ul className="space-y-3.5">
                {notForItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.34, delay: i * 0.07 + 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[0.3rem] shrink-0 w-1.5 h-1.5 rounded-full bg-white/[0.12]" />
                    <span className="text-white/28 text-[0.8125rem] leading-[1.65]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.2} className="text-center">
          <p className="text-white/22 text-[0.8125rem] mb-4">Not sure if you qualify? A 30-minute call will tell us both.</p>
          <Button href="/contact" variant="secondary" size="md">
            Book a Strategy Call
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
