import { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Serene Origins — Mariner Nexus Case Study",
  description:
    "A wellness concept transformed into a structured digital business platform with premium positioning and a clear monetization pathway.",
};

const data = {
  category: "Revenue System · Wellness",
  title: "Serene Origins",
  industry: "Wellness / Digital Business / Subscription",
  tagline:
    "A wellness concept transformed into a structured digital business platform with premium positioning and a clear revenue pathway.",
  problem:
    "Serene Origins had a compelling product and a loyal early audience, but the digital experience didn't reflect the quality of what was being offered. The site lacked conversion architecture, the subscription model wasn't clearly surfaced, and the brand presentation undermined trust at exactly the moment visitors needed to feel confident.",
  strategy:
    "We approached Serene Origins as a business system problem, not a design problem. Before redesigning anything, we mapped the customer journey from first visit to recurring subscriber — identifying where trust broke down, where clarity was missing, and where the conversion path had unnecessary friction.",
  outcome:
    "Serene Origins launched with a digital presence that matched the quality of its product. The redesigned experience clearly communicates the brand's value, routes visitors through a structured conversion journey, and supports a subscription model built for long-term retention.",
  systemBuilt: [
    "Full website redesign with conversion-focused layout and hierarchy",
    "Stripe subscription integration with tiered membership structure",
    "Brand identity refinement — visual language, typography, and color system",
    "Onboarding content structure and digital customer journey mapping",
    "SEO foundation and performance-optimized build",
  ],
  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Stripe",
    "Framer Motion",
    "Vercel",
  ],
  outcomePoints: [
    "Premium brand presentation that commands trust at first glance",
    "Structured subscription pathway with clear value communication",
    "Reduced friction between visitor arrival and conversion",
    "Scalable digital platform built to grow with the business",
    "Consistent visual identity across all digital touchpoints",
  ],
  mockupImage: "/case-studies/serene-origins/mockup.png",
  nextStudy: {
    title: "Undugu",
    href: "/case-studies/undugu",
  },
};

export default function SereneOriginsPage() {
  return <CaseStudyLayout data={data} />;
}
