import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: { absolute: "Instagram & Business Coaching | Lær at skabe en stærk Instagram" },
  description:
    "Strategisk Instagram Gennemgang og et personligt 4-måneders coachingforløb med online 1:1 sparring hver 14. dag, der hjælper dig med at skabe en Instagram-profil med strategi, retning og resultater.",
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
    price: "1.500 kr. (ex. moms) / 1 times session",
  },
  {
    title: "Instagram & Business Coaching",
    description:
      "Til dig, der ønsker at udvikle din Instagram og skabe en forretning omkring din profil. Gennem fire måneder arbejder vi sammen om din retning, strategi og udvikling. Du får konkrete værktøjer, personlig sparring og en plan, der passer til dine ambitioner.",
    points: [
      "Online 1:1 sparring hver 14. dag",
      "Personlig strategi og handlingsplan",
      "Contentstrategi og organisk vækst",
      "Muligheder for samarbejder og indtjening",
      "Feedback og løbende udvikling",
    ],
    price: "16.000 kr. (ex. moms) for hele forløbet på 4 måneder",
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
            animate="intro"
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} className="h-full" intro delay={260 + i * 120}>
              <div className="card card-lift flex h-full flex-col">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <Reveal className="container-page text-center">
          <p className="font-display text-2xl text-espresso sm:text-3xl">
            Vil du gerne høre mere, eller er du allerede klar til at gå i gang?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-espresso-light">
            Book en uforpligtende samtale via knappen nedenfor — jeg vender
            tilbage til dig hurtigst muligt.
          </p>
          <Link href="/kontakt" className="btn-primary btn-lift mt-8 inline-flex">
            Book samtale
          </Link>
        </Reveal>
      </section>
    </>
  );
}
