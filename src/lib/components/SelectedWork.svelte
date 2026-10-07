<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ProjectCard from './ProjectCard.svelte';
  import type { Project } from './types';

  let { projects, githubUrl }: { projects: Project[]; githubUrl: string } = $props();

  const featured = $derived(projects.find((p) => p.featured));
  const rest = $derived(projects.filter((p) => p !== featured));
</script>

<section id="work" class="section-pad border-b border-line">
  <div class="container-page">
    <div use:reveal class="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
      <div>
        <p class="section-label">Selected work</p>
        <h2 class="section-title mt-5">Things I’ve built</h2>
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="label inline-flex min-h-[44px] items-center gap-2 text-muted hover:text-ink"
      >
        More on GitHub <span class="link-arrow" aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid gap-5 md:gap-6 lg:gap-8">
      {#if featured}
        <div use:reveal>
          <ProjectCard project={featured} featured />
        </div>
      {/if}
      <div class="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
        {#each rest as project, i}
          <div use:reveal={i * 80}>
            <ProjectCard {project} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
