import type { CSSProperties, ReactNode } from "react";
import type { ProjectVisualIdentity } from "@/content/projects/types";

type ProjectFrameProps = { children: ReactNode; identity: ProjectVisualIdentity };

export function ProjectFrame({ children, identity }: ProjectFrameProps) {
  const style = {
    "--project-primary": identity.primary,
    "--project-secondary": identity.secondary,
    "--project-surface": identity.surface,
    "--project-text": identity.text,
    "--project-signal": identity.signal,
  } as CSSProperties;

  return <div className="mn-project-frame" data-client-theme="undugu" style={style}>{children}</div>;
}
