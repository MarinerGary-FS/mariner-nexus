"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Company", href: "/company" },
];

function Arrow() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
      <path d="M2 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.dataset.menuOpen = "true";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="mn-site-header">
      <a className="mn-skip-link" href="#main-content">Skip to content</a>
      <div className="mn-container mn-nav-bar">
        <Link aria-label="Mariner Nexus home" className="mn-brand" href="/" onClick={() => closeMenu()}>
          <span aria-hidden="true" className="mn-brand-mark">MN</span>
          <span>Mariner Nexus</span>
        </Link>

        <nav aria-label="Primary navigation" className="mn-nav-desktop">
          {primaryLinks.map((link) => (
            <Link aria-current={isActive(link.href) ? "page" : undefined} href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="mn-nav-actions">
          <Link aria-current={isActive("/start") ? "page" : undefined} className="mn-nav-start" href="/start">
            Start a Project <Arrow />
          </Link>
          <button
            aria-controls="mn-navigation-panel"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="mn-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <span className="mn-menu-label">Menu</span>
            <span aria-hidden="true" className="mn-menu-icon"><span /><span /></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mn-navigation-panel" id="mn-navigation-panel" ref={panelRef}>
          <div className="mn-container mn-navigation-panel-inner">
            <nav aria-label="Menu navigation" className="mn-navigation-panel-links">
              {primaryLinks.map((link, index) => (
                <Link
                  aria-current={isActive(link.href) ? "page" : undefined}
                  href={link.href}
                  key={link.href}
                  onClick={() => closeMenu()}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link className="mn-menu-start" href="/start" onClick={() => closeMenu()}>Start a Project <Arrow /></Link>
          </div>
        </div>
      )}
    </header>
  );
}
