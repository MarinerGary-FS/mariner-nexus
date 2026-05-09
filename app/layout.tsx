import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariner Nexus - Synchronized Operational Intelligence",
  description:
    "Mariner Nexus evolves fragmented businesses into synchronized digital environments where strategy, experience, automation, and operational trust move as one system.",
  keywords: [
    "operational intelligence",
    "business systems",
    "digital experience",
    "CRM integration",
    "conversion architecture",
  ],
  openGraph: {
    title: "Mariner Nexus - Synchronized Operational Intelligence",
    description:
      "Synchronized digital environments for businesses ready to operate at another level.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariner Nexus - Synchronized Operational Intelligence",
    description:
      "Synchronized digital environments for businesses ready to operate at another level.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
