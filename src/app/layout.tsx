import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TRPCReactProvider } from "~/trpc/react";
import CookieBanner from "~/app/_components/cookie-banner";
import GoogleAnalyticsWrapper from "~/app/_components/google-analytics";

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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <TRPCReactProvider>
          {children}
          <CookieBanner />
          <GoogleAnalyticsWrapper />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
