<template>
  <footer class="border-t border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 bg-dark-bg/60 dark:bg-dark-bg/60 light:bg-slate-50 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <!-- Col 1: Brand & Identity -->
        <div class="md:col-span-2 space-y-3.5">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-brand-400">
              AB
            </div>
            <span class="font-bold tracking-tight text-base text-slate-100 dark:text-slate-100 light:text-slate-900">
              AVIJIT BAIRAGI
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
            Lead Software Engineer specializing in backend systems, fintech architecture, ISO 8583 payment gateways, and enterprise microservices.
          </p>
          <div class="flex items-center gap-2 pt-1">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
              Available for technical consultations &amp; leadership roles
            </span>
          </div>
        </div>

        <!-- Col 2: Navigation -->
        <div>
          <h3 class="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3.5 font-semibold">
            Navigation
          </h3>
          <ul class="space-y-2 text-xs sm:text-sm">
            <li>
              <RouterLink to="/" class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors flex items-center gap-1.5">
                <span>Portfolio</span>
                <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">Full Profile</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio#experience" class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors">
                Experience Timeline
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio#org-projects" class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors">
                Projects by Organization
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio#expertise" class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors">
                Technical Expertise
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Direct Connect -->
        <div>
          <h3 class="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3.5 font-semibold">
            Direct Connect
          </h3>
          <ul class="space-y-2 text-xs sm:text-sm">
            <li>
              <a 
                href="mailto:ovi821@gmail.com" 
                class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Mail class="w-3.5 h-3.5 text-emerald-400" />
                <span>ovi821@gmail.com</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/avijit-bairagi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors flex items-center gap-2"
              >
                <Linkedin class="w-3.5 h-3.5 text-brand-400" />
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/avijit-bairagi" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-brand-400 transition-colors flex items-center gap-2"
              >
                <Github class="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
        <div>
          &copy; {{ currentYear }} Avijit Bairagi. All rights reserved.
        </div>
        <div class="flex items-center gap-3">
          <span>Backend Engineering</span>
          <span>&bull;</span>
          <span>Fintech Systems</span>
          <span>&bull;</span>
          <span>Enterprise Scale</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Linkedin, Github, Mail } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>
