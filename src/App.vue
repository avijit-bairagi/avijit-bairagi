<template>
  <div class="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-200">
    <!-- Sticky Header -->
    <HeaderNav />

    <!-- Main Content Routed Views -->
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Global Footer -->
    <FooterSection />

    <!-- Back to Top Floating Button -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop"
      type="button"
      class="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-white dark:bg-dark-elevated text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-dark-border shadow-md transition-all hover:-translate-y-0.5 focus:outline-none"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ChevronUp class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
import HeaderNav from '@/components/layout/HeaderNav.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
