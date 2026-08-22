"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { ProjectVisualIdentity } from "@/content/projects/types";

type TakeoverState = "mariner" | "entering" | "active" | "releasing";

type ProjectIdentityBoundaryProps = {
  children: ReactNode;
  identity: ProjectVisualIdentity;
  project: string;
  variant: "index" | "record";
};

export function ProjectIdentityBoundary({ children, identity, project, variant }: ProjectIdentityBoundaryProps) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<TakeoverState>("mariner");

  useEffect(() => {
    const boundary = boundaryRef.current;
    if (!boundary) return;

    let frame = 0;
    let observing = false;

    const measure = () => {
      frame = 0;
      if (!observing) return;

      const rect = boundary.getBoundingClientRect();
      const viewport = window.innerHeight;
      let nextState: TakeoverState = "active";

      if (rect.top > viewport * 0.58) nextState = "entering";
      else if (rect.bottom < viewport * 0.42) nextState = "releasing";

      setState((current) => current === nextState ? current : nextState);
    };

    const scheduleMeasure = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    const observer = new IntersectionObserver(([entry]) => {
      observing = entry.isIntersecting;
      if (observing) scheduleMeasure();
      else setState("mariner");
    }, { rootMargin: "55% 0px 55% 0px" });

    observer.observe(boundary);
    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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

  return <div className="mn-project-identity-boundary" data-project={project} data-takeover-state={state} data-takeover-variant={variant} ref={boundaryRef} style={style}>{children}</div>;
}
