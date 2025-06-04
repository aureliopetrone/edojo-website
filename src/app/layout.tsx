import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TRPCReactProvider } from "~/trpc/react";
import CookieBanner from "~/app/_components/cookie-banner";
import GoogleAnalyticsWrapper from "~/app/_components/google-analytics";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  authors: [{ name: "eDojo" }],
  creator: "eDojo",
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
