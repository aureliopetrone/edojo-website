import { HydrateClient } from "~/trpc/server";
import SimpleHeader from "~/app/_components/simple-header";
import SimpleFooter from "~/app/_components/simple-footer";
import RescueLandingSection from "~/app/_components/rescue-landing-section";
import RescueContactSection from "~/app/_components/rescue-contact-section";

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