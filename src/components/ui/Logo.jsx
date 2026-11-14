export default function Logo({ tone = "auto", className = "" }) {
  const onDark = tone === "dark";

  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 ${
        onDark
          ? "focus-visible:ring-offset-ink-950"
          : "focus-visible:ring-offset-mist dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950"
      } ${className}`}
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-mint-400 shadow-[0_10px_24px_-12px_rgba(87,189,179,0.9)] transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transform-none">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <circle cx="10.5" cy="12.8" r="1.7" fill="#0A2540" />
          <circle cx="21.5" cy="12.8" r="1.7" fill="#0A2540" />
          <path
            d="M10.5 18.8c1.6 2.4 3.5 3.6 5.5 3.6s3.9-1.2 5.5-3.6"
            fill="none"
            stroke="#0A2540"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-body text-[1.4rem] font-bold tracking-tight ${
            onDark ? "text-mist" : "text-ink dark:text-mist"
          }`}
        >
          cute <span className="font-medium italic">lab</span>
        </span>
        <span
          className={`mt-1.5 font-mono text-[0.52rem] uppercase tracking-[0.32em] ${
            onDark ? "text-mist/50" : "text-ink/65 dark:text-mist/55"
          }`}
        >
          try and error
          <span className="sr-only"> — 回到頁首</span>
        </span>
      </span>
    </a>
  );
}
