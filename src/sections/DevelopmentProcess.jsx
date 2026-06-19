import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { developmentProcess } from "../data/process";

export default function DevelopmentProcess() {
  return (
    <section className="section bg-[var(--color-faint)] relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="relative container-wide">
        <SectionHeader
          label="Process"
          title="From discovery to growth"
          subtitle="A deliberate sequence that reduces risk and produces products built to endure."
          align="left"
        />

        <div className="relative max-w-5xl mx-auto md:ml-12 lg:ml-24 mt-6">
          <div className="absolute left-[0.6875rem] md:left-[1.375rem] top-8 bottom-8 w-px bg-[var(--color-border-dark)]" />

          <div className="space-y-0">
            {developmentProcess.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -32, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-20 py-6 md:py-8 group"
              >
                <div className="absolute left-0 top-[2rem] md:top-[2.25rem] w-[1.375rem] h-[1.375rem] md:w-[2.75rem] md:h-[2.75rem] rounded-full border border-[var(--color-dark)]/20 bg-[var(--color-faint)] flex items-center justify-center group-hover:border-[var(--color-primary)] transition-colors duration-500 z-10 shadow-sm">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-dark)]/30 group-hover:bg-[var(--color-primary)] transition-colors duration-500" />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
                  <div className="lg:w-[40%] shrink-0">
                    <span className="text-label text-[var(--color-primary)] mb-3 block">{step.step}</span>
                    <h3 className="text-display text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--color-dark)] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:w-[60%] pt-1 lg:pt-3">
                    <p className="text-body-lg text-[var(--color-muted)]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
