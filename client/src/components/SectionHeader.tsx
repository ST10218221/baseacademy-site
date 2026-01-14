interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, alignment = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className={`text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-3 block ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight leading-none ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-foreground ${alignment === "center" ? "mx-auto" : ""} ${light ? "bg-white" : "bg-black"}`} />
    </div>
  );
}
