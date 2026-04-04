import type { Metadata } from "next";
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
  title: "Mariner Nexus — Where Intelligence Meets Execution",
  description:
    "Mariner Nexus builds AI-powered systems, premium web experiences, and automation infrastructure that help modern businesses operate smarter, convert better, and scale with clarity.",
  keywords: [
    "AI systems",
    "business automation",
    "premium web design",
    "CRM integration",
    "digital infrastructure",
  ],
  openGraph: {
    title: "Mariner Nexus — Where Intelligence Meets Execution",
    description:
      "AI-powered systems and premium digital infrastructure for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariner Nexus — Where Intelligence Meets Execution",
    description:
      "AI-powered systems and premium digital infrastructure for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
