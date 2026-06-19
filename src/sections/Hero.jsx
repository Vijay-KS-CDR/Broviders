import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import TextReveal from "../components/TextReveal";
import { hero } from "../data/home";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[var(--color-faint)]">
      {/* Subtle ambient warm glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[140px] pointer-events-none opacity-50" />

      <motion.div style={{ y, opacity }} className="relative z-10 container-wide pb-12 pt-36 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <span className="text-label text-primary">{hero.eyebrow}</span>
        </motion.div>

        <h1 className="text-display font-medium text-dark max-w-[14ch] md:max-w-[16ch] text-[clamp(3.5rem,8.5vw,7.5rem)] mb-10 md:mb-14 leading-[1.02]">
          <TextReveal text={hero.headline} delay={0.1} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-end max-w-5xl"
        >
          <p className="text-body-lg text-muted max-w-md leading-relaxed">{hero.subheadline}</p>

          <div className="flex items-center gap-6">
            <Button to="/services" variant="ghost" size="lg" className="hidden sm:inline-flex">
              Our capabilities
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="divider mt-12 md:mt-16 origin-left"
        />
      </motion.div>
    </section>
  );
}
