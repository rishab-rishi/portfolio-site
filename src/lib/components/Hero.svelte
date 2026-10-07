<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { HeroData, Project } from './types';

  let { hero, project }: { hero: HeroData; project: Project } = $props();
</script>

<section id="home" class="relative border-b border-line">
  <div class="hero-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
  <div
    class="container-page relative grid items-center gap-12 py-16 md:py-24 lg:min-h-[780px] lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-28"
  >
    <div>
      <div use:reveal class="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        {#if hero.available}
          <span class="label inline-flex items-center gap-2 rounded-full border border-[rgb(200_255_61/0.45)] bg-[rgb(200_255_61/0.06)] px-3 py-1.5 text-accent">
            <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            Available for work
          </span>
        {/if}
        <span class="label text-muted">{hero.name} — {hero.title}</span>
      </div>

      <h1 class="hero-title font-display font-bold uppercase">
        <span use:reveal={70} class="block">I build</span>
        <span use:reveal={140} class="block">digital</span>
        <span use:reveal={210} class="block">products<span class="text-accent">.</span></span>
      </h1>

      <p use:reveal={280} class="mt-8 max-w-[34rem] text-muted md:text-xl md:leading-relaxed">
        {hero.description}
      </p>

      <div use:reveal={350} class="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a href="#work" class="btn-primary">View work <span class="link-arrow" aria-hidden="true">→</span></a>
        <a href="#contact" class="btn-secondary">Let’s talk</a>
      </div>
    </div>

    <figure use:reveal={200} class="min-w-0 lg:-mr-6 xl:-mr-12">
      <div class="frame shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
        <div class="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
          <span class="h-2.5 w-2.5 rounded-full bg-line-hover"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-line-hover"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-line-hover"></span>
          <span class="ml-3 truncate font-mono text-[11px] text-subtle">
            {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>
        <img
          src={project.image.src}
          srcset="{project.image.srcSmall} 720w, {project.image.src} 1440w"
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 100vw"
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
          fetchpriority="high"
          class="block h-auto w-full"
        />
      </div>
      {#if project.image.caption}
        <figcaption class="label mt-4 text-subtle">{project.image.caption}</figcaption>
      {/if}
    </figure>
  </div>
</section>
