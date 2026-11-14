import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./ui/Icons.jsx";

const CTA_BACKDROP =
  "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1800&q=80";

/**
 * Mid-page cinematic CTA, repeated again in the footer.
 */
export default function CtaBand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 dark:bg-ink-950"
    >
      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-16 text-center shadow-lift sm:px-10 lg:px-16 lg:py-20 lg:text-left">
          <div aria-hidden="true" className="absolute inset-0">
            <img
              src={CTA_BACKDROP}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/80" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-12">
            <div>
              <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-mint-300">
                [ a gentle start ]
              </p>
              <h2
                id="cta-heading"
                className="mt-5 font-body text-[1.9rem] font-medium leading-[1.3] tracking-tight text-mist sm:text-4xl lg:text-[2.8rem]"
              >
                準備好，給自己一個
                <br className="hidden sm:block" />
                <em className="italic text-mint-200">溫柔的開始</em>？
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-[1.9] text-mist/65 sm:text-base lg:mx-0">
                不用想清楚要說什麼。20
                分鐘，一杯茶的時間，先讓自己被人聽見。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:flex-col xl:flex-row xl:justify-end">
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                預約對話
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="#faq"
                variant="onDark"
                size="lg"
                className="w-full sm:w-auto"
              >
                先看看常見問題
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
