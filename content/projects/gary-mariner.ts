import type { ProjectRecord } from "@/content/projects/types";

export const garyMarinerProject: ProjectRecord = {
  slug: "gary-mariner",
  clientName: "GaryMariner.com",
  clientState: "transform",
  shortTransformation: "From an acting-focused portfolio to a personal digital identity built around who Gary Mariner is now.",
  client: "GaryMariner.com is the personal digital identity of Gary Mariner, founder of Mariner Nexus and a professional whose work spans entrepreneurship, commercial real estate, business and technology operations, networking, and community relationships.",
  situation: "GaryMariner.com originally existed primarily as a portfolio for background acting work. That website was not necessarily defective; it had become strategically obsolete. As Gary's professional responsibilities expanded, the site continued to answer what acting work he had done instead of helping people understand who he is now.",
  objective: "Transform an outdated acting-focused portfolio into a central personal digital identity that accurately represents Gary Mariner's current professional world, supports networking across platforms, and creates a deliberate pathway into Mariner Nexus.",
  strategy: [
    "Redefine the purpose of the website before redesigning its appearance.",
    "Organize multiple professional dimensions into one coherent identity without turning the experience into a résumé.",
    "Create one canonical destination that can continue relationships begun through social media, events, introductions, real estate, networking, or community work.",
    "Keep GaryMariner.com and MarinerNexus.com distinct: the personal site answers who Gary is; the corporate site answers what Mariner Nexus can do.",
  ],
  experience: [
    "Six editorial scenes move from personal positioning through systems thinking, human context, ecosystem relationships, and a controlled invitation.",
    "Dark atmosphere, executive portraiture, chaptered typography, and measured pacing create a personal world that is confident without becoming institutionally corporate.",
    "Ecosystem pathways connect Gary's identity to Mariner Nexus, Undugu, public intelligence, LinkedIn, and direct contact without fragmenting the narrative.",
    "Mobile preserves the full identity sequence with focused intimacy, readable typography, natural scrolling, and touch-forward continuation paths.",
  ],
  systems: [
    "One canonical URL supports consistent continuation from social profiles, professional introductions, events, digital communications, and relationship building.",
    "A dedicated social gateway, downloadable contact card, LinkedIn routing, and a private networking surface extend the identity beyond the homepage.",
    "The controlled invitation connects to Cal.com scheduling or prepares a direct email locally; it does not claim database or CRM persistence.",
    "Deliberate external routing allows personal credibility to lead into Mariner Nexus without converting the personal site into a corporate sales page.",
  ],
  transformation: "GaryMariner.com moved from documenting one part of Gary's past to representing the professional identity he operates through today. The result is one digital destination capable of supporting personal discovery, professional networking, and a deliberate pathway into Mariner Nexus.",
  liveUrl: "https://www.garymariner.com/",
  visualIdentity: {
    primary: "#7aa7ff", secondary: "#0a101c", surface: "#0d1422", surfaceStrong: "#070b12", text: "#f2f5fa", textMuted: "#a9b2c2", signal: "#7aa7ff", border: "#2a3850",
  },
  experienceProfile: {
    id: "gary-individual-command-surface", displayFamily: "serif", displayWeight: 500, displayTracking: "-0.04em", sectionSpacing: "clamp(6.5rem, 13vw, 12rem)", surfaceRadius: "0", ctaShape: "square", imageScale: "dominant", transitionDuration: "850ms", takeoverIntensity: 0.9,
  },
  media: {
    card: { src: "/case-studies/gary-mariner-ii/card.webp", alt: "GaryMariner.com personal digital identity and executive command surface.", width: 1600, height: 1000 },
    desktop: { src: "/case-studies/gary-mariner-ii/live-desktop.webp", alt: "GaryMariner.com desktop experience organizing Gary's current professional identity through an editorial systems narrative.", width: 1600, height: 1000 },
    tablet: { src: "/case-studies/gary-mariner-ii/live-desktop.webp", alt: "GaryMariner.com personal identity experience composed for tablet.", width: 1600, height: 1000 },
    mobile: { src: "/case-studies/gary-mariner-ii/live-mobile.webp", alt: "GaryMariner.com mobile experience continuing Gary's personal identity across professional encounters.", width: 900, height: 1400 },
  },
  metadata: {
    title: "GaryMariner.com Transformation Record",
    description: "See how Mariner Nexus transformed an acting-focused portfolio into a personal digital identity built around who Gary Mariner is now.",
    ogImage: "/case-studies/gary-mariner-ii/og.webp",
  },
  presentation: {
    recordNumber: "05",
    situationHeading: "The website was representing a version of Gary that was no longer complete.",
    objectiveHeading: "One destination for a professional identity that no longer fits inside one title.",
    strategyHeading: "The person had evolved. His digital identity needed to evolve with him.",
    experienceHeading: "The conversation needed somewhere to continue.",
    experienceIntro: "The finished experience gives social, professional, networking, real-estate, and community encounters one consistent place to become a fuller understanding of the person.",
    systemsHeading: "One identity. Multiple points of entry.",
    systemsIntro: "The architecture connects individual discovery, relationship continuity, and corporate exploration without confusing the personal site with the company it can lead toward.",
    liveCta: "Meet Gary",
    roles: ["Strategy", "Personal digital identity architecture", "Information architecture", "Experience design", "UX/UI", "Responsive web engineering", "Ecosystem routing"],
    journey: ["Encounter", "Identity", "Credibility", "Professional worlds", "Connection", "Mariner Nexus", "Continue"],
  },
  publicationStatus: "published",
};
