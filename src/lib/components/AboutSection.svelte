<script lang="ts">
  import { Code2, Sparkles } from 'lucide-svelte';
  import type { AboutData } from './types';

  // Props
  export let aboutData: AboutData;
  export let isVisible: boolean = false;
</script>

<section 
  id="about" 
  class="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
>
  <div class="max-w-6xl w-full">
    <div class="transition-all duration-1000 delay-100 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <h2 
        class="text-6xl md:text-8xl font-black mb-12"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        About <span class="text-zinc-300">Me</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="text-lg md:text-xl text-zinc-700 leading-relaxed mb-8">
            {aboutData.text}
          </p>
          
          <div class="space-y-4">
            {#each aboutData.highlights as highlight, idx}
              <div 
                class="flex items-start gap-3"
                style="animation: fadeIn 0.6s ease-out {0.2 + idx * 0.1}s both;"
              >
                <Sparkles class="w-6 h-6 flex-shrink-0 mt-1" />
                <p class="text-lg font-semibold">{highlight}</p>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="bg-zinc-50 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div class="flex items-center gap-3 mb-6">
            <Code2 class="w-8 h-8" />
            <h3 class="text-2xl font-black" style="font-family: 'Space Mono', monospace;">
              Quick Facts
            </h3>
          </div>
          
          <div class="space-y-4 text-lg">
            <div class="flex justify-between pb-3 border-b-2 border-zinc-300">
              <span class="font-semibold">Location</span>
              <span class="text-zinc-600">Chennai, IND</span>
            </div>
            <div class="flex justify-between pb-3 border-b-2 border-zinc-300">
              <span class="font-semibold">Experience</span>
              <span class="text-zinc-600">3+ Years</span>
            </div>
            <div class="flex justify-between pb-3 border-b-2 border-zinc-300">
              <span class="font-semibold">Focus</span>
              <span class="text-zinc-600">Full Stack</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Status</span>
              <span class="inline-flex items-center gap-2">
                <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span class="text-zinc-600">Available</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
