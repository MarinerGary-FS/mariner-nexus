import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import { publicBookingPathways } from "@/lib/booking";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Evolution Entry | Strategic Conversion Threshold",
  description:
    "Enter the Mariner Nexus evolution threshold through strategic briefing pathways for creator identity systems, operational evolution, and future-state ecosystem mapping.",
  path: "/contact",
});

const briefingPrompts = [
  "What currently feels fragmented inside your business?",
  "What communication or customer experience gaps are limiting growth?",
  "What are you trying to evolve over the next 12 months?",
  "What systems or workflows feel disconnected?",
  "What would your business look like if it operated at a higher level?",
];

const framingPoints = [
  "Operational friction",
  "Future-state mapping",
  "Ecosystem architecture",
  "Strategic alignment",
  "Human-centered modernization",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_0%,rgba(37,99,235,0.13),transparent_64%)]" />
        <div className="absolute inset-0 grid-pattern opacity-35" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="eyebrow mb-6">Evolution Entry</p>
            <h1 className="mx-auto max-w-5xl text-[2.35rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3rem] md:text-[5.75rem] md:leading-[0.98] md:tracking-[-0.04em]">
              Every business reaches a point where fragmented systems are no longer enough.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
              This is the protected threshold where passive interest becomes strategic alignment.
              The next step is not a vendor call. It is a structured entry into operational evolution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-black pb-24 md:pb-32">
        <div className="container-tight">
          <FadeIn>
            <div className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-7 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="eyebrow mb-4 text-glow-blue/55">Strategic Framing</p>
                  <h2 className="text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-3xl md:text-5xl">
                    The briefing begins with the business reality.
                  </h2>
                </div>
                <div>
                  <p className="text-[0.98rem] leading-8 text-white/48">
                    The Evolution Briefing is designed to uncover where your operations,
                    communication, digital authority, customer experience, and scalability
                    currently stand, then define what your future-state ecosystem could become.
                    Scope and investment are shaped by operational reality, not generic packages.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {framingPoints.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/[0.065] bg-black/35 px-3 py-1.5 text-[0.72rem] font-medium text-white/42"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#050608] py-24 md:py-32">
        <div className="container-tight">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Pathway Selection</p>
            <h2 className="text-[2.25rem] font-bold leading-[1.08] tracking-[-0.034em] text-white sm:text-4xl md:text-6xl">
              Choose the correct entry layer.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/42">
              Each pathway is structured around a different level of operational readiness.
              Select the one that matches the conversation your business is ready to have.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {publicBookingPathways.map((pathway, index) => (
              <FadeIn key={pathway.key} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/[0.065] bg-black/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-glow-blue/30 hover:bg-white/[0.035] md:p-7">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-glow-blue/48">
                        {pathway.duration}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-white">
                        {pathway.name}
                      </h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-white/32 transition duration-300 group-hover:border-glow-blue/35 group-hover:text-glow-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-white/45">{pathway.purpose}</p>

                  <div className="mt-7">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white/22">
                      Best For
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pathway.bestFor.map((fit) => (
                        <span
                          key={fit}
                          className="rounded-full border border-white/[0.06] bg-white/[0.035] px-3 py-1 text-[0.72rem] text-white/36"
                        >
                          {fit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={pathway.href}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-nexus-blue px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-glow-blue md:w-fit"
                  >
                    {pathway.cta}
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 md:py-32">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <p className="eyebrow mb-5 text-glow-blue/55">Briefing Preparation</p>
              <h2 className="text-[2.25rem] font-bold leading-[1.08] tracking-[-0.034em] text-white sm:text-4xl md:text-6xl">
                Come prepared to discuss the real constraints.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-white/44">
                The conversation is designed to surface where the business feels fragmented,
                what systems are slowing growth, and what kind of experience customers should
                feel when they encounter your brand.
              </p>
            </FadeIn>

            <div className="space-y-3">
              {briefingPrompts.map((prompt, index) => (
                <FadeIn key={prompt} delay={index * 0.05}>
                  <div className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-5">
                    <span className="mt-1 text-[0.68rem] font-semibold text-glow-blue/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-white/52">{prompt}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07090d] py-24 md:py-32">
        <div className="divider-glow absolute left-0 right-0 top-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_55%,rgba(37,99,235,0.1),transparent_70%)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="eyebrow mb-5">Confirmation Continuity</p>
            <h2 className="mx-auto max-w-4xl text-[2.25rem] font-bold leading-[1.08] tracking-[-0.034em] text-white sm:text-4xl md:text-6xl md:leading-[1.05]">
              Your Evolution Briefing is the first strategic movement.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/44">
              The next step is not a sales call. It is a strategic conversation about where
              your business is now, where it is trying to go, and what operational ecosystem
              can help it get there.
            </p>
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-black/40 p-6">
              <p className="text-sm leading-7 text-white/40">
                Not ready to schedule yet? Send a direct note to{" "}
                <a
                  href="mailto:gary@marinernexus.com"
                  className="font-medium text-white/68 transition-colors hover:text-white"
                >
                  gary@marinernexus.com
                </a>{" "}
                with what you are trying to evolve.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
