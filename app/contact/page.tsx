import { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/sections/ContactForm";
import CalEmbed from "@/components/integrations/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Strategy Call — Mariner Nexus",
  description:
    "Book a 30-minute strategy call to map your system, identify constraints, and define what the right build looks like for your business.",
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
              Book a Strategy Call
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
              Let&apos;s map your system.
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              A 30-minute call to understand your business, identify the real constraints,
              and define what the right build actually looks like.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              "No pitch. No pressure.",
              "Clear next steps either way.",
              "30 minutes. High signal.",
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
                Schedule your call
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Pick a time that works. You&apos;ll receive a confirmation and prep questions by email.
              </p>
              <CalEmbed />
            </FadeIn>

            {/* Right: Contact form */}
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                Or send a message
              </h2>
              <p className="text-white/40 text-sm mb-6">
                Prefer to start with context? Fill this out and we&apos;ll follow up directly.
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
              What to expect on the call
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              {
                q: "Is this a sales call?",
                a: "No. It's a strategy call. We map your current situation, identify the gaps, and give you an honest read on what the right system looks like — whether you work with us or not.",
              },
              {
                q: "How long is it?",
                a: "30 minutes. Focused and structured. You'll leave with clarity on what needs to be built and why.",
              },
              {
                q: "Do I need to prepare anything?",
                a: "Just bring a clear description of your business and what you're trying to change, improve, or build. We'll handle the rest.",
              },
              {
                q: "What happens after the call?",
                a: "If there's a fit, we'll send a scoped proposal within 48 hours. If not, you'll still leave with useful direction and a clear sense of what you need.",
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
        </div>
      </section>
    </>
  );
}
