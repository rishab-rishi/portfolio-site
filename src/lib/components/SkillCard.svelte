<script lang="ts">
  import type { Skill } from './types';

  // Props
  export let skill: Skill;
  export let index: number = 0;
  export let isVisible: boolean = false;
</script>

<div
  class="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
  style="animation: fadeInUp 0.5s ease-out {index * 0.05}s both;"
>
  <div class="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2" style="font-family: 'Space Mono', monospace;">
    {skill.category}
  </div>
  <div class="text-xl font-black mb-3" style="font-family: 'Space Grotesk', sans-serif;">
    {skill.name}
  </div>
  
  <div class="w-full bg-zinc-200 h-2 border-2 border-black">
    <div 
      class="bg-black h-full transition-all duration-1000 ease-out"
      style="width: {isVisible ? skill.level : 0}%; transition-delay: {index * 0.05}s;"
    ></div>
  </div>
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
