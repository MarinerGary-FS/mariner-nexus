import type { Metadata } from "next";
import CorporateHome from "@/components/corporate/CorporateHome";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mariner Nexus | Strategy, Experience, and Technology",
  description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
  path: "/",
});

export default function HomePage() {
  return <CorporateHome />;
}
