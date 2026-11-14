import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `to` when scrolled into view. Honours reduced-motion.
 */
export default function Counter({
  to,
  duration = 1700,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const frame = useRef(0);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    started.current = false;
    cancelAnimationFrame(frame.current);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setValue(to);
      return;
    }

    const start = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(to * eased);
        if (progress < 1) {
          frame.current = requestAnimationFrame(tick);
        }
      };

      frame.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
