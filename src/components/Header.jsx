import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { mainNav } from "../data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-white/80 backdrop-blur-md border-b border-dark/5 ${
        scrolled ? "shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container-wide relative z-50">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="opacity-100 hover:opacity-80 transition-opacity duration-300 transform scale-110 origin-left">
            <Logo size="xl" showText={true} />
          </div>

          <nav className="hidden md:flex items-center gap-12 lg:gap-16">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-dark/60 hover:text-dark font-medium"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/contact" variant="primary" size="sm" magnetic className="shadow-md shadow-primary/20">
              Contact Us
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-dark/60 hover:text-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-[100px] overflow-y-auto"
          >
            <nav className="container-wide pb-12 flex flex-col gap-2">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.path}
                    className={`block py-4 text-2xl font-medium tracking-tight ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-dark/60 hover:text-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8 mt-4 border-t border-dark/5"
              >
                <Button to="/contact" variant="primary" className="w-full text-center justify-center">
                  Contact Us
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
