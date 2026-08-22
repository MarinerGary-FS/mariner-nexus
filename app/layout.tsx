import type { Metadata, Viewport } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/footer/Footer";
import { absoluteUrl, defaultOgImage, siteName, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Mariner Nexus | Strategy, Experience, and Technology",
    template: "%s | Mariner Nexus",
  },
  description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
  authors: [{ name: "Gary Mariner" }],
  creator: "Gary Mariner",
  publisher: siteName,
  category: "Digital systems studio",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Mariner Nexus | Strategy, Experience, and Technology",
    description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
    url: absoluteUrl("/"),
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: "Mariner Nexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariner Nexus | Strategy, Experience, and Technology",
    description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
    images: [absoluteUrl(defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: absoluteUrl("/brand/logo.png"),
      founder: { "@id": `${siteUrl}/#gary-mariner` },
      areaServed: ["Atlanta, GA", "United States"],
      description: "Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#gary-mariner`,
      name: "Gary Mariner",
      url: "https://www.garymariner.com/",
      jobTitle: "Digital Systems Architect",
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: siteName,
      url: siteUrl,
      areaServed: ["Atlanta, GA", "United States"],
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: ["Digital strategy", "Digital experience design", "Connected digital systems"],
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
