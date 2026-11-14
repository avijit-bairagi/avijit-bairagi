<template>
  <section id="contact" class="py-10 sm:py-14">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="mb-7 space-y-2">
        <div class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          Contact
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Let's Connect
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
          Reach out directly by email or connect on LinkedIn and GitHub for technical leadership roles, architecture consulting, or software collaboration.
        </p>
      </div>

      <!-- Direct Working Channels -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <!-- Email Card with Copy -->
        <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-xs flex flex-col justify-between gap-4">
          <div class="flex items-start justify-between gap-2">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Mail class="w-4 h-4" />
            </div>
            <button
              @click="copyEmail"
              type="button"
              class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-dark-elevated hover:bg-slate-200 dark:hover:bg-dark-hover text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border transition-colors shrink-0"
            >
              <Check v-if="copied" class="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <Copy v-else class="w-3 h-3" />
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>

          <div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Email</div>
            <a
              :href="`mailto:${contactEmail}`"
              class="mt-0.5 inline-flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all"
            >
              {{ contactEmail }}
            </a>
          </div>
        </div>

        <!-- LinkedIn Card -->
        <a
          href="https://www.linkedin.com/in/avijit-bairagi/"
          target="_blank"
          rel="noopener noreferrer"
          class="group p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 shadow-xs transition-colors flex flex-col justify-between gap-4"
        >
          <div class="flex items-start justify-between gap-2">
            <div class="w-9 h-9 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
              <Linkedin class="w-4 h-4" />
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shrink-0" />
          </div>

          <div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">LinkedIn</div>
            <div class="mt-0.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate">
              in/avijit-bairagi
            </div>
          </div>
        </a>

        <!-- GitHub Card -->
        <a
          href="https://github.com/avijit-bairagi"
          target="_blank"
          rel="noopener noreferrer"
          class="group p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 shadow-xs transition-colors flex flex-col justify-between gap-4"
        >
          <div class="flex items-start justify-between gap-2">
            <div class="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
              <Github class="w-4 h-4" />
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shrink-0" />
          </div>

          <div>
            <div class="text-xs font-medium text-slate-500 dark:text-slate-400">GitHub</div>
            <div class="mt-0.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate">
              github.com/avijit-bairagi
            </div>
          </div>
        </a>
      </div>

      <!-- Compact Location Strip -->
      <div class="mt-4 px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-dark-border flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
        <span class="inline-flex items-center gap-1.5">
          <MapPin class="w-3.5 h-3.5 text-slate-400" />
          <span>Based in Dhaka, Bangladesh</span>
        </span>
        <span>Usually responds within 24 hours via email or LinkedIn</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Linkedin, Github, ExternalLink, Copy, Check, MapPin } from 'lucide-vue-next'

const contactEmail = 'ovi821@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contactEmail)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email', err)
  }
}
</script>
