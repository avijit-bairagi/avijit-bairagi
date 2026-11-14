export interface SkillItem {
  name: string
  category: string
  description?: string
  isFeatured?: boolean
  iconKey?: string
}

export interface SkillCategory {
  id: string
  name: string
  description: string
  skills: SkillItem[]
  featuredHighlight?: boolean
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend Engineering',
    description: 'High-throughput microservices, reactive streams, and resilient enterprise application frameworks.',
    featuredHighlight: true,
    skills: [
      { name: 'Java', category: 'Backend', description: 'Core enterprise language (8, 11, 17, 21), concurrency, JVM tuning', isFeatured: true, iconKey: 'java' },
      { name: 'Reactive Java', category: 'Backend', description: 'Non-blocking reactive programming with Project Reactor & WebFlux', isFeatured: true, iconKey: 'spring' },
      { name: 'Spring Boot', category: 'Backend', description: 'Production-grade enterprise microservice framework', isFeatured: true, iconKey: 'springboot' },
      { name: 'Spring WebFlux', category: 'Backend', description: 'Non-blocking reactive streams and high-concurrency services', isFeatured: true, iconKey: 'spring' },
      { name: 'Spring Security', category: 'Backend', description: 'OAuth2, JWT, fine-grained RBAC, and financial-grade API security', isFeatured: true, iconKey: 'shield' },
      { name: 'ISO 8583', category: 'Backend', description: 'Financial transaction switch messaging, BIT-map packing & clearing', isFeatured: true, iconKey: 'shield' },
      { name: 'Microservices', category: 'Backend', description: 'Distributed domain-driven design, service discovery, fault tolerance', isFeatured: true, iconKey: 'network' },
      { name: 'RabbitMQ', category: 'Backend', description: 'Reliable message brokering, asynchronous queues, and decoupled workflows', isFeatured: true, iconKey: 'network' },
      { name: 'REST APIs', category: 'Backend', description: 'Clean, versioned, idempotent, and backwards-compatible API contracts', isFeatured: false, iconKey: 'api' },
      { name: 'SOAP API', category: 'Backend', description: 'Enterprise XML service integrations and legacy banking adapters', isFeatured: false, iconKey: 'api' }
    ]
  },
  {
    id: 'ai-agentic',
    name: 'AI & Agentic Programming',
    description: 'Autonomous agent workflows, prompt architecture, and AI-assisted engineering.',
    featuredHighlight: true,
    skills: [
      { name: 'AI Engineering', category: 'AI', description: 'Integrating foundation models into production backend workflows', isFeatured: true, iconKey: 'bot' },
      { name: 'Agentic Programming', category: 'AI', description: 'Multi-step autonomous agents, reasoning loops, and verification', isFeatured: true, iconKey: 'bot' },
      { name: 'Prompt Engineering', category: 'AI', description: 'Deterministic system instructions, context design, and evaluation', isFeatured: false, iconKey: 'code' },
      { name: 'AI Workflow Automation', category: 'AI', description: 'Automating engineering tasks, triage, and productivity pipelines', isFeatured: false, iconKey: 'zap' }
    ]
  },
  {
    id: 'web-frontend',
    name: 'Web & Frontend',
    description: 'Modern client-side scripting and component-driven interfaces.',
    featuredHighlight: false,
    skills: [
      { name: 'JS', category: 'Frontend', description: 'Modern ECMAScript, async workflows, and interactive UI logic', isFeatured: false, iconKey: 'code' },
      { name: 'Vue JS', category: 'Frontend', description: 'Composition API, reactive components, and TypeScript SPAs', isFeatured: false, iconKey: 'vue' },
      { name: 'TypeScript', category: 'Frontend', description: 'Type-safe contracts and predictable frontend engineering', isFeatured: false, iconKey: 'code' },
      { name: 'HTML5', category: 'Frontend', description: 'Semantic markup and accessible layout structure', isFeatured: false, iconKey: 'layout' },
      { name: 'CSS3', category: 'Frontend', description: 'Responsive styling and modern layout systems', isFeatured: false, iconKey: 'palette' },
      { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first design systems and dark/light theming', isFeatured: false, iconKey: 'palette' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Caching',
    description: 'Relational data persistence, distributed NoSQL, reactive drivers, and low-latency memory stores.',
    featuredHighlight: false,
    skills: [
      { name: 'Database', category: 'Databases', description: 'Relational modeling, ACID transactions, indexing, and query optimization', isFeatured: true, iconKey: 'database' },
      { name: 'PostgreSQL', category: 'Databases', description: 'ACID transactions, JSONB, connection pooling, indexing', isFeatured: true, iconKey: 'postgresql' },
      { name: 'Oracle Database', category: 'Databases', description: 'Enterprise banking persistence, PL/SQL, high-concurrency tuning', isFeatured: false, iconKey: 'database' },
      { name: 'MySQL', category: 'Databases', description: 'High-availability replication, relational schema design', isFeatured: false, iconKey: 'mysql' },
      { name: 'DynamoDB', category: 'Databases', description: 'Single-digit millisecond key-value and document persistence on AWS', isFeatured: false, iconKey: 'aws' },
      { name: 'Redis', category: 'Databases', description: 'Distributed caching, session storage, rate limiting, distributed locks', isFeatured: true, iconKey: 'redis' },
      { name: 'R2DBC', category: 'Databases', description: 'Reactive relational database connectivity for non-blocking I/O', isFeatured: false, iconKey: 'database' }
    ]
  },
  {
    id: 'cloud-infra',
    name: 'Cloud & Infrastructure',
    description: 'Containerized deployments, Infrastructure as Code, and resilient cloud architectures.',
    featuredHighlight: false,
    skills: [
      { name: 'AWS', category: 'Cloud', description: 'EC2, ECS, S3, RDS, IAM, SQS, CloudWatch, Lambda, Kinesis', isFeatured: true, iconKey: 'aws' },
      { name: 'Docker', category: 'Cloud', description: 'Multi-stage builds, container orchestration, lightweight runtimes', isFeatured: true, iconKey: 'docker' },
      { name: 'Terraform', category: 'Cloud', description: 'Declarative Infrastructure as Code for automated cloud provisioning', isFeatured: false, iconKey: 'terminal' },
      { name: 'Linux', category: 'Cloud', description: 'Production server operations, bash scripting, process monitoring, systemd', isFeatured: false, iconKey: 'terminal' }
    ]
  },
  {
    id: 'devops-observability',
    name: 'Observability & DevOps',
    description: 'Continuous integration, production monitoring, distributed tracing, and metrics instrumentation.',
    featuredHighlight: false,
    skills: [
      { name: 'Observability', category: 'Observability', description: 'End-to-end metrics, structured logging, SLIs/SLOs, and production telemetry', isFeatured: true, iconKey: 'activity' },
      { name: 'OpenTelemetry', category: 'Observability', description: 'Vendor-agnostic distributed telemetry, context propagation', isFeatured: true, iconKey: 'activity' },
      { name: 'Micrometer', category: 'Observability', description: 'Dimensional metrics, custom timer instruments, Prometheus integration', isFeatured: false, iconKey: 'activity' },
      { name: 'Distributed Tracing', category: 'Observability', description: 'End-to-end request latency profiling across distributed microservices', isFeatured: false, iconKey: 'git-branch' },
      { name: 'Jenkins', category: 'DevOps', description: 'Automated CI/CD pipelines, build verification, artifact publishing', isFeatured: false, iconKey: 'cpu' },
      { name: 'Git', category: 'DevOps', description: 'GitFlow, trunk-based branching, collaborative code review', isFeatured: false, iconKey: 'git-branch' },
      { name: 'Maven', category: 'DevOps', description: 'Multi-module build dependency management, plugins, lifecycle', isFeatured: false, iconKey: 'package' }
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership & Delivery',
    description: 'Engineering team leadership, agile sprint execution, and cross-functional project delivery.',
    featuredHighlight: false,
    skills: [
      { name: 'Project Manager', category: 'Leadership', description: 'End-to-end delivery ownership, stakeholder alignment, risk management', isFeatured: true, iconKey: 'briefcase' },
      { name: 'Team Lead', category: 'Leadership', description: 'Technical mentorship, architecture reviews, and backend squad guidance', isFeatured: true, iconKey: 'users' },
      { name: 'Sprint Planning', category: 'Leadership', description: 'Backlog estimation, velocity tracking, Agile & Scrum execution', isFeatured: true, iconKey: 'calendar' },
      { name: 'System Architecture', category: 'Leadership', description: 'Technical blueprints, RFCs, scalability & resilience trade-offs', isFeatured: false, iconKey: 'layers' }
    ]
  }
]
