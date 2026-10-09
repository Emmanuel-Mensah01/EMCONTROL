import { clients } from '@/lib/content'

export function ClientStrip() {
  const items = [...clients, ...clients]

  return (
    <section aria-label="Clients" className="border-y border-border bg-card py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 md:flex-row md:items-center md:gap-10 md:px-8">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Shipped for
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-10">
            {items.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= clients.length}
                className="whitespace-nowrap font-display text-base font-semibold text-foreground/70 md:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
