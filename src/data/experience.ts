import type { ExperienceStructure } from '../types'

export const experience: ExperienceStructure[] = [
  {
    company: 'Grupo UND',
    periodStart: '02/2026',
    periodEnd: '05/2026',
    location: 'remote',
    tags: ['Vue.js', 'Nuxt 4', 'Laravel 12', 'PHP', 'TypeScript', 'Playwright', 'Vitest', 'Pest PHP', 'Stryker', 'Gherkin'],
  },
  {
    company: 'C&S Softwares',
    periodStart: '10/2025',
    periodEnd: 'present',
    location: 'remote',
    tags: ['NestJS', 'Angular', 'Flutter/Dart', 'TypeScript', 'RxJS', 'Docker', 'Oracle Cloud', 'GitHub Actions', 'Prisma ORM', 'PostgreSQL', 'Stryker', 'Firebase', 'React/Capacitor'],
  },
  /* SoftKoe Games — side project (reservado para futura seção)
  {
    company: 'SoftKoe Games',
    periodStart: '07/2025',
    periodEnd: 'present',
    location: 'remote',
    tags: ['Angular', 'Lua', 'Rojo', 'Roblox', 'Game Dev', 'TypeScript'],
  },
  */
  {
    company: 'Good Software Dev',
    periodStart: '12/2024',
    periodEnd: '07/2025',
    location: 'remote',
    tags: ['Node.js', 'Express', 'React', 'TypeScript', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Webhooks'],
    subProjects: [
      { name: 'Cover Badger' },
      { name: 'AudienceLab.io' },
    ],
  },
  {
    company: 'Trybe',
    periodStart: '01/2024',
    periodEnd: '05/2024',
    location: 'remote',
    tags: ['JavaScript', 'TypeScript', 'React'],
  },
]
