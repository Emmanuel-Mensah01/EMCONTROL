import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { reasons, technologies } from '@/lib/content'

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why EM Control"
            title="A technology partner invested in your growth."
            description="We combine business understanding, search-ready engineering and clear communication, so what we build brings you customers and pays for itself."
          />
          <div className="mt-10">
            <h3 className="text-sm font-semibold">Technologies we use</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground md:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {reasons.map((reason) => (
            <li key={reason.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{reason.description}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-2xl bg-accent p-6">
            <p className="font-display text-lg font-semibold tracking-tight text-accent-foreground">
              Innovate. Solve. Empower.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-accent-foreground/80">
              The principle behind every project we take on.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
