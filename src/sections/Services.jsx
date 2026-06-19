import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { services } from "../data/services";

export default function Services() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Services Built for Growth"
          subtitle="From concept to launch, we deliver end-to-end digital product development tailored to your business needs."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group relative p-8 rounded-2xl bg-white border border-dark/5 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
