<template>
  <div class="py-8 sm:py-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
      
      <!-- 1. LinkedIn-Style Profile Header Card -->
      <section class="rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border overflow-hidden shadow-xs">
        <div class="h-24 sm:h-28 bg-gradient-to-r from-slate-800 via-slate-700 to-brand-800 dark:from-dark-elevated dark:via-slate-800 dark:to-brand-900"></div>

        <div class="px-5 sm:px-7 pb-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-10 sm:-mt-12 mb-4">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-900 border-4 border-white dark:border-dark-surface shadow-sm shrink-0">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-14_at_4.11.58_PM_12d440c2.jpeg"
                alt="Avijit Bairagi"
                class="w-full h-full object-cover object-top"
              />
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <RouterLink
                to="/contact"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
              >
                <Mail class="w-3.5 h-3.5" />
                <span>Contact</span>
              </RouterLink>

              <a
                href="https://www.linkedin.com/in/avijit-bairagi/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-dark-elevated hover:bg-slate-50 dark:hover:bg-dark-hover text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-dark-border font-medium text-xs transition-colors"
              >
                <Linkedin class="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/avijit-bairagi"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-dark-elevated hover:bg-slate-50 dark:hover:bg-dark-hover text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-dark-border font-medium text-xs transition-colors"
              >
                <Github class="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div class="space-y-1">
            <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Avijit Bairagi
            </h1>
            <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
              Lead Software Engineer | Fintech | Payment Systems | Backend Architecture
            </p>
            <div class="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5 pt-0.5">
              <span>Dhaka, Bangladesh</span>
              <span>&middot;</span>
              <span>8+ years experience</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. LinkedIn-Style Experience Card with Employer × Client Partnerships -->
      <section class="rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-5 sm:p-7 shadow-xs">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-5">
          Experience
        </h2>

        <div class="divide-y divide-slate-200 dark:divide-dark-border">
          <div
            v-for="(exp, idx) in experiences"
            :key="exp.id"
            class="flex items-start gap-4"
            :class="idx === 0 ? 'pb-6' : idx === experiences.length - 1 ? 'pt-6' : 'py-6'"
          >
            <!-- Primary Employer Emblem -->
            <div class="pt-0.5">
              <CompanyLogo
                :logo-key="exp.logoKey"
                :fallback-text="exp.company"
                :icon-only="true"
              />
            </div>

            <!-- Role & Collaboration Details -->
            <div class="flex-1 min-w-0">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {{ exp.role }}
                </h3>
                <span class="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  {{ exp.period }}
                </span>
              </div>

              <!-- Employer × Client Visual Partnership Strip -->
              <div class="mt-2 flex flex-wrap items-center gap-1.5">
                <a
                  :href="exp.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-elevated hover:border-brand-500/40 border border-slate-200 dark:border-dark-border text-xs font-semibold text-slate-800 dark:text-slate-100 transition-colors"
                >
                  {{ exp.company }}
                </a>

                <template v-for="partner in exp.partners" :key="partner.name">
                  <span class="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 px-0.5">
                    &times;
                  </span>
                  <a
                    :href="partner.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-dark-bg hover:border-brand-500/40 border border-slate-200 dark:border-dark-border text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <CompanyLogo
                      :logo-key="partner.logoKey"
                      :fallback-text="partner.name"
                      :icon-only="true"
                      size="xs"
                    />
                    <span>{{ partner.name }}</span>
                  </a>
                </template>
              </div>

              <div class="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                {{ exp.location }} &middot; {{ exp.domain }}
              </div>

              <p class="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ exp.summary }}
              </p>

              <ul class="mt-2.5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li
                  v-for="(item, cIdx) in exp.contributions"
                  :key="cIdx"
                  class="flex items-start gap-2"
                >
                  <span class="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                  <span class="leading-relaxed">{{ item }}</span>
                </li>
              </ul>

              <div class="mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span class="font-semibold text-slate-700 dark:text-slate-200">Skills:</span>
                {{ exp.technologies.slice(0, 6).join(' · ') }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Projects Card (Clean UI + Pagination, 5 per page) -->
      <section class="rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-5 sm:p-7 shadow-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
              Projects
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Showing {{ pageStart }}&ndash;{{ pageEnd }} of {{ filteredProjects.length }} projects
            </p>
          </div>

          <div class="flex flex-wrap gap-1.5">
            <button
              v-for="tab in orgFilters"
              :key="tab.id"
              @click="selectOrg(tab.id)"
              type="button"
              class="px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
              :class="[
                activeOrg === tab.id
                  ? 'bg-slate-900 dark:bg-brand-600 text-white'
                  : 'bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-hover'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- 5 Projects List -->
        <div class="space-y-2.5">
          <button
            v-for="project in paginatedProjects"
            :key="project.id"
            type="button"
            @click="selectedProject = project"
            class="w-full text-left group p-3.5 sm:p-4 rounded-xl bg-slate-50/70 dark:bg-dark-elevated/40 hover:bg-white dark:hover:bg-dark-elevated border border-slate-200/80 dark:border-dark-border hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all flex items-start gap-3.5 shadow-2xs hover:shadow-xs focus:outline-none"
          >
            <div class="pt-0.5 shrink-0">
              <CompanyLogo
                :logo-key="project.organizationId"
                :fallback-text="project.organizationName"
                :icon-only="true"
                size="sm"
              />
            </div>

            <div class="flex-1 min-w-0 space-y-1">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-wrap items-center gap-2 min-w-0">
                  <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {{ project.title }}
                  </h3>
                  <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                    &middot; {{ project.organizationName }}
                  </span>
                </div>
                <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline shrink-0">
                  {{ project.domain.split('·')[0].trim() }}
                </span>
              </div>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                {{ project.shortDescription }}
              </p>

              <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                {{ project.technologies.slice(0, 5).join(' · ') }}
              </div>
            </div>

            <ChevronRight class="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 shrink-0 mt-1 transition-colors" />
          </button>
        </div>

        <!-- Pagination Controls -->
        <div
          v-if="totalPages > 1"
          class="mt-5 pt-4 border-t border-slate-200 dark:border-dark-border flex items-center justify-between gap-2"
        >
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            type="button"
            class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-dark-border transition-colors"
            :class="currentPage === 1
              ? 'opacity-40 cursor-not-allowed text-slate-400'
              : 'bg-white dark:bg-dark-elevated text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-hover'"
          >
            <ChevronLeft class="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div class="flex items-center gap-1">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              type="button"
              class="w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-colors"
              :class="currentPage === page
                ? 'bg-slate-900 dark:bg-brand-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated'"
            >
              {{ page }}
            </button>
          </div>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            type="button"
            class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-dark-border transition-colors"
            :class="currentPage === totalPages
              ? 'opacity-40 cursor-not-allowed text-slate-400'
              : 'bg-white dark:bg-dark-elevated text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-hover'"
          >
            <span>Next</span>
            <ChevronRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      <!-- 4. LinkedIn-Style Education Card -->
      <section class="rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-5 sm:p-7 shadow-xs">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-5">
          Education
        </h2>

        <div class="divide-y divide-slate-200 dark:divide-dark-border">
          <!-- Institute of Information Technology (IIT), University of Dhaka -->
          <div class="flex items-start gap-4 pb-5">
            <a
              href="https://iit.du.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-14 h-11 rounded-lg bg-white border border-slate-200 dark:border-dark-border p-1.5 flex items-center justify-center shrink-0 hover:border-brand-500/50 transition-colors"
            >
              <img
                src="/logos/iit-du.png"
                alt="Institute of Information Technology, University of Dhaka"
                class="w-full h-full object-contain"
              />
            </a>
            <div class="min-w-0">
              <a
                href="https://iit.du.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <span>Institute of Information Technology (IIT), University of Dhaka</span>
                <ExternalLink class="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
              <div class="text-sm text-slate-700 dark:text-slate-200 font-medium mt-0.5">
                Postgraduate Studies &middot; Information Technology &amp; Software Engineering
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Dhaka, Bangladesh &middot; Software Engineering, Distributed Systems &amp; Enterprise Computing
              </p>
            </div>
          </div>

          <!-- Gopalganj Science and Technology University (GSTU) -->
          <div class="flex items-start gap-4 pt-5">
            <a
              href="https://gstu.edu.bd/s/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-14 h-11 rounded-lg bg-white border border-slate-200 dark:border-dark-border p-1 flex items-center justify-center overflow-hidden shrink-0 hover:border-brand-500/50 transition-colors"
            >
              <img
                src="/logos/gstu.jpeg"
                alt="Gopalganj Science and Technology University"
                class="w-full h-full object-contain"
              />
            </a>
            <div class="min-w-0">
              <a
                href="https://gstu.edu.bd/s/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <span>Gopalganj Science and Technology University (GSTU)</span>
                <ExternalLink class="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
              <div class="text-sm text-slate-700 dark:text-slate-200 font-medium mt-0.5">
                Bachelor of Science in Computer Science &amp; Engineering (B.Sc. in CSE)
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Gopalganj, Bangladesh &middot; Computer Science &amp; Software Engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. LinkedIn-Style Skills Card -->
      <section class="rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-5 sm:p-7 shadow-xs">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Skills
        </h2>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in coreSkills"
            :key="skill"
            class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border"
          >
            {{ skill }}
          </span>
        </div>
      </section>

    </div>

    <!-- Project Detail Modal -->
    <ProjectDetailModal 
      :project="selectedProject" 
      @close="selectedProject = null" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Mail, Linkedin, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { experiences } from '@/data/experience'
import { projects, type ProjectItem } from '@/data/projects'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
import ProjectDetailModal from '@/components/portfolio/ProjectDetailModal.vue'

const route = useRoute()
const activeOrg = ref<string>('all')
const currentPage = ref<number>(1)
const pageSize = 5
const selectedProject = ref<ProjectItem | null>(null)

const orgFilters = [
  { id: 'all', label: 'All' },
  { id: 'bkash', label: 'bKash' },
  { id: 'brac-bank', label: 'BRAC Bank PLC' },
  { id: 'robi', label: 'Robi Axiata Limited' },
  { id: 'beximco', label: 'BEXIMCO' },
  { id: 'inument', label: 'Inument' },
  { id: 'itogether', label: 'Together Initiative Limited' }
]

const coreSkills = [
  'Java',
  'Spring Boot',
  'Spring WebFlux',
  'Spring Security',
  'ISO 8583',
  'Microservices',
  'Apache Kafka',
  'PostgreSQL',
  'Oracle Database',
  'MySQL',
  'Redis',
  'Docker',
  'AWS',
  'OpenTelemetry',
  'REST APIs'
]

const filteredProjects = computed(() => {
  const workProjects = projects.filter(p => p.organizationId !== 'personal')
  if (activeOrg.value === 'all') return workProjects
  return workProjects.filter(p => p.organizationId === activeOrg.value)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProjects.value.length / pageSize)))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProjects.value.slice(start, start + pageSize)
})

const pageStart = computed(() => {
  if (filteredProjects.value.length === 0) return 0
  return (currentPage.value - 1) * pageSize + 1
})

const pageEnd = computed(() => {
  return Math.min(currentPage.value * pageSize, filteredProjects.value.length)
})

const selectOrg = (orgId: string) => {
  activeOrg.value = orgId
  currentPage.value = 1
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

onMounted(() => {
  const projectId = route.query.project as string
  if (projectId) {
    const found = projects.find(p => p.id === projectId)
    if (found) {
      selectedProject.value = found
    }
  }
})
</script>
