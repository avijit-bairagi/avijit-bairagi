<template>
  <section class="py-24 sm:py-32 border-y border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-bg/40 dark:bg-dark-bg/40 light:bg-slate-50/40 relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8">
        <span>ENGINEERING PHILOSOPHY</span>
      </div>

      <!-- Large Editorial Statement -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.2] max-w-4xl mx-auto">
        &ldquo;{{ profile.philosophy.heading }}&rdquo;
      </h2>

      <!-- Refined Supporting Reflection -->
      <div class="mt-8 sm:mt-10 max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
        <p>
          {{ profile.philosophy.quote }}
        </p>
        <p class="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-500">
          {{ profile.philosophy.details }}
        </p>
      </div>

      <!-- Understated Author Sign-off -->
      <div class="mt-12 flex items-center justify-center gap-3">
        <div class="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center font-mono text-xs text-brand-400 font-bold">
          AB
        </div>
        <div class="text-left">
          <div class="text-sm font-bold text-white dark:text-white light:text-slate-900">Avijit Bairagi</div>
          <div class="text-xs font-mono text-slate-500">Lead Software Engineer</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile'
</script>
