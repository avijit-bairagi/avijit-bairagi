<template>
  <div class="min-h-screen flex flex-col bg-dark-bg text-dark-text transition-colors duration-200">
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

    <!-- Global Sophisticated Footer -->
    <FooterSection />

    <!-- Back to Top Floating Button -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop"
      type="button"
      class="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-dark-elevated/90 dark:bg-dark-elevated/90 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-brand-400 border border-dark-border dark:border-dark-border light:border-slate-300 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 focus:outline-none"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ChevronUp class="w-5 h-5" />
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
