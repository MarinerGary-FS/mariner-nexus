import "server-only";

export type InquiryEnvironment = "development" | "preview" | "production";

export function inquiryEnvironment(): InquiryEnvironment {
  if (process.env.VERCEL_ENV === "production") return "production";
  if (process.env.VERCEL_ENV === "preview") return "preview";
  return "development";
}

export function inquiryConfig() {
  const environment = inquiryEnvironment();
  const suffix = environment === "production" ? "PRODUCTION" : "PREVIEW";
  return {
    environment,
    sheetId: process.env[`GOOGLE_SHEETS_ID_${suffix}`],
    sheetRange: process.env[`GOOGLE_SHEETS_RANGE_${suffix}`] ?? "Inquiries!A:Q",
    clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    resendKey: process.env.RESEND_API_KEY,
    notifyFrom: process.env.INQUIRY_NOTIFY_FROM,
    notifyTo: process.env[`INQUIRY_NOTIFY_TO_${suffix}`],
    notificationsEnabled: process.env[`INQUIRY_NOTIFICATIONS_${suffix}`] === "true",
  };
}
