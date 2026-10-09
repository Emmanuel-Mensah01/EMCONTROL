import Image from 'next/image'
import { footerLinks } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="EM Control Tech Solutions logo"
            width={48}
            height={48}
            className="size-12 rounded-xl border border-border object-cover"
          />
          <div>
            <p className="font-display text-sm font-bold">EM Control Tech Solutions</p>
            <p className="text-xs text-muted-foreground">Innovate · Solve · Empower</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} EM Control Tech Solutions. Accra, Ghana.`}
        </p>
      </div>
    </footer>
  )
}
