import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { createElement } from "react";
import { OpenGraphIdentity } from "@/components/seo/OpenGraphIdentity";
import { isOgCardId, ogCardIds, ogCards } from "@/content/og-cards";

const geistFont = readFile(join(process.cwd(), "public/fonts/geist-og.ttf"));

type OgRouteContext = {
  params: Promise<{ card: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ogCardIds.map((card) => ({ card }));
}

export async function GET(_request: Request, { params }: OgRouteContext) {
  const [{ card }, fontData] = await Promise.all([params, geistFont]);

  if (!isOgCardId(card)) {
    return new Response("Open Graph identity not found.", { status: 404 });
  }

  return new ImageResponse(createElement(OpenGraphIdentity, { card: ogCards[card] }), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Geist",
        data: fontData,
        style: "normal",
        weight: 400,
      },
    ],
  });
}
