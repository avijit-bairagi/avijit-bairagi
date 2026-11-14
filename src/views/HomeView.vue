<template>
  <div class="relative">
    <!-- Hero Introduction -->
    <HeroSection />

    <!-- 1. What I created (Name, logo, and description - Smart Hisab, Arcade Play, etc.) -->
    <WhatICreatedSection />

    <!-- 2. What company I work with (Name and logo only) -->
    <CompaniesSection />

    <!-- Simple Connect / Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import WhatICreatedSection from '@/components/home/WhatICreatedSection.vue'
import CompaniesSection from '@/components/home/CompaniesSection.vue'
import ContactSection from '@/components/common/ContactSection.vue'
</script>
