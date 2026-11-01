export interface ServiceItem {
  number: string
  title: string
  description: string
  highlights: string[]
  icon: string
}

export const servicesSection = {
  heading: 'What I Bring to the Table',
  subtitle: 'Engineering expertise focused on solving real business challenges.'
}

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Fintech & Payment Solutions',
    description: 'Building and integrating financial systems, payment workflows, and digital transaction platforms.',
    highlights: ['ISO 8583 message formatting & parsing', 'Multi-party settlement & reconciliation', 'High-availability transaction processing'],
    icon: 'credit-card'
  },
  {
    number: '02',
    title: 'Banking System Integration',
    description: 'Connecting banking systems, financial institutions, and digital platforms through secure and reliable integrations.',
    highlights: ['Core banking connectivity & CBS adapters', 'NPSB, RTGS, BEFTN, & IFT workflows', 'Strict financial data compliance & audit trails'],
    icon: 'landmark'
  },
  {
    number: '03',
    title: 'Enterprise Backend Development',
    description: 'Developing robust enterprise applications and backend services using Java and Spring Boot.',
    highlights: ['Spring Boot & WebFlux reactive ecosystems', 'Clean architecture & Domain-Driven Design', 'Secure authentication & RBAC mechanisms'],
    icon: 'server'
  },
  {
    number: '04',
    title: 'API & System Integration',
    description: 'Designing and implementing APIs and integrations between complex enterprise systems.',
    highlights: ['Idempotent RESTful API contracts', 'Resilient circuit-breaking & retry policies', 'Legacy enterprise protocol transformation'],
    icon: 'network'
  },
  {
    number: '05',
    title: 'Distributed Systems Engineering',
    description: 'Building applications that involve messaging, asynchronous workflows, caching, and service-to-service communication.',
    highlights: ['Apache Kafka event streaming & consumer groups', 'Distributed Redis caching & locking strategies', 'Asynchronous task orchestration & queueing'],
    icon: 'cpu'
  },
  {
    number: '06',
    title: 'Application Modernization',
    description: 'Modernizing existing applications through framework upgrades, refactoring, performance improvements, and architectural evolution.',
    highlights: ['Monolith to microservices migration', 'Spring & Java LTS runtime modernization', 'Profiling, JVM tuning & query optimization'],
    icon: 'refresh-cw'
  }
]
