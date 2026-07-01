import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Virtual Assistant",
  description:
    "Uddeleger manuelle opgaver og få mere tid til det, der skaber værdi for din forretning.",
};

const blocks = [
  {
    title: "Strategi & overblik",
    description: "Vi starter med fundamentet – struktur og klarhed i din hverdag.",
    points: [
      "Afdækning af dine behov, opgaver og arbejdsgange",
      "Identificering af flaskehalse og tidsrøvere",
      "Sparring på, hvordan du bedst organiserer din forretning",
    ],
  },
  {
    title: "Struktur & systemer",
    description: "En veldrevet forretning kræver gode systemer bag kulissen.",
    points: [
      "Strukturering af opgaver, processer og workflows",
      "Opsætning af simple og effektive systemer",
      "Optimering af eksisterende arbejdsgange",
    ],
  },
  {
    title: "Planlægning & koordinering",
    description: "Jeg hjælper dig med at holde styr på detaljerne.",
    points: [
      "Koordinering af opgaver og deadlines",
      "Opfølgning på projekter og aftaler",
      "Sikring af fremdrift i din forretning",
    ],
  },
  {
    title: "Administrative opgaver",
    description: "Små opgaver tager ofte det meste af din tid — lad mig hjælpe dig.",
    points: [
      "Håndtering af mails og booking",
      "Dokumenter, struktur og organisering",
      "Dataindtastning og praktiske opgaver",
    ],
  },
  {
    title: "Løbende support",
    description: "En fleksibel løsning, der tilpasses dig og din forretning.",
    points: [
      "Tilgængelig hjælp, når du har brug for det",
      "Tilpasning af opgaver løbende",
      "En ekstra ressource uden at skulle ansætte",
    ],
  },
];

export default function VirtualAssistantPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Til virksomheder"
            title="Virtual Assistant"
            description="Mangler du en ekstra hånd til håndtering af manuelle processer eller strukturering af dokumenter? Jeg hjælper dig med at skabe overblik og struktur i en travl hverdag."
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
            Mine Virtual Assistant-ydelser afregnes til{" "}
            <span className="text-clay-dark">650 kr./time</span> (ex. moms)
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-espresso-light">
            Det betyder, at du får fleksibel hjælp, når du har brug for det —
            helt uden at skulle ansætte eller binde dig fast. Jeg træder ind
            som en ekstra ressource i din forretning og frigiver tid til
            det, der skaber mest værdi for dig.
          </p>
          <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
            Book samtale
          </Link>
        </div>
      </section>
    </>
  );
}
