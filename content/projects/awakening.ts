import type { ProjectRecord } from "@/content/projects/types";

export const awakeningProject: ProjectRecord = {
  slug: "awakening",
  clientName: "Awakening",
  clientState: "evolve",
  shortTransformation: "From a conventional retreat presentation to an immersive digital experience designed to make the journey feel real before it begins.",
  client: "Awakening is an immersive experience created by Mrs. Althea for people exploring spiritual understanding, connection, and personal possibility.",
  situation: "A conventional event or retreat website was not enough. Destination imagery, schedules, facilitator information, logistics, and registration could explain the offering, but information alone could not communicate the atmosphere, intention, and possibility the experience needed to carry.",
  objective: "Create a digital experience that allows prospective participants to begin feeling the character, intention, and possibility of the retreat before making the decision to attend.",
  strategy: [
    "Ask how someone should feel while discovering Awakening before deciding which pages should exist.",
    "Structure the journey through curiosity, atmosphere, possibility, understanding, trust, practical clarity, and decision.",
    "Research immersive and experiential digital patterns for insight without copying another retreat identity.",
    "Recognize when early visual directions were not enough and reconsider the experience architecture instead of polishing the wrong idea.",
  ],
  experience: [
    "Image-led composition, expressive typography, atmospheric color, and measured pacing make the website part of the invitation.",
    "The narrative helps prospective participants imagine themselves inside the experience before evaluating logistics.",
    "Information remains accessible inside the atmosphere rather than being replaced by spectacle.",
    "Responsive composition reorganizes imagery, type, pacing, and sequence so immersion survives smaller screens.",
  ],
  systems: [
    "Experiential discovery transitions into practical schedule, speaker, registration, and participation information visible on the live site.",
    "Attendee and vendor paths create distinct routes into the appropriate next action.",
    "Registration and external payment actions connect the public experience to a practical decision without making checkout the opening argument.",
    "No planned or private integration is represented as delivered production functionality.",
  ],
  transformation: "Awakening evolved from presenting information about an immersive gathering to creating a digital environment intended to let prospective participants begin experiencing its possibility before they arrive.",
  liveUrl: "https://www.awakening.fyi/",
  visualIdentity: {
    primary: "#5a3a55", secondary: "#2e1d31", surface: "#faf7f5", surfaceStrong: "#f1e7ed", text: "#2e1d31", textMuted: "#6e5969", signal: "#84577d", border: "#d8c5d1",
  },
  experienceProfile: {
    id: "awakening-atmospheric-invitation", displayFamily: "serif", displayWeight: 430, displayTracking: "-0.035em", sectionSpacing: "clamp(7rem, 14vw, 14rem)", surfaceRadius: "clamp(1.5rem, 4vw, 4rem)", ctaShape: "pill", imageScale: "dominant", transitionDuration: "1000ms", takeoverIntensity: 1,
  },
  media: {
    card: { src: "/case-studies/althea-awakening-conference/card.webp", alt: "Awakening immersive experience with expressive identity and contemplative imagery.", width: 1200, height: 750 },
    desktop: { src: "/case-studies/althea-awakening-conference/live-desktop.webp", alt: "Awakening desktop experience inviting visitors into a spiritual gathering through atmosphere and imagery.", width: 1600, height: 1000 },
    tablet: { src: "/case-studies/althea-awakening-conference/card.webp", alt: "Awakening atmospheric experience represented at tablet scale.", width: 1200, height: 750 },
    mobile: { src: "/case-studies/althea-awakening-conference/card.webp", alt: "Awakening atmospheric experience represented on mobile.", width: 1200, height: 750 },
  },
  metadata: {
    title: "Awakening Transformation Record",
    description: "See how Mariner Nexus moved Awakening beyond a conventional retreat presentation into an immersive digital experience.",
    ogImage: "/case-studies/althea-awakening-conference/og.webp",
  },
  presentation: {
    recordNumber: "04",
    situationHeading: "The experience had to begin before the retreat did.",
    objectiveHeading: "The website became part of the invitation.",
    strategyHeading: "The first correct decision was recognizing that the first visual answer was not enough.",
    experienceHeading: "Sometimes information alone cannot communicate the experience.",
    experienceIntro: "Visual pacing, imagery, typography, composition, and movement progressively draw the visitor into the world surrounding Awakening.",
    systemsHeading: "Immersion still had to lead somewhere practical.",
    systemsIntro: "Emotional discovery transitions naturally into the information and actions a prospective participant needs to make a decision.",
    liveCta: "Experience Awakening",
    roles: ["Strategy", "Experience architecture", "Visual direction", "UX/UI", "Responsive web engineering", "Content architecture"],
    journey: ["Curiosity", "Atmosphere", "Possibility", "Understanding", "Trust", "Practical clarity", "Decision"],
  },
  publicationStatus: "published",
};
