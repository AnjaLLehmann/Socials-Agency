"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: forbind til dit ønskede form-endpoint (fx Formspree, Resend eller eget API-route)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <p className="font-display text-2xl text-espresso">Tak for din besked!</p>
        <p className="mt-3 text-sm text-espresso-light">
          Jeg vender tilbage til dig hurtigst muligt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-espresso" htmlFor="name">
            Navn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-espresso" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-espresso" htmlFor="message">
          Fortæl mig om dine ønsker
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send besked
      </button>
    </form>
  );
}
