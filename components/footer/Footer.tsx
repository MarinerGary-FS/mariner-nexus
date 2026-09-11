import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  { label: "Explore", links: [{ label: "Capabilities", href: "/capabilities" }, { label: "Work", href: "/work" }, { label: "Approach", href: "/approach" }] },
  { label: "Company", links: [{ label: "Company", href: "/company" }, { label: "Start a Project", href: "/start" }] },
];

export default function Footer() {
  return (
    <footer className="mn-site-footer">
      <div className="mn-container">
        <div className="mn-footer-grid">
          <div className="mn-footer-brand">
            <Link className="mn-footer-home" href="/">
              <Image alt="" className="mn-footer-logo" height={56} src="/brand/micro-logo.png" width={56} />
              <span>Mariner Nexus</span>
            </Link>
            <p>Strategy, experience, systems, and intelligence—one architecture.</p>
          </div>
          {footerGroups.map((group) => (
            <nav aria-label={`${group.label} footer navigation`} key={group.label}>
              <p className="mn-footer-label">{group.label}</p>
              <ul>{group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
            </nav>
          ))}
          <div>
            <p className="mn-footer-label">Connect</p>
            <a href="mailto:info@marinernexus.com">info@marinernexus.com</a>
          </div>
        </div>
        <div className="mn-footer-bottom">
          <p>© {new Date().getFullYear()} Mariner Nexus</p>
          <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
