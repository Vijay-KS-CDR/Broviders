import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import logo from "../assets/logo.png";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles once on mount to avoid hydration mismatch if SSR (not strict here, but good practice)
    const newParticles = [...Array(12)].map(() => ({
      x: `${Math.random() * 100}%`,
      startY: `${Math.random() * 100 + 20}%`,
      endY: `-${Math.random() * 20 + 10}%`,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 1.5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    // Set a timer to hide the loader after 2.5s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Mouse interaction for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xOffset = useTransform(smoothX, [-1, 1], [-10, 10]);
  const yOffset = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    if (!isVisible) return;
    
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible, mouseX, mouseY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAFAF8] overflow-hidden"
        >
          {/* Ambient Background Gradients */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1.1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F97316] blur-[140px] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.1, scale: 1.05 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#F59E0B] blur-[120px] pointer-events-none"
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: p.startY, 
                  x: p.x,
                  opacity: 0,
                  scale: p.scale
                }}
                animate={{ 
                  y: p.endY,
                  opacity: [0, 0.15, 0] 
                }}
                transition={{ 
                  duration: p.duration, 
                  ease: "linear",
                  delay: p.delay,
                }}
                className="absolute w-2 h-2 rounded-full bg-[#F97316] blur-[1px]"
              />
            ))}
          </div>

          {/* Main Logo Container with Parallax */}
          <motion.div
            style={{ x: xOffset, y: yOffset }}
            className="relative flex items-center justify-center w-64 md:w-80 h-32"
          >
            {/* Scene 1: Orange Glow */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(80px)" }}
              animate={{ opacity: 1, filter: "blur(30px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-[#F97316]/30 rounded-full mix-blend-screen pointer-events-none"
            />

            {/* Scene 2 & 4: Logo Scale & Breathing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ 
                opacity: 1, 
                scale: [0.8, 1, 1, 1.02, 1], // Scene 2: 0.8->1, Scene 4: 1->1.02->1
                filter: "blur(0px)" 
              }}
              transition={{ 
                opacity: { delay: 0.8, duration: 0.8, ease: "easeOut" },
                filter: { delay: 0.8, duration: 0.8, ease: "easeOut" },
                scale: { 
                  times: [0, 0.32, 0.88, 0.94, 1], // 0.8s (0.32), 2.2s (0.88), 2.35s (0.94), 2.5s (1)
                  duration: 2.5,
                  ease: "easeInOut"
                }
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* The Actual Logo Image */}
              <img 
                src={logo} 
                alt="Broviders Logo" 
                className="w-full object-contain relative z-10"
              />

              {/* Scene 3: Light Sweep (Polished Metal) */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  WebkitMaskImage: `url(${logo})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${logo})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center"
                }}
              >
                <motion.div
                  initial={{ left: "-150%" }}
                  animate={{ left: "150%" }}
                  transition={{ 
                    delay: 1.6, 
                    duration: 0.6, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-0 bottom-0 w-[150%] skew-x-[-25deg]"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
