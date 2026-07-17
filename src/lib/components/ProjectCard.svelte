<script lang="ts">
  import { ExternalLink } from 'lucide-svelte';
  import type { Project } from './types';

  // Props
  export let project: Project;
  export let index: number = 0;
</script>

<div
  class="border-4 border-black bg-zinc-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group overflow-hidden"
  style="animation: fadeInUp 0.6s ease-out {index * 0.2}s both;"
>
  <div class="grid md:grid-cols-[200px_1fr] gap-0">
    <div class="bg-yellow-300 border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center text-8xl p-8">
      {project.image}
    </div>
    
    <div class="p-8">
      <h3 
        class="text-3xl md:text-4xl font-black mb-3"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        {project.title}
      </h3>
      
      <p class="text-lg text-zinc-700 mb-6">
        {project.description}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        {#each project.tags as tag}
          <span
            class="px-3 py-1 bg-white border-2 border-black text-sm font-bold"
            style="font-family: 'Space Mono', monospace;"
          >
            {tag}
          </span>
        {/each}
      </div>
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
        style="font-family: 'Space Mono', monospace;"
      >
        VIEW PROJECT <ExternalLink class="w-4 h-4" />
      </a>
    </div>
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
