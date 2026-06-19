import logo from "../assets/logo.png";
import { company } from "../data/company";
import { Link } from "react-router-dom";

export default function Logo({ className = "", size = "default", showText = true, dark = false }) {
  const sizes = {
    sm: "h-8",
    default: "h-10",
    lg: "h-12",
    xl: "h-16",
  };

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <img
        src={logo}
        alt={`${company.name} logo`}
        className={`${sizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
      {showText && (
        <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-[var(--color-dark)]"}`}>
          {company.name}
        </span>
      )}
    </Link>
  );
}

export function LogoIcon({ className = "h-10" }) {
  return (
    <img
      src={logo}
      alt={`${company.name} logo`}
      className={`${className} w-auto object-contain`}
    />
  );
}
