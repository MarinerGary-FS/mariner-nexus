import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/footer/Footer";
import { absoluteUrl, defaultOgImage, siteName, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Mariner Nexus | AI-Native Digital Ecosystems for Business Evolution",
    template: "%s | Mariner Nexus",
  },
  description:
    "Mariner Nexus creates human-centered digital ecosystems that evolve brand perception, customer experience, communication systems, AI adoption, and operational scalability.",
  keywords: [
    "AI-powered digital ecosystem architecture",
    "business operations website systems",
    "AI-native business transformation",
    "premium web design and operational systems",
    "digital authority systems",
    "customer experience website architecture",
    "business automation and communication systems",
    "human-centered AI implementation",
    "operational evolution consulting",
    "Atlanta digital systems architect",
    "Mariner Nexus",
    "Gary Mariner",
  ],
  authors: [{ name: "Gary Mariner" }],
  creator: "Gary Mariner",
  publisher: siteName,
  category: "Digital ecosystem architecture",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Mariner Nexus | AI-Native Digital Ecosystems for Business Evolution",
    description:
      "Human-centered digital ecosystems for operational evolution, customer experience, AI adoption, communication systems, and scalable business infrastructure.",
    url: absoluteUrl("/"),
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: "Mariner Nexus digital ecosystem preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariner Nexus | AI-Native Digital Ecosystems for Business Evolution",
    description:
      "Human-centered digital ecosystems for operational evolution, customer experience, AI adoption, and scalable business infrastructure.",
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
      description:
        "Mariner Nexus architects human-centered digital ecosystems for operational evolution, customer experience, communication systems, AI adoption, and scalable business infrastructure.",
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
      serviceType: [
        "Digital ecosystem architecture",
        "Operational evolution consulting",
        "Customer experience website architecture",
        "Business automation and communication systems",
        "Human-centered AI implementation",
      ],
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
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
