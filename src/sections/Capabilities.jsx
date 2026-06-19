import { motion } from "framer-motion";
import { PenTool, Globe, Smartphone, Blocks, Cpu } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { capabilities } from "../data/home";

const iconMap = {
  "product-design": PenTool,
  "web-applications": Globe,
  "mobile-applications": Smartphone,
  "extensions": Blocks,
  "custom-software": Cpu,
};

export default function Capabilities() {
  return (
    <section className="section bg-[var(--color-faint)] relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky top-32">
            <SectionHeader
              label="Capabilities"
              title="What we build"
              subtitle="We create software experiences engineered for growth — across platforms, industries, and stages of scale."
              className="mb-0"
              align="left"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {capabilities.map((item, i) => {
              const Icon = iconMap[item.id] || Globe;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative py-6 ${i !== 0 ? 'border-t border-[var(--color-border)]' : ''}`}
                >
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="shrink-0 pt-1">
                      <div className="text-[var(--color-primary)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold tracking-widest text-[var(--color-primary)] opacity-70 group-hover:opacity-100 transition-opacity duration-500">{item.number}</span>
                        <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-dark)] tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-body-lg text-[var(--color-muted)] group-hover:text-[var(--color-dark)] transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
