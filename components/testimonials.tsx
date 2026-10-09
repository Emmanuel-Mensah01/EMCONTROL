import Link from 'next/link'
import { ArrowUpRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-y border-border bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title="Clients who trust us, and recommend us."
          description="Schools, hotels and consultancies across Ghana put their digital presence in our hands. Here is what some of them say."
        />

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="reveal flex flex-col justify-between rounded-3xl border border-border bg-card p-7 md:p-9"
            >
              <figure>
                <Quote className="size-8 text-primary/30" aria-hidden="true" />
                <blockquote className="mt-4 text-base leading-relaxed text-foreground text-pretty md:text-lg">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-accent-foreground"
                  >
                    {item.name
                      .replace(/^(Mr|Mrs|Miss|Madam|Dr)\.?\s+/i, '')
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="block text-sm text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
              <Link
                href={`/work/${item.project}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                See the project
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
