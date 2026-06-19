import { Target, Eye, Heart } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { aboutContent } from "../data/about";
import ContactCTA from "../sections/ContactCTA";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Broviders — a premium software product studio building modern digital products for businesses, startups, and organizations."
      />

      <section className="pt-36 pb-16 bg-[var(--color-faint)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <SectionHeader
            badge="About Us"
            title="Building the Future, One Product at a Time"
            subtitle="We're a team of passionate developers, designers, and strategists dedicated to creating software that makes a difference."
            align="left"
          />
        </div>
      </section>

      <section className="pb-24 bg-[var(--color-faint)] relative z-10 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl pt-12">
              <h2 className="text-display text-2xl md:text-4xl font-medium text-[var(--color-dark)] mb-8">
                {aboutContent.story.title}
              </h2>
              <p className="text-[var(--color-muted)] text-xl leading-relaxed">
                {aboutContent.story.content}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-dark-surface)] relative z-10 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            {[
              { icon: Target, ...aboutContent.mission },
              { icon: Eye, ...aboutContent.vision },
              { icon: Heart, ...aboutContent.whyWeExist },
            ].map(({ icon: Icon, title, content }) => (
              <ScrollReveal key={title}>
                <div className="h-full group">
                  <div className="text-[var(--color-primary)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium text-[var(--color-dark)] mb-4 tracking-tight">{title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed text-body-lg">{content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-faint)] relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide every project we take on."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-20">
            {aboutContent.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full border-t border-[var(--color-border)] pt-8 group">
                  <h3 className="text-xl font-medium text-[var(--color-dark)] mb-4">{value.title}</h3>
                  <p className="text-[var(--color-muted)] text-body-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-dark-surface)] relative z-10 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="Company Timeline"
            subtitle="From humble beginnings to a growing software product studio."
          />
          <div className="relative max-w-3xl mx-auto mt-20">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[var(--color-border-dark)]" />
            {aboutContent.timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="relative pl-16 pb-16 last:pb-0">
                  <div className="absolute left-[11px] top-[7px] w-[9px] h-[9px] rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-dark-surface)]" />
                  <span className="text-sm font-semibold text-[var(--color-primary)] tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-display text-2xl font-medium text-[var(--color-dark)] mt-2 mb-4">{item.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed text-body-lg">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-faint)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Looking Ahead"
            title="Future Goals"
            subtitle="Where we're headed next."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-4xl mx-auto mt-20">
            {aboutContent.futureGoals.map((goal) => (
              <StaggerItem key={goal}>
                <div className="flex items-start gap-5 pt-6 border-t border-[var(--color-border)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--color-dark)]/80 leading-relaxed text-body-lg">{goal}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
