import { useEffect, useState } from "react";
import Button from "./ui/Button.jsx";
import Logo from "./ui/Logo.jsx";
import ThemeToggle from "./ui/ThemeToggle.jsx";
import { ArrowRight, Close, Mail, Menu } from "./ui/Icons.jsx";

const links = [
  { href: "#services", label: "心靈支持" },
  { href: "#gallery", label: "陪伴現場" },
  { href: "#stories", label: "同行者的話" },
  { href: "#faq", label: "常見問題" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener?.("change", onChange);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      media.removeEventListener?.("change", onChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const solid = scrolled || open;
  const atTop = !solid;

  const chromeAtTop =
    "border-transparent bg-transparent text-mist";
  const chromeSolid =
    "border-b border-ink/5 bg-mist/90 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/90";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? chromeSolid : chromeAtTop
      }`}
    >
      <nav
        aria-label="主要導覽"
        className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <Logo tone={atTop ? "dark" : "auto"} />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3 py-2 font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 dark:focus-visible:ring-mint-300 ${
                  atTop
                    ? "text-mist/65 hover:bg-white/10 hover:text-mist focus-visible:ring-offset-ink-950"
                    : "text-ink/65 hover:bg-ink/5 hover:text-ink focus-visible:ring-offset-mist dark:text-mist/60 dark:hover:bg-white/10 dark:hover:text-mist dark:focus-visible:ring-offset-ink-950"
                }`}
              >
                <span aria-hidden="true" className="mr-1.5 text-mint-500 dark:text-mint-400">
                  +
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle onDark={atTop} />
          <Button href="#contact" size="sm" variant={atTop ? "onDark" : "primary"} className="hidden sm:inline-flex">
            預約對話
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "關閉選單" : "開啟選單"}
            onClick={() => setOpen((value) => !value)}
            className={`grid h-10 w-10 place-items-center rounded-full border transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 ${
              atTop
                ? "border-white/20 bg-white/5 text-mist"
                : "border-ink/10 bg-white/70 text-ink hover:border-mint-500/50 hover:bg-mint-100 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-mist dark:border-white/15 dark:bg-white/5 dark:text-mist dark:hover:bg-white/10 dark:focus-visible:ring-offset-ink-950"
            } lg:hidden`}
          >
            {open ? (
              <Close className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-ink/10 bg-white/95 p-3 shadow-lift backdrop-blur-xl motion-safe:animate-menu-in dark:border-white/10 dark:bg-ink-900/95">
            <ul className="space-y-0.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 font-body text-[1.05rem] font-medium text-ink transition hover:bg-mint-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 dark:text-mist dark:hover:bg-white/10 dark:focus-visible:ring-mint-300"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-ink/30 dark:text-mist/30" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 border-t border-ink/10 p-2 pt-4 dark:border-white/10">
              <Button
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                預約對話
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <a
                href="mailto:hello@cutelab.hk"
                className="mt-3 flex items-center justify-center gap-2 rounded-full py-2 font-mono text-[0.68rem] tracking-[0.14em] text-ink/70 transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 dark:text-mist/60 dark:hover:text-mist dark:focus-visible:ring-mint-300"
              >
                <Mail className="h-4 w-4" />
                hello@cutelab.hk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
