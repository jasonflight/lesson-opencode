import Button from "./ui/Button.jsx";
import Counter from "./ui/Counter.jsx";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./ui/Icons.jsx";

const stats = [
  { value: 1200, suffix: "+", label: "陪伴時數" },
  { value: 480, suffix: "+", label: "同行者" },
  { value: 12, suffix: " 場", label: "社區工作坊" },
  { value: 4.9, suffix: " / 5", label: "平均回饋", decimals: 1 },
];

const HERO_BACKDROP =
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ink-950 text-mist"
    >
      {/* cinematic backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={HERO_BACKDROP}
          alt=""
          decoding="async"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/40 to-ink-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 via-transparent to-ink-950/50" />
      </div>

      {/* oversized brand watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 select-none text-center font-body text-[24vw] italic leading-none text-mist/[0.05] lg:top-16 lg:text-[12rem]"
      >
        cute lab
      </div>

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-center px-5 pb-36 pt-36 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.3em] text-mint-300/90">
            [ 心靈支持空間 // try and error ]
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1
            id="hero-heading"
            className="mt-8 max-w-4xl font-body text-[2.45rem] font-medium leading-[1.3] tracking-tight text-mist sm:text-6xl lg:text-[4.4rem] lg:leading-[1.22]"
          >
            心情跌落低谷時，
            <br className="hidden sm:block" />
            我們陪你{" "}
            <em className="italic text-mint-200">慢慢走回來</em>
            <span className="text-mint-200/80">。</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 font-mono text-[0.64rem] font-medium uppercase tracking-[0.3em] text-mist/50">
            一對一傾聽 ・ 小組陪伴 ・ 日常練習
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-6 max-w-xl font-body text-[0.95rem] leading-[2] text-mist/65 sm:text-base">
            cute lab
            是一個溫柔的心靈支持空間。陪你在 try and error
            之中，重新找回生活的力氣與節奏。
          </p>
        </Reveal>

        <Reveal
          delay={360}
          className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <Button href="#contact" size="lg" className="w-full sm:w-auto">
            預約對話
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href="#stories"
            variant="onDark"
            size="lg"
            className="w-full sm:w-auto"
          >
            看看同行者的故事
          </Button>
        </Reveal>

        {/* corner microcopy, like a gallery placard */}
        <div className="pointer-events-none absolute bottom-10 left-5 hidden text-left font-mono text-[0.58rem] leading-[1.9] tracking-[0.2em] text-mist/55 sm:block sm:left-8 lg:left-12">
          [ OPEN // TUE — SAT ]
          <br />
          11:00 — 20:00
        </div>
        <div className="pointer-events-none absolute bottom-10 right-5 hidden text-right font-mono text-[0.58rem] leading-[1.9] tracking-[0.2em] text-mist/55 sm:block sm:right-8 lg:right-12">
          <span className="motion-safe:inline-block animate-float">
            SCROLL TO ENTER ↓
          </span>
        </div>
      </div>

      {/* museum placard stats */}
      <Reveal className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center sm:px-3"
            >
              <dt className="order-2 mt-2 font-mono text-[0.58rem] font-medium uppercase tracking-[0.22em] text-mist/55">
                {stat.label}
              </dt>
              <dd className="order-1 font-body text-[1.9rem] font-medium tracking-tight text-mist sm:text-[2.1rem]">
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
