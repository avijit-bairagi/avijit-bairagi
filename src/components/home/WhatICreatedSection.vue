<template>
  <section id="what-i-created" class="py-12 lg:py-16 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-8">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-brand-400 mb-2">
          <span>CREATIONS &amp; INDEPENDENT PLATFORMS</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          What I Created
        </h2>
        <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          Independent web platforms, accounting software, gaming engines, and backend frameworks built from the ground up.
        </p>
      </div>

      <!-- 4 Creations Grid (Responsive 1 -> 2 cols) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div 
          v-for="item in creationsList" 
          :key="item.id"
          class="group p-5 sm:p-6 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/40 transition-colors flex flex-col justify-between shadow-xs"
        >
          <div>
            <!-- Top Bar: Logo & Badge -->
            <div class="flex items-center justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <CreationIcon :icon-key="item.iconKey" />
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    {{ item.name }}
                  </h3>
                  <div class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                    {{ item.category }}
                  </div>
                </div>
              </div>

              <!-- Badge -->
              <span class="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200">
                {{ item.badgeText }}
              </span>
            </div>

            <!-- Tagline -->
            <div class="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-2 font-mono">
              {{ item.tagline }}
            </div>

            <!-- Description (Clear, concise) -->
            <p class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
              {{ item.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1.5 mb-2">
              <span 
                v-for="tech in item.technologies" 
                :key="tech"
                class="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border/40 dark:border-dark-border/40 light:border-slate-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="mt-5 pt-3.5 border-t border-dark-border/50 dark:border-dark-border/50 light:border-slate-100 flex items-center justify-between">
            <button 
              @click="activeCreation = item"
              type="button"
              class="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 font-semibold transition-colors focus:outline-none"
            >
              <span>{{ item.id === 'arcade-play' ? 'Play Game Demo' : (item.id === 'smart-hisab' ? 'Try Smart Hisab Demo' : 'View Specifications') }}</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>

            <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: item.accentColor }"></span>
          </div>
        </div>
      </div>

      <!-- Preview Modal Component -->
      <CreationPreviewModal 
        :creation="activeCreation" 
        @close="activeCreation = null" 
      />

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { creationsList, type CreatedItem } from '@/data/creations'
import CreationIcon from '@/components/home/CreationIcon.vue'
import CreationPreviewModal from '@/components/home/CreationPreviewModal.vue'

const activeCreation = ref<CreatedItem | null>(null)
</script>
