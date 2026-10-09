import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { BrowserFrame } from '@/components/browser-frame'
import { projectsShipped, services } from '@/lib/content'

const stats = [
  { value: '2022', label: 'Building since' },
  { value: projectsShipped, label: 'Projects shipped' },
  { value: String(services.length), label: 'Growth services' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(60%_60%_at_70%_0%,var(--accent),transparent)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <a
            href="#founder"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4 text-sm shadow-sm transition-colors hover:border-primary/40"
          >
            <span className="relative size-8 overflow-hidden rounded-full bg-ember">
              <Image
                src="/images/founder.jpg"
                alt=""
                fill
                sizes="32px"
                className="scale-[3.2] object-cover"
                style={{ objectPosition: '65% 35%', transformOrigin: '65% 35%' }}
              />
            </span>
            <span className="text-muted-foreground">
              Led by <span className="font-semibold text-foreground">Emmanuel Mensah</span>
            </span>
          </a>

          <h1 className="mt-7 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Websites and software that <span className="text-primary">grow your customers, revenue and visibility.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            We help businesses get found on Google, earn customers' trust and turn visitors into paying customers.
            EM Control Tech Solutions builds search-ready websites, e-commerce stores, SaaS platforms and custom
            systems for schools, hotels, churches and growing companies across Ghana and beyond.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Grow Your Business
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              See Results We Deliver
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative pb-[18%] pl-[12%] sm:pb-[14%]">
            <BrowserFrame
              url="https://evelynmaison.vercel.app/"
              image="/images/work/maison.png"
              alt="Maison Evelyn luxury residences website built by EM Control"
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            <div className="absolute bottom-0 left-0 w-[62%]">
              <BrowserFrame
                url="https://emdrive01.github.io/drive/"
                image="/images/work/drive.png"
                alt="EM Drive luxury car advertisement website built by EM Control"
                priority
                sizes="(min-width: 1024px) 28vw, 60vw"
                className="shadow-[0_24px_48px_-16px_rgba(16,24,40,0.35)]"
              />
            </div>
          </div>
          <p className="mt-4 text-right text-xs text-muted-foreground">Live client work · Maison Evelyn &amp; EM Drive</p>
        </div>
      </div>
    </section>
  )
}
