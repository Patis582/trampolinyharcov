import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind, Montserrat } from "next/font/google";
import './globals.css';
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  title: "Trampolíny Harčov",
  description: "Moderní sportovní centrum zaměřené na skoky na trampolíně",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hind.variable} ${montserrat.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
