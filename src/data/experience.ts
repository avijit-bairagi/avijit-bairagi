export interface PartnerCompany {
  name: string
  logoKey: 'inument' | 'brac-it' | 'itogether' | 'bkash' | 'brac-bank' | 'robi' | 'beximco'
}

export interface ExperienceItem {
  id: string
  company: string
  logoKey: 'inument' | 'brac-it' | 'itogether'
  partners: PartnerCompany[]
  companyRelationship: string
  role: string
  period: string
  location: string
  summary: string
  domain: string
  contributions: string[]
  technologies: string[]
  achievements?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'inument-lead',
    company: 'Inument Solution Limited',
    logoKey: 'inument',
    partners: [{ name: 'bKash', logoKey: 'bkash' }],
    companyRelationship: 'Inument Solution Limited × bKash',
    role: 'Lead Software Engineer',
    period: '2021 — Present',
    location: 'Dhaka, Bangladesh',
    domain: 'Fintech, Payment Systems & High-Throughput Microservices',
    summary: 'Leading backend architecture and core fintech system engineering for high-volume payment switches and financial integrations in collaboration with bKash.',
    contributions: [
      'Architected ISO 8583 transaction switching for National Payment Switch Bangladesh (NPSB) and Direct Charge merchant payment flows.',
      'Designed Bank-to-bKash and Digital Savings / DPS backend pipelines with strict ACID compliance and distributed idempotency.',
      'Adopted reactive microservices with Spring WebFlux, Apache Kafka, and OpenTelemetry distributed tracing.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring WebFlux', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'OpenTelemetry'],
    achievements: [
      'Delivered mission-critical financial switch integrations with zero data loss.',
      'Mentored backend squads on code quality and automated testing standards.'
    ]
  },
  {
    id: 'brac-it',
    company: 'BRAC IT',
    logoKey: 'brac-it',
    partners: [{ name: 'BRAC Bank', logoKey: 'brac-bank' }],
    companyRelationship: 'BRAC IT × BRAC Bank',
    role: 'Software Engineer',
    period: '2018 — 2021',
    location: 'Dhaka, Bangladesh',
    domain: 'Enterprise Banking & Core Banking Integrations',
    summary: 'Engineered corporate internet banking platforms, real-time clearing switches, and Core Banking System (CBS) integrations for BRAC Bank.',
    contributions: [
      'Built corporate banking modules supporting bulk payroll disbursements, inter-bank fund transfers, and RTGS clearing.',
      'Developed Letter of Credit (LC) alert notifications and automated end-of-day statement reconciliation engines.',
      'Implemented role-based maker-checker approvals and regulatory audit trails across enterprise banking APIs.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Oracle Database', 'REST APIs', 'SOAP / XML', 'Linux'],
    achievements: [
      'Automated high-volume corporate financial clearing workflows.',
      'Maintained 99.9% availability across institutional banking portals.'
    ]
  },
  {
    id: 'together-initiative',
    company: 'Together Initiative Limited',
    logoKey: 'itogether',
    partners: [
      { name: 'bKash', logoKey: 'bkash' },
      { name: 'Robi', logoKey: 'robi' },
      { name: 'Beximco', logoKey: 'beximco' }
    ],
    companyRelationship: 'Together Initiative Limited × bKash × Robi × Beximco',
    role: 'Software Engineer',
    period: '2016 — 2018',
    location: 'Dhaka, Bangladesh',
    domain: 'Fintech, Telecom Platforms & Enterprise Mobility',
    summary: 'Delivered enterprise web services, mobile applications, and high-frequency backend platforms across client engagements for bKash, Robi, and Beximco.',
    contributions: [
      'Developed payment gateway and enterprise web service integrations supporting bKash digital services.',
      'Engineered subscriber workflow automation, NTMS traffic monitoring, and high-frequency campaign management for Robi.',
      'Built Pharma CRM and Field Force Automation (FFA) synchronization APIs for Beximco distribution networks.'
    ],
    technologies: ['Java', 'Spring Framework', 'MySQL', 'Redis', 'REST APIs', 'Mobile Applications', 'Linux']
  }
]
