import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import { getCaseStudy, getNextStudy } from "@/lib/case-studies";
import { createMetadata } from "@/lib/seo";

const cs = getCaseStudy("gary-mariner")!;

export const metadata: Metadata = createMetadata({
  title: "Gary L Mariner II Transformation Record",
  description:
    "An executive personal brand elevated into a structured authority platform with social gateway entry, full-experience positioning, and strategic briefing pathways.",
  path: cs.detailHref,
  image: cs.ogImage,
  type: "article",
});

const next = getNextStudy("gary-mariner");

const data = {
  category: cs.category,
  title: cs.title,
  industry: cs.industry,
  tagline:
    "A high-level operator's personal brand transformed into a structured authority platform built for leadership, consulting, and long-term influence.",
  problem:
    "Gary had built a depth of experience and strategic thinking that his digital presence simply did not reflect. A personal brand without a clear, premium online presence is an invisible asset. The opportunity cost was real: speaking engagements, consulting conversations, and partnerships all depend on a first impression that commands trust.",
  strategy:
    "We treated Gary's personal brand the same way we treat any business system — starting from the future state and working backwards. What does a visitor need to see, feel, and understand in the first 10 seconds? What action should they take? What level of authority should the site communicate? The answers to those questions shaped every decision.",
  outcome:
    "Gary's personal site now functions as an authority platform that reflects the caliber of his thinking, builds immediate trust, and creates a clear path for the right people to connect, schedule, or collaborate. It is a system, not a brochure.",
  systemBuilt: [
    "Personal authority environment with premium design and leadership-first layout",
    "Messaging and positioning system defining the core narrative and offers",
    "Cal.com scheduling integration for consulting inquiries",
    "Intake structure built for future CRM connection",
    "Mobile-first, performance-optimized build across all device types",
  ],
  tools: ["Next.js", "TypeScript", "Tailwind CSS", "Cal.com", "Framer Motion", "Vercel"],
  outcomePoints: [
    "Authority digital presence that commands trust at first impression",
    "Clear offer structure that guides the right visitor toward the right action",
    "Scheduling infrastructure for frictionless consulting engagement",
    "Professional presence supporting speaking, consulting, and partnership opportunities",
    "A platform built to evolve as the brand and offer expand",
  ],
  mockupImage: cs.mockupImage,
  proofAlt: cs.proofAlt,
  proofStates: [
    {
      label: "Social Gateway Entry",
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
  nextStudy: next,
};

export default function GaryMarinerPage() {
  return <CaseStudyLayout data={data} />;
}
