import { unduguProject } from "@/content/projects/undugu";
import type { ProjectRecord } from "@/content/projects/types";

const authorizedProjectSlugs = new Set(["undugu"]);
const projects: ProjectRecord[] = [unduguProject];

export const publishedProjects = projects.filter(
  (project) => project.publicationStatus === "published" && authorizedProjectSlugs.has(project.slug),
);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export type { ProjectRecord } from "@/content/projects/types";
