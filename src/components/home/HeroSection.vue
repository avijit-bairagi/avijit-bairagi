<template>
  <section class="relative py-10 lg:py-14 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        <!-- Left Column: Identity & Value Proposition (7 cols) -->
        <div class="lg:col-span-7 flex flex-col justify-between py-1 space-y-5">
          <div class="space-y-4">
            <!-- Unboxed Metadata Kicker (Anti-slop Zero-Pill) -->
            <div class="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">Avijit Bairagi</span>
              <span aria-hidden="true">&bull;</span>
              <span>Lead Software Engineer</span>
              <span aria-hidden="true">&bull;</span>
              <span class="text-brand-400 dark:text-brand-400 light:text-brand-600 font-medium">Fintech &amp; Backend Systems</span>
            </div>

            <!-- Main Heading with text-wrap: balance -->
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15] [text-wrap:balance]">
              Engineering reliable backend systems for high-throughput fintech.
            </h1>

            <!-- Introduction Paragraphs -->
            <div class="space-y-2.5 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-xl [text-wrap:pretty]">
              <p>
                Lead Software Engineer with 8+ years building enterprise applications, national banking switches, ISO 8583 payment gateways, and resilient distributed microservices.
              </p>
              <p class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 font-normal">
                Specialized in non-blocking event-driven architectures, idempotent financial transactions, and scalable cloud deployments.
              </p>
            </div>
          </div>

          <!-- CTAs & Direct Links -->
          <div class="space-y-4 pt-2">
            <div class="flex flex-wrap items-center gap-2.5">
              <!-- What I Created CTA -->
              <a 
                href="#what-i-created"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors focus:outline-none"
              >
                <span>What I Created</span>
                <ArrowDown class="w-3.5 h-3.5" />
              </a>

              <!-- Full Portfolio CTA -->
              <RouterLink 
                to="/portfolio"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white hover:bg-dark-hover dark:hover:bg-dark-hover light:hover:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-300 font-medium text-xs sm:text-sm transition-colors focus:outline-none"
              >
                <span>Professional Experience</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>

              <!-- Secondary CTA -->
              <a 
                href="#contact" 
                @click.prevent="scrollToContact"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 text-xs sm:text-sm transition-colors"
              >
                <Mail class="w-3.5 h-3.5 text-brand-400" />
                <span>Contact</span>
              </a>
            </div>

            <!-- Quick Channels Ribbon -->
            <div class="pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
              <a 
                href="https://www.linkedin.com/in/avijit-bairagi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:text-brand-400 transition-colors inline-flex items-center gap-1"
              >
                <Linkedin class="w-3.5 h-3.5 text-brand-400" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true">&bull;</span>
              <a 
                href="https://github.com/avijit-bairagi" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:text-brand-400 transition-colors inline-flex items-center gap-1"
              >
                <Github class="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true">&bull;</span>
              <a 
                href="mailto:ovi821@gmail.com"
                class="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
              >
                <Mail class="w-3.5 h-3.5 text-emerald-400" />
                <span>ovi821@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Compact Professional Profile Card (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div class="rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
            
            <!-- Card Header -->
            <div class="flex items-center justify-between pb-3.5 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-100">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center font-mono font-bold text-sm text-brand-400">
                  AB
                </div>
                <div>
                  <h3 class="font-bold text-sm text-white dark:text-white light:text-slate-900 leading-tight">
                    Avijit Bairagi
                  </h3>
                  <div class="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Lead Software Engineer
                  </div>
                </div>
              </div>

              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Current: Inument
              </span>
            </div>

            <!-- Profile Highlights -->
            <div class="py-4 space-y-3 text-xs">
              <div class="flex items-start gap-2.5">
                <div class="p-1.5 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-sky-400 shrink-0">
                  <Briefcase class="w-3.5 h-3.5" />
                </div>
                <div>
                  <div class="font-mono text-slate-400 text-[10px]">Active Engagement</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs">
                    Inument Solutions Limited
                  </div>
                  <div class="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">Leading backend architecture &amp; fintech systems</div>
                </div>
              </div>

              <div class="flex items-start gap-2.5">
                <div class="p-1.5 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-emerald-400 shrink-0">
                  <ShieldCheck class="w-3.5 h-3.5" />
                </div>
                <div>
                  <div class="font-mono text-slate-400 text-[10px]">Core Domain</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs">
                    Fintech, Payment Gateways &amp; Banking
                  </div>
                  <div class="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">ISO 8583 switches, NPSB, CBS &amp; Direct Charge</div>
                </div>
              </div>

              <div class="flex items-start gap-2.5">
                <div class="p-1.5 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-indigo-400 shrink-0">
                  <Cpu class="w-3.5 h-3.5" />
                </div>
                <div>
                  <div class="font-mono text-slate-400 text-[10px]">Primary Tech Stack</div>
                  <div class="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs font-mono">
                    Java &bull; Spring Boot &bull; Kafka &bull; PostgreSQL
                  </div>
                  <div class="text-slate-400 dark:text-slate-400 light:text-slate-500 text-[11px]">Reactive streams, Redis locks &amp; Docker / K8s</div>
                </div>
              </div>
            </div>

            <!-- Card Bottom Link -->
            <div class="pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 flex items-center justify-between text-xs font-mono">
              <span class="text-slate-400 text-[11px]">Experience: 8+ Years</span>
              <RouterLink 
                to="/portfolio" 
                class="text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1 text-[11px]"
              >
                <span>View Full Career &rarr;</span>
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
  ArrowDown,
  Mail, 
  Linkedin, 
  Github, 
  Briefcase, 
  ShieldCheck, 
  Cpu 
} from 'lucide-vue-next'

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
