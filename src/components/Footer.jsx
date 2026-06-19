import { Link } from "react-router-dom";
import Logo from "./Logo";
import { company } from "../data/company";
import { footerNav } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white relative overflow-hidden border-t border-[var(--color-border-dark)]">
      {/* Premium Ambient Background for Footer */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="ambient-light ambient-primary w-[50vw] h-[50vw] bottom-[-20%] right-[-10%] opacity-5 pointer-events-none" />

      <div className="container-wide py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="opacity-100 hover:opacity-80 transition-opacity duration-300 transform scale-110 origin-left mb-6">
              <Logo size="xl" showText={true} dark={true} />
            </div>
            <p className="text-body-lg text-white/60 max-w-sm leading-relaxed">
              {company.tagline}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-label text-primary mb-8 tracking-widest">Company</p>
            <ul className="space-y-5">
              {footerNav.company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-label text-white/40 mb-8 tracking-widest">Services</p>
            <ul className="space-y-5">
              {footerNav.services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/60">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
