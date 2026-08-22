export type ClientState = "create" | "evolve" | "transform";
export type PublicationStatus = "draft" | "approved" | "published" | "archived";

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
  media: {
    card: ProjectMedia;
    desktop: ProjectMedia;
    mobile: ProjectMedia;
  };
  metadata: ProjectMetadata;
  publicationStatus: PublicationStatus;
};
