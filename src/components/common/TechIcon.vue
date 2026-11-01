<template>
  <div class="inline-flex items-center justify-center" :class="wrapperClass">
    <!-- Java -->
    <svg v-if="name.toLowerCase() === 'java'" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 19c3 .5 6 .5 9 0" />
      <path d="M5 21c4 .8 8 .8 12 0" />
      <path d="M17 11.5c1 .5 2 1.5 2 3.5s-2 3-5 3H8c-3 0-5-1-5-3s1-3 2-3.5" />
      <path d="M12 2c2 2-1 4 1 6" />
      <path d="M9 3c1.5 1.5-.5 3.5 1 5" />
    </svg>

    <!-- Spring / Spring Boot / Spring WebFlux -->
    <svg v-else-if="name.toLowerCase().includes('spring')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.2L12 14V2z" />
      <path d="M12 2c5.5 0 10 4.5 10 10 0 3.5-1.8 6.5-4.5 8.2L12 14V2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>

    <!-- PostgreSQL / MySQL / SQL -->
    <svg v-else-if="name.toLowerCase().includes('sql') || name.toLowerCase().includes('postgres')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>

    <!-- Kafka / Kinesis -->
    <svg v-else-if="name.toLowerCase().includes('kafka') || name.toLowerCase().includes('kinesis')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" />
      <line x1="15.5" y1="6.5" x2="8.5" y2="10.5" />
    </svg>

    <!-- Redis / In-Memory -->
    <svg v-else-if="name.toLowerCase().includes('redis')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>

    <!-- Docker / Containers -->
    <svg v-else-if="name.toLowerCase().includes('docker')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 11h2v2H4z" />
      <path d="M7 11h2v2H7z" />
      <path d="M10 11h2v2h-2z" />
      <path d="M7 8h2v2H7z" />
      <path d="M10 8h2v2h-2z" />
      <path d="M13 8h2v2h-2z" />
      <path d="M2 14c1 4 5 7 10 7s9-3 10-7c-2 0-3-1-4-2-1.5 2-4 2-5 0-1 1-3 1-4 0-1.5 2-4 2-5 0-.7.7-1.3 1.3-2 2z" />
    </svg>

    <!-- AWS / Cloud -->
    <svg v-else-if="name.toLowerCase().includes('aws')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>

    <!-- Vue / Frontend -->
    <svg v-else-if="name.toLowerCase().includes('vue')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 22 2 4 6 4 12 14 18 4 22 4" />
      <polygon points="12 17 6.5 7 9.5 7 12 11.5 14.5 7 17.5 7" />
    </svg>

    <!-- TypeScript / JavaScript / Code -->
    <svg v-else-if="name.toLowerCase().includes('script')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>

    <!-- Security / ISO 8583 -->
    <svg v-else-if="name.toLowerCase().includes('security') || name.toLowerCase().includes('iso')" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>

    <!-- Default Server/Architecture fallback -->
    <svg v-else class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  wrapperClass?: string
}>()
</script>
