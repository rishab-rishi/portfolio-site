<script lang="ts">
  import type { ContactData } from './types';

  let { authorName, contact }: { authorName: string; contact: ContactData } = $props();

  const year = new Date().getFullYear();
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' }
  ];
</script>

<footer class="border-t border-line">
  <div class="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
    <div class="flex items-center gap-6">
      <a href="#home" aria-label="{authorName} — back to top" class="font-display text-2xl font-bold tracking-[-0.04em]">
        R<span class="text-accent">/</span>
      </a>
      <p class="label text-subtle">Designed &amp; built by {authorName} · {year}</p>
    </div>

    <nav aria-label="Footer">
      <ul class="flex flex-wrap gap-x-8 gap-y-1">
        {#each links as link}
          <li><a href={link.href} class="label inline-flex min-h-[44px] items-center text-muted hover:text-ink">{link.label}</a></li>
        {/each}
        <li>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" class="label inline-flex min-h-[44px] items-center text-muted hover:text-ink">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </div>
</footer>
