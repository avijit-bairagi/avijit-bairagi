# Avijit Bairagi – Premium Personal Portfolio Website

[![Vue.js 3](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38BDF8?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, minimal, compact, and premium personal brand and engineering portfolio website for **Avijit Bairagi**, Lead Software Engineer specializing in backend engineering, fintech, ISO 8583 payment systems, and enterprise distributed software.

---

## 🌟 Architecture & Highlights

The website features two primary user experiences:

1. **Home (`/`)**: A clean, attractive personal landing page highlighting professional identity, core technology toolkit, organizations contributed to, services provided, offerings, and personal engineering philosophy.
2. **Portfolio (`/portfolio`)**: A comprehensive professional portfolio containing full career history, verified employment roles, projects grouped under their respective organizations (with compact bullet points and interactive technical case studies), technical expertise breakdowns, engineering strengths, and verified outcomes.

### Verified Organizations & Contributions
- **Inument Solutions Limited** *(Employer)*: System Architecture & Design
- **bKash** *(Project Contribution)*: NPSB, Direct Charge, Bank-to-bKash, Payment Gateway, Savings / DPS, Settlement
- **BRAC Bank** *(Project Contribution)*: Corporate Banking Solution, Payment Gateway, RTGS, LC
- **ROBI** *(Project Contribution)*: Workflow Management, NTMS, Campaign Management, Mobile Application
- **BEXIMCO** *(Project Contribution)*: Pharma CRM, Field Force Automation (FFA)
- **iTogether** *(Project Contribution)*: Mobile Applications, Web Services

### Contact Information
- **Personal Email**: `ovi821@gmail.com` (`mailto:ovi821@gmail.com`)
- **LinkedIn**: [linkedin.com/in/avijit-bairagi](https://www.linkedin.com/in/avijit-bairagi/)
- **GitHub**: [github.com/avijit-bairagi](https://github.com/avijit-bairagi)

---

## 📁 Project Structure

```text
avijit-bairagi/
├── public/
│   ├── favicon.svg              # Geometric AB monogram vector favicon
│   └── resume/                  # Resume downloads & static assets
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css         # Tailwind & custom scrollbar / pattern styling
│   ├── components/
│   │   ├── common/
│   │   │   ├── CompanyLogo.vue       # Authentic vector brand logos for organizations
│   │   │   ├── ContactSection.vue    # Interactive contact & inquiry form
│   │   │   └── TechIcon.vue          # Vector brand icons (Java, Spring, Kafka...)
│   │   ├── home/
│   │   │   ├── HeroSection.vue        # Clean compact hero with credentials card
│   │   │   ├── SnapshotSection.vue    # "Engineering at a Glance" metrics
│   │   │   ├── TechnologiesSection.vue# Categorized tools with Java/Spring prominence
│   │   │   ├── CompaniesSection.vue   # 6 organizations with logos & compact contributions
│   │   │   ├── ServicesSection.vue    # "What I Bring to the Table" (01-06)
│   │   │   ├── OfferingsSection.vue   # "How I Can Help You Build Better Software"
│   │   │   └── PhilosophySection.vue  # Editorial engineering philosophy
│   │   ├── layout/
│   │   │   ├── HeaderNav.vue          # Sticky header with AB monogram & mobile menu
│   │   │   └── FooterSection.vue      # Dynamic copyright & quick navigation
│   │   └── portfolio/
│   │       └── ProjectDetailModal.vue # Inspectable project specs & outcomes modal
│   ├── composables/
│   │   └── useTheme.ts          # Dark / Light theme composable
│   ├── data/                    # 100% Data-Driven Architecture
│   │   ├── profile.ts           # Bio, stats, philosophy, headlines
│   │   ├── companies.ts         # 6 organizations, relationships, contributions
│   │   ├── experience.ts        # Career timeline & responsibilities
│   │   ├── projects.ts          # Categorized systems grouped by organization
│   │   ├── skills.ts            # Categorized technical toolkit & descriptions
│   │   ├── services.ts          # Delivered services & capabilities
│   │   ├── offerings.ts         # Targeted value propositions for teams
│   │   └── social-links.ts      # Personal email, LinkedIn, GitHub
│   ├── router/
│   │   └── index.ts             # Route configuration & smooth hash scroll behavior
│   ├── views/
│   │   ├── HomeView.vue         # Landing page view
│   │   └── PortfolioView.vue    # Dedicated in-depth portfolio view
│   ├── App.vue                  # Root application wrapper
│   └── main.ts                  # Entrypoint
│
├── index.html                   # HTML template with SEO & OpenGraph meta tags
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Theme and color extensions
├── tsconfig.json                # TypeScript bundler configuration
└── vite.config.ts               # Vite configuration with path aliases
```

---

## 🛠️ Data-Driven Customization

All personal and technical content is isolated in `src/data/`:

- **Update Profile & Bio**: Edit `src/data/profile.ts`
- **Add / Edit Projects**: Edit `src/data/projects.ts` (projects grouped by `organizationId`)
- **Update Experience & Roles**: Edit `src/data/experience.ts`
- **Modify Technologies & Skills**: Edit `src/data/skills.ts`
- **Update Organizations & Contributions**: Edit `src/data/companies.ts`
- **Change Social / Contact Links**: Edit `src/data/social-links.ts`

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📄 License & Attribution
Designed and built for **Avijit Bairagi**. All personal and professional data copyright &copy; 2026.
