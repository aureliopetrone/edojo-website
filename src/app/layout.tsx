import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TRPCReactProvider } from "~/trpc/react";
import CookieBanner from "~/app/_components/cookie-banner";
import GoogleAnalyticsWrapper from "~/app/_components/google-analytics";

export const metadata: Metadata = {
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  manifest: "/site.webmanifest",
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
