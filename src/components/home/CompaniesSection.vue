<template>
  <section id="companies" class="py-8 sm:py-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
        Companies I Worked With
      </h2>

      <!-- Companies Grid: Official Logo and Full Name Only -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
        <a
          v-for="company in companies"
          :key="company.id"
          :href="company.website"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 transition-all text-center shadow-xs hover:shadow-sm"
        >
          <ExternalLink class="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2.5 right-2.5" />

          <div class="mb-3 w-full flex justify-center group-hover:scale-[1.03] transition-transform duration-200">
            <CompanyLogo
              :logo-key="company.logoKey"
              :fallback-text="company.name"
              :icon-only="true"
              size="card"
              wrapper-class="w-full"
            />
          </div>

          <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
            {{ company.name }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import { companies } from '@/data/companies'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
</script>
