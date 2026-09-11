import type { Metadata } from "next";
import CorporateHome from "@/components/corporate/CorporateHome";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Mariner Nexus | Intelligent Digital Systems",
  description: "Mariner Nexus designs connected digital environments where strategy, experience, systems, and intelligence operate as one architecture.",
  socialDescription: "Strategy. Experience. Systems. Intelligence.",
  path: "/",
  image: "/og/home",
  imageAlt: "Mariner Nexus — We build intelligent digital systems. Strategy, Experience, Systems, and Intelligence.",
});

export default function HomePage() {
  return <CorporateHome />;
}
