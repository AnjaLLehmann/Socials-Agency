import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

// Standalone landing page for the "Socials Meet Up" networking concept.
// Deliberately NOT part of the main navigation (Header.tsx's businessLinks
// is untouched — see the small, isolated conditional added there that
// swaps in SocialsMeetUpHeader only on this exact route), marked noindex
// below, and built to feel like its own small universe while still reusing
// the Socials Agency fonts, color tokens and global layout (Footer, GA,
// StructuredData). No existing page, component, API route or the contact
// form / Resend setup is touched by this file.
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

// ---- Content (nothing here is invented — placeholders are marked as such) ----

const heroEventInfo = [
  { label: "Dato", value: "Kommer snart" },
  { label: "Tid", value: "10.00 – 15.00" },
  { label: "Sted", value: "Hørsholm" },
];

const experienceList = [
  { label: "Netværk", text: "Mød andre selvstændige kvinder og skab relationer, der rækker længere end én dag." },
  { label: "Sparring", text: "Tag dine idéer, udfordringer og spørgsmål med – og få nye perspektiver." },
  { label: "Udvikling", text: "Vi arbejder med emner, der kan flytte både dig og din forretning." },
  { label: "Inspiration", text: "Gå hjem med nye idéer, energi og konkrete ting, du kan arbejde videre med." },
  { label: "Mad & hygge", text: "Der skal selvfølgelig også være plads til morgenmad, frokost, kaffe og gode samtaler." },
  { label: "Community", text: "Du behøver ikke bygge din forretning alene." },
];

