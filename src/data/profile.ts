export interface ProfileInfo {
  name: string
  preferredName: string
  monogram: string
  role: string
  eyebrow: string
  headline: string
  subheadline: string
  bioIntro: string
  bioDetails: string
  location: string
  yearsOfExperience: string
  primaryDomain: string
  statusBadge: string
  resumeUrl: string
  philosophy: {
    heading: string
    quote: string
    details: string
  }
  snapshotStats: Array<{
    id: string
    value: string
    label: string
    description: string
  }>
}

export const profile: ProfileInfo = {
  name: 'Avijit Bairagi',
  preferredName: 'Avijit',
  monogram: 'AB',
  role: 'Lead Software Engineer',
  eyebrow: 'LEAD SOFTWARE ENGINEER · FINTECH · BACKEND ENGINEERING',
  headline: 'Engineering reliable systems.\nBuilding solutions that matter.',
  subheadline: 'Architecting high-throughput fintech platforms, ISO 8583 payment gateways, and resilient enterprise microservices.',
  bioIntro: "I'm Avijit Bairagi, a Lead Software Engineer with 8+ years of experience building enterprise applications, fintech platforms, payment integrations, and scalable backend systems.",
  bioDetails: "I enjoy solving complex engineering problems, designing maintainable architectures, and transforming business requirements into reliable software solutions.",
  location: 'Dhaka, Bangladesh',
  yearsOfExperience: '8+',
  primaryDomain: 'Fintech & Payment Systems',
  statusBadge: 'Open to Technical Collaborations & Opportunities',
  resumeUrl: '#contact', // Configurable resume link or modal
  philosophy: {
    heading: 'Good engineering is not just about writing code.',
    quote: "It's about understanding problems, making thoughtful architectural decisions, and building systems people can depend on.",
    details: 'I believe in keeping solutions simple, writing maintainable code, continuously learning, and engineering software that creates meaningful business value.'
  },
  snapshotStats: [
    {
      id: 'exp',
      value: '8+',
      label: 'Years of Experience',
      description: 'Designing and scaling production backend and enterprise systems'
    },
    {
      id: 'fintech',
      value: 'Fintech',
      label: '& Payment Systems',
      description: 'ISO 8583, NPSB, Direct Charge, Digital Savings, and BNPL workflows'
    },
    {
      id: 'enterprise',
      value: 'Enterprise',
      label: 'Application Engineering',
      description: 'Mission-critical corporate banking, reconciliation, and ledger integrations'
    },
    {
      id: 'arch',
      value: 'Backend',
      label: 'Architecture & Integration',
      description: 'Reactive microservices, Kafka event streams, and distributed observability'
    }
  ]
}
