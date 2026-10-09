import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/content'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="What we do"
              title="Everything your business needs to be found, trusted and chosen."
              description="From Google visibility and a credible website to the platforms that run your operations, we plan, build and grow it end to end."
            />
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Talk to us about your goals
            </a>
          </div>
        </div>

        <ol className="divide-y divide-border border-y border-border lg:col-span-7">
          {services.map((service, i) => (
            <li key={service.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-7 md:grid-cols-[3.5rem_1fr] md:py-8">
              <span className="pt-1 font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
