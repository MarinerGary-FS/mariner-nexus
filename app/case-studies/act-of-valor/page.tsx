import { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Act of Valor — Mariner Nexus Case Study",
  description:
    "A high-trust emergency services platform engineered for credibility-first UX, urgent CTA structure, and local authority conversion.",
};

const data = {
  category: "Revenue · Service Business · Conversion",
  title: "Act of Valor",
  industry: "Emergency Services / Local Service Business",
  tagline:
    "A high-trust service business platform built for the moment it matters most — credentials-forward design, urgent CTA architecture, and same-day conversion clarity.",
  problem:
    "Act of Valor operates in a high-stakes, trust-critical environment. When someone needs emergency services, their decision happens fast and at high anxiety. The previous digital presence didn't establish credibility quickly enough, buried the call-to-action behind too many steps, and failed to communicate the authority and reliability that the business had earned in the field. The site was losing potential clients at the most critical moment of consideration.",
  strategy:
    "We approached Act of Valor as a high-pressure conversion problem. In emergency services, every second of friction is a lost client. The design needed to lead with trust signals — credentials, response time, service area — and get the CTA in front of the user immediately. We engineered a platform where authority is communicated within the first scroll and the path to action is frictionless.",
  outcome:
    "Act of Valor now has a digital platform that matches the professionalism and reliability of its operations. Credentials are front-loaded. The call-to-action is persistent and contextually urgent. The local service authority signals are woven into the layout — not buried in a footer. The site functions as a trust machine from the first impression.",
  systemBuilt: [
    "Credentials-forward homepage architecture: certifications, response time, and trust signals above the fold",
    "Persistent urgent CTA structure — call-to-action visible and accessible at every scroll depth",
    "Service area and local authority design — structured for local SEO and geographic credibility",
    "Conversion-optimized contact flow: phone, form, and instant-contact pathways in parallel",
    "GoHighLevel CRM integration for lead intake, tagging, and automated follow-up sequences",
    "Mobile-first emergency UX — optimized for users calling from high-stress situations",
  ],
  tools: [
    "Next.js",
    "TypeScript",
    "GoHighLevel",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
  ],
  outcomePoints: [
    "Credentials and trust signals surfaced immediately — no scrolling required",
    "Persistent CTA structure that keeps conversion path visible throughout the experience",
    "Reduced friction between first visit and first contact for same-day service",
    "Local authority positioning supporting organic search visibility in the service area",
    "CRM-connected lead intake with automated response sequences for missed-call recovery",
  ],
  mockupImage: "/case-studies/act-of-valor/mockup.png",
  nextStudy: {
    title: "Serene Origins",
    href: "/case-studies/serene-origins",
  },
};

export default function ActOfValorPage() {
  return <CaseStudyLayout data={data} />;
}
