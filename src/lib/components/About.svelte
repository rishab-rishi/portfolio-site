<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { AboutData } from './types';

  let { about }: { about: AboutData } = $props();
</script>

<section id="about" class="section-pad border-b border-line">
  <div class="container-page grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-24">
    <div use:reveal>
      <p class="section-label">About me</p>
      <h2 class="section-title mt-5">I’m Rishab.</h2>
      <div class="mt-8 max-w-[60ch] space-y-5 text-muted md:leading-relaxed">
        {#each about.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>

    <dl use:reveal={100} class="self-end border-t border-line">
      {#each about.facts as fact}
        <div class="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-5 md:py-6">
          <dt class="label pt-1 text-subtle">{fact.label}</dt>
          <dd class="text-ink">{fact.value}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>
