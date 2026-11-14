<template>
  <section id="companies" class="py-12 lg:py-16 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-surface/20 dark:bg-dark-surface/20 light:bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-8">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <span>PARTNERS &amp; CLIENTS</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          Companies I Work With
        </h2>
        <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          National payment networks, commercial banking institutions, telecommunications leaders, and enterprise organizations.
        </p>
      </div>

      <!-- Companies Grid: Name and Logo Only -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <RouterLink 
          v-for="company in companies" 
          :key="company.id"
          :to="`/portfolio#org-${company.id}`"
          class="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/40 hover:bg-dark-elevated/40 dark:hover:bg-dark-elevated/40 light:hover:bg-slate-100/70 transition-all text-center shadow-xs"
        >
          <!-- Logo -->
          <div class="h-12 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
            <CompanyLogo 
              :logo-key="company.logoKey" 
              :fallback-text="company.logoText" 
            />
          </div>

          <!-- Name Only -->
          <span class="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors tracking-tight line-clamp-1">
            {{ company.shortName || company.name }}
          </span>
        </RouterLink>
      </div>

      <!-- Quick Context Link to Portfolio -->
      <div class="mt-8 text-center">
        <RouterLink 
          to="/portfolio" 
          class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-brand-400 transition-colors"
        >
          <span>Detailed professional contributions and project architectures are documented in the Portfolio</span>
          <ArrowRight class="w-3.5 h-3.5 text-brand-400" />
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { companies } from '@/data/companies'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
</script>
