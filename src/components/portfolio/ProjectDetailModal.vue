<template>
  <div 
    v-if="project" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
    @click.self="$emit('close')"
  >
    <div 
      class="relative w-full max-w-3xl rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`project-modal-title-${project.id}`"
    >
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        type="button"
        class="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-200 transition-colors focus:outline-none"
        aria-label="Close dialog"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Category & Context Badges -->
      <div class="flex flex-wrap items-center gap-2 mb-3 pr-10">
        <span class="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20">
          {{ project.domain }}
        </span>
        <span v-if="project.isPersonal" class="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
          Personal Research Project
        </span>
        <span v-else-if="project.organizationName" class="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-elevated text-slate-400 border border-dark-border">
          {{ project.organizationName }} &bull; {{ project.organizationRelationship }}
        </span>
      </div>

      <!-- Title -->
      <h3 
        :id="`project-modal-title-${project.id}`"
        class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900"
      >
        {{ project.title }}
      </h3>

      <!-- Short Description -->
      <p class="mt-2 text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
        {{ project.fullDescription || project.shortDescription }}
      </p>

      <!-- Business Context Block -->
      <div class="mt-6 p-4 rounded-xl bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-50 border border-dark-border/80 dark:border-dark-border/80 light:border-slate-200">
        <div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold mb-1">
          Business &amp; Architectural Context
        </div>
        <p class="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
          {{ project.businessContext }}
        </p>
      </div>

      <!-- Engineering Contributions -->
      <div class="mt-6">
        <h4 class="text-sm font-mono uppercase tracking-wider text-brand-400 font-semibold mb-3">
          Key Engineering Contributions
        </h4>
        <ul class="space-y-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
          <li 
            v-for="(item, idx) in project.contributions" 
            :key="idx"
            class="flex items-start gap-2.5"
          >
            <CheckCircle2 class="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Verified Outcomes -->
      <div v-if="project.verifiedOutcomes && project.verifiedOutcomes.length" class="mt-6">
        <h4 class="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3">
          Verified Outcomes &amp; Impact
        </h4>
        <ul class="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
          <li 
            v-for="(outcome, oIdx) in project.verifiedOutcomes" 
            :key="oIdx"
            class="flex items-start gap-2.5"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span class="leading-relaxed">{{ outcome }}</span>
          </li>
        </ul>
      </div>

      <!-- Technologies Used -->
      <div class="mt-6 pt-6 border-t border-dark-border/80 dark:border-dark-border/80 light:border-slate-200">
        <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
          Technologies &amp; Protocols
        </div>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-200"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="mt-8 pt-4 flex justify-end">
        <button 
          @click="$emit('close')"
          type="button"
          class="px-5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover dark:hover:bg-dark-hover light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-medium border border-dark-border transition-colors"
        >
          Close Specifications
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X, CheckCircle2 } from 'lucide-vue-next'
import type { ProjectItem } from '@/data/projects'

defineProps<{
  project: ProjectItem | null
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>
