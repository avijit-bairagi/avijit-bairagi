<template>
  <div class="relative py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      <!-- 1. Portfolio Header / Professional Introduction -->
      <section class="max-w-4xl space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 text-xs font-mono text-brand-400">
          <span class="w-2 h-2 rounded-full bg-brand-400"></span>
          <span>COMPREHENSIVE PROFESSIONAL PORTFOLIO</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]">
          Engineering Leadership &amp; Career History
        </h1>

        <p class="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
          A comprehensive record of 8+ years architecting enterprise banking switches, high-volume payment processors, reactive microservices, and carrier-grade distributed applications.
        </p>

        <!-- Quick Section Anchor Navigation Bar -->
        <div class="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
          <a href="#experience" class="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-100 hover:bg-dark-elevated text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border">
            &darr; Career Timeline
          </a>
          <a href="#org-projects" class="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-100 hover:bg-dark-elevated text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border">
            &darr; Projects by Organization (6 + Personal)
          </a>
          <a href="#expertise" class="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-100 hover:bg-dark-elevated text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border">
            &darr; Technical Expertise
          </a>
          <a href="#strengths" class="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-100 hover:bg-dark-elevated text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border">
            &darr; Engineering Strengths
          </a>
          <a href="#achievements" class="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-surface light:bg-slate-100 hover:bg-dark-elevated text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border">
            &darr; Achievements &amp; Education
          </a>
        </div>
      </section>

      <!-- 2. Complete Career Timeline & Professional Experience -->
      <section id="experience" class="scroll-mt-24 space-y-8">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-5">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span>CHRONOLOGICAL HISTORY</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
            Professional Experience
          </h2>
          <p class="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Verified roles, scope of leadership, engineering initiatives, and organizational contexts.
          </p>
        </div>

        <div class="space-y-8">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative pl-6 sm:pl-8 border-l-2 border-dark-border dark:border-dark-border light:border-slate-300 space-y-6"
          >
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-bg dark:bg-dark-bg light:bg-white border-2 border-brand-400 flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            </div>

            <!-- Role Card -->
            <div class="p-6 sm:p-7 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-sm">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span class="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {{ exp.period }}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                      {{ exp.location }}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {{ exp.role }}
                  </h3>
                  <div class="text-base font-semibold text-brand-300 dark:text-brand-300 light:text-brand-600 mt-0.5">
                    {{ exp.company }}
                  </div>
                  <div class="text-xs font-mono text-slate-400 mt-0.5">
                    {{ exp.companyRelationship }} &bull; {{ exp.domain }}
                  </div>
                </div>

                <div v-if="index === 0" class="shrink-0">
                  <span class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Current Role
                  </span>
                </div>
              </div>

              <!-- Summary -->
              <p class="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-5">
                {{ exp.summary }}
              </p>

              <!-- Detailed Contributions -->
              <div class="space-y-2.5 mb-5">
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Scope &amp; Responsibilities:
                </div>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <li 
                    v-for="(contrib, cIdx) in exp.contributions" 
                    :key="cIdx"
                    class="flex items-start gap-2.5"
                  >
                    <CheckCircle2 class="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                    <span class="leading-relaxed">{{ contrib }}</span>
                  </li>
                </ul>
              </div>

              <!-- Key Achievements if any -->
              <div v-if="exp.achievements && exp.achievements.length" class="mb-5 p-4 rounded-xl bg-dark-elevated/60 dark:bg-dark-elevated/60 light:bg-slate-50 border border-dark-border/80">
                <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
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
              <div class="pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-100 flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="text-xs font-mono px-2.5 py-0.5 rounded bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border/80"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Projects Grouped Under Their Respective Organizations -->
      <section id="org-projects" class="scroll-mt-24 space-y-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-5">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-mono text-brand-400 mb-2">
              <span>PROJECT ARCHIVE BY ORGANIZATION</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
              Projects &amp; System Deliverables
            </h2>
            <p class="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
              Engineered systems organized under their respective employers and client engagements. Click any item for technical case study specifications.
            </p>
          </div>

          <!-- Quick category filter for fast scanning -->
          <div class="flex flex-wrap gap-1.5 self-start md:self-auto">
            <button 
              v-for="cat in projectCategories" 
              :key="cat.id"
              @click="activeCategory = cat.id"
              type="button"
              class="px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all"
              :class="[
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-dark-surface dark:bg-dark-surface light:bg-slate-100 text-slate-400 hover:text-white border border-dark-border'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <!-- Organizations Loop -->
        <div class="space-y-12">
          <div 
            v-for="orgGroup in groupedOrganizations" 
            :key="orgGroup.id"
            :id="`org-${orgGroup.id}`"
            class="space-y-5 scroll-mt-24"
          >
            <!-- Organization Header Bar -->
            <div class="p-4 rounded-xl bg-dark-surface/90 dark:bg-dark-surface/90 light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div class="flex items-center gap-3">
                <CompanyLogo 
                  :logo-key="orgGroup.logoKey" 
                  :fallback-text="orgGroup.name"
                />
                <div>
                  <h3 class="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {{ orgGroup.name }}
                  </h3>
                  <div class="text-xs font-mono text-slate-400">
                    {{ orgGroup.domain }}
                  </div>
                </div>
              </div>

              <!-- Relationship Badge -->
              <span 
                class="self-start sm:self-auto text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full"
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

            <!-- Projects Grid Under This Organization -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div 
                v-for="project in orgGroup.projects" 
                :key="project.id"
                class="group p-5 rounded-xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
                @click="openProjectModal(project)"
              >
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {{ project.domain }}
                    </span>
                    <span class="text-[10px] font-mono text-slate-500">
                      Case Study &rarr;
                    </span>
                  </div>

                  <!-- Project Title -->
                  <h4 class="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-brand-400 transition-colors">
                    {{ project.title }}
                  </h4>

                  <!-- Short Description -->
                  <p class="mt-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {{ project.shortDescription }}
                  </p>

                  <!-- Compact Bullet Points of Contributions -->
                  <div class="mt-3.5 space-y-1.5 pt-3 border-t border-dark-border/50 dark:border-dark-border/50 light:border-slate-100">
                    <div 
                      v-for="(contrib, cIdx) in project.contributions.slice(0, 2)" 
                      :key="cIdx"
                      class="flex items-start gap-1.5 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <span class="text-brand-400 mt-0.5">&bull;</span>
                      <span class="line-clamp-2 leading-tight">{{ contrib }}</span>
                    </div>
                  </div>
                </div>

                <!-- Footer: Tech Tags -->
                <div class="mt-4 pt-3 border-t border-dark-border/40 dark:border-dark-border/40 light:border-slate-100 flex flex-wrap gap-1">
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

      <!-- 4. Technical Expertise Deep-Dive (Anchor #expertise) -->
      <section id="expertise" class="scroll-mt-24 space-y-8">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-5">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span>ENGINEERING MASTERY</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
            Technical Expertise &amp; Architecture Matrix
          </h2>
          <p class="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Practical application depth across enterprise backend, messaging, cloud, and persistence stacks.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="cat in skillCategories" 
            :key="cat.id"
            class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200"
          >
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                {{ cat.name }}
              </h3>
              <span class="text-xs font-mono text-brand-400">
                {{ cat.skills.length }} verified tools
              </span>
            </div>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5">
              {{ cat.description }}
            </p>

            <div class="space-y-2.5">
              <div 
                v-for="skill in cat.skills" 
                :key="skill.name"
                class="p-2.5 rounded-xl bg-dark-elevated/70 dark:bg-dark-elevated/70 light:bg-slate-50 border border-dark-border/60 flex items-start gap-3"
              >
                <div class="w-6 h-6 rounded-lg bg-dark-bg dark:bg-dark-bg light:bg-white flex items-center justify-center p-1 text-brand-400 shrink-0">
                  <TechIcon :name="skill.name" wrapper-class="w-full h-full" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {{ skill.name }}
                    </span>
                    <span v-if="skill.isFeatured" class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-brand-500/20 text-brand-300">
                      Primary
                    </span>
                  </div>
                  <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 leading-relaxed">
                    {{ skill.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Engineering Strengths -->
      <section id="strengths" class="scroll-mt-24 space-y-8">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-5">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-brand-400 mb-2">
            <span>ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
            Engineering Strengths
          </h2>
          <p class="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Proven competencies developed through demanding production environments.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <ShieldCheck class="w-5 h-5" />
            </div>
            <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">
              Financial Integrity &amp; ISO 8583
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Extensive hands-on mastery designing ISO 8583 financial switches, BIT-map message formatting, cryptographic MAC generation, and zero-loss transaction reversal pipelines.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Cpu class="w-5 h-5" />
            </div>
            <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">
              Distributed Idempotency &amp; Concurrency
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Eliminating double-debits, race conditions, and out-of-order state mutations via Redis Redlock primitives, database optimistic concurrency, and Kafka partition partitioning.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Activity class="w-5 h-5" />
            </div>
            <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">
              Observability &amp; Operational Resilience
            </h3>
            <p class="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              End-to-end distributed tracing with OpenTelemetry, custom Prometheus metric timers, structured JSON logging, and proactive latency alerting across microservice networks.
            </p>
          </div>
        </div>
      </section>

      <!-- 6. Professional Achievements & Education -->
      <section id="achievements" class="scroll-mt-24 space-y-8">
        <div class="border-b border-dark-border/80 dark:border-dark-border/80 light:border-slate-200 pb-5">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span>TRACK RECORD</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
            Professional Achievements &amp; Education
          </h2>
          <p class="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Verified milestones and academic background.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Achievements Card -->
          <div class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-4">
            <div class="flex items-center gap-2.5 text-brand-400">
              <Award class="w-5 h-5" />
              <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">Key Engineering Milestones</h3>
            </div>
            <ul class="space-y-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Successfully engineered and deployed high-throughput ISO 8583 NPSB national payment integration without financial discrepancy.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Sustained 99.99% uptime during nationwide festive transaction surges across merchant payment and bank-to-wallet pipelines.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Established modern code review, CI/CD automated validation, and architectural design documentation across engineering squads.</span>
              </li>
            </ul>
          </div>

          <!-- Education Card -->
          <div class="p-6 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 space-y-4">
            <div class="flex items-center gap-2.5 text-brand-400">
              <GraduationCap class="w-5 h-5" />
              <h3 class="text-base font-bold text-white dark:text-white light:text-slate-900">Academic Background</h3>
            </div>
            
            <div class="p-4 rounded-xl bg-dark-elevated/60 dark:bg-dark-elevated/60 light:bg-slate-50 border border-dark-border/80">
              <div class="text-sm font-bold text-white dark:text-white light:text-slate-900">
                Bachelor of Science in Computer Science &amp; Engineering (B.Sc. in CSE)
              </div>
              <div class="text-xs font-mono text-brand-400 mt-0.5">
                Computer Science &amp; Software Engineering
              </div>
              <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
                Strong theoretical and practical grounding in Data Structures, Algorithms, Distributed Database Systems, Object-Oriented Software Design, Operating Systems, and Network Protocols.
              </p>
            </div>

            <div class="text-xs font-mono text-slate-400">
              <span class="text-emerald-400">&bull;</span> Continuous professional advancement in cloud computing, reactive architectures, and enterprise security.
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Direct Contact / Inquiries Banner -->
      <section class="p-8 sm:p-10 rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 max-w-xl text-center md:text-left">
          <div class="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Ready to Connect
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Let's Discuss Your Next Engineering Milestone
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Interested in backend leadership, payment switch architectures, or high-reliability consulting? Let's initiate a conversation.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a 
            href="mailto:ovi821@gmail.com?subject=Engineering%20Discussion"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            <Mail class="w-4 h-4" />
            <span>ovi821@gmail.com</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/avijit-bairagi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover dark:hover:bg-dark-hover light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-dark-border text-xs sm:text-sm font-semibold transition-all"
          >
            <Linkedin class="w-4 h-4 text-brand-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </section>

    </div>

    <!-- Interactive Project Detail Modal -->
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
  Linkedin 
} from 'lucide-vue-next'
import { experiences } from '@/data/experience'
import { projects, projectCategories, type ProjectItem } from '@/data/projects'
import { companies } from '@/data/companies'
import { skillCategories } from '@/data/skills'
import TechIcon from '@/components/common/TechIcon.vue'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
import ProjectDetailModal from '@/components/portfolio/ProjectDetailModal.vue'

const route = useRoute()
const activeCategory = ref<string>('all')
const selectedProject = ref<ProjectItem | null>(null)

// Group projects under organizations
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

  // Personal Projects Group
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
