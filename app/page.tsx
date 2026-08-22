import type { Metadata } from "next";
import NexusHomeExperience from "@/components/sections/NexusHomeExperience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mariner Nexus | Strategy, Experience, and Technology",
  description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
  path: "/",
});

export default function HomePage() {
  return <NexusHomeExperience />;
}
