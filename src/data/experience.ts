export interface PartnerCompany {
  name: string
  website: string
  logoKey: 'inument' | 'brac-it' | 'itogether' | 'bkash' | 'brac-bank' | 'robi' | 'beximco'
}

export interface ExperienceItem {
  id: string
  company: string
  website: string
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
    company: 'Inument',
    website: 'https://inument.com',
    logoKey: 'inument',
    partners: [{ name: 'bKash', website: 'https://www.bkash.com', logoKey: 'bkash' }],
    companyRelationship: 'Inument × bKash',
    role: 'Lead Software Engineer',
    period: '2021 — Present',
    location: 'Dhaka, Bangladesh',
    domain: 'Fintech & Payment Systems',
    summary: 'Leading backend architecture, team delivery, and payment system integrations in collaboration with bKash.',
    contributions: [
      'Architected ISO 8583 payment switching and integration services for NPSB, Direct Charge, and Bank-to-bKash flows.',
      'Designed Digital Savings (DPS) and settlement reconciliation pipelines with Java, Reactive Java, and PostgreSQL.',
      'Led sprint planning, code reviews, AWS and Docker deployments, and OpenTelemetry observability across squads.'
    ],
    technologies: ['Java', 'Reactive Java', 'Spring Boot', 'ISO 8583', 'RabbitMQ', 'AWS', 'Observability'],
    achievements: [
      'Delivered financial switch integrations with reliable transaction consistency.',
      'Guided backend teams on architecture, sprint execution, and engineering quality.'
    ]
  },
  {
    id: 'brac-it',
    company: 'BRAC IT Services Limited',
    website: 'https://www.bracits.com',
    logoKey: 'brac-it',
    partners: [{ name: 'BRAC Bank PLC', website: 'https://www.bracbank.com', logoKey: 'brac-bank' }],
    companyRelationship: 'BRAC IT Services Limited × BRAC Bank PLC',
    role: 'Software Engineer',
    period: '2018 — 2021',
    location: 'Dhaka, Bangladesh',
    domain: 'Enterprise & Corporate Banking',
    summary: 'Developed corporate internet banking platforms, real-time clearing switches, and Core Banking System integrations for BRAC Bank PLC.',
    contributions: [
      'Built corporate banking modules supporting bulk payroll, inter-bank fund transfers, and maker-checker approvals.',
      'Engineered Bangladesh Bank RTGS clearing connectors and Letter of Credit (LC) alert notification services.',
      'Implemented payment acquiring gateways and core banking adapters using Java, Spring Boot, REST, and SOAP APIs.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Oracle Database', 'REST APIs', 'SOAP API'],
    achievements: [
      'Automated corporate financial clearing and end-of-day reconciliation workflows.',
      'Maintained reliable availability across institutional banking portals.'
    ]
  },
  {
    id: 'together-initiative',
    company: 'Together Initiative Limited',
    website: 'https://i2gether.com',
    logoKey: 'itogether',
    partners: [
      { name: 'bKash', website: 'https://www.bkash.com', logoKey: 'bkash' },
      { name: 'Robi Axiata Limited', website: 'https://www.robi.com.bd', logoKey: 'robi' },
      { name: 'BEXIMCO', website: 'https://www.beximco.com', logoKey: 'beximco' }
    ],
    companyRelationship: 'Together Initiative Limited × bKash × Robi Axiata Limited × BEXIMCO',
    role: 'Software Engineer',
    period: '2016 — 2018',
    location: 'Dhaka, Bangladesh',
    domain: 'Fintech, Telecom & Enterprise Systems',
    summary: 'Built enterprise web services, telecom platforms, and backend APIs across engagements with bKash, Robi Axiata Limited, and BEXIMCO.',
    contributions: [
      'Developed payment gateway integrations and backend web services supporting bKash digital services.',
      'Engineered subscriber workflow automation, NTMS traffic monitoring, and campaign management for Robi Axiata Limited.',
      'Built Pharma CRM and Field Force Automation (FFA) synchronization APIs for BEXIMCO distribution teams.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'REST APIs', 'JS', 'Linux']
  }
]
