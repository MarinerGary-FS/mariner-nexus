import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { siteUrl } from "@/lib/seo";

const staticRoutes: { route: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { route: "/", changeFrequency: "weekly", priority: 1 },
  { route: "/about", changeFrequency: "monthly", priority: 0.8 },
  { route: "/services", changeFrequency: "monthly", priority: 0.8 },
  { route: "/case-studies", changeFrequency: "monthly", priority: 0.9 },
  { route: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ route, changeFrequency, priority }) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}${study.detailHref}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
