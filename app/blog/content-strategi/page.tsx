import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sådan finder du din content strategi",
  description:
    "En content strategi behøver ikke være kompliceret. Her deler jeg, hvordan du finder en retning, der føles autentisk, skaber overblik og gør det lettere at være synlig på Instagram.",
};

export default function ContentStrategiPost() {
  return (
    <article className="py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-espresso-light transition-colors duration-200 hover:text-clay-dark"
          >
            ← Tilbage til bloggen
          </Link>

          <p className="eyebrow mb-4 mt-8">Blog</p>
          <h1 className="font-display text-4xl text-espresso sm:text-5xl">
            Sådan finder du din content strategi
          </h1>

          <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-5xl bg-sand">
            <Image
              src="/images/blog/content-strategi-hero.jpg"
              alt="Sådan finder du din content strategi"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-espresso-light">
            <p>
              En content strategi behøver ikke være kompliceret. Faktisk er
              det ofte, når vi gør den for kompleks, at den bliver svær at
              holde fast i. En god content strategi skal ikke føles som
              endnu en opgave på to-do-listen. Den skal give dig retning,
              overblik og ro.
            </p>
            <p>
              For mig handler en content strategi om at vide, hvad du vil
              sige, hvem du taler til, og hvorfor det betyder noget.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Start med formålet
            </h2>
            <p>
              Inden du planlægger opslag, reels og stories, skal du vide,
              hvad din profil skal hjælpe dig med.
            </p>
            <p>
              Skal den skabe flere henvendelser? Opbygge tillid? Sælge en
              ydelse? Positionere dig som ekspert? Eller gøre det lettere
              for potentielle kunder at forstå, hvad du kan hjælpe dem med?
            </p>
            <p>
              Når formålet er tydeligt, bliver det også nemmere at vælge
              indhold til og fra.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Kend din målgruppe
            </h2>
            <p>
              Dit indhold skal ikke tale til alle. Det skal tale til de
              rigtige.
            </p>
            <p>Spørg dig selv:</p>
            <ul className="space-y-2">
              {[
                "Hvem ønsker jeg at tiltrække?",
                "Hvilke problemer står de med?",
                "Hvad har de brug for at forstå, før de føler sig trygge ved at købe?",
                "Hvilke spørgsmål stiller de igen og igen?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Jo bedre du forstår din målgruppe, jo lettere bliver det at
              skabe indhold, der føles relevant.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Find dine content pillars
            </h2>
            <p>
              Content pillars er de emner, din profil skal bygges op
              omkring. Jeg anbefaler typisk 3-5 faste områder. Det kan
              eksempelvis være:
            </p>
            <ul className="space-y-2">
              {[
                "Ekspertise – hvor du viser, hvad du kan.",
                "Tillid – hvor du deler din proces, erfaring og tilgang.",
                "Personlighed – hvor menneskerne bag brandet får plads.",
                "Salg – hvor du tydeligt viser dine ydelser og hvordan man kan arbejde med dig.",
                "Inspiration – hvor du giver værdi, idéer og perspektiver.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Når du har dine pillars, bliver det meget lettere at
              planlægge indhold, fordi du ikke starter fra nul hver gang.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Skab en rytme, du kan holde
            </h2>
            <p>
              En strategi virker kun, hvis den kan bruges i praksis. Det
              handler ikke om at poste mest muligt. Det handler om at
              poste med en rytme, du kan holde over tid.
            </p>
            <p>
              Hellere to stærke opslag om ugen end fem opslag, der bliver
              lavet i panik.
            </p>
            <p>
              Find en struktur, der passer til din hverdag, din energi og
              dine ressourcer. Din content strategi skal understøtte din
              virksomhed – ikke stresse dig.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Tænk i kunderejsen
            </h2>
            <p>
              Dit indhold skal ikke kun inspirere. Det skal også hjælpe
              mennesker videre.
            </p>
            <p>
              Nogle følger dig, fordi de lige har opdaget dig. Andre har
              fulgt med længe, men mangler det sidste skub.
            </p>
            <p>Derfor bør din strategi indeholde:</p>
            <ul className="space-y-2">
              {[
                "Indhold, der skaber opmærksomhed.",
                "Indhold, der bygger tillid.",
                "Indhold, der viser din ekspertise.",
                "Indhold, der gør det nemt at tage kontakt.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Når du tænker i kunderejsen, bliver din profil mere end bare
              pæn. Den bliver strategisk.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              Hold strategien levende
            </h2>
            <p>
              En content strategi er ikke noget, du laver én gang og
              aldrig rører igen. Den skal justeres løbende.
            </p>
            <p>Spørg dig selv:</p>
            <ul className="space-y-2">
              {[
                "Hvad reagerer min målgruppe på?",
                "Hvilke opslag skaber gemninger, delinger eller henvendelser?",
                "Hvad føles naturligt for mig at dele?",
                "Hvad understøtter mine mål lige nu?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Jeg anbefaler at gennemgå din strategi mindst én gang om
              måneden. Ikke for at ændre alt, men for at sikre, at den
              stadig passer til din virksomhed.
            </p>

            <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
              En god strategi giver ro
            </h2>
            <p>
              Den bedste content strategi er ikke nødvendigvis den mest
              avancerede. Det er den, du faktisk bruger.
            </p>
            <p>
              Når du har en klar retning, faste emner og en rytme, der
              passer til dig, bliver det nemmere at være synlig uden hele
              tiden at skulle finde på nyt.
            </p>
            <p>Og det er netop dét, en god content strategi skal gøre:</p>
            <p className="font-display text-xl italic text-espresso">
              Give dig ro, retning og et stærkere fundament for din
              synlighed.
            </p>
          </div>

          <div className="card mt-16 bg-espresso text-center text-cream">
            <p className="eyebrow mb-4 !text-[#B87A58]">
              Klar til at skabe en strategi, der holder?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Du behøver ikke gøre det alene.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream sm:text-base">
              Hvis du ønsker en content strategi, der er gennemtænkt,
              realistisk og passer til din virksomhed, hjælper jeg dig
              gerne. Sammen finder vi en retning, der gør det lettere at
              være synlig – uden at det føles uoverskueligt. Book en
              uforpligtende samtale, og lad os tage en snak om dine mål og
              muligheder.
            </p>
            <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
              Book samtale
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
