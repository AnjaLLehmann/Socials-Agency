import Link from "next/link";

/**
 * Minimal, standalone header used ONLY on /socials-meet-up. Deliberately
 * does not reuse the site-wide Header's navigation — this page is meant to
 * feel like its own small universe under the Socials Agency brand, not a
 * regular subpage with the full nav.
 */
export default function SocialsMeetUpHeader() {
  return (
    <header className="border-b border-espresso/10 bg-cream">
      <div className="container-page flex items-center justify-between py-6">
        <div className="leading-tight">
          <p className="font-display text-lg uppercase tracking-[0.18em] text-espresso">
            Socials Meet Up
          </p>
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-espresso-light transition-colors hover:text-clay-dark"
          >
            by Socials Agency
          </Link>
        </div>
        <Link
          href="#naeste-meetup"
          className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark transition-colors hover:text-espresso sm:inline-block"
        >
          Book din plads
        </Link>
      </div>
    </header>
  );
}
