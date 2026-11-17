<template>
  <div class="inline-flex items-center justify-center select-none shrink-0" :class="wrapperClass">
    <div class="flex items-center gap-2.5 w-full justify-center">
      <!-- Real Official Company Logo -->
      <div
        v-if="officialLogoSrc && !imgFailed"
        :class="[containerSizeClass, containerBgClass]"
        class="border flex items-center justify-center overflow-hidden shrink-0"
      >
        <img
          :src="officialLogoSrc"
          :alt="fallbackText || logoKey"
          :class="imgClass"
          loading="lazy"
          @error="imgFailed = true"
        />
      </div>

      <!-- Fallback Initial Badge if asset fails -->
      <div
        v-else
        :class="containerSizeClass"
        class="rounded-lg bg-slate-100 dark:bg-dark-elevated border border-slate-200 dark:border-dark-border flex items-center justify-center text-xs font-bold font-mono text-slate-600 dark:text-slate-300"
      >
        {{ fallbackText?.slice(0, 2).toUpperCase() || 'CO' }}
      </div>

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
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'card'
  }>(),
  {
    iconOnly: false,
    size: 'md'
  }
)

const imgFailed = ref(false)

const fullLogoMap: Record<string, string> = {
  inument: '/logos/inument-full.png',
  'brac-it': '/logos/brac-it.png',
  itogether: '/logos/itogether-full.png',
  bkash: '/logos/bkash-full.jpg',
  'brac-bank': '/logos/brac-bank-full.svg',
  robi: '/logos/robi-light.svg',
  beximco: '/logos/beximco.png'
}

const compactLogoMap: Record<string, string> = {
  ...fullLogoMap,
  inument: '/logos/inument.png'
}

const officialLogoSrc = computed(() => {
  if (props.size === 'xs' || props.size === 'md') {
    return compactLogoMap[props.logoKey] || fullLogoMap[props.logoKey] || ''
  }
  return fullLogoMap[props.logoKey] || ''
})

const containerBgClass = computed(() => {
  if (props.logoKey === 'brac-it') {
    return 'bg-slate-900 border-slate-800 dark:border-dark-border'
  }
  return 'bg-white border-slate-200/80 dark:border-dark-border'
})

const containerSizeClass = computed(() => {
  if (props.size === 'xs') return 'h-5 w-auto min-w-[20px] px-1 py-0.5 rounded'
  if (props.size === 'sm') return 'h-9 w-16 px-1.5 py-1 rounded-lg'
  if (props.size === 'card') return 'h-12 w-full max-w-[168px] px-2.5 py-1.5 rounded-lg'
  if (props.size === 'lg') return 'h-14 w-36 px-2.5 py-1.5 rounded-xl'
  return props.iconOnly ? 'h-11 w-16 p-1.5 rounded-lg' : 'h-8 w-8 p-1 rounded-lg'
})

const imgClass = computed(() => {
  if (props.size === 'xs') return 'h-full w-auto max-w-[54px] object-contain'
  return 'w-full h-full object-contain'
})
</script>
