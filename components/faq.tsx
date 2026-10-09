import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { faqs } from '@/lib/content'

export function Faq() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered."
              description="Not seeing yours? Message us on WhatsApp and we will reply directly."
            />
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {faqs.map((item) => (
            <details key={item.question} className="group reveal py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold tracking-tight marker:hidden md:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-transform group-open:rotate-45">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
