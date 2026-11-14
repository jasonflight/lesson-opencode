import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "cutelab-theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme() {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Theme with system-preference detection and a remembered explicit choice.
 * The "dark" class is applied to <html>, which drives Tailwind's class strategy.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => getStoredTheme() ?? getSystemTheme());
  const explicitChoice = useRef(Boolean(getStoredTheme()));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#061829" : "#F2F8F8");
    }
  }, [theme]);

  useEffect(() => {
    if (!explicitChoice.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Storage can be unavailable in private mode — the UI still works. */
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!explicitChoice.current) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    explicitChoice.current = true;
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, isDark: theme === "dark", toggle };
}
