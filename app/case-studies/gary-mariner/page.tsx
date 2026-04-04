import { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Gary L Mariner II — Mariner Nexus Case Study",
  description:
    "Personal brand elevated into a structured authority platform reflecting leadership and strategic execution.",
};

const data = {
  category: "Personal Brand · Executive Presence",
  title: "Gary L Mariner II",
  industry: "Personal Brand / Executive / Consulting",
  tagline:
    "A high-level operator's personal brand transformed into a structured authority platform built for leadership, consulting, and long-term influence.",
  problem:
    "Gary had built a depth of experience and strategic thinking that his digital presence simply didn't reflect. A personal brand without a clear, premium online presence is an invisible asset. The opportunity cost was real: speaking engagements, consulting conversations, and partnerships all depend on a first impression that commands trust.",
  strategy:
    "We treated Gary's personal brand the same way we treat any business system — starting from the outcome and working backwards. What does a visitor need to see, feel, and understand in the first 10 seconds? What action should they take? What level of authority should the site communicate? The answers to those questions shaped every decision.",
  outcome:
    "Gary's personal site now functions as an authority platform that reflects the caliber of his thinking, builds immediate trust, and creates a clear path for the right people to connect, book, or collaborate. It's a system, not a brochure.",
  systemBuilt: [
    "Personal website with premium design and authority-first layout",
    "Messaging and positioning system defining the core narrative and offers",
    "Cal.com booking integration for strategy calls and consulting inquiries",
    "Contact and intake structure built for future CRM connection",
    "Mobile-first, performance-optimized build across all device types",
  ],
  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Cal.com",
    "Framer Motion",
    "Vercel",
  ],
  mockupImage: "/case-studies/gary-mariner-ii/mockup.png",
  outcomePoints: [
    "Authority digital presence that commands trust at first impression",
    "Clear offer structure that guides the right visitor toward the right action",
    "Booking infrastructure for frictionless consulting engagement",
    "Professional presence supporting speaking, consulting, and partnership opportunities",
    "A platform built to evolve as the brand and offer expand",
  ],
};

export default function GaryMarinerPage() {
  return <CaseStudyLayout data={data} />;
}
