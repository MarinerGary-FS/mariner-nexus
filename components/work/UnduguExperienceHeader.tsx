"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

const links = [
  ["The Movement", "https://www.undugu.org/about"],
  ["Chop-It-Up", "https://www.undugu.org/chop-it-up"],
  ["Undugu Speaks", "https://www.undugu.org/undugu-speaks"],
  ["Events", "https://www.undugu.org/events"],
  ["Impact", "https://www.undugu.org/impact"],
] as const;

export function UnduguExperienceHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return <header className="mn-undugu-live-header">
    <Link aria-label="Open the Undugu Foundation website in a new tab" className="mn-undugu-live-logo" href="https://www.undugu.org/" rel="noreferrer" target="_blank">
      <Image alt="Undugu Foundation" height={240} src="/case-studies/undugu/living/undugu-logo-horizontal.png" width={360} />
    </Link>
    <button aria-controls={menuId} aria-expanded={open} className="mn-undugu-live-menu" onClick={() => setOpen((current) => !current)} type="button"><span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" /></button>
    <div aria-label="Undugu experience navigation demonstration" className="mn-undugu-live-navigation" data-open={open} id={menuId} role="group">
      <div className="mn-undugu-live-navigation-links">
        {links.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)} rel="noreferrer" target="_blank">{label}<span className="sr-only"> — opens the live Undugu website in a new tab</span></Link>)}
      </div>
      <div className="mn-undugu-live-header-actions">
        <Link href="https://www.undugu.org/donate" rel="noreferrer" target="_blank">Donate<span className="sr-only"> — opens the live Undugu website in a new tab</span></Link>
        <Link href="https://www.undugu.org/get-connected" rel="noreferrer" target="_blank">Get Connected<span className="sr-only"> — opens the live Undugu website in a new tab</span></Link>
      </div>
    </div>
  </header>;
}
