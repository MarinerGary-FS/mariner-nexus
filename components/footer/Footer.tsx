import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
  ],
  Work: [
    { label: "Act of Valor", href: "/case-studies/act-of-valor" },
    { label: "EazieDaGod", href: "/case-studies/eaziedagod" },
    { label: "Serene Origins", href: "/case-studies/serene-origins" },
    { label: "Undugu", href: "/case-studies/undugu" },
    { label: "Amplify Voices", href: "/case-studies/amplify-voices" },
    { label: "Gary L Mariner II", href: "/case-studies/gary-mariner" },
  ],
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
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative w-7 h-7 shrink-0">
                <div className="absolute inset-0 rounded-full bg-nexus-blue/15 blur-sm group-hover:bg-nexus-blue/25 transition-colors duration-300" />
                <div className="relative w-full h-full rounded-full border border-glow-blue/30 bg-black/60 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="rgba(77,163,255,0.3)" strokeWidth="0.75" />
                    <circle cx="7" cy="7" r="2" fill="rgba(77,163,255,0.9)" />
                    <line x1="7" y1="1" x2="7" y2="4" stroke="rgba(77,163,255,0.5)" strokeWidth="0.75" strokeLinecap="round" />
                    <line x1="7" y1="10" x2="7" y2="13" stroke="rgba(77,163,255,0.5)" strokeWidth="0.75" strokeLinecap="round" />
                    <line x1="1" y1="7" x2="4" y2="7" stroke="rgba(77,163,255,0.5)" strokeWidth="0.75" strokeLinecap="round" />
                    <line x1="10" y1="7" x2="13" y2="7" stroke="rgba(77,163,255,0.5)" strokeWidth="0.75" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <span className="text-white/75 group-hover:text-white font-semibold text-[0.8125rem] tracking-wide transition-colors duration-200">
                Mariner Nexus
              </span>
            </Link>
            <p className="text-white/38 text-[0.8125rem] leading-[1.7] max-w-[260px]">
              AI-powered systems and premium digital infrastructure for modern
              businesses ready to scale.
            </p>
            <p className="text-white/18 text-xs mt-6 tracking-wide">
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
                      className="text-white/42 text-[0.8125rem] hover:text-white/80 transition-colors duration-200"
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
          <p className="text-white/15 text-[0.75rem]">
            Built with intelligence. Designed for outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
