import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import Button from "../components/Button";
import { services } from "../data/services";
import { developmentProcess } from "../data/process";
import ContactCTA from "../sections/ContactCTA";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Broviders' full range of software development services — web, mobile, AI, custom software, and more."
      />

      <section className="pt-36 pb-16 bg-[var(--color-faint)] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Our Services"
            title="End-to-End Digital Product Development"
            subtitle="From MVPs to enterprise platforms, we deliver premium software solutions tailored to your business."
            align="left"
          />
        </div>
      </section>

      <section className="pb-24 bg-[var(--color-faint)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.id} variant="fadeUp">
                <div id={service.id} className="scroll-mt-36">
                  <div
                    className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="w-16 h-16 flex items-center justify-center mb-8 text-primary">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-display text-4xl md:text-5xl font-medium text-dark mb-6 tracking-tight">{service.title}</h2>
                      <p className="text-body-lg text-muted leading-relaxed mb-10">{service.description}</p>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-10 border-t border-dark/5 pt-10">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="text-primary mt-0.5 flex-shrink-0"
                            />
                            <span className="text-body text-dark/80">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm font-medium text-muted uppercase tracking-widest mr-4"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <Button to="/contact" variant="primary" magnetic>
                          Get Started
                        </Button>
                        <span className="text-sm text-muted font-medium tracking-wide uppercase">{service.pricing}</span>
                      </div>
                    </div>

                    <div className={`${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative rounded-2xl bg-[#F5F4F1] p-0 min-h-[400px] flex items-center justify-center overflow-hidden group/image shadow-sm border border-[var(--color-border)]">
                        {service.image ? (
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="p-12 text-center relative z-10">
                            <Icon size={120} strokeWidth={1} className="text-dark/5 mx-auto mb-6" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Our Process"
            title="How We Deliver"
            subtitle="Every project follows our proven development process for consistent, high-quality results."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-20">
            {developmentProcess.slice(0, 4).map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="border-t border-dark/10 pt-8">
                  <div className="text-sm font-semibold tracking-widest text-primary mb-4">{step.step}</div>
                  <h3 className="text-2xl font-medium text-dark mb-4">{step.title}</h3>
                  <p className="text-body text-muted leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
