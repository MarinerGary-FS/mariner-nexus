import type { ProjectRecord } from "@/content/projects/types";

export const unduguProject: ProjectRecord = {
  slug: "undugu",
  clientName: "Undugu",
  clientState: "transform",
  shortTransformation: "From no meaningful digital presence to a credible, connected organizational platform.",
  client: "Undugu is a brotherhood movement creating spaces for men to heal, grow, and rise together. Its work includes gatherings, programs, community stories, and public ways to participate and support the movement.",
  situation: "Undugu had a real organization, mission, brotherhood, events, and growing activity, but no meaningful digital presence capable of representing that organization publicly.",
  objective: "Translate the real-world organization into a credible and useful digital presence that could support public understanding, organizational legitimacy, events, engagement, resources, communications, and future growth.",
  strategy: [
    "Begin with the organization and its real-world activity rather than a predetermined page template.",
    "Establish a clear information hierarchy for the movement, events, programs, impact, and ways to participate.",
    "Turn recurring activity into repeatable content pathways that can expand as the organization grows.",
    "Create clear audience journeys for understanding the mission, entering the community, attending events, and supporting the work.",
  ],
  experience: [
    "A distinctive Undugu identity leads the experience without losing clarity or usability.",
    "Organizational storytelling connects the mission to real gatherings, voices, and visible community activity.",
    "Navigation and calls to action create direct paths into events, programs, connection, and support.",
    "Desktop and mobile presentations preserve the same message through composition designed for each viewport.",
  ],
  systems: [
    "Structured event and program content creates repeatable public information pathways.",
    "External registration and donation actions connect interested visitors to the next operational step.",
    "Reusable content structure supports movement stories, impact information, resources, and future expansion.",
    "Clear communication pathways help the website remain useful even as Undugu's activity changes over time.",
  ],
  transformation: "Undugu moved from having no meaningful digital presence to presenting itself online as a credible, organized, functioning organization.",
  liveUrl: "https://www.undugu.org/",
  visualIdentity: {
    primary: "#563372",
    secondary: "#281b34",
    surface: "#f6f2f8",
    surfaceStrong: "#e8deed",
    text: "#211827",
    textMuted: "#665c6b",
    signal: "#765392",
    border: "#c8b8d0",
  },
  media: {
    card: { src: "/case-studies/undugu/card.webp", alt: "Undugu website opening showing its identity, brotherhood gathering, and movement message.", width: 1200, height: 750 },
    desktop: { src: "/case-studies/undugu/live-desktop.webp", alt: "Undugu desktop website experience with movement navigation, a brotherhood gathering, and the message You have been carrying too much alone.", width: 1600, height: 1000 },
    mobile: { src: "/case-studies/undugu/live-mobile.webp", alt: "Undugu mobile website experience with movement introduction, participation actions, and a brotherhood gathering.", width: 900, height: 1400 },
  },
  metadata: {
    title: "Undugu Transformation Record",
    description: "See how Mariner Nexus translated Undugu's real-world organization, brotherhood, and events into a credible connected digital presence.",
    ogImage: "/case-studies/undugu/og.webp",
  },
  publicationStatus: "published",
};
