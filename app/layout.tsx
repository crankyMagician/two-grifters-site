import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getShow } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const show = getShow();

export const metadata: Metadata = {
  metadataBase: new URL(show.siteUrl),
  title: {
    default: show.title,
    template: `%s · ${show.title}`,
  },
  description: show.description,
  alternates: {
    types: {
      "application/rss+xml": [{ url: show.feedPath, title: show.title }],
    },
  },
  openGraph: {
    siteName: show.title,
    type: "website",
    locale: "en_US",
    images: [{ url: show.art.og, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3b32",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={show.language} className={fraunces.variable}>
      <body>
        <div className="mx-auto max-w-3xl break-words px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
