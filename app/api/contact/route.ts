import { NextRequest, NextResponse } from "next/server";

/**
 * Contact Form API Route
 *
 * INTEGRATION: GoHighLevel Webhook
 * ─────────────────────────────────────────────────────────────────────────────
 * To connect to GoHighLevel:
 * 1. Create a webhook trigger in your GHL account
 * 2. Copy the webhook URL
 * 3. Add it to .env.local:
 *    GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/your-webhook-id
 *
 * Field mapping (sent to GHL):
 *   firstName / lastName → GHL contact name
 *   email → GHL email field
 *   phone (future) → GHL phone field
 *   tags → for pipeline segmentation (e.g. "website-inquiry", service type)
 * ─────────────────────────────────────────────────────────────────────────────
 */

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL; // Set in .env.local

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Forward to GoHighLevel webhook if configured
    if (GHL_WEBHOOK_URL) {
      const nameParts = name.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || "";

      const ghlPayload = {
        firstName,
        lastName,
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

      const ghlRes = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      });

      if (!ghlRes.ok) {
        console.error("GHL webhook failed:", ghlRes.status, await ghlRes.text());
        // Still return success to user — log the error server-side
      }
    } else {
      // GHL not configured — log to console in development
      console.log("[Contact Form Submission — GHL not configured]", {
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
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
