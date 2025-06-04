import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import AiGenerativeSection from "~/app/_components/ai-generative-section";
import AiReinforcementLearningSection from "~/app/_components/ai-reinforcement-learning-section";
import AiComputerVisionSection from "~/app/_components/ai-computer-vision-section";
import AiNlpSection from "~/app/_components/ai-nlp-section";
import AiContactSection from "~/app/_components/ai-contact-section";
import { companyInfo } from "~/config/company-info";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: companyInfo.pageMetadata.aiGenerativa.title,
  description: companyInfo.pageMetadata.aiGenerativa.description,
  keywords: companyInfo.pageMetadata.aiGenerativa.keywords,
  openGraph: {
    title: companyInfo.pageMetadata.aiGenerativa.title,
    description: companyInfo.pageMetadata.aiGenerativa.description,
    type: "website",
    locale: "it_IT",
    siteName: "eDojo",
  },
};

export default async function AiGenerativa() {
  return (
    <HydrateClient>
      <SimpleHeader />
      <main id="ai-generativa" className="min-h-screen">
        <AiGenerativeSection />
        <AiReinforcementLearningSection />
        <AiComputerVisionSection />
        <AiNlpSection />
        <AiContactSection />
      </main>
      <SimpleFooter />
    </HydrateClient>
  );
} 