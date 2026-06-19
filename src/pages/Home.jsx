import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import Capabilities from "../sections/Capabilities";
import WhyBroviders from "../sections/WhyBroviders";
import TechnologyPhilosophy from "../sections/TechnologyPhilosophy";
import DevelopmentProcess from "../sections/DevelopmentProcess";
import ContactCTA from "../sections/ContactCTA";
import { hero } from "../data/home";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <SEO
        title="Broviders — Building Ideas. Delivering Success."
        description={hero.subheadline}
      />
      <Hero />
      <Capabilities />
      <WhyBroviders />
      <TechnologyPhilosophy />
      <DevelopmentProcess />
      <ContactCTA />
    </main>
  );
}
