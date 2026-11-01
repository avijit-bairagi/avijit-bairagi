<template>
  <section id="organizations" class="py-20 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-dark-surface/20 dark:bg-dark-surface/20 light:bg-slate-50/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-emerald-400 mb-3">
          <span>ORGANIZATIONAL FOOTPRINT</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          {{ companySection.heading }}
        </h2>
        <p class="mt-2.5 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {{ companySection.subtitle }}
        </p>
      </div>

      <!-- 6 Organizations Grid (Responsive 1 col -> 2 cols -> 3 cols) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="company in companies" 
          :key="company.id"
          class="group p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Top Bar: Logo & Relationship Badge -->
            <div class="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-dark-border/50 dark:border-dark-border/50 light:border-slate-100">
              <!-- Authentic Company Logo -->
              <div class="h-10 flex items-center">
                <CompanyLogo 
                  :logo-key="company.logoKey" 
                  :fallback-text="company.logoText" 
                />
              </div>

              <!-- Relationship Tag -->
              <span 
                class="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                :class="[
                  company.relationship.includes('Employer')
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    : 'bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-dark-border/70 dark:border-dark-border/70 light:border-slate-200'
                ]"
              >
                {{ company.relationship }}
              </span>
            </div>

            <!-- Prominent Company Name & Domain -->
            <div class="mb-4">
              <h3 class="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                {{ company.name }}
              </h3>
              <div class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                {{ company.domain }}
              </div>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-5">
              {{ company.description }}
            </p>

            <!-- Contributions: Clean Compact Bullet Points -->
            <div class="space-y-2">
              <div class="text-[11px] font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 font-semibold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Contributions &amp; Systems</span>
              </div>
              <ul class="space-y-1.5 pl-1">
                <li 
                  v-for="(contrib, cIdx) in company.contributions" 
                  :key="cIdx"
                  class="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  <span class="w-1 h-1 rounded-full bg-brand-400 shrink-0"></span>
                  <span class="font-medium">{{ contrib }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card Bottom Link to Portfolio Anchor -->
          <div class="mt-6 pt-4 border-t border-dark-border/40 dark:border-dark-border/40 light:border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
            <RouterLink 
              :to="`/portfolio#org-${company.id}`"
              class="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 transition-colors group-hover:underline"
            >
              <span>Explore in Portfolio</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
            <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: company.accentColor }"></span>
          </div>
        </div>
      </div>

      <!-- Footnote Verification Disclaimer -->
      <div class="mt-10 p-4 rounded-xl bg-dark-elevated/40 dark:bg-dark-elevated/40 light:bg-slate-100/70 border border-dark-border/40 dark:border-dark-border/40 light:border-slate-200 text-center">
        <p class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
          &ldquo;{{ companySection.caption }}&rdquo;
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { companies, companySection } from '@/data/companies'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
</script>
