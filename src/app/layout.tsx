import "~/styles/globals.css";

import { type Metadata } from "next";
import { Nunito } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "eDojo - Cultura Digitale per il Business",
  description: "Accompagniamo le aziende nel percorso di trasformazione digitale con metodologie consolidate e tecnologie innovative. Consulenza, sviluppo e supporto per la crescita digitale.",
  keywords: "trasformazione digitale, consulenza tecnologica, sviluppo software, innovazione aziendale, cultura digitale, metodologie agili, business intelligence",
  authors: [{ name: "eDojo" }],
  creator: "eDojo",
  openGraph: {
    title: "eDojo - Intelligenza Artificiale Accessibile per PMI",
    description: "Democratizziamo l'accesso all'AI per le piccole imprese. Soluzioni pratiche, convenienti e immediate per far crescere il tuo business.",
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${nunito.variable}`}>
      <body className="font-sans">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
