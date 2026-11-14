import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { Star } from "./ui/Icons.jsx";

const stories = [
  {
    quote:
      "第一次去的時候，我坐在梳化上一句話都說不出。她沒有催我，只遞了一杯暖水。原來沉默都可以被接住。",
    name: "阿澄",
    detail: "28 歲 · 設計師 · 一對一傾聽",
    initial: "澄",
  },
  {
    quote:
      "每週三的小組像一個約定，提醒我未必要即刻好起來，但可以準時出現。三個月後，我發現自己開始期待星期三。",
    name: "家朗",
    detail: "34 歲 · 教師 · 小組陪伴",
    initial: "朗",
    featured: true,
  },
  {
    quote:
      "我以為要解決大問題才可以開心。後來發現，每天五分鐘的呼吸，已經足夠讓我在最差的一天，沒有那麼差。",
    name: "小維",
    detail: "22 歲 · 學生 · 日常微練習",
    initial: "維",
  },
];

export default function Testimonials() {
  return (
    <Section id="stories" labelledBy="stories-heading">
      <SectionHeading
        id="stories-heading"
        eyebrow="同行者的話 // stories"
        title="他們都曾經不相信，自己會好起來"
        description="以下分享已獲同行者同意，並以化名及模糊化細節刊登。每個人的節奏都不同，這些只是其中一些片段。"
      />

      <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
        {stories.map((story, index) => (
          <Reveal key={story.name} delay={index * 100} className="h-full">
            <figure
              className={`flex h-full flex-col rounded-[1.75rem] p-7 shadow-soft sm:p-8 ${
                story.featured
                  ? "bg-ink-950 text-mist shadow-lift ring-1 ring-white/10 lg:-translate-y-3"
                  : "border border-ink/10 bg-white text-ink dark:border-white/10 dark:bg-white/[0.04] dark:text-mist"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div
                  className={`flex items-center gap-0.5 ${
                    story.featured
                      ? "text-mint-300"
                      : "text-mint-500 dark:text-mint-300"
                  }`}
                  role="img"
                  aria-label="5 分中的 5 分"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className={`font-body text-5xl italic leading-none ${
                    story.featured
                      ? "text-mint-300/40"
                      : "text-mint-500/25 dark:text-mint-300/20"
                  }`}
                >
                  ”
                </span>
              </div>

              <blockquote
                className={`mt-5 flex-1 font-body text-[1.02rem] italic leading-[2] ${
                  story.featured ? "text-mist/90" : "text-ink/80 dark:text-mist/80"
                }`}
              >
                <p>{story.quote}</p>
              </blockquote>

              <figcaption
                className={`mt-7 border-t pt-5 ${
                  story.featured
                    ? "border-white/15"
                    : "border-ink/10 dark:border-white/10"
                }`}
              >
                <p
                  className={`font-mono text-[0.62rem] font-medium tracking-[0.16em] ${
                    story.featured
                      ? "text-mint-300"
                      : "text-mint-700 dark:text-mint-300"
                  }`}
                >
                  [ {story.name} // {story.detail} ]
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mx-auto mt-9 max-w-2xl text-center font-mono text-[0.62rem] leading-[1.9] tracking-wide text-ink/65 dark:text-mist/50">
          回饋整理自 2024–2026
          年的匿名問卷，平均分 4.9 / 5。每個人的經驗都獨一無二，並不代表每個人都會得到相同結果。
        </p>
      </Reveal>
    </Section>
  );
}
