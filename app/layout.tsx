import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Sora } from 'next/font/google'
import './globals.css'
import { contact, services, siteUrl } from '@/lib/content'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

const title = 'EM Control Tech Solutions | Web Development, SEO & Software for Business Growth in Ghana'
const description =
  'EM Control Tech Solutions builds search-ready websites, e-commerce stores, SaaS platforms and custom software that help Ghanaian businesses get found on Google, win more customers and grow revenue. 27+ projects shipped.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | EM Control Tech Solutions' },
  description,
  applicationName: 'EM Control Tech Solutions',
  keywords: [
    'web development Ghana',
    'website design Accra',
    'SEO Ghana',
    'software company Accra',
    'e-commerce website Ghana',
    'SaaS development Ghana',
    'custom software Ghana',
    'grow your business online',
    'EM Control Tech Solutions',
  ],
  authors: [{ name: 'Emmanuel Mensah' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    siteName: 'EM Control Tech Solutions',
    locale: 'en_GH',
    url: '/',
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EM Control Tech Solutions',
  description,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpg`,
  image: `${siteUrl}/images/logo.jpg`,
  email: contact.email,
  telephone: contact.phoneTel,
  slogan: 'Innovate. Solve. Empower.',
  founder: { '@type': 'Person', name: contact.name, jobTitle: 'Founder & CEO' },
  address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
  areaServed: [{ '@type': 'Country', name: 'Ghana' }, 'Worldwide'],
  knowsAbout: services.map((service) => service.title),
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: service.title, description: service.description },
  })),
}

export const viewport: Viewport = {
  themeColor: '#fbfaf8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GH" className={`${dmSans.variable} ${sora.variable} bg-background`}>
      <body className="antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
