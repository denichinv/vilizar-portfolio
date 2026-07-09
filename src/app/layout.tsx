import type { Metadata } from "next";
import { DM_Serif_Display, Geist, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Vilizar Denichin | Front-End Developer",
    template: "%s | Vilizar Denichin",
  },
  description:
    "Front-End Developer based in Dunstable, UK, building responsive, accessible interfaces with React, TypeScript, Next.js and modern front-end tooling.",
  applicationName: "Vilizar Portfolio",
  authors: [{ name: "Vilizar Denichin" }],
  creator: "Vilizar Denichin",
  keywords: [
    "Vilizar Denichin",
    "Front-End Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Junior Front-End Developer",
    "Dunstable",
    "UK Front-End Developer",
  ],
  openGraph: {
    title: "Vilizar Denichin | Front-End Developer",
    description:
      "Front-End Developer building responsive, accessible interfaces with React, TypeScript, Next.js and modern front-end tooling.",
    type: "website",
    locale: "en_GB",
    siteName: "Vilizar Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Vilizar Denichin | Front-End Developer",
    description:
      "Front-End Developer building responsive, accessible interfaces with React, TypeScript, Next.js and modern front-end tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} ${dmSerif.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
