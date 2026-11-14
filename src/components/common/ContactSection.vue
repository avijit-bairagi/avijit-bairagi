<template>
  <section id="contact" class="py-10 sm:py-14">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="mb-8 space-y-2">
        <div class="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold">
          Contact
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Let's Connect
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
          Reach out for technical leadership roles, architecture consulting, or software collaboration.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <!-- Direct Channels (5 cols) -->
        <div class="md:col-span-5 space-y-3">
          <div class="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border flex items-center justify-between gap-2 shadow-xs">
            <a :href="`mailto:${contactEmail}`" class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Mail class="w-4 h-4" />
              </div>
              <div class="min-w-0">
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Email</div>
                <div class="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {{ contactEmail }}
                </div>
              </div>
            </a>
            <button
              @click="copyEmail"
              type="button"
              class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-dark-elevated hover:bg-slate-200 dark:hover:bg-dark-hover text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border transition-colors shrink-0"
            >
              {{ copied ? 'Copied' : 'Copy' }}
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/avijit-bairagi/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 flex items-center justify-between gap-3 shadow-xs transition-colors"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                <Linkedin class="w-4 h-4" />
              </div>
              <div class="min-w-0">
                <div class="text-[11px] text-slate-500 dark:text-slate-400">LinkedIn</div>
                <div class="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  linkedin.com/in/avijit-bairagi
                </div>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 shrink-0" />
          </a>

          <a
            href="https://github.com/avijit-bairagi"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600 flex items-center justify-between gap-3 shadow-xs transition-colors"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                <Github class="w-4 h-4" />
              </div>
              <div class="min-w-0">
                <div class="text-[11px] text-slate-500 dark:text-slate-400">GitHub</div>
                <div class="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  github.com/avijit-bairagi
                </div>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 shrink-0" />
          </a>
        </div>

        <!-- Clean Message Form (7 cols) -->
        <div class="md:col-span-7">
          <div class="p-6 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-xs">
            <h2 class="text-base font-bold text-slate-900 dark:text-white mb-4">
              Send a Note
            </h2>

            <div
              v-if="isSubmitted"
              class="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2"
            >
              <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Check class="w-4 h-4" />
              </div>
              <h3 class="text-sm font-bold text-slate-900 dark:text-white">Email Draft Ready</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300">
                Your email client has been opened for {{ contactEmail }}.
              </p>
              <button
                @click="resetForm"
                type="button"
                class="mt-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-elevated text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border"
              >
                Send Another
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-3.5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="name" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-dark-elevated border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label for="email" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-dark-elevated border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label for="message" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="How can we work together?"
                  class="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-dark-elevated border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:border-brand-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-4 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Linkedin, Github, ExternalLink, Check } from 'lucide-vue-next'

const contactEmail = 'ovi821@gmail.com'
const copied = ref(false)
const isSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  message: ''
})

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

const handleSubmit = () => {
  const subject = encodeURIComponent(`[Inquiry] Message from ${form.value.name}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  isSubmitted.value = true
}

const resetForm = () => {
  form.value = { name: '', email: '', message: '' }
  isSubmitted.value = false
}
</script>
