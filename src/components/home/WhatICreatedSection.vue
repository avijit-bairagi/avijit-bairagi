<template>
  <section id="what-i-created" class="py-8 sm:py-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
        What I Created
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <template v-for="item in creationsList" :key="item.id">
          <!-- External Link Card (e.g., Game | Dhamaka) -->
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative text-left p-5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs hover:shadow-sm"
          >
            <ExternalLink class="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity absolute top-3.5 right-3.5" />
            <div class="flex items-center gap-3 mb-3">
              <CreationIcon :icon-key="item.iconKey" />
              <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {{ item.name }}
              </h3>
            </div>

            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ item.description }}
            </p>
          </a>

          <!-- Static Card (Daylo, Smart Hisab) -->
          <div
            v-else
            class="text-left p-5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-xs"
          >
            <div class="flex items-center gap-3 mb-3">
              <CreationIcon :icon-key="item.iconKey" />
              <h3 class="text-base font-bold text-slate-900 dark:text-white">
                {{ item.name }}
              </h3>
            </div>

            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import { creationsList } from '@/data/creations'
import CreationIcon from '@/components/home/CreationIcon.vue'
</script>
