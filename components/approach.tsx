import { SectionHeading } from '@/components/section-heading'
import { approach } from '@/lib/content'

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear process from first call to measurable growth."
          description="No guesswork. You always know what's happening, what's next and why."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {approach.map((item) => (
            <li key={item.step} className="reveal rounded-2xl border border-border bg-card p-6 md:p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-accent-foreground">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight md:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
