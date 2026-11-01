<template>
  <div class="inline-flex items-center justify-center select-none" :class="wrapperClass">
    <!-- 1. Inument Solutions Limited -->
    <div v-if="logoKey === 'inument'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 text-sky-400 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#0284C7" fill-opacity="0.15" />
        <path d="M10 26V10L16 16V26H10Z" fill="#38BDF8" />
        <path d="M20 26V10L26 16V26H20Z" fill="#0284C7" />
        <circle cx="23" cy="13" r="2.5" fill="#38BDF8" />
      </svg>
      <div class="flex flex-col text-left leading-none">
        <span class="font-extrabold tracking-wider text-sm font-sans text-slate-100 dark:text-slate-100 light:text-slate-900">
          INUMENT
        </span>
        <span class="text-[9px] font-mono tracking-widest text-sky-400 font-semibold uppercase mt-0.5">
          SOLUTIONS
        </span>
      </div>
    </div>

    <!-- 2. bKash (Iconic Origami Bird + Typography) -->
    <div v-else-if="logoKey === 'bkash'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6L33 17L27 21L22 6Z" fill="#E2136E" />
        <path d="M12 14L22 6L20 22L12 14Z" fill="#C20D5D" />
        <path d="M20 22L27 21L24 34L20 22Z" fill="#E2136E" />
        <path d="M12 14L20 22L8 27L12 14Z" fill="#ED3785" />
        <path d="M8 27L20 22L15 34L8 27Z" fill="#A8094E" />
      </svg>
      <span class="font-bold text-xl tracking-tight text-white dark:text-white light:text-slate-900 font-sans">
        b<span class="text-[#E2136E]">Kash</span>
      </span>
    </div>

    <!-- 3. BRAC Bank (Authentic Blue & Yellow Bank Mark) -->
    <div v-else-if="logoKey === 'brac-bank'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#00529B" />
        <path d="M8 10H18C21.3137 10 24 12.6863 24 16C24 19.3137 21.3137 22 18 22H13V26H8V10Z" fill="white" />
        <rect x="22" y="20" width="6" height="6" rx="1.5" fill="#FFC82E" />
      </svg>
      <div class="flex flex-col text-left leading-tight">
        <span class="font-black text-sm tracking-tight text-white dark:text-white light:text-slate-900 font-sans">
          BRAC BANK
        </span>
        <span class="text-[8px] font-mono tracking-wider text-slate-400 uppercase">
          Corporate Banking
        </span>
      </div>
    </div>

    <!-- 4. ROBI (Iconic Red/Yellow Multi-faceted Diamond) -->
    <div v-else-if="logoKey === 'robi'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Robi Origami Diamond Shapes -->
        <polygon points="18,5 28,13 18,18 8,13" fill="#ED1C24" />
        <polygon points="28,13 31,23 21,22 18,18" fill="#F7941E" />
        <polygon points="8,13 5,23 15,22 18,18" fill="#C11117" />
        <polygon points="18,18 21,22 18,31 15,22" fill="#FFDE00" />
      </svg>
      <span class="font-black text-lg tracking-normal text-white dark:text-white light:text-slate-900 font-sans lowercase">
        <span class="text-[#ED1C24]">ro</span><span class="text-white dark:text-white light:text-slate-900">bi</span>
      </span>
    </div>

    <!-- 5. BEXIMCO (Distinctive Hex Ring & Industrial Typography) -->
    <div v-else-if="logoKey === 'beximco'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="#0F766E" fill-opacity="0.15" />
        <circle cx="18" cy="18" r="13" stroke="#0F766E" stroke-width="2.5" />
        <path d="M12 12L24 24M24 12L12 24" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round" />
      </svg>
      <div class="flex flex-col text-left leading-none">
        <span class="font-extrabold text-sm tracking-wider text-white dark:text-white light:text-slate-900 font-sans uppercase">
          BEXIMCO
        </span>
        <span class="text-[8px] font-mono tracking-widest text-teal-400 font-semibold uppercase mt-0.5">
          ENTERPRISE
        </span>
      </div>
    </div>

    <!-- 6. iTogether (Connected Tech Mark) -->
    <div v-else-if="logoKey === 'itogether'" class="flex items-center gap-2.5">
      <svg class="h-8 w-8 text-indigo-400 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#6366F1" fill-opacity="0.15" />
        <circle cx="14" cy="12" r="3" fill="#818CF8" />
        <path d="M14 18V26" stroke="#818CF8" stroke-width="3" stroke-linecap="round" />
        <circle cx="22" cy="15" r="2.5" fill="#A5B4FC" />
        <path d="M22 20V26" stroke="#A5B4FC" stroke-width="2.5" stroke-linecap="round" />
        <path d="M11 26H25" stroke="#6366F1" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span class="font-bold text-base tracking-tight text-white dark:text-white light:text-slate-900 font-sans">
        <span class="text-indigo-400">i</span>Together
      </span>
    </div>

    <!-- Fallback -->
    <div v-else class="text-sm font-bold font-mono tracking-wider text-slate-300">
      {{ fallbackText }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  logoKey: string
  fallbackText?: string
  wrapperClass?: string
}>()
</script>
