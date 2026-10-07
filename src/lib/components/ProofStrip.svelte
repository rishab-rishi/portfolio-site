<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Proof } from './types';

  let { items }: { items: Proof[] } = $props();
</script>

<section aria-label="At a glance" class="border-b border-line">
  <ul class="container-page grid md:grid-cols-3">
    {#each items as item, i}
      <li
        use:reveal={i * 80}
        class="flex items-baseline gap-5 border-line py-7 md:block md:py-14
          {i > 0 ? 'border-t md:border-l md:border-t-0 md:pl-8 lg:pl-12' : ''}"
      >
        <p class="shrink-0 font-display text-3xl font-bold tracking-[-0.04em] text-accent md:text-5xl">
          {item.heading}
        </p>
        <p class="text-sm text-muted md:mt-3 md:text-base">{item.text}</p>
      </li>
    {/each}
  </ul>
</section>
