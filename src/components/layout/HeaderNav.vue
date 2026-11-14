<template>
  <header 
    class="sticky top-0 z-50 transition-colors duration-200 w-full bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-slate-200 dark:border-dark-border"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
      <!-- Brand -->
      <RouterLink 
        to="/" 
        class="flex items-center gap-2.5 focus:outline-none shrink-0"
        aria-label="Avijit Bairagi Home"
      >
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 dark:border-dark-border shrink-0">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-14_at_4.11.58_PM_12d440c2.jpeg"
            alt="Avijit Bairagi"
            class="w-full h-full object-cover object-top"
          />
        </div>
        <span class="font-bold tracking-tight text-sm text-slate-900 dark:text-white">
          Avijit Bairagi
        </span>
      </RouterLink>

      <!-- Desktop Navigation: Home, Professional Experience, Contact ONLY -->
      <nav class="hidden sm:flex items-center gap-1" aria-label="Main Navigation">
        <RouterLink 
          to="/" 
          class="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
          :class="[
            $route.path === '/' 
              ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-elevated'
          ]"
        >
          Home
        </RouterLink>

        <RouterLink 
          to="/portfolio" 
          class="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
          :class="[
            $route.path === '/portfolio' || $route.path === '/experience'
              ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-elevated'
          ]"
        >
          Professional Experience
        </RouterLink>

        <RouterLink 
          to="/contact" 
          class="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
          :class="[
            $route.path === '/contact'
              ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-elevated'
          ]"
        >
          Contact
        </RouterLink>
      </nav>

      <!-- Right Controls: Theme Toggle + Mobile Menu Button -->
      <div class="flex items-center gap-1.5 shrink-0">
        <button 
          @click="toggleTheme" 
          type="button"
          class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors focus:outline-none"
          :title="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="currentTheme === 'dark'" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-slate-600" />
        </button>

        <button 
          @click="isMobileOpen = !isMobileOpen" 
          type="button"
          class="sm:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Menu v-if="!isMobileOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer: Home, Professional Experience, Contact ONLY -->
    <div 
      v-if="isMobileOpen" 
      class="sm:hidden bg-white dark:bg-dark-bg border-b border-slate-200 dark:border-dark-border px-4 py-3 space-y-1 shadow-md"
    >
      <RouterLink 
        to="/" 
        @click="isMobileOpen = false"
        class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="[
          $route.path === '/' 
            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated'
        ]"
      >
        Home
      </RouterLink>

      <RouterLink 
        to="/portfolio" 
        @click="isMobileOpen = false"
        class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="[
          $route.path === '/portfolio' || $route.path === '/experience'
            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated'
        ]"
      >
        Professional Experience
      </RouterLink>

      <RouterLink 
        to="/contact" 
        @click="isMobileOpen = false"
        class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        :class="[
          $route.path === '/contact'
            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 font-semibold' 
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated'
        ]"
      >
        Contact
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { currentTheme, toggleTheme } = useTheme()
const isMobileOpen = ref(false)
</script>
