import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section bg-[var(--color-faint)] relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Broviders."
        />

        <div className="space-y-4 mt-16">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-[var(--color-border)] last:border-0 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-xl font-medium text-[var(--color-dark)] pr-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">{item.question}</span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {openIndex === i ? (
                    <Minus size={20} strokeWidth={1.5} />
                  ) : (
                    <Plus size={20} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-8 text-[var(--color-muted)] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
