export type NexusNodeId = "objective" | "audience" | "strategy" | "content" | "experience" | "platform" | "systems" | "data" | "intelligence" | "operation" | "outcome";
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
  intelligence: "Preserves context, organizes evidence, and surfaces what matters when the objective calls for it.",
  operation: "Supports the human action or workflow that follows the interface.",
  outcome: "The practical result the architecture is designed to make possible.",
};

const node = (id: NexusNodeId, label: string, category: string, x: number, y: number, scoped = false): NexusNodeDefinition => ({ id, label, category, description: descriptions[id], scoped, x, y });

export const nexusObjectives: NexusObjectiveDefinition[] = [
  {
    id: "core",
    label: "Core architecture",
    invitation: "Strategy shapes Experience, Systems, and Intelligence.",
    summary: "Mariner Nexus begins with the objective. Strategy shapes the visible experience, the operation beneath it, and—when useful—the intelligence that preserves context and evidence.",
    nodes: [node("objective", "Objective", "Direction", 50, 8), node("strategy", "Strategy", "Shaping discipline", 50, 27), node("experience", "Experience", "Core", 18, 54), node("systems", "Systems", "Core", 50, 58), node("intelligence", "Intelligence", "Conditional layer", 82, 54, true), node("outcome", "Useful outcome", "Result", 50, 88)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "strategy", relation: "supports", to: "experience" }, { from: "strategy", relation: "supports", to: "systems" }, { from: "strategy", relation: "supports", to: "intelligence" },
      { from: "experience", relation: "connects with", to: "systems" }, { from: "systems", relation: "feeds", to: "intelligence" }, { from: "experience", relation: "results in", to: "outcome" }, { from: "systems", relation: "enables", to: "outcome" }, { from: "intelligence", relation: "supports", to: "outcome" },
    ],
    mobileOrder: ["objective", "strategy", "experience", "systems", "intelligence", "outcome"],
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
    summary: "The visible experience becomes more valuable when interaction, structured data, systems, useful intelligence, and human operation form one deliberate path.",
    nodes: [node("objective", "Disconnected action", "Objective", 6, 20), node("strategy", "Strategy", "Core", 20, 27), node("experience", "Experience", "Core", 35, 41), node("data", "Structured data", "Data", 49, 30, true), node("systems", "Systems", "Core", 57, 58), node("intelligence", "Useful intelligence", "Conditional layer", 72, 39, true), node("operation", "Human operation", "Operation", 82, 58, true), node("outcome", "Responsive follow-through", "Outcome", 91, 78)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "experience" }, { from: "experience", relation: "feeds", to: "data" }, { from: "data", relation: "feeds", to: "systems" },
      { from: "data", relation: "feeds", to: "intelligence" }, { from: "systems", relation: "supports", to: "intelligence" }, { from: "intelligence", relation: "supports", to: "operation" }, { from: "systems", relation: "supports", to: "operation" }, { from: "operation", relation: "results in", to: "outcome" }, { from: "experience", relation: "connects with", to: "systems" },
    ],
    mobileOrder: ["objective", "strategy", "experience", "data", "systems", "intelligence", "operation", "outcome"],
    outcome: "A connected response where the interface supports structured follow-through instead of ending at submission.",
  },
  {
    id: "explore",
    label: "Explore what’s possible",
    invitation: "Discover an appropriate future-state architecture.",
    summary: "Possibility is grounded in the objective: strategy combines expressive experience, responsive foundations, useful visibility, practical integration, and intelligence only where they add value.",
    nodes: [node("objective", "Future state", "Objective", 50, 92), node("audience", "Audience", "Context", 6, 24), node("strategy", "Strategy", "Core", 30, 65), node("content", "Content", "Expression", 24, 11), node("experience", "Interactive experience", "Core", 46, 48), node("platform", "Responsive platform", "Foundation", 69, 10), node("data", "Data visibility", "Visibility", 92, 24, true), node("systems", "Practical systems", "Core", 62, 67), node("intelligence", "Intelligence layer", "Conditional layer", 82, 49, true), node("outcome", "New capability", "Outcome", 50, 6)],
    connections: [
      { from: "objective", relation: "informs", to: "strategy" }, { from: "audience", relation: "informs", to: "strategy" }, { from: "strategy", relation: "informs", to: "content" }, { from: "strategy", relation: "informs", to: "experience" },
      { from: "content", relation: "supports", to: "experience" }, { from: "experience", relation: "informs", to: "platform" }, { from: "experience", relation: "feeds", to: "data" }, { from: "data", relation: "supports", to: "systems" }, { from: "data", relation: "feeds", to: "intelligence" }, { from: "platform", relation: "connects with", to: "systems" }, { from: "systems", relation: "supports", to: "intelligence" }, { from: "intelligence", relation: "enables", to: "outcome" }, { from: "systems", relation: "enables", to: "outcome" },
    ],
    mobileOrder: ["objective", "audience", "strategy", "content", "experience", "platform", "data", "systems", "intelligence", "outcome"],
    outcome: "A credible future state that expands what the organization can express and operate without unsupported complexity.",
  },
];

export const nexusCore = nexusObjectives[0];
export const nexusChoices = nexusObjectives.slice(1);
export const nexusNodeIds = Object.keys(descriptions) as NexusNodeId[];
