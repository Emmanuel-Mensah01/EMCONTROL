import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/content'
import { EnquiryForm } from '@/components/enquiry-form'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="grid gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-12 lg:gap-14 lg:p-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-primary-foreground/75">Grow with us</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl md:text-5xl">
              Ready to attract more customers and grow your revenue?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 text-pretty md:text-lg">
              Tell us about your business and your goals. We will show you how a search-ready website or custom platform
              can bring you more customers, more visibility and more revenue.
            </p>

            <address className="mt-8 not-italic">
              <ul className="flex flex-col divide-y divide-primary-foreground/20 rounded-2xl border border-primary-foreground/20">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-5 hover:underline">
                    <Mail className="size-5 shrink-0 text-primary-foreground/70" aria-hidden="true" />
                    <span className="break-all text-sm md:text-base">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${contact.phoneTel}`} className="flex items-center gap-4 p-5 hover:underline">
                    <Phone className="size-5 shrink-0 text-primary-foreground/70" aria-hidden="true" />
                    <span className="text-sm md:text-base">{contact.phoneDisplay} · Phone / WhatsApp</span>
                  </a>
                </li>
                <li className="flex items-center gap-4 p-5">
                  <MapPin className="size-5 shrink-0 text-primary-foreground/70" aria-hidden="true" />
                  <span className="text-sm md:text-base">{contact.location}</span>
                </li>
              </ul>
            </address>
          </div>

          <div className="rounded-3xl bg-card p-6 shadow-lg sm:p-8 lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
