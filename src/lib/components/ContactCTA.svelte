<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { ContactData } from './types';

  let { contact }: { contact: ContactData } = $props();
</script>

<section id="contact" class="section-pad">
  <div class="container-page">
    <div
      use:reveal
      class="grid gap-12 rounded-[var(--radius)] border border-line bg-surface p-6 md:p-12 lg:grid-cols-[7fr_5fr] lg:items-end lg:p-16"
    >
      <div>
        <p class="section-label">Have a project in mind?</p>
        <h2 class="mt-5 font-display text-[2.5rem] font-bold leading-[1] tracking-[-0.045em] md:text-6xl lg:text-7xl">
          Let’s build something.
        </h2>
        <p class="mt-6 max-w-[46ch] text-muted">
          Have a website, SaaS product or dashboard in mind? Let’s talk about what you need.
        </p>
      </div>

      <div class="flex flex-col gap-6 lg:border-l lg:border-line lg:pl-12">
        <a href="mailto:{contact.email}" class="btn-primary self-start">
          Start a conversation <span class="link-arrow" aria-hidden="true">→</span>
        </a>
        <ul class="space-y-1">
          <li>
            <a href="mailto:{contact.email}" class="inline-flex min-h-[44px] items-center gap-3 break-all text-ink hover:text-accent">
              <span class="label w-16 shrink-0 text-subtle">Email</span>{contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[44px] items-center gap-3 text-ink hover:text-accent"
            >
              <span class="label w-16 shrink-0 text-subtle">GitHub</span>{contact.github.replace(/^https?:\/\//, '')}
            </a>
          </li>
          {#if contact.linkedin}
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-[44px] items-center gap-3 text-ink hover:text-accent"
              >
                <span class="label w-16 shrink-0 text-subtle">LinkedIn</span>{contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </div>
</section>
