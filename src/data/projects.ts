export interface ProjectItem {
  id: string
  title: string
  organizationId: 'inument' | 'bkash' | 'brac-bank' | 'robi' | 'beximco' | 'itogether' | 'personal'
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
  // --- INUMENT SOLUTIONS LIMITED (Employer) ---
  {
    id: 'inument-architecture',
    title: 'System Architecture & Design',
    organizationId: 'inument',
    organizationName: 'Inument Solutions Limited',
    organizationRelationship: 'Employer (Direct Employment)',
    domain: 'Fintech Backend & Framework Architecture',
    categories: ['enterprise', 'fintech'],
    shortDescription: 'Core architectural standards, reactive microservices blueprints, and secure payment foundations.',
    fullDescription: 'Technical leadership defining the backend microservice architecture, shared libraries, cryptographic security standards, and CI/CD validation patterns across engineering squads at Inument Solutions.',
    businessContext: 'High-volume financial applications require consistent architectural standards, zero-trust security postures, and repeatable deployment automation.',
    contributions: [
      'Designed base reactive microservice blueprints using Spring WebFlux and Java 21.',
      'Established distributed tracing standards with OpenTelemetry and unified Prometheus metrics.',
      'Implemented automated database migration, test container harnesses, and code review governance.'
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring WebFlux', 'Docker', 'OpenTelemetry', 'PostgreSQL', 'Git'],
    featured: true,
    verifiedOutcomes: [
      'Standardized microservices architecture accelerating deployment velocity across client deliverables.',
      'Maintained 100% adherence to financial security and cryptographic logging practices.'
    ]
  },

  // --- bKash (Project Contributions) ---
  {
    id: 'bkash-npsb',
    title: 'NPSB (National Payment Switch Bangladesh)',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · National Payment Switching',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'ISO 8583-based financial transaction switch enabling interoperability between banks and MFS wallets.',
    fullDescription: 'High-throughput payment switch handling bi-directional fund transfers between Mobile Financial Services (MFS) and commercial banks via the National Payment Switch Bangladesh (NPSB).',
    businessContext: 'Real-time inter-bank and wallet fund movement demands sub-second latency tolerances, cryptographic verification, and strict zero-loss transaction reversal mechanisms.',
    contributions: [
      'Engineered ISO 8583 message parsing and packing layer with strict BIT-map manipulation.',
      'Constructed distributed two-phase commit and reversal logic to prevent orphan transaction states.',
      'Implemented mutual TLS socket connections and message authentication code (MAC) cryptography.'
    ],
    technologies: ['Java', 'Spring Boot', 'ISO 8583', 'PostgreSQL', 'Kafka', 'Redis', 'OpenTelemetry'],
    featured: true,
    verifiedOutcomes: [
      'High-availability transactional throughput handling peak national transfer loads.',
      'Zero-orphan transaction state guarantee with automated reversal logic.'
    ]
  },
  {
    id: 'bkash-direct-charge',
    title: 'Direct Charge Platform',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Payment Systems · Merchant Gateway',
    categories: ['fintech', 'payment'],
    shortDescription: 'Local and global merchant payment orchestration, tokenized billing, and automated recurring deductions.',
    fullDescription: 'Scalable merchant payment gateway facilitating direct account debits, tokenized recurring billing, and cross-border merchant checkouts.',
    businessContext: 'Enterprise merchants require frictionless customer checkouts with resilient fallbacks, tokenized account security, and real-time webhook confirmations.',
    contributions: [
      'Architected tokenized payment consent workflows adhering to strict data security standards.',
      'Engineered asynchronous webhook delivery system with exponential backoff and dead-letter queues.',
      'Optimized database connection pooling and caching with Redis to sustain flash checkout spikes.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Redis', 'PostgreSQL', 'Docker'],
    featured: true,
    verifiedOutcomes: [
      'Sub-300ms API response latency for payment authorization requests.',
      'Seamless automated recurring debits across premier merchant partners.'
    ]
  },
  {
    id: 'bkash-bank-to-wallet',
    title: 'Bank-to-bKash Integration',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · Core Fund Addition',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'Real-time retail banking integration empowering customers to transfer liquidity into mobile wallets.',
    fullDescription: 'Core fund addition pipeline empowering millions of banking customers to securely transfer liquidity from their retail bank accounts directly into mobile wallets.',
    businessContext: 'Providing unbanked and underbanked populations with immediate liquidity through automated, real-time retail banking integrations.',
    contributions: [
      'Implemented secure banking API integrations with dynamic token rotation and mutual TLS handshake.',
      'Designed transactional compensator to safely handle transient network partitions and rollback orphaned holds.',
      'Engineered Redis-backed distributed locks to prevent race conditions during simultaneous transfer requests.'
    ],
    technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Kafka'],
    featured: true,
    verifiedOutcomes: [
      'Reliable 24/7 liquidity injection into mobile financial ecosystems with 99.99% transaction reliability.',
      'Real-time transaction status notifications delivered to banking hosts and mobile wallets.'
    ]
  },
  {
    id: 'bkash-payment-gateway',
    title: 'Payment Gateway',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Payment Systems · Checkout Acquiring',
    categories: ['fintech', 'payment'],
    shortDescription: 'Online merchant checkout gateway supporting web, mobile SDKs, and QR-based payments.',
    fullDescription: 'High-availability payment checkout service providing e-commerce merchants with seamless payment acceptance, tokenized credentials, and instant callback verifications.',
    businessContext: 'E-commerce platforms demand dependable checkout gateways that maintain high conversion rates and robust fraud prevention.',
    contributions: [
      'Constructed idempotent payment processing endpoints preventing duplicate debits.',
      'Designed webhook notification pipeline with resilient retry policies and HMAC verification.',
      'Built merchant integration SDKs and developer sandbox testing APIs.'
    ],
    technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'REST APIs'],
    featured: false,
    verifiedOutcomes: [
      'High conversion checkout throughput across thousands of connected merchant stores.',
      'Resilient webhook dispatch system ensuring instant merchant order confirmations.'
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
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker'],
    featured: false,
    verifiedOutcomes: [
      'Expanded formal banking product reach to hundreds of thousands of retail users.',
      'Fully automated monthly debit reconciliation with zero manual bank teller input.'
    ]
  },
  {
    id: 'bkash-settlement',
    title: 'Settlement & Reconciliation Engine',
    organizationId: 'bkash',
    organizationName: 'bKash',
    organizationRelationship: 'Project Contribution',
    domain: 'Fintech · Multi-party Financial Settlement',
    categories: ['fintech', 'banking', 'payment'],
    shortDescription: 'End-of-day financial clearing, multi-party fee calculation, and automated dispute resolution.',
    fullDescription: 'Automated settlement engine balancing accounts between mobile financial service wallets, merchant partners, and commercial partner banks.',
    businessContext: 'Financial compliance demands end-of-day zero-variance ledgers and automated discrepancy resolution across millions of daily transactions.',
    contributions: [
      'Designed batch clearing pipelines reconciling transaction logs against core banking ledgers.',
      'Implemented automated fee splitting and commission calculation algorithms.',
      'Constructed exception handling queues for rapid dispute resolution.'
    ],
    technologies: ['Java', 'Spring Batch', 'PostgreSQL', 'SQL Optimization', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Reduced daily financial settlement reconciliation time from hours to minutes.',
      'Eliminated manual calculation discrepancies across multi-party merchant settlements.'
    ]
  },

  // --- BRAC BANK (Project Contributions) ---
  {
    id: 'brac-corporate-banking',
    title: 'Corporate Banking Solution',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank',
    organizationRelationship: 'Project Contribution',
    domain: 'Commercial Banking · Institutional Portal',
    categories: ['banking', 'enterprise'],
    shortDescription: 'Enterprise banking portal facilitating bulk payroll, multi-tier approvals, and treasury operations.',
    fullDescription: 'Comprehensive corporate internet banking suite facilitating high-value treasury operations, bulk payroll disbursement, maker-checker authorization matrices, and enterprise accounting exports.',
    businessContext: 'Corporate institutional clients require multi-level approval hierarchies, multi-currency ledger routing, and integration with core banking systems.',
    contributions: [
      'Designed fine-grained role-based access control (RBAC) and configurable maker-checker authorization workflows.',
      'Engineered bulk payroll batch processing parser capable of validating tens of thousands of salary rows.',
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
    organizationName: 'BRAC Bank',
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
    organizationName: 'BRAC Bank',
    organizationRelationship: 'Project Contribution',
    domain: 'Banking · Central Bank Switch Routing',
    categories: ['banking', 'payment'],
    shortDescription: 'High-value institutional fund transfer switch connecting with Bangladesh Bank RTGS network.',
    fullDescription: 'Central bank financial network connector handling high-value Real-Time Gross Settlement (RTGS), intra-bank fund transfer (IFT), and inter-bank clearing.',
    businessContext: 'High-value treasury transactions where any system delay or message drop represents substantial financial risk.',
    contributions: [
      'Built robust socket communication engine with heartbeats and automated reconnection logic.',
      'Implemented strict transaction sequencing to prevent out-of-order execution.',
      'Implemented automated reconciliation against central bank end-of-day statements.'
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle Database', 'TCP/IP Sockets', 'Linux'],
    featured: false,
    verifiedOutcomes: [
      'Zero-loss message routing for corporate and institutional high-value liquidity settlements.',
      'Audit-ready logging conforming strictly to regulatory requirements.'
    ]
  },
  {
    id: 'brac-lc',
    title: 'LC (Letter of Credit) Alert Service',
    organizationId: 'brac-bank',
    organizationName: 'BRAC Bank',
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
    organizationName: 'ROBI',
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
    title: 'NTMS (Network Traffic Management System)',
    organizationId: 'robi',
    organizationName: 'ROBI',
    organizationRelationship: 'Project Contribution',
    domain: 'Telecom · Network Monitoring & Traffic Routing',
    categories: ['telecom', 'enterprise'],
    shortDescription: 'Operational monitoring and traffic management system for telecom infrastructure management.',
    fullDescription: 'Network traffic management and monitoring backend analyzing node performance, signaling traffic, and carrier routing anomalies.',
    businessContext: 'Network operations center (NOC) teams need real-time visualization and alert triggers for cellular infrastructure bottlenecks.',
    contributions: [
      'Engineered data ingestion pipelines collecting performance counters from network elements.',
      'Implemented anomaly detection rules alerting engineers to sudden traffic dips or spikes.',
      'Created backend reporting endpoints for engineering management dashboards.'
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'Linux', 'SNMP / Syslog'],
    featured: false,
    verifiedOutcomes: [
      'Enhanced NOC visibility into telecom base station operational health.',
      'Accelerated engineering response time to network signaling alarms.'
    ]
  },
  {
    id: 'robi-campaign',
    title: 'Campaign Management',
    organizationId: 'robi',
    organizationName: 'ROBI',
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
  {
    id: 'robi-mobile-app',
    title: 'Mobile Application (Digital Services)',
    organizationId: 'robi',
    organizationName: 'ROBI',
    organizationRelationship: 'Project Contribution',
    domain: 'Telecom · Mobile Applications & Services',
    categories: ['telecom', 'enterprise'],
    shortDescription: 'Digital self-service mobile application backend for subscriber bundle management and recharging.',
    fullDescription: 'Backend APIs and integration layer connecting consumer mobile apps with core telecom billing and VAS provisioning engines.',
    businessContext: 'Subscribers require frictionless balance checks, data pack purchases, and account management directly from their smartphones.',
    contributions: [
      'Engineered low-latency RESTful APIs serving mobile client requests.',
      'Implemented caching strategies with Redis to handle simultaneous flash-offer traffic bursts.',
      'Integrated payment gateways for digital airtime top-ups.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'REST APIs'],
    featured: false,
    verifiedOutcomes: [
      'Supported millions of mobile app interactions daily with sub-second API latency.',
      'Streamlined digital pack purchases and self-service subscriber care.'
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
    id: 'itogether-mobile-apps',
    title: 'Mobile Applications',
    organizationId: 'itogether',
    organizationName: 'iTogether',
    organizationRelationship: 'Project Contribution',
    domain: 'Enterprise Mobility · Digital Products',
    categories: ['enterprise'],
    shortDescription: 'Cross-platform mobile applications delivering enterprise client mobility and consumer tools.',
    fullDescription: 'Engineering mobile applications focusing on clean client architecture, responsive offline-first data caching, and seamless backend synchronization.',
    businessContext: 'Delivering intuitive mobile client experiences for diverse commercial clients.',
    contributions: [
      'Implemented client-side caching and SQLite local persistence for offline resiliency.',
      'Engineered bi-directional data synchronization with backend endpoints.',
      'Integrated push notifications and real-time status alerts.'
    ],
    technologies: ['Mobile Development', 'REST APIs', 'SQLite', 'JSON'],
    featured: false,
    verifiedOutcomes: [
      'Delivered intuitive, responsive mobile apps on target schedules.',
      'Maintained stable offline functionality in low-connectivity areas.'
    ]
  },
  {
    id: 'itogether-web-services',
    title: 'Web Services & API Gateways',
    organizationId: 'itogether',
    organizationName: 'iTogether',
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
      'Implemented prototype event-sourcing ledger with Kafka event streams.'
    ],
    technologies: ['Java 21', 'Spring WebFlux', 'Kafka', 'Redis', 'Docker', 'PostgreSQL'],
    featured: false,
    isPersonal: true,
    verifiedOutcomes: [
      'Provided valuable architecture insights and performance benchmarks subsequently applied to enterprise system designs.',
      'Demonstrated high-throughput low-latency reactive throughput under simulated peak concurrency.'
    ]
  }
]
