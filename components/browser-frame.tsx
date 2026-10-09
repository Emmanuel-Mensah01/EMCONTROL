import Image from 'next/image'
import { cn } from '@/lib/utils'

type BrowserFrameProps = {
  url: string
  image: string | null
  alt: string
  fallbackTitle?: string
  sizes?: string
  priority?: boolean
  className?: string
}

export function BrowserFrame({ url, image, alt, fallbackTitle, sizes, priority, className }: BrowserFrameProps) {
  const host = new URL(url).hostname.replace(/^www\./, '')

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(16,24,40,0.04),0_12px_32px_-12px_rgba(16,24,40,0.18)]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-secondary px-3 py-2 md:px-4 md:py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[70%] items-center justify-center rounded-md bg-card px-3 py-1 text-[11px] text-muted-foreground">
          <span className="truncate">{host}</span>
        </div>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="relative aspect-[16/10] bg-muted">
        {image ? (
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? '(min-width: 1024px) 50vw, 100vw'}
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-primary p-6 text-primary-foreground md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Church operations platform
            </span>
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{fallbackTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Members', 'Giving', 'Events', 'Workflows', 'Reports'].map((item) => (
                  <li key={item} className="rounded-full border border-primary-foreground/30 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
