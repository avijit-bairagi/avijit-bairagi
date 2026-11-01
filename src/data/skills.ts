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
      { name: 'Spring Boot', category: 'Backend', description: 'Production-grade enterprise microservice framework', isFeatured: true, iconKey: 'springboot' },
      { name: 'Spring WebFlux', category: 'Backend', description: 'Non-blocking reactive programming with Project Reactor', isFeatured: true, iconKey: 'spring' },
      { name: 'Spring Security', category: 'Backend', description: 'OAuth2, JWT, fine-grained RBAC, and financial-grade API security', isFeatured: true, iconKey: 'shield' },
      { name: 'REST APIs', category: 'Backend', description: 'Clean, versioned, idempotent, and backwards-compatible API contracts', isFeatured: false, iconKey: 'api' },
      { name: 'Microservices', category: 'Backend', description: 'Distributed domain-driven design, service discovery, fault tolerance', isFeatured: true, iconKey: 'network' },
      { name: 'Reactive Programming', category: 'Backend', description: 'Backpressure handling, asynchronous data processing pipelines', isFeatured: false, iconKey: 'zap' }
    ]
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Strong foundational languages for systems, databases, and scripting.',
    featuredHighlight: false,
    skills: [
      { name: 'Java', category: 'Languages', description: 'Primary backend language, OOP, functional paradigms, JVM performance', isFeatured: true, iconKey: 'java' },
      { name: 'SQL', category: 'Languages', description: 'Complex relational querying, indexing strategies, query plan optimization', isFeatured: false, iconKey: 'database' },
      { name: 'JavaScript', category: 'Languages', description: 'Modern ECMAScript, asynchronous programming, frontend tooling', isFeatured: false, iconKey: 'code' },
      { name: 'TypeScript', category: 'Languages', description: 'Type-safe contracts, scalable frontend application engineering', isFeatured: false, iconKey: 'code' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Caching',
    description: 'Relational data persistence, distributed NoSQL, reactive drivers, and low-latency memory stores.',
    featuredHighlight: false,
    skills: [
      { name: 'PostgreSQL', category: 'Databases', description: 'ACID transactions, JSONB, connection pooling, indexing', isFeatured: true, iconKey: 'postgresql' },
      { name: 'MySQL', category: 'Databases', description: 'High-availability replication, relational schema design', isFeatured: false, iconKey: 'mysql' },
      { name: 'DynamoDB', category: 'Databases', description: 'High-scale single-digit millisecond latency key-value data storage', isFeatured: false, iconKey: 'aws' },
      { name: 'Redis', category: 'Databases', description: 'Distributed caching, session storage, rate limiting, pub/sub', isFeatured: true, iconKey: 'redis' },
      { name: 'R2DBC', category: 'Databases', description: 'Reactive relational database connectivity for non-blocking I/O', isFeatured: false, iconKey: 'database' }
    ]
  },
  {
    id: 'messaging',
    name: 'Messaging & Streaming',
    description: 'Event-driven architectures, asynchronous messaging, and reliable transaction decoupled processing.',
    featuredHighlight: false,
    skills: [
      { name: 'Apache Kafka', category: 'Messaging', description: 'Distributed partition-based event streams, consumer groups, idempotency', isFeatured: true, iconKey: 'kafka' },
      { name: 'AWS Kinesis', category: 'Messaging', description: 'Cloud event streaming, shard scaling, and stream processing', isFeatured: false, iconKey: 'aws' }
    ]
  },
  {
    id: 'cloud-infra',
    name: 'Cloud & Infrastructure',
    description: 'Containerized deployments, Infrastructure as Code, and resilient cloud architectures.',
    featuredHighlight: false,
    skills: [
      { name: 'AWS', category: 'Cloud', description: 'EC2, ECS, S3, RDS, IAM, SQS, CloudWatch, Lambda', isFeatured: false, iconKey: 'aws' },
      { name: 'Docker', category: 'Cloud', description: 'Multi-stage builds, container orchestration, lightweight runtimes', isFeatured: true, iconKey: 'docker' },
      { name: 'Terraform', category: 'Cloud', description: 'Declarative Infrastructure as Code for automated cloud provisioning', isFeatured: false, iconKey: 'terminal' },
      { name: 'LocalStack', category: 'Cloud', description: 'Local emulation of cloud dependencies for isolated test execution', isFeatured: false, iconKey: 'box' },
      { name: 'Linux', category: 'Cloud', description: 'Production server operations, bash scripting, process monitoring, systemd', isFeatured: false, iconKey: 'terminal' }
    ]
  },
  {
    id: 'devops-observability',
    name: 'DevOps & Observability',
    description: 'Continuous integration, production monitoring, distributed tracing, and metrics instrumentation.',
    featuredHighlight: false,
    skills: [
      { name: 'OpenTelemetry', category: 'Observability', description: 'Vendor-agnostic distributed telemetry, context propagation', isFeatured: true, iconKey: 'activity' },
      { name: 'Micrometer', category: 'Observability', description: 'Dimensional metrics, custom timer instruments, Prometheus integration', isFeatured: false, iconKey: 'activity' },
      { name: 'Distributed Tracing', category: 'Observability', description: 'End-to-end request latency profiling across distributed microservices', isFeatured: false, iconKey: 'git-branch' },
      { name: 'Jenkins', category: 'DevOps', description: 'Automated CI/CD pipelines, build verification, artifact publishing', isFeatured: false, iconKey: 'cpu' },
      { name: 'Git', category: 'DevOps', description: 'GitFlow, trunk-based branching, collaborative code review', isFeatured: false, iconKey: 'git-branch' },
      { name: 'Maven', category: 'DevOps', description: 'Multi-module build dependency management, plugins, lifecycle', isFeatured: false, iconKey: 'package' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Modern component-driven web interfaces supporting enterprise engineering tools.',
    featuredHighlight: false,
    skills: [
      { name: 'Vue.js', category: 'Frontend', description: 'Composition API, reactive state management, Single File Components', isFeatured: false, iconKey: 'vue' },
      { name: 'TypeScript', category: 'Frontend', description: 'Type-safe interfaces, predictable frontend logic', isFeatured: false, iconKey: 'code' },
      { name: 'JavaScript', category: 'Frontend', description: 'ES6+ standards, DOM manipulation, asynchronous promises', isFeatured: false, iconKey: 'code' },
      { name: 'HTML5', category: 'Frontend', description: 'Semantic structure, accessibility guidelines (ARIA)', isFeatured: false, iconKey: 'layout' },
      { name: 'CSS3 / Tailwind', category: 'Frontend', description: 'Responsive design, fluid layouts, custom design systems', isFeatured: false, iconKey: 'palette' }
    ]
  }
]
