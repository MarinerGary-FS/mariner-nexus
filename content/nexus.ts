export type NexusNodeId = "objective" | "audience" | "strategy" | "content" | "experience" | "platform" | "systems" | "data" | "operation" | "outcome";
export type NexusObjectiveId = "core" | "build" | "transform" | "connect" | "explore";

export type NexusNodeDefinition = {
  id: NexusNodeId;
  label: string;
  category: string;
  description: string;
  scoped?: boolean;
  x: number;
  y: number;
};

export type NexusConnectionDefinition = {
  from: NexusNodeId;
  relation: "informs" | "supports" | "feeds" | "enables" | "responds to" | "connects with" | "results in";
  to: NexusNodeId;
};

export type NexusObjectiveDefinition = {
  id: NexusObjectiveId;
  label: string;
  invitation: string;
  summary: string;
  nodes: NexusNodeDefinition[];
  connections: NexusConnectionDefinition[];
  mobileOrder: NexusNodeId[];
  outcome: string;
};

const descriptions: Record<NexusNodeId, string> = {
  objective: "The business need that determines what architecture is appropriate.",
  audience: "The people whose context, needs, and decisions shape the response.",
  strategy: "Clarifies what should exist, why it matters, and what success requires.",
  content: "Turns meaning and information into a useful, maintainable structure.",
  experience: "Shapes how people understand, interact with, and trust the organization.",
  platform: "Provides an appropriate production foundation for the experience.",
  systems: "Connects the visible experience to the tools and operations it needs.",
  data: "Makes interaction useful through structured capture and visibility where required.",
  operation: "Supports the human action or workflow that follows the interface.",
  outcome: "The practical result the architecture is designed to make possible.",
};

const node = (id: NexusNodeId, label: string, category: string, x: number, y: number, scoped = false): NexusNodeDefinition => ({ id, label, category, description: descriptions[id], scoped, x, y });

