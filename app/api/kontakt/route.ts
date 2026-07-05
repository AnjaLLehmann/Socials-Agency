import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple email format check — good enough to catch obvious typos/garbage
// without being overly strict (avoids rejecting valid but unusual addresses).
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TO_EMAIL = "contact@socialsagency.dk";

// NOTE: This "from" address must belong to a domain you have verified in
// Resend (Resend > Domains). Until socialsagency.dk is verified there,
// Resend's shared "onboarding@resend.dev" sender is used as a safe fallback
// for testing — see the explanation below the code for how to switch this
// to a proper @socialsagency.dk sender once the domain is verified.
const FROM_EMAIL = "Socials Agency Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY er ikke sat i miljøvariablerne.");
    return NextResponse.json(
      { error: "Serverfejl: mailtjenesten er ikke konfigureret korrekt." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot field
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ugyldig anmodning." },
      { status: 400 }
    );
  }

  const { name, email, message, company } = body;

  // Honeypot: real users never see or fill in this field (hidden via CSS).
  // Bots that blindly fill every input will trip it. Respond with a fake
  // success so bots don't learn to avoid the field, but skip sending mail.
  if (company && company.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Udfyld venligst navn, email og besked." },
      { status: 400 }
    );
  }

  if (name.trim().length < 2) {
    return NextResponse.json(
      { error: "Navnet skal være mindst 2 tegn." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Indtast venligst en gyldig emailadresse." },
      { status: 400 }
    );
  }

  if (message.trim().length < 10) {
    return NextResponse.json(
      { error: "Beskeden skal være mindst 10 tegn." },
      { status: 400 }
    );
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "En eller flere felter er for lange." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `Ny besked fra ${name.trim()} via socialsagency.dk`,
      text: `Navn: ${name.trim()}\nEmail: ${email.trim()}\n\nBesked:\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend fejl:", error);
      return NextResponse.json(
        { error: "Beskeden kunne ikke sendes. Prøv igen om lidt." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Uventet fejl ved afsendelse af kontaktformular:", err);
    return NextResponse.json(
      { error: "Der skete en uventet fejl. Prøv igen om lidt." },
      { status: 500 }
    );
  }
}
