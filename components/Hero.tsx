import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow mb-4">Socials Agency</p>
          <h1 className="font-display text-4xl leading-[1.1] text-espresso sm:text-5xl lg:text-6xl">
            Instagram på den{" "}
            <span className="italic text-clay-dark">lette</span> måde
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-espresso-light sm:text-lg">
            Mangler du overblikket over dine sociale medier — eller nærmere
            Instagram? Jeg hjælper dig med planlægning, redigering,
            optimering og drift af din profil, så din tilstedeværelse føles
            gennemtænkt og ægte.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary">
              Book samtale
            </Link>
            <Link href="/some-management" className="btn-secondary">
              Se ydelser
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-5xl bg-sand">
          <Image
            src="/images/anja-hero.jpg"
            alt="Anja Lehmann, founder af Socials Agency"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
