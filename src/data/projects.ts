export interface ProjectItem {
  id: string
  title: string
  organizationId: 'bkash' | 'brac-bank' | 'robi' | 'beximco' | 'itogether' | 'personal'
  organizationName: string
  organizationRelationship: 'Employer (Direct Employment)' | 'Project Contribution' | 'Personal Research'
  domain: string
  categories: Array<'fintech' | 'banking' | 'payment' | 'enterprise' | 'telecom' | 'personal'>
  shortDescription: string
  fullDescription: string
  businessContext: string
  contributions: string[]
  technologies: string[]
  featured: boolean
  isPersonal?: boolean
  verifiedOutcomes: string[]
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'banking', label: 'Banking' },
  { id: 'payment', label: 'Payment Systems' },
  { id: 'telecom', label: 'Telecom' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'personal', label: 'Personal Projects' }
] as const

export const projects: ProjectItem[] = [
  // --- bKash (Project Contributions — via Inument & Together Initiative Limited) ---
  {
    id: 'bkash-npsb',
    title: 'NPSB (National Payment Switch Bangladesh)',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · National Payment Switching',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'ISO 8583 switching for BanglaQR, MFS, and bank transfers through Bangladesh Bank NPSB with strict security and dispute management.',
    fullDescription: 'High-throughput payment switch connecting bKash with commercial banks and Mobile Financial Services (MFS) through Bangladesh Bank’s National Payment Switch Bangladesh (NPSB), supporting BanglaQR payments, MFS interoperability, real-time bank transfers, and structured dispute management.',
    businessContext: 'National real-time clearing across banks, MFS wallets, and BanglaQR merchants demands sub-second latency, strict cryptographic security, zero-loss reversal handling, and timely inter-bank dispute resolution.',
    contributions: [
      'Engineered ISO 8583 message parsing, packing, and BIT-map validation for BanglaQR, MFS, and bank transfer flows via Bangladesh Bank NPSB.',
      'Constructed distributed two-phase commit and automated reversal logic to prevent orphan transaction states.',
      'Enforced strict payment security using mutual TLS socket channels, HSM/MAC cryptography, and signed payload verification.',
      'Implemented structured dispute management workflows to track, reconcile, and resolve inter-bank and MFS transaction discrepancies.'
    ],
    technologies: ['Java', 'Spring Boot', 'ISO 8583', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
    featured: true,
    verifiedOutcomes: [
      'Reliable high-throughput interoperability across BanglaQR merchants, MFS providers, and partner banks.',
      'Zero-orphan transaction consistency backed by automated reversal, dispute management, and strict cryptographic validation.'
    ]
  },
  {
    id: 'bkash-direct-charge',
    title: 'Direct Charge',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Payment Systems · Local & Global Merchants',
    categories: ['fintech', 'payment'],
    shortDescription: 'Tokenized direct-debit payment platform serving local and international merchants including GP, Robi, Uber, Spotify, and Foodpanda.',
    fullDescription: 'Scalable merchant billing and direct-charge platform supporting seamless account-linked payments and recurring charges for major local and global merchants such as Grameenphone (GP), Robi, Foodpanda, Uber, and Spotify.',
    businessContext: 'High-volume local and international digital platforms require instant tokenized account binding, secured OTP/PIN customer verification, frictionless one-tap checkouts, and reliable dispute resolution.',
    contributions: [
      'Architected tokenized consent and direct-charge payment APIs serving local and international merchants (GP, Robi, Foodpanda, Uber, Spotify).',
      'Built a secured customer verification service authenticating wallet accounts via OTP and PIN before consent binding or payment execution.',
      'Implemented structured dispute management workflows handling failed debits, chargeback claims, and merchant reconciliation.',
      'Engineered asynchronous webhook delivery pipelines with exponential backoff and dead-letter queues, backed by Redis caching.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Redis', 'PostgreSQL', 'Docker'],
    featured: true,
    verifiedOutcomes: [
      'Low-latency authorization supporting millions of recurring and one-tap local/global merchant checkouts.',
      'Secured OTP/PIN pre-payment customer verification and traceable dispute management across merchant partners.'
    ]
  },
  {
    id: 'bkash-bank-to-wallet',
    title: 'Bank-to-bKash',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · Bank & Wallet Fund Transfers',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'Bidirectional Add Money and Send Money integrations with BRAC Bank, Agrani Bank, and City Bank under strict security.',
    fullDescription: 'Real-time retail banking integration platform enabling customers to seamlessly Add Money from linked bank accounts to bKash and Send Money from bKash back to partner banks including BRAC Bank, Agrani Bank, and City Bank.',
    businessContext: 'Real-time movement of funds between commercial bank hosts and mobile wallets requires strict API security, mutual authentication, and atomic rollback guarantees.',
    contributions: [
      'Integrated core Add Money and Send Money APIs with commercial partner banks including BRAC Bank, Agrani Bank, and City Bank.',
      'Enforced strict security controls with mutual TLS handshakes, dynamic token rotation, payload signing, and encrypted host channels.',
      'Built transactional compensators and Redis distributed locks to eliminate duplicate debits and recover cleanly from network timeouts.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Redis', 'PostgreSQL', 'REST APIs'],
    featured: true,
    verifiedOutcomes: [
      '24/7 bidirectional fund mobility across BRAC Bank, Agrani Bank, City Bank, and bKash wallets.',
      'Strict end-to-end security and transaction consistency across commercial banking integrations.'
    ]
  },
  {
    id: 'bkash-payment-gateway',
    title: 'Online Payment Platform (PGW)',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Payment Systems · Customer, Merchant & Loan Payments',
    categories: ['fintech', 'payment'],
    shortDescription: 'Enterprise online payment platform powering M2M, M2C, C2M, A2M, and M2A flows across vast merchants and loan platforms.',
    fullDescription: 'High-availability online payment gateway (PGW) supporting customer and merchant transactions across M2M, M2C, C2M, A2M, and M2A payment models for a vast ecosystem of merchants and digital Loan Platforms, protected by wallet OTP/PIN verification and structured dispute management.',
    businessContext: 'Serving diverse customer, agent, merchant, and digital lending workflows at national scale demands strong customer verification prior to payment, high-throughput orchestration, and reliable dispute resolution.',
    contributions: [
      'Built core payment processing services supporting M2M, M2C, C2M, A2M, and M2A transactions for a vast network of online and enterprise merchants and Loan Platforms.',
      'Developed a secured customer verification service validating wallet ownership via OTP and PIN before executing any payment.',
      'Implemented structured dispute management workflows to investigate, track, and settle customer and merchant transaction disputes.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Redis', 'PostgreSQL', 'REST APIs'],
    featured: true,
    verifiedOutcomes: [
      'Powered seamless online payment processing across thousands of merchants and digital loan workflows.',
      'Strengthened pre-payment wallet security via OTP/PIN verification and streamlined end-to-end dispute resolution.'
    ]
  },
  {
    id: 'bkash-savings-dps',
    title: 'Savings / DPS (Digital Savings)',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · Micro-Savings & Term Deposits',
    categories: ['fintech', 'banking'],
    shortDescription: 'Paperless digital deposit pension scheme (DPS) integration with partner banks and financial institutions.',
    fullDescription: 'Micro-savings platform enabling mobile wallet users to open term-deposit schemes with partner financial institutions and automate recurring monthly savings debits.',
    businessContext: 'Democratizing access to formal savings instruments for retail customers without requiring physical bank branch visits.',
    contributions: [
      'Developed account opening orchestration service integrating KYC verification with partner bank CBS systems.',
      'Engineered recurring debit scheduler ensuring accurate installment timing and interest accrual recording.',
      'Created early liquidation and maturity settlement payout engines.'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs'],
    featured: false,
    verifiedOutcomes: [
      'Expanded formal banking product reach to hundreds of thousands of retail users.',
      'Fully automated monthly debit reconciliation with zero manual bank teller input.'
    ]
  },
  {
    id: 'bkash-settlement',
    title: 'Multibank Settlement & Reconciliation Platform',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · Multi-Bank Institutional Settlement & Clearing',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'Unified multi-bank settlement and end-of-day reconciliation platform across partner banks and financial institutions with SSO, strict security, and auditing.',
    fullDescription: 'Enterprise multi-bank settlement and reconciliation platform balancing accounts between bKash wallets, partner banks, and financial institutions, secured with Single Sign-On (SSO), strict security policies, and comprehensive auditing.',
    businessContext: 'Coordinating daily financial settlement positions across multiple banks and financial institutions requires zero-variance reconciliation, centralized identity governance, strict security, and complete auditability.',
    contributions: [
      'Designed multi-bank settlement and batch clearing pipelines reconciling transaction logs against partner bank and financial institution ledgers.',
      'Implemented Single Sign-On (SSO) authentication for centralized institutional and internal portal access.',
      'Enforced strict application security controls and comprehensive auditing across user actions, financial operations, and settlement states.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Spring Security', 'PostgreSQL', 'Linux'],
    featured: true,
    verifiedOutcomes: [
      'Unified multi-bank clearing and reconciliation across partner financial institutions on a single platform.',
      'Strengthened governance through SSO integration, strict security controls, and immutable audit trails.'
    ]
  },

  // --- BRAC BANK (Project Contributions) ---
  {
    id: 'brac-corporate-banking',
    title: 'Corporate Banking Solution',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank PLC',
    organizationRelationship: 'Project Contribution',
    domain: 'Commercial Banking · Institutional Portal',
    categories: ['banking', 'enterprise'],
    shortDescription: 'Enterprise banking portal facilitating bulk payroll, BEFTN/NPSB/RTGS inter-bank transfers, multi-tier approvals, and treasury operations.',
    fullDescription: 'Comprehensive corporate internet banking suite facilitating high-value treasury operations, BEFTN/NPSB/RTGS inter-bank fund transfers, bulk payroll disbursement, maker-checker authorization matrices, and enterprise accounting exports.',
    businessContext: 'Corporate institutional clients require multi-level approval hierarchies, inter-bank clearing (BEFTN, NPSB, RTGS), and seamless integration with core banking systems.',
    contributions: [
      'Designed fine-grained role-based access control (RBAC) and configurable maker-checker authorization workflows.',
      'Engineered BEFTN, NPSB, and RTGS inter-bank fund transfer modules alongside bulk payroll batch processing for tens of thousands of salary rows.',
      'Built core banking system (CBS) integration adapters connecting legacy proprietary protocols to modern RESTful services.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Oracle Database', 'REST APIs', 'Jenkins'],
    featured: true,
    verifiedOutcomes: [
      'Secure corporate transaction processing for hundreds of institutional enterprise clients.',
      'Zero unauthorized transaction incidents through hardened multi-factor authorization safeguards.'
    ]
  },
  {
    id: 'brac-payment-gateway',
    title: 'Payment Gateway (Enterprise Acquiring)',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank PLC',
    organizationRelationship: 'Project Contribution',
    domain: 'Banking & Payment Systems · Acquiring',
    categories: ['banking', 'payment'],
    shortDescription: 'Enterprise card and account acquiring gateway connected with commercial core banking hosts.',
    fullDescription: 'Enterprise payment acquiring switch processing card transactions, direct bank transfers, and 3D Secure 2.0 authentication for corporate and commercial merchants.',
    businessContext: 'Commercial banking merchants require secure, low-latency transaction routing to core banking settlement ledgers.',
    contributions: [
      'Implemented 3D Secure cryptographic handshake and verification callbacks.',
      'Engineered secure transaction persistence with strict audit logging.',
      'Optimized database queries and connection pooling for high-concurrency payment requests.'
    ],
    technologies: ['Java', 'Spring Framework', 'Oracle', 'SOAP / REST', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'High-reliability acquiring switch meeting central bank regulatory uptime mandates.',
      'Smooth integration with partner merchant billing endpoints.'
    ]
  },
  {
    id: 'brac-rtgs',
    title: 'RTGS (Real-Time Gross Settlement)',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank PLC',
    organizationRelationship: 'Project Contribution',
    domain: 'Banking · Central Bank Switch Routing',
    categories: ['banking', 'payment'],
    shortDescription: 'High-value institutional fund transfer switch connecting with Bangladesh Bank RTGS network.',
    fullDescription: 'Central bank financial network connector handling high-value Real-Time Gross Settlement (RTGS), intra-bank fund transfer (IFT), and inter-bank clearing.',
    businessContext: 'High-value treasury transactions where any system delay or message drop represents substantial financial risk.',
    contributions: [
      'Engineered a reliable queue-based messaging pipeline with guaranteed delivery, retry handling, and dead-letter recovery.',
      'Implemented strict transaction sequencing to prevent out-of-order execution.',
      'Implemented automated reconciliation against central bank end-of-day statements.'
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle Database', 'Message Queues', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Zero-loss queue-based message routing for corporate and institutional high-value liquidity settlements.',
      'Audit-ready logging conforming strictly to regulatory requirements.'
    ]
  },
  {
    id: 'brac-lc',
    title: 'LC (Letter of Credit) Alert Service',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank PLC',
    organizationRelationship: 'Project Contribution',
    domain: 'Trade Finance · Event Notification Engine',
    categories: ['banking', 'enterprise'],
    shortDescription: 'Automated Letter of Credit (LC) lifecycle tracking and milestone notifications for corporate trade clients.',
    fullDescription: 'Trade finance event listener service tracking Letter of Credit lifecycle events, document reception, shipment milestones, and payment maturity dates.',
    businessContext: 'Corporate import/export clients require timely alerts on trade documentation to avoid demurrage and regulatory penalties.',
    contributions: [
      'Engineered database polling and CDC triggers on trade finance core tables.',
      'Built multi-channel dispatch engine sending SMS and email alerts to trade clients and relationship managers.',
      'Created configuration console for bank trade officers to define notification rules.'
    ],
    technologies: ['Java', 'Spring', 'Oracle', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Drastically reduced corporate trade client notification turnaround time.',
      'Improved bank-client transparency during critical import/export trade milestones.'
    ]
  },

  // --- ROBI (Project Contributions) ---
  {
    id: 'robi-workflow',
    title: 'Workflow Management',
    organizationId: 'robi',
    organizationName: 'Robi Axiata Limited',
    organizationRelationship: 'Project Contribution',
    domain: 'Telecom · Operations Workflow Engine',
    categories: ['telecom', 'enterprise'],
    shortDescription: 'Telecom enterprise operations and service provisioning workflow automation engine.',
    fullDescription: 'Enterprise workflow engine managing multi-step approval hierarchies, internal technical requisitions, and subscriber service lifecycle provisioning.',
    businessContext: 'Telecom operations demand automated state machines to coordinate complex inter-departmental provisioning without manual delays.',
    contributions: [
      'Constructed stateful workflow engine with rollback and retry capabilities.',
      'Integrated enterprise single-sign-on (SSO) and fine-grained department authorization rules.',
      'Built comprehensive audit log tracking for all approval decisions.'
    ],
    technologies: ['Java', 'Spring Framework', 'MySQL', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Accelerated internal telecom technical requisition approvals.',
      'Enhanced operational transparency across engineering and support units.'
    ]
  },
  {
    id: 'robi-ntms',
    title: 'NTMS (National Telecommunication Monitoring Service)',
    organizationId: 'robi',
    organizationName: 'Robi Axiata Limited',
    organizationRelationship: 'Project Contribution',
    domain: 'Telecom · Regulatory Compliance & Monitoring',
    categories: ['telecom', 'enterprise'],
    shortDescription: 'Telecom compliance and data integration platform connecting operator systems with the National Telecommunication Monitoring Service.',
    fullDescription: 'Enterprise telecom compliance and monitoring integration system enabling secure subscriber data verification, query orchestration, and regulatory reporting pipelines for Robi Axiata Limited with the National Telecommunication Monitoring Service (NTMS).',
    businessContext: 'Telecom operators require secure, auditable, and reliable compliance pipelines to fulfill regulatory monitoring and reporting mandates.',
    contributions: [
      'Built secure integration and verification services aligned with National Telecommunication Monitoring Service (NTMS) specifications.',
      'Implemented role-based access control, request auditing, and encrypted data exchange channels.',
      'Engineered high-throughput query processing and automated compliance reporting pipelines with Spring and MySQL.'
    ],
    technologies: ['Java', 'Spring', 'Spring Security', 'MySQL', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Delivered compliant, auditable data exchange pipelines with strict security and access governance.',
      'Automated regulatory verification and reporting turnaround.'
    ]
  },
  {
    id: 'robi-campaign',
    title: 'Campaign Management',
    organizationId: 'robi',
    organizationName: 'Robi Axiata Limited',
    organizationRelationship: 'Project Contribution',
    domain: 'Telecom · High-Frequency Campaign Targeting',
    categories: ['telecom', 'enterprise'],
    shortDescription: 'Carrier-scale campaign orchestration and subscriber segmentation targeting system.',
    fullDescription: 'High-frequency marketing campaign management platform executing targeted SMS and USSD offers to millions of active telecommunication subscribers.',
    businessContext: 'Telecom marketing teams require dynamic cohort segmentation based on subscriber airtime balance, location, and data usage patterns.',
    contributions: [
      'Developed batch segmentation processors capable of querying large subscriber data sets.',
      'Built campaign schedule executors with pacing limits to prevent telecom cellular tower congestion.',
      'Created response tracking modules evaluating campaign conversion metrics.'
    ],
    technologies: ['Java', 'Spring Framework', 'MySQL', 'Redis', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Delivered high-volume campaign dispatches without cellular network congestion.',
      'Provided marketing teams with real-time conversion and uptake metrics.'
    ]
  },

  // --- BEXIMCO (Project Contributions) ---
  {
    id: 'beximco-pharma-crm',
    title: 'Pharma CRM',
    organizationId: 'beximco',
    organizationName: 'BEXIMCO',
    organizationRelationship: 'Project Contribution',
    domain: 'Enterprise · Healthcare Commercial CRM',
    categories: ['enterprise'],
    shortDescription: 'Customer relationship management platform for medical representatives and healthcare practitioners.',
    fullDescription: 'Enterprise CRM managing doctor engagements, medical sample distribution tracking, and territory-level sales performance analytics across nationwide pharmaceutical networks.',
    businessContext: 'Pharmaceutical distribution requires strict compliance tracking for doctor sample deliveries, territory coverage, and field visit verification.',
    contributions: [
      'Designed territory management and doctor scheduling modules.',
      'Constructed sample inventory tracking preventing discrepancy in sample disbursements.',
      'Built executive reporting dashboards visualizing territory coverage ratios.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Digitized doctor engagement records across multiple regional sales divisions.',
      'Improved pharmaceutical field representative accountability and territory coverage.'
    ]
  },
  {
    id: 'beximco-ffa',
    title: 'Field Force Automation (FFA)',
    organizationId: 'beximco',
    organizationName: 'BEXIMCO',
    organizationRelationship: 'Project Contribution',
    domain: 'Enterprise · Supply Chain & Field Mobility',
    categories: ['enterprise'],
    shortDescription: 'Mobile sales force automation, field order capture, and real-time inventory synchronization.',
    fullDescription: 'Comprehensive distribution mobility solution enabling nationwide field representatives to capture retailer orders, verify warehouse inventory, and submit daily collections.',
    businessContext: 'Nationwide distribution networks require offline-first mobile synchronization, route planning, and real-time inventory decrementing.',
    contributions: [
      'Designed backend order ingestion and conflict-resolution APIs handling offline mobile sync bursts.',
      'Built ERP inventory integration adapters updating real-time stock balances across regional distribution centers.',
      'Implemented sales target and incentive calculation batch services.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Digitized nationwide field sales workflows replacing manual paperwork.',
      'Eliminated fulfillment delays through immediate order routing to regional depots.'
    ]
  },

  // --- iTogether (Project Contributions) ---
  {
    id: 'itogether-web-services',
    title: 'Web Services & API Gateways',
    organizationId: 'itogether',
    organizationName: 'Together Initiative Limited',
    organizationRelationship: 'Project Contribution',
    domain: 'Enterprise Backend · API Services',
    categories: ['enterprise'],
    shortDescription: 'Backend web services and micro-APIs supporting enterprise client platforms.',
    fullDescription: 'Designing and building backend web services, third-party authentication bridges, and centralized API gateways for commercial client applications.',
    businessContext: 'Connecting client mobile applications and portals with secure, performant backend data services.',
    contributions: [
      'Built versioned REST APIs adhering to clean architecture standards.',
      'Implemented JWT authentication, rate limiting, and request sanitization.',
      'Configured automated deployment scripts on Linux server hosts.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Reliable backend foundation supporting client web and mobile frontends.',
      'Documented API contracts accelerating frontend-backend integration velocity.'
    ]
  },

  // --- PERSONAL RESEARCH PROJECT ---
  {
    id: 'dhamaka-personal',
    title: 'Dhamaka (Personal Engineering Sandbox)',
    organizationId: 'personal',
    organizationName: 'Personal Project',
    organizationRelationship: 'Personal Research',
    domain: 'Personal Project · Reactive Architecture Sandbox',
    categories: ['personal', 'enterprise'],
    shortDescription: 'Independent engineering sandbox exploring event-driven reactive microservices and distributed caching.',
    fullDescription: 'An independent engineering research project built to benchmark reactive paradigms, distributed lock primitives, high-throughput caching strategies, and event sourcing outside corporate legacy boundaries.',
    businessContext: 'Independent research to benchmark novel backend patterns and evaluate performance trade-offs for high-scale systems.',
    contributions: [
      'Explored Project Reactor and Spring WebFlux benchmarks under simulated high-concurrency workloads.',
      'Benchmarked Redis Redlock algorithms versus database optimistic concurrency.',
      'Implemented prototype event-sourcing ledger with reactive asynchronous streams.'
    ],
    technologies: ['Java 21', 'Reactive Java', 'Spring WebFlux', 'Redis', 'Docker', 'PostgreSQL'],
    featured: false,
    isPersonal: true,
    verifiedOutcomes: [
      'Provided valuable architecture insights and performance benchmarks subsequently applied to enterprise system designs.',
      'Demonstrated high-throughput low-latency reactive throughput under simulated peak concurrency.'
    ]
  }
]
