<template>
  <section class="py-8 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-surface/40 dark:bg-dark-surface/40 light:bg-slate-50/70">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-5 pb-2 border-b border-dark-border/40 dark:border-dark-border/40 light:border-slate-200 text-xs font-mono">
        <span class="uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold">
          Engineering Track Record
        </span>
        <span class="text-slate-500 dark:text-slate-400 text-[11px] hidden sm:inline">
          Verified Enterprise Scale &amp; Uptime
        </span>
      </div>

      <!-- 4 Key Snapshot Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div 
          v-for="stat in profile.snapshotStats" 
          :key="stat.id"
          class="p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/40 transition-colors group"
        >
          <div class="text-xl sm:text-2xl font-extrabold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 font-mono transition-colors">
            {{ stat.value }}
          </div>
          <div class="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-1">
            {{ stat.label }}
          </div>
          <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 leading-normal">
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
