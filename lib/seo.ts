import type { Metadata } from "next";

export const siteUrl = "https://www.marinernexus.com";
export const siteName = "Mariner Nexus";
export const defaultOgImage = "/og/home";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  socialDescription?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt,
  socialDescription,
  type = "website",
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialCopy = socialDescription ?? description;
  const socialImageAlt = imageAlt ?? `${siteName} digital ecosystem preview`;

  return {
    title: title.includes(siteName) ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: socialCopy,
      url,
      siteName,
      type,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: socialCopy,
      images: [{ url: imageUrl, alt: socialImageAlt }],
    },
  };
}
