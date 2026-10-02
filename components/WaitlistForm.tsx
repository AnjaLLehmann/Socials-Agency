"use client";

import { useState } from "react";

/**
 * Frontend-only waitlist signup for the Socials Meet Up landing page.
 *
 * IMPORTANT: This form does NOT send data anywhere yet. There is no
 * fetch/API call on submit — it only shows a local confirmation state.
 * Wire this up to a real database/mail service once that integration
 * is actively chosen (see /socials-meet-up spec, section "Venteliste").
 */
export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Intentionally no network request — see component note above.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-4xl border border-espresso/10 bg-white/70 p-10 text-center">
        <p className="font-display text-2xl text-espresso">
          Tak fordi du skrev dig på! 🤎
        </p>
        <p className="mt-3 text-sm text-espresso-light">
          Du er nu blandt de første, der hører om den næste Socials Meet
          Up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-4xl border border-espresso/10 bg-white/70 p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-espresso-light"
            htmlFor="firstName"
          >
            Fornavn
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            minLength={2}
            maxLength={100}
            className="w-full border-0 border-b border-espresso/20 bg-transparent px-1 py-3 text-sm text-espresso outline-none focus:border-clay-dark"
          />
        </div>
        <div>
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-espresso-light"
            htmlFor="waitlistEmail"
          >
            E-mail
          </label>
          <input
            id="waitlistEmail"
            name="waitlistEmail"
            type="email"
            required
            maxLength={200}
            className="w-full border-0 border-b border-espresso/20 bg-transparent px-1 py-3 text-sm text-espresso outline-none focus:border-clay-dark"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Ja tak, hold mig opdateret
      </button>
    </form>
  );
}
