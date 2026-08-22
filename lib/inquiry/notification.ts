import "server-only";
import type { InquiryRecord } from "./schema";

type NotifyConfig = { resendKey?: string; notifyFrom?: string; notifyTo?: string; notificationsEnabled: boolean };
const escape = (value: string) => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);

export async function notifyInquiry(record: InquiryRecord, config: NotifyConfig, fetcher: typeof fetch = fetch) {
  if (!config.notificationsEnabled) return { skipped: true };
  if (!config.resendKey || !config.notifyFrom || !config.notifyTo) throw new Error("notification_configuration");
  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${config.resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Mariner Nexus <${config.notifyFrom}>`, to: [config.notifyTo], reply_to: record.email,
      subject: `New project inquiry — ${record.inquiryId}`,
      html: `<h1>New project inquiry</h1><p><strong>${escape(record.inquiryId)}</strong></p><p>${escape(record.name)} · ${escape(record.organization || "No organization supplied")}</p><p>Situation: ${escape(record.situation)}<br>Timeline: ${escape(record.timeline)}</p><p>${escape(record.objective.slice(0, 500))}</p><p><a href="mailto:${encodeURIComponent(record.email)}">${escape(record.email)}</a>${record.phone ? ` · ${escape(record.phone)}` : ""}</p><p>Review the structured Google Sheet record. This email is notification only.</p>`,
    }),
  });
  if (!response.ok) throw new Error("notification_delivery");
  return { skipped: false };
}
