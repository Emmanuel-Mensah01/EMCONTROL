import { ArrowUpRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { packages, whatsappLink } from '@/lib/content'

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Pick the starting point that fits your goals."
          description="Every project is scoped around your business. Choose the closest fit and we will send a clear written quote with no guesswork."
        />

        <ul className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          {packages.map((pkg) => (
            <li
              key={pkg.name}
              className={cn(
                'reveal relative flex flex-col rounded-3xl border p-7 md:p-9',
                pkg.highlight ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background',
              )}
            >
              {pkg.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold tracking-tight">{pkg.name}</h3>
              <p className={cn('mt-1 text-sm font-medium', pkg.highlight ? 'text-primary-foreground/80' : 'text-primary')}>
                {pkg.tagline}
              </p>
              <p
                className={cn(
                  'mt-4 text-sm leading-relaxed',
                  pkg.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground',
                )}
              >
                {pkg.bestFor}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn('mt-0.5 size-4 shrink-0', pkg.highlight ? 'text-primary-foreground' : 'text-primary')}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hello EM Control, I'm interested in the ${pkg.name} package. Can we talk?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors',
                  pkg.highlight
                    ? 'bg-card text-foreground hover:bg-secondary'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90',
                )}
              >
                Get a quote
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
