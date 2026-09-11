import { awakeningProject } from "@/content/projects/awakening";
import { garyMarinerProject } from "@/content/projects/gary-mariner";
import { jacobMarinerProject } from "@/content/projects/jacob-mariner";
import { sereneOriginsProject } from "@/content/projects/serene-origins";
import { sovereignBlueprintProject } from "@/content/projects/sovereign-blueprint-consulting";
import { unduguProject } from "@/content/projects/undugu";
import type { ProjectRecord, ProjectRegistryEntry } from "@/content/projects/types";

export const projectRegistry = [
  {
    slug: "jacob-mariner",
    name: "Jacob Mariner",
    liveUrl: "https://www.jacobmariner.com/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: jacobMarinerProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "Athlete Intelligence · Recruiting · Evidence",
      headline: "A recruiting website became a living athlete intelligence system.",
      summary: "An evolving digital athlete profile that organizes film, performance evidence, academics, athletic history, provenance, and recruiting pathways into one connected experience.",
      identity: jacobMarinerProject.visualIdentity,
      experience: jacobMarinerProject.experienceProfile,
    },
    media: {
      card: "/case-studies/jacob-mariner/card.jpg",
      desktop: "/case-studies/jacob-mariner/live-desktop.jpg",
      tablet: "/case-studies/jacob-mariner/live-tablet.jpg",
      mobile: "/case-studies/jacob-mariner/live-mobile.jpg",
      og: "/og/jacob-mariner",
    },
    project: jacobMarinerProject,
  },
  {
    slug: "undugu",
    name: "Undugu",
    liveUrl: "https://www.undugu.org/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: unduguProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "501(c)(3) nonprofit organization · Brotherhood · Community · Movement · Participation",
      headline: "You have been carrying too much alone. Step into the room.",
      summary: "A mission-driven nonprofit experience that makes brotherhood, community activity, programs, events, and participation visible.",
      identity: unduguProject.visualIdentity,
      experience: unduguProject.experienceProfile,
    },
    media: {
      card: "/case-studies/undugu/card.webp",
      desktop: "/case-studies/undugu/live-desktop.webp",
      tablet: "/case-studies/undugu/responsive-tablet.webp",
      mobile: "/case-studies/undugu/live-mobile.webp",
      og: "/case-studies/undugu/og.webp",
    },
    project: unduguProject,
  },
  {
    slug: "gary-mariner",
    name: "GaryMariner.com",
    liveUrl: "https://www.garymariner.com/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: garyMarinerProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "Identity · Credibility · Connection",
      headline: "The person changed. The website had to catch up.",
      summary: "A personal digital identity that organizes multiple professional worlds and gives every encounter one deliberate place to continue.",
      cta: "Meet Gary",
      identity: garyMarinerProject.visualIdentity,
      experience: garyMarinerProject.experienceProfile,
    },
    media: {
      card: "/case-studies/gary-mariner-ii/card.webp",
      desktop: "/case-studies/gary-mariner-ii/live-desktop.webp",
      mobile: "/case-studies/gary-mariner-ii/live-mobile.webp",
      social: "/case-studies/gary-mariner-ii/live-social.webp",
      og: "/case-studies/gary-mariner-ii/og.webp",
    },
    project: garyMarinerProject,
  },
  {
    slug: "serene-origins",
    name: "Serene Origins",
    liveUrl: "https://www.serene-origins.com/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: sereneOriginsProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "Private support membership",
      headline: "Private, structured support for living with more clarity and confidence.",
      summary: "A discreet membership experience built around clarity, guided support, and a calm path into community.",
      identity: sereneOriginsProject.visualIdentity,
      experience: sereneOriginsProject.experienceProfile,
    },
    media: {
      card: "/case-studies/serene-origins/card.webp",
      desktop: "/case-studies/serene-origins/live-desktop.webp",
      og: "/case-studies/serene-origins/og.webp",
    },
    project: sereneOriginsProject,
  },
  {
    slug: "sovereign-blueprint-consulting",
    name: "Sovereign Blueprint Consulting",
    liveUrl: "https://www.sovereignblueprintconsulting.com/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: sovereignBlueprintProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "Credit · Capital · Structure",
      headline: "Build the financial structure your vision requires.",
      summary: "An authority-led consulting experience that routes purpose-driven entrepreneurs toward qualification and readiness.",
      identity: sovereignBlueprintProject.visualIdentity,
      experience: sovereignBlueprintProject.experienceProfile,
    },
    media: {
      card: "/case-studies/sovereign-blueprint-consulting/card.webp",
      desktop: "/case-studies/sovereign-blueprint-consulting/live-desktop.webp",
      og: "/case-studies/sovereign-blueprint-consulting/og.webp",
    },
    project: sovereignBlueprintProject,
  },
  {
    slug: "awakening",
    name: "Awakening",
    liveUrl: "https://www.awakening.fyi/",
    liveStatus: "live",
    classification: "PUBLISHED",
    publicDisplayAuthorization: "authorized",
    caseStudyAuthorization: "authorized",
    currentImplementationCredit: "verified",
    experienceProfileId: awakeningProject.experienceProfile.id,
    narrativeAvailable: true,
    metadataAvailable: true,
    preview: {
      eyebrow: "Immersion · Atmosphere · Possibility",
      headline: "The experience had to begin before the retreat did.",
      summary: "An image-led digital environment designed to let prospective participants begin feeling the possibility before they arrive.",
      identity: awakeningProject.visualIdentity,
      experience: awakeningProject.experienceProfile,
    },
    media: {
      card: "/case-studies/althea-awakening-conference/card.webp",
      desktop: "/case-studies/althea-awakening-conference/live-desktop.webp",
      og: "/case-studies/althea-awakening-conference/og.webp",
    },
    project: awakeningProject,
  },
] satisfies ProjectRegistryEntry[];

export const publishedProjects: ProjectRecord[] = projectRegistry.flatMap((entry) =>
  entry.classification === "PUBLISHED" &&
  entry.publicDisplayAuthorization === "authorized" &&
  entry.caseStudyAuthorization === "authorized" &&
  entry.project?.publicationStatus === "published"
    ? [entry.project]
    : [],
);

export const workIndexProjects = projectRegistry.filter(
  (entry) => entry.publicDisplayAuthorization === "authorized" && entry.project,
).sort((a, b) => ["jacob-mariner", "awakening", "gary-mariner", "sovereign-blueprint-consulting", "serene-origins", "undugu"].indexOf(a.slug) - ["jacob-mariner", "awakening", "gary-mariner", "sovereign-blueprint-consulting", "serene-origins", "undugu"].indexOf(b.slug));

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export type { ProjectRecord } from "@/content/projects/types";
