export interface OfferingItem {
  id: string
  title: string
  description: string
  icon: string
  focusArea: string
}

export const offeringsSection = {
  heading: 'How I Can Help You Build Better Software',
  subtitle: 'Targeted technical competencies and leadership ready to accelerate your engineering outcomes.',
  ctaText: 'Have an Engineering Challenge? Let\'s Talk.',
  ctaLink: '#contact'
}

export const offerings: OfferingItem[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Build robust, scalable backend applications with Java and Spring Boot tailored to high-throughput requirements.',
    icon: 'server',
    focusArea: 'Java 21 · Spring Boot · Microservices'
  },
  {
    id: 'architecture',
    title: 'Technical Architecture',
    description: 'Help design maintainable software architectures and make practical, long-term technical decisions for scale.',
    icon: 'layers',
    focusArea: 'System Design · Modularity · Event Streams'
  },
  {
    id: 'fintech-integration',
    title: 'Fintech Integration',
    description: 'Develop payment integrations, financial workflows, and secure transaction processing solutions adhering to industry standards.',
    icon: 'shield-check',
    focusArea: 'ISO 8583 · NPSB · Merchant Gateways'
  },
  {
    id: 'engineering-leadership',
    title: 'Engineering Leadership',
    description: 'Support technical decision-making, code quality standards, engineering mentorship, and high-velocity delivery.',
    icon: 'users',
    focusArea: 'Mentorship · Design Reviews · Standards'
  },
  {
    id: 'performance-reliability',
    title: 'Performance & Reliability',
    description: 'Improve application performance, identify concurrency bottlenecks, eliminate memory leaks, and build resilient systems.',
    icon: 'gauge',
    focusArea: 'JVM Profiling · Tracing · Fault Tolerance'
  },
  {
    id: 'technical-collaboration',
    title: 'Technical Collaboration',
    description: 'Collaborate cross-functionally with product and engineering teams to transform complex business requirements into elegant software.',
    icon: 'git-merge',
    focusArea: 'Agile Delivery · Pragmatic Engineering'
  }
]
