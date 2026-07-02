import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
};

export default function HandelsbetingelserPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="Juridisk" title="Handelsbetingelser" />

        <div className="mt-12 space-y-6 text-base leading-relaxed text-espresso-light">
          <h2 className="font-display text-2xl text-espresso sm:text-3xl">
            Generelt
          </h2>
          <p>
            Disse handelsbetingelser gælder for alle aftaler mellem Socials
            Agency og kunden, medmindre andet er skriftligt aftalt.
          </p>
          <p>
            Formålet er at sikre et klart og professionelt grundlag for
            samarbejdet, så begge parter ved, hvad de kan forvente – både
            før, under og efter en opgave.
          </p>
          <p>
            Alle tilbud afgives skriftligt og er som udgangspunkt gyldige i
            14 dage fra afsendelsesdatoen, medmindre andet er angivet. Når
            kunden har godkendt et tilbud – enten ved at underskrive en
            kontrakt eller bekræfte skriftligt via e-mail – betragtes
            aftalen som indgået.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Samarbejdsformer og afregning
          </h2>
          <p>
            Hos Socials Agency tilbydes forskellige samarbejdsformer, som
            kan tilpasses efter dine behov og præferencer.
          </p>

          <h3 className="font-display text-lg text-espresso">
            Timebaseret afregning
          </h3>
          <p>
            Ved timebaseret afregning faktureres for medgået tid, enten ved
            opgavens afslutning eller løbende pr. måned afhængig af
            opgavens omfang og varighed. Jeg holder dig opdateret
            undervejs, så du har overblik over tid og omkostninger.
          </p>

          <h3 className="font-display text-lg text-espresso">
            Engangsydelser
          </h3>
          <p>
            Engangsydelser faktureres inden opgaven påbegyndes eller
            udleveres.
          </p>
          <p>
            Ønskes en specialydelse, faktureres denne inden opgaven
            påbegyndes af Socials Agency.
          </p>

          <h3 className="font-display text-lg text-espresso">
            Faste månedlige aftaler
          </h3>
          <p>
            En fast månedlig aftale er ikke defineret på timer, da disse er
            inkluderet i det pågældende tilbud. Det giver kontinuitet, ro
            og bedre mulighed for planlægning.
          </p>
          <p>
            Aftalen faktureres forud for hver måned og betales senest den
            1. i måneden.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Opsigelse og ændringer i samarbejdet
          </h2>
          <p>
            Hvis du ønsker at opsige samarbejdet med Socials Agency, skal
            dette meddeles skriftligt.
          </p>
          <p>Opsigelsesperioden er løbende måned plus én måned.</p>
          <p>
            Skulle en opsigelse blive nødvendig, må den meget gerne
            meddeles hurtigst muligt, så vi kan sikre en god afrunding af
            samarbejdet.
          </p>
          <p>
            Opsigelsesvilkår vil altid fremgå af den kontrakt, som er
            underskrevet ved samarbejdets indgåelse.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Ejerskab og rettigheder
          </h2>
          <p>
            Kunden har fuldt ejerskab til alle relevante konti og systemer
            (fx annonceringskonti, analyseværktøjer og e-mailplatforme),
            som oprettes eller anvendes i forbindelse med samarbejdet,
            medmindre andet er skriftligt aftalt.
          </p>
          <p>
            Kunden opnår brugsret til alt materiale, som udarbejdes af
            Socials Agency som led i samarbejdet. Ophavsretten forbliver
            hos Socials Agency, men kunden må anvende materialet frit i
            egne markedsføringsaktiviteter både under og efter
            samarbejdets ophør.
          </p>
          <p>
            Brugsretten forudsætter, at betaling for det pågældende
            materiale er sket fuldt ud.
          </p>
          <p>
            Socials Agency forbeholder sig retten til at vise eksempler på
            udført arbejde i egen markedsføring, medmindre andet
            udtrykkeligt er aftalt.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Aftalegrundlag og bekræftelse
          </h2>
          <p>
            Alle samarbejder indgås skriftligt via underskrevet kontrakt,
            skriftligt tilbud eller skriftlig godkendelse via e-mail.
          </p>
          <p>
            Mundtlige aftaler er ikke gældende, medmindre de efterfølgende
            bekræftes skriftligt.
          </p>
          <p>
            Ved mindre opgaver (fx enkeltstående rådgivning eller
            opsætning) kan en kort skriftlig bekræftelse via e-mail være
            tilstrækkelig.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Ansvar og forbehold
          </h2>
          <ul className="space-y-2">
            {[
              "Socials Agency arbejder professionelt og målrettet for at skabe resultater, men kan ikke garantere specifikke effekter af indsatser, herunder antal visninger, leads eller omsætning.",
              "Rådgivning gives ud fra erfaring og best practice, men Socials Agency påtager sig ikke ansvar for konkrete resultater såsom placeringer, leads, konverteringer, omsætning eller salg.",
              "Det er kundens ansvar at implementere og anvende anbefalinger korrekt og i overensstemmelse med gældende lovgivning.",
              "Kunden er desuden ansvarlig for, at alt anvendt materiale overholder gældende regler, herunder markedsføringsloven, GDPR og de enkelte platformes retningslinjer.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Betalingsbetingelser
          </h2>
          <ul className="space-y-2">
            {[
              "Fakturering sker månedligt forud eller ved forudbetaling ved køb af engangsydelser, afhængigt af den konkrete aftale.",
              "Betalingsfristen er som udgangspunkt 8 dage netto, medmindre andet er aftalt.",
              "Ved for sen betaling forbeholdes retten til at opkræve rykkergebyr og morarenter i henhold til renteloven.",
              "Eventuelle særvilkår fremgår af kontrakt, tilbud eller aftale via e-mail.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Aflysninger, ferier og frister
          </h2>
          <p>
            Der er ingen faste regler for aflysninger, men der opfordres
            til, at der gives besked så tidligt som muligt af hensyn til
            planlægning og øvrige kunder.
          </p>
          <p>
            Ved ferie eller længerevarende fravær informeres kunder altid i
            god tid.
          </p>
          <p>
            Socials Agency kan ikke holdes ansvarlig for forsinkelser eller
            manglende levering som følge af force majeure, herunder
            sygdom, nedbrud, strømudfald eller lignende forhold uden for
            virksomhedens kontrol.
          </p>
          <p>
            Tidsplaner og deadlines aftales fra opgave til opgave. Jeg
            bestræber mig altid på at overholde de aftalte
            leveringsfrister, men tager forbehold for forsinkelser, som
            skyldes forhold uden for min kontrol.
          </p>

          <h2 className="pt-6 font-display text-2xl text-espresso sm:text-3xl">
            Ændringer i handelsbetingelserne
          </h2>
          <p>Disse handelsbetingelser kan opdateres løbende.</p>
          <p>Den til enhver tid gældende version findes på hjemmesiden.</p>
          <p>
            Ved væsentlige ændringer orienteres eksisterende kunder
            skriftligt.
          </p>
          <p>
            Har du spørgsmål til handelsbetingelserne eller
            samarbejdsformerne, er du altid velkommen til at kontakte
            Socials Agency.
          </p>
          <p>
            Ærlig og transparent dialog vægtes højt, og jeg hjælper dig
            gerne med at finde den løsning, der passer bedst til dine
            behov.
          </p>

          <p className="pt-6 text-sm text-espresso-light/70">
            Sidst opdateret juli 2026
          </p>
        </div>
      </div>
    </section>
  );
}
