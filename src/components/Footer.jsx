import Button from "./ui/Button.jsx";
import Logo from "./ui/Logo.jsx";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Mail,
} from "./ui/Icons.jsx";

const exploreLinks = [
  { href: "#services", label: "心靈支持" },
  { href: "#gallery", label: "陪伴現場" },
  { href: "#stories", label: "同行者的話" },
  { href: "#faq", label: "常見問題" },
];

const supportLinks = [
  { href: "#contact", label: "預約對話" },
  { href: "#newsletter", label: "訂閱慢慢信" },
  { href: "mailto:hello@cutelab.hk", label: "寫信給我們", external: true },
  { href: "#top", label: "回到頁首" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-mint-400/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-clay-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="pb-14 pt-16 text-center sm:pt-20">
          <svg
            aria-hidden="true"
            viewBox="0 0 600 110"
            className="mx-auto h-auto w-full max-w-4xl"
            role="presentation"
            focusable="false"
          >
            <text
              x="300"
              y="88"
              textAnchor="middle"
              fontSize="88"
              fontStyle="italic"
              fill="#F2F8F8"
              fillOpacity="0.07"
              style={{ fontFamily: "Lora, 'Noto Serif TC', serif" }}
            >
              cute lab
            </text>
          </svg>
          <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-mint-300/80">
            happy in the world
          </p>
        </div>

        <div className="pb-14 sm:pb-16">
          <div className="flex flex-col gap-7 rounded-[2.5rem] bg-mint-400 p-7 text-ink-900 shadow-lift sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-ink-900/75">
                [ ready when you are ]
              </p>
              <h2 className="mt-3 font-body text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-[2.1rem]">
                心情低落的時候，記得還有這裡。
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-900/75 lg:mx-0">
                免費 20
                分鐘，不用準備，也不用想清楚要說什麼。試一試，也是一種前進。
              </p>
            </div>
            <Button
              href="#contact"
              size="lg"
              variant="onMint"
              className="w-full shrink-0 sm:w-auto"
            >
              預約對話
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs font-body text-sm leading-[1.9] text-mist/60">
              cute lab
              是一個以人為本的心靈支持空間。我們相信，try and error
              都可以，慢慢來都可以。
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.instagram.com/cutelab.hk"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="cute lab 的 Instagram（另開新視窗）"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-mist/70 transition hover:-translate-y-0.5 hover:border-mint-300/50 hover:bg-white/10 hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 motion-reduce:transform-none"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@cutelab.hk"
                aria-label="電郵 hello@cutelab.hk"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-mist/70 transition hover:-translate-y-0.5 hover:border-mint-300/50 hover:bg-white/10 hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 motion-reduce:transform-none"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="探索 cute lab">
            <h2 className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-mist/55">
              [ 探索 ]
            </h2>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block rounded px-1 py-1 -mx-1 -my-1 text-sm text-mist/65 transition hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="支援與聯絡">
            <h2 className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-mist/55">
              [ 支援 ]
            </h2>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded px-1 py-1 -mx-1 -my-1 text-sm text-mist/65 transition hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
                  >
                    {link.label}
                    {link.external && (
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-mist/55">
              [ 聯絡 ]
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-mist/65">
              <li>
                <a
                  href="mailto:hello@cutelab.hk"
                  className="inline-block rounded px-1 py-1 -mx-1 -my-1 transition hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
                >
                  hello@cutelab.hk
                </a>
              </li>
              <li>中環 · 半山</li>
            </ul>
            <p className="mt-4 font-mono text-[0.62rem] leading-[2] tracking-[0.12em] text-mist/50">
              [ OPEN // TUE — SAT ]
              <br />
              11:00 — 20:00
              <br />
              公眾假期休息
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded px-2 py-1 -mx-2 -my-1 font-mono text-[0.64rem] font-medium uppercase tracking-[0.16em] text-mint-200 underline decoration-mint-400/40 decoration-2 underline-offset-4 transition hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
            >
              預約對話
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-mono text-[0.64rem] leading-[1.9] tracking-wide text-mist/55">
          <span className="font-medium text-mist/80">
            如果你有即時危險，請致電 999。
          </span>{" "}
          24 小時情緒支援：撒瑪利亞防止自殺會 2389 2222 · 生命熱線 2382
          0000。cute lab 不提供緊急支援服務。
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 py-6 font-mono text-[0.62rem] tracking-[0.12em] text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} cute lab · try and error, happy in the world</p>
          <div className="flex items-center gap-4">
            <span>以溫柔與耐心製作</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-medium text-mist/60 transition hover:border-mint-300/40 hover:text-mint-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
            >
              回到頂部
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
