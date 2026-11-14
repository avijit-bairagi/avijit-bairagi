export interface CreatedItem {
  id: string
  name: string
  tagline: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  accentColor: string
  badgeText: string
  iconKey: 'smart-hisab' | 'arcade-play' | 'dhamaka' | 'admission'
}

export const creationsList: CreatedItem[] = [
  {
    id: 'smart-hisab',
    name: 'Smart Hisab',
    tagline: 'Smart Accounting & Digital Bookkeeping Platform',
    category: 'Fintech & Productivity Web App',
    badgeText: 'Web App',
    accentColor: '#10B981',
    iconKey: 'smart-hisab',
    description: 'A modern, intuitive digital ledger and daily bookkeeping web application built for small businesses, freelancers, and personal finance management. Features fast transaction entry, real-time credit/debit calculation, automated financial reports, category breakdown analytics, and zero-latency local caching.',
    features: [
      'Real-time cash flow & net balance calculations',
      'Categorized debit and credit ledger recording',
      'Instant financial summary & visual transaction log',
      'Local-first persistence with zero latency and export capabilities'
    ],
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'IndexedDB / LocalStorage', 'Responsive UI']
  },
  {
    id: 'arcade-play',
    name: 'Arcade Play',
    tagline: 'Interactive Canvas Games & Physics Portal',
    category: 'Interactive Web Game Hub',
    badgeText: 'Web Games',
    accentColor: '#8B5CF6',
    iconKey: 'arcade-play',
    description: 'A lightweight, responsive web gaming portal featuring arcade favorites including Retro 2D Snake, 2048 Puzzle, and Brick Breaker. Engineered with pure HTML5 Canvas, 60 FPS animation loops, custom collision detection, synthesized sound effects with the Web Audio API, and persistent local high-score tables.',
    features: [
      'Smooth 60 FPS requestAnimationFrame canvas rendering',
      'Custom collision physics & synthesized audio soundboard',
      'Cross-platform responsive keyboard and touch controls',
      'Multiple arcade game modes with instant high-score tracking'
    ],
    technologies: ['HTML5 Canvas', 'TypeScript', 'Web Audio API', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'dhamaka-engine',
    name: 'Dhamaka Engine',
    tagline: 'Reactive Event-Driven Architecture Sandbox',
    category: 'Backend Architecture & Research',
    badgeText: 'Engine / Sandbox',
    accentColor: '#F59E0B',
    iconKey: 'dhamaka',
    description: 'An independent engineering research project built to benchmark reactive paradigms, distributed lock primitives, high-throughput caching strategies, and event sourcing outside corporate legacy boundaries.',
    features: [
      'Project Reactor & Spring WebFlux high-concurrency benchmarks',
      'Distributed Redis Redlock primitives vs optimistic database locks',
      'Event-sourced financial transaction streaming with Apache Kafka',
      'Containerized multi-node topology test harness'
    ],
    technologies: ['Java 21', 'Spring WebFlux', 'Apache Kafka', 'Redis', 'Docker', 'PostgreSQL']
  },
  {
    id: 'admission-automation',
    name: 'Admission Automation Suite',
    tagline: 'Automated Examination & Enrollment System',
    category: 'Enterprise Education Platform',
    badgeText: 'Workflow Platform',
    accentColor: '#0284C7',
    iconKey: 'admission',
    description: 'A full-lifecycle academic admissions workflow platform that automates student application processing, algorithmic seat distribution, verifiable cryptographic admit card generation, and simulated payment clearing.',
    features: [
      'Algorithmic hall and seat plan arrangement automation',
      'Cryptographically verifiable admit card generation',
      'Integrated payment verification and reconciliation pipeline',
      'Multi-role administrative approval matrix'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful APIs', 'Docker', 'Linux']
  }
]
