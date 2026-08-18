import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://detailing-sigma.vercel.app"),

  title: {
    default: "OBSIDIAN — Преміальний автомобільний дітейлінг",
    template: "%s | OBSIDIAN",
  },

  description:
    "OBSIDIAN — професійний автомобільний дітейлінг. Керамічне покриття, полірування кузова, детейлінг салону, тонування та преміальна мийка.",

  keywords: [
    "автомобільний дітейлінг",
    "детейлінг",
    "дітейлінг",
    "полірування авто",
    "керамічне покриття авто",
    "детейлінг салону",
    "тонування автомобіля",
    "преміальна мийка",
    "захист кузова",
  ],

  authors: [
    {
      name: "OBSIDIAN",
    },
  ],

  creator: "OBSIDIAN",

  applicationName: "OBSIDIAN",

  alternates: {
    canonical: "https://detailing-sigma.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://detailing-sigma.vercel.app",
    siteName: "OBSIDIAN",
    title: "OBSIDIAN — Преміальний автомобільний дітейлінг",
    description:
      "Професійний догляд та захист автомобіля. Полірування, керамічне покриття, детейлінг салону та преміальна мийка.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OBSIDIAN — автомобільний детейлінг",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBSIDIAN — Преміальний автомобільний дітейлінг",
    description: "Професійний догляд та захист автомобіля.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
