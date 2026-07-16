import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

const script = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarohi-and-veer.sites.openai.com"),
  title: "Aarohi & Veer | Jaipur, 2027",
  description: "A handcrafted invitation to celebrate the wedding of Aarohi and Veer in Jaipur.",
  openGraph: {
    title: "Aarohi & Veer",
    description: "14 February 2027 · Jaipur",
    images: [{ url: "/og.webp", width: 1600, height: 823, alt: "Aarohi and Veer's wedding invitation" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.webp"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${script.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
