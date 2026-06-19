import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section bg-[var(--color-faint)] relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Real products we've built for real businesses. Each project tells a story of innovation and impact."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <StaggerItem key={project.id}>
              <Link
                to="/projects"
                className={`group block transition-all duration-500 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-8 md:p-12 mb-6 border border-transparent group-hover:border-[var(--color-primary)]/20 ${
                    i === 0 ? "min-h-[320px]" : "min-h-[240px]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[var(--color-dark)]/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-8">
                      <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                        {project.category}
                      </span>
                      <ArrowUpRight
                        size={24}
                        className="text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-2xl text-[var(--color-dark)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-body-lg mb-6 max-w-2xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-[var(--color-border-dark)] text-[var(--color-muted)] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
