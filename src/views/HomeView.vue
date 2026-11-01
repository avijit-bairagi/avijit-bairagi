<template>
  <div class="relative">
    <!-- Section 1: Hero / Introduction -->
    <HeroSection />

    <!-- Section 2: Professional Snapshot -->
    <SnapshotSection />

    <!-- Section 3: Tools & Technologies -->
    <TechnologiesSection />

    <!-- Section 4: Organizations I've Worked With -->
    <CompaniesSection />

    <!-- Section 5: Services Provided (Areas of professional experience) -->
    <ServicesSection />

    <!-- Section 6: What I'm Offering (Value brought to opportunities) -->
    <OfferingsSection />

    <!-- Section 7: Engineering Philosophy -->
    <PhilosophySection />

    <!-- Section 8: Contact / Let's Connect -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import SnapshotSection from '@/components/home/SnapshotSection.vue'
import TechnologiesSection from '@/components/home/TechnologiesSection.vue'
import CompaniesSection from '@/components/home/CompaniesSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import OfferingsSection from '@/components/home/OfferingsSection.vue'
import PhilosophySection from '@/components/home/PhilosophySection.vue'
import ContactSection from '@/components/common/ContactSection.vue'
</script>
