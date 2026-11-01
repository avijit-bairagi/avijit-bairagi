<template>
  <section class="relative min-h-[85vh] flex items-center justify-center py-12 lg:py-16 overflow-hidden">
    <!-- Subtle Background Ambient Light & Grids -->
    <div class="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Left Column: Identity & Value Proposition (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Eyebrow Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-elevated/90 dark:bg-dark-elevated/90 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-brand-400"></span>
            <span class="text-xs font-mono font-semibold tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase">
              {{ profile.eyebrow }}
            </span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]">
            Engineering reliable systems.<br />
            <span class="text-brand-400 dark:text-brand-400 light:text-brand-600">
              Building solutions that matter.
            </span>
          </h1>

          <!-- Introduction Paragraphs -->
          <div class="space-y-3.5 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl">
            <p>
              I'm <strong class="text-white dark:text-white light:text-slate-900 font-semibold">{{ profile.name }}</strong>, a Lead Software Engineer with 8+ years of experience building enterprise applications, fintech platforms, payment integrations, and scalable backend systems.
            </p>
            <p class="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
              I enjoy solving complex engineering problems, designing maintainable architectures, and transforming business requirements into reliable software solutions.
            </p>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3.5 pt-1">
            <!-- Primary CTA -->
            <RouterLink 
              to="/portfolio"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5 focus:outline-none"
            >
              <span>Explore My Portfolio</span>
              <ArrowRight class="w-4 h-4" />
            </RouterLink>

            <!-- Secondary CTA -->
            <a 
              href="#contact"
              @click.prevent="scrollToContact"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-white hover:bg-dark-hover dark:hover:bg-dark-hover light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-300 font-medium text-sm transition-all focus:outline-none"
            >
              <Mail class="w-4 h-4 text-brand-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          <!-- Quick Social & Resume Links -->
          <div class="pt-4 flex flex-wrap items-center gap-5 border-t border-dark-border/70 dark:border-dark-border/70 light:border-slate-200 text-xs text-slate-400 font-mono">
            <a 
              href="https://www.linkedin.com/in/avijit-bairagi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"
            >
              <Linkedin class="w-3.5 h-3.5 text-brand-400" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/avijit-bairagi" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"
            >
              <Github class="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a 
              href="mailto:ovi821@gmail.com"
              class="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail class="w-3.5 h-3.5 text-emerald-400" />
              <span>ovi821@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Compact Professional Engineering Profile Card (5 cols) -->
        <div class="lg:col-span-5">
          <div class="rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 p-6 sm:p-7 shadow-lg">
            
            <!-- Header of card -->
            <div class="flex items-start justify-between pb-5 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center font-mono font-bold text-base text-brand-400">
                  AB
                </div>
                <div>
                  <h3 class="font-bold text-base text-white dark:text-white light:text-slate-900">
                    Avijit Bairagi
                  </h3>
                  <div class="text-xs font-mono text-slate-400">
                    Lead Software Engineer
                  </div>
                </div>
              </div>

              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Active
              </span>
            </div>

            <!-- Profile Summary Points -->
            <div class="py-5 space-y-3.5 text-xs">
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-sky-400 shrink-0">
                  <Briefcase class="w-4 h-4" />
                </div>
                <div>
                  <div class="font-mono text-slate-400">Current Role</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm">
                    Inument Solutions Limited
                  </div>
                  <div class="text-slate-400 text-[11px] mt-0.5">Leading backend &amp; fintech engineering initiatives</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-emerald-400 shrink-0">
                  <ShieldCheck class="w-4 h-4" />
                </div>
                <div>
                  <div class="font-mono text-slate-400">Core Domain</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm">
                    Fintech, Payment Systems &amp; Banking
                  </div>
                  <div class="text-slate-400 text-[11px] mt-0.5">ISO 8583 switches, NPSB, Direct Charge, CBS Integrations</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-purple-400 shrink-0">
                  <Cpu class="w-4 h-4" />
                </div>
                <div>
                  <div class="font-mono text-slate-400">Primary Stack</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm">
                    Java &bull; Spring Boot &bull; Kafka &bull; PostgreSQL
                  </div>
                  <div class="text-slate-400 text-[11px] mt-0.5">Reactive microservices &amp; distributed event architectures</div>
                </div>
              </div>
            </div>

            <!-- Bottom action in card -->
            <div class="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 flex items-center justify-between text-xs font-mono">
              <span class="text-slate-400">Verified Experience: 8+ Years</span>
              <RouterLink 
                to="/portfolio" 
                class="text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1"
              >
                <span>Full Portfolio</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  Briefcase, 
  ShieldCheck, 
  Cpu 
} from 'lucide-vue-next'
import { profile } from '@/data/profile'

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
