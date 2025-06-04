import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import PrototypingLandingSection from "~/app/_components/prototyping-landing-section";
import PrototypingServicesSection from "~/app/_components/prototyping-services-section";
import PrototypingContactSection from "~/app/_components/prototyping-contact-section";
import { companyInfo } from "~/config/company-info";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: companyInfo.pageMetadata.prototipazione.title,
  description: companyInfo.pageMetadata.prototipazione.description,
  keywords: companyInfo.pageMetadata.prototipazione.keywords,
  openGraph: {
    title: companyInfo.pageMetadata.prototipazione.title,
    description: companyInfo.pageMetadata.prototipazione.description,
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
};

export default async function Prototipazione() {
  return (
    <HydrateClient>
      <SimpleHeader />
      <main id="prototipazione" className="min-h-screen">
        <PrototypingLandingSection />
        <PrototypingServicesSection />
        <PrototypingContactSection />
      </main>
      <SimpleFooter />
    </HydrateClient>
  );
} 