const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-mono font-medium uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-mist disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950";

const variants = {
  primary:
    "bg-mint-400 text-ink-900 shadow-[0_16px_34px_-16px_rgba(87,189,179,0.95)] hover:-translate-y-0.5 hover:bg-mint-300 hover:shadow-[0_22px_44px_-18px_rgba(87,189,179,0.9)] active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none",
  dark: "bg-ink-900 text-mist shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none dark:bg-mint-400 dark:text-ink-900 dark:hover:bg-mint-300",
  outline:
    "border border-ink/25 bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink/50 hover:bg-ink/5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none dark:border-mist/30 dark:text-mist dark:hover:border-mint-300/60 dark:hover:bg-white/5",
  onMint:
    "bg-ink-900 text-mist hover:bg-ink-800 dark:bg-ink-900 dark:text-mist dark:hover:bg-ink-800",
  soft: "bg-ink/5 text-ink hover:bg-ink/10 dark:bg-white/10 dark:text-mist dark:hover:bg-white/15",
  onDark:
    "border border-white/25 bg-white/5 text-mist backdrop-blur hover:-translate-y-0.5 hover:border-mint-300/60 hover:bg-white/10 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none",
};

const sizes = {
  sm: "px-4 py-2 text-[0.64rem]",
  md: "px-5 py-2.5 text-[0.7rem]",
  lg: "px-7 py-3.5 text-[0.78rem]",
};

/**
 * Mono pill button that renders as <a> when href is present, otherwise <button>.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const Tag = href ? "a" : "button";
  const type = href ? undefined : props.type ?? "button";

  return (
    <Tag
      href={href}
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
