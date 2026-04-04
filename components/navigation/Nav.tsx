"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container-tight">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-nexus-blue/20 blur-sm group-hover:bg-nexus-blue/30 transition-colors" />
                <div className="relative w-8 h-8 rounded-full border border-glow-blue/40 flex items-center justify-center bg-black/50">
                  <span className="text-glow-blue font-bold text-xs tracking-wider">MN</span>
                </div>
              </div>
              <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
                Mariner Nexus
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-nexus-blue hover:bg-glow-blue transition-colors duration-200 text-white"
              >
                Book Strategy Call
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`}
                />
                <span
                  className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg text-base font-semibold bg-nexus-blue hover:bg-glow-blue transition-colors text-white"
                >
                  Book Strategy Call
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
