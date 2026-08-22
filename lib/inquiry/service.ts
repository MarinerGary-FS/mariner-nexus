import "server-only";
import { randomUUID } from "node:crypto";
import type { InquiryInput, InquiryRecord } from "./schema";

export type InquiryDependencies = {
  environment: InquiryRecord["environment"];
  persist: (record: InquiryRecord) => Promise<void>;
  notify: (record: InquiryRecord) => Promise<unknown>;
  now?: () => Date;
  id?: () => string;
  log?: (event: string, context: Record<string, string>) => void;
};

export async function submitInquiry(input: InquiryInput, dependencies: InquiryDependencies) {
  const now = dependencies.now?.() ?? new Date();
  const record: InquiryRecord = {
    inquiryId: `MN-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${(dependencies.id?.() ?? randomUUID()).slice(0, 8).toUpperCase()}`,
    submittedAt: now.toISOString(), name: input.name, organization: input.organization, email: input.email,
    phone: input.phone, currentWebsite: input.currentWebsite, situation: input.situation, objective: input.objective,
    success: input.success, references: input.references, timeline: input.timeline,
    additionalContext: input.additionalContext, internalStatus: "NEW", internalNotes: "", lastContacted: "",
    environment: dependencies.environment,
  };
  try { await dependencies.persist(record); }
  catch { dependencies.log?.("inquiry_persistence_failed", { inquiryId: record.inquiryId, environment: record.environment }); throw new Error("persistence_failed"); }
  let notification: "sent" | "failed" = "sent";
  try { await dependencies.notify(record); }
  catch { notification = "failed"; dependencies.log?.("inquiry_notification_failed", { inquiryId: record.inquiryId, environment: record.environment }); }
  dependencies.log?.("inquiry_persisted", { inquiryId: record.inquiryId, environment: record.environment, notification });
  return { inquiryId: record.inquiryId, notification };
}
