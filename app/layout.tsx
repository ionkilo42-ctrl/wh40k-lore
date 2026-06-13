import type { Metadata, Viewport } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SearchCommand } from "@/components/layout/SearchCommand";
import { Sidebar } from "@/components/layout/Sidebar";
import { buildSearchDocuments } from "@/lib/search-data";

import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wh40k-lore.example.com"),
  title: {
    default: "WH40K Lore | There Is Only War",
    template: "%s | WH40K Lore",
  },
  description: "An immersive, non-commercial guide to the cosmology, factions, history, and wars of Warhammer 40,000.",
  keywords: ["Warhammer 40,000", "40k lore", "Horus Heresy", "Imperium", "Primarchs"],
  openGraph: {
    title: "WH40K Lore | There Is Only War",
    description: "Enter a guided archive of the 41st millennium.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchDocuments = buildSearchDocuments();

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cinzel.variable} ${sourceSans.variable}`}>
      <body>
        <Navbar />
        <Sidebar />
        <SearchCommand documents={searchDocuments} />
        <div className="flex min-h-screen flex-col pt-16 lg:pt-[72px] xl:pl-64">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
