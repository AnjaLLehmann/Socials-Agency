import type { Metadata } from "next";
import { Fraunces, Inter, MonteCarlo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

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

const montecarlo = MonteCarlo({
  subsets: ["latin"],
  variable: "--font-montecarlo",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.socialsagency.dk"),
  title: {
    default: "Socials Agency | Instagram & SoMe Management",
    template: "%s | Socials Agency",
  },
  description:
    "Instagram, content og SoMe management for virksomheder, der ønsker en professionel, rolig og strategisk tilstedeværelse online.",
  alternates: {
    canonical: "https://www.socialsagency.dk",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Socials Agency | Instagram & SoMe Management",
    description:
      "Instagram, content og SoMe management for virksomheder, der ønsker en professionel, rolig og strategisk tilstedeværelse online.",
    url: "https://www.socialsagency.dk",
    siteName: "Socials Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Socials Agency | Instagram & SoMe Management",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socials Agency | Instagram & SoMe Management",
    description:
      "Instagram, content og SoMe management for virksomheder, der ønsker en professionel, rolig og strategisk tilstedeværelse online.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${fraunces.variable} ${inter.variable} ${montecarlo.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-0PBKGCEWE5" />
      </body>
    </html>
  );
}
