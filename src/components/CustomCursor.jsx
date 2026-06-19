import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 4 spring configs for the trailing dots
  // Lower stiffness/damping creates a slower follower (longer trail)
  const springConfig1 = { damping: 20, stiffness: 400, mass: 0.5 };
  const springConfig2 = { damping: 25, stiffness: 250, mass: 0.6 };
  const springConfig3 = { damping: 30, stiffness: 150, mass: 0.7 };
  const springConfig4 = { damping: 35, stiffness: 100, mass: 0.8 };

  const smoothX1 = useSpring(cursorX, springConfig1);
  const smoothY1 = useSpring(cursorY, springConfig1);
  const smoothX2 = useSpring(cursorX, springConfig2);
  const smoothY2 = useSpring(cursorY, springConfig2);
  const smoothX3 = useSpring(cursorX, springConfig3);
  const smoothY3 = useSpring(cursorY, springConfig3);
  const smoothX4 = useSpring(cursorX, springConfig4);
  const smoothY4 = useSpring(cursorY, springConfig4);

  useEffect(() => {
    const moveCursor = (e) => {
      // 8px offset to perfectly center the 16x16 wrapper
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  // Dot configurations for the trail
  const dots = [
    { x: smoothX1, y: smoothY1, size: "w-3 h-3", opacity: 1 },
    { x: smoothX2, y: smoothY2, size: "w-2.5 h-2.5", opacity: 0.8 },
    { x: smoothX3, y: smoothY3, size: "w-2 h-2", opacity: 0.6 },
    { x: smoothX4, y: smoothY4, size: "w-1.5 h-1.5", opacity: 0.4 },
  ];

  return (
    <>
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          style={{
            translateX: dot.x,
            translateY: dot.y,
          }}
          className="fixed top-0 left-0 w-4 h-4 flex items-center justify-center pointer-events-none z-[9999] hidden md:flex"
        >
          <motion.div
            className={`rounded-full ${dot.size} shadow-sm shadow-sky-700/30`}
            animate={{
              scale: isHovering ? 2 : 1,
              backgroundColor: isHovering ? "#0369a1" : "#0284c7", // Much darker sky blue (sky-700 / sky-600)
              opacity: isHovering ? dot.opacity * 0.6 : dot.opacity,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      ))}
    </>
  );
}
