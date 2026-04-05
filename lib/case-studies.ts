/**
 * Canonical Case Studies Dataset
 *
 * This is the single source of truth for:
 *   - ordered sequence
 *   - slugs
 *   - titles, categories, industries
 *   - mockup image paths
 *   - homepage card data (description, outcome, tags)
 *   - footer links
 *   - next/prev navigation (derived)
 *
 * Do NOT duplicate this data in individual page files.
 * Individual page.tsx files hold the long-form copy (problem, strategy, systemBuilt, etc.)
 * and import mockupImage + nextStudy from this module.
 */

export interface CaseStudyMeta {
  slug: string;
  title: string;
  categoryGroup: "Revenue" | "Authority" | "Systems";
  category: string;
  industry: string;
  description: string;
  outcome: string;
  tags: string[];
  mockupImage: string;
}

/** Canonical ordered sequence — Revenue → Authority → Systems */
export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "act-of-valor",
    title: "Act of Valor",
    categoryGroup: "Revenue",
    category: "Revenue · Service Business",
    industry: "Emergency Services",
    description:
      "A high-trust emergency services platform built for same-day conversion — credentials-forward design with urgent CTA architecture.",
    outcome: "Trust-first conversion system + CRM lead intake",
    tags: ["Conversion Architecture", "GoHighLevel", "Local Authority"],
    mockupImage: "/case-studies/act-of-valor/mockup.png",
  },
  {
    slug: "serene-origins",
    title: "Serene Origins",
    categoryGroup: "Revenue",
    category: "Revenue · Wellness",
    industry: "Digital Business",
    description:
      "A wellness concept transformed into a structured digital business platform with premium positioning and a defined subscription revenue pathway.",
    outcome: "Subscription infrastructure + conversion-focused redesign",
    tags: ["Brand Redesign", "Stripe", "Conversion Design"],
    mockupImage: "/case-studies/serene-origins/mockup.png",
  },
  {
    slug: "eaziedagod",
    title: "EazieDaGod",
    categoryGroup: "Authority",
    category: "Authority · Creator",
    industry: "Music / Artist",
    description:
      "An artist brand rebuilt into an immersive digital identity — full-experience entry design, link architecture, and premium creative brand presentation.",
    outcome: "Immersive creator platform + strategic link architecture",
    tags: ["Creator Brand", "Immersive Design", "Link Architecture"],
    mockupImage: "/case-studies/eaziedagod/mockup.png",
  },
  {
    slug: "gary-mariner",
    title: "Gary L Mariner II",
    categoryGroup: "Authority",
    category: "Authority · Executive",
    industry: "Personal Brand",
    description:
      "Personal brand elevated into a structured authority platform — reflecting leadership, strategic execution, and systems thinking.",
    outcome: "Executive digital presence + booking integration",
    tags: ["Personal Brand", "Positioning System", "Cal.com"],
    mockupImage: "/case-studies/gary-mariner-ii/mockup.png",
  },
  {
    slug: "undugu",
    title: "Undugu",
    categoryGroup: "Systems",
    category: "Systems · Community",
    industry: "Foundation",
    description:
      "A community foundation rebuilt for scale — CRM intake, member tracking, and communication architecture that supports organizational growth.",
    outcome: "CRM-ready workflows + operational infrastructure",
    tags: ["GoHighLevel", "CRM Architecture", "Community Platform"],
    mockupImage: "/case-studies/undugu/mockup.png",
  },
  {
    slug: "amplify-voices",
    title: "Amplify Voices",
    categoryGroup: "Systems",
    category: "Systems · Media",
    industry: "Media Platform",
    description:
      "A media platform reimagined with story-driven layout, elevated brand presentation, and authority positioning that commands attention.",
    outcome: "Premium media presence + brand authority",
    tags: ["Media Platform", "Storytelling Design", "Brand System"],
    mockupImage: "/case-studies/amplify-voices/mockup.png",
  },
];

/** Get the next case study in the canonical sequence (wraps around). */
export function getNextStudy(slug: string): { title: string; href: string } | undefined {
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return undefined;
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return { title: next.title, href: `/case-studies/${next.slug}` };
}

/** Get a case study by slug. */
export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/** Flat list of footer work links derived from canonical order. */
export const footerWorkLinks = caseStudies.map((cs) => ({
  label: cs.title,
  href: `/case-studies/${cs.slug}`,
}));

/** Group by categoryGroup for index page. */
export const caseStudyGroups = [
  {
    group: "Revenue",
    color: "rgba(77,163,255,0.7)",
    studies: caseStudies.filter((cs) => cs.categoryGroup === "Revenue"),
  },
  {
    group: "Authority",
    color: "rgba(125,211,252,0.65)",
    studies: caseStudies.filter((cs) => cs.categoryGroup === "Authority"),
  },
  {
    group: "Systems",
    color: "rgba(37,99,235,0.75)",
    studies: caseStudies.filter((cs) => cs.categoryGroup === "Systems"),
  },
];
