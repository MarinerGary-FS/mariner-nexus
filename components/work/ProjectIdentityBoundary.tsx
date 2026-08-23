"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { ProjectExperienceProfile, ProjectVisualIdentity } from "@/content/projects/types";

type TakeoverState = "mariner" | "introduction" | "influence" | "takeover" | "release" | "return";

type ProjectIdentityBoundaryProps = {
  children: ReactNode;
  experience: ProjectExperienceProfile;
  identity: ProjectVisualIdentity;
  project: string;
  variant: "index" | "record";
};

export function ProjectIdentityBoundary({ children, experience, identity, project, variant }: ProjectIdentityBoundaryProps) {
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
      const travel = Math.max(rect.height + viewport, 1);
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / travel));
      let nextState: TakeoverState = "takeover";

      if (progress < 0.12) nextState = "introduction";
      else if (progress < 0.28) nextState = "influence";
      else if (progress < 0.68) nextState = "takeover";
      else if (progress < 0.76) nextState = "release";
      else nextState = "return";

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
    "--project-display-weight": experience.displayWeight,
    "--project-display-tracking": experience.displayTracking,
    "--project-section-spacing": experience.sectionSpacing,
    "--project-surface-radius": experience.surfaceRadius,
    "--project-transition-duration": experience.transitionDuration,
    "--project-takeover-intensity": experience.takeoverIntensity,
  } as CSSProperties;

  return <div className="mn-project-identity-boundary" data-experience-profile={experience.id} data-image-scale={experience.imageScale} data-project={project} data-takeover-state={state} data-takeover-variant={variant} ref={boundaryRef} style={style}>{children}</div>;
}
