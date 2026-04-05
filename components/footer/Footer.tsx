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
    <footer className="bg-black relative overflow-hidden">
      {/* Premium pre-footer closing statement */}
      <div className="relative border-t border-white/[0.055] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(37,99,235,0.055),transparent)]" />
        <div className="container-tight py-16 md:py-20 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-glow-blue/55 mb-3">
                Limited availability.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.025em] leading-[1.12] mb-4">
                If your infrastructure isn&apos;t keeping up —
                <br />
                <span className="text-white/35">it&apos;s time to fix it.</span>
              </h2>
              <p className="text-white/32 text-[0.875rem] leading-[1.72]">
                Mariner Nexus builds systems that scale. One conversation is all
                it takes to find out if we&apos;re the right fit.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-[0.8125rem] font-semibold transition-colors duration-200 glow-ring"
              >
                Start Your Build
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/38 hover:text-white/65 text-[0.8125rem] font-medium transition-colors duration-200 border border-white/[0.06] hover:border-white/[0.1]"
              >
                View the work
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-white/[0.04]">
        <div className="container-tight py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand column */}
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
                <span className="text-white/65 group-hover:text-white/88 font-semibold text-[0.875rem] tracking-wide transition-colors duration-200">
                  Mariner Nexus
                </span>
              </Link>

              <p className="text-white/30 text-[0.8125rem] leading-[1.76] max-w-[256px] mb-8">
                We build the digital systems, automation infrastructure, and
                conversion architecture that let serious businesses scale without
                the ceiling.
              </p>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-glow-blue/35" />
                <p className="text-white/14 text-[0.6875rem] tracking-[0.18em] uppercase font-medium">
                  Where Intelligence Meets Execution
                </p>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white/22 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] mb-5">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-white/36 text-[0.8125rem] hover:text-white/70 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.045] mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/17 text-[0.75rem]">
              © {new Date().getFullYear()} Mariner Nexus. All rights reserved.
            </p>
            <p className="text-white/12 text-[0.6875rem] tracking-[0.06em]">
              Built for businesses that are serious about growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
