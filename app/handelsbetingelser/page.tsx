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
        <div className="prose mt-10 space-y-6 text-sm leading-relaxed text-espresso-light">
          <p>
            Her opdateres de fulde handelsbetingelser for Socials Agency,
            CVR 45775054. Indsæt jeres nuværende betingelser fra den
            eksisterende Wix-side, eller kontakt en juridisk rådgiver for
            en opdateret version.
          </p>
          <p>
            Kontakt gerne{" "}
            <a href="mailto:contact@socialsagency.dk" className="text-clay-dark">
              contact@socialsagency.dk
            </a>{" "}
            ved spørgsmål til vilkårene.
          </p>
        </div>
      </div>
    </section>
  );
}
