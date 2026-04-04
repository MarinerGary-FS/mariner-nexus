"use client";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";

export default function ConversionSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-blue/30 to-transparent" />

      <div className="container-tight relative text-center">
        <FadeIn>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-6">
            Ready to Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            If your business is growing faster
            <br className="hidden md:block" />
            <span className="text-white/40"> than your systems can support —</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            it&apos;s time to build the infrastructure that matches your ambition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button href="/contact" variant="primary" size="lg">
              Book a Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View the Work First
            </Button>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Strategy Call", note: "30-minute system review" },
              { label: "No Obligation", note: "Understand before committing" },
              { label: "Fast Turnaround", note: "Systems delivered on schedule" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="text-white/70 text-sm font-semibold">{item.label}</span>
                <span className="text-white/30 text-xs">{item.note}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
