"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      // Honeypot field — real visitors never see or fill this in.
      company: String(formData.get("company") || ""),
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(
          data?.error || "Beskeden kunne ikke sendes. Prøv igen om lidt."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Der skete en fejl — tjek din internetforbindelse, og prøv igen."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
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
            minLength={2}
            maxLength={200}
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
            maxLength={200}
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
          minLength={10}
          maxLength={5000}
          className="w-full rounded-2xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso outline-none focus:border-clay"
        />
      </div>

      {/* Honeypot field — visually hidden from real visitors (classic
          "visually-hidden" pattern), but still present in the DOM so bots
          that auto-fill every input on a page will trip it. */}
      <div
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
        aria-hidden="true"
      >
        <label htmlFor="company">Virksomhed</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-2xl bg-clay/10 px-4 py-3 text-sm text-clay-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sender..." : "Send besked"}
      </button>
    </form>
  );
}
