import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { cta } from "../data/home";
import { company } from "../data/company";

export default function ContactCTA() {
  const email = company.email || cta.secondary;

  return (
    <section className="section bg-[var(--color-faint)] relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="h-px w-24 bg-[var(--color-border-dark)] mb-12" />
          <h2 className="text-display font-medium text-[var(--color-dark)] text-[clamp(3.5rem,7vw,6rem)] mb-10 max-w-[14ch] leading-[1.02]">
            {cta.headline}
          </h2>
          <p className="text-body-lg text-[var(--color-muted)] mb-16 max-w-md">{cta.subheadline}</p>

          <div className="flex flex-col items-center gap-8">
            <Button to="/contact" variant="primary" size="lg" magnetic className="px-12 py-5 text-lg">
              {cta.primary}
              <ArrowRight size={20} strokeWidth={1.5} className="ml-2" />
            </Button>
            {email && (
              <a
                href={company.email ? `mailto:${company.email}` : undefined}
                className="text-sm font-medium tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-300 uppercase"
              >
                {email}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
