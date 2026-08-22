import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Approach", description: "An adaptable, strategy-led approach to creating sophisticated digital experiences and connected systems.", path: "/approach" });

export default function ApproachPage() {
  return <RouteFoundation eyebrow="Approach" title="Business before interface." description="The work begins by understanding what the organization is trying to create, change, or strengthen—then defining the right digital response." note="The approach route is structurally ready. Its full Understand → Define → Architect → Create → Connect → Refine → Launch → Evolve narrative remains deferred." links={[{ label: "Explore capabilities", href: "/capabilities" }, { label: "Start a project", href: "/start" }]} />;
}
