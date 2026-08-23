import type { ProjectRecord } from "@/content/projects/types";

export const sereneOriginsProject: ProjectRecord = {
  slug: "serene-origins",
  clientName: "Serene Origins",
  clientState: "create",
  shortTransformation: "From no digital presence to a private, structured experience designed around trust, clarity, and human support.",
  client: "Serene Origins is a private support and education experience for people living with herpes who want greater clarity, structure, and confidence.",
  situation: "Serene Origins had no previous website or established digital presence. The subject is sensitive and deeply personal, so its digital beginning needed to feel private, empathetic, calm, trustworthy, and discreet without becoming clinical, sensational, generic, exposing, or aggressively transactional.",
  objective: "Create a private, structured digital environment where people encountering a sensitive subject can understand Serene Origins, feel respected rather than exposed, and confidently determine whether the community and support model are right for them.",
  strategy: [
    "Determine how Serene Origins should speak before deciding how it should look.",
    "Use content hierarchy, pacing, tone, and interaction to lower anxiety and create clarity before asking for a decision.",
    "Organize the public journey around recognition, understanding, structure, the offering, operational clarity, trust, and decision.",
    "Keep privacy boundaries and the distinction between education, peer support, and medical care explicit.",
  ],
  experience: [
    "Restrained typography and intimate pacing create a quiet digital language appropriate to the subject.",
    "The Awareness, Stabilization, and Support framework replaces scattered information with an understandable structure.",
    "Membership information, expectations, and FAQs provide clarity without pressure or exposure.",
    "Responsive composition preserves discretion, readability, and an obvious next step across devices.",
  ],
  systems: [
    "The public experience prepares visitors for a structured membership pathway rather than ending at a generic contact action.",
    "Enrollment connects to a managed checkout and private member-access step visible on the public site.",
    "Onboarding expectations create continuity between browsing, joining, and entering the private member experience.",
    "Educational and community structures are explained publicly without exposing private member content or proprietary implementation details.",
  ],
  transformation: "Serene Origins moved from having no digital presence to presenting a sensitive, deeply personal offering through an experience built around privacy, structure, and confidence.",
  liveUrl: "https://www.serene-origins.com/",
  visualIdentity: {
    primary: "#ede5d6", secondary: "#0b0d0a", surface: "#10130f", surfaceStrong: "#080a08", text: "#f4efe6", textMuted: "#b9b3aa", signal: "#a8b49e", border: "#44483f",
  },
  experienceProfile: {
    id: "serene-private-structure", displayFamily: "serif", displayWeight: 400, displayTracking: "-0.025em", sectionSpacing: "clamp(6rem, 12vw, 11rem)", surfaceRadius: "0.25rem", ctaShape: "square", imageScale: "dominant", transitionDuration: "900ms", takeoverIntensity: 0.82,
  },
  media: {
    card: { src: "/case-studies/serene-origins/card.webp", alt: "Serene Origins private support experience in a calm dark environment.", width: 1200, height: 750 },
    desktop: { src: "/case-studies/serene-origins/live-desktop.webp", alt: "Serene Origins desktop experience introducing private structured support with calm editorial typography.", width: 1600, height: 1000 },
    tablet: { src: "/case-studies/serene-origins/card.webp", alt: "Serene Origins experience composed for a compact viewport.", width: 1200, height: 750 },
    mobile: { src: "/case-studies/serene-origins/card.webp", alt: "Serene Origins private support experience represented on mobile.", width: 1200, height: 750 },
  },
  metadata: {
    title: "Serene Origins Transformation Record",
    description: "See how Mariner Nexus created a private, structured digital experience for Serene Origins around trust, clarity, and human support.",
    ogImage: "/case-studies/serene-origins/og.webp",
  },
  presentation: {
    recordNumber: "02",
    situationHeading: "A sensitive subject required a different kind of digital beginning.",
    objectiveHeading: "A sensitive subject needed a quieter digital language.",
    strategyHeading: "Determine how the experience should speak before deciding how it should look.",
    experienceHeading: "Privacy, calm, empathy, and structure shape the world.",
    experienceIntro: "Every visible decision supports the same objective: helping visitors understand the offering without feeling pressured or exposed.",
    systemsHeading: "Joining needed to feel as considered as browsing.",
    systemsIntro: "The public experience establishes expectations and continuity between understanding, membership, and the next operational step.",
    liveCta: "Experience Serene Origins",
    roles: ["Strategy", "Digital experience", "Information architecture", "Responsive web engineering", "Operational/member-pathway connection"],
    journey: ["Recognition", "Understanding", "Structure", "Offering", "Operational clarity", "Trust", "Decision"],
  },
  publicationStatus: "published",
};
