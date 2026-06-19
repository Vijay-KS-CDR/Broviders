import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { technologies } from "../data/technologies";

export default function Trust() {
  return (
    <section className="section bg-[var(--color-faint)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="Trusted Technologies"
          subtitle="We build with industry-leading tools and frameworks trusted by the world's best companies."
        />

        <div className="flex flex-wrap justify-center gap-12 mt-20">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-default opacity-60 hover:opacity-100"
            >
              <span className="text-sm font-medium tracking-wider uppercase text-[var(--color-dark)]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
