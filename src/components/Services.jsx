import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import Section from "./ui/Section.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowRight, Check, Heart, Leaf, Sparkle, Users } from "./ui/Icons.jsx";

const services = [
  {
    index: "01",
    icon: Heart,
    title: "一對一傾聽",
    tag: "由這裡開始",
    description:
      "50 分鐘，線上或在中環的小房間。你可以說想說的，也可以什麼都不說，我們會等你準備好。",
    points: [
      "免費 20 分鐘初次對話",
      "廣東話、英語或普通話",
      "視像或面談，由你決定",
    ],
    meta: "50 分鐘 // 每次 HK$480",
    href: "#contact",
  },
  {
    index: "02",
    icon: Users,
    title: "小組陪伴",
    tag: "每週一次",
    description:
      "四至六個人，一起聊聊情緒、界線與自我照顧。在別人的故事裡，往往會意外看見自己的力氣。",
    points: [
      "主題式共學，新手友善",
      "每次 90 分鐘，最多 6 人",
      "由注冊社工協作帶領",
    ],
    meta: "90 分鐘 // 每次 HK$280",
    href: "#contact",
  },
  {
    index: "03",
    icon: Leaf,
    title: "日常微練習",
    tag: "跟著自己的節奏",
    description:
      "五分鐘的呼吸、書寫與身體覺察，把電話放低一陣。不需要連續打卡，也不需要做得完美。",
    points: [
      "每週一封「慢慢信」",
      "免費呼吸與書寫練習",
      "隨時開始，隨時休息",
    ],
    meta: "自由參與 // 免費",
    href: "#newsletter",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      labelledBy="services-heading"
      className="relative bg-white dark:bg-ink-950"
    >
      <SectionHeading
        id="services-heading"
        eyebrow="心靈支持 // our service"
        title="心靈支持，從一個深呼吸開始"
        description="我們不急著替你解決什麼，而是先陪你站穩。三種方式，同一個目標：讓你覺得，自己不是一個人。"
      />

      <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.title}
              delay={index * 90}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-mist/60 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-mint-500/50 hover:shadow-lift motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-mint-300/40">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink transition duration-300 group-hover:border-mint-500/50 group-hover:bg-mint-400 group-hover:text-ink-900 dark:border-white/15 dark:bg-ink-900 dark:text-mint-200 dark:group-hover:border-mint-300/60">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.3em] text-ink/65 dark:text-mist/50">
                    {service.index}
                  </span>
                </div>

                <p className="mt-7 font-mono text-[0.58rem] font-medium uppercase tracking-[0.24em] text-mint-700 dark:text-mint-300">
                  [ {service.tag} ]
                </p>
                <h3 className="mt-2.5 font-body text-[1.4rem] font-bold tracking-tight text-ink dark:text-mist">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.9] text-ink/70 dark:text-mist/65">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[0.82rem] font-medium text-ink/75 dark:text-mist/75"
                    >
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint-100 text-mint-700 dark:bg-mint-400/15 dark:text-mint-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-5 dark:border-white/10">
                  <span className="font-mono text-[0.62rem] tracking-[0.14em] text-ink/65 dark:text-mist/50">
                    [ {service.meta} ]
                  </span>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 -mr-2.5 font-mono text-[0.64rem] font-medium uppercase tracking-[0.14em] text-ink transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-mist dark:text-mist dark:hover:text-mint-300 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950"
                    aria-label={`了解這個方式：${service.title}`}
                  >
                    了解
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-sand-300/60 bg-sand-50 px-5 py-4 sm:flex-row sm:items-center sm:px-6 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-ink/70 dark:text-mist/65">
            <Sparkle className="mt-0.5 h-5 w-5 shrink-0 text-clay-500 dark:text-mint-300" />
            <span>
              心靈支持不是心理治療，也不能取代專業醫療診斷。如果你正在經歷嚴重的情緒困擾，我們可以陪你一起找合適的支援。
            </span>
          </p>
          <a
            href="#faq"
            className="inline-block shrink-0 rounded px-2 py-1 -mx-2 -my-1 font-mono text-[0.64rem] font-medium uppercase tracking-[0.14em] text-ink underline decoration-mint-500 decoration-2 underline-offset-4 transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-600 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 dark:text-mint-200 dark:hover:text-mint-300 dark:focus-visible:ring-mint-300 dark:focus-visible:ring-offset-ink-950"
          >
            了解支援選項
          </a>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-10 flex justify-center lg:hidden">
        <Button href="#contact" size="md">
          開始慢慢好起來
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </Reveal>
    </Section>
  );
}
