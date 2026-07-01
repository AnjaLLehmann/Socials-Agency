import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "SoMe Management",
  description:
    "Få hjælp til at øge din synlighed på Instagram. Content strategi, drift og struktur til dine sociale medier.",
};

const blocks = [
  {
    title: "Strategi & retning",
    description: "Vi starter med fundamentet – så alt indhold har et formål.",
    points: [
      "Fastlæggelse af content strategi, mål og fokusområder",
      "Afklaring af målgruppe, tone of voice og budskaber",
      "Sparring omkring, hvordan Instagram bedst understøtter din forretning",
    ],
  },
  {
    title: "Brand & visuel sammenhæng",
    description: "Dit brand skal være genkendeligt og sammenhængende.",
    points: [
      "Komplet brandbook (farver, typografi, visuel stil, content pillars)",
      "Ensartet udtryk på tværs af opslag, stories og reels",
      "Sikring af at alt indhold er on-brand",
    ],
  },
  {
    title: "Content planning & struktur",
    description: "Overblik er nøglen til kontinuitet.",
    points: [
      "Planlægning af opslag og stories",
      "Overblik over indhold, temaer og posting-frekvens",
      "Struktur, så du altid ved, hvad der deles",
    ],
  },
  {
    title: "Content creation",
    description: "Indhold, der passer til dit brand og din målgruppe.",
    points: [
      "Udarbejdelse af opslag (idéer, tekst og visuel retning)",
      "Produktion af content til feed, stories og reels",
      "Mulighed for professionelle foto- og videoshoots (tilvalg)",
    ],
  },
  {
    title: "Redigering & optimering",
    description: "Indholdet finpudses, så det performer bedst muligt.",
    points: [
      "Redigering af billeder og videoer",
      "Undertekster, musik, voice-over og tilpasning til format",
      "Løbende optimering baseret på performance og udvikling",
    ],
  },
  {
    title: "Instagram management (drift)",
    description: "Jeg håndterer den daglige drift af din profil.",
    points: [
      "Planlægning og upload af indhold",
      "Løbende justeringer og optimering",
      "Overblik over din profil og dens udvikling",
    ],
  },
  {
    title: "Community & synlighed",
    description: "Relationer skaber resultater.",
    points: [
      "Håndtering af kommentarer og beskeder (DM's)",
      "Aktiv synlighed og engagement",
      "Opbygning af relationer med dit community",
    ],
  },
  {
    title: "Månedsopsummering & indsigt",
    description: "Så du altid ved, hvor du står.",
    points: [
      "Månedsopsummering af performance",
      "Status på profilen vs. forrige måned",
      "Indsigter, læringer og anbefalinger til næste periode",
    ],
  },
  {
    title: "Sparring & løbende justering",
    description: "Fordi din forretning udvikler sig – og det skal din profil også.",
    points: [
      "Løbende dialog og sparring",
      "Justering af strategi og indhold efter behov",
      "Plads til spørgsmål, idéer og udvikling",
    ],
  },
];

export default function SomeManagementPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Til virksomheder"
            title="Social Media Management"
            description="Her finder du den samlede oversigt over mine SoMe-ydelser. Det er blot en oversigt — det er altid muligt at fravælge og tilvælge ydelser, alt efter hvordan dine ønsker og mål ser ud."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <ServiceCard key={block.title} {...block} />
          ))}
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page text-center">
          <p className="font-display text-2xl text-espresso sm:text-3xl">
            Social Media-samarbejder starter fra{" "}
            <span className="text-clay-dark">10.000 kr./md.</span> (ex. moms)
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-espresso-light">
            Alt efter hvad din aftale skal indeholde, vil prisen variere.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-espresso-light">
            Vil du høre mere, eller er du allerede klar til at gå i gang?
            Book en samtale nedenfor — jeg rækker ud til dig hurtigst muligt.
          </p>
          <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
            Book samtale
          </Link>
        </div>
      </section>
    </>
  );
}
