import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Fraunces is variable, so no weight list — every value 100–900 is available to
// the `font-*` utilities. opsz is requested explicitly: without it next/font
// pins the axis, and the browser's default `font-optical-sizing: auto` is what
// makes the wordmark at 8rem a different drawing from body copy at 1rem, which
// is most of why this face works as display type. Real italics ship too — the
// pull quotes and the hero line lean on them at large sizes.
// ponytail: SOFT and WONK left at their defaults. Request them here if a
// heading ever wants the soft terminals or the swash descenders.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
      className={`scroll-smooth ${fraunces.variable} ${workSans.variable}`}
    >
      <body>
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