export const nexusObjectives: NexusObjectiveDefinition[] = [
  {
    id: "core",
    label: "Core architecture",
    invitation: "Strategy, Experience, and Systems work together.",
    summary: "Mariner Nexus begins with the objective, then shapes the relationship among strategy, the visible experience, and the operation behind it.",
    nodes: [node("objective", "Objective", "Direction", 50, 10), node("strategy", "Strategy", "Core", 23, 42), node("experience", "Experience", "Core", 50, 50), node("systems", "Systems", "Core", 77, 42), node("outcome", "Useful outcome", "Result", 50, 86)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "objective", relation: "informs", to: "experience" }, { from: "objective", relation: "informs", to: "systems" },
      { from: "strategy", relation: "supports", to: "experience" }, { from: "strategy", relation: "supports", to: "systems" }, { from: "experience", relation: "connects with", to: "systems" },
      { from: "experience", relation: "results in", to: "outcome" }, { from: "systems", relation: "enables", to: "outcome" },
    ],
    mobileOrder: ["objective", "strategy", "experience", "systems", "outcome"],
    outcome: "A coherent digital response built around the organization rather than a template.",
  },
  {
    id: "build",
    label: "Build something new",
    invitation: "Give a new idea the right foundation.",
    summary: "A new initiative needs clarity before production: audience and strategy shape the experience, platform, and supporting systems.",
    nodes: [node("objective", "New initiative", "Objective", 7, 78), node("audience", "Audience", "Context", 20, 55), node("strategy", "Strategy", "Core", 35, 65), node("content", "Content", "Expression", 43, 38), node("experience", "Experience", "Core", 54, 53), node("platform", "Platform", "Foundation", 66, 27), node("systems", "Systems", "Core", 74, 42), node("outcome", "Confident launch", "Outcome", 88, 15)],
    connections: [
      { from: "objective", relation: "informs", to: "audience" }, { from: "audience", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "content" }, { from: "strategy", relation: "informs", to: "experience" },
      { from: "content", relation: "supports", to: "experience" }, { from: "experience", relation: "informs", to: "platform" }, { from: "platform", relation: "supports", to: "systems" }, { from: "experience", relation: "connects with", to: "systems" }, { from: "systems", relation: "enables", to: "outcome" },
    ],
    mobileOrder: ["objective", "audience", "strategy", "content", "experience", "platform", "systems", "outcome"],
    outcome: "A confident launch with an architecture appropriate to the idea and the people it must serve.",
  },
  {
    id: "transform",
    label: "Transform what exists",
    invitation: "Evolve an experience that no longer reflects the organization.",
    summary: "Transformation begins with the existing state. Strategy determines what should be preserved, rethought, modernized, or connected.",
    nodes: [node("objective", "Existing state", "Objective", 7, 25), node("audience", "Audience reality", "Context", 12, 76), node("strategy", "Audit + strategy", "Core", 40, 43), node("content", "Content structure", "Expression", 27, 12), node("experience", "Experience", "Core", 57, 53), node("platform", "Modern platform", "Foundation", 29, 86), node("systems", "Systems", "Core", 74, 43), node("outcome", "Aligned organization", "Outcome", 88, 50)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "audience", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "content" }, { from: "strategy", relation: "informs", to: "experience" },
      { from: "content", relation: "supports", to: "experience" }, { from: "experience", relation: "informs", to: "platform" }, { from: "experience", relation: "connects with", to: "systems" }, { from: "platform", relation: "supports", to: "systems" }, { from: "systems", relation: "enables", to: "outcome" },
    ],
    mobileOrder: ["objective", "audience", "strategy", "content", "experience", "platform", "systems", "outcome"],
    outcome: "A modernized experience that reflects where the organization is going without discarding what still works.",
  },
  {
    id: "connect",
    label: "Connect the experience",
    invitation: "Make interaction useful after someone acts.",
    summary: "The visible experience becomes more valuable when interaction, structured data, systems, and human operation form one deliberate path.",
    nodes: [node("objective", "Disconnected action", "Objective", 6, 22), node("strategy", "Strategy", "Core", 23, 28), node("experience", "Experience", "Core", 39, 39), node("data", "Structured data", "Data", 54, 39, true), node("systems", "Systems", "Core", 68, 55), node("operation", "Human operation", "Operation", 80, 55, true), node("outcome", "Responsive follow-through", "Outcome", 88, 76)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "experience" }, { from: "experience", relation: "feeds", to: "data" }, { from: "data", relation: "feeds", to: "systems" },
      { from: "systems", relation: "supports", to: "operation" }, { from: "operation", relation: "results in", to: "outcome" }, { from: "experience", relation: "connects with", to: "systems" },
    ],
    mobileOrder: ["objective", "strategy", "experience", "data", "systems", "operation", "outcome"],
    outcome: "A connected response where the interface supports structured follow-through instead of ending at submission.",
  },
  {
    id: "explore",
    label: "Explore what’s possible",
    invitation: "Discover an appropriate future-state architecture.",
    summary: "Possibility is grounded in the objective: strategy combines expressive experience, responsive foundations, useful visibility, and practical integration only where they add value.",
    nodes: [node("objective", "Future state", "Objective", 50, 90), node("audience", "Audience", "Context", 7, 24), node("strategy", "Strategy", "Core", 35, 61), node("content", "Content", "Expression", 27, 10), node("experience", "Interactive experience", "Core", 50, 48), node("platform", "Responsive platform", "Foundation", 73, 10), node("data", "Data visibility", "Visibility", 93, 24, true), node("systems", "Practical systems", "Core", 65, 61), node("outcome", "New capability", "Outcome", 50, 8)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "audience", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "content" }, { from: "strategy", relation: "informs", to: "experience" },
      { from: "content", relation: "supports", to: "experience" }, { from: "experience", relation: "informs", to: "platform" }, { from: "experience", relation: "feeds", to: "data" }, { from: "data", relation: "supports", to: "systems" }, { from: "platform", relation: "connects with", to: "systems" }, { from: "systems", relation: "enables", to: "outcome" },
    ],
    mobileOrder: ["objective", "audience", "strategy", "content", "experience", "platform", "data", "systems", "outcome"],
    outcome: "A credible future state that expands what the organization can express and operate without unsupported complexity.",
  },
];

export const nexusCore = nexusObjectives[0];
export const nexusChoices = nexusObjectives.slice(1);
export const nexusNodeIds = Object.keys(descriptions) as NexusNodeId[];
