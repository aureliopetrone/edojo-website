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
  metadataBase: new URL("https://edojo.it"),
  alternates: {
    canonical: "https://edojo.it",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "msapplication-TileColor": "#dc2626",
    "msapplication-config": "/browserconfig.xml",
  },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ijpzrzjfythwnd8s.public.blob.vercel-storage.com" />
      </head>
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
