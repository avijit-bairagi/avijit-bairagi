<template>
  <section class="pt-10 pb-8 sm:pt-14 sm:pb-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-5">
        <!-- Compact Personal Identity Header -->
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-dark-border shadow-xs shrink-0">
            <img
              :src="profilePhoto"
              alt="Avijit Bairagi"
              class="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div class="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Avijit Bairagi
            </div>
            <div class="text-sm font-medium text-brand-600 dark:text-brand-400 mt-0.5 flex flex-wrap items-center gap-x-2">
              <span>Lead Software Engineer</span>
              <span class="text-slate-300 dark:text-slate-600">|</span>
              <span>Fintech</span>
              <span class="text-slate-300 dark:text-slate-600">|</span>
              <span>Backend Systems</span>
            </div>
          </div>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] [text-wrap:balance]">
          Designing reliable backend systems &amp; digital products.
        </h1>

        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Lead Software Engineer with 8+ years of experience building fintech payment platforms, enterprise banking integrations, cloud-ready services, and everyday web applications.
        </p>

        <div class="pt-1 flex flex-wrap items-center gap-3">
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
import profilePhoto from '@/assets/images/profile.jpeg'
</script>
