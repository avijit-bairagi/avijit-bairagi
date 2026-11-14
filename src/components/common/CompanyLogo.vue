<template>
  <div class="inline-flex items-center justify-center select-none shrink-0" :class="wrapperClass">
    <div class="flex items-center gap-2.5">
      <!-- Real Official Company Logo (with crisp rounded frame & SVG fallback) -->
      <div
        v-if="officialLogoSrc && !imgFailed"
        :class="containerSizeClass"
        class="rounded-lg bg-white border border-slate-200/90 dark:border-dark-border flex items-center justify-center overflow-hidden p-1 shrink-0"
      >
        <img
          :src="officialLogoSrc"
          :alt="fallbackText || logoKey"
          class="w-full h-full object-contain"
          loading="lazy"
          @error="imgFailed = true"
        />
      </div>

      <!-- High-clarity Vector Fallback / bKash Origami Mark -->
      <template v-else>
        <svg v-if="logoKey === 'bkash'" :class="containerSizeClass" class="shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E2136E" fill-opacity="0.08" />
          <path d="M22 6L33 17L27 21L22 6Z" fill="#E2136E" />
          <path d="M12 14L22 6L20 22L12 14Z" fill="#C20D5D" />
          <path d="M20 22L27 21L24 34L20 22Z" fill="#E2136E" />
          <path d="M12 14L20 22L8 27L12 14Z" fill="#ED3785" />
          <path d="M8 27L20 22L15 34L8 27Z" fill="#A8094E" />
        </svg>

        <svg v-else-if="logoKey === 'inument'" :class="containerSizeClass" class="text-sky-500 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#0284C7" fill-opacity="0.12" />
          <path d="M10 26V10L16 16V26H10Z" fill="#38BDF8" />
          <path d="M20 26V10L26 16V26H20Z" fill="#0284C7" />
          <circle cx="23" cy="13" r="2.5" fill="#38BDF8" />
        </svg>

        <svg v-else-if="logoKey === 'brac-it'" :class="containerSizeClass" class="shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#0EA5E9" fill-opacity="0.14" />
          <rect x="6" y="7" width="24" height="22" rx="4" stroke="#0284C7" stroke-width="2" />
          <path d="M12 15L16 18L12 21" stroke="#0284C7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="18" y1="21" x2="24" y2="21" stroke="#0EA5E9" stroke-width="2.2" stroke-linecap="round" />
        </svg>

        <svg v-else-if="logoKey === 'brac-bank'" :class="containerSizeClass" class="shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#00529B" />
          <path d="M8 10H18C21.3137 10 24 12.6863 24 16C24 19.3137 21.3137 22 18 22H13V26H8V10Z" fill="white" />
          <rect x="22" y="20" width="6" height="6" rx="1.5" fill="#FFC82E" />
        </svg>

        <svg v-else-if="logoKey === 'robi'" :class="containerSizeClass" class="shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#ED1C24" fill-opacity="0.08" />
          <polygon points="18,5 28,13 18,18 8,13" fill="#ED1C24" />
          <polygon points="28,13 31,23 21,22 18,18" fill="#F7941E" />
          <polygon points="8,13 5,23 15,22 18,18" fill="#C11117" />
          <polygon points="18,18 21,22 18,31 15,22" fill="#FFDE00" />
        </svg>

        <svg v-else-if="logoKey === 'beximco'" :class="containerSizeClass" class="shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#0F766E" fill-opacity="0.12" />
          <circle cx="18" cy="18" r="10" stroke="#0F766E" stroke-width="2.2" />
          <path d="M13 13L23 23M23 13L13 23" stroke="#14B8A6" stroke-width="2.2" stroke-linecap="round" />
        </svg>

        <svg v-else-if="logoKey === 'itogether'" :class="containerSizeClass" class="text-indigo-500 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#6366F1" fill-opacity="0.14" />
          <circle cx="14" cy="12" r="3" fill="#6366F1" />
          <path d="M14 18V26" stroke="#6366F1" stroke-width="3" stroke-linecap="round" />
          <circle cx="22" cy="15" r="2.5" fill="#818CF8" />
          <path d="M22 20V26" stroke="#818CF8" stroke-width="2.5" stroke-linecap="round" />
          <path d="M11 26H25" stroke="#6366F1" stroke-width="2" stroke-linecap="round" />
        </svg>

        <div v-else :class="containerSizeClass" class="rounded-lg bg-slate-100 dark:bg-dark-elevated border border-slate-200 dark:border-dark-border flex items-center justify-center text-xs font-bold font-mono text-slate-600 dark:text-slate-300">
          {{ fallbackText?.slice(0, 2) || 'CO' }}
        </div>
      </template>

      <span v-if="!iconOnly && fallbackText" class="font-bold text-sm text-slate-900 dark:text-white font-sans">
        {{ fallbackText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    logoKey: string
    fallbackText?: string
    wrapperClass?: string
    iconOnly?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg'
  }>(),
  {
    iconOnly: false,
    size: 'md'
  }
)

const imgFailed = ref(false)

const logoMap: Record<string, string> = {
  inument: '/logos/inument.png',
  'brac-it': '/logos/brac-it.png',
  itogether: '/logos/itogether.png',
  'brac-bank': '/logos/brac-bank.png',
  robi: '/logos/robi.svg',
  beximco: '/logos/beximco.png'
}

const officialLogoSrc = computed(() => logoMap[props.logoKey] || '')

const containerSizeClass = computed(() => {
  if (props.size === 'xs') return 'h-4 w-4'
  if (props.size === 'sm') return 'h-7 w-7'
  if (props.size === 'lg') return 'h-12 w-12'
  return props.iconOnly ? 'h-11 w-11' : 'h-8 w-8'
})
</script>
