<template>
  <section class="py-20 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 bg-gradient-to-b from-dark-surface/40 to-transparent dark:from-dark-surface/40 light:from-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-emerald-400 mb-4">
          <span>VALUE & COLLABORATION</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          {{ offeringsSection.heading }}
        </h2>
        <p class="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {{ offeringsSection.subtitle }}
        </p>
      </div>

      <!-- Offering Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <div 
          v-for="item in offerings" 
          :key="item.id"
          class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Focus Area Tag -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                {{ item.focusArea }}
              </span>
              <component :is="getIcon(item.icon)" class="w-5 h-5 text-slate-400" />
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-white dark:text-white light:text-slate-900">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="mt-2.5 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom check line -->
          <div class="mt-6 pt-4 border-t border-dark-border/40 dark:border-dark-border/40 light:border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
            <span>Ready for implementation</span>
          </div>
        </div>
      </div>

      <!-- Clear CTA Box -->
      <div class="p-8 sm:p-10 rounded-2xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-900 text-white border border-dark-border dark:border-dark-border light:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 class="text-xl sm:text-2xl font-bold">
            Have an Engineering Challenge? Let's Talk.
          </h4>
          <p class="text-sm text-slate-300 mt-1 max-w-xl">
            Whether you need backend architecture direction, high-volume payment integration, or hands-on engineering execution, I'm ready to connect.
          </p>
        </div>

        <a 
          href="#contact"
          @click.prevent="scrollToContact"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-md shrink-0 focus:outline-none"
        >
          <span>Get in Touch</span>
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Server, 
  Layers, 
  ShieldCheck, 
  Users, 
  Gauge, 
  GitMerge, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-vue-next'
import { offerings, offeringsSection } from '@/data/offerings'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'server': return Server
    case 'layers': return Layers
    case 'shield-check': return ShieldCheck
    case 'users': return Users
    case 'gauge': return Gauge
    case 'git-merge': return GitMerge
    default: return Server
  }
}

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
