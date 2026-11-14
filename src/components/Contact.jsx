import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button.jsx";
import Field, { inputClasses } from "./ui/Field.jsx";
import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowRight, Check, Clock, Mail, MapPin, Sparkle } from "./ui/Icons.jsx";

const topics = [
  "一對一傾聽",
  "小組陪伴",
  "日常微練習",
  "工作坊或合作",
  "還不確定，想先聊聊",
];

const details = [
  {
    icon: Mail,
    label: "電郵",
    value: "hello@cutelab.hk",
    href: "mailto:hello@cutelab.hk",
  },
  {
    icon: MapPin,
    label: "對話室",
    value: "中環 · 半山（預約後提供地址）",
  },
  {
    icon: Clock,
    label: "開放時間",
    value: "星期二至六 11:00–20:00",
  },
  {
    icon: Sparkle,
    label: "回覆時間",
    value: "1–2 個工作日內",
  },
];

const initialForm = {
  name: "",
  email: "",
  topic: topics[0],
  message: "",
  consent: false,
  company: "",
};

const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  message: "contact-message",
  consent: "contact-consent",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const update = (key) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = "請留下稱呼，讓我們知道怎樣叫你。";
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "請輸入有效的電郵地址。";
    }
    if (form.message.trim().length < 4) {
      next.message = "可以多寫一點點嗎？一兩句就足夠。";
    }
    if (!form.consent) {
      next.consent = "需要你的同意，我們才可以回覆你。";
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.company) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    const keys = Object.keys(nextErrors);

    if (keys.length > 0) {
      const firstField = document.getElementById(fieldIds[keys[0]]);
      requestAnimationFrame(() => firstField?.focus());
      return;
    }

    setStatus("sending");
    timer.current = setTimeout(() => setStatus("success"), 1000);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
  };

  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="bg-white dark:bg-ink-950"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="say hello // 聯絡我們"
            title="想說說，就寫下來"
            description="不用組織得很好。填幾隻字，或者只留下電郵，我們會在 1–2 個工作日內回覆你。"
            align="left"
          />

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-mist/60 px-4 py-3.5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 bg-white text-ink/70 dark:border-white/15 dark:bg-ink-800 dark:text-mint-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ink/70 dark:text-mist/55">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[0.8rem] font-medium leading-snug text-ink/80 dark:text-mist/80">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="inline-block rounded px-1 py-1 -mx-1 -my-1 underline decoration-mint-500/50 decoration-2 underline-offset-4 transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 dark:hover:text-mint-300 dark:focus-visible:ring-mint-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Reveal delay={120} className="mt-6">
            <div className="rounded-3xl border border-mint-500/25 bg-mint-50 px-5 py-4 dark:border-mint-300/15 dark:bg-mint-400/[0.06]">
              <p className="font-body text-sm font-bold text-ink dark:text-mist">
                你的故事，不是我們的內容。
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/70 dark:text-mist/60">
                表單內容只供預約與聯絡之用，不會用於行銷，也不會在未經同意的情況下公開。你可以隨時要求刪除資料。
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="rounded-[1.75rem] border border-ink/10 bg-mist/60 p-5 shadow-soft sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[26rem] flex-col items-center justify-center px-4 py-10 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-mint-400 text-ink-900 shadow-glow">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-body text-2xl font-medium tracking-tight text-ink dark:text-mist">
                  收到了，謝謝你。
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-[1.9] text-ink/70 dark:text-mist/60">
                  我們會在 1–2
                  個工作日內，用你留下的電郵回覆。如果想補充什麼，隨時再寫給我們。
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetForm}
                  className="mt-6"
                >
                  再寫一封
                </Button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <p className="font-body text-base font-bold text-ink dark:text-mist">
                    預約或留言
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-500/40 px-3 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.2em] text-mint-700 dark:border-mint-400/25 dark:text-mint-300">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-mint-500"
                    />
                    名額有限
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="contact-name"
                    label="稱呼"
                    required
                    error={errors.name}
                  >
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="怎麼稱呼你？"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className={inputClasses}
                    />
                  </Field>

                  <Field
                    id="contact-email"
                    label="電郵"
                    required
                    error={errors.email}
                  >
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={inputClasses}
                    />
                  </Field>
                </div>

                <Field
                  id="contact-topic"
                  label="想聊的方向"
                  hint="選一個最接近的就好"
                  className="mt-4"
                >
                  <select
                    id="contact-topic"
                    name="topic"
                    value={form.topic}
                    onChange={update("topic")}
                    className={`${inputClasses} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A2540' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="contact-message"
                  label="想說的話"
                  hint="可以只寫一句"
                  required
                  className="mt-4"
                  error={errors.message}
                >
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="最近過得怎樣？想找人聊什麼？"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClasses} min-h-[8.5rem] resize-y`}
                  />
                </Field>

                <div className="mt-5">
                  <div className="flex items-start gap-3">
                    <input
                      id="contact-consent"
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={update("consent")}
                      aria-invalid={errors.consent ? "true" : "false"}
                      aria-describedby={
                        errors.consent ? "contact-consent-error" : undefined
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-ink/25 accent-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-mist dark:accent-mint-400 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950"
                    />
                    <label
                      htmlFor="contact-consent"
                      className="text-xs leading-relaxed text-ink/70 dark:text-mist/60"
                    >
                      我同意 cute lab
                      使用以上資料與我聯絡，並理解對話內容會保密處理。
                      <span
                        aria-hidden="true"
                        className="ml-1 text-mint-700 dark:text-mint-300"
                      >
                        *
                      </span>
                    </label>
                  </div>
                  {errors.consent && (
                    <p
                      id="contact-consent-error"
                      role="alert"
                      className="mt-2 font-mono text-[0.68rem] font-medium text-[#A33B3B] dark:text-[#F3B0B0]"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="contact-company">公司</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="mt-6 w-full"
                >
                  {status === "sending" ? "傳送中…" : "送出，等我們回覆你"}
                  {status !== "sending" && <ArrowRight className="h-4 w-4" />}
                </Button>

                <p className="mt-3 text-center font-mono text-[0.62rem] leading-relaxed tracking-wide text-ink/65 dark:text-mist/50">
                  送出後會顯示確認訊息，不會即時扣款或自動預約。
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
