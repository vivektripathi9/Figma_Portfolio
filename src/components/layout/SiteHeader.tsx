"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 md:top-5">
        <div className="glass mx-auto flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2">
          <Link href="/" aria-label={`${siteConfig.name}, home`} className="text-[1.05rem] font-medium tracking-tight whitespace-nowrap" onClick={() => setOpen(false)}>
            Vivek<em className="font-serif font-normal text-accent"> Tripathi</em>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={siteConfig.whatsappUrl} className="!min-h-10 !px-5">
              Start a project
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-2.5 w-4" aria-hidden="true">
                <span className={`absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id="mobile-nav" className="fixed inset-0 z-40 flex flex-col justify-end bg-background px-5 pb-20 pt-24 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rise display-lg block"
                style={{ "--rise-delay": `${index * 60}ms` } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={`mailto:${siteConfig.email}`} className="body-md mt-8">
            {siteConfig.email}
          </a>
        </div>
      ) : null}
    </>
  );
}
