"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Indgangsanimation til hero'en. Spilles kun ved første indlæsning af siden.
 *
 * - Selve animationen er ren CSS (@keyframes i globals.css) og kræver ikke
 *   JavaScript. Den ender altid i synlig tilstand.
 * - Når man kommer tilbage til forsiden via menuen (uden at siden genindlæses),
 *   spilles den ikke igen.
 * - Ved reduceret bevægelse slår CSS animationen helt fra.
 */

// Lever kun i browseren, mens siden er åben. På serveren sættes den aldrig.
let heroHasPlayed = false;

type Props = {
  children: ReactNode;
  /** Forsinkelse i millisekunder, så elementerne kommer efter hinanden. */
  delay?: number;
  /** "rise" = glid op + fade. "zoom" = fade + meget let zoom (billeder). */
  variant?: "rise" | "zoom";
  className?: string;
};

export default function HeroIntro({
  children,
  delay = 0,
  variant = "rise",
  className,
}: Props) {
  const [skip] = useState(() => heroHasPlayed);

  useEffect(() => {
    heroHasPlayed = true;
  }, []);

  const classes = [
    !skip && (variant === "zoom" ? "hero-zoom" : "hero-rise"),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = (
    !skip && delay ? { "--hero-delay": `${delay}ms` } : undefined
  ) as CSSProperties | undefined;

  return (
    <div className={classes || undefined} style={style}>
      {children}
    </div>
  );
}
