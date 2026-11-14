import { useState } from "react";
import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ChevronDown, Heart, Sparkle } from "./ui/Icons.jsx";

const faqs = [
  {
    question: "我需要準備什麼？",
    answer:
      "不需要。你可以帶著一身疲累來，也可以什麼都不說。如果願意，帶一個最近常想起的畫面就夠了。我們會由你當下的狀態開始。",
  },
  {
    question: "第一次對話會發生什麼事？",
    answer:
      "我們會先花五分鐘互相認識，然後由你決定想聊什麼。沒有評估表，也沒有「應該」要說的話。最後，我們會一起看看哪一種支持方式比較適合你。",
  },
  {
    question: "收費是怎樣的？",
    answer:
      "初次 20 分鐘對話免費。一對一傾聽每次 50 分鐘，港幣 $480；小組陪伴每次 90 分鐘，港幣 $280。全日制學生可申請半價名額，每月名額有限，請在聯絡時告訴我們。",
  },
  {
    question: "我可以只來一次嗎？",
    answer:
      "當然可以。心靈支持不是套餐，也不需要承諾。你隨時可以停下來，或者隔一段時間再回來。準備好再來，永遠都不算遲。",
  },
  {
    question: "我的資料會保密嗎？",
    answer:
      "會。對話內容不會被錄音或轉述，只有在你同意的情況下，我們才會與你選定的專業人士溝通。唯一例外是涉及即時安全風險的情況——我們會先盡力與你一起處理，並在可能範圍內讓你知道。",
  },
  {
    question: "如果我有傷害自己的念頭，怎麼辦？",
    answer:
      "請先確保自己安全，並盡快聯絡可即時支援的熱線：撒瑪利亞防止自殺會 2389 2222（24 小時）、生命熱線 2382 0000，緊急情況請致電 999。cute lab 不是緊急支援服務，但我們可以陪你一起尋找合適的專業協助。",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(0);

  return (
    <Section
      id="faq"
      labelledBy="faq-heading"
      className="bg-white dark:bg-ink-950"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="常見問題 // faq"
            title="有疑問，慢慢問"
            description="關於第一次對話、收費與保密，我們整理了一些最常收到的問題。找不到答案的話，直接寫信給我們就好。"
            align="left"
          />

          <Reveal delay={120} className="mt-8">
            <div className="rounded-[1.75rem] border border-mint-500/30 bg-ink-950 p-6 text-mist shadow-lift sm:p-7">
              <p className="flex items-center gap-2.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.24em] text-mint-300">
                <Heart className="h-4 w-4" />
                即時支援 // crisis line
              </p>
              <h3 className="mt-4 font-body text-lg font-medium">
                如果你現在需要人陪著
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-mist/60">
                cute lab 不是緊急支援服務。若你或身邊的人有即時危險，請致電
                999，或聯絡以下 24 小時熱線。
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {[
                  { name: "撒瑪利亞防止自殺會", tel: "23892222", label: "2389 2222" },
                  { name: "生命熱線", tel: "23820000", label: "2382 0000" },
                  { name: "緊急服務", tel: "999", label: "999" },
                ].map((hotline) => (
                  <li
                    key={hotline.tel}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-xl bg-white/5 px-4 py-2.5"
                  >
                    <span className="text-xs text-mist/55">{hotline.name}</span>
                    <a
                      href={`tel:${hotline.tel}`}
                      className="rounded px-2 py-1 font-mono text-sm font-medium tracking-[0.1em] text-mint-200 underline decoration-mint-400/40 underline-offset-4 transition hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300"
                    >
                      {hotline.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openId === index;
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`rounded-3xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-mint-500/40 bg-mist/60 shadow-soft dark:bg-white/[0.05]"
                      : "border-ink/10 bg-white hover:border-ink/20 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950 sm:px-6 sm:py-5"
                    >
                      <span className="font-body text-[1.02rem] font-medium text-ink dark:text-mist">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
                          isOpen
                            ? "rotate-180 border-mint-500 bg-mint-400 text-ink-900"
                            : "border-ink/15 text-ink/50 dark:border-white/15 dark:text-mist/60"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-[1.95] text-ink/70 sm:px-6 dark:text-mist/65">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex items-center justify-center gap-2 text-center font-mono text-[0.66rem] tracking-[0.1em] text-ink/70 dark:text-mist/55">
          <Sparkle className="h-4 w-4 text-mint-600 dark:text-mint-300" />
          還有其他問題？
          <a
            href="mailto:hello@cutelab.hk"
            className="rounded px-2 py-1 -mx-2 font-semibold text-ink underline decoration-mint-500/50 decoration-2 underline-offset-4 transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 dark:text-mist dark:hover:text-mint-300 dark:focus-visible:ring-mint-300"
          >
            寫信給我們
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
