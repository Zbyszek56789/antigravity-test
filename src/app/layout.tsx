import type { Metadata } from "next";
import { Crimson_Text, Oswald, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Text({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ weight: "500", subsets: ["latin"], variable: "--font-doverhouse" });
const playfair = Playfair_Display({ weight: "500", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-tallow" });
const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"], variable: "--font-ledger" });

import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Marginalia Type Co. | Foundry & Archive",
  description: "Excavating forgotten typefaces from historical ephemera.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${crimson.variable} ${oswald.variable} ${playfair.variable} ${spaceMono.variable} font-body antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
