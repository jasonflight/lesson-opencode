export const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white/80 px-4 py-3 font-body text-sm text-ink shadow-sm transition placeholder:text-ink/45 hover:border-ink/25 focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-400/40 dark:border-white/15 dark:bg-ink-900/70 dark:text-mist dark:placeholder:text-mist/45 dark:hover:border-white/25 dark:focus:border-mint-300 dark:focus:ring-mint-400/30";

export default function Field({
  id,
  label,
  hint,
  error,
  required = false,
  className = "",
  children,
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <label
          htmlFor={id}
          className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ink/70 dark:text-mist/55"
        >
          {label}
          {required && (
            <span className="ml-1 text-mint-700 dark:text-mint-300" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && (
          <span className="font-mono text-[0.6rem] tracking-wide text-ink/65 dark:text-mist/50">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 font-mono text-[0.68rem] font-medium text-[#A33B3B] dark:text-[#F3B0B0]"
        >
          {error}
        </p>
      )}
    </div>
  );
}
