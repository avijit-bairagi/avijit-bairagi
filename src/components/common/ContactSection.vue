<template>
  <section id="contact" class="py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left Side: Narrative & Direct Channels (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-emerald-400 mb-3">
              <span>LET'S CONNECT</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
              Have an Interesting Idea or Engineering Challenge?
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              I'm always interested in meaningful conversations about technology, software engineering, fintech, architecture, and opportunities to build impactful solutions.
            </p>
          </div>

          <!-- Direct Channels Box -->
          <div class="space-y-3">
            <!-- Email Direct with Copy Feature -->
            <div 
              class="group flex items-center justify-between p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-emerald-500/50 hover:shadow-md transition-all"
            >
              <a 
                :href="`mailto:${contactEmail}`"
                class="flex items-center gap-3.5 flex-1"
              >
                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">Direct Personal Email</div>
                  <div class="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                    {{ contactEmail }}
                  </div>
                </div>
              </a>

              <button 
                @click="copyEmail" 
                type="button"
                class="ml-2 px-2.5 py-1.5 rounded-lg text-xs font-mono border border-dark-border dark:border-dark-border light:border-slate-300 hover:bg-dark-elevated dark:hover:bg-dark-elevated light:hover:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-all flex items-center gap-1 focus:outline-none"
                :title="copied ? 'Copied!' : 'Copy to clipboard'"
              >
                <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-400" />
                <Copy v-else class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ copied ? 'Copied' : 'Copy' }}</span>
              </button>
            </div>

            <!-- LinkedIn -->
            <a 
              href="https://www.linkedin.com/in/avijit-bairagi/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform">
                  <Linkedin class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                  <div class="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    linkedin.com/in/avijit-bairagi
                  </div>
                </div>
              </div>
              <ExternalLink class="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
            </a>

            <!-- GitHub -->
            <a 
              href="https://github.com/avijit-bairagi" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-9 h-9 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                  <Github class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">Engineering Repositories</div>
                  <div class="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    github.com/avijit-bairagi
                  </div>
                </div>
              </div>
              <ExternalLink class="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
            </a>

            <!-- Resume Download Link -->
            <button
              @click="handleResumeClick"
              type="button"
              class="w-full group flex items-center justify-between p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-emerald-500/50 hover:shadow-md transition-all text-left focus:outline-none"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Download class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">Curriculum Vitae</div>
                  <div class="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                    Download Official Resume
                  </div>
                </div>
              </div>
              <ArrowDownToLine class="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

        <!-- Right Side: Clean Structured Message Form (6 cols) -->
        <div class="lg:col-span-6">
          <div class="p-6 sm:p-7 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-md">
            <h3 class="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
              Send a Direct Message
            </h3>
            <p class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-5">
              Connect regarding technical leadership roles, architecture consulting, or engineering collaboration.
            </p>

            <!-- Success State Feedback -->
            <div 
              v-if="isSubmitted"
              class="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2.5"
            >
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check class="w-5 h-5" />
              </div>
              <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">Message Prepared!</h4>
              <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Thank you for reaching out. An email draft has been generated for Avijit Bairagi at {{ contactEmail }}.
              </p>
              <button 
                @click="resetForm" 
                type="button" 
                class="mt-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover text-brand-400 border border-dark-border"
              >
                Send Another Note
              </button>
            </div>

            <!-- Contact Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-3.5">
              <div>
                <label for="name" class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 font-medium">
                  Your Name <span class="text-brand-400">*</span>
                </label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="e.g. Alex Morgan"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label for="email" class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 font-medium">
                  Email Address <span class="text-brand-400">*</span>
                </label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="alex@example.com"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label for="topic" class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 font-medium">
                  Subject / Focus Area
                </label>
                <select 
                  id="topic"
                  v-model="form.topic"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all"
                >
                  <option value="Engineering Leadership Opportunity">Engineering Leadership Opportunity</option>
                  <option value="Fintech / Payment Architecture">Fintech / Payment Architecture Consulting</option>
                  <option value="Backend Development Project">Backend Development Project</option>
                  <option value="Technical Collaboration & Advisory">Technical Collaboration &amp; Advisory</option>
                  <option value="General Engineering Inquiries">General Engineering Inquiry</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 font-medium">
                  Message <span class="text-brand-400">*</span>
                </label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  rows="3" 
                  required
                  placeholder="Tell me about your system requirements, challenge, or team vision..."
                  class="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-md transition-all focus:outline-none"
              >
                <span>Let's Connect &rarr;</span>
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
import { Linkedin, Mail, Github, Download, ExternalLink, Copy, Check, ArrowDownToLine } from 'lucide-vue-next'

const contactEmail = 'ovi821@gmail.com'
const copied = ref(false)
const isSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  topic: 'Engineering Leadership Opportunity',
  message: ''
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contactEmail)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy email', err)
  }
}

const handleSubmit = () => {
  const subject = encodeURIComponent(`[Portfolio Inquiry] ${form.value.topic} from ${form.value.name}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\nTopic: ${form.value.topic}\n\nMessage:\n${form.value.message}`
  )
  
  window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank')
  isSubmitted.value = true
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    topic: 'Engineering Leadership Opportunity',
    message: ''
  }
  isSubmitted.value = false
}

const handleResumeClick = () => {
  const subject = encodeURIComponent('Request for Avijit Bairagi Resume')
  window.location.href = `mailto:${contactEmail}?subject=${subject}`
}
</script>
