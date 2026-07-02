import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Cookie- og privatpolitik",
};

export default function CookiesPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="Juridisk" title="Cookie- og privatpolitik" />

        <div className="mt-12 space-y-6 text-base leading-relaxed text-espresso-light">
          <h2 className="font-display text-2xl text-espresso sm:text-3xl">
            Introduktion
          </h2>
          <p>
            Når du besøger denne hjemmeside, indsamles der oplysninger om
            dig, som bruges til at tilpasse og forbedre indholdet samt øge
            værdien af de annoncer, der vises på siden.
          </p>
          <p>
            Hvis du ikke ønsker, at der indsamles oplysninger, bør du
            slette dine cookies og undlade videre brug af hjemmesiden.
          </p>
          <p>
            Nedenfor kan du læse mere om, hvilke oplysninger der
            indsamles, hvorfor de indsamles, og hvilke tredjeparter der
            eventuelt har adgang til dem.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Cookies
          </h2>
          <p>
            Denne hjemmeside anvender cookies. En cookie er en lille
            tekstfil, som gemmes på din computer, mobil eller tablet med
            det formål at:
          </p>
          <ul className="space-y-2">
            {[
              "genkende din enhed",
              "huske dine indstillinger",
              "udarbejde statistik",
              "forbedre brugeroplevelsen",
              "målrette relevant indhold og annoncer",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Cookies kan ikke indeholde skadelig kode som eksempelvis virus.</p>
          <p>Du kan til enhver tid slette eller blokere cookies via din browser.</p>
          <p>
            Hvis du vælger at blokere eller slette cookies, kan du opleve,
            at hjemmesiden ikke fungerer optimalt, ligesom nogle funktioner
            eller indhold muligvis ikke vil være tilgængelige.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Personoplysninger
          </h2>
          <h3 className="font-display text-lg text-espresso">Generelt</h3>
          <p>
            Personoplysninger er alle former for information, der direkte
            eller indirekte kan knyttes til dig.
          </p>
          <p>
            Når du benytter denne hjemmeside, indsamles og behandles en
            række oplysninger. Det kan eksempelvis ske, når du:
          </p>
          <ul className="space-y-2">
            {[
              "besøger hjemmesiden",
              "udfylder kontaktformularer",
              "tilmelder dig nyhedsbrev",
              "deltager i konkurrencer eller undersøgelser",
              "registrerer dig som bruger",
              "køber en ydelse",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Der indsamles typisk følgende oplysninger:</p>
          <ul className="space-y-2">
            {[
              "IP-adresse",
              "tekniske oplysninger om computer, tablet eller mobil",
              "geografisk placering",
              "hvilke sider du besøger",
              "hvilke handlinger du foretager på hjemmesiden",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Hvis du selv afgiver oplysninger via formularer eller ved køb,
            behandles desuden:
          </p>
          <ul className="space-y-2">
            {["navn", "telefonnummer", "e-mailadresse", "adresse", "betalingsoplysninger"].map(
              (item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>

          <h3 className="pt-4 font-display text-lg text-espresso">Sikkerhed</h3>
          <p>
            Dine personoplysninger behandles sikkert og fortroligt i
            overensstemmelse med gældende lovgivning, herunder
            Databeskyttelsesforordningen (GDPR) og Databeskyttelsesloven.
          </p>
          <p>
            Oplysningerne anvendes udelukkende til det formål, de er
            indsamlet til, og slettes, når de ikke længere er nødvendige.
          </p>

          <h3 className="pt-4 font-display text-lg text-espresso">Formål</h3>
          <p>Oplysningerne anvendes blandt andet til at:</p>
          <ul className="space-y-2">
            {[
              "identificere dig som bruger",
              "levere de ydelser, du har anmodet om",
              "registrere køb og betalinger",
              "fremsende tilbud eller nyhedsbreve",
              "forbedre hjemmesidens funktionalitet",
              "optimere indhold og brugeroplevelse",
              "vise relevante annoncer",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="pt-4 font-display text-lg text-espresso">
            Opbevaringsperiode
          </h3>
          <p>
            Personoplysninger opbevares kun så længe, det er nødvendigt og
            tilladt i henhold til gældende lovgivning.
          </p>
          <p>
            Opbevaringsperioden afhænger af den konkrete type oplysninger
            samt formålet med behandlingen. Derfor er det ikke muligt at
            angive én generel tidsperiode for, hvornår alle oplysninger
            slettes.
          </p>

          <p className="pt-6 text-sm text-espresso-light/70">
            Opdateret juli 2026
          </p>
        </div>
      </div>
    </section>
  );
}
