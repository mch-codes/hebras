import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
      className={`scroll-smooth ${fraunces.variable} ${workSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
