<template>
  <div class="relative py-8 lg:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      <!-- 1. Developer Profile Header (Inspired by Aditi Arya & txtnode minimalist developer design) -->
      <section class="p-6 sm:p-8 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-xs space-y-6">
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div class="space-y-3">
            <!-- Unboxed Metadata Kicker -->
            <div class="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">Avijit Bairagi</span>
              <span aria-hidden="true">&bull;</span>
              <span>Lead Software Engineer</span>
              <span aria-hidden="true">&bull;</span>
              <span class="text-brand-400">Dhaka, Bangladesh (Remote Friendly)</span>
            </div>

            <!-- Big Main Headline -->
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15] [text-wrap:balance]">
              Professional Experience &amp; Engineering Archive
            </h1>

            <!-- Bio -->
            <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-3xl">
              Lead Software Engineer with over 8 years of production experience architecting high-throughput financial switches, ISO 8583 payment gateways, bank-to-wallet pipelines, and reactive enterprise microservices.
            </p>

            <!-- Quick Badges -->
            <div class="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20">
                8+ Years Experience
              </span>
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fintech &amp; ISO 8583
              </span>
              <span class="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Java 21 &amp; Spring WebFlux
              </span>
              <span class="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Reactive Systems &amp; Kafka
              </span>
            </div>
          </div>

          <!-- Direct Actions (Copy Email, LinkedIn, GitHub, Request Resume) -->
          <div class="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button 
              @click="copyEmail"
              type="button"
              class="inline-flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-xs focus:outline-none"
            >
              <div class="flex items-center gap-2">
                <Mail class="w-3.5 h-3.5" />
                <span>{{ contactEmail }}</span>
              </div>
              <span class="text-[10px] font-mono opacity-90">{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>

            <a 
              href="https://www.linkedin.com/in/avijit-bairagi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-300 font-medium text-xs transition-colors"
            >
              <div class="flex items-center gap-2">
                <Linkedin class="w-3.5 h-3.5 text-brand-400" />
                <span>LinkedIn Profile</span>
              </div>
              <ExternalLink class="w-3 h-3 text-slate-400" />
            </a>

            <a 
              href="https://github.com/avijit-bairagi" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-300 font-medium text-xs transition-colors"
            >
              <div class="flex items-center gap-2">
                <Github class="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub Repos</span>
              </div>
              <ExternalLink class="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        <!-- Section Navigation Anchor Strip -->
        <div class="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span class="text-slate-500 mr-1">Sections:</span>
          <a href="#experience" class="px-2.5 py-1 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:text-brand-400 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors">
            &darr; Experience Timeline
          </a>
          <a href="#org-projects" class="px-2.5 py-1 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:text-brand-400 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors">
            &darr; Organization Projects
          </a>
          <a href="#expertise" class="px-2.5 py-1 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:text-brand-400 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors">
            &darr; Technical Skills
          </a>
          <a href="#strengths" class="px-2.5 py-1 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:text-brand-400 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors">
            &darr; Engineering Strengths
          </a>
          <a href="#education" class="px-2.5 py-1 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:text-brand-400 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors">
            &darr; Education &amp; Milestones
          </a>
        </div>
      </section>

      <!-- 2. PROFESSIONAL EXPERIENCE TIMELINE (Primary Section) -->
      <section id="experience" class="scroll-mt-20 space-y-6">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-3">
          <div class="text-xs font-mono text-emerald-400 mb-1">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Professional Experience
          </h2>
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
            Verified chronology of leadership, backend architecture, and core enterprise system delivery.
          </p>
        </div>

        <div class="space-y-6">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative pl-6 sm:pl-8 border-l-2 border-dark-border dark:border-dark-border light:border-slate-300 space-y-4"
          >
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark-bg dark:bg-dark-bg light:bg-white border-2 border-brand-400 flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            </div>

            <!-- Role Card -->
            <div class="p-5 sm:p-6 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-xs">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {{ exp.period }}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                      {{ exp.location }}
                    </span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {{ exp.role }}
                  </h3>
                  <div class="text-sm font-semibold text-brand-300 dark:text-brand-300 light:text-brand-600 mt-0.5">
                    {{ exp.company }}
                  </div>
                  <div class="text-xs font-mono text-slate-400 mt-0.5">
                    {{ exp.companyRelationship }} &bull; {{ exp.domain }}
                  </div>
                </div>

                <div v-if="index === 0" class="shrink-0">
                  <span class="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Current Role
                  </span>
                </div>
              </div>

              <!-- Summary -->
              <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                {{ exp.summary }}
              </p>

              <!-- Detailed Contributions -->
              <div class="space-y-2 mb-4">
                <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Scope &amp; Responsibilities:
                </div>
                <ul class="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <li 
                    v-for="(contrib, cIdx) in exp.contributions" 
                    :key="cIdx"
                    class="flex items-start gap-2"
                  >
                    <CheckCircle2 class="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                    <span class="leading-relaxed">{{ contrib }}</span>
                  </li>
                </ul>
              </div>

              <!-- Key Achievements -->
              <div v-if="exp.achievements && exp.achievements.length" class="mb-4 p-3.5 rounded-lg bg-dark-elevated/60 dark:bg-dark-elevated/60 light:bg-slate-50 border border-dark-border/80 dark:border-dark-border/80 light:border-slate-200">
                <div class="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                  Verified Outcomes
                </div>
                <ul class="space-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <li v-for="(ach, aIdx) in exp.achievements" :key="aIdx" class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{{ ach }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack Badges -->
              <div class="pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border/80 dark:border-dark-border/80 light:border-slate-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. PROJECTS ARCHIVE BY ORGANIZATION -->
      <section id="org-projects" class="scroll-mt-20 space-y-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-3">
          <div>
            <div class="text-xs font-mono text-brand-400 mb-1">
              <span>PROJECT DELIVERABLES</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
              Projects by Organization
            </h2>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
              Production systems, payment switches, and enterprise gateways grouped under employers and client engagements.
            </p>
          </div>

          <!-- Quick category filter buttons -->
          <div class="flex flex-wrap gap-1 self-start md:self-auto">
            <button 
              v-for="cat in projectCategories" 
              :key="cat.id"
              @click="activeCategory = cat.id"
              type="button"
              class="px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors"
              :class="[
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-dark-surface dark:bg-dark-surface light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-dark-border dark:border-dark-border light:border-slate-300'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <!-- Organizations Loop -->
        <div class="space-y-8">
          <div 
            v-for="orgGroup in groupedOrganizations" 
            :key="orgGroup.id"
            :id="`org-${orgGroup.id}`"
            class="space-y-3.5 scroll-mt-20"
          >
            <!-- Organization Header Bar -->
            <div class="p-3.5 rounded-lg bg-dark-surface/90 dark:bg-dark-surface/90 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-xs">
              <div class="flex items-center gap-2.5">
                <CompanyLogo 
                  :logo-key="orgGroup.logoKey" 
                  :fallback-text="orgGroup.name" 
                />
                <div>
                  <h3 class="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900">
                    {{ orgGroup.name }}
                  </h3>
                  <div class="text-[11px] font-mono text-slate-400">
                    {{ orgGroup.domain }}
                  </div>
                </div>
              </div>

              <!-- Relationship Badge -->
              <span 
                class="self-start sm:self-auto text-[10px] font-mono font-semibold px-2 py-0.5 rounded"
                :class="[
                  orgGroup.relationship.includes('Employer')
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    : orgGroup.relationship.includes('Personal')
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'bg-dark-elevated text-slate-400 border border-dark-border'
                ]"
              >
                {{ orgGroup.relationship }}
              </span>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div 
                v-for="project in orgGroup.projects" 
                :key="project.id"
                class="group p-4 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/50 hover:shadow-sm transition-colors flex flex-col justify-between cursor-pointer"
                @click="openProjectModal(project)"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {{ project.domain }}
                    </span>
                    <span class="text-[10px] font-mono text-slate-500 group-hover:text-brand-400 transition-colors">
                      Specifications &rarr;
                    </span>
                  </div>

                  <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    {{ project.title }}
                  </h4>

                  <p class="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed line-clamp-2">
                    {{ project.shortDescription }}
                  </p>

                  <div class="mt-3 space-y-1 pt-2.5 border-t border-dark-border/50 dark:border-dark-border/50 light:border-slate-100">
                    <div 
                      v-for="(contrib, cIdx) in project.contributions.slice(0, 2)" 
                      :key="cIdx"
                      class="flex items-start gap-1.5 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <span class="text-brand-400 mt-0.5">&bull;</span>
                      <span class="line-clamp-1 leading-tight">{{ contrib }}</span>
                    </div>
                  </div>
                </div>

                <!-- Footer: Tech Tags -->
                <div class="mt-3 pt-2.5 border-t border-dark-border/40 dark:border-dark-border/40 light:border-slate-100 flex flex-wrap gap-1">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech"
                    class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-elevated text-slate-400"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3" class="text-[10px] font-mono px-1 py-0.5 rounded text-slate-500">
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. TECHNICAL EXPERTISE MATRIX -->
      <section id="expertise" class="scroll-mt-20 space-y-6">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-3">
          <div class="text-xs font-mono text-emerald-400 mb-1">
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Skills &amp; Technology Stack
          </h2>
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
            Production depth across enterprise Java, reactive microservices, relational and key-value persistence, and message streaming.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="cat in skillCategories" 
            :key="cat.id"
            class="p-4 sm:p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200"
          >
            <div class="flex items-center justify-between mb-1.5">
              <h3 class="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900">
                {{ cat.name }}
              </h3>
              <span class="text-xs font-mono text-brand-400">
                {{ cat.skills.length }} verified tools
              </span>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-3.5">
              {{ cat.description }}
            </p>

            <div class="space-y-2">
              <div 
                v-for="skill in cat.skills" 
                :key="skill.name"
                class="p-2 rounded-lg bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-50 border border-dark-border/60 flex items-start gap-2.5"
              >
                <div class="w-5 h-5 rounded bg-dark-bg dark:bg-dark-bg light:bg-white flex items-center justify-center p-0.5 text-brand-400 shrink-0">
                  <TechIcon :name="skill.name" wrapper-class="w-full h-full" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {{ skill.name }}
                    </span>
                    <span v-if="skill.isFeatured" class="text-[9px] font-mono px-1 rounded bg-brand-500/20 text-brand-300">
                      Primary
                    </span>
                  </div>
                  <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-normal">
                    {{ skill.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CORE ARCHITECTURAL STRENGTHS -->
      <section id="strengths" class="scroll-mt-20 space-y-6">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-3">
          <div class="text-xs font-mono text-brand-400 mb-1">
            <span>CORE ARCHITECTURAL STRENGTHS</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Proven Engineering Strengths
          </h2>
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
            Architectural competencies hardened across demanding financial and telecommunication systems.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 sm:p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <ShieldCheck class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              Financial Integrity &amp; ISO 8583
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Extensive hands-on mastery designing ISO 8583 financial switches, BIT-map message formatting, cryptographic MAC generation, and zero-loss transaction reversal pipelines.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Cpu class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              Distributed Idempotency &amp; Locks
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Eliminating double-debits, race conditions, and out-of-order state mutations via Redis Redlock primitives, database optimistic concurrency, and Kafka partition keys.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Activity class="w-4 h-4" />
            </div>
            <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              Observability &amp; Operational Resilience
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              End-to-end distributed tracing with OpenTelemetry, custom Prometheus metric timers, structured JSON logging, and proactive latency alerting across microservice networks.
            </p>
          </div>
        </div>
      </section>

      <!-- 6. EDUCATION & MILESTONES -->
      <section id="education" class="scroll-mt-20 space-y-6">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-3">
          <div class="text-xs font-mono text-emerald-400 mb-1">
            <span>CREDENTIALS</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Education &amp; Key Milestones
          </h2>
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
            Formal engineering foundations and verified production achievements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Achievements Card -->
          <div class="p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-3">
            <div class="flex items-center gap-2 text-brand-400">
              <Award class="w-4 h-4" />
              <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900">Key Engineering Milestones</h3>
            </div>
            <ul class="space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
              <li class="flex items-start gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Successfully engineered and deployed high-throughput ISO 8583 NPSB national payment integration without financial discrepancy.</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Sustained 99.99% uptime during nationwide festive transaction surges across merchant payment and bank-to-wallet pipelines.</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Established modern code review, CI/CD automated validation, and architectural design documentation across engineering squads.</span>
              </li>
            </ul>
          </div>

          <!-- Education Card -->
          <div class="p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-3">
            <div class="flex items-center gap-2 text-brand-400">
              <GraduationCap class="w-4 h-4" />
              <h3 class="text-sm font-bold text-white dark:text-white light:text-slate-900">Academic Background</h3>
            </div>
            
            <div class="p-3.5 rounded-lg bg-dark-elevated/60 dark:bg-dark-elevated/60 light:bg-slate-50 border border-dark-border/80">
              <div class="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                Bachelor of Science in Computer Science &amp; Engineering (B.Sc. in CSE)
              </div>
              <div class="text-[11px] font-mono text-brand-400 mt-0.5">
                Computer Science &amp; Software Engineering
              </div>
              <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1.5 leading-normal">
                Strong theoretical and practical grounding in Data Structures, Algorithms, Distributed Database Systems, Object-Oriented Software Design, Operating Systems, and Network Protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. DIRECT CONNECT / INQUIRIES -->
      <section class="p-6 sm:p-7 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="space-y-1 max-w-xl text-center md:text-left">
          <div class="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Ready to Connect
          </div>
          <h2 class="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
            Let's Discuss Your Next Engineering Milestone
          </h2>
          <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Interested in backend leadership, payment switch architectures, or high-reliability consulting? Let's initiate a conversation.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
          <button 
            @click="copyEmail"
            type="button"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <Mail class="w-3.5 h-3.5" />
            <span>{{ copied ? 'Email Copied!' : contactEmail }}</span>
          </button>

          <a 
            href="https://www.linkedin.com/in/avijit-bairagi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border dark:border-dark-border light:border-slate-300 text-xs sm:text-sm font-semibold transition-colors"
          >
            <Linkedin class="w-3.5 h-3.5 text-brand-400" />
            <span>LinkedIn</span>
          </a>
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
import { 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Award, 
  GraduationCap, 
  Mail, 
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-vue-next'
import { experiences } from '@/data/experience'
import { projects, projectCategories, type ProjectItem } from '@/data/projects'
import { companies } from '@/data/companies'
import { skillCategories } from '@/data/skills'
import TechIcon from '@/components/common/TechIcon.vue'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
import ProjectDetailModal from '@/components/portfolio/ProjectDetailModal.vue'

const route = useRoute()
const contactEmail = 'ovi821@gmail.com'
const copied = ref(false)
const activeCategory = ref<string>('all')
const selectedProject = ref<ProjectItem | null>(null)

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

const groupedOrganizations = computed(() => {
  const result = []

  for (const company of companies) {
    let companyProjects = projects.filter(p => p.organizationId === company.id)
    if (activeCategory.value !== 'all') {
      companyProjects = companyProjects.filter(p => p.categories.includes(activeCategory.value as any))
    }
    
    if (companyProjects.length > 0) {
      result.push({
        id: company.id,
        name: company.name,
        logoKey: company.logoKey,
        domain: company.domain,
        relationship: company.relationship,
        projects: companyProjects
      })
    }
  }

  let personalProjects = projects.filter(p => p.organizationId === 'personal')
  if (activeCategory.value !== 'all') {
    personalProjects = personalProjects.filter(p => p.categories.includes(activeCategory.value as any))
  }

  if (personalProjects.length > 0) {
    result.push({
      id: 'personal',
      name: 'Personal Engineering Exploration',
      logoKey: 'itogether' as const,
      domain: 'Independent Architecture Research & Benchmarks',
      relationship: 'Personal Research',
      projects: personalProjects
    })
  }

  return result
})

const openProjectModal = (proj: ProjectItem) => {
  selectedProject.value = proj
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
