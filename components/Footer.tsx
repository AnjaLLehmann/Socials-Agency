import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-sand">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-logo text-3xl font-normal not-italic tracking-wide text-espresso">
              Socials Agency
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-espresso-light">
              Instagram og SoMe management skabt til dig, der ønsker en
              synlighed, der føles rolig, ægte og strategisk.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Sidekort</p>
            <ul className="space-y-3 text-sm text-espresso">
              <li><Link href="/" className="hover:text-clay-dark">Forside</Link></li>
              <li><Link href="/some-management" className="hover:text-clay-dark">SoMe Management</Link></li>
              <li><Link href="/virtual-assistant" className="hover:text-clay-dark">Virtual Assistant</Link></li>
              <li><Link href="/engangsservice" className="hover:text-clay-dark">SoMe Coaching</Link></li>
              <li><Link href="/om-mig" className="hover:text-clay-dark">Om mig</Link></li>
              <li><Link href="/blog" className="hover:text-clay-dark">Blog</Link></li>
              <li><Link href="/kontakt" className="hover:text-clay-dark">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Kontakt</p>
            <ul className="space-y-3 text-sm text-espresso">
              <li><a href="tel:+4528139031" className="hover:text-clay-dark">+45 2813 9031</a></li>
              <li><a href="mailto:contact@socialsagency.dk" className="hover:text-clay-dark">contact@socialsagency.dk</a></li>
              <li className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/socials_agency_/" target="_blank" rel="noreferrer" className="hover:text-clay-dark">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/anjalouiselehmann/" target="_blank" rel="noreferrer" className="hover:text-clay-dark">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-espresso/10 pt-8 text-xs text-espresso-light md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Socials Agency, CVR 45775054</p>
          <div className="flex gap-6">
            <Link href="/handelsbetingelser" className="hover:text-clay-dark">Handelsbetingelser</Link>
            <Link href="/cookies-privatpolitik" className="hover:text-clay-dark">Cookie- og privatpolitik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
