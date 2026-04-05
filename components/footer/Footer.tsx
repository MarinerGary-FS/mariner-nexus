import Link from "next/link";
import Image from "next/image";
import { footerWorkLinks } from "@/lib/case-studies";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
  ],
  Work: footerWorkLinks,
  Connect: [
    { label: "Book a Strategy Call", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.055] bg-black">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column — uses logo.png */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit" aria-label="Mariner Nexus home">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-nexus-blue/10 blur-lg scale-150 group-hover:bg-nexus-blue/18 transition-colors duration-300 pointer-events-none" />
                <Image
                  src="/brand/logo.png"
                  alt="Mariner Nexus"
                  width={44}
                  height={44}
                  className="relative object-contain"
                />
              </div>
              <span className="text-white/70 group-hover:text-white/90 font-semibold text-[0.875rem] tracking-wide transition-colors duration-200">
                Mariner Nexus
              </span>
            </Link>

            <p className="text-white/35 text-[0.8125rem] leading-[1.72] max-w-[260px] mb-6">
              AI-powered systems and premium digital infrastructure for modern
              businesses ready to scale.
            </p>

            <p className="text-white/15 text-[0.6875rem] tracking-[0.16em] uppercase font-medium">
              Where Intelligence Meets Execution
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/28 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] mb-5">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-[0.8125rem] hover:text-white/78 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.055] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[0.75rem]">
            © {new Date().getFullYear()} Mariner Nexus. All rights reserved.
          </p>
          <p className="text-white/14 text-[0.75rem]">
            Built with intelligence. Designed for outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
