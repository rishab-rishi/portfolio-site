<script lang="ts">
  import { PORTFOLIO_DATA } from '$lib/data/portfolio';
  import SiteHeader from './SiteHeader.svelte';
  import Hero from './Hero.svelte';
  import SelectedWork from './SelectedWork.svelte';
  import ProofStrip from './ProofStrip.svelte';
  import About from './About.svelte';
  import Experience from './Experience.svelte';
  import TechStack from './TechStack.svelte';
  import ContactCTA from './ContactCTA.svelte';
  import SiteFooter from './SiteFooter.svelte';

  // Content lives in src/lib/data/portfolio.ts
  const data = PORTFOLIO_DATA;
  const featured = data.projects.find((p) => p.featured) ?? data.projects[0];
</script>

<a
  href="#main"
  class="label sr-only z-[60] rounded-[var(--radius)] bg-accent px-4 py-3 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
>
  Skip to content
</a>

<SiteHeader />

<main id="main" tabindex="-1" class="outline-none">
  <Hero hero={data.hero} project={featured} />
  <SelectedWork projects={data.projects} githubUrl={data.contact.github} />
  <ProofStrip items={data.proof} />
  <About about={data.about} />
  <Experience items={data.experience} />
  <TechStack groups={data.stack} alsoFamiliar={data.alsoFamiliar} />
  <ContactCTA contact={data.contact} />
</main>

<SiteFooter authorName={data.hero.name} contact={data.contact} />
