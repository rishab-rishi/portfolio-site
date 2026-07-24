<script lang="ts">
  import { Github, Linkedin, Mail } from 'lucide-svelte';
  import type { ContactData } from './types';

  // Props
  export let contactData: ContactData;
  export let authorName: string;
</script>

<footer class="bg-black text-white py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 
        class="text-5xl md:text-7xl font-black mb-6"
        style="font-family: 'Space Grotesk', sans-serif;"
      >
        Let's Build Something
      </h2>
      <p class="text-xl text-zinc-400 mb-8">
        I'm always open to discussing new projects and opportunities
      </p>
      
      <a
        href="mailto:{contactData.email}"
        class="inline-block px-10 py-5 bg-yellow-300 text-black font-black text-xl border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
        style="font-family: 'Space Mono', monospace;"
      >
        {contactData.email}
      </a>
    </div>
    
    <div class="flex justify-center gap-8 mb-12">
      <a
        href={contactData.github}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform"
      >
        <Github class="w-8 h-8" />
      </a>
      <!-- <a
        href={contactData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-110 transition-transform"
      >
        <Linkedin class="w-8 h-8" />
      </a> -->
      <a
        href="mailto:{contactData.email}"
        class="hover:scale-110 transition-transform"
      >
        <Mail class="w-8 h-8" />
      </a>
    </div>
    
    <div class="text-center text-zinc-500 text-sm" style="font-family: 'Space Mono', monospace;">
      <p>© 2026 {authorName}. Built with Svelte & Tailwind.</p>
    </div>
  </div>
</footer>
