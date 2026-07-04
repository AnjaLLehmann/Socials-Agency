import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: { absolute: "Om Socials Agency | Mød Anja Lehmann" },
  description:
    "Lær personen bag Socials Agency at kende, og se hvordan jeg hjælper virksomheder med Instagram, content og digitale løsninger.",
};

const timeline = [
  {
    period: "August 2025",
    text: "De første tanker og idéer begynder at tage form. Jeg tager springet og opretter et CVR-nummer — uden endnu at vide præcis, hvor rejsen skulle ende. Jeg var helt sikker på, at jeg skulle være en online blæksprutte.",
  },
  {
    period: "September 2025",
    text: "Jeg deltager i et netværksmøde og pitcher min idé for første gang. Undervejs i mødet indser jeg, at idéen skal justeres — jeg ændrer hele min forretningsmodel i pausen. Nu var jeg Social Media Manager: en fast partner for mindre virksomheder og solo-selvstændige.",
  },
  {
    period: "Oktober 2025",
    text: "Min pitch bliver bedre og bedre, og netværksgruppen forstår min idé. Det åbner for mange samtaler om sociale medier — og det er i denne måned, at navnet Socials Agency bliver til.",
  },
  {
    period: "Januar 2026",
    text: "Starten af 2026 går med at sætte langsigtede mål og delmål, så forretningen hele tiden rykker sig fremad. Året er kun lige startet, og jeg tror på, at alle muligheder er åbne — så længe man selv er modtagelig for dem.",
  },
  {
    period: "Maj 2026",
    text: "Et spændende kapitel i min virksomhed begyndte. Jeg valgte at investere i mig selv og min udvikling og rejste til Kreta for at deltage i en intensiv Mastermind. En uge med fuldt fokus på forretning, personlig udvikling og værdifuldt netværk med andre ambitiøse kvinder, der – ligesom jeg – driver deres egne virksomheder.",
  },
  {
    period: "Juni 2026",
    text: "Juni stod i optimeringens tegn. Jeg arbejdede målrettet med at implementere alle de værktøjer og strategier, jeg havde taget med hjem fra Kreta, samtidig med at både mine kunder og jeg gjorde klar til sommerferien. Der blev planlagt på højtryk, så alt var på plads, inden vi kunne holde en velfortjent pause. Og allerede nu har jeg valgt at investere endnu en gang i både mig selv og min virksomhed. Til september går turen igen til Kreta, hvor jeg endnu en gang bliver udfordret, udviklet og inspireret sammen med en ny gruppe stærke kvindelige iværksættere.",
  },
];

const expectations = [
  {
    title: "Nærvær",
    text: "Jeg tror på ærlig kommunikation og et tæt samarbejde, hvor du altid ved, hvor vi står.",
  },
  {
    title: "Kvalitet",
    text: "Jeg går op i detaljerne og leverer løsninger, der både ser professionelle ud og skaber værdi.",
  },
  {
    title: "Udvikling",
    text: "Sociale medier udvikler sig hele tiden – og det gør jeg også. Derfor investerer jeg løbende i ny viden og kompetencer.",
  },
];

export default function OmMigPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Founder af Socials Agency</p>
            <h1 className="font-display text-4xl text-espresso sm:text-5xl">
              Anja Lehmann
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso-light">
              <p>
                Jeg har altid haft en stemme indeni, der fortalte mig, at der
                måtte være mere i livet end blot at møde ind fra 8-16 og
                leve i det normale hamsterhjul. Følelsen af ikke at passe
                ind, og en uimodståelig trang til at gøre noget helt andet,
                har altid fyldt meget hos mig — jeg turde bare ikke gøre
                noget ved det i mange år, af frygt for &quot;hvad nu, hvis det
                ikke går&quot;.
              </p>
              <p>
                Det bedste, jeg gjorde, var at stole på min mavefornemmelse
                og gøre det, der føltes helt rigtigt for mig. Jeg trives
                bedst i min egen hverdag, med egne opgaver og et selvskabt
                arbejdsliv, jeg selv kan vælge til og fra i løbet af ugen.
              </p>
              <p>
                Jeg tror på, at vores historier inspirerer mennesker, som
                ser sig selv i os — jeg er selv inspireret af kvinder, der
                har skabt deres eget liv fra bunden, og som tør fortælle,
                når det hele er lidt svært. Mit håb er, at jeg kan
                inspirere med min historie og gøre en forskel for dig, jeg
                samarbejder med.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-5xl bg-sand">
            <Image
              src="https://static.wixstatic.com/media/0b9a4b_4f641e494a0f486cb4cd218eff2add28~mv2.jpg"
              alt="Anja Lehmann, ejer af Socials Agency, som hjælper virksomheder med Instagram og SoMe Management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Rejsen indtil videre"
            title="Jeg fulgte min drøm — selvom den endnu ikke havde taget form"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.period} className="card">
                <p className="eyebrow mb-3">{item.period}</p>
                <p className="text-sm leading-relaxed text-espresso-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading title="Hvad du kan forvente af mig" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {expectations.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-display text-xl text-espresso">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
