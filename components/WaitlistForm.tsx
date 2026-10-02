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
      <div className="card text-center">
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
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-espresso"
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
            className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
          />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-medium text-espresso"
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
            className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Ja tak, hold mig opdateret
      </button>
    </form>
  );
}
