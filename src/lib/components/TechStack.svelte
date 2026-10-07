<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { StackGroup } from './types';

  let { groups, alsoFamiliar = [] }: { groups: StackGroup[]; alsoFamiliar?: string[] } = $props();
</script>

<section id="stack" class="section-pad border-b border-line">
  <div class="container-page">
    <div use:reveal>
      <p class="section-label">Tech stack</p>
      <h2 class="section-title mt-5">Technologies I work with</h2>
    </div>

    <div class="mt-12 grid border-t border-line sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
      {#each groups as group, i}
        <div
          use:reveal={i * 70}
          class="border-b border-line py-8 sm:pr-8 lg:border-b-0 lg:py-10
            {i % 2 === 1 ? 'sm:border-l sm:pl-8' : ''} {i > 0 ? 'lg:border-l lg:pl-8' : ''}"
        >
          <h3 class="label flex gap-3 text-accent"><span class="text-subtle">{String(i + 1).padStart(2, '0')}</span>{group.name}</h3>
          <ul class="mt-5 space-y-2">
            {#each group.items as item}
              <li class="text-ink">{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    {#if alsoFamiliar.length}
      <p class="mt-10 text-sm text-muted md:text-base">
        <span class="label mr-3 text-subtle">Also familiar with</span>{alsoFamiliar.join(' · ')}
      </p>
    {/if}
  </div>
</section>
