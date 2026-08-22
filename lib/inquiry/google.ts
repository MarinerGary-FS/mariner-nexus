import "server-only";
import { createSign } from "node:crypto";
import type { InquiryRecord } from "./schema";
import { inquiryRow } from "./schema";

type GoogleConfig = { sheetId?: string; sheetRange: string; clientEmail?: string; privateKey?: string };

function base64url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

async function accessToken(config: GoogleConfig, fetcher: typeof fetch) {
  if (!config.clientEmail || !config.privateKey) throw new Error("google_configuration");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(JSON.stringify({ iss: config.clientEmail, scope: "https://www.googleapis.com/auth/spreadsheets", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const assertion = `${header}.${claim}.${signer.sign(config.privateKey, "base64url")}`;
  const response = await fetcher("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }) });
  if (!response.ok) throw new Error("google_authentication");
  const body = await response.json() as { access_token?: string };
  if (!body.access_token) throw new Error("google_authentication");
  return body.access_token;
}

export async function appendInquiry(record: InquiryRecord, config: GoogleConfig, fetcher: typeof fetch = fetch) {
  if (!config.sheetId) throw new Error("google_configuration");
  const token = await accessToken(config, fetcher);
  const range = encodeURIComponent(config.sheetRange);
  const response = await fetcher(`https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(config.sheetId)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ majorDimension: "ROWS", values: [inquiryRow(record)] }),
  });
  if (!response.ok) throw new Error("google_persistence");
}
