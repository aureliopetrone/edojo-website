import { HydrateClient } from "~/trpc/server";
import Header from "~/app/_components/header";
import HeroSection from "~/app/_components/hero-section";
import AboutSection from "~/app/_components/about-section";
import ClientsSection from "~/app/_components/clients-section";
import TeamSection from "~/app/_components/team-section";

import ContactSection from "~/app/_components/contact-section";
import Footer from "~/app/_components/footer";
import StructuredData from "~/app/_components/structured-data";
import { companyInfo } from "~/config/company-info";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: companyInfo.pageMetadata.home.title,
  description: companyInfo.pageMetadata.home.description,
  keywords: companyInfo.pageMetadata.home.keywords,
  openGraph: {
    title: companyInfo.pageMetadata.home.title,
    description: companyInfo.pageMetadata.home.description,
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
};

export default async function Home() {
  return (
    <HydrateClient>
      <StructuredData 
        type="organization"
      />
      <StructuredData 
        type="webpage"
        title={companyInfo.pageMetadata.home.title}
        description={companyInfo.pageMetadata.home.description}
        url={companyInfo.baseUrl}
      />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <TeamSection />
        {/* <ProcessSection /> */}
        <ContactSection />
        <Footer />
      </main>
    </HydrateClient>
  );
}
