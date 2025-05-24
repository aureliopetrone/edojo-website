import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import ProjectHeroSection from "~/app/_components/project-hero-section";
import ProjectAiSection from "~/app/_components/project-ai-section";
import ProjectFormSection from "~/app/_components/project-form-section";

export default async function ProgettoGratuito() {
  return (
    <HydrateClient>
      <SimpleHeader />
      <main id="progetto-gratuito" className="min-h-screen">
        <ProjectHeroSection />
        <ProjectAiSection />
        <ProjectFormSection />
      </main>
      <SimpleFooter />
    </HydrateClient>
  );
} 