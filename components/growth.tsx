import { ArrowUpRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { outcomes, projectsShipped } from '@/lib/content'

export function Growth() {
  return (
    <section id="growth" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What your business gains"
          title="More visibility. More customers. More revenue."
          description="A website should work as hard as your best salesperson. We build digital products that get you found, earn trust and turn attention into growth."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {outcomes.map((item) => (
            <li key={item.title} className="reveal rounded-2xl border border-border bg-card p-6 md:p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight md:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-accent p-7 sm:flex-row sm:items-center sm:justify-between md:p-10">
          <p className="max-w-2xl font-display text-xl font-semibold leading-snug tracking-tight text-accent-foreground md:text-2xl">
            {projectsShipped} projects shipped for schools, hotels, churches, retailers and consultancies.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Grow Your Business
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
