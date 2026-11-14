<template>
  <section class="py-12 lg:py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-8">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-brand-400 mb-2">
          <span>TECHNICAL TOOLKIT</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          The Technologies Behind My Work
        </h2>
        <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          Production-tested engineering toolkit for building high-concurrency, resilient, and maintainable software systems.
        </p>
      </div>

      <!-- Core Foundation Banner -->
      <div class="mb-8 p-5 sm:p-6 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-brand-500/30 dark:border-brand-500/30 light:border-slate-200 shadow-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200">
          <div>
            <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">
              Core Engineering Foundation: Java &amp; Distributed Backend Ecosystem
            </h3>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              High-throughput architectures, non-blocking reactive streams, and resilient financial microservices.
            </p>
          </div>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 self-start sm:self-auto">
            Primary Specialization
          </span>
        </div>

        <!-- Prominent Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div 
            v-for="tech in prominentTechnologies" 
            :key="tech.name"
            class="group p-3 rounded-lg bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-50 border border-dark-border/70 dark:border-dark-border/70 light:border-slate-200 hover:border-brand-400 transition-colors flex flex-col items-center text-center relative"
          >
            <div class="w-10 h-10 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex items-center justify-center p-2 text-brand-400 group-hover:scale-105 transition-transform">
              <TechIcon :name="tech.name" wrapper-class="w-full h-full" />
            </div>
            <span class="mt-2.5 font-semibold text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">
              {{ tech.name }}
            </span>
            <span class="text-[10px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5 truncate max-w-full">
              {{ tech.subtext }}
            </span>
          </div>
        </div>
      </div>

      <!-- Categories Breakdown Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div 
          v-for="category in filteredCategories" 
          :key="category.id"
          class="p-4 sm:p-5 rounded-xl bg-dark-surface/60 dark:bg-dark-surface/60 light:bg-white border border-dark-border/70 dark:border-dark-border/70 light:border-slate-200 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-300 transition-colors flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
                {{ category.name }}
              </h4>
              <span class="text-[10px] font-mono text-slate-500">
                {{ category.skills.length }} tools
              </span>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3.5 leading-relaxed">
              {{ category.description }}
            </p>

            <!-- Skill Badges -->
            <div class="flex flex-wrap gap-1.5">
              <div 
                v-for="skill in category.skills" 
                :key="skill.name"
                class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-100 border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-brand-500/50 hover:text-white dark:hover:text-white transition-colors cursor-default"
              >
                <TechIcon :name="skill.name" wrapper-class="w-3 h-3 text-slate-400" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation Link -->
      <div class="mt-8 text-center">
        <RouterLink 
          to="/portfolio#expertise" 
          class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
        >
          <span>Explore Complete Technical Matrix in Portfolio</span>
          <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { skillCategories } from '@/data/skills'
import TechIcon from '@/components/common/TechIcon.vue'

const prominentTechnologies = [
  {
    name: 'Java',
    subtext: 'LTS 8, 11, 17, 21',
  },
  {
    name: 'Spring Boot',
    subtext: 'Microservices & APIs',
  },
  {
    name: 'Spring WebFlux',
    subtext: 'Reactive Streams',
  },
  {
    name: 'PostgreSQL',
    subtext: 'ACID Data Layer',
  },
  {
    name: 'Apache Kafka',
    subtext: 'Event Streaming',
  },
  {
    name: 'Redis',
    subtext: 'Cache & Locks',
  }
]

const filteredCategories = computed(() => {
  return skillCategories
})
</script>
