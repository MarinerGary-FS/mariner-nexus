import { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Amplify Voices — Mariner Nexus Case Study",
  description:
    "A media platform reimagined with story-driven layout and authority positioning that commands attention.",
};

const data = {
  category: "Authority System · Media",
  title: "Amplify Voices",
  industry: "Media / Messaging / Digital Experience",
  tagline:
    "A media platform reimagined — where design and messaging work together to amplify credibility, clarity, and impact.",
  problem:
    "Amplify Voices had an important mission and compelling content, but the digital experience wasn't doing it justice. The visual presentation was inconsistent, the information architecture made it difficult for visitors to understand what Amplify Voices actually was, and the overall impression didn't match the credibility the platform deserved.",
  strategy:
    "We treated this as an authority positioning problem. A platform that amplifies important voices needs to look and feel like it belongs at the top of its category. We rebuilt the content hierarchy from scratch, aligned the visual language to the platform's mission, and created a storytelling-driven layout designed to hold attention and communicate purpose immediately.",
  outcome:
    "Amplify Voices now has a digital presence that matches the weight of its content and mission. The redesigned platform communicates authority at first glance, guides visitors through the content in a structured way, and positions the brand as a credible, established voice in its space.",
  systemBuilt: [
    "Full website redesign with storytelling-first layout and content flow",
    "Content hierarchy restructuring for clarity and progressive engagement",
    "Brand system refinement — typography, color, and visual language alignment",
    "Authority positioning framework applied to copy structure and page architecture",
    "Performance-optimized build for fast load and consistent cross-device experience",
  ],
  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
  ],
  outcomePoints: [
    "Immediate authority signal on first impression",
    "Clear content hierarchy that guides visitors without friction",
    "Visual language aligned with the platform's mission and tone",
    "Consistent brand presentation across all digital touchpoints",
    "Elevated credibility that supports future audience growth and partnerships",
  ],
  nextStudy: {
    title: "Gary L Mariner II",
    href: "/case-studies/gary-mariner",
  },
};

export default function AmplifyVoicesPage() {
  return <CaseStudyLayout data={data} />;
}
