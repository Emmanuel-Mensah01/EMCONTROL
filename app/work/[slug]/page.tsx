import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check, Quote } from 'lucide-react'
import { BrowserFrame } from '@/components/browser-frame'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { projects, testimonials, whatsappLink } from '@/lib/content'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  const title = `${project.name}: ${project.industry} case study`
  return {
    title,
    description: `${project.description} See how EM Control Tech Solutions built it.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description: project.description, url: `/work/${project.slug}`, type: 'article' },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const testimonial = testimonials.find((t) => t.project === project.slug)
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  const sections = [
    { label: 'The challenge', body: project.challenge },
    { label: 'What we built', body: project.solution },
    { label: 'The outcome', body: project.outcome },
  ]

  return (
    <>
      <SiteHeader />
      <main className="pt-28 md:pt-36">
        <article>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{project.industry}</p>
                <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Visit live site
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <BrowserFrame
                url={project.url}
                image={project.image}
                alt={`Homepage of ${project.name}`}
                fallbackTitle={project.name}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
              />
            </div>

            <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col gap-10 lg:col-span-7">
                {sections.map((section) => (
                  <section key={section.label}>
                    <h2 className="text-sm font-semibold text-primary">{section.label}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-pretty md:text-xl">{section.body}</p>
                  </section>
                ))}
              </div>

              <aside className="rounded-3xl border border-border bg-card p-7 md:p-8 lg:col-span-5">
                <h2 className="font-display text-lg font-semibold tracking-tight">Key features</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm leading-relaxed md:text-base">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {project.gallery && (
              <div className="mt-16 md:mt-24">
                <h2 className="text-sm font-semibold text-primary">Inside the product</h2>
                <ul className="mt-5 grid gap-6 md:grid-cols-2">
                  {project.gallery.map((shot) => (
                    <li key={shot.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="h-auto w-full"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {testimonial && (
              <figure className="mt-16 rounded-3xl bg-accent p-8 md:mt-24 md:p-12">
                <Quote className="size-9 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-4 max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight text-accent-foreground md:text-2xl">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm text-accent-foreground/80">
                  <span className="font-semibold text-accent-foreground">{testimonial.name}</span>, {testimonial.role}
                </figcaption>
              </figure>
            )}

            <div className="mt-16 flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between md:mt-24 md:p-10">
              <p className="max-w-xl font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                Want a result like {project.name} for your business?
              </p>
              <a
                href={whatsappLink(`Hello EM Control, I saw your ${project.name} project and I'd like something similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Chat on WhatsApp
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-16 pb-20 md:mt-24 md:pb-28">
              <h2 className="text-sm font-semibold text-primary">More work</h2>
              <ul className="mt-5 grid gap-6 md:grid-cols-3">
                {more.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/work/${item.slug}`} className="group block">
                      <BrowserFrame
                        url={item.url}
                        image={item.image}
                        alt={`Homepage of ${item.name}`}
                        fallbackTitle={item.name}
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                      />
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.industry}
                      </p>
                      <p className="mt-1 text-lg font-semibold tracking-tight">{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
