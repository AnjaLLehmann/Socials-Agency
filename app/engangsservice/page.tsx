import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: { absolute: "SoMe Coaching | Lær at skabe en stærk Instagram" },
  description:
    "Personlig sparring og coaching, der hjælper dig med at skabe en Instagram-profil med strategi, retning og resultater.",
};

const services = [
  {
    title: "Strategisk Instagram Gennemgang",
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
    title: "SoMe Coaching",
    description:
      "Til dig, der ønsker en fast sparringspartner. Vi mødes online hver 14. dag, lægger en plan, følger op og justerer strategien, så du hele tiden bevæger dig tættere på dine mål.",
    points: [
      "Online sparring hver 14. dag",
      "Personlig strategi & handlingsplan",
      "Feedback på dit indhold",
      "Løbende justering og udvikling",
    ],
    price: "2.000 kr. (ex. moms) / måned",
  },
];

export default function EngangsservicePage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Til virksomheder"
            title="Få sparring, der flytter din profil"
            description="Uanset om du ønsker én strategisk Instagram-gennemgang eller et fast coachingforløb, får du konkrete værktøjer, personlig sparring og en plan, der hjælper dig med at udvikle din Instagram med ro, retning og selvtillid."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
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
