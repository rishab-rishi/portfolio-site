<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { ExperienceItem } from './types';

  let { items }: { items: ExperienceItem[] } = $props();
</script>

<section id="experience" class="section-pad border-b border-line">
  <div class="container-page">
    <div use:reveal>
      <p class="section-label">Experience</p>
      <h2 class="section-title mt-5">What I do</h2>
    </div>

    <ol class="mt-12 border-t border-line md:mt-16">
      {#each items as item}
        <li use:reveal class="grid gap-6 border-b border-line py-8 md:grid-cols-[5fr_7fr] md:gap-12 md:py-12">
          <div>
            {#if item.period}
              <p class="label text-subtle">{item.period}</p>
            {/if}
            <h3 class="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]">
              {item.role}
            </h3>
            <p class="mt-3 text-muted">{item.summary}</p>
          </div>
          <ul class="space-y-3 md:pt-1">
            {#each item.points as point}
              <li class="flex gap-3 text-ink">
                <span class="mt-[0.75em] h-px w-3 shrink-0 bg-accent" aria-hidden="true"></span>
                {point}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ol>
  </div>
</section>
