<template>
  <div class="pb-12">
    <!-- Summary (Single clean view) -->
    <HeroSection />

    <!-- What I created (Icon, Name, Simple Description) -->
    <WhatICreatedSection />

    <!-- Companies I Worked With (Logo and Name Only) -->
    <CompaniesSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import WhatICreatedSection from '@/components/home/WhatICreatedSection.vue'
import CompaniesSection from '@/components/home/CompaniesSection.vue'
</script>
