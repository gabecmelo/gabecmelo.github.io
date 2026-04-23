import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Vue.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'RxJS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Capacitor' },
    ],
  },
  {
    label: 'Backend & APIs',
    skills: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Microsserviços' },
      { name: 'OpenAPI/Swagger' },
      { name: 'Redis' },
      { name: 'Webhooks' },
    ],
  },
  {
    label: 'Bancos de Dados',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Firestore' },
      { name: 'Prisma ORM' },
      { name: 'IndexedDB' },
    ],
  },
  {
    label: 'Testes',
    skills: [
      { name: 'Playwright' },
      { name: 'Vitest' },
      { name: 'Testing Library' },
      { name: 'Stryker' },
      { name: 'Testes de API' },
      { name: 'Gherkin' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'GitHub Actions' },
      { name: 'AWS' },
      { name: 'Oracle Cloud' },
      { name: 'Nginx' },
      { name: 'CI/CD' },
      { name: 'Linux' },
    ],
  },
  {
    label: 'AI-Assisted Dev',
    skills: [
      { name: 'Claude Code' },
      { name: 'Codex CLI' },
      { name: 'RAG Pipelines' },
      { name: 'Programação Agêntica' },
      { name: 'PRD Generation' },
    ],
  },
]
