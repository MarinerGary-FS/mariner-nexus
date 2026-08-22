import { NextRequest, NextResponse } from "next/server";
import { inquiryConfig } from "@/lib/inquiry/config";
import { appendInquiry } from "@/lib/inquiry/google";
import { notifyInquiry } from "@/lib/inquiry/notification";
import { validateInquiry } from "@/lib/inquiry/schema";
import { submitInquiry } from "@/lib/inquiry/service";

export const runtime = "nodejs";
const MAX_BYTES = 14_000;
const MIN_COMPLETION_MS = 2_500;
const WINDOW_MS = 10 * 60_000;
const LIMIT = 5;
const rate = new Map<string, number[]>();
const duplicates = new Map<string, number>();

function clientKey(request: NextRequest) {
  return request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function limited(key: string, now: number) {
  const recent = (rate.get(key) ?? []).filter(time => now - time < WINDOW_MS);
  recent.push(now); rate.set(key, recent); return recent.length > LIMIT;
}

export async function POST(request: NextRequest) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BYTES) return NextResponse.json({ ok: false, message: "That inquiry is larger than we can accept online." }, { status: 413 });
  let body: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_BYTES) return NextResponse.json({ ok: false, message: "That inquiry is larger than we can accept online." }, { status: 413 });
    body = JSON.parse(raw);
  } catch { return NextResponse.json({ ok: false, message: "We could not read that inquiry." }, { status: 400 }); }
  const result = validateInquiry(body);
  if (!result.success) return NextResponse.json({ ok: false, message: "Review the highlighted responses.", errors: result.errors }, { status: 400 });
  const now = Date.now();
  if (result.data.website) return NextResponse.json({ ok: true }, { status: 202 });
  if (!result.data.startedAt || now - result.data.startedAt < MIN_COMPLETION_MS) return NextResponse.json({ ok: false, message: "Please take a moment to review your inquiry, then try again." }, { status: 429 });
  const key = clientKey(request);
  if (limited(key, now)) return NextResponse.json({ ok: false, message: "We could not accept another inquiry from this connection yet. Please try later or email Mariner Nexus." }, { status: 429 });
  const prior = duplicates.get(result.data.submissionKey);
  if (prior && now - prior < WINDOW_MS) return NextResponse.json({ ok: false, message: "This inquiry was already received." }, { status: 409 });
  const config = inquiryConfig();
  try {
    const submitted = await submitInquiry(result.data, {
      environment: config.environment,
      persist: record => appendInquiry(record, config), notify: record => notifyInquiry(record, config),
      log: (event, context) => console.info(event, context),
    });
    duplicates.set(result.data.submissionKey, now);
    return NextResponse.json({ ok: true, inquiryId: submitted.inquiryId });
  } catch {
    return NextResponse.json({ ok: false, message: "Your inquiry was not submitted. Your responses are still here so you can retry or email Mariner Nexus." }, { status: 503 });
  }
}
