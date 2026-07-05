import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: {
    absolute: "Socials Agency | Instagram på den lette måde",
  },
  description:
    "Socials Agency hjælper virksomheder med Instagram, content, strategi og SoMe management. Få en professionel til at skabe synlighed, struktur og vækst på sociale medier.",
};

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
    title: "SoMe Management",
    description:
      "Til virksomheder, der ønsker en professionel og gennemarbejdet tilstedeværelse på Instagram. Jeg hjælper med strategi, planlægning, content og den daglige drift, så du kan fokusere på din forretning.",
    points: [
      "Strategi & plan",
      "Content creation",
      "Redigering & optimering",
      "Community management",
      "Analyse & udvikling",
    ],
    href: "/some-management",
  },
  {
    title: "Virtual Assistant",
    description:
      "Har du brug for en ekstra hånd i hverdagen? Jeg hjælper med struktur, koordinering og administrative opgaver, så du får mere tid til at fokusere på det vigtigste.",
    points: [
      "Struktur & overblik",
      "Koordinering",
      "Administrative opgaver",
      "Løbende support",
    ],
    href: "/virtual-assistant",
  },
  {
    title: "SoMe Coaching",
    description:
      "Til dig, der ønsker sparring og konkrete værktøjer til at udvikle din Instagram. Vælg mellem en strategisk Instagram-gennemgang eller et løbende coachingforløb.",
    points: [
      "Strategisk Instagram-gennemgang",
      "Løbende SoMe Coaching",
      "Personlig sparring",
      "Klar plan og konkrete næste skridt",
    ],
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
            title="Sådan kan jeg hjælpe din virksomhed"
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
            <p className="eyebrow mb-4 !text-[#B87A58]">Klar til at komme i gang?</p>
            <h2 className="font-display text-3xl text-[#B87A58] sm:text-4xl">
              Har du spørgsmål, eller ved du allerede, at en skræddersyet
              løsning er noget for dig?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#B87A58] sm:text-base">
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
