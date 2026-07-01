import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.socialsagency.dk"),
  title: {
    default: "Socials Agency — Instagram & SoMe Management",
    template: "%s | Socials Agency",
  },
  description:
    "Socials Agency hjælper dig med at forstå og bruge Instagram strategisk. Content strategi, drift og struktur til dine sociale medier — af Anja Lehmann.",
  openGraph: {
    title: "Socials Agency — Instagram & SoMe Management",
    description:
      "Content strategi, drift og struktur til dine sociale medier — af Anja Lehmann.",
    url: "https://www.socialsagency.dk",
    siteName: "Socials Agency",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
