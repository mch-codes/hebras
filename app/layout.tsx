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

export const metadata: Metadata = {
  title: "Hebras — crochet artesanal",
  description:
    "Bolsos tejidos a crochet — para mujeres que valoran lo hecho a mano, lo sostenible y lo auténtico.",
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
