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
    title: "Strategi & plan",
    description:
      "Vi starter med fundamentet, så alt indhold har en klar retning og understøtter dine forretningsmål.",
    points: [
      "Content strategi",
      "Målgruppe & tone of voice",
      "Fokusområder",
      "Sparring om retning",
    ],
  },
  {
    title: "Brand & visuel identitet",
    description:
      "Din profil skal være genkendelig, professionel og skabe tillid ved første blik.",
    points: [
      "Brandbook",
      "Farver & typografi",
      "Visuel stil",
      "Ensartet udtryk på tværs af opslag",
    ],
  },
  {
    title: "Content creation",
    description:
      "Fra idé til færdigt indhold planlægger, producerer og strukturerer jeg dit indhold, så din profil er aktiv, professionel og gennemtænkt.",
    points: [
      "Contentplan",
      "Opslag, stories & reels",
      "Tekstforfatning",
      "Professionelle foto- og videoshoots (tilvalg)",
    ],
  },
  {
    title: "Redigering & optimering",
    description:
      "Alt indhold finpudses, så det matcher dit brand og performer bedst muligt.",
    points: [
      "Redigering af billeder & video",
      "Undertekster",
      "Musik & voice-over",
      "Løbende optimering",
    ],
  },
  {
    title: "Community management",
    description:
      "Jeg holder din profil levende og sørger for, at dine følgere føler sig set.",
    points: [
      "Planlægning & upload",
      "Besvarelse af kommentarer & beskeder",
      "Community management",
      "Løbende drift af profilen",
    ],
  },
  {
    title: "Analyse & udvikling",
    description:
      "Du får løbende indsigt i udviklingen på din profil samt konkrete anbefalinger til næste skridt.",
    points: [
      "Månedlig rapport",
      "Performance-analyse",
      "Anbefalinger",
      "Løbende sparring",
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
