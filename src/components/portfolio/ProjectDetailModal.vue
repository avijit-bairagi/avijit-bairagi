<template>
  <div 
    v-if="project" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
    @click.self="$emit('close')"
  >
    <div 
      class="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-2xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`project-modal-title-${project.id}`"
    >
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        type="button"
        class="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-dark-elevated transition-colors focus:outline-none"
        aria-label="Close dialog"
      >
        <X class="w-4 h-4" />
      </button>

      <!-- Context -->
      <div class="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold mb-1.5 pr-10">
        {{ project.organizationName }} &middot; {{ project.domain }}
      </div>

      <!-- Title -->
      <h3 
        :id="`project-modal-title-${project.id}`"
        class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
      >
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {{ project.fullDescription || project.shortDescription }}
      </p>

      <!-- Contributions -->
      <div class="mt-5">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          Key Contributions
        </h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li 
            v-for="(item, idx) in project.contributions" 
            :key="idx"
            class="flex items-start gap-2"
          >
            <CheckCircle2 class="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Technologies -->
      <div class="mt-5 pt-4 border-t border-slate-200 dark:border-dark-border">
        <div class="text-xs text-slate-500 dark:text-slate-400">
          <span class="font-semibold text-slate-700 dark:text-slate-200">Technologies:</span>
          {{ project.technologies.join(' · ') }}
        </div>
      </div>

      <!-- Action Footer -->
      <div class="mt-6 flex justify-end">
        <button 
          @click="$emit('close')"
          type="button"
          class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-dark-elevated hover:bg-slate-200 dark:hover:bg-dark-hover text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-dark-border transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import { X, CheckCircle2 } from 'lucide-vue-next'
import type { ProjectItem } from '@/data/projects'

const props = defineProps<{
  project: ProjectItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.project) {
    emit('close')
  }
}

watch(
  () => props.project,
  (val) => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  }
)

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>
