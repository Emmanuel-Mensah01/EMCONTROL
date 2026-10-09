'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { contact, navLinks, whatsappLink } from '@/lib/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-border bg-background/85 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="EM Control Tech Solutions home">
          <Image
            src="/images/logo.jpg"
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-xl border border-border object-cover md:size-11"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight md:text-base">EM CONTROL</span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-primary md:text-[10px]">
              TECH SOLUTIONS
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:inline-flex"
        >
          Grow Your Business
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-y-auto bg-background px-5 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 font-display text-2xl font-semibold tracking-tight"
                >
                  {link.label}
                  <ArrowUpRight className="size-5 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={whatsappLink("Hello EM Control, I'd like to grow my business online.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground"
            >
              Chat on WhatsApp
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={`mailto:${contact.email}`} className="py-2 text-center text-sm text-muted-foreground">
              {contact.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
