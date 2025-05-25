import { HydrateClient } from "~/trpc/server";
import Header from "~/app/_components/header";
import HeroSection from "~/app/_components/hero-section";
import AboutSection from "~/app/_components/about-section";
import ProcessSection from "~/app/_components/process-section";
import InCorsaSection from "~/app/_components/in-corsa-section";
import BlogSection from "~/app/_components/blog-section";
import ContactSection from "~/app/_components/contact-section";
import Footer from "~/app/_components/footer";

export default async function Home() {
  return (
    <HydrateClient>
      <Header />
      <main id="home" className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <InCorsaSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
    </HydrateClient>
  );
}
