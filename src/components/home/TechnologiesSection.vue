<template>
  <section class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-brand-400 mb-4">
          <span>TECHNICAL TOOLKIT</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
          The Technologies Behind My Work
        </h2>
        <p class="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          A practical engineering toolkit for building scalable, reliable, and maintainable software systems.
        </p>
      </div>

      <!-- Prominent Backend & Architecture Showcase (Highlighting Java & Spring Boot) -->
      <div class="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-950/20 via-dark-surface to-dark-elevated/70 dark:from-brand-950/20 dark:via-dark-surface dark:to-dark-elevated/70 light:from-sky-50 light:via-white light:to-slate-100 border border-brand-500/20 shadow-lg">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              <h3 class="text-lg font-bold text-white dark:text-white light:text-slate-900">
                Core Engineering Foundation: Java & Distributed Backend Ecosystem
              </h3>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              High-throughput architectures, non-blocking reactive streams, and resilient financial microservices.
            </p>
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 self-start md:self-auto">
            Primary Specialization
          </span>
        </div>

        <!-- High-Prominence Featured Technologies Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div 
            v-for="tech in prominentTechnologies" 
            :key="tech.name"
            class="group p-4 rounded-xl bg-dark-bg/80 dark:bg-dark-bg/80 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-400/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all flex flex-col items-center text-center relative"
          >
            <div class="w-12 h-12 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-50 border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex items-center justify-center p-2.5 text-brand-400 group-hover:scale-110 group-hover:text-brand-300 transition-all">
              <TechIcon :name="tech.name" wrapper-class="w-full h-full" />
            </div>
            <span class="mt-3 font-semibold text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
              {{ tech.name }}
            </span>
            <span class="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 line-clamp-1">
              {{ tech.subtext }}
            </span>

            <!-- Tooltip on hover -->
            <div class="absolute bottom-full mb-2 hidden group-hover:block z-30 w-52 p-2.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-900 text-[11px] text-slate-300 light:text-slate-100 shadow-xl border border-dark-border dark:border-dark-border pointer-events-none text-left">
              {{ tech.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- Category Breakdown Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="category in filteredCategories" 
          :key="category.id"
          class="p-5 rounded-xl bg-dark-surface/60 dark:bg-dark-surface/60 light:bg-white border border-dark-border/70 dark:border-dark-border/70 light:border-slate-200 hover:border-dark-border hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
                {{ category.name }}
              </h4>
              <span class="text-[11px] font-mono text-slate-500">
                {{ category.skills.length }} tools
              </span>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4 leading-relaxed">
              {{ category.description }}
            </p>

            <!-- Skill Badges -->
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="skill in category.skills" 
                :key="skill.name"
                class="group relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-100 border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-brand-500/50 hover:text-white dark:hover:text-white transition-all cursor-default"
              >
                <TechIcon :name="skill.name" wrapper-class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-400" />
                <span>{{ skill.name }}</span>

                <!-- Hover Tooltip -->
                <div v-if="skill.description" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 w-48 p-2 rounded bg-dark-bg dark:bg-dark-bg light:bg-slate-900 text-[10px] text-slate-300 light:text-slate-100 shadow-xl border border-dark-border dark:border-dark-border pointer-events-none text-center">
                  {{ skill.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation Link as specified in prompt -->
      <div class="mt-12 text-center">
        <RouterLink 
          to="/portfolio#expertise" 
          class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
        >
          <span>Explore My Complete Technical Experience</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    description: 'Core backend foundation: OOP, Project Loom concurrency, memory management & JVM optimization.'
  },
  {
    name: 'Spring Boot',
    subtext: 'Microservices & APIs',
    description: 'Production microservices, IoC container, auto-configuration, and high-throughput enterprise APIs.'
  },
  {
    name: 'Spring WebFlux',
    subtext: 'Reactive Streams',
    description: 'Non-blocking I/O event loops with Project Reactor for high-concurrency payment gateways.'
  },
  {
    name: 'PostgreSQL',
    subtext: 'ACID Data Layer',
    description: 'Complex financial transactions, partitioned schemas, connection pooling, and zero data loss.'
  },
  {
    name: 'Apache Kafka',
    subtext: 'Event Streaming',
    description: 'Decoupled event-driven processing, partitioned transaction logs, and idempotent consumer groups.'
  },
  {
    name: 'Redis',
    subtext: 'Cache & Locks',
    description: 'Sub-millisecond latency distributed caching, session replication, and Redlock distributed locks.'
  }
]

// All categories for the breakdown
const filteredCategories = computed(() => {
  return skillCategories
})
</script>
