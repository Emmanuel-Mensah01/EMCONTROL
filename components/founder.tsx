import Image from 'next/image'

const credentials = [
  { label: 'Based in', value: 'Accra, Ghana', note: 'Leading EM Control since 2022' },
  { label: 'Experience', value: 'Ghana Revenue Authority', note: 'Digital onboarding & records' },
  { label: 'Education', value: 'B.Sc. IT, First Class', note: 'GCTU graduate' },
]

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <figure className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ember">
            <Image
              src="/images/founder.jpeg"
              alt="Emmanuel Mensah, founder of EM Control Tech Solutions, in a brown tweed three-piece suit"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 448px) 28rem, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-sm">
            <span className="font-semibold">Emmanuel Mensah</span>
            <span className="text-muted-foreground">Founder & CEO</span>
          </figcaption>
        </figure>

        <div className="lg:col-span-7">
          <p className="text-sm font-semibold text-primary">Meet the founder</p>
          <blockquote className="mt-4">
            <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-balance sm:text-3xl md:text-4xl">
              {
                '"I take an idea, understand the problem behind it, and turn it into technology that actually works."'
              }
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              {
                "I'm Emmanuel Mensah, a Software Engineer, SaaS product builder and the founder of EM Control Tech Solutions. I started EM Control with a simple belief: technology should solve real problems and create meaningful opportunities."
              }
            </p>
            <p>
              My work spans software development, IT support, digital transformation, database systems and
              operational technology, including supporting taxpayer digital onboarding and records digitisation at
              the Ghana Revenue Authority.
            </p>
            <p>
              Today, I lead a team focused on one thing: helping businesses grow. Every website and platform we ship
              is built to be found on Google, to earn customers' trust and to turn attention into revenue.
            </p>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {credentials.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background p-5">
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{item.label}</dt>
                <dd className="mt-2">
                  <span className="block font-semibold leading-snug">{item.value}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
