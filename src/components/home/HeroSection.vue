<template>
  <section class="pt-12 pb-8 sm:pt-16 sm:pb-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-4">
        <div class="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold">
          Avijit Bairagi &middot; Lead Software Engineer
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] [text-wrap:balance]">
          Engineering reliable backend systems &amp; products built to last.
        </h1>

        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Software Engineer with 8+ years of experience building enterprise fintech platforms, payment switches, scalable microservices, and everyday web applications.
        </p>

        <div class="pt-2 flex flex-wrap items-center gap-3">
          <RouterLink
            to="/portfolio"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-xs"
          >
            <span>Professional Experience</span>
            <ArrowRight class="w-4 h-4" />
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-dark-elevated text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border font-medium text-sm transition-colors"
          >
            <span>Contact</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
