import Link from "next/link";
import Image from "next/image";
import HeroIntro from "@/components/HeroIntro";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <HeroIntro>
            <p className="eyebrow mb-4">Socials Agency</p>
          </HeroIntro>
          <HeroIntro delay={120}>
            <h1 className="font-display text-4xl leading-[1.1] text-espresso sm:text-5xl lg:text-6xl">
              Instagram på den{" "}
              <span className="italic text-clay-dark">lette</span> måde
            </h1>
          </HeroIntro>
          <HeroIntro delay={260}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-espresso-light sm:text-lg">
            Mangler du overblikket over dine sociale medier — eller nærmere
            Instagram? Jeg hjælper dig med planlægning, redigering,
            optimering og drift af din profil, så din tilstedeværelse føles
            gennemtænkt og ægte.
          </p>
          </HeroIntro>
          <HeroIntro delay={400} className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary btn-lift">
              Book samtale
            </Link>
            <Link href="/some-management" className="btn-secondary btn-lift">
              Se ydelser
            </Link>
          </HeroIntro>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-5xl bg-sand">
          <HeroIntro variant="zoom" delay={150} className="absolute inset-0">
            <Image
              src="/images/anja-hero.jpg"
              alt="Anja Lehmann, founder af Socials Agency"
              fill
              className="object-cover object-top"
              priority
            />
          </HeroIntro>
        </div>
      </div>
    </section>
  );
}
