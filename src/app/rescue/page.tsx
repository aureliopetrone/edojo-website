import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import RescueLandingSection from "~/app/_components/rescue-landing-section";
import RescueContactSection from "~/app/_components/rescue-contact-section";
import { companyInfo } from "~/config/company-info";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: companyInfo.pageMetadata.rescue.title,
  description: companyInfo.pageMetadata.rescue.description,
  keywords: companyInfo.pageMetadata.rescue.keywords,
  openGraph: {
    title: companyInfo.pageMetadata.rescue.title,
    description: companyInfo.pageMetadata.rescue.description,
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
};

export default async function Rescue() {
  return (
    <HydrateClient>
      <SimpleHeader />
      <main id="rescue" className="min-h-screen">
        <RescueLandingSection />
        <RescueContactSection />
      </main>
      <SimpleFooter />
    </HydrateClient>
  );
} 