const nextEventDetails = [
  { label: "Dato", value: "Kommer snart" },
  { label: "Tid", value: "10.00 – 15.00" },
  { label: "Sted", value: "Hørsholm" },
  { label: "Antal pladser", value: "Kommer snart" },
  { label: "Pris", value: "Kommer snart" },
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

// Alternating editorial gallery + testimonial rhythm. No real event photos
// exist in the project yet, so every image slot here is a clearly marked
// placeholder rather than a reused portrait presented as something it
// isn't. Testimonials are placeholders too, exactly as instructed.
const moodRows: Array<{
  type: "images";
  images: { label: string; className: string }[];
} | {
  type: "testimonial";
  quote: string;
  person: string;
}> = [
  {
    type: "images",
    images: [
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-[3/4]" },
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-[3/4] sm:mt-10" },
    ],
  },
  {
    type: "testimonial",
    quote: "Testimonial indsættes her",
    person: "Navn, deltager",
  },
  {
    type: "images",
    images: [
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-[4/5]" },
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-[4/5] sm:mt-16" },
    ],
  },
  {
    type: "testimonial",
    quote: "Testimonial indsættes her",
    person: "Navn, deltager",
  },
  {
    type: "images",
    images: [
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-square" },
      { label: "Billede fra tidligere Socials Meet Up", className: "aspect-square sm:mt-10" },
    ],
  },
  {
    type: "testimonial",
    quote: "Testimonial indsættes her",
    person: "Navn, deltager",
  },
];

// Placeholder dates — exact dates not decided yet.
const upcomingDates = [
  { date: "Dato kommer snart", location: "Hørsholm" },
  { date: "Dato kommer snart", location: "Hørsholm" },
  { date: "Dato kommer snart", location: "Hørsholm" },
];

export default function SocialsMeetUpPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream pb-20 pt-16 lg:pb-28 lg:pt-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-5">Et netværk for kvinder</p>
            <h1 className="font-display text-5xl leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
              Socials <span className="italic text-clay-dark">Meet Up</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-espresso sm:text-xl">
              Et netværk for kvinder, der bygger noget op.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-espresso-light">
              Et sted hvor vi mødes offline, deler erfaringer, sparrer,
              udvikler vores forretninger – og skaber relationer med andre
              kvinder, der forstår rejsen.
            </p>
          </div>

          {/* Three images side by side on desktop, horizontal scroll on mobile */}
          <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
            <div className="relative aspect-[3/4] w-[80vw] shrink-0 snap-center overflow-hidden rounded-3xl bg-sand sm:w-auto">
              <Image
                src="/images/anja-hero.jpg"
                alt="Anja Lehmann, stifter af Socials Meet Up"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] w-[80vw] shrink-0 snap-center overflow-hidden rounded-3xl bg-sand sm:w-auto">
              <Image
                src="/images/blog/content-strategi-hero.jpg"
                alt="Stemningen omkring Socials Meet Up"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex aspect-[3/4] w-[80vw] shrink-0 snap-center items-center justify-center rounded-3xl border border-dashed border-espresso/25 bg-white/50 text-center sm:w-auto">
              <span className="px-6 text-sm text-espresso-light">
                Billede tilføjes
              </span>
            </div>
          </div>

          {/* Simple event info + CTA */}
          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-1 flex-wrap justify-center gap-x-10 gap-y-4 sm:justify-start">
              {heroEventInfo.map((item) => (
                <div key={item.label}>
                  <p className="eyebrow mb-1">{item.label}</p>
                  <p className="font-display text-lg text-espresso">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {/* No booking link exists yet — visually ready CTA only. */}
            <Link href="#naeste-meetup" className="btn-primary shrink-0">
              Book din plads
            </Link>
          </div>
        </div>
      </section>

      {/* HVAD ER SOCIALS MEET UP? */}
      <section className="py-10 lg:py-14">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-5xl bg-white/70 px-8 py-12 text-center sm:px-16">
            <p className="eyebrow mb-4">Hvad er Socials Meet Up?</p>
            <p className="text-lg leading-relaxed text-espresso sm:text-xl">
              Et offline netværk for kvinder, der bygger deres egen
              forretning – skabt til ærlige samtaler, sparring og relationer
              med andre, der kender rejsen.
            </p>
          </div>
        </div>
      </section>

      {/* MERE END BARE ET NETVÆRKSMØDE */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl leading-tight text-espresso sm:text-4xl lg:text-5xl">
              Mere end bare et netværksmøde.
            </h2>
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

          <ul className="space-y-6 self-center">
            {experienceList.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="mt-1 font-display text-lg text-clay-dark">
                  ✦
                </span>
                <div>
                  <p className="font-display text-xl text-espresso">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-espresso-light">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NÆSTE SOCIALS MEET UP — dark contrast section */}
      <section id="naeste-meetup" className="bg-espresso py-20 text-cream lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 !text-[#D89A78]">Næste Socials Meet Up</p>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Sikr din plads
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {nextEventDetails.map((detail) => (
              <div key={detail.label} className="text-center">
                <p className="eyebrow mb-2 !text-[#D89A78]">{detail.label}</p>
                <p className="font-display text-xl text-cream sm:text-2xl">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            {/* Booking is not wired up yet — visually complete CTA only,
                ready for the real booking solution to be connected later.
                No payment/booking link is invented. */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 font-body text-sm font-semibold tracking-wide text-espresso transition-colors duration-200 hover:bg-white"
            >
              Book din plads
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Programmet</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl">
              En dag med plads til både business & relationer.
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-xl divide-y divide-espresso/10">
            {schedule.map((item) => (
              <div
                key={item.time}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-display text-lg text-clay-dark">
                  {item.time}
                </span>
                <span className="flex-1 text-right text-sm text-espresso sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-espresso-light">
            Programmet kan variere fra gang til gang – men nærvær, sparring
            og gode relationer er altid en del af dagen.
          </p>
        </div>
      </section>

      {/* GOODIEBAG */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-5xl border border-dashed border-espresso/25 bg-white/50 text-center">
            <span className="px-6 text-sm text-espresso-light">
              Billede af goodiebag tilføjes her
            </span>
          </div>
          <div>
            <p className="eyebrow mb-4">And yes...</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl">
              Og ja... der er selvfølgelig en goodiebag.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso-light sm:text-lg">
              Jeg elsker de små detaljer, der gør en dag lidt mere særlig.
              Derfor får du også lidt med hjem fra Socials Meet Up – både
              noget, du kan bruge på dagen, og små overraskelser fra mig og
              eventuelle samarbejdspartnere.
            </p>
            <p className="mt-4 text-sm italic text-espresso-light">
              Samarbejdspartnere annonceres her, når de er på plads.
            </p>
          </div>
        </div>
      </section>

      {/* STEMNING FRA TIDLIGERE SOCIALS MEET UPS */}
      <section className="py-20 lg:py-28">
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

          <div className="mx-auto mt-16 max-w-4xl space-y-16">
            {moodRows.map((row, index) =>
              row.type === "images" ? (
                <div key={index} className="grid grid-cols-2 gap-5">
                  {row.images.map((img, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center rounded-3xl border border-dashed border-espresso/25 bg-sand text-center ${img.className}`}
                    >
                      <span className="px-4 text-xs text-espresso-light sm:text-sm">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  key={index}
                  className="mx-auto max-w-xl border-l-2 border-clay-dark bg-white/60 py-6 pl-8 pr-6"
                >
                  <p className="font-display text-xl italic text-espresso sm:text-2xl">
                    &ldquo;{row.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-espresso-light">
                    {row.person}
                  </p>
                </div>
              )
            )}
          </div>

          <p className="mx-auto mt-16 max-w-xl text-center text-sm leading-relaxed text-espresso-light">
            Det vigtigste for mig er, at Socials Meet Up føles som et sted,
            hvor du kan komme præcis som du er – og gå derfra med lidt mere
            energi, retning og mennesker omkring dig.
          </p>
        </div>
      </section>

      {/* KOMMENDE DATOER */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Kommende Meet Ups</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl">
              Kommende datoer
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-2xl divide-y divide-espresso/10">
            {upcomingDates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left"
              >
                <div>
                  <p className="font-display text-xl text-espresso">
                    Socials Meet Up
                  </p>
                  <p className="mt-1 text-sm text-espresso-light">
                    {item.date} · {item.location}
                  </p>
                </div>
                <Link href="#naeste-meetup" className="btn-secondary">
                  Se mere
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENTELISTE */}
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

      {/* OM ANJA */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <div className="relative aspect-square w-40 overflow-hidden rounded-full bg-cream">
            <Image
              src="/images/anja-hero.jpg"
              alt="Anja Lehmann, stifter af Socials Meet Up og Socials Agency"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl">
              Hej, jeg er Anja 🤎
            </h2>
            <div className="mx-auto mt-6 max-w-xl space-y-4 text-base leading-relaxed text-espresso-light">
              <p>Jeg står bag Socials Agency – og Socials Meet Up.</p>
              <p>
                Jeg har skabt netværket, fordi jeg selv savnede et sted, hvor
                man kunne møde andre kvinder med ambitioner og idéer uden,
                at networking skulle føles stift eller upersonligt.
              </p>
              <p>
                Et sted hvor vi både kan tale business, dele det der er
                svært, fejre det der går godt – og hjælpe hinanden videre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFSLUTNING */}
      <section className="bg-espresso py-24 text-cream lg:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
              Kom for forretningen.
              <br />
              <span className="italic !text-[#D89A78]">
                Bliv for fællesskabet.
              </span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#naeste-meetup"
                className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 font-body text-sm font-semibold tracking-wide text-espresso transition-colors duration-200 hover:bg-white"
              >
                Book din plads
              </Link>
              <Link
                href="#venteliste"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-4 font-body text-sm font-semibold tracking-wide text-cream transition-colors duration-200 hover:bg-cream/10"
              >
                Skriv dig på ventelisten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
