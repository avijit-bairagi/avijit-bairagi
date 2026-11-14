<template>
  <div class="inline-flex items-center justify-center select-none">
    <!-- Smart Hisab Logo -->
    <div v-if="iconKey === 'smart-hisab'" class="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center p-2.5 shadow-xs">
      <svg class="w-full h-full text-emerald-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="22" height="24" rx="4" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2" />
        <rect x="9" y="8" width="14" height="5" rx="1.5" fill="#34D399" />
        <line x1="9" y1="17" x2="13" y2="17" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
        <line x1="15" y1="17" x2="19" y2="17" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
        <line x1="9" y1="21" x2="13" y2="21" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
        <line x1="15" y1="21" x2="19" y2="21" stroke="#10B981" stroke-width="2" stroke-linecap="round" />
        <line x1="21" y1="17" x2="23" y2="17" stroke="#34D399" stroke-width="2" stroke-linecap="round" />
        <line x1="21" y1="21" x2="23" y2="21" stroke="#34D399" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>

    <!-- Arcade Play Logo -->
    <div v-else-if="iconKey === 'arcade-play'" class="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center p-2.5 shadow-xs">
      <svg class="w-full h-full text-purple-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="6" fill="#8B5CF6" fill-opacity="0.2" stroke="#8B5CF6" stroke-width="2" />
        <!-- D-Pad -->
        <path d="M10 13V19M7 16H13" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Buttons -->
        <circle cx="21" cy="14" r="1.5" fill="#C4B5FD" />
        <circle cx="23.5" cy="17" r="1.5" fill="#C4B5FD" />
        <!-- Vent / screen -->
        <circle cx="16" cy="11" r="0.75" fill="#A78BFA" />
      </svg>
    </div>

    <!-- Dhamaka Sandbox Logo -->
    <div v-else-if="iconKey === 'dhamaka'" class="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center p-2.5 shadow-xs">
      <svg class="w-full h-full text-amber-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="17,3 7,17 15,17 14,29 25,14 17,14" fill="#F59E0B" fill-opacity="0.25" stroke="#F59E0B" stroke-width="2" stroke-linejoin="round" />
        <circle cx="16" cy="16" r="1" fill="#FBBF24" />
      </svg>
    </div>

    <!-- Admission Automation Logo -->
    <div v-else-if="iconKey === 'admission'" class="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center p-2.5 shadow-xs">
      <svg class="w-full h-full text-sky-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Graduation Cap -->
        <path d="M16 6L4 12L16 18L28 12L16 6Z" fill="#0284C7" fill-opacity="0.25" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
        <path d="M8 14V21C8 21 11 25 16 25C21 25 24 21 24 21V14" stroke="#0284C7" stroke-width="2" stroke-linecap="round" />
        <path d="M26 14V22" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconKey: string
}>()
</script>
