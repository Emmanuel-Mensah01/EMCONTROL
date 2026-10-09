'use client'

import { useRef } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/content'

const needs = [
  'A new business website',
  'Get found on Google (SEO)',
  'An online store / e-commerce',
  'Online booking or payments',
  'A SaaS platform or custom software',
  'Something else',
]

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30'

export function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null)

  function buildMessage() {
    const data = new FormData(formRef.current!)
    const lines = [
      `Hello EM Control, my name is ${data.get('name')}.`,
      data.get('business') ? `Business / organisation: ${data.get('business')}` : '',
      `I need: ${data.get('need')}`,
      data.get('details') ? `Details: ${data.get('details')}` : '',
      `Best number to reach me: ${data.get('phone')}`,
    ]
    return lines.filter(Boolean).join('\n')
  }

  function sendWhatsApp(event: React.FormEvent) {
    event.preventDefault()
    window.open(whatsappLink(buildMessage()), '_blank', 'noopener,noreferrer')
  }

  function sendEmail() {
    if (!formRef.current?.reportValidity()) return
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      'Grow my business: enquiry',
    )}&body=${encodeURIComponent(buildMessage())}`
  }

  return (
    <form ref={formRef} onSubmit={sendWhatsApp} className="flex flex-col gap-4 text-foreground">
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">Tell us about your business</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Takes a minute. Your details open as a ready-to-send message, so we reply to you directly.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" placeholder="e.g. Ama Mensah" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Phone / WhatsApp
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="e.g. 024 000 0000"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Business or organisation <span className="font-normal text-muted-foreground">(optional)</span>
        <input name="business" autoComplete="organization" placeholder="Your business name" className={fieldClass} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium">
        What do you need?
        <select name="need" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {needs.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Anything else we should know? <span className="font-normal text-muted-foreground">(optional)</span>
        <textarea
          name="details"
          rows={3}
          placeholder="Your goals, timeline or any websites you like"
          className={fieldClass}
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send on WhatsApp
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          <Mail className="size-4" aria-hidden="true" />
          Send by email
        </button>
      </div>
    </form>
  )
}
