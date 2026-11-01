<template>
  <section class="py-12 border-y border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 light:bg-slate-50/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Eyebrow & Title -->
      <div class="flex items-center justify-between mb-8 pb-3 border-b border-dark-border/40 dark:border-dark-border/40 light:border-slate-200">
        <h2 class="text-xs uppercase font-mono tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold">
          Engineering at a Glance
        </h2>
        <span class="text-[11px] font-mono text-slate-500">
          Core Competencies & Proven Track Record
        </span>
      </div>

      <!-- 4 Key Snapshot Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="stat in profile.snapshotStats" 
          :key="stat.id"
          class="p-6 rounded-xl bg-dark-surface/80 dark:bg-dark-surface/80 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 transition-all hover:border-brand-500/40 hover:-translate-y-0.5 group"
        >
          <div class="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
            {{ stat.value }}
          </div>
          <div class="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-1">
            {{ stat.label }}
          </div>
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-2 leading-relaxed">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile'
</script>
