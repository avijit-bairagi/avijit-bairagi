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
  logoKey: 'inument' | 'brac-it' | 'itogether' | 'bkash' | 'brac-bank' | 'robi' | 'beximco'
  logoText: string
  accentColor: string
  contributions: string[]
}

export const companySection = {
  heading: 'Companies I Worked With',
  subtitle: 'Organizations and enterprise teams across fintech, banking, telecommunications, and software engineering.'
}

export const companies: CompanyItem[] = [
  {
    id: 'inument',
    name: 'Inument Solution Limited',
    shortName: 'Inument Solution Limited',
    relationship: 'Employer (Direct Employment)',
    domain: 'Software Engineering & Fintech Services',
    description: 'Direct employer where I lead backend engineering initiatives, architectural standards, and financial switch integrations.',
    logoKey: 'inument',
    logoText: 'INUMENT',
    accentColor: '#38BDF8',
    contributions: ['System Architecture & Design']
  },
  {
    id: 'brac-it',
    name: 'BRAC IT',
    shortName: 'BRAC IT',
    relationship: 'Employer (Direct Employment)',
    domain: 'Enterprise Banking & IT Solutions',
    description: 'Enterprise technology engineering delivering corporate banking solutions and core banking integrations.',
    logoKey: 'brac-it',
    logoText: 'BRAC IT',
    accentColor: '#0284C7',
    contributions: ['Corporate Banking Solution', 'RTGS', 'Payment Gateway']
  },
  {
    id: 'itogether',
    name: 'Together Initiative Limited',
    shortName: 'Together Initiative Limited',
    relationship: 'Employer (Direct Employment)',
    domain: 'Enterprise Applications & Digital Services',
    description: 'Delivering enterprise software, telecom platforms, and field mobility systems across major corporate clients.',
    logoKey: 'itogether',
    logoText: 'Together Initiative Limited',
    accentColor: '#6366F1',
    contributions: ['Mobile Applications', 'Web Services']
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
    contributions: ['NPSB', 'Direct Charge', 'Bank-to-bKash', 'Payment Gateway', 'Savings / DPS', 'Settlement']
  },
  {
    id: 'brac-bank',
    name: 'BRAC Bank',
    shortName: 'BRAC Bank',
    relationship: 'Project Contribution',
    domain: 'Commercial & Corporate Banking',
    description: 'Enterprise corporate banking platforms, high-value clearing switches, and trade finance notification services.',
    logoKey: 'brac-bank',
    logoText: 'BRAC Bank',
    accentColor: '#00529B',
    contributions: ['Corporate Banking Solution', 'Payment Gateway', 'RTGS', 'LC']
  },
  {
    id: 'robi',
    name: 'Robi Axiata Limited',
    shortName: 'Robi Axiata Limited',
    relationship: 'Project Contribution',
    domain: 'Telecommunications & Digital Services',
    description: 'Carrier-scale subscriber workflows, traffic monitoring, high-frequency campaigns, and mobile solutions.',
    logoKey: 'robi',
    logoText: 'Robi',
    accentColor: '#ED1C24',
    contributions: ['Workflow Management', 'NTMS', 'Campaign Management', 'Mobile Application']
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
    contributions: ['Pharma CRM', 'Field Force Automation (FFA)']
  }
]
