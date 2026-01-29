import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. On configure les polices ici (c'est ce qui manquait)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Ton SEO optimisé pour Mikianeli
export const metadata: Metadata = {
  title: "Mikianeli | Boutique Officielle",
  description: "Découvrez la nouvelle collection exclusive Mikianeli. Mode et accessoires premium.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // J'ai passé la langue en "fr" pour Google
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}