import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "1:1 Gennemgang",
  description:
    "Få konkrete input til din Instagramprofil, branding og content strategi gennem en 1:1 gennemgang.",
};

const services = [
  {
    title: "Brandbook",
    description:
      "Fundamentet for din visuelle identitet, og sikrer at din kommunikation hænger sammen.",
    points: [
      "Overblik over dine brandfarver",
      "Struktur på dine highlight forsider",
      "Definering af dine content pillars",
    ],
    price: "1.995 kr. (ex. moms)",
  },
  {
    title: "1:1 SoMe gennemgang",
    description:
      "Personlig sparring og konkrete input til, hvordan du kan løfte din Instagramprofil.",
    points: [
      "Din nuværende profil og opsætning",
      "Dit indhold og din visuelle retning",
      "Konkrete forslag til ændringer",
    ],
    price: "1.095 kr. (ex. moms) / 1 times session",
  },
  {
    title: "1:1 SoMe gennemgang — dokument",
    description:
      "Foretrækker du at få din feedback skriftligt, er denne løsning for dig.",
    points: [
      "Din nuværende profil og opsætning",
      "Dit indhold og din visuelle retning",
      "Konkrete forslag til ændringer",
    ],
    price: "1.495 kr. (ex. moms)",
  },
];

export default function EngangsservicePage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Til virksomheder"
            title="1:1 gennemgang af din Instagram-profil"
            description="Er du typen, der gerne selv vil stå for tingene — men har brug for den rigtige retning? Her finder du mine engangsservices, som giver dig konkrete værktøjer, sparring og klarhed, så du selv kan arbejde videre."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card flex h-full flex-col">
              <h3 className="font-display text-xl text-espresso">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso-light">
                {service.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {service.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-espresso">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-lg text-clay-dark">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page text-center">
          <p className="font-display text-2xl text-espresso sm:text-3xl">
            Vil du gerne høre mere, eller er du allerede klar til at gå i gang?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-espresso-light">
            Book en uforpligtende samtale via knappen nedenfor — jeg vender
            tilbage til dig hurtigst muligt.
          </p>
          <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
            Book samtale
          </Link>
        </div>
      </section>
    </>
  );
}
