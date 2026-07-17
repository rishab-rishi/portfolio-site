<script lang="ts">
  // Props
  export let activeSection: string;
  export let onNavigate: (sectionId: string) => void;
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b-4 border-black">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <button 
      on:click={() => onNavigate('hero')}
      class="text-2xl font-black tracking-tight hover:scale-105 transition-transform"
      style="font-family: 'Space Mono', monospace;"
    >
      &lt;RC/&gt;
    </button>
    
    <div class="flex gap-6">
      {#each ['about', 'skills', 'projects'] as section}
        <button
          on:click={() => onNavigate(section)}
          class="text-sm font-bold uppercase tracking-wider transition-all {activeSection === section ? 'text-black scale-110' : 'text-zinc-400 hover:text-black'}"
          style="font-family: 'Space Mono', monospace;"
        >
          {section}
        </button>
      {/each}
    </div>
  </div>
</nav>
