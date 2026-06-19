import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ContactCTA from "../sections/ContactCTA";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects"
        description="Broviders project portfolio. Case studies and selected work will be published here."
      />

      <section className="bg-[var(--color-faint)] pt-36 md:pt-44 pb-24 relative overflow-hidden min-h-[70vh]">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none opacity-50" />
        
        <div className="container-wide relative z-10">
          <SectionHeader
            label="Work"
            title="Selected projects"
            subtitle="We are preparing case studies from recent engagements. In the meantime, explore our capabilities or start a conversation about your product."
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-xl mt-16"
          >
            <div className="h-px w-full bg-[var(--color-border)] mb-12" />
            <p className="text-body-lg text-[var(--color-muted)] mb-10 leading-relaxed">
              Portfolio pieces will appear here as they become available for public
              release. We prioritize client confidentiality until work is ready to share.
            </p>
            <Button to="/services" variant="primary" magnetic>
              View capabilities
              <ArrowRight size={18} strokeWidth={2} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
