import type { CSSProperties, ReactNode } from "react";
import type { ProjectVisualIdentity } from "@/content/projects/types";

type ProjectFrameProps = { children: ReactNode; identity: ProjectVisualIdentity };

export function ProjectFrame({ children, identity }: ProjectFrameProps) {
  const style = {
    "--project-primary": identity.primary,
    "--project-secondary": identity.secondary,
    "--project-surface": identity.surface,
    "--project-surface-strong": identity.surfaceStrong,
    "--project-text": identity.text,
    "--project-text-muted": identity.textMuted,
    "--project-signal": identity.signal,
    "--project-border": identity.border,
  } as CSSProperties;

  return <div className="mn-project-frame" data-project-identity="configured" style={style}>{children}</div>;
}
