"use client";
import type { ReactNode } from "react";
import { trackAcquisition } from "@/lib/analytics";

export function TrackedStartLink({ source, children, className }: { source: "hero" | "post_nexus" | "final_conversion"; children: ReactNode; className?: string }) {
  return <a className={className} href="/start" onClick={() => trackAcquisition("start_project_cta", { source })}>{children}</a>;
}
