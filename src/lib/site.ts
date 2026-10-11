export interface ProjectItem {
  id: string
  title: string
  category: 'Systems & Core' | 'Full-Stack & AI' | 'Architecture'
  status: string
  summary: string
  description: string
  stack: string[]
  metrics?: string
  githubUrl?: string
  liveUrl?: string
  isPrivate?: boolean
}

export const site = {
  name: 'Mahdi Alizade',
  title: 'Systems & Full-Stack Engineer',
  bio: 'Building low-level distributed foundations, custom runtimes, and end-to-end intelligent systems.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com',
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/Mahdi-Alizade',
}

export const projectsList: ProjectItem[] = [
  {
    id: 'nova-ai',
    title: 'Nova AI',
    category: 'Full-Stack & AI',
    status: 'Production MVP',
    summary: 'Automated Operations Platform for Clinics',
    description: 'An orchestration system connecting multi-channel customer communications across WhatsApp, Telegram, and Instagram directly into automated Google Calendar scheduling pipelines.',
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ'],
    metrics: 'Automates scheduling flows across 3 messaging protocols',
    isPrivate: true,
  },
  {
    id: 'dbdb',
    title: 'DBDB Embedded KV Store',
    category: 'Systems & Core',
    status: 'Completed',
    summary: 'Append-Only Key-Value Database Engine',
    description: 'An embedded key-value storage engine implemented with append-only logs, background compaction, consistent hashing proxies for horizontal sharding, and LRU read caching.',
    stack: ['Python', 'AsyncIO', 'Docker', 'Network Protocols'],
    metrics: 'Sub-millisecond retrieval on local caches with append logs',
    githubUrl: 'https://github.com/Mahdi-Alizade/dbdb',
  },
  {
    id: 'slowtorch',
    title: 'SlowTorch Deep Learning Core',
    category: 'Systems & Core',
    status: 'Completed',
    summary: 'Pure Autograd & Neural Network Engine',
    description: 'A deep learning engine built from mathematical primitives featuring a reverse-mode automatic differentiation graph, manual backpropagation, Adam optimizers, and tensor layers.',
    stack: ['Python', 'Linear Algebra', 'Autograd', 'Calculus'],
    metrics: 'Fully functional tensor computation without external ML runtimes',
    githubUrl: 'https://github.com/Mahdi-Alizade/slowtorch',
  },
  {
    id: 'mini-redis',
    title: 'Mini-Redis Server',
    category: 'Systems & Core',
    status: 'Completed',
    summary: 'Custom In-Memory Store & Protocol Parser',
    description: 'In-memory key-value data structure store supporting full RESP (Redis Serialization Protocol) socket parsing, TTL key expirations, and set/list collections.',
    stack: ['Python', 'Sockets', 'RESP Protocol', 'Concurrency'],
    metrics: 'Compliant with official Redis CLI clients',
    githubUrl: 'https://github.com/Mahdi-Alizade/mini-redis',
  },
  {
    id: 'pyvm',
    title: 'PyVM Bytecode Runtime',
    category: 'Systems & Core',
    status: 'Completed',
    summary: 'Stack-Based Virtual Machine Interpreter',
    description: 'Custom bytecode virtual machine implementing an instruction evaluator, stack frame management, conditional branching, function definitions, and deep recursion frames.',
    stack: ['Python', 'Bytecode', 'Virtual Machines', 'Compilers'],
    metrics: 'Directly executes compiled function stacks and loops',
    githubUrl: 'https://github.com/Mahdi-Alizade/pyvm',
  },
  {
    id: 'job-orchestrator',
    title: 'Container Task Orchestrator',
    category: 'Architecture',
    status: 'Completed',
    summary: 'Isolated Container Execution Pipeline',
    description: 'Distributed microservice architecture coordinating isolated container jobs via BullMQ worker queues, tracking Docker container execution lifecycles and resource consumption.',
    stack: ['NestJS', 'BullMQ', 'Dockerode', 'Redis'],
    metrics: 'Sandboxed code execution with automated container teardown',
    githubUrl: 'https://github.com/Mahdi-Alizade/job-orchestrator',
  },
]