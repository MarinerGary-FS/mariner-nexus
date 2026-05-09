import type { Metadata } from "next";

export const siteUrl = "https://www.marinernexus.com";
export const siteName = "Mariner Nexus";
export const defaultOgImage = "/og/mariner-nexus-og.webp";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: title.includes(siteName) ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} digital ecosystem preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
