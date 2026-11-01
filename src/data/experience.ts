export interface ExperienceItem {
  id: string
  company: string
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
    company: 'Inument Solutions Limited',
    companyRelationship: 'Direct Employer (Serving bKash Ecosystem)',
    role: 'Lead Software Engineer / Senior Software Engineer',
    period: '2021 — Present',
    location: 'Dhaka, Bangladesh',
    domain: 'Fintech, Payment Systems & High-Throughput Microservices',
    summary: 'Directing the architecture and backend engineering of core fintech services, payment gateway integrations, and bank-to-wallet pipelines within the bKash ecosystem.',
    contributions: [
      'Architected and implemented high-volume ISO 8583 financial transaction integration for National Payment Switch Bangladesh (NPSB).',
      'Engineered the Direct Charge payment infrastructure handling local and international merchant debits with automated reconciliation and retry mechanisms.',
      'Designed Bank-to-bKash and Digital Savings / DPS backend flows ensuring ACID compliance and transaction idempotency across distributed banking endpoints.',
      'Spearheaded transition toward reactive microservices using Spring Boot, Spring WebFlux, and Apache Kafka for asynchronous decoupled event processing.',
      'Established distributed tracing with OpenTelemetry and Micrometer metrics, driving down mean-time-to-detection (MTTD) for transaction bottlenecks.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring WebFlux', 'Spring Security', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'OpenTelemetry'],
    achievements: [
      'Successfully delivered production integrations processing mission-critical financial transactions with zero data loss.',
      'Mentored mid-level and junior backend engineers, introducing rigorous code review standards and unit/integration testing patterns.'
    ]
  },
  {
    id: 'brac-it',
    company: 'BRAC IT / BRAC Bank',
    companyRelationship: 'Enterprise Banking Project & Solutions',
    role: 'Software Engineer',
    period: '2018 — 2021',
    location: 'Dhaka, Bangladesh',
    domain: 'Enterprise Banking, Financial Transaction Processing & CBS Integration',
    summary: 'Engineered corporate banking solutions, electronic fund transfer switches, and core banking system (CBS) integration modules for enterprise corporate clients.',
    contributions: [
      'Developed and maintained corporate banking modules facilitating bulk salary disbursements, inter-bank fund transfers (IFT), and RTGS/BEFTN processing.',
      'Engineered LC Alert (Letter of Credit) notification service and corporate statement reconciliation engines.',
      'Implemented robust multi-factor authorization and audit logging protocols complying with central bank regulatory mandates.',
      'Streamlined database queries and transaction isolation levels across relational databases to handle concurrent high-volume end-of-day bank clearing runs.'
    ],
    technologies: ['Java', 'Spring Framework', 'Spring Boot', 'Oracle / MySQL', 'REST APIs', 'SOAP / XML', 'Linux', 'Jenkins'],
    achievements: [
      'Automated batch financial clearing reducing manual operational intervention by banking teams.',
      'Maintained 99.9% uptime for corporate banking APIs during peak operating business hours.'
    ]
  },
  {
    id: 'earlier-enterprise',
    company: 'Enterprise Software & Telecom Projects',
    companyRelationship: 'Project Contributions (ROBI, BEXIMCO)',
    role: 'Software Engineer',
    period: '2016 — 2018',
    location: 'Dhaka, Bangladesh',
    domain: 'Telecommunications, Campaign Management & Enterprise Distribution',
    summary: 'Delivered mission-critical enterprise systems including telecom campaign management for ROBI Axiata and mobile sales force automation for BEXIMCO.',
    contributions: [
      'Engineered high-frequency campaign notification and SMS gateway routers for telecom subscriber targeting.',
      'Built backend REST APIs and inventory synchronization engines for BEXIMCO mSales distribution suite.',
      'Integrated real-time location and reporting dashboards for field force management.'
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'Redis', 'REST APIs', 'Git', 'Maven']
  }
]
