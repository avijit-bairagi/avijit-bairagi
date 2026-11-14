<template>
  <section id="companies" class="py-8 sm:py-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
        Companies I Worked With
      </h2>

      <!-- Companies Grid: Logo and Full Name Only -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
        <RouterLink
          v-for="company in companies"
          :key="company.id"
          to="/portfolio"
          class="group flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 transition-all text-center shadow-xs hover:shadow-sm"
        >
          <div class="mb-2.5 group-hover:scale-105 transition-transform duration-200">
            <CompanyLogo
              :logo-key="company.logoKey"
              :fallback-text="company.logoText"
              :icon-only="true"
            />
          </div>

          <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
            {{ company.name }}
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { companies } from '@/data/companies'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
</script>
