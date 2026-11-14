import useTheme from "../../hooks/useTheme.js";
import { Moon, Sun } from "./Icons.jsx";

export default function ThemeToggle({ onDark = false, className = "" }) {
  const { isDark, toggle } = useTheme();

  const styled = onDark
    ? "border-white/20 bg-white/5 text-mist hover:border-mint-300/50 hover:bg-white/10 focus-visible:ring-mint-300 focus-visible:ring-offset-ink-950"
    : "border-ink/10 bg-white/70 text-ink hover:border-mint-500/60 hover:bg-mint-100 focus-visible:ring-mint-600 focus-visible:ring-offset-mist dark:border-white/15 dark:bg-white/5 dark:text-mist dark:hover:border-mint-300/50 dark:hover:bg-white/10 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "切換至淺色模式" : "切換至深色模式"}
      title={isDark ? "切換至淺色模式" : "切換至深色模式"}
      className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styled} ${className}`}
    >
      <Sun
        className={`h-[1.1rem] w-[1.1rem] transition-all duration-500 motion-reduce:transition-none ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.1rem] w-[1.1rem] transition-all duration-500 motion-reduce:transition-none ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
