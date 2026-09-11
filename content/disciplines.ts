export type DisciplineId = "strategy" | "experience" | "systems" | "intelligence";

export type Discipline = {
  id: DisciplineId;
  number: string;
  name: string;
  homeStatement: string;
  capabilityStatement: string;
  capabilities: string[];
};

export const disciplines: Discipline[] = [
  {
    id: "strategy",
    number: "01",
    name: "Strategy",
    homeStatement: "Determine what should exist and why.",
    capabilityStatement: "Determine what should exist before deciding how to build it.",
    capabilities: [
      "Digital discovery",
      "Competitive and comparable research",
      "Audience and journey architecture",
      "Information architecture",
      "Technology and platform strategy",
      "Digital modernization",
    ],
  },
  {
    id: "experience",
    number: "02",
    name: "Experience",
    homeStatement: "Create how people interact with it.",
    capabilityStatement: "Create a digital experience appropriate to the organization, audience, and objective.",
    capabilities: [
      "Custom digital experiences",
      "Websites and landing experiences",
      "UX and UI",
      "Responsive experience",
      "Digital visual systems",
      "Interactive experiences",
      "Content presentation",
    ],
  },
  {
    id: "systems",
    number: "03",
    name: "Systems",
    homeStatement: "Connect what happens behind the experience.",
    capabilityStatement: "Connect the experience to what makes it useful after someone takes action.",
    capabilities: [
      "Forms and structured data collection",
      "Scheduling and payments",
      "Content management",
      "Analytics",
      "Scoped CRM integration",
      "Scoped APIs",
      "Scoped portals and dashboards",
      "Practical workflow automation",
    ],
  },
  {
    id: "intelligence",
    number: "04",
    name: "Intelligence",
    homeStatement: "Turn information, context, and evidence into useful action.",
    capabilityStatement: "Build systems that preserve context, surface evidence, and support useful action as the operation evolves.",
    capabilities: [
      "AI-native application architecture",
      "Structured intelligence layers",
      "Evidence and provenance systems",
      "Multimodal information workflows",
      "Retrieval and contextual systems",
      "Agent-assisted workflows",
      "Operational decision support",
      "Intelligent dashboards",
      "Automated research and ingestion pipelines",
      "Human-in-the-loop orchestration",
    ],
  },
];
