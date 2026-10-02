import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import WaitlistForm from "@/components/WaitlistForm";
import SocialsMeetUpScrollReset from "@/components/SocialsMeetUpScrollReset";

// This landing page is a separate, standalone page for the "Socials Meet Up"
// networking concept. It intentionally lives outside the main navigation
// (it is not added to Header.tsx's businessLinks or any menu), is marked
// noindex below, and reuses the existing Socials Agency fonts, colors and
// components. No existing page, component or API route is touched by this
// file.
export const metadata: Metadata = {
  title: {
    absolute: "Socials Meet Up | Socials Agency",
  },
  description:
    "Socials Meet Up er et netværk for kvinder, der bygger deres egen forretning. Se næste dato, og skriv dig på ventelisten.",
  robots: {
    index: false,
    follow: false,
  },
};

const expectCards = [
  {
    number: "01",
    title: "Netværk",
    text: "Mød andre selvstændige kvinder og skab relationer, der rækker længere end én dag.",
  },
  {
    number: "02",
    title: "Sparring",
    text: "Tag dine idéer, udfordringer og spørgsmål med – og få nye perspektiver.",
  },
  {
    number: "03",
    title: "Udvikling",
    text: "Vi arbejder med emner, der kan flytte både dig og din forretning.",
  },
  {
    number: "04",
    title: "Mad & hygge",
    text: "Der skal selvfølgelig også være plads til morgenmad, frokost, kaffe og gode samtaler.",
  },
  {
    number: "05",
    title: "Inspiration",
    text: "Gå hjem med nye idéer, energi og konkrete ting, du kan arbejde videre med.",
  },
  {
    number: "06",
    title: "Community",
    text: "Du behøver ikke bygge din forretning alene.",
  },
];

const eventDetails = [
  { label: "Dato", lines: ["Lørdag d. 7. november"] },
  { label: "Tid", lines: ["11.00 – 15.00"] },
  { label: "Lokation", lines: ["Agern Alle 5A", "2970 Hørsholm"] },
  { label: "Pladser", lines: ["10 pladser"] },
  { label: "Pris", lines: ["300 kr."] },
];

const schedule = [
  { time: "10.00", text: "Velkommen & let morgenmad" },
  { time: "10.30", text: "Præsentationsrunde" },
  { time: "11.00", text: "Dagens tema / workshop" },
  { time: "12.00", text: "Frokost & netværk" },
  { time: "13.00", text: "Sparring & arbejde med egen forretning" },
  { time: "14.00", text: "Netværk, refleksion & nye idéer" },
  { time: "15.00", text: "Tak for i dag" },
];

// Placeholder — no real goodiebag images exist in the project yet.
const goodieItems = [
  "Notesbog",
  "Kuglepen",
  "Goodiebag",
  "Produkter",
  "Små kort",
  "Andre goodies",
];

