<template>
  <section class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-brand-400 mb-4">
          <span>EXPERIENCE IN PRACTICE</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          {{ servicesSection.heading }}
        </h2>
        <p class="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {{ servicesSection.subtitle }}
        </p>
      </div>

      <!-- Refined Editorial Grid (3x2 on desktop, clean typography and minimal borders) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.number"
          class="group p-8 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/50 hover:bg-dark-surface dark:hover:bg-dark-surface light:hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Number & Minimal Icon Bar -->
            <div class="flex items-center justify-between mb-6">
              <span class="text-2xl font-mono font-bold text-slate-500/80 group-hover:text-brand-400 transition-colors">
                {{ service.number }}
              </span>
              <div class="w-10 h-10 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-400 group-hover:border-brand-500/30 transition-all">
                <component :is="getIcon(service.icon)" class="w-5 h-5" />
              </div>
            </div>

            <!-- Service Title -->
            <h3 class="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-300 dark:group-hover:text-brand-300 light:group-hover:text-brand-600 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Concise Description -->
            <p class="mt-3 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>

          <!-- Highlight Bullets -->
          <div class="mt-8 pt-6 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 space-y-2">
            <div 
              v-for="(highlight, idx) in service.highlights" 
              :key="idx"
              class="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-400/80"></span>
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
