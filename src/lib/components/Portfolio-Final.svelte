<script lang="ts">
  import { onMount } from 'svelte';
  import Navigation from './Navigation.svelte';
  import HeroSection from './HeroSection.svelte';
  import AboutSection from './AboutSection.svelte';
  import SkillsSection from './SkillsSection.svelte';
  import ProjectsSection from './ProjectsSection.svelte';
  import Footer from './Footer.svelte';
  import type { PortfolioData, SectionVisibility } from './types';

  // ============================================================================
  // EDIT YOUR CONTENT HERE - Update these sections with your information
  // ============================================================================

  const PORTFOLIO_DATA: PortfolioData = {
    hero: {
      name: "Rishab",
      title: "Full Stack Developer",
      tagline: "I design, build and deploy Next.js and Postgres products end to end.",
      description: "Four years of freelance client work. Open to remote roles."
    },

    about: {
      text: "I'm a developer passionate about creating clean and efficient solutions to complex problems. With a focus on user experience and modern web technologies, I build applications that are both powerful and intuitive. When I'm not coding, you'll find me exploring new frameworks, or sketching out the next big idea.",
      highlights: [
        "4+ years of development experience",
        "Next.js, TypeScript and PostgreSQL in production",
        "Client sites and SaaS builds, shipped end to end"
      ]
    },

    skills: [
      { name: "React", category: "Frontend", level: 90 },
      { name: "TypeScript", category: "Language", level: 85 },
      { name: "Node.js", category: "Backend", level: 80 },
      { name: "Tailwind CSS", category: "Frontend", level: 90 },
      { name: "MySQL", category: "Database", level: 85 },
      { name: "MongoDB", category: "Database", level: 75 },
      { name: "PostgreSQL", category: "Database", level: 85 },
      { name: "Prisma", category: "Database", level: 80 },
      { name: "JavaScript", category: "Language", level: 90 },
      { name: "Express.js", category: "Backend", level: 80 },
      { name: "RESTful APIs", category: "API", level: 90 },
      {name: "Next.js", category: "Frontend", level: 90},
      { name: "Git", category: "Tools", level: 85 },
      { name: "Vercel", category: "Tools", level: 85 },
      { name: "Python", category: "Language", level: 70 },
      { name: "Java", category: "Language", level: 80 }
    ],

    projects: [
      {
        title: "Fieldwork — Freelancer Client Portal",
        description: "Multi-tenant SaaS for freelancers: clients, projects, invoicing with PDF export, file uploads and a read-only client portal. Role-based permissions (owner, admin, member, client), plan-based usage caps and a revenue dashboard. Demo logins are seeded.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
        link: "https://saas-site-demo.vercel.app/",
        image: "🚀"
      },
      {
        title: "Acoustic Ledger",
        description: "An e-commerce store for professional studio audio gear, including monitors, headphones, amplifiers, equalizers, and cables. It has category browsing, live stock status, a shopping cart, user accounts with order history, and PayPal checkout (running in sandbox mode).",
        tags: ["Next.js", "React", "Tailwind CSS", "PayPal", "E-commerce"],
        link: "https://acoustic-ledger-nine.vercel.app/",
        image: "🎧"
      },
      {
        title: "OK Agencies — Fastener Distributor Website",
        description: "Product-catalogue and enquiry site for a Chennai fastener distributor trading since 1979 and an authorised distributor for Mangal Industries Limited. Category pages for hex head, socket head, washers, nuts and coatings, an industries-served section, and a contact form. Deployed on Vercel.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        link: "https://ok-agencies.vercel.app/",
        image: "🔩"
      },
      // {
      //   title: "Code Snippet Manager",
      //   description: "Organize and share code snippets with syntax highlighting, tagging system, and community features.",
      //   tags: ["Next.js", "PostgreSQL", "Prisma"],
      //   link: "https://github.com/yourusername/snippet-manager",
      //   image: "💾"
      // }
    ],

    contact: {
      email: "rishab.codes01@gmail.com",
      github: "https://github.com/rishab-rishi",
      linkedin: "https://linkedin.com/in/yourusername"
    }
  };

  // ============================================================================
  // COMPONENT STATE & LOGIC
  // ============================================================================

  let activeSection: string = 'hero';
  let isVisible: SectionVisibility = {};

  function scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        isVisible[entry.target.id] = entry.isIntersecting;

        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    document.querySelectorAll<HTMLElement>('section[id]').forEach((section: HTMLElement) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-zinc-50 font-sans">
  <Navigation {activeSection} onNavigate={scrollToSection} />

  <HeroSection
    heroData={PORTFOLIO_DATA.hero}
    email={PORTFOLIO_DATA.contact.email}
    isVisible={isVisible.hero || false}
    onNavigate={scrollToSection}
  />

  <AboutSection
    aboutData={PORTFOLIO_DATA.about}
    isVisible={isVisible.about || false}
  />

  <SkillsSection
    skills={PORTFOLIO_DATA.skills}
    isVisible={isVisible.skills || false}
  />

  <ProjectsSection
    projects={PORTFOLIO_DATA.projects}
    githubUrl={PORTFOLIO_DATA.contact.github}
    isVisible={isVisible.projects || false}
  />

  <Footer
    contactData={PORTFOLIO_DATA.contact}
    authorName={PORTFOLIO_DATA.hero.name}
  />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
