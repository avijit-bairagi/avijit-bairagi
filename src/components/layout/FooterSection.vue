<template>
  <footer class="border-t border-slate-200 dark:border-dark-border bg-white/60 dark:bg-dark-bg/60 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
      <div>
        &copy; {{ currentYear }} Avijit Bairagi
      </div>
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          Home
        </RouterLink>
        <RouterLink to="/portfolio" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          Professional Experience
        </RouterLink>
        <RouterLink to="/contact" class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          Contact
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
