/**
 * Canonical transformation-record data.
 *
 * Detailed records have internal case-study pages. Additional live proof records
 * appear on the transformation records index without presenting Mariner Nexus
 * itself as a case study.
 */

export type RecordGroup = "Revenue" | "Authority" | "Systems";

export interface ProjectRecord {
  slug: string;
  title: string;
  categoryGroup: RecordGroup;
  category: string;
  industry: string;
  transformationType: string;
  description: string;
  outcome: string;
  evolutionLayers: string[];
  tags: string[];
  mockupImage: string;
  cardImage: string;
  ogImage: string;
  proofAlt: string;
  entryImage?: string;
  entryAlt?: string;
  fullExperienceImage?: string;
  fullExperienceAlt?: string;
  liveUrl: string;
  detailHref?: string;
}

export type CaseStudyMeta = ProjectRecord & {
  detailHref: string;
};

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "act-of-valor",
    title: "Act of Valor",
    categoryGroup: "Revenue",
    category: "Revenue · Service Business",
    industry: "Emergency Services",
    transformationType: "High-trust emergency service conversion system",
    description:
      "Emergency service presence evolved into a credibility-first conversion environment for urgent, trust-critical decisions.",
    outcome: "Trust-first conversion system + CRM lead intake",
    evolutionLayers: ["Digital Authority", "Customer Experience", "Communication Systems"],
    tags: ["Conversion Architecture", "GoHighLevel", "Local Authority"],
    mockupImage: "/case-studies/act-of-valor/live-desktop.webp",
    cardImage: "/case-studies/act-of-valor/card.webp",
    ogImage: "/case-studies/act-of-valor/og.webp",
    proofAlt:
      "Act of Valor homepage showing emergency service authority messaging and urgent conversion pathways.",
    liveUrl: "https://www.actofvalorllc.com/",
    detailHref: "/case-studies/act-of-valor",
  },
  {
    slug: "serene-origins",
    title: "Serene Origins",
    categoryGroup: "Revenue",
    category: "Revenue · Wellness",
    industry: "Digital Business",
    transformationType: "Private wellness commerce and membership ecosystem",
    description:
      "A wellness concept structured into a premium digital business platform with clear trust, subscription, and conversion pathways.",
    outcome: "Subscription infrastructure + conversion-focused redesign",
    evolutionLayers: ["Brand Perception", "Customer Experience", "Operational Scalability"],
    tags: ["Brand Redesign", "Stripe", "Conversion Design"],
    mockupImage: "/case-studies/serene-origins/live-desktop.webp",
    cardImage: "/case-studies/serene-origins/card.webp",
    ogImage: "/case-studies/serene-origins/og.webp",
    proofAlt:
      "Serene Origins homepage showing private wellness positioning and membership-oriented customer experience.",
    liveUrl: "https://serene-origins.vercel.app/",
    detailHref: "/case-studies/serene-origins",
  },
  {
    slug: "eaziedagod",
    title: "EazieDaGod",
    categoryGroup: "Authority",
    category: "Authority · Creator",
    industry: "Music / Artist",
    transformationType: "Creator identity system and strategic fan pathway",
    description:
      "A fragmented creator presence evolved into an immersive identity layer that centralizes music, story, and audience movement.",
    outcome: "Immersive creator platform + strategic link architecture",
    evolutionLayers: ["Digital Authority", "Brand Perception", "Customer Experience"],
    tags: ["Creator Brand", "Immersive Design", "Link Architecture"],
    mockupImage: "/case-studies/eaziedagod/live-desktop.webp",
    cardImage: "/case-studies/eaziedagod/card.webp",
    ogImage: "/case-studies/eaziedagod/og.webp",
    proofAlt:
      "EazieDaGod artist platform showing a mobile-first creator identity system and fan routing experience.",
    entryImage: "/case-studies/eaziedagod/live-mobile.webp",
    entryAlt:
      "EazieDaGod mobile link-in-bio entry surface showing music, fan routing, contact actions, and the full-experience gateway.",
    fullExperienceImage: "/case-studies/eaziedagod/full-experience.webp",
    fullExperienceAlt:
      "EazieDaGod full experience view showing the immersive artist platform entered from the mobile link-in-bio gateway.",
    liveUrl: "https://eaziedagod.vercel.app/",
    detailHref: "/case-studies/eaziedagod",
  },
  {
    slug: "gary-mariner",
    title: "Gary L Mariner II",
    categoryGroup: "Authority",
    category: "Authority · Executive",
    industry: "Personal Brand",
    transformationType: "Executive authority platform and briefing pathway",
    description:
      "A personal brand elevated into a structured authority ecosystem for leadership, consulting, and strategic partnership readiness.",
    outcome: "Executive digital presence + briefing integration",
    evolutionLayers: ["Digital Authority", "Brand Perception", "Communication Systems"],
    tags: ["Personal Brand", "Positioning System", "Cal.com"],
    mockupImage: "/case-studies/gary-mariner-ii/live-desktop.webp",
    cardImage: "/case-studies/gary-mariner-ii/card.webp",
    ogImage: "/case-studies/gary-mariner-ii/og.webp",
    proofAlt:
      "Gary L Mariner II homepage showing executive authority positioning and strategic briefing entry.",
    entryImage: "/case-studies/gary-mariner-ii/live-social.webp",
    entryAlt:
      "Gary L Mariner II social gateway page showing executive ecosystem routing into Mariner Nexus, Undugu Foundation, and public intelligence channels.",
    fullExperienceImage: "/case-studies/gary-mariner-ii/full-experience.webp",
    fullExperienceAlt:
      "Gary L Mariner II full website experience showing executive AI systems architecture positioning and strategic ecosystem entry.",
    liveUrl: "https://www.garymariner.com/",
    detailHref: "/case-studies/gary-mariner",
  },
  {
    slug: "undugu",
    title: "Undugu Foundation",
    categoryGroup: "Systems",
    category: "Systems · Community",
    industry: "Foundation",
    transformationType: "Movement ecosystem for nonprofit storytelling and engagement",
    description:
      "A community foundation rebuilt for member intake, event engagement, communication clarity, and scalable movement infrastructure.",
    outcome: "CRM-ready workflows + operational infrastructure",
    evolutionLayers: ["Digital Authority", "Community Experience", "Communication Systems"],
    tags: ["GoHighLevel", "CRM Architecture", "Community Platform"],
    mockupImage: "/case-studies/undugu/live-desktop.webp",
    cardImage: "/case-studies/undugu/card.webp",
    ogImage: "/case-studies/undugu/og.webp",
    proofAlt:
      "Undugu Foundation homepage showing community-centered nonprofit storytelling and event engagement system.",
    liveUrl: "https://www.undugu.org/",
    detailHref: "/case-studies/undugu",
  },
  {
    slug: "amplify-voices",
    title: "Amplify Voices",
    categoryGroup: "Systems",
    category: "Systems · Media",
    industry: "Media Platform",
    transformationType: "Leadership media platform and communication authority system",
    description:
      "A media platform reimagined with stronger narrative hierarchy, program clarity, and authority-centered visual positioning.",
    outcome: "Premium media presence + brand authority",
    evolutionLayers: ["Digital Authority", "Communication Systems", "Customer Experience"],
    tags: ["Media Platform", "Storytelling Design", "Brand System"],
    mockupImage: "/case-studies/amplify-voices/live-desktop.webp",
    cardImage: "/case-studies/amplify-voices/card.webp",
    ogImage: "/case-studies/amplify-voices/og.webp",
    proofAlt:
      "Amplify Voices homepage showing leadership communication positioning and program pathways.",
    liveUrl: "https://amplify-voices.vercel.app/",
    detailHref: "/case-studies/amplify-voices",
  },
];

