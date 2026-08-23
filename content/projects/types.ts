export type ClientState = "create" | "evolve" | "transform";
export type PublicationStatus = "draft" | "approved" | "published" | "archived";
export type WorkClassification = "PUBLISHED" | "FEATURED" | "HELD";
export type AuthorizationState = "authorized" | "unconfirmed" | "restricted";

export type ProjectRegistryMedia = {
  card?: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
  social?: string;
  og?: string;
};

export type ProjectRegistryEntry = {
  slug: string;
  name: string;
  liveUrl: string;
  liveStatus: "live" | "unavailable" | "unknown";
  classification: WorkClassification;
  publicDisplayAuthorization: AuthorizationState;
  caseStudyAuthorization: AuthorizationState;
  currentImplementationCredit: "verified" | "not-publicly-attributed" | "unknown";
  experienceProfileId: string | null;
  narrativeAvailable: boolean;
  metadataAvailable: boolean;
  preview?: {
    eyebrow: string;
    headline: string;
    summary: string;
    cta?: string;
    identity: ProjectVisualIdentity;
    experience: ProjectExperienceProfile;
  };
  media: ProjectRegistryMedia;
  project?: ProjectRecord;
};

export type ProjectVisualIdentity = {
  primary: string;
  secondary: string;
  surface: string;
  surfaceStrong: string;
  text: string;
  textMuted: string;
  signal: string;
  border: string;
};

export type ProjectExperienceProfile = {
  id: string;
  displayFamily: "serif" | "sans";
  displayWeight: number;
  displayTracking: string;
  sectionSpacing: string;
  surfaceRadius: string;
  ctaShape: "pill" | "square";
  imageScale: "contained" | "dominant";
  transitionDuration: string;
  takeoverIntensity: number;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMetadata = {
  title: string;
  description: string;
  ogImage: string;
};

export type ProjectPresentation = {
  recordNumber: string;
  situationHeading: string;
  objectiveHeading: string;
  strategyHeading: string;
  experienceHeading: string;
  experienceIntro: string;
  systemsHeading: string;
  systemsIntro: string;
  liveCta: string;
  roles: string[];
  journey: string[];
};

export type ProjectRecord = {
  slug: string;
  clientName: string;
  clientState: ClientState;
  shortTransformation: string;
  client: string;
  situation: string;
  objective: string;
  strategy: string[];
  experience: string[];
  systems: string[];
  transformation: string;
  liveUrl: string;
  visualIdentity: ProjectVisualIdentity;
  experienceProfile: ProjectExperienceProfile;
  media: {
    card: ProjectMedia;
    desktop: ProjectMedia;
    tablet: ProjectMedia;
    mobile: ProjectMedia;
  };
  metadata: ProjectMetadata;
  presentation: ProjectPresentation;
  publicationStatus: PublicationStatus;
};
