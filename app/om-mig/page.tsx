import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Om mig",
  description:
    "Mit navn er Anja Lehmann, og jeg arbejder med Instagram, content og struktur for selvstændige og virksomheder.",
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
              alt="Anja Lehmann"
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
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="card">
            <p className="eyebrow mb-3">Ring her</p>
            <a href="tel:+4528139031" className="font-display text-2xl text-espresso hover:text-clay-dark">
              +45 2813 9031
            </a>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">Email</p>
            <a
              href="mailto:contact@socialsagency.dk"
              className="font-display text-2xl text-espresso hover:text-clay-dark"
            >
              contact@socialsagency.dk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
