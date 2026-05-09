export const bookingLinks = {
  nexusIntro: "https://cal.com/mariner-nexus/nexus-intro",
  creatorEvolution: "https://cal.com/mariner-nexus/creator-evolution",
  operationalEvolution: "https://cal.com/mariner-nexus/operational-evolution-briefing",
  futureStateMapping: "https://cal.com/mariner-nexus/future-state-ecosystem-mapping",
  strategicPartner: "https://cal.com/mariner-nexus/strategic-partner-session",
  executiveSystems: "https://cal.com/mariner-nexus/executive-systems-consultation",
};

export const publicBookingPathways = [
  {
    key: "nexusIntro",
    name: "Nexus Introduction",
    duration: "15 minutes",
    purpose:
      "A focused introduction for visitors who want to understand where their business currently operates and whether Mariner Nexus is the right strategic fit.",
    bestFor: ["Initial questions", "Early exploration", "Referrals", "Quick alignment"],
    cta: "Enter the Nexus",
    href: bookingLinks.nexusIntro,
  },
  {
    key: "creatorEvolution",
    name: "Creator Evolution Session",
    duration: "30 minutes",
    purpose:
      "A strategic session for creators, personal brands, solo operators, and emerging businesses ready to elevate digital identity and operational presence.",
    bestFor: [
      "Creator websites",
      "Personal brand systems",
      "Digital identity upgrades",
      "Entry-level ecosystem builds",
    ],
    cta: "Start Creator Evolution",
    href: bookingLinks.creatorEvolution,
  },
  {
    key: "operationalEvolution",
    name: "Operational Evolution Briefing",
    duration: "45 minutes",
    purpose:
      "A strategic intelligence session focused on operational friction, communication gaps, customer experience limitations, scalability opportunities, and ecosystem architecture.",
    bestFor: ["Businesses", "Nonprofits", "Organizations", "Scaling brands"],
    cta: "Begin Evolution Briefing",
    href: bookingLinks.operationalEvolution,
  },
  {
    key: "futureStateMapping",
    name: "Future-State Ecosystem Mapping",
    duration: "60 minutes",
    purpose:
      "A deeper operational strategy session for mapping the next evolution of business infrastructure, digital authority, AI integration, customer experience, and communication systems.",
    bestFor: [
      "High-intent transformation clients",
      "Complex builds",
      "Ecosystem redesigns",
      "AI-native operational planning",
    ],
    cta: "Map Your Future-State Ecosystem",
    href: bookingLinks.futureStateMapping,
  },
];
