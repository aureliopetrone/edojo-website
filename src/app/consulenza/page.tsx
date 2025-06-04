import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import ConsulenzaLandingSection from "~/app/_components/consulenza-landing-section";
import ConsulenzaServicesSection from "~/app/_components/consulenza-services-section";
import ConsulenzaTeamSection from "~/app/_components/consulenza-team-section";
import ConsulenzaContactSection from "~/app/_components/consulenza-contact-section";
import { companyInfo } from "~/config/company-info";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: companyInfo.pageMetadata.consulenza.title,
  description: companyInfo.pageMetadata.consulenza.description,
  keywords: companyInfo.pageMetadata.consulenza.keywords,
  openGraph: {
    title: companyInfo.pageMetadata.consulenza.title,
    description: companyInfo.pageMetadata.consulenza.description,
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
};

export default async function Consulenza() {
  return (
    <HydrateClient>
      <SimpleHeader />
      <main id="consulenza" className="min-h-screen">
        <ConsulenzaLandingSection />
        <ConsulenzaServicesSection />
        <ConsulenzaTeamSection />
        <ConsulenzaContactSection />
      </main>
      <SimpleFooter />
    </HydrateClient>
  );
} 