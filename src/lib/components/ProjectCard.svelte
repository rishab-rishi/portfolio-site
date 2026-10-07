<script lang="ts">
  import type { Project } from './types';

  let { project, featured = false }: { project: Project; featured?: boolean } = $props();
</script>

<article
  class="group h-full overflow-hidden rounded-[var(--radius)] border border-line bg-surface transition-colors duration-200
    hover:border-line-hover hover:bg-surface-hover
    {featured ? 'lg:grid lg:grid-cols-[3fr_2fr]' : 'flex flex-col'}"
>
  <div class="p-3 md:p-4 {featured ? 'lg:p-5' : 'pb-0 md:pb-0'}">
    <div class="h-full overflow-hidden rounded-[6px] border border-line">
    <img
      src={project.image.srcSmall}
      srcset="{project.image.srcSmall} 720w, {project.image.src} 1440w"
      sizes={featured ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 768px) 600px, 100vw'}
      width={project.image.width}
      height={project.image.height}
      alt={project.image.alt}
      loading="lazy"
      decoding="async"
      class="project-image block aspect-[16/10] h-full w-full object-cover object-left-top transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
      />
    </div>
  </div>

  <div class="flex flex-1 flex-col p-6 md:p-8 {featured ? 'lg:p-10' : ''}">
    <p class="label text-subtle">{project.category}</p>
    <h3
      class="mt-3 font-display font-semibold tracking-[-0.03em]
        {featured ? 'text-[1.75rem] md:text-4xl' : 'text-2xl md:text-[1.75rem]'}"
    >
      {project.title}
    </h3>
    <p class="mt-4 max-w-[60ch] text-muted">{project.description}</p>

    <ul class="mt-6 space-y-2" aria-label="Highlights">
      {#each project.highlights as highlight}
        <li class="flex gap-3 text-sm text-ink md:text-base">
          <span class="mt-[0.6em] h-px w-3 shrink-0 bg-accent" aria-hidden="true"></span>
          {highlight}
        </li>
      {/each}
    </ul>

    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
      {#each project.stack as tech}
        <li class="rounded-[4px] border border-line px-2.5 py-1 font-mono text-[11px] text-muted md:text-xs">{tech}</li>
      {/each}
    </ul>

    <div class="mt-auto flex flex-wrap gap-x-8 gap-y-2 pt-8">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="label inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-accent"
      >
        View live <span class="link-arrow" aria-hidden="true">→</span>
        <span class="sr-only">— {project.title} (opens in a new tab)</span>
      </a>
      {#if project.caseStudy}
        <a href={project.caseStudy} class="label inline-flex min-h-[44px] items-center gap-2 text-muted hover:text-ink">
          Read case study <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      {/if}
    </div>
  </div>
</article>
