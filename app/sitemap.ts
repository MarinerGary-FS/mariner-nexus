import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
import { siteUrl } from "@/lib/seo";

const routes = ["/", "/capabilities", "/work", ...publishedProjects.map(({ slug }) => `/work/${slug}`), "/approach", "/company", "/start", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}
