import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BrowserFrame } from '@/components/browser-frame'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/content'

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Proof of work"
            title="Real businesses. Real results. Live today."
            description="We have shipped 27+ projects. Open any of these to see the story behind it and visit the live site. Each was built to help an organization attract customers, build credibility and grow."
          />
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name}>
              <Link href={`/work/${project.slug}`} className="group block focus-visible:outline-none">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <BrowserFrame
                    url={project.url}
                    image={project.image}
                    alt={`Homepage of ${project.name}`}
                    fallbackTitle={project.name}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="group-focus-visible:ring-2 group-focus-visible:ring-ring"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {project.industry}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{project.name}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">View the {project.name} case study</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
