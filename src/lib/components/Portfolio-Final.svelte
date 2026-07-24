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
      tagline: "Building digital experiences that matter",
      description: "Transforming ideas into elegant, functional code"
    },
    
    about: {
      text: "I'm a developer passionate about creating clean, efficient solutions to complex problems. With a focus on user experience and modern web technologies, I build applications that are both powerful and intuitive. When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or sketching out the next big idea.",
      highlights: [
        "3+ years of development experience",
        "Focus on React & Node.js ecosystems",
        "Passionate about clean code & UX"
      ]
    },
    
    skills: [
      { name: "React", category: "Frontend", level: 90 },
      { name: "TypeScript", category: "Language", level: 85 },
      { name: "Node.js", category: "Backend", level: 80 },
      { name: "Tailwind CSS", category: "Frontend", level: 90 },
      { name: "PostgreSQL", category: "Database", level: 75 },
      { name: "Git", category: "Tools", level: 85 },
      { name: "Python", category: "Language", level: 70 },
      { name: "Docker", category: "DevOps", level: 65 }
    ],
    
    projects: [
      {
        title: "Ok Agencies Website",
        description: "A website that sells fastners and bolts online. It has a clean and modern design, and is built with React, Node.js, Next.js, and Tailwind CSS.",
        tags: ["React", "Node.js", "nextjs", "Tailwind CSS"],
        link: "https://okagency.in/",
        image: "🚀"
      },
      // {
      //   title: "Weather Dash",
      //   description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets.",
      //   tags: ["React", "TypeScript", "OpenWeather API"],
      //   link: "https://github.com/yourusername/weather-dash",
      //   image: "🌤️"
      // },
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
