<script lang="ts">
  import { Github } from 'lucide-svelte';
  import ProjectCard from './ProjectCard.svelte';
  import type { Project } from './types';

  // Props
  export let projects: Project[];
  export let githubUrl: string;
  export let isVisible: boolean = false;
</script>

<section 
  id="projects" 
  class="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
>
  <div class="max-w-6xl w-full">
    <div class="transition-all duration-1000 delay-100 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <h2 
        class="text-6xl md:text-8xl font-black mb-12"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        Featured <span class="text-zinc-300">Work</span>
      </h2>
      
      <div class="grid md:grid-cols-1 gap-8">
        {#each projects as project, idx}
          <ProjectCard {project} index={idx} />
        {/each}
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-lg text-zinc-600 mb-6">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          style="font-family: 'Space Mono', monospace;"
        >
          <Github class="w-5 h-5" />
          VIEW ALL PROJECTS
        </a>
      </div>
    </div>
  </div>
</section>
