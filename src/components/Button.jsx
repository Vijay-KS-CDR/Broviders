import { motion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  to,
  className = "",
  magnetic = false,
  ...props
}) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic(0.15);

  const variants = {
    primary:
      "bg-[var(--color-dark)] text-[var(--color-dark-surface)] hover:text-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.15)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-[var(--color-dark)] border border-[var(--color-dark)]/10 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/[0.02] hover:-translate-y-0.5 hover:text-[var(--color-primary)]",
    outline:
      "bg-transparent text-[var(--color-dark)] border border-[var(--color-dark)]/10 hover:border-[var(--color-dark)]/30",
    ghost:
      "bg-transparent text-[var(--color-muted)] hover:text-[var(--color-primary)]",
    "outline-light":
      "bg-transparent text-white/80 border border-white/20 hover:border-white/40 hover:text-white",
    link:
      "bg-transparent text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    default: "px-6 py-3 text-sm font-medium tracking-wide",
    lg: "px-8 py-4 text-base font-medium tracking-wide",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-medium rounded-full transition-all duration-500 cursor-pointer",
    variants[variant],
    variant !== "link" && sizes[size],
    className
  );

  const motionProps = magnetic
    ? {
        style: { x: position.x, y: position.y },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        whileTap: { scale: 0.98 },
      }
    : {
        whileTap: { scale: 0.98 },
      };

  if (to) {
    return (
      <motion.div ref={magnetic ? ref : undefined} className="inline-flex" {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={magnetic ? ref : undefined}
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={magnetic ? ref : undefined}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
