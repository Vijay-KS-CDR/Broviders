import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section bg-[var(--color-faint)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="relative max-w-4xl mx-auto mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative py-8"
            >
              <Quote size={40} className="text-[var(--color-primary)] opacity-20 mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--color-dark)] leading-snug mb-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-dark)]">
                    {testimonials[current].author}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-border-dark)] flex items-center justify-center hover:bg-[var(--color-dark)] hover:text-[var(--color-faint)] hover:border-[var(--color-dark)] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[var(--color-primary)] w-6" : "bg-[var(--color-border-dark)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-border-dark)] flex items-center justify-center hover:bg-[var(--color-dark)] hover:text-[var(--color-faint)] hover:border-[var(--color-dark)] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
