import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// Both are variable fonts: no `weight` array, so the full axis range ships in
// one file and `font-light`/`font-medium` just work. SOFT/WONK are pinned in
// globals.css via font-variation-settings.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
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
      className={`scroll-smooth ${fraunces.variable} ${karla.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
