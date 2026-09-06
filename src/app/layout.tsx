import type { Metadata } from "next";
import { DM_Serif_Display, Geist, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/data/contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  url: "https://vilizar.dev",
  jobTitle: contact.role,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dunstable",
    addressCountry: "GB",
  },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Front-End Development",
    "Responsive Web Design",
    "Web Accessibility",
    "Automated Testing",
  ],
};
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
  metadataBase: new URL("https://vilizar.dev"),
  title: {
    default: "Vilizar Denichin | Front-End Developer",
    template: "%s | Vilizar Denichin",
  },
  description:
    "Front-End Developer based in Dunstable, UK, building responsive, accessible interfaces with React, TypeScript, Next.js and modern front-end tooling.",
  alternates: {
    canonical: "/",
  },
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
    url: "/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-[color:var(--accent)] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
