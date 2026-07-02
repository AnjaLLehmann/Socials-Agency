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
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Lad os tage en snak"
            description="Fortæl mig om din virksomhed, dine mål eller de udfordringer, du står med. Udfyld formularen, så vender jeg tilbage hurtigst muligt – og sammen finder vi ud af, hvordan jeg bedst kan hjælpe dig."
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
