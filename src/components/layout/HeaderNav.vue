<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-200 w-full"
    :class="[
      isScrolled 
        ? 'bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-white/95 backdrop-blur-md border-b border-dark-border dark:border-dark-border light:border-slate-200 shadow-xs' 
        : 'bg-dark-bg/80 dark:bg-dark-bg/80 light:bg-light-bg/80 backdrop-blur-xs border-b border-dark-border/40 dark:border-dark-border/40 light:border-slate-200/60'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
      <!-- Zone 1: Brand / Logo -->
      <RouterLink 
        to="/" 
        class="group flex items-center gap-2.5 focus:outline-none shrink-0"
        aria-label="Avijit Bairagi Home"
      >
        <div class="w-8 h-8 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-brand-400 group-hover:border-brand-500/60 transition-colors shadow-xs">
          AB
        </div>
        <div class="flex flex-col">
          <span class="font-bold tracking-tight text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-brand-400 transition-colors whitespace-nowrap">
            AVIJIT BAIRAGI
          </span>
          <span class="text-[9px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 hidden sm:inline leading-none">
            Lead Software Engineer
          </span>
        </div>
      </RouterLink>

      <!-- Zone 2: Navigation Links -->
      <nav class="hidden md:flex items-center gap-1" aria-label="Main Navigation">
        <RouterLink 
          to="/" 
          class="px-2.5 py-1 text-xs font-medium rounded-md transition-colors"
          :class="[
            $route.path === '/' 
              ? 'text-brand-400 bg-brand-500/10 dark:bg-brand-500/10 light:bg-brand-50 light:text-brand-700' 
              : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100'
          ]"
        >
          Home
        </RouterLink>

        <a 
          href="/#what-i-created" 
          @click.prevent="navigateToSection('what-i-created')"
          class="px-2.5 py-1 text-xs font-medium rounded-md text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors"
        >
          What I Created
        </a>

        <a 
          href="/#companies" 
          @click.prevent="navigateToSection('companies')"
          class="px-2.5 py-1 text-xs font-medium rounded-md text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors"
        >
          Companies
        </a>

        <RouterLink 
          to="/portfolio" 
          class="px-2.5 py-1 text-xs font-medium rounded-md transition-colors"
          :class="[
            $route.path === '/portfolio'
              ? 'text-brand-400 bg-brand-500/10 dark:bg-brand-500/10 light:bg-brand-50 light:text-brand-700 font-semibold' 
              : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100'
          ]"
        >
          Professional Experience
        </RouterLink>

        <a 
          href="/#contact" 
          @click.prevent="navigateToSection('contact')"
          class="px-2.5 py-1 text-xs font-medium rounded-md text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors"
        >
          Contact
        </a>
      </nav>

      <!-- Zone 3: Action Controls -->
      <div class="flex items-center gap-1.5 shrink-0">
        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          type="button"
          class="p-1.5 rounded-lg text-slate-400 hover:text-brand-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors focus:outline-none"
          :title="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="currentTheme === 'dark'" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </button>

        <!-- LinkedIn Icon Link -->
        <a 
          href="https://www.linkedin.com/in/avijit-bairagi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="p-1.5 rounded-lg text-slate-400 hover:text-brand-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors hidden sm:inline-flex"
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
          class="p-1.5 rounded-lg text-slate-400 hover:text-brand-400 hover:bg-dark-elevated/60 dark:hover:bg-dark-elevated/60 light:hover:bg-slate-100 transition-colors hidden sm:inline-flex"
          title="GitHub Profile"
          aria-label="GitHub"
        >
          <Github class="w-4 h-4" />
        </a>

        <!-- Primary Action Button -->
        <RouterLink 
          to="/portfolio"
          class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors shadow-xs hidden sm:inline-flex items-center gap-1"
        >
          <span>Explore Work</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </RouterLink>

        <!-- Mobile Drawer Toggle -->
        <button 
          @click="isMobileOpen = !isMobileOpen"
          type="button"
          class="p-1.5 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated dark:hover:bg-dark-elevated light:hover:bg-slate-100 md:hidden focus:outline-none"
          :aria-label="isMobileOpen ? 'Close Menu' : 'Open Menu'"
        >
          <X v-if="isMobileOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div 
      v-if="isMobileOpen" 
      class="md:hidden bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-white/95 backdrop-blur-xl border-b border-dark-border dark:border-dark-border light:border-slate-200 px-4 py-3 space-y-2 shadow-lg"
    >
      <div class="flex flex-col space-y-1">
        <RouterLink 
          to="/" 
          @click="isMobileOpen = false"
          class="px-3 py-2 rounded-lg text-xs font-medium"
          :class="[
            $route.path === '/' 
              ? 'text-brand-400 bg-brand-500/10' 
              : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated'
          ]"
        >
          Home
        </RouterLink>

        <button 
          @click="navigateToSectionMobile('what-i-created')"
          class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated"
        >
          What I Created
        </button>

        <button 
          @click="navigateToSectionMobile('companies')"
          class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated"
        >
          Companies
        </button>

        <RouterLink 
          to="/portfolio" 
          @click="isMobileOpen = false"
          class="px-3 py-2 rounded-lg text-xs font-semibold text-white bg-brand-600 flex items-center justify-between"
        >
          <span>Professional Experience</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </RouterLink>

        <button 
          @click="navigateToSectionMobile('contact')"
          class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-dark-elevated"
        >
          Contact Avijit
        </button>
      </div>

      <div class="pt-2 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
        <a 
          href="https://www.linkedin.com/in/avijit-bairagi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-brand-400 flex items-center gap-1.5"
        >
          <Linkedin class="w-3.5 h-3.5 text-brand-400" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/avijit-bairagi" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-brand-400 flex items-center gap-1.5"
        >
          <Github class="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Sun, Moon, Linkedin, Github, Menu, X, ArrowRight } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const router = useRouter()
const { currentTheme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 15
}

const navigateToSection = (id: string) => {
  if (router.currentRoute.value.path !== '/') {
    router.push(`/#${id}`)
  } else {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const navigateToSectionMobile = (id: string) => {
  isMobileOpen.value = false
  navigateToSection(id)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
