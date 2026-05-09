import type { Metadata } from "next";
import NexusHomeExperience from "@/components/sections/NexusHomeExperience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mariner Nexus | AI-Native Digital Ecosystems for Business Evolution",
  description:
    "Mariner Nexus creates human-centered digital ecosystems that evolve brand perception, customer experience, communication systems, AI adoption, and operational scalability.",
  path: "/",
});

export default function HomePage() {
  return <NexusHomeExperience />;
}
