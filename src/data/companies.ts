export interface CompanyContribution {
  name: string
  detail?: string
}

export interface CompanyItem {
  id: string
  name: string
  shortName: string
  relationship: 'Employer (Direct Employment)' | 'Project Contribution'
  domain: string
  description: string
  logoKey: 'inument' | 'bkash' | 'brac-bank' | 'robi' | 'beximco' | 'itogether'
  logoText: string
  accentColor: string
  contributions: string[]
}

export const companySection = {
  heading: "Organizations I've Worked With",
  subtitle: 'A track record of high-impact engineering across fintech, banking, telecommunications, and enterprise software.',
  caption: 'Direct employment verified at Inument Solutions Limited. Other organizations represent verified enterprise client contributions and project engagements.'
}

export const companies: CompanyItem[] = [
  {
    id: 'inument',
    name: 'Inument Solutions Limited',
    shortName: 'Inument Solutions',
    relationship: 'Employer (Direct Employment)',
    domain: 'Software Engineering & Fintech Services',
    description: 'Direct employer where I lead backend engineering initiatives, architectural standards, and financial switch integrations.',
    logoKey: 'inument',
    logoText: 'INUMENT',
    accentColor: '#38BDF8',
    contributions: [
      'System Architecture & Design'
    ]
  },
  {
    id: 'bkash',
    name: 'bKash',
    shortName: 'bKash',
    relationship: 'Project Contribution',
    domain: 'Mobile Financial Services (MFS)',
    description: 'Engineering ecosystem contributions powering mission-critical financial switches, integrations, and payment services.',
    logoKey: 'bkash',
    logoText: 'bKash',
    accentColor: '#E2136E',
    contributions: [
      'NPSB',
      'Direct Charge',
      'Bank-to-bKash',
      'Payment Gateway',
      'Savings / DPS',
      'Settlement'
    ]
  },
  {
    id: 'brac-bank',
    name: 'BRAC Bank',
    shortName: 'BRAC Bank',
    relationship: 'Project Contribution',
    domain: 'Commercial & Corporate Banking',
    description: 'Enterprise corporate banking platforms, high-value clearing switches, and trade finance notification services.',
    logoKey: 'brac-bank',
    logoText: 'BRAC BANK',
    accentColor: '#00529B',
    contributions: [
      'Corporate Banking Solution',
      'Payment Gateway',
      'RTGS',
      'LC'
    ]
  },
  {
    id: 'robi',
    name: 'ROBI',
    shortName: 'ROBI Axiata',
    relationship: 'Project Contribution',
    domain: 'Telecommunications & Digital Services',
    description: 'Carrier-scale subscriber workflows, traffic monitoring, high-frequency campaigns, and mobile solutions.',
    logoKey: 'robi',
    logoText: 'ROBI',
    accentColor: '#ED1C24',
    contributions: [
      'Workflow Management',
      'NTMS',
      'Campaign Management',
      'Mobile Application'
    ]
  },
  {
    id: 'beximco',
    name: 'BEXIMCO',
    shortName: 'BEXIMCO',
    relationship: 'Project Contribution',
    domain: 'Pharmaceuticals & Enterprise Distribution',
    description: 'Enterprise mobility and field distribution solutions automating commercial operations and customer relationship management.',
    logoKey: 'beximco',
    logoText: 'BEXIMCO',
    accentColor: '#0F766E',
    contributions: [
      'Pharma CRM',
      'Field Force Automation (FFA)'
    ]
  },
  {
    id: 'itogether',
    name: 'iTogether',
    shortName: 'iTogether',
    relationship: 'Project Contribution',
    domain: 'Enterprise Applications & Digital Services',
    description: 'Developing resilient cross-platform mobile applications and scalable backend web services.',
    logoKey: 'itogether',
    logoText: 'iTogether',
    accentColor: '#6366F1',
    contributions: [
      'Mobile Applications',
      'Web Services'
    ]
  }
]
