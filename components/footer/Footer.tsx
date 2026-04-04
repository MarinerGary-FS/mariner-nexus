import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
  ],
  Work: [
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
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-nexus-blue/20 blur-sm" />
                <div className="relative w-8 h-8 rounded-full border border-glow-blue/40 flex items-center justify-center bg-black/50">
                  <span className="text-glow-blue font-bold text-xs tracking-wider">MN</span>
                </div>
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">Mariner Nexus</span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              AI-powered systems and premium digital infrastructure for modern
              businesses ready to scale.
            </p>
            <p className="text-white/20 text-xs mt-6">
              Where Intelligence Meets Execution
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Mariner Nexus. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with intelligence. Designed for outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
