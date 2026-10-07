<script lang="ts">
  import { onMount, tick } from 'svelte';

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' }
  ];

  let open = $state(false);
  let scrolled = $state(false);
  let menuButton: HTMLButtonElement | undefined = $state();
  let firstMenuLink: HTMLAnchorElement | undefined = $state();

  async function toggle() {
    open = !open;
    if (open) {
      await tick();
      firstMenuLink?.focus();
    }
  }

  function close(returnFocus = false) {
    open = false;
    if (returnFocus) menuButton?.focus();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) close(true);
  }

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Close the mobile menu if the viewport grows past the breakpoint.
    const desktop = window.matchMedia('(min-width: 768px)');
    const onChange = () => desktop.matches && close();
    desktop.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      desktop.removeEventListener('change', onChange);
    };
  });
</script>

<svelte:window onkeydown={onKeydown} />

<header
  class="sticky top-0 z-50 border-b bg-bg transition-colors duration-200
    {scrolled || open ? 'border-line' : 'border-transparent'}"
>
  <div class="container-page flex h-[var(--header-h)] items-center justify-between">
    <a href="#home" aria-label="Rishab — home" class="font-display text-2xl font-bold tracking-[-0.04em]">
      R<span class="text-accent">/</span>
    </a>

    <nav aria-label="Primary" class="hidden md:block">
      <ul class="flex items-center gap-10">
        {#each links as link}
          <li>
            <a href={link.href} class="label text-muted transition-colors hover:text-ink">{link.label}</a>
          </li>
        {/each}
        <li>
          <a
            href="#contact"
            class="btn min-h-[40px] border border-accent px-5 text-accent hover:bg-accent hover:text-bg"
          >
            Let’s talk <span class="link-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      </ul>
    </nav>

    <button
      bind:this={menuButton}
      type="button"
      class="-mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
      aria-expanded={open}
      aria-controls="mobile-menu"
      onclick={toggle}
    >
      <span class="label text-muted">{open ? 'Close' : 'Menu'}</span>
      <span class="relative block h-3 w-6" aria-hidden="true">
        <span
          class="absolute left-0 h-px w-6 bg-ink transition-transform duration-200
            {open ? 'top-1/2 rotate-45' : 'top-0'}"
        ></span>
        <span
          class="absolute left-0 h-px w-6 bg-ink transition-transform duration-200
            {open ? 'top-1/2 -rotate-45' : 'bottom-0'}"
        ></span>
      </span>
    </button>
  </div>

  {#if open}
    <nav id="mobile-menu" aria-label="Mobile" class="border-t border-line bg-bg md:hidden">
      <ul class="container-page flex flex-col py-4">
        {#each links as link, i}
          <li class="border-b border-line">
            {#if i === 0}
              <a
                bind:this={firstMenuLink}
                href={link.href}
                onclick={() => close()}
                class="flex min-h-[56px] items-center font-display text-3xl font-semibold tracking-[-0.03em]"
              >
                {link.label}
              </a>
            {:else}
              <a
                href={link.href}
                onclick={() => close()}
                class="flex min-h-[56px] items-center font-display text-3xl font-semibold tracking-[-0.03em]"
              >
                {link.label}
              </a>
            {/if}
          </li>
        {/each}
        <li class="pt-6">
          <a href="#contact" onclick={() => close()} class="btn-primary w-full">
            Let’s talk <span aria-hidden="true">→</span>
          </a>
        </li>
      </ul>
    </nav>
  {/if}
</header>