// Placeholder — no real photos from previous Socials Meet Ups exist yet.
const moodPlaceholders = [
  { label: "Billede fra tidligere Socials Meet Up", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Billede fra tidligere Socials Meet Up", span: "" },
  { label: "Billede fra tidligere Socials Meet Up", span: "" },
  { label: "Billede fra tidligere Socials Meet Up", span: "sm:col-span-2" },
];

// PLACEHOLDER testimonials — not real quotes yet. Clearly marked both in
// the UI (badge + bracketed copy) and here in code so no one mistakes this
// for genuine feedback.
const testimonials = [
  { quote: "UDTALELSE KOMMER HER", person: "Navn / virksomhed" },
  { quote: "UDTALELSE KOMMER HER", person: "Navn / virksomhed" },
  { quote: "UDTALELSE KOMMER HER", person: "Navn / virksomhed" },
];

// Placeholder dates — exact dates not decided yet.
const upcomingDates = [
  { title: "Socials Meet Up", date: "Dato kommer snart", location: "Hørsholm" },
  { title: "Socials Meet Up", date: "Dato kommer snart", location: "Hørsholm" },
  { title: "Socials Meet Up", date: "Dato kommer snart", location: "Hørsholm" },
];

export default function SocialsMeetUpPage() {
  return (
    <>
      <SocialsMeetUpScrollReset />

      {/* 1. HERO */}
      <section className="overflow-hidden bg-cream">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow mb-4">Et netværk for kvinder</p>
            <h1 className="font-display text-4xl leading-[1.1] text-espresso sm:text-5xl lg:text-6xl">
              Socials <span className="italic text-clay-dark">Meet Up</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-espresso sm:text-xl">
              Et netværk for kvinder, der bygger noget op.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-espresso-light sm:text-lg">
              Et sted hvor vi mødes offline, deler erfaringer, sparrer,
              udvikler vores forretninger – og skaber relationer med andre
              kvinder, der forstår rejsen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#naeste-meetup" className="btn-primary">
                Se næste meet up
              </Link>
            </div>
            <p className="mt-8 font-display text-lg italic text-espresso-light">
              &ldquo;Netværk skal føles personligt.&rdquo;
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-5xl border border-[#C98C69] bg-sand">
            <Image
              src="/images/anja-hero.jpg"
              alt="Anja Lehmann, stifter af Socials Meet Up"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. HVAD ER SOCIALS MEET UP? */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-5xl border border-[#C98C69] bg-sand lg:order-1">
            <Image
              src="/images/blog/content-strategi-hero.jpg"
              alt="Stemningen til et Socials Meet Up"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="lg:order-2">
            <SectionHeading
              eyebrow="Mere end netværk"
              title="Mere end bare et netværksmøde."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso-light">
              <p>
                Socials Meet Up er skabt til kvinder, der driver deres egen
                forretning, er ved at bygge noget op eller drømmer om at
                tage næste skridt.
              </p>
              <p>
                Her handler det ikke om stive visitkort, elevator pitches og
                overfladisk networking.
              </p>
              <p>
                Det handler om ærlige samtaler, nye perspektiver, sparring
                og relationer til andre kvinder, der står med mange af de
                samme tanker, udfordringer og ambitioner som dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DET KAN DU FORVENTE */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading title="Hvad kan du forvente?" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expectCards.map((item) => (
              <div key={item.number} className="card">
                <p className="font-display text-3xl text-clay-dark">
                  {item.number}
                </p>
                <h3 className="mt-3 font-display text-xl text-espresso">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NÆSTE SOCIALS MEET UP */}
      <section id="naeste-meetup" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title="Næste Socials Meet Up"
            align="center"
          />
          <div className="card mx-auto mt-14 max-w-3xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {eventDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="eyebrow !text-[#B87A58]">{detail.label}</p>
                  <p
                    className={`mt-2 font-display text-[17px] text-espresso sm:text-[19px] ${
                      detail.lines.length > 1 ? "leading-snug" : "leading-normal"
                    }`}
                  >
                    {detail.lines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              {/* Booking is not wired up yet — visually complete CTA, ready
                  for the real booking solution to be connected later. */}
              <button type="button" className="btn-primary">
                Book din plads
              </button>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-espresso-light">
            Jeg holder grupperne små med vilje, så der er tid og plads til,
            at alle bliver set og hørt.
          </p>
        </div>
      </section>

      {/* 5. SÅDAN KAN DAGEN SE UD */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            title="En dag med plads til både business & relationer."
            align="center"
          />
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="space-y-6 border-l border-espresso/15 pl-8">
              {schedule.map((item) => (
                <div key={item.time} className="relative">
                  <span className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full bg-clay" />
                  <p className="eyebrow">{item.time}</p>
                  <p className="mt-1 text-base text-espresso">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-espresso-light">
            Programmet kan variere fra gang til gang – men nærvær, sparring
            og gode relationer er altid en del af dagen.
          </p>
        </div>
      </section>

      {/* 6. GOODIEBAG */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">And yes...</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
              Du får selvfølgelig også lidt med hjem
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso-light sm:text-lg">
              Jeg elsker de små detaljer, der gør en dag lidt mere særlig.
              Derfor vil der altid være tænkt over noget ekstra til Socials
              Meet Up – det kan være små overraskelser, produkter,
              materialer eller noget helt andet, du kan tage med dig hjem.
            </p>
            <p className="mt-4 text-base leading-relaxed text-espresso-light sm:text-lg">
              Præcis hvad det bliver, kan variere fra gang til gang. Det er
              en del af oplevelsen.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {goodieItems.map((item) => (
              <div
                key={item}
                className="flex aspect-square flex-col items-center justify-center rounded-4xl border border-dashed border-espresso/25 bg-sand p-4 text-center"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-espresso-light">
                  Billede
                </span>
                <span className="mt-1 text-sm text-espresso">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STEMNINGEN */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
              Come for the business.
              <br />
              <span className="italic text-clay-dark">
                Stay for the people.
              </span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {moodPlaceholders.map((item, index) => (
              <div
                key={index}
                className={`flex aspect-[4/3] items-center justify-center rounded-4xl border border-dashed border-espresso/25 bg-white/50 p-6 text-center ${item.span}`}
              >
                <span className="text-sm text-espresso-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-espresso-light">
            Det vigtigste for mig er, at Socials Meet Up føles som et sted,
            hvor du kan komme præcis som du er – og gå derfra med lidt mere
            energi, retning og mennesker omkring dig.
          </p>
        </div>
      </section>

      {/* 8. TESTIMONIALS (placeholder) */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading title="Hvad siger kvinderne?" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="card text-center">
                <span className="eyebrow mb-4 inline-block rounded-full bg-sand px-3 py-1 !text-espresso-light">
                  Placeholder
                </span>
                <p className="font-display text-lg italic text-espresso">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-espresso-light">
                  {item.person}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. KOMMENDE DATOER */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading title="Kommende Meet Ups" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {upcomingDates.map((item, index) => (
              <div key={index} className="card flex flex-col text-center">
                <h3 className="font-display text-xl text-espresso">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-espresso-light">{item.date}</p>
                <p className="text-sm text-espresso-light">{item.location}</p>
                <Link
                  href="#naeste-meetup"
                  className="btn-secondary mt-6 justify-center"
                >
                  Se mere
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. VENTELISTE */}
      <section id="venteliste" className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Ikke klar til at booke endnu?</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
              Vil du have næste invitation først?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso-light sm:text-lg">
              Skriv dig på listen og vær blandt de første, der får besked,
              når jeg åbner nye datoer til Socials Meet Up.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* 11. OM ANJA */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-5xl border border-[#C98C69] bg-cream">
            <Image
              src="/images/anja-hero.jpg"
              alt="Anja Lehmann, stifter af Socials Meet Up og Socials Agency"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Lidt om mig</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl">
              Hej, jeg er Anja.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso-light">
              <p>Jeg står bag Socials Agency &amp; Socials Meet Up.</p>
              <p>
                Jeg har skabt det her netværk, fordi jeg selv savnede et
                sted, hvor jeg kunne møde andre kvinder med ambitioner og
                idéer – uden at networking skulle føles stift eller
                upersonligt.
              </p>
              <p>
                Et sted, hvor vi både kan tale business, dele det, der er
                svært, og fejre det, der går godt.
              </p>
              <p>
                Det, jeg selv manglede allermest, var støtten. Et sted, hvor
                man kan stille spørgsmål, bede om hjælp og sparre med andre,
                der forstår, hvordan det er at bygge noget op.
              </p>
              <p>
                Det er præcis dét, jeg ønsker at skabe med Socials Meet Up.
                Et trygt rum, hvor der er plads til alle – uanset om du lige
                er startet, stadig går med drømmen eller allerede er godt i
                gang.
              </p>
              <p>Her skal der være plads til at være lige dér, hvor du er.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. AFSLUTTENDE CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="card mx-auto max-w-3xl bg-espresso text-center text-cream">
            <p className="eyebrow mb-4 !text-[#B87A58]">Socials Meet Up</p>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">
              Du behøver ikke bygge det alene.
            </h2>
            <Link
              href="#naeste-meetup"
              className="btn-primary mt-8 inline-flex"
            >
              Se næste dato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
