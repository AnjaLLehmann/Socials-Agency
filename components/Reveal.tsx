"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * Blid "scroll reveal" (fade + let bevægelse opad).
 *
 * Sikkerhed — indholdet må aldrig blive usynligt:
 * - Server-HTML'en er helt synlig. Intet er skjult, før JavaScript er kørt.
 * - Elementet skjules først i browseren, og kun hvis det er uden for skærmen.
 * - Ved reduceret bevægelse, uden IntersectionObserver eller ved fejl gør
 *   komponenten ingenting, og indholdet vises bare normalt.
 * - En sikkerhedstimer viser elementet, hvis det er i skærmbilledet men stadig
 *   skjult.
 *
 * Gentagelse: Når elementet er helt ude af skærmen, nulstilles det, så det
 * kan animere ind igen. Gentagelser er mere diskrete (kortere og mindre
 * bevægelse), og nulstillingen sker uden for skærmen, så man aldrig ser
 * indhold forsvinde.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  children: ReactNode;
  /** Forsinkelse i millisekunder (bruges til stagger). */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    try {
      if (
        typeof IntersectionObserver === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
    } catch {
      return;
    }

    const inViewNow = () => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    // Allerede i skærmbilledet ved indlæsning: vis uden animation.
    // Uden for skærmen: skjul, så det kan glide ind ved scroll.
    el.setAttribute("data-reveal", inViewNow() ? "shown" : "hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            el.setAttribute("data-reveal", "shown");
          } else if (!entry.isIntersecting) {
            // Helt ude af skærmen: nulstil stille, klar til næste gang.
            // Kun elementer, der har været vist, får den diskrete gentagelse.
            if (el.getAttribute("data-reveal") === "shown") {
              el.setAttribute("data-seen", "1");
            }
            el.setAttribute("data-reveal", "hidden");
          }
        }
      },
      { threshold: [0, 0.15] }
    );
    observer.observe(el);

    // Sikkerhedsnet: skjult men i skærmbilledet efter 3 sek. → vis.
    const failsafe = window.setTimeout(() => {
      if (el.getAttribute("data-reveal") === "hidden" && inViewNow()) {
        el.setAttribute("data-reveal", "shown");
      }
    }, 3000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
      el.removeAttribute("data-reveal");
      el.removeAttribute("data-seen");
    };
  }, []);

  const style = (
    delay ? { "--reveal-delay": `${delay}ms` } : undefined
  ) as CSSProperties | undefined;

  return (
    <div ref={ref} className={["reveal", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
