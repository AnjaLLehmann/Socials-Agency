# Socials Agency — website (Next.js)

Dette er det fulde website-projekt til socialsagency.dk, bygget med
Next.js 14 (App Router), React 18, TypeScript og Tailwind CSS.

## Sidestruktur

- `/` — Forside
- `/some-management` — Social Media Management
- `/virtual-assistant` — Virtual Assistant
- `/engangsservice` — 1:1 Gennemgang
- `/om-mig` — Om mig
- `/blog` — Blog (oversigt, klar til udbygning)
- `/kontakt` — Kontakt
- `/handelsbetingelser`
- `/cookies-privatpolitik`

## 1. Kør projektet lokalt

Forudsætning: [Node.js](https://nodejs.org) version 18 eller nyere installeret.

```bash
# Gå ind i projektmappen
cd socials-agency

# Installer alle pakker
npm install

# Start udviklingsserveren
npm run dev
```

Åbn derefter [http://localhost:3000](http://localhost:3000) i browseren.

## 2. Indsæt filerne

Hvis du har fået filerne separat, skal de placeres i denne struktur:

```
socials-agency/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── some-management/page.tsx
│   ├── virtual-assistant/page.tsx
│   ├── engangsservice/page.tsx
│   ├── om-mig/page.tsx
│   ├── blog/page.tsx
│   ├── kontakt/page.tsx
│   ├── handelsbetingelser/page.tsx
│   └── cookies-privatpolitik/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   └── ContactForm.tsx
├── public/images/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.json
└── .gitignore
```

## 3. Upload til GitHub

```bash
cd socials-agency
git init
git add .
git commit -m "Første version af Socials Agency website"

# Opret et nyt, tomt repo på github.com (uden README/gitignore)
git branch -M main
git remote add origin https://github.com/DIT-BRUGERNAVN/socials-agency.git
git push -u origin main
```

## 4. Deploy til Vercel

1. Gå til [vercel.com](https://vercel.com) og log ind (eller opret en
   konto) med din GitHub-konto.
2. Klik **Add New → Project**.
3. Vælg dit `socials-agency`-repo fra GitHub.
4. Vercel genkender automatisk, at det er et Next.js-projekt —
   lad standardindstillingerne stå (Build Command: `next build`,
   Output: `.next`).
5. Klik **Deploy**. Efter 1-2 minutter får du et live link, fx
   `socials-agency.vercel.app`.

## 5. Forbind dit domæne socialsagency.dk

1. Inde på dit Vercel-projekt: gå til fanen **Settings → Domains**.
2. Skriv `socialsagency.dk` og klik **Add**. Tilføj også
   `www.socialsagency.dk`, og lad Vercel sætte den ene som redirect til
   den anden (anbefaling: `www` → non-www, eller omvendt — vælg det du
   foretrækker).
3. Vercel viser dig nu de DNS-records, du skal sætte hos din
   domæneudbyder (der hvor du har købt socialsagency.dk — fx
   simply.com, one.com eller GratisDNS):
   - En **A-record** for `@` der peger på Vercels IP (Vercel viser den
     præcise værdi, typisk `76.76.21.21`).
   - En **CNAME-record** for `www` der peger på `cname.vercel-dns.com`.
4. Log ind hos din domæneudbyder, find DNS-indstillinger for
   socialsagency.dk, og indsæt de records, Vercel har vist dig.
5. Vent 10 minutter til nogle timer på, at DNS opdaterer sig. Vercel
   markerer domænet som "Valid" og udsteder automatisk et gratis
   SSL-certifikat, når det er klar.

## Noter

- **Fonte:** Projektet bruger Google Fonts `Fraunces` (overskrifter,
  kursiv display-font) og `Inter` (brødtekst), hentet via
  `next/font/google` — ingen ekstra opsætning nødvendig.
- **Farver:** Se `tailwind.config.ts` for det fulde farveunivers
  (cream, sand, clay, espresso).
- **Kontaktformular:** `components/ContactForm.tsx` viser en
  fungerende UI, men sender endnu ikke data nogen steder. Forbind den
  til fx [Formspree](https://formspree.io), [Resend](https://resend.com)
  eller din egen API-route, når du er klar.
- **Billeder:** Der er sat billeder ind fra jeres nuværende Wix-side
  som midlertidig placeholder (via `next.config.js` remotePatterns).
  Udskift dem gerne med jeres egne, nyere billeder i `/public/images`
  og opdater `src`-stierne i komponenterne.
