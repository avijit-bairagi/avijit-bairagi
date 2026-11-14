<template>
  <div class="inline-flex items-center justify-center select-none shrink-0">
    <!-- Game | Dhamaka Official Icon -->
    <div v-if="iconKey === 'dhamaka-game'" class="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden">
      <img
        v-if="!imgFailed"
        src="/logos/dhamaka-game.svg"
        alt="Game | Dhamaka"
        class="w-full h-full object-contain"
        @error="imgFailed = true"
      />
      <div
        v-else
        class="w-11 h-11 rounded-xl bg-lime-500/15 border border-lime-500/30 flex items-center justify-center p-2.5"
      >
        <svg class="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="24" height="16" rx="6" fill="#84CC16" fill-opacity="0.2" stroke="#65A30D" stroke-width="2" />
          <path d="M10 13V19M7 16H13" stroke="#65A30D" stroke-width="2" stroke-linecap="round" />
          <circle cx="21" cy="14" r="1.5" fill="#65A30D" />
          <circle cx="23.5" cy="17" r="1.5" fill="#65A30D" />
        </svg>
      </div>
    </div>

    <!-- Daylo Icon -->
    <div
      v-else-if="iconKey === 'daylo'"
      class="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center p-2.5"
    >
      <svg class="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="6" width="22" height="21" rx="4" fill="#0EA5E9" fill-opacity="0.18" stroke="#0284C7" stroke-width="2" />
        <path d="M5 12H27" stroke="#0284C7" stroke-width="2" />
        <path d="M11 4V8M21 4V8" stroke="#0284C7" stroke-width="2" stroke-linecap="round" />
        <path d="M11.5 18.5L14.5 21.5L21 15" stroke="#0284C7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <!-- Smart Hisab Icon -->
    <div
      v-else-if="iconKey === 'smart-hisab'"
      class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center p-2.5"
    >
      <svg class="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="22" height="24" rx="4" fill="#10B981" fill-opacity="0.18" stroke="#059669" stroke-width="2" />
        <rect x="9" y="8" width="14" height="5" rx="1.5" fill="#059669" />
        <circle cx="11" cy="17" r="1.25" fill="#059669" />
        <circle cx="16" cy="17" r="1.25" fill="#059669" />
        <circle cx="21" cy="17" r="1.25" fill="#059669" />
        <circle cx="11" cy="22" r="1.25" fill="#059669" />
        <circle cx="16" cy="22" r="1.25" fill="#059669" />
        <circle cx="21" cy="22" r="1.25" fill="#059669" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  iconKey: string
}>()

const imgFailed = ref(false)
</script>
