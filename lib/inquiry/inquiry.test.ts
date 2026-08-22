import { generateKeyPairSync } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { appendInquiry } from "./google";
import { inquiryConfig } from "./config";
import { notifyInquiry } from "./notification";
import { inquiryColumns, inquiryRow, validateInquiry, type InquiryInput, type InquiryRecord } from "./schema";
import { submitInquiry } from "./service";

const input: InquiryInput = {
  name: "Test Operator", organization: "Example Organization", email: "operator@example.com", phone: "",
  currentWebsite: "https://example.com", situation: "evolve", objective: "Create a clearer connected experience.",
  success: "A confident path from interest to action.", references: "", timeline: "This quarter",
  additionalContext: "", website: "", startedAt: Date.now() - 10_000, submissionKey: "test-key",
};
const record: InquiryRecord = { ...input, inquiryId: "MN-20260822-12345678", submittedAt: "2026-08-22T12:00:00.000Z", internalStatus: "NEW", internalNotes: "", lastContacted: "", environment: "preview" };

describe("inquiry validation", () => {
  it("accepts the approved shape", () => expect(validateInquiry(input).success).toBe(true));
  it("rejects invalid required, enum, email, URL, and length values", () => {
    const result = validateInquiry({ ...input, objective: "", situation: "services", email: "wrong", currentWebsite: "file:///etc/passwd", success: "x".repeat(2001) });
    expect(result.success).toBe(false);
    if (!result.success) expect(Object.keys(result.errors)).toEqual(expect.arrayContaining(["objective", "situation", "email", "currentWebsite", "success"]));
  });
  it("maps every operational Sheet column exactly once", () => expect(inquiryRow(record)).toHaveLength(inquiryColumns.length));
});

describe("transaction ordering", () => {
  it("persists before notification and returns a stable ID", async () => {
    const order: string[] = [];
    const result = await submitInquiry(input, { environment: "preview", now: () => new Date("2026-08-22T12:00:00Z"), id: () => "12345678-rest", persist: async () => { order.push("persist"); }, notify: async () => { order.push("notify"); } });
    expect(order).toEqual(["persist", "notify"]); expect(result.inquiryId).toBe("MN-20260822-12345678");
  });
  it("fails when Google persistence fails and never notifies", async () => {
    const notify = vi.fn();
    await expect(submitInquiry(input, { environment: "production", persist: async () => { throw new Error("down"); }, notify })).rejects.toThrow("persistence_failed");
    expect(notify).not.toHaveBeenCalled();
  });
  it("succeeds after persistence when notification fails", async () => {
    const result = await submitInquiry(input, { environment: "production", persist: async () => {}, notify: async () => { throw new Error("down"); } });
    expect(result.notification).toBe("failed");
  });
});

describe("bounded adapters", () => {
  it("authenticates and appends one raw row to Google Sheets", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
    const fetcher = vi.fn().mockResolvedValueOnce(new Response(JSON.stringify({ access_token: "token" }), { status: 200 })).mockResolvedValueOnce(new Response("{}", { status: 200 }));
    await appendInquiry(record, { sheetId: "preview-sheet", sheetRange: "Inquiries!A:Q", clientEmail: "service@example.iam.gserviceaccount.com", privateKey }, fetcher);
    expect(fetcher).toHaveBeenCalledTimes(2); expect(fetcher.mock.calls[1][0]).toContain("preview-sheet");
    expect(JSON.parse(fetcher.mock.calls[1][1].body as string).values[0]).toHaveLength(17);
  });
  it("reports Google append failures", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
    const fetcher = vi.fn().mockResolvedValueOnce(new Response(JSON.stringify({ access_token: "token" }), { status: 200 })).mockResolvedValueOnce(new Response("failed", { status: 503 }));
    await expect(appendInquiry(record, { sheetId: "preview", sheetRange: "Inquiries!A:Q", clientEmail: "service@example.com", privateKey }, fetcher)).rejects.toThrow("google_persistence");
  });
  it("does not call Resend when preview notifications are disabled", async () => {
    const fetcher = vi.fn(); await notifyInquiry(record, { notificationsEnabled: false }, fetcher); expect(fetcher).not.toHaveBeenCalled();
  });
  it("reports notification delivery failure", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response("failed", { status: 500 }));
    await expect(notifyInquiry(record, { notificationsEnabled: true, resendKey: "test", notifyFrom: "web@example.com", notifyTo: "ops@example.com" }, fetcher)).rejects.toThrow("notification_delivery");
  });
});

describe("environment separation", () => {
  it("selects only Preview operations in Vercel Preview", () => {
    vi.stubEnv("VERCEL_ENV", "preview"); vi.stubEnv("GOOGLE_SHEETS_ID_PREVIEW", "preview-sheet"); vi.stubEnv("GOOGLE_SHEETS_ID_PRODUCTION", "production-sheet"); vi.stubEnv("INQUIRY_NOTIFICATIONS_PREVIEW", "false");
    const config = inquiryConfig(); expect(config.environment).toBe("preview"); expect(config.sheetId).toBe("preview-sheet"); expect(config.notificationsEnabled).toBe(false); vi.unstubAllEnvs();
  });
  it("selects only Production operations in Vercel Production", () => {
    vi.stubEnv("VERCEL_ENV", "production"); vi.stubEnv("GOOGLE_SHEETS_ID_PREVIEW", "preview-sheet"); vi.stubEnv("GOOGLE_SHEETS_ID_PRODUCTION", "production-sheet");
    const config = inquiryConfig(); expect(config.environment).toBe("production"); expect(config.sheetId).toBe("production-sheet"); vi.unstubAllEnvs();
  });
});
