"use client";

import { useLayoutEffect } from "react";

/**
 * Fixes scroll position on /socials-meet-up only.
 *
 * The browser's native "scroll restoration" sometimes reopens this page
 * part-way down (e.g. at "Næste Socials Meet Up") on a normal reload,
 * because the browser remembers the last scroll position for this URL.
 *
 * This component, rendered once at the top of that page only:
 * - Temporarily switches scroll restoration to "manual" so the browser
 *   stops trying to remember/restore a previous scroll position here.
 * - Scrolls to the very top on mount — but ONLY when the URL has no
 *   "#section" fragment, so a direct link or in-page CTA to a specific
 *   section (e.g. /socials-meet-up#naeste-meetup) still lands there
 *   normally, exactly as before.
 * - Restores the browser's previous scroll-restoration setting again on
 *   unmount, so leaving this page never affects scroll behavior anywhere
 *   else on the site.
 */
export default function SocialsMeetUpScrollReset() {
  useLayoutEffect(() => {
    if (typeof window === "undefined" || !("scrollRestoration" in window.history)) {
      return;
    }

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  return null;
}
