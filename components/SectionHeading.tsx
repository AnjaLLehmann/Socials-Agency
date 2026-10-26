import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Valgfri scroll-animation (kun forsiden bruger den). */
  animate?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  animate = false,
}: Props) {
  if (animate) {
    return (
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <Reveal>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-espresso-light sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-espresso-light sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
