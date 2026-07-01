"use client";

import Link from "next/link";
import { useState } from "react";

const businessLinks = [
  { href: "/some-management", label: "SoMe Management" },
  { href: "/virtual-assistant", label: "Virtual Assistant" },
  { href: "/engangsservice", label: "1:1 Gennemgang" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-logo text-3xl font-normal not-italic tracking-wide text-espresso"
        >
          Socials Agency
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium text-espresso hover:text-clay-dark">
            Forside
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="text-sm font-medium text-espresso hover:text-clay-dark">
              Til virksomheder
            </button>
            {open && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-3xl border border-espresso/10 bg-white p-3 shadow-lg">
                  {businessLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-espresso hover:bg-cream-dark"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/om-mig" className="text-sm font-medium text-espresso hover:text-clay-dark">
            Om mig
          </Link>
          <Link href="/blog" className="text-sm font-medium text-espresso hover:text-clay-dark">
            Blog
          </Link>
          <Link href="/kontakt" className="text-sm font-medium text-espresso hover:text-clay-dark">
            Kontakt
          </Link>
        </nav>

        <Link href="/kontakt" className="btn-primary hidden lg:inline-flex">
          Book samtale
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Åbn menu"
        >
          <span className="text-espresso">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-espresso/10 bg-cream lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <Link href="/" className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-white">
              Forside
            </Link>
            {businessLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/om-mig" className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-white">
              Om mig
            </Link>
            <Link href="/blog" className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-white">
              Blog
            </Link>
            <Link href="/kontakt" className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-white">
              Kontakt
            </Link>
            <Link href="/kontakt" className="btn-primary mt-2 justify-center">
              Book samtale
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
