import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Book en samtale, eller send en besked — jeg vender tilbage til dig hurtigst muligt.",
};

export default function KontaktPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Lad os tage en snak"
            description="Har du spørgsmål til mine ydelser, eller ved du allerede nu, at en skræddersyet løsning er noget for dig? Udfyld formularen med dine ønsker — jeg rækker ud til dig hurtigst muligt."
          />

          <div className="mt-10 space-y-6">
            <div>
              <p className="eyebrow mb-2">Ring her</p>
              <a href="tel:+4528139031" className="font-display text-2xl text-espresso hover:text-clay-dark">
                +45 2813 9031
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Email</p>
              <a
                href="mailto:contact@socialsagency.dk"
                className="font-display text-2xl text-espresso hover:text-clay-dark"
              >
                contact@socialsagency.dk
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Adresse</p>
              <p className="font-display text-2xl text-espresso">
                Ørbækgårds Alle, 2970 Hørsholm
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
