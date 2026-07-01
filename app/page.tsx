import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const helpPoints = [
  {
    title: "Drift af din virksomhedsprofil",
    description:
      "Planlægning af opslag og stories, community-håndtering, content strategi, brandbook og professionelle foto/video-shoots.",
  },
  {
    title: "Trends der rykker din profil",
    description:
      "Jeg holder øje med, hvilke trends der er relevante lige nu, og omsætter dem til noget, der giver mening for dit brand.",
  },
  {
    title: "Redigering, der føles on-brand",
    description:
      "Billeder og videoer redigeres med undertekster, musik og voice-over, tilpasset præcis den stil din profil har brug for.",
  },
  {
    title: "Månedlig indsigt",
    description:
      "En kort status på profilen sammenlignet med sidste måned, så du altid ved, hvor I står, og hvad næste skridt er.",
  },
];

const services = [
  {
    title: "Social Media Management",
    description:
      "Til dig, der gerne vil være synlig, men ikke har tiden til at stå for det hele selv. Vi skaber struktur og kontinuitet, så din tilstedeværelse føles rolig og troværdig.",
    points: [
      "Content planning & struktur",
      "Content creation",
      "Instagram management",
      "Sparring & justering",
    ],
    href: "/some-management",
  },
  {
    title: "Virtual Assistant",
    description:
      "Er du virksomhedsejer med rigt at se til? Jeg træder til remote og løfter opgaver, der kan uddelegeres — uanset hvordan de ser ud.",
    points: [
      "Struktur & overblik",
      "Koordinering & opfølgning",
      "Administrative opgaver",
      "Løbende support",
    ],
    href: "/virtual-assistant",
  },
  {
    title: "Engangsservice",
    description:
      "Mest til at klare tingene selv? Her får du guides og en 1:1 gennemgang, der giver dig præcis den retning, du mangler.",
    points: ["Brandbook", "1:1 Instagram Audit", "Audit som dokument"],
    href: "/engangsservice",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Jeg hjælper dig bl.a. med"
            title="Alt fra strategi til daglig drift"
            description="Uanset om du mangler et fundament eller blot en hjælpende hånd i hverdagen, møder vi dig præcis dér, hvor du står."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {helpPoints.map((point) => (
              <ServiceCard key={point.title} title={point.title} description={point.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Ydelser til virksomheder"
            title="Se mine ydelser herunder"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card flex h-full flex-col">
                <h3 className="font-display text-2xl text-espresso">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-espresso-light">
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-espresso">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="btn-secondary mt-8 justify-center">
                  Se mere her
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="card mx-auto max-w-3xl bg-espresso text-center text-cream">
            <p className="eyebrow mb-4 !text-clay-light">Klar til at komme i gang?</p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Har du spørgsmål, eller ved du allerede, at en skræddersyet
              løsning er noget for dig?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/80 sm:text-base">
              Udfyld formularen med dine ønsker — jeg rækker ud til dig
              hurtigst muligt. Jeg glæder mig til at høre om dig, dine
              drømme og mål for dine sociale platforme!
            </p>
            <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
              Kontakt formular
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
