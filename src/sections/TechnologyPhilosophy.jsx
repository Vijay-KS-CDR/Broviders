import { motion } from "framer-motion";
import { Star, Zap, Key, Lock } from "lucide-react";
import { technologyPhilosophy } from "../data/home";

const iconMap = {
  "Proven over trendy": Star,
  "Performance as a feature": Zap,
  "Ownership by design": Key,
  "Security from the start": Lock,
};

export default function TechnologyPhilosophy() {
  const { headline, intro, principles } = technologyPhilosophy;

  return (
    <section className="section bg-[var(--color-dark-surface)] relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="absolute inset-0 pointer-events-none bg-[url('/noise.png')] opacity-[0.01] mix-blend-multiply" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-primary)]">Philosophy</span>
            </div>
            <h2 className="text-headline text-3xl md:text-5xl font-medium text-[var(--color-dark)] mb-8 leading-[1.1]">
              {headline}
            </h2>
            <p className="text-body-lg text-[var(--color-muted)] max-w-md">{intro}</p>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-0 border-t border-[var(--color-border)]">
              {principles.map((principle, i) => {
                const Icon = iconMap[principle.title] || Star;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative py-6 md:py-8 border-b border-[var(--color-border)] transition-all duration-500"
                  >
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      <div className="shrink-0 pt-1">
                        <div className="text-[var(--color-primary)] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-display text-4xl text-[var(--color-border-dark)] group-hover:text-[var(--color-primary)]/20 transition-colors duration-500 font-medium">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-dark)] tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-500">
                            {principle.title}
                          </h3>
                        </div>
                        <p className="text-body-lg text-[var(--color-muted)] group-hover:text-[var(--color-dark)] transition-colors duration-500">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
