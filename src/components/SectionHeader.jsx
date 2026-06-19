import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({
  label,
  badge,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
  large = false,
}) {
  const sectionLabel = label || badge;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`max-w-2xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {sectionLabel && (
        <p className={`text-label mb-6 ${dark ? "text-white/40" : ""}`}>{sectionLabel}</p>
      )}
      <h2
        className={`text-headline font-semibold mb-6 ${
          large
            ? "text-4xl md:text-5xl lg:text-6xl"
            : "text-3xl md:text-4xl lg:text-[2.75rem]"
        } ${dark ? "text-white" : "text-dark"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-body-lg max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/50" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
