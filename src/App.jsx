import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function ScrollWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1.2,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollWrapper>
        <Loader />
        <CustomCursor />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ScrollWrapper>
    </BrowserRouter>
  );
}
