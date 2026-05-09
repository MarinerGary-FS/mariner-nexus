import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import { getCaseStudy, getNextStudy } from "@/lib/case-studies";
import { createMetadata } from "@/lib/seo";

const cs = getCaseStudy("eaziedagod")!;

export const metadata: Metadata = createMetadata({
  title: "EazieDaGod Transformation Record",
  description:
    "A creator and artist brand transformed into an immersive digital identity with mobile link-in-bio entry, full-experience presentation, and strategic fan routing.",
  path: cs.detailHref,
  image: cs.ogImage,
  type: "article",
});

const next = getNextStudy("eaziedagod");

const data = {
  category: cs.category,
  title: cs.title,
  industry: cs.industry,
  tagline:
    "An artist brand rebuilt from the ground up — immersive digital identity, premium presentation, and a link architecture that turns every entry point into an experience.",
  problem:
    "EazieDaGod had a distinct creative identity and a growing audience, but the digital infrastructure didn't match the caliber of the artistry. The existing presence was fragmented — social links scattered, no cohesive entry point, no platform that could hold the full weight of the brand. In an attention economy, that gap is expensive.",
  strategy:
    "We treated this as an identity engineering problem. The goal wasn't just a website — it was a digital environment that communicates who EazieDaGod is before a single word is read. We designed an immersive entry experience, a precision link architecture that routes fans and collaborators to the right destination, and a brand presentation layer that elevates every touchpoint.",
  outcome:
    "EazieDaGod now has a digital presence that functions as a full-experience platform — one central hub that holds the music, the brand, the story, and the pathway forward. Every entry is an impression. Every link is intentional. Every visual decision reinforces the authority of the artist.",
  systemBuilt: [
    "Immersive full-screen entry design with motion-driven first impression",
    "Premium artist presentation platform — music, story, and brand identity unified",
    "Strategic link architecture replacing scattered social bios with a structured hub",
    "Creator-specific CTA flows for streams, collaboration, and booking",
    "Brand identity system: typography, color language, and visual motion hierarchy",
    "Mobile-first build optimized for the social traffic patterns of a creator audience",
  ],
  tools: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
  outcomePoints: [
    "A single, immersive entry point that communicates brand identity within 3 seconds",
    "Structured link hub replacing fragmented social bios with intentional routing",
    "Premium artist presentation platform that commands respect before the music plays",
    "Mobile-optimized experience matching the consumption patterns of a creator audience",
    "A digital foundation that can scale with the brand — merchandise, events, and collabs",
  ],
  mockupImage: cs.mockupImage,
  proofAlt: cs.proofAlt,
  proofStates: [
    {
      label: "Mobile Link-In-Bio Entry",
      src: cs.entryImage!,
      alt: cs.entryAlt!,
      format: "mobile" as const,
    },
    {
      label: "Full Experience View",
      src: cs.fullExperienceImage!,
      alt: cs.fullExperienceAlt!,
      format: "desktop" as const,
    },
  ],
  themeAccentRgb: "212,175,55",
  nextStudy: next,
};

export default function EazieDaGodPage() {
  return <CaseStudyLayout data={data} />;
}
