<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-300 w-full"
    :class="[
      isScrolled 
        ? 'bg-dark-bg/90 dark:bg-dark-bg/90 light:bg-light-bg/90 backdrop-blur-md border-b border-dark-border dark:border-dark-border light:border-light-border shadow-sm shadow-black/20' 
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand / Logo -->
      <RouterLink 
        to="/" 
        class="group flex items-center gap-3 focus:outline-none"
        aria-label="Avijit Bairagi Home"
      >
        <div class="w-10 h-10 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-light-border flex items-center justify-center font-mono font-bold text-sm tracking-wider text-brand-400 group-hover:border-brand-500/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all">
          AB
        </div>
        <div class="flex flex-col">
          <span class="font-bold tracking-tight text-base sm:text-lg text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-brand-400 transition-colors">
            AVIJIT BAIRAGI
          </span>
          <span class="text-[10px] uppercase font-mono tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500">
            Lead Software Engineer
          </span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1.5 lg:gap-3" aria-label="Main Navigation">
        <RouterLink 
          to="/" 
          class="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
          :class="[
            $route.path === '/' 
              ? 'text-brand-400 bg-brand-500/10' 
              : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100'
          ]"
        >
          Home
        </RouterLink>

        <!-- Dedicated Portfolio CTA Button (Visually prominent as requested) -->
        <RouterLink 
          to="/portfolio" 
          class="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 group"
          :class="[
            $route.path === '/portfolio'
              ? 'text-white bg-brand-600 shadow-md shadow-brand-500/20'
              : 'text-white bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-900 hover:bg-brand-600 border border-slate-700/80 hover:border-brand-500 shadow-sm'
          ]"
        >
          <span>Portfolio</span>
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </RouterLink>

        <!-- Divider -->
        <div class="h-5 w-px bg-dark-border dark:bg-dark-border light:bg-slate-300 mx-1"></div>

        <!-- LinkedIn Icon Link -->
        <a 
          href="https://www.linkedin.com/in/avijit-bairagi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="p-2 rounded-lg text-slate-400 hover:text-brand-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors"
          title="LinkedIn Profile"
          aria-label="LinkedIn"
        >
          <Linkedin class="w-4 h-4" />
        </a>

        <!-- GitHub Icon Link -->
        <a 
          href="https://github.com/avijit-bairagi" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="p-2 rounded-lg text-slate-400 hover:text-brand-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors"
          title="GitHub Profile"
          aria-label="GitHub"
        >
          <Github class="w-4 h-4" />
        </a>

        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          type="button"
          class="p-2 rounded-lg text-slate-400 hover:text-yellow-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors focus:outline-none"
          :title="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="currentTheme === 'dark'" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>

        <!-- Contact CTA Button -->
        <button
          @click="navigateToContact"
          type="button"
          class="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-dark-border dark:border-dark-border light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-brand-400 hover:text-brand-400 bg-dark-surface/50 dark:bg-dark-surface/50 light:bg-white hover:bg-dark-elevated dark:hover:bg-dark-elevated light:hover:bg-slate-50 transition-all focus:outline-none"
        >
          <Mail class="w-3.5 h-3.5 text-brand-400" />
          <span>Contact</span>
        </button>
      </nav>

      <!-- Mobile Menu Trigger -->
      <div class="flex items-center gap-2 md:hidden">
        <button 
          @click="toggleTheme" 
          type="button"
          class="p-2 rounded-lg text-slate-400 hover:text-yellow-400"
          :aria-label="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="currentTheme === 'dark'" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
        <button 
          @click="isMobileOpen = !isMobileOpen"
          type="button"
          class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-dark-elevated focus:outline-none"
          :aria-label="isMobileOpen ? 'Close Menu' : 'Open Menu'"
        >
          <X v-if="isMobileOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div 
      v-if="isMobileOpen" 
      class="md:hidden bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg/95 backdrop-blur-xl border-b border-dark-border dark:border-dark-border light:border-light-border px-6 py-6 space-y-4 shadow-xl"
    >
      <div class="flex flex-col space-y-2">
        <RouterLink 
          to="/" 
          @click="isMobileOpen = false"
          class="px-4 py-2.5 rounded-lg text-base font-medium"
          :class="[
            $route.path === '/' 
              ? 'text-brand-400 bg-brand-500/10' 
              : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated'
          ]"
        >
          Home
        </RouterLink>

        <RouterLink 
          to="/portfolio" 
          @click="isMobileOpen = false"
          class="px-4 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between"
          :class="[
            $route.path === '/portfolio'
              ? 'text-white bg-brand-600'
              : 'text-brand-300 bg-brand-950/40 border border-brand-500/30'
          ]"
        >
          <span>Explore Portfolio</span>
          <ArrowRight class="w-4 h-4" />
        </RouterLink>

        <button 
          @click="navigateToContactMobile"
          class="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated flex items-center gap-2"
        >
          <Mail class="w-4 h-4 text-brand-400" />
          <span>Contact Avijit</span>
        </button>
      </div>

      <div class="pt-4 border-t border-dark-border flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/avijit-bairagi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400"
          >
            <Linkedin class="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/avijit-bairagi" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400"
          >
            <Github class="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Sun, Moon, Linkedin, Github, Mail, Menu, X, ArrowRight } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const router = useRouter()
const { currentTheme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const navigateToContact = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/#contact')
  } else {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const navigateToContactMobile = () => {
  isMobileOpen.value = false
  navigateToContact()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
