import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ClientStrip } from '@/components/client-strip'
import { Growth } from '@/components/growth'
import { Testimonials } from '@/components/testimonials'
import { Packages } from '@/components/packages'
import { Faq } from '@/components/faq'
import { Work } from '@/components/work'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Founder } from '@/components/founder'
import { WhyUs } from '@/components/why-us'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ClientStrip />
        <Growth />
        <Work />
        <Testimonials />
        <Services />
        <Approach />
        <Founder />
        <WhyUs />
        <Packages />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
