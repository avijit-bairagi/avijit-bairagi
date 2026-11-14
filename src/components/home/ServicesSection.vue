<template>
  <section class="py-12 lg:py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-8">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-brand-400 mb-2">
          <span>EXPERIENCE IN PRACTICE</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          {{ servicesSection.heading }}
        </h2>
        <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {{ servicesSection.subtitle }}
        </p>
      </div>

      <!-- Refined Grid (3x2 on desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div 
          v-for="service in services" 
          :key="service.number"
          class="group p-5 sm:p-6 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/40 transition-colors flex flex-col justify-between shadow-xs"
        >
          <div>
            <!-- Number & Minimal Icon Bar -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-xl font-mono font-bold text-slate-500/80 group-hover:text-brand-400 transition-colors">
                {{ service.number }}
              </span>
              <div class="w-8 h-8 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-400 transition-colors">
                <component :is="getIcon(service.icon)" class="w-4 h-4" />
              </div>
            </div>

            <!-- Service Title -->
            <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Concise Description -->
            <p class="mt-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>

          <!-- Highlight Bullets -->
          <div class="mt-5 pt-3.5 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 space-y-1">
            <div 
              v-for="(highlight, idx) in service.highlights" 
              :key="idx"
              class="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500"
            >
              <span class="w-1 h-1 rounded-full bg-brand-400"></span>
              <span>{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CreditCard, 
  Landmark, 
  Server, 
  Network, 
  Cpu, 
  RefreshCw 
} from 'lucide-vue-next'
import { services, servicesSection } from '@/data/services'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'credit-card': return CreditCard
    case 'landmark': return Landmark
    case 'server': return Server
    case 'network': return Network
    case 'cpu': return Cpu
    case 'refresh-cw': return RefreshCw
    default: return Server
  }
}
</script>
