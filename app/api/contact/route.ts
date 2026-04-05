import { NextRequest, NextResponse } from "next/server";

/**
 * Contact Form API Route
 *
 * INTEGRATIONS — all are optional, all activate via env vars
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. GoHighLevel Webhook (CRM):
 *    GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/your-webhook-id
 *
 * 2. Email Notification via Resend (no CRM needed):
 *    RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
 *    CONTACT_FROM_EMAIL=noreply@marinernexus.com     (must be verified domain)
 *    CONTACT_NOTIFY_EMAIL=gary@marinernexus.com      (receives the notification)
 *
 * 3. Google Sheets Logging (zero-cost fallback):
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *    → Deploy a Google Apps Script as a Web App that appends rows to a sheet
 *
 * All three integrations fire simultaneously if configured.
 * If none are configured, submissions are logged to console (dev only).
 * ─────────────────────────────────────────────────────────────────────────────
 */

const GHL_WEBHOOK_URL         = process.env.GHL_WEBHOOK_URL;
const RESEND_API_KEY          = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL      = process.env.CONTACT_FROM_EMAIL;
const CONTACT_NOTIFY_EMAIL    = process.env.CONTACT_NOTIFY_EMAIL;
const GOOGLE_SHEETS_WEBHOOK   = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const integrationsFired: string[] = [];

    // ── 1. GoHighLevel ──────────────────────────────────────────────────────
    if (GHL_WEBHOOK_URL) {
      const nameParts = name.trim().split(" ");
      const ghlPayload = {
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(" ") || "",
        email,
        companyName: business || "",
        customField: {
          service_type: service || "Not specified",
          inquiry_message: message,
        },
        tags: [
          "website-inquiry",
          service ? service.toLowerCase().replace(/\s+/g, "-") : "unspecified",
        ],
        source: "mariner-nexus-website",
      };
      try {
        const res = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ghlPayload),
        });
        if (!res.ok) console.error("GHL webhook failed:", res.status, await res.text());
        else integrationsFired.push("GHL");
      } catch (err) {
        console.error("GHL webhook error:", err);
      }
    }

    // ── 2. Email Notification via Resend ────────────────────────────────────
    if (RESEND_API_KEY && CONTACT_FROM_EMAIL && CONTACT_NOTIFY_EMAIL) {
      const emailHtml = `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; color: #1a1a1a;">
          <h2 style="margin: 0 0 20px; font-size: 20px; font-weight: 700;">
            New inquiry from ${name}
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 120px; color: #666; font-weight: 600;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${business ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Business</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${business}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 14px 10px 0; color: #666; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0;">
                <div style="background: #f5f5f5; padding: 12px 14px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
              </td>
            </tr>
          </table>
          <p style="margin: 24px 0 0; font-size: 12px; color: #999;">
            Submitted ${new Date(timestamp).toLocaleString("en-US", { timeZone: "America/New_York" })} ET
            · Mariner Nexus website
          </p>
        </div>
      `;
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `Mariner Nexus <${CONTACT_FROM_EMAIL}>`,
            to: [CONTACT_NOTIFY_EMAIL],
            reply_to: email,
            subject: `New inquiry — ${name}${business ? ` · ${business}` : ""}`,
            html: emailHtml,
          }),
        });
        if (!res.ok) console.error("Resend email failed:", res.status, await res.text());
        else integrationsFired.push("Resend");
      } catch (err) {
        console.error("Resend email error:", err);
      }
    }

    // ── 3. Google Sheets Webhook ────────────────────────────────────────────
    if (GOOGLE_SHEETS_WEBHOOK) {
      try {
        const res = await fetch(GOOGLE_SHEETS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp,
            name,
            email,
            business: business || "",
            service: service || "",
            message,
            source: "mariner-nexus-website",
          }),
        });
        if (!res.ok) console.error("Google Sheets webhook failed:", res.status);
        else integrationsFired.push("Sheets");
      } catch (err) {
        console.error("Google Sheets webhook error:", err);
      }
    }

    // ── Fallback: console log when no integrations are configured ───────────
    if (integrationsFired.length === 0) {
      console.log("[Contact Form — no integrations configured]", {
        timestamp,
        name,
        email,
        business,
        service,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
