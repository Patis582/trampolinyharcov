import type { Metadata } from "next";
import { Hind, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./components/sections/Footer";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trampolíny Harcov | Sportovní centrum v Liberci",
    template: "%s | Trampolíny Harcov",
  },
  description:
    "Moderní sportovní centrum zaměřené na skoky na trampolíně a další pohybové aktivity v Liberci Harcov. Připojte se k nám nebo podpořte výstavbu nového centra.",
  keywords: [
    "trampolíny",
    "Liberec",
    "Harcov",
    "sportovní centrum",
    "gymnastika",
    "parkour",
    "skoky na trampolíně",
  ],
  authors: [{ name: "Trampolíny Liberec" }],
  openGraph: {
    title: "Trampolíny Harcov | Sportovní centrum v Liberci",
    description:
      "Moderní sportovní centrum zaměřené na skoky na trampolíně a další pohybové aktivity v Liberci Harcov.",
    url: "https://trampolinyharcov.cz",
    siteName: "Trampolíny Harcov",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Trampolíny Harcov - Sportovní centrum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trampolíny Harcov | Sportovní centrum v Liberci",
    description:
      "Moderní sportovní centrum zaměřené na skoky na trampolíně v Liberci.",
    images: ["/images/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${hind.variable} ${montserrat.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
