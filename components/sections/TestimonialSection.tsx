"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote: "This is fire. You really snapped with this.",
    name: "EazieDaGod",
    role: "Music Artist · Creator Platform",
    accentRgb: "212,175,55",
  },
  {
    quote: "Bro… that's beautiful.",
    name: "Music Client",
    role: "Artist Brand Build",
    accentRgb: "77,163,255",
  },
  {
    quote: "You did that?? This is next level.",
    name: "Brand Client",
    role: "Authority System Build",
    accentRgb: "125,211,252",
  },
  {
    quote: "I didn't think it would come together this fast. This is exactly what I needed.",
    name: "Service Business Client",
    role: "Revenue System Build",
    accentRgb: "77,163,255",
  },
];

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.04),transparent)]" />

      <div className="container-tight relative">
        {/* Header */}
        <FadeIn className="mb-12">
          <p className="eyebrow mb-4">Client Reactions</p>
          <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white leading-[1.1]">
            The reaction we&apos;re
            <br />
            <span className="text-white/28">always building toward.</span>
          </h2>
        </FadeIn>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl p-7 md:p-8 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.05) inset",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, rgba(${t.accentRgb},0.4), transparent 55%)` }}
              />

              {/* Background quotation mark */}
              <div
                className="absolute top-4 right-6 text-[7rem] font-bold leading-none select-none pointer-events-none"
                style={{ color: `rgba(${t.accentRgb},0.055)` }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 mb-6">
                <p
                  className="text-[1.125rem] md:text-[1.25rem] font-semibold leading-[1.45] tracking-[-0.01em]"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-7 h-7 rounded-full border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: `rgba(${t.accentRgb},0.2)`,
                    background: `rgba(${t.accentRgb},0.07)`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: `rgba(${t.accentRgb},0.6)` }}
                  />
                </div>
                <div>
                  <p className="text-white/65 text-[0.8125rem] font-semibold leading-tight">{t.name}</p>
                  <p className="text-white/24 text-[0.6875rem] leading-tight mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
