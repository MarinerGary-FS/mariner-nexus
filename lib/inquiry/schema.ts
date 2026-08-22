export const situations = ["create", "evolve", "connect", "unsure"] as const;
export type InquirySituation = (typeof situations)[number];

export type InquiryInput = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  currentWebsite: string;
  situation: InquirySituation;
  objective: string;
  success: string;
  references: string;
  timeline: string;
  additionalContext: string;
  website: string;
  startedAt: number;
  submissionKey: string;
};

export type InquiryRecord = Omit<InquiryInput, "website" | "startedAt" | "submissionKey"> & {
  inquiryId: string;
  submittedAt: string;
  internalStatus: "NEW";
  internalNotes: string;
  lastContacted: string;
  environment: "development" | "preview" | "production";
};

export type InquiryField = keyof InquiryInput;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

const limits: Partial<Record<InquiryField, number>> = {
  name: 120, organization: 160, email: 254, phone: 50, currentWebsite: 500,
  objective: 3000, success: 2000, references: 1500, timeline: 160,
  additionalContext: 2000, website: 200, submissionKey: 100,
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function safeUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch { return false; }
}

export function validateInquiry(value: unknown): { success: true; data: InquiryInput } | { success: false; errors: InquiryErrors } {
  if (!value || typeof value !== "object" || Array.isArray(value)) return { success: false, errors: { objective: "Enter your project objective." } };
  const input = value as Record<string, unknown>;
  const data: InquiryInput = {
    name: text(input.name), organization: text(input.organization), email: text(input.email).toLowerCase(),
    phone: text(input.phone), currentWebsite: text(input.currentWebsite), situation: text(input.situation) as InquirySituation,
    objective: text(input.objective), success: text(input.success), references: text(input.references),
    timeline: text(input.timeline), additionalContext: text(input.additionalContext), website: text(input.website),
    startedAt: typeof input.startedAt === "number" ? input.startedAt : 0, submissionKey: text(input.submissionKey),
  };
  const errors: InquiryErrors = {};
  if (!data.objective) errors.objective = "Tell us what you are trying to create or change.";
  if (!situations.includes(data.situation)) errors.situation = "Choose the description that best reflects where you are.";
  if (!data.success) errors.success = "Tell us what a successful outcome would look like.";
  if (!data.timeline) errors.timeline = "Tell us when you are hoping to move.";
  if (!data.name) errors.name = "Enter your name.";
  if (!data.email) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!safeUrl(data.currentWebsite)) errors.currentWebsite = "Use a complete http or https URL.";
  for (const [field, max] of Object.entries(limits) as [InquiryField, number][]) {
    const value = data[field];
    if (typeof value === "string" && value.length > max) errors[field] = `Keep this response under ${max} characters.`;
  }
  return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}

export const inquiryColumns = [
  "Inquiry ID", "Submitted At", "Status", "Name", "Organization", "Email", "Phone", "Situation",
  "Objective", "Success Definition", "Current Website", "References", "Timeline", "Additional Context",
  "Last Contacted", "Internal Notes", "Environment / Source",
] as const;

export function inquiryRow(record: InquiryRecord): string[] {
  return [record.inquiryId, record.submittedAt, record.internalStatus, record.name, record.organization,
    record.email, record.phone, record.situation, record.objective, record.success, record.currentWebsite,
    record.references, record.timeline, record.additionalContext, record.lastContacted, record.internalNotes,
    `${record.environment} / website`];
}
