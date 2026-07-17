<script lang="ts">
  import type { HeroData, ContactData } from './types';

  // Props
  export let heroData: HeroData;
  export let email: string;
  export let isVisible: boolean = false;
  export let onNavigate: (sectionId: string) => void;
</script>

<section 
  id="hero" 
  class="min-h-screen flex items-center justify-center px-6 pt-20"
>
  <div class="max-w-6xl w-full">
    <div class="transition-all duration-1000 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <div class="inline-block mb-6 px-4 py-2 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
        <p class="text-sm font-black uppercase tracking-wider" style="font-family: 'Space Mono', monospace;">
          Available for Work
        </p>
      </div>
      
      <h1 
        class="text-7xl md:text-9xl font-black mb-4 leading-none"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        {heroData.name.split(' ')[0]}<br/>
        <span class="text-zinc-300">{heroData.name.split(' ')[1]}</span>
      </h1>
      
      <div class="flex items-center gap-4 mb-8">
        <div class="h-1 w-20 bg-black"></div>
        <p class="text-2xl md:text-3xl font-bold" style="font-family: 'Space Mono', monospace;">
          {heroData.title}
        </p>
      </div>
      
      <p class="text-xl md:text-2xl text-zinc-600 mb-4 max-w-2xl">
        {heroData.tagline}
      </p>
      
      <p class="text-lg text-zinc-500 mb-12 max-w-xl">
        {heroData.description}
      </p>
      
      <div class="flex flex-wrap gap-4">
        <a
          href="mailto:{email}"
          class="px-8 py-4 bg-black text-white font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          style="font-family: 'Space Mono', monospace;"
        >
          GET IN TOUCH
        </a>
        
        <button
          on:click={() => onNavigate('projects')}
          class="px-8 py-4 bg-white font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          style="font-family: 'Space Mono', monospace;"
        >
          VIEW PROJECTS
        </button>
      </div>
    </div>
  </div>
</section>
