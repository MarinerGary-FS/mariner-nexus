export const ogCardIds = ["home", "capabilities", "work", "jacob-mariner"] as const;

export type OgCardId = (typeof ogCardIds)[number];

export type OgCard = {
  brand: "MARINER NEXUS";
  eyebrow: string;
  headline: string;
  architecture: string;
  supportingSentence: string;
  index: string;
};

export const ogCards: Record<OgCardId, OgCard> = {
  home: {
    brand: "MARINER NEXUS",
    eyebrow: "Connected digital environments",
    headline: "We build intelligent digital systems.",
    architecture: "Strategy · Experience · Systems · Intelligence",
    supportingSentence: "Digital environments where experience, operation, information, and intelligence work as one connected architecture.",
    index: "01",
  },
  capabilities: {
    brand: "MARINER NEXUS",
    eyebrow: "Capabilities",
    headline: "One architecture. Four disciplines.",
    architecture: "Strategy · Experience · Systems · Intelligence",
    supportingSentence: "Business direction, human experience, connected operations, and useful intelligence shaped as one response.",
    index: "02",
  },
  work: {
    brand: "MARINER NEXUS",
    eyebrow: "Selected Work",
    headline: "Transformation, made visible.",
    architecture: "Six transformation records · Distinct worlds · One standard of rigor",
    supportingSentence: "Real digital systems shaped around the people, evidence, and objectives they are meant to serve.",
    index: "03",
  },
  "jacob-mariner": {
    brand: "MARINER NEXUS",
    eyebrow: "Transformation Record 06",
    headline: "Jacob Mariner",
    architecture: "Athlete Intelligence Platform",
    supportingSentence: "From recruiting website to living performance system.",
    index: "06",
  },
};

export function isOgCardId(value: string): value is OgCardId {
  return ogCardIds.some((cardId) => cardId === value);
}
