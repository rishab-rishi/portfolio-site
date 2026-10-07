// ============================================================================
// EDIT YOUR CONTENT HERE - every section of the page reads from this file.
// Screenshots live in static/projects/ (full size + "-720" variant).
// ============================================================================

import type { PortfolioData } from '$lib/components/types';

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: 'Rishab',
    title: 'Full-stack developer',
    description:
      'Full-stack developer creating production-ready web applications with Next.js, TypeScript and PostgreSQL — from idea to deployment.',
    available: true
  },

  projects: [
    {
      title: 'Fieldwork',
      category: 'Freelancer SaaS platform',
      description:
        'A multi-tenant workspace for freelancers to manage clients, projects, invoices and files from one place.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      highlights: ['Role-based permissions', 'PDF invoices', 'Client portal', 'Usage limits'],
      link: 'https://saas-site-demo.vercel.app/',
      image: {
        src: '/projects/fieldwork-dashboard.webp',
        srcSmall: '/projects/fieldwork-dashboard-720.webp',
        width: 1440,
        height: 900,
        alt: 'Fieldwork dashboard showing client, project and invoice summaries, a revenue chart and recent invoices',
        caption: 'Fieldwork / Demo workspace'
      },
      featured: true
    },
    {
      title: 'Acoustic Ledger',
      category: 'E-commerce store',
      description:
        'A storefront for reference-grade studio audio gear, with category browsing, live stock status, a cart, customer accounts with order history, and an admin dashboard for the catalogue and orders.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle'],
      highlights: ['PayPal checkout (sandbox)', 'Guest and account checkout', 'Admin order workflow'],
      link: 'https://acoustic-ledger-nine.vercel.app/',
      image: {
        src: '/projects/acoustic-ledger.webp',
        srcSmall: '/projects/acoustic-ledger-720.webp',
        width: 1440,
        height: 900,
        alt: 'Acoustic Ledger storefront listing equipment categories styled as rack-mounted units'
      }
    },
    {
      title: 'OK Agencies',
      category: 'Product catalogue website',
      description:
        'A catalogue and enquiry site for a Chennai fastener distributor trading since 1979 and an authorised distributor for Mangal Industries Limited. Built for the client, then handed over to their team.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      highlights: ['Product category pages', 'Industries-served section', 'Enquiry form'],
      link: 'https://ok-agencies.vercel.app/',
      image: {
        src: '/projects/ok-agencies.webp',
        srcSmall: '/projects/ok-agencies-720.webp',
        width: 1440,
        height: 900,
        alt: 'OK Agencies home page with the headline “Delivering Precision Fasteners Since 1979” over a photo of bolts and nuts'
      }
    }
  ],

  proof: [
    { heading: '4+ years', text: 'Freelance development' },
    { heading: '3 projects', text: 'Selected work, all live' },
    { heading: 'Full stack', text: 'Interface → backend → database → deployment' }
  ],

  about: {
    paragraphs: [
      "I'm a full-stack developer who enjoys taking an idea from a rough concept to a working product. I work across the interface, backend, database and deployment, with a focus on practical tools and clear user experiences.",
      'Most of my work centres on Next.js, TypeScript and PostgreSQL, including SaaS products and websites for businesses.'
    ],
    facts: [
      { label: 'Location', value: 'Chennai, India' },
      { label: 'Experience', value: '4+ years (freelance)' },
      { label: 'Availability', value: 'Open to remote roles' }
    ]
  },

  experience: [
    {
      role: 'Freelance full-stack developer',
      // period: '20XX — Present',
      summary: 'Websites and web applications for businesses and my own products.',
      points: [
        'Turn requirements into interface designs and a build plan',
        'Build applications with Next.js, TypeScript and PostgreSQL',
        'Integrate authentication, payments (PayPal) and PDF generation',
        'Deploy on Vercel and hand projects over to client teams'
      ]
    }
  ],

  stack: [
    { name: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Auth.js'] },
    { name: 'Data', items: ['PostgreSQL', 'Prisma', 'Drizzle', 'MongoDB', 'MySQL'] },
    { name: 'Tools', items: ['Git', 'Vercel', 'Docker'] }
  ],
  alsoFamiliar: ['Python', 'Java'],

  contact: {
    email: 'rishab.codes01@gmail.com',
    github: 'https://github.com/rishab-rishi'
    // linkedin: 'https://www.linkedin.com/in/<your-handle>'
  }
};