export const additionalProjectRecords: ProjectRecord[] = [
  {
    slug: "just-breathe-reset",
    title: "Just Breathe Reset",
    categoryGroup: "Revenue",
    category: "Revenue · Wellness",
    industry: "Wellness / Reset System",
    transformationType: "Customer experience system for science-backed breathwork",
    description:
      "Wellness offer clarified into a calm digital pathway for program understanding, trust, and reset-session entry.",
    outcome: "Clear wellness positioning + low-friction program entry",
    evolutionLayers: ["Customer Experience", "Brand Perception", "Digital Authority"],
    tags: ["Wellness UX", "Program Clarity", "Conversion Path"],
    mockupImage: "/case-studies/just-breathe-reset/live-desktop.webp",
    cardImage: "/case-studies/just-breathe-reset/card.webp",
    ogImage: "/case-studies/just-breathe-reset/og.webp",
    proofAlt:
      "Just Breathe Reset homepage showing calm wellness program positioning and clear reset entry path.",
    liveUrl: "https://just-breathe-reset.vercel.app/",
  },
  {
    slug: "althea-awakening-conference",
    title: "Althea Awakening Conference",
    categoryGroup: "Systems",
    category: "Systems · Event",
    industry: "Conference / Awakening Experience",
    transformationType: "Event ecosystem for registration, story, and attendee trust",
    description:
      "Conference presence shaped into an immersive event pathway with registration clarity and emotionally coherent storytelling.",
    outcome: "Cinematic event identity + registration-ready experience",
    evolutionLayers: ["Customer Experience", "Communication Systems", "Digital Authority"],
    tags: ["Event Ecosystem", "Registration Path", "Storytelling"],
    mockupImage: "/case-studies/althea-awakening-conference/live-desktop.webp",
    cardImage: "/case-studies/althea-awakening-conference/card.webp",
    ogImage: "/case-studies/althea-awakening-conference/og.webp",
    proofAlt:
      "Althea Awakening Conference homepage showing event storytelling, speaker atmosphere, and registration entry.",
    liveUrl: "https://althea-awakening-conference.vercel.app/",
  },
  {
    slug: "sovereign-blueprint-consulting",
    title: "Sovereign Blueprint Consulting",
    categoryGroup: "Authority",
    category: "Authority · Consulting",
    industry: "Financial Consulting",
    transformationType: "Consulting authority system for private structured support",
    description:
      "A consulting offer positioned through strategic authority, privacy, and clarity for high-trust financial conversations.",
    outcome: "Authority-led consulting entry + trust-centered positioning",
    evolutionLayers: ["Digital Authority", "Brand Perception", "Communication Systems"],
    tags: ["Consulting UX", "Authority Positioning", "Trust Architecture"],
    mockupImage: "/case-studies/sovereign-blueprint-consulting/live-desktop.webp",
    cardImage: "/case-studies/sovereign-blueprint-consulting/card.webp",
    ogImage: "/case-studies/sovereign-blueprint-consulting/og.webp",
    proofAlt:
      "Sovereign Blueprint Consulting homepage showing private financial consulting positioning and mentorship entry.",
    liveUrl: "https://sovereign-blueprint-consulting.vercel.app/",
  },
  {
    slug: "mariner-inventory-opportunity",
    title: "Mariner Inventory Opportunity",
    categoryGroup: "Systems",
    category: "Systems · Opportunity",
    industry: "Inventory / Business Opportunity",
    transformationType: "Opportunity communication layer for structured evaluation",
    description:
      "A focused opportunity environment built to communicate financial structure, decision clarity, and next-step evaluation.",
    outcome: "Structured opportunity narrative + qualified evaluation path",
    evolutionLayers: ["Communication Systems", "Digital Authority", "Operational Scalability"],
    tags: ["Opportunity UX", "Strategic Narrative", "Decision Path"],
    mockupImage: "/case-studies/mariner-inventory-opportunity/live-desktop.webp",
    cardImage: "/case-studies/mariner-inventory-opportunity/card.webp",
    ogImage: "/case-studies/mariner-inventory-opportunity/og.webp",
    proofAlt:
      "Mariner Inventory Opportunity homepage showing structured business opportunity messaging and evaluation pathway.",
    liveUrl: "https://mariner-inventory-opportunity.vercel.app/",
  },
];

export const projectRecords: ProjectRecord[] = [
  ...caseStudies,
  ...additionalProjectRecords,
];

export function getNextStudy(slug: string): { title: string; href: string } | undefined {
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return undefined;
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return { title: next.title, href: next.detailHref };
}

export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const footerWorkLinks = caseStudies.map((cs) => ({
  label: cs.title,
  href: cs.detailHref,
}));

export const caseStudyGroups = [
  {
    group: "Revenue",
    color: "rgba(77,163,255,0.7)",
    studies: projectRecords.filter((cs) => cs.categoryGroup === "Revenue"),
  },
  {
    group: "Authority",
    color: "rgba(125,211,252,0.65)",
    studies: projectRecords.filter((cs) => cs.categoryGroup === "Authority"),
  },
  {
    group: "Systems",
    color: "rgba(37,99,235,0.75)",
    studies: projectRecords.filter((cs) => cs.categoryGroup === "Systems"),
  },
];
