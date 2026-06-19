import { motion } from "framer-motion";

const easeTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...easeTransition, delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: easeTransition },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: easeTransition },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: easeTransition },
};

const slideRight = {
  hidden: { opacity: 0, x: 30, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: easeTransition },
};

const variants = { fadeUp, fadeIn, scaleIn, slideLeft, slideRight };

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  once = true,
  custom,
}) {
  const selectedVariant = variants[variant] || fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={selectedVariant}
      custom={custom ?? delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.15 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: easeTransition
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
