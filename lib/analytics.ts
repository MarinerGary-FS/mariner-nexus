"use client";

export type AcquisitionEvent = "start_project_begin" | "start_project_step" | "start_project_complete" | "start_project_error" | "start_project_cta";
export function trackAcquisition(event: AcquisitionEvent, metadata: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("mariner:analytics", { detail: { event, ...metadata } }));
  const va = (window as Window & { va?: (command: "event", payload: { name: string; data: Record<string, string> }) => void }).va;
  va?.("event", { name: event, data: metadata });
}
