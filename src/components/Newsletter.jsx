import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import { inputClasses } from "./ui/Field.jsx";
import { Check, Mail } from "./ui/Icons.jsx";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();

    if (!EMAIL_PATTERN.test(value)) {
      setError("請輸入有效的電郵地址。");
      return;
    }

    setError("");
    setStatus("sending");
    timer.current = setTimeout(() => setStatus("success"), 850);
  };

  return (
    <Section
      id="newsletter"
      labelledBy="newsletter-heading"
      className="bg-mist dark:bg-ink-950"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-gradient-to-br from-mint-100 via-white to-sand-100 px-5 py-14 shadow-soft sm:px-10 lg:px-14 dark:border-white/10 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-mint-300/40 blur-3xl dark:bg-mint-400/10" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-sand-300/40 blur-3xl dark:bg-ink-700/40" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-mint-700 dark:text-mint-300">
              [ slow letter // 慢慢信 ]
            </p>
            <h2
              id="newsletter-heading"
              className="mt-5 font-body text-[1.9rem] font-bold leading-[1.3] tracking-tight text-ink sm:text-4xl dark:text-mist"
            >
              每週一封<em className="italic">慢慢信</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.9] text-ink/70 sm:text-base dark:text-mist/65">
              一個五分鐘的小練習、一段值得讀的文字，還有 cute lab
              的最新動態。在星期一早上，安靜地送到你的信箱。
            </p>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="mx-auto mt-8 max-w-md rounded-3xl border border-mint-500/30 bg-white/85 p-6 shadow-soft backdrop-blur dark:border-mint-300/20 dark:bg-ink-900/80"
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-mint-400 text-ink-900">
                  <Check className="h-5 w-5" />
                </span>
                <p className="mt-3 font-body text-base font-bold text-ink dark:text-mist">
                  收到了，謝謝你。
                </p>
                <p className="mt-1 font-mono text-[0.68rem] leading-relaxed text-ink/70 dark:text-mist/60">
                  第一封慢慢信，會在下個星期一早上抵達。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-8 max-w-lg"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1 text-left">
                    <label htmlFor="newsletter-email" className="sr-only">
                      電郵地址
                    </label>
                    <div className="relative">
                      <Mail
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 dark:text-mist/40"
                      />
                      <input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (error) setError("");
                        }}
                        placeholder="you@example.com"
                        aria-invalid={error ? "true" : "false"}
                        aria-describedby={`newsletter-help${error ? " newsletter-error" : ""}`}
                        className={`${inputClasses} pl-11`}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="shrink-0"
                  >
                    {status === "sending" ? "傳送中…" : "訂閱慢慢信"}
                  </Button>
                </div>

                <p
                  id="newsletter-help"
                  className="mt-3 font-mono text-[0.62rem] leading-relaxed tracking-wide text-ink/65 dark:text-mist/50"
                >
                  每週一封，隨時可以取消。我們不會把你的電郵給任何人。
                </p>
                {error && (
                  <p
                    id="newsletter-error"
                    role="alert"
                    className="mt-2 font-mono text-[0.68rem] font-medium text-[#A33B3B] dark:text-[#F3B0B0]"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
