"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";

const sceneEase = [0.16, 1, 0.3, 1] as const;

const fractureSignals = [
  "Customer journeys split across disconnected touchpoints.",
  "Automation exists, but the business still feels reactive.",
  "Positioning says growth while the infrastructure creates drag.",
  "Teams keep compensating for systems that should be carrying weight.",
];

const nexusLayers = [
  {
    title: "Strategic Exposure",
    body: "We reveal where fragmentation is weakening trust, response, revenue, and operational clarity.",
  },
  {
    title: "System Architecture",
    body: "We map the connective tissue between experience, automation, communication, and scale.",
  },
  {
    title: "Cinematic Interface",
    body: "We shape the public environment so value is felt before it is explained.",
  },
  {
    title: "Operational Continuity",
    body: "We build for the next evolution: CRM, scheduling, intake, segmentation, and future automation.",
  },
];

const evolutionLayers = [
  {
    index: "01",
    title: "Clarity Layer",
    body: "Offer, audience, trust signals, and narrative become legible enough for serious buyers to move.",
  },
  {
    index: "02",
    title: "Experience Layer",
    body: "Pages stop behaving like content blocks and begin operating as guided decision environments.",
  },
  {
    index: "03",
    title: "Systems Layer",
    body: "Lead capture, routing, scheduling, CRM handoff, and follow-up are planned as one connected flow.",
  },
  {
    index: "04",
    title: "Evolution Layer",
    body: "The platform is structured to keep expanding without losing atmosphere, clarity, or control.",
  },
];

const trustPrinciples = [
  "Doctrine before decoration",
  "Restraint before spectacle",
  "Humanity before automation",
  "Coherence before scale",
];

function SceneLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-glow-blue/65">
      {children}
    </p>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-glow-blue/25 bg-glow-blue/12 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.18)] transition duration-300 hover:border-glow-blue/45 hover:bg-glow-blue/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-glow-blue/70 ${className}`}
    >
      Begin Your Evolution Briefing
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7h8.5M7.75 3.75 11 7l-3.25 3.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function SecondaryCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/case-studies"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium text-white/58 transition duration-300 hover:border-white/[0.16] hover:text-white/82 ${className}`}
    >
      View Transformation Records
    </Link>
  );
}

function SceneShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 overflow-hidden border-t border-white/[0.055] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(37,99,235,0.075),transparent_62%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
      <div className="container-tight relative z-10">{children}</div>
    </section>
  );
}

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, delay, ease: sceneEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ThresholdScene() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="threshold" className="relative flex min-h-screen items-center overflow-hidden bg-[#050608] pt-24">
      {!prefersReduced && (
        <video
          src="/video/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-screen"
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_18%,rgba(37,99,235,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.2),#050608_88%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
      <div className="absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-glow-blue/[0.08]" />
      <div className="absolute left-1/2 top-[18%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-white/[0.055]" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={false}
          animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: sceneEase }}
          className="mx-auto mb-10 flex h-28 w-28 items-center justify-center md:h-36 md:w-36"
        >
          <div className="absolute h-48 w-48 rounded-full bg-glow-blue/[0.08] blur-3xl md:h-64 md:w-64" />
          <Image
            src="/brand/logo.png"
            alt="Mariner Nexus"
            width={144}
            height={144}
            priority
            className="relative h-full w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.25, ease: sceneEase }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="mx-auto max-w-[18rem] text-[2.45rem] font-semibold leading-[1.04] text-white sm:max-w-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block sm:inline">Evolve</span>{" "}
            <span className="block sm:inline">beyond</span>{" "}
            <span className="block sm:inline">fragmented</span>{" "}
            <span className="block sm:inline">operations.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[18rem] text-[0.95rem] leading-8 text-white/52 sm:max-w-2xl md:text-lg md:leading-9">
            Mariner Nexus engineers synchronized digital environments where strategy, experience, automation, and human trust operate as one living system.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCta className="w-full max-w-[18rem] sm:w-auto sm:max-w-none" />
            <SecondaryCta className="w-full max-w-[18rem] sm:w-auto sm:max-w-none" />
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={prefersReduced ? undefined : { opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.05 }}
          className="mx-auto mt-16 grid max-w-[18rem] grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.06] sm:max-w-3xl sm:grid-cols-3"
        >
          {["Atmosphere", "Synchronization", "Operational Trust"].map((item) => (
            <div key={item} className="bg-[#050608]/92 px-5 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/36">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FractureScene() {
  return (
    <SceneShell id="fracture" className="bg-[#07090d] py-24 md:py-36">
      <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <RevealBlock>
          <SceneLabel>Scene 02 - The Fracture</SceneLabel>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Growth exposes what the old system can no longer hold.
          </h2>
        </RevealBlock>

        <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.06]">
          {fractureSignals.map((signal, index) => (
            <RevealBlock key={signal} delay={index * 0.06}>
              <div className="group relative bg-[#07090d]/95 p-6 transition duration-300 hover:bg-white/[0.035] md:p-8">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-glow-blue/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/18">Signal {index + 1}</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">{signal}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

function NexusRevealScene() {
  return (
    <SceneShell id="nexus-reveal" className="bg-[#050608] py-24 md:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <RevealBlock className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-glow-blue/[0.1]" />
          <div className="absolute inset-[12%] rounded-full border border-white/[0.07]" />
          <div className="absolute inset-[24%] rounded-full border border-glow-blue/[0.12]" />
          <div className="absolute h-[72%] w-px bg-gradient-to-b from-transparent via-glow-blue/18 to-transparent" />
          <div className="absolute h-px w-[72%] bg-gradient-to-r from-transparent via-glow-blue/18 to-transparent" />
          <div className="absolute h-48 w-48 rounded-full bg-nexus-blue/[0.12] blur-3xl" />
          <Image
            src="/brand/logo.png"
            alt=""
            width={190}
            height={190}
            className="relative h-32 w-32 object-contain md:h-44 md:w-44"
          />
          {["Experience", "Automation", "Trust", "Scale"].map((node, index) => {
            const positions = [
              "left-1/2 top-4 -translate-x-1/2",
              "right-4 top-1/2 -translate-y-1/2",
              "bottom-4 left-1/2 -translate-x-1/2",
              "left-4 top-1/2 -translate-y-1/2",
            ];
            return (
              <div
                key={node}
                className={`absolute ${positions[index]} rounded-full border border-white/[0.08] bg-black/60 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white/42 backdrop-blur-xl`}
              >
                {node}
              </div>
            );
          })}
        </RevealBlock>

        <RevealBlock delay={0.08}>
          <SceneLabel>Scene 03 - The Nexus Reveal</SceneLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] text-white md:text-6xl">
            The answer is not another tool. It is synchronization.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/48">
            The Nexus connects what fragmented businesses keep treating separately: brand perception, digital experience, operational systems, lead movement, and the human confidence required to choose.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {nexusLayers.map((layer) => (
              <div key={layer.title} className="rounded-lg border border-white/[0.07] bg-white/[0.028] p-5">
                <h3 className="text-sm font-semibold text-white/82">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/38">{layer.body}</p>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </SceneShell>
  );
}

function EvolutionLayersScene() {
  return (
    <SceneShell id="evolution-layers" className="bg-[#080a0f] py-24 md:py-36">
      <RevealBlock className="mx-auto max-w-3xl text-center">
        <SceneLabel>Scene 04 - The Evolution Layers</SceneLabel>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
          Every layer serves the next state of the business.
        </h2>
      </RevealBlock>

      <div className="mt-16 grid gap-4 lg:grid-cols-4">
        {evolutionLayers.map((layer, index) => (
          <RevealBlock key={layer.title} delay={index * 0.07}>
            <div className="group relative min-h-[18rem] rounded-lg border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-glow-blue/[0.22] hover:bg-white/[0.04]">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-glow-blue/0 via-glow-blue/35 to-glow-blue/0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-glow-blue/45">{layer.index}</p>
              <h3 className="mt-16 text-2xl font-semibold leading-tight text-white">{layer.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/42">{layer.body}</p>
            </div>
          </RevealBlock>
        ))}
      </div>
    </SceneShell>
  );
}

function ProofScene() {
  const featured = caseStudies.slice(0, 4);

  return (
    <SceneShell id="proof" className="bg-[#050608] py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <RevealBlock>
          <SceneLabel>Scene 05 - Proof Of Transformation</SceneLabel>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Transformation records, not portfolio entries.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-white/46">
            Each record traces movement from fragmented state to synchronized operating environment. The artifact is visible. The real proof is the system behind it.
          </p>
          <SecondaryCta className="mt-9" />
        </RevealBlock>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((study, index) => (
            <RevealBlock key={study.slug} delay={index * 0.06}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.025]"
              >
                <div className="relative aspect-[1.45] overflow-hidden bg-black">
                  <Image
                    src={study.cardImage}
                    alt={study.proofAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-72 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-glow-blue/45">{study.categoryGroup}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{study.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/38">{study.outcome}</p>
                </div>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}

function TrustStabilizerScene() {
  return (
    <SceneShell id="trust-stabilizer" className="bg-[#080a0f] py-24 md:py-36">
      <RevealBlock className="mx-auto max-w-4xl text-center">
        <SceneLabel>Scene 06 - The Trust Stabilizer</SceneLabel>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
          The work is immersive because the system is controlled.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/48">
          Mariner Nexus does not chase novelty. We build calm, coherent environments that make strategic evolution feel stable enough to enter.
        </p>
      </RevealBlock>

      <RevealBlock delay={0.1} className="mx-auto mt-14 max-w-4xl">
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {trustPrinciples.map((principle) => (
            <div key={principle} className="bg-[#080a0f]/95 p-6 text-center text-sm font-semibold text-white/58">
              {principle}
            </div>
          ))}
        </div>
      </RevealBlock>
    </SceneShell>
  );
}

function EvolutionEntryScene() {
  return (
    <SceneShell id="evolution-entry" className="bg-[#050608] py-24 md:py-40">
      <RevealBlock className="mx-auto max-w-4xl text-center">
        <SceneLabel>Scene 07 - The Evolution Entry</SceneLabel>
        <h2 className="mt-5 text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
          Enter with clarity. Leave with a map.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/48">
          The evolution briefing is a strategic conversation designed to expose the current system, identify the next operating layer, and determine whether Mariner Nexus is the right partner to build it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta />
          <SecondaryCta />
        </div>
      </RevealBlock>
    </SceneShell>
  );
}

export default function NexusHomeExperience() {
  return (
    <>
      <ThresholdScene />
      <FractureScene />
      <NexusRevealScene />
      <EvolutionLayersScene />
      <ProofScene />
      <TrustStabilizerScene />
      <EvolutionEntryScene />
    </>
  );
}
