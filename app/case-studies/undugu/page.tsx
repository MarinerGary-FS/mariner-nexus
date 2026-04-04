import { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Undugu — Mariner Nexus Case Study",
  description:
    "Community foundation rebuilt for scale with CRM intake, member tracking, and communication architecture.",
};

const data = {
  category: "System Build · Community",
  title: "Undugu",
  industry: "Community / Foundation / Operational Infrastructure",
  tagline:
    "A community foundation rebuilt for scale — with CRM intake, member tracking, and operational infrastructure that grows with the organization.",
  problem:
    "Undugu was doing meaningful work but operating without the systems to support its growth. Member intake was manual, communication was inconsistent, and there was no way to track engagement or segment the community for targeted outreach. The digital presence didn't reflect the organization's actual scope or impact.",
  strategy:
    "We mapped the full operational flow — from how people first learn about Undugu to how they become engaged members — and identified every point where structure was missing. The system we designed wasn't just a website. It was the operational backbone of a growing community organization.",
  outcome:
    "Undugu now operates with a clear digital presence, a structured member intake process connected to CRM infrastructure, and the systems to support consistent communication and community engagement at scale.",
  systemBuilt: [
    "Website redesign with clear community positioning and membership pathways",
    "GoHighLevel CRM integration for member intake, tagging, and segmentation",
    "Discord community flow alignment and onboarding architecture",
    "Event and engagement tracking system built for ongoing operational visibility",
    "Automated welcome and follow-up communication sequences",
  ],
  tools: [
    "Next.js",
    "GoHighLevel",
    "Discord API",
    "Framer Motion",
    "Vercel",
    "Tailwind CSS",
  ],
  outcomePoints: [
    "Structured member intake replacing manual, inconsistent processes",
    "CRM-connected tagging and segmentation for targeted communication",
    "Clear digital presence communicating Undugu's mission and scope",
    "Operational infrastructure built to scale with community growth",
    "Foundation positioned for more sophisticated automation in Phase 2",
  ],
  mockupImage: "/case-studies/undugu/mockup.png",
  nextStudy: {
    title: "Amplify Voices",
    href: "/case-studies/amplify-voices",
  },
};

export default function UnduguPage() {
  return <CaseStudyLayout data={data} />;
}
