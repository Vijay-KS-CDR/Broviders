import { motion } from "framer-motion";
import { Layers, TrendingUp, Heart, Target, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { whyBroviders } from "../data/home";

const iconMap = {
  "Modern Architecture": Layers,
  "Long-Term Scalability": TrendingUp,
  "User Experience": Heart,
  "Business Impact": Target,
  "Maintainability": ShieldCheck,
};

export default function WhyBroviders() {
  return (
    <section className="section bg-[var(--color-dark-surface)] text-[var(--color-dark)] relative overflow-hidden">
      <div className="container-wide relative z-10">
        <SectionHeader
          badge="Approach"
          title="Why Broviders"
          subtitle="We partner with organizations that treat software as a long-term asset — not a one-time deliverable."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-6 items-start">
          <StaggerContainer className="flex flex-col">
            {whyBroviders.map((item, index) => {
              const Icon = iconMap[item.title] || Layers;
              return (
                <StaggerItem key={item.title}>
                  <div className={`flex items-start gap-6 py-4 md:py-6 ${index !== 0 ? 'border-t border-[var(--color-border)]' : ''}`}>
                    <div className="flex-shrink-0 mt-1 text-[var(--color-primary)]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-[var(--color-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal variant="slideRight" className="lg:pl-12 lg:sticky lg:top-32">
            <div className="relative rounded-2xl bg-[var(--color-dark-elevated)] p-12 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-10">What You Get</h3>
                <ul className="space-y-6">
                  {[
                    "Direct access to senior developers",
                    "Transparent pricing & timeline",
                    "Modern, scalable tech stack",
                    "Full source code ownership",
                    "Post-launch support & maintenance",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-4 text-[var(--color-muted)]">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                      <span className="text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
