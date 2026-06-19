import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export function useAnimatedCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || !isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible, startOnView]);

  return [ref, count];
}
