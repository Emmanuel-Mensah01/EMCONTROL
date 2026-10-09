export const projectsShipped = '27+'

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export const contact = {
  name: 'Emmanuel Mensah',
  role: 'Founder & CEO | Lead Software Engineer',
  email: 'Emcontrol01@gmail.com',
  phoneDisplay: '055 395 1396',
  phoneTel: '+233553951396',
  location: 'Accra, Ghana',
}

export function whatsappLink(message: string) {
  return `https://wa.me/233553951396?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: '/#growth', label: 'Growth' },
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#packages', label: 'Packages' },
  { href: '/#founder', label: 'Founder' },
  { href: '/#contact', label: 'Contact' },
]

export const footerLinks = [
  ...navLinks.slice(0, 5),
  { href: '/#approach', label: 'Approach' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

export const services = [
  {
    title: 'Websites That Win Customers',
    description:
      'Fast, mobile-first websites designed to build trust at first glance and turn visitors into enquiries, bookings and paying customers.',
  },
  {
    title: 'SEO & Google Visibility',
    description:
      'Technical SEO, clean site structure, Google Business Profile guidance and analytics, so customers searching for what you offer can find you.',
  },
  {
    title: 'E-Commerce & Online Payments',
    description:
      'Online stores and booking flows with secure card and mobile money payments, so you can sell and earn around the clock.',
  },
  {
    title: 'SaaS Platforms',
    description:
      'Web-based platforms that bring your customers, services and operations into one system, and open up new revenue streams.',
  },
  {
    title: 'Custom Software & Business Systems',
    description:
      'Dashboards, customer portals and automated workflows that cut manual work, reduce errors and free your team to serve more customers.',
  },
  {
    title: 'UI/UX & Brand Experience',
    description:
      'Clear, polished interfaces that make your business look credible and make buying from you effortless.',
  },
  {
    title: 'API & System Integrations',
    description:
      'Connect your website to WhatsApp, payments, email, CRMs and the tools you already rely on, so leads never slip through.',
  },
]

export const outcomes = [
  {
    title: 'Get found on Google',
    description:
      'Every site we build is search-ready from day one: fast load times, clean structure, proper page titles and descriptions, and mobile-first design.',
  },
  {
    title: 'Win trust instantly',
    description:
      'A professional, credible presence tells new customers you are the safe choice, before they ever speak to you.',
  },
  {
    title: 'Turn visitors into customers',
    description:
      'Clear calls to action, one-tap WhatsApp and call buttons, booking forms and enquiry flows that make it easy to say yes.',
  },
  {
    title: 'Earn more, around the clock',
    description:
      'Accept orders, bookings and payments online, so your business keeps earning while you sleep.',
  },
  {
    title: 'Grow your customer base',
    description:
      'Customer databases, portals and analytics that help you understand your audience and keep them coming back.',
  },
  {
    title: 'Be visible everywhere',
    description:
      'Search, social, WhatsApp and link sharing: your business looks sharp and consistent wherever customers meet it.',
  },
]

export const approach = [
  { step: '01', title: 'Discover', description: 'We learn your business, your customers and your growth goals: more leads, more sales, more visibility.' },
  { step: '02', title: 'Plan', description: 'We map the pages, features and search strategy that will move those goals forward.' },
  { step: '03', title: 'Build', description: 'We develop a fast, secure, conversion-focused product with attention to quality and usability.' },
  { step: '04', title: 'Test', description: 'We test across devices, browsers and real-life scenarios so customers never hit a dead end.' },
  { step: '05', title: 'Launch & Get Found', description: 'We go live, set up analytics and search tools, and make sure Google can find and understand your site.' },
  { step: '06', title: 'Grow', description: 'We keep improving based on real visitor data, so your results compound over time.' },
]

export type Project = {
  slug: string
  name: string
  industry: string
  description: string
  url: string
  image: string | null
  gallery?: { src: string; alt: string; width: number; height: number }[]
  challenge: string
  solution: string
  features: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'em-drive',
    name: 'EM Drive',
    industry: 'Automotive / Car Advertisement',
    description:
      'A premium car advertisement website showcasing a curated fleet of luxury vehicles with an elegant, high-end presentation.',
    url: 'https://emdrive01.github.io/drive/',
    image: '/images/work/drive.png',
    challenge:
      'Luxury vehicles sell on trust and presentation. A cluttered or ordinary listing page makes premium cars look average and buyers hesitate.',
    solution:
      'We designed a high-end showcase that lets each vehicle take centre stage, with a refined layout that signals quality from the first scroll.',
    features: [
      'Curated fleet presentation with a premium, editorial feel',
      'Fast, mobile-first pages for buyers browsing on their phones',
      'Clear enquiry path so interested buyers can reach the seller quickly',
    ],
    outcome:
      'A standout online showroom that presents the fleet the way it deserves to be seen and gives serious buyers a clear next step.',
  },
  {
    slug: 'maison-evelyn',
    name: 'Maison Evelyn',
    industry: 'Luxury Accommodation',
    description: 'A private luxury residence platform with availability search and a refined, five-star feel.',
    url: 'https://evelynmaison.vercel.app/',
    image: '/images/work/maison.png',
    challenge:
      'High-end guests expect a five-star experience before they ever arrive. A basic listing cannot justify premium rates or build the confidence to book.',
    solution:
      'We built a refined residence platform with availability search, so guests can see what is free and move toward booking without friction.',
    features: [
      'Availability search for stays',
      'Elegant, five-star visual presentation',
      'Responsive design for guests booking from any device',
    ],
    outcome:
      'A private-residence brand that looks as premium online as it does in person, with a simple path from browsing to booking.',
  },
  {
    slug: 'new-generation-school',
    name: 'New Generation School',
    industry: 'Education',
    description: 'A bilingual school website presenting academics, facilities and admissions to parents.',
    url: 'https://www.newgenerationtz.com',
    image: '/images/work/school.png',
    challenge:
      'Parents compare schools online before they visit. The school needed to communicate academics, facilities and admissions clearly, in the languages its community uses.',
    solution:
      'We created a bilingual website that organises everything a parent needs to know, from academics and facilities to how to apply.',
    features: [
      'Bilingual content for the school community',
      'Clear sections for academics, facilities and admissions',
      'Mobile-friendly pages for parents on the go',
    ],
    outcome:
      'A trustworthy digital front door that helps parents understand the school and take the next step toward admission.',
  },
  {
    slug: 'extended-stay-suite',
    name: 'Extended Stay Suite',
    industry: 'Hospitality / Hotel',
    description: 'A furnished-apartment website in Tema with booking and availability built in.',
    url: 'https://extendedstaysuite.com/',
    image: '/images/work/hotel.png',
    challenge:
      'Short-stay guests want to see the space, check dates and book fast. Phone-only enquiries lose guests who want an answer right now.',
    solution:
      'We built a furnished-apartment website for Tema with booking and availability built in, so guests can check dates and reserve online.',
    features: [
      'Booking and availability built into the site',
      'Clear presentation of the apartment and amenities',
      'Easy contact options for guests who prefer to ask first',
    ],
    outcome:
      'A professional booking presence that makes it easy for guests to choose the apartment and reserve with confidence.',
  },
  {
    slug: 'em-markets',
    name: 'EM Markets',
    industry: 'E-Commerce / Online Grocery',
    description: 'An online supermarket with product categories, cart and delivery across Accra and Kumasi.',
    url: 'https://emmarketsc.netlify.app',
    image: '/images/work/market.png',
    challenge:
      'Grocery shoppers want convenience. Without an easy way to browse, add to cart and get delivery, they default to the nearest shop.',
    solution:
      'We built an online supermarket with organised product categories, a working cart and delivery coverage across Accra and Kumasi.',
    features: [
      'Product categories that make shopping quick',
      'Shopping cart and checkout flow',
      'Delivery across Accra and Kumasi',
    ],
    outcome:
      'A complete e-commerce experience that lets customers shop for groceries online and have them delivered.',
  },
  {
    slug: 'the-psyche-consult-ghana',
    name: 'The Psyche Consult Ghana',
    industry: 'Corporate / Consultancy',
    description: 'A study-abroad consultancy website with services, scholarships and a student portal.',
    url: 'https://the-psyche-consult-ghana-ltd.vercel.app/',
    image: '/images/work/consult.png',
    challenge:
      'Students and families trust consultancies that look established and make information easy to find. The firm needed a credible home for its services and scholarship opportunities.',
    solution:
      'We built a consultancy website that presents services and scholarships clearly and adds a student portal, with admin tools so the team can keep content fresh.',
    features: [
      'Services and scholarship information in one place',
      'Student portal',
      'Admin content management for updates and testimonials',
    ],
    outcome:
      'A credible, easy-to-update platform that helps prospective students understand the services and get in touch.',
  },
  {
    slug: 'frozen-mountain-schools',
    name: 'Frozen Mountain Schools',
    industry: 'Education',
    description: 'A nursery, primary and secondary school website communicating values and enrolment.',
    url: 'https://www.frozenmountainschools.com',
    image: '/images/work/school-2.png',
    challenge:
      'A school covering nursery, primary and secondary has a lot to explain. Parents needed to quickly grasp its values and how enrolment works.',
    solution:
      'We designed a clear, welcoming website that presents each level of the school, communicates its values and guides parents through enrolment.',
    features: [
      'Dedicated presentation of nursery, primary and secondary levels',
      'Values and school culture communicated clearly',
      'Straightforward enrolment information',
    ],
    outcome:
      'A professional school website that builds parents\' confidence and makes enrolment enquiries easier.',
  },
  {
    slug: 'ministryos',
    name: 'MinistryOS',
    industry: 'SaaS / Operations',
    description: 'A full-stack church operations SaaS platform for members, giving, events and workflows.',
    url: 'https://www.ministryosapp.com/',
    image: '/images/work/ministryos.png',
    gallery: [
      {
        src: '/images/work/ministryos-dashboard.png',
        alt: 'MinistryOS dashboard showing members, finances and attendance',
        width: 680,
        height: 624,
      },
      {
        src: '/images/work/ministryos-billing.png',
        alt: 'MinistryOS billing page with trial status and SMS credit bundles',
        width: 941,
        height: 740,
      },
    ],
    challenge:
      'Many churches run members, giving, attendance and communication on paper, spreadsheets and chat groups. Information gets scattered and leaders lose sight of what is happening.',
    solution:
      'We built MinistryOS, an all-in-one ministry management platform that brings members, finances, attendance, communications and reports into a single dashboard.',
    features: [
      'Member and visitor management with attendance tracking',
      'Finance, pledges and giving with a clear income and expense overview',
      'SMS communications with credit bundles, plus automations',
      'Departments, events, reports and an audit log',
      'Multi-branch support with plans, billing and a free trial',
    ],
    outcome:
      'A live SaaS product, built end to end, that gives church leaders one place to manage their ministry and gives us a platform that can serve many churches.',
  },
]

export const clients = projects.map((project) => project.name)

export const reasons = [
  {
    title: 'Built around your growth',
    description: 'We start with what you want to achieve (more customers, more revenue, more visibility) and build backwards from there.',
  },
  {
    title: 'Search-ready by default',
    description: 'Speed, structure and on-page SEO are part of every build, not an expensive add-on.',
  },
  {
    title: 'Proven across industries',
    description: '27+ projects shipped for schools, hotels, churches, retailers and consultancies, many live today.',
  },
  {
    title: 'Direct communication',
    description: 'You talk directly to the people building your product. No middlemen, no lost messages.',
  },
  {
    title: 'Built to scale',
    description: 'Modern, reliable technology that grows with your business, from first website to full platform.',
  },
]

export const technologies = [
  'React',
  'Next.js',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Supabase',
  'Firebase',
  'REST APIs',
  'Authentication',
  'Role-Based Access Control',
  'Database Systems',
  'Dashboards',
  'API Integrations',
  'Git & GitHub',
  'Cloud Deployment',
  'Technical SEO',
  'Analytics',
  'Online Payments',
]

// Testimonials from real clients. The wording below is DRAFT copy written
// from each client's feedback; confirm or replace it with their own words
// before publishing.
export const testimonials = [
  {
    quote:
      'EM Control understood exactly what we wanted. The booking and availability system makes it easy for guests to reserve, and the website feels as premium as our apartment. I recommend them to everyone.',
    name: 'Mr. Sam',
    role: 'Extended Stay Suite',
    project: 'extended-stay-suite',
  },
  {
    quote:
      'Our website finally presents the school the way we truly are: clear on academics, facilities and admissions. Working with EM Control was smooth from start to finish, and I would happily recommend them.',
    name: 'Miss Docas',
    role: 'New Generation School',
    project: 'new-generation-school',
  },
  {
    quote:
      'They listened, they delivered, and the result speaks for itself. Our website represents Frozen Mountain Schools beautifully. I recommend EM Control to any school that wants to be taken seriously online.',
    name: 'Madam Florence',
    role: 'Frozen Mountain Schools',
    project: 'frozen-mountain-schools',
  },
  {
    quote:
      'As a consultancy, credibility is everything. EM Control gave us a professional platform that our students and partners trust, and the team was a pleasure to work with. I highly recommend them.',
    name: 'Mr. Solomon Opoku',
    role: 'CEO, The Psyche Consult Ghana',
    project: 'the-psyche-consult-ghana',
  },
]

export const packages = [
  {
    name: 'Launch',
    tagline: 'Get online and look credible',
    bestFor: 'New and small businesses that need a professional presence.',
    features: [
      'Professional, mobile-first website',
      'Search-ready structure and page titles',
      'WhatsApp and click-to-call buttons',
      'Contact and enquiry form',
      'Live deployment on your own domain',
    ],
    highlight: false,
  },
  {
    name: 'Grow',
    tagline: 'Get found and win customers',
    bestFor: 'Businesses ready to attract more customers and sell or take bookings online.',
    features: [
      'Everything in Launch',
      'Technical SEO and Google Search Console setup',
      'Online payments, bookings or e-commerce',
      'Analytics to track visitors and enquiries',
      'Admin tools to update your own content',
    ],
    highlight: true,
  },
  {
    name: 'Platform',
    tagline: 'Build your own software or SaaS',
    bestFor: 'Organisations that need custom systems, portals or a product of their own.',
    features: [
      'Custom web application or SaaS platform',
      'User accounts and role-based access',
      'Dashboards, reports and automation',
      'Integrations with your payments, SMS and tools',
      'Ongoing improvement as you grow',
    ],
    highlight: false,
  },
]

export const faqs = [
  {
    question: 'How much does a website or system cost?',
    answer:
      'It depends on what you need. A simple business website costs far less than a booking platform or custom software. Tell us about your goals and we will send a clear written quote before any work begins.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'Timelines depend on scope. Most business websites are completed in a matter of weeks, while larger platforms take longer. We agree on a timeline with you after the discovery conversation.',
  },
  {
    question: 'Will my website show up on Google?',
    answer:
      'We build every site search-ready, with fast pages, clean structure and proper metadata, and we help you set up Google Search Console. Rankings depend on competition and time, so we never promise a number-one spot overnight, but we give you the strongest foundation to be found.',
  },
  {
    question: 'Can customers pay or book online?',
    answer:
      'Yes. We build online stores and booking flows and connect secure payment providers such as Paystack, so customers can pay or reserve directly on your site.',
  },
  {
    question: 'Do you handle hosting and my domain?',
    answer:
      'Yes. We deploy your project to reliable cloud hosting, connect your domain and explain any running costs upfront, so there are no surprises.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Launch is the start, not the end. We stay available to fix issues, add features and keep improving your product as your business grows.',
  },
  {
    question: 'Can you build more than websites?',
    answer:
      'Absolutely. We build SaaS platforms, dashboards, customer portals and custom business systems. MinistryOS, our church management platform, is one example.',
  },
  {
    question: 'I am outside Accra. Can we still work together?',
    answer:
      'Yes. We work with clients across Ghana and beyond, using WhatsApp, calls and email to keep communication direct and fast.',
  },
]
