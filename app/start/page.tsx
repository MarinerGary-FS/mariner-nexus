import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Start a Project", description: "Begin a conversation with Mariner Nexus about what you are trying to create, evolve, or transform.", path: "/start" });

export default function StartPage() {
  return <RouteFoundation eyebrow="Start a Project" title="Begin with what needs to change." description="Tell Mariner Nexus what you are trying to create, strengthen, or make possible. The solution does not need to be figured out before the conversation begins." note="The acquisition route is established without implementing the final inquiry experience or Google Workspace integration." links={[{ label: "Email Mariner Nexus", href: "mailto:hello@marinernexus.com" }, { label: "Review capabilities", href: "/capabilities" }]} />;
}
