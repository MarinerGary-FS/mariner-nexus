import { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/sections/ContactForm";
import CalEmbed from "@/components/integrations/CalEmbed";

export const metadata: Metadata = {
  title: "Evolution Entry — Mariner Nexus",
  description:
    "Begin an evolution briefing to map your current operating reality, identify constraints, and define the future-state ecosystem your business needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 block mb-5">
              Evolution Entry
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
              Enter with clarity.
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              A focused evolution briefing. We map your current system, identify the real
              constraints, and define what needs to evolve — and what does not.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              "No pitch. No pressure.",
              "Future-state map if there is a fit.",
              "Limited spots available each quarter.",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-glow-blue/50" />
                {item}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Booking + Form */}
      <section className="section-padding bg-black">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Cal.com embed */}
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                Schedule your briefing
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Pick a time that works. You&apos;ll receive a confirmation and focused prep questions by email.
              </p>
              <CalEmbed />
            </FadeIn>

            {/* Right: Contact form */}
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                Or open the context
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Prefer to begin with context? Fill this out and we&apos;ll follow up directly.
              </p>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ / What to expect */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-tight max-w-2xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              What to expect in the briefing
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              {
                q: "Is this a sales call?",
                a: "No. It is a structured evolution briefing. We map your current situation, identify the gaps, and give you an honest read on what the right system looks like — whether you work with us or not.",
              },
              {
                q: "How long is it?",
                a: "30 minutes. Focused and structured. You will leave with clarity on what needs to evolve and why.",
              },
              {
                q: "Do I need to prepare anything?",
                a: "Bring a clear description of your business and what you are trying to change, improve, or build. We will handle the rest.",
              },
              {
                q: "What happens after the call?",
                a: "If there is a clear fit, we send a scoped proposal within 48 hours — specific to your business, not a template. If it is not the right match, you will leave with a clear picture of what you actually need and why.",
              },
            ].map((item) => (
              <FadeIn key={item.q}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-white font-semibold text-base mb-2">{item.q}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mt-10 pt-8 border-t border-white/[0.055] text-center">
            <p className="text-white/22 text-[0.8125rem] mb-2">Prefer email?</p>
            <a
              href="mailto:info@marinernexus.com"
              className="text-white/45 hover:text-white/75 text-[0.9375rem] font-medium transition-colors duration-200"
            >
              info@marinernexus.com
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
