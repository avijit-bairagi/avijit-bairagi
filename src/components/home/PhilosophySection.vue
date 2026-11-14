<template>
  <section class="py-14 sm:py-20 border-y border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-bg/40 dark:bg-dark-bg/40 light:bg-slate-50/40 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4">
        <span>ENGINEERING PHILOSOPHY</span>
      </div>

      <!-- Large Editorial Statement with text-wrap: balance -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.25] [text-wrap:balance]">
        &ldquo;{{ profile.philosophy.heading }}&rdquo;
      </h2>

      <!-- Refined Supporting Reflection -->
      <div class="mt-5 max-w-2xl mx-auto space-y-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
        <p>
          {{ profile.philosophy.quote }}
        </p>
        <p class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
          {{ profile.philosophy.details }}
        </p>
      </div>

      <!-- Author Sign-off -->
      <div class="mt-8 flex items-center justify-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center font-mono text-xs text-brand-400 font-bold">
          AB
        </div>
        <div class="text-left">
          <div class="text-xs font-bold text-white dark:text-white light:text-slate-900 leading-tight">Avijit Bairagi</div>
          <div class="text-[10px] font-mono text-slate-500">Lead Software Engineer</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile'
</script>
