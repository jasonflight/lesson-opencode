import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowUpRight } from "./ui/Icons.jsx";

const works = [
  {
    index: "001",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    alt: "晨光下，一位女士在水邊靜坐",
    title: "靜心工作坊 · 天台",
    meta: "2025 秋 // 中環",
    note: "十二個人，一張張瑜伽墊，一起把城市的聲音聽成背景。",
  },
  {
    index: "002",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    alt: "安靜的對話室，桌上放著一杯熱茶",
    title: "一對一對話室",
    meta: "星期二至六 // 半山",
    note: "一張梳化、一盒紙巾、一杯暖水。沒有時鐘，只有你的節奏。",
  },
  {
    index: "003",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "一群人圍坐在一起，輕鬆地交流",
    title: "社區共學日",
    meta: "2025 夏 // 深水埗",
    note: "我們在社區中心談界線，也談怎樣開口求助。",
  },
  {
    index: "004",
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    alt: "陽光下的草原，一個人在戶外安靜散步",
    title: "城市散步練習",
    meta: "每月一次 // 港島徑",
    note: "不追趕進度，只練習把注意力放回腳步與呼吸。",
  },
  {
    index: "005",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    alt: "柔和光線下的花與植物",
    title: "季節與手寫",
    meta: "線上練習 // 隨時加入",
    note: "每星期一個小提示，配一頁手寫練習，寫給半年後的自己。",
  },
  {
    index: "006",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    alt: "陽光穿過森林，落在安靜的小徑上",
    title: "給自己的安靜時刻",
    meta: "慢慢信 // 每週一",
    note: "不用回覆，也不用交功課。只是提醒你，可以慢一點。",
  },
];

export default function Portfolio() {
  return (
    <Section
      id="gallery"
      labelledBy="gallery-heading"
      className="bg-sand-50 dark:bg-ink-900/30"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="gallery-heading"
          eyebrow="陪伴現場 // portfolio"
          title="溫柔，是看得見的"
          description="從天台的靜心工作坊，到深夜的線上小組——這些是我們一起待過的地方。"
          align="left"
          className="sm:max-w-2xl"
        />
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/20 bg-white/60 px-4 py-2.5 font-mono text-[0.64rem] font-medium uppercase tracking-[0.16em] text-ink transition hover:-translate-y-0.5 hover:border-mint-500/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 motion-reduce:transform-none sm:self-auto dark:border-white/15 dark:bg-white/5 dark:text-mist dark:hover:bg-white/10 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950"
        >
          合作或共學邀約
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-12 grid gap-5 pb-0 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:pb-10">
        {works.map((work, index) => (
          <Reveal
            key={work.title}
            delay={(index % 3) * 90}
            className={index % 3 === 1 ? "lg:mt-10" : ""}
          >
            <figure className="group relative overflow-hidden rounded-[1.75rem] bg-ink/5 shadow-soft ring-1 ring-ink/5 dark:bg-white/5 dark:ring-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  width="900"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                />
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-ink-950/45 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.24em] text-white/80 backdrop-blur-sm">
                {work.index}
              </span>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-mono text-[0.58rem] font-medium uppercase tracking-[0.22em] text-mint-300">
                  [ {work.meta} ]
                </p>
                <h3 className="mt-2 font-body text-xl font-medium italic tracking-tight text-white sm:text-[1.35rem]">
                  {work.title}
                </h3>
                <p className="mt-1.5 max-w-xs font-body text-xs leading-relaxed text-white/80">
                  {work.note}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-2 font-mono text-[0.62rem] leading-relaxed tracking-wide text-ink/65 sm:mt-0 dark:text-mist/50">
          所有活動照片均於參加者同意下拍攝及刊出，並以不辨識個人身分的方式處理。
        </p>
      </Reveal>
    </Section>
  );
}
