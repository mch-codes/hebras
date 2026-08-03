import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Cormorant Garamond isn't variable on Google Fonts, so the weights are listed
// explicitly — 300 for the display headings, 400 for everything else. Real
// italics ship too: the pull quotes and the hero subtitle lean on them at large
// sizes, where a synthesised oblique looks cheap.
// ponytail: add 500/600 here if a heading ever needs more weight.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const title = "Hebras — crochet artesanal";
const description =
  "Bolsos tejidos a crochet — para mujeres que valoran lo hecho a mano, lo sostenible y lo auténtico.";

export const metadata: Metadata = {
  // ponytail: hardcoded — swap if the site moves off this domain. Link previews
  // need absolute URLs, and a static export has no request to infer the host from.
  metadataBase: new URL("https://hebras-lemon.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    siteName: "Hebras",
    images: [
      // The hero shot, cropped landscape — link cards are ~1.9:1 and would
      // otherwise slice the bag out of the portrait original.
      { url: "/og.jpg", width: 855, height: 448, alt: title },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
