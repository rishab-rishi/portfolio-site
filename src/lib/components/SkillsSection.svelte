<script lang="ts">
  import SkillCard from './SkillCard.svelte';
  import type { Skill } from './types';

  // Props
  export let skills: Skill[];
  export let isVisible: boolean = false;
</script>

<section 
  id="skills" 
  class="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-50"
>
  <div class="max-w-6xl w-full">
    <div class="transition-all duration-1000 delay-100 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <h2 
        class="text-6xl md:text-8xl font-black mb-12"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        Skills & <span class="text-zinc-300">Tech</span>
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each skills as skill, idx}
          <SkillCard {skill} index={idx} {isVisible} />
        {/each}
      </div>
    </div>
  </div>
</section>
