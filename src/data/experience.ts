import type { ExperienceStructure } from '../types'

export const experience: ExperienceStructure[] = [
  {
    company: 'Grupo UND',
    period: '02/2026 – Presente',
    location: 'Remoto',
    tags: ['Vue.js', 'Nuxt 4', 'Playwright', 'Vitest', 'Laravel', 'Stryker'],
  },
  {
    company: 'C&S Softwares',
    period: '10/2025 – Presente',
    location: 'Remoto',
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'RxJS', 'DDD'],
  },
  {
    company: 'SoftKoe Games',
    period: '07/2025 – Presente',
    location: 'Remoto',
    tags: ['Angular', 'Lua', 'Rojo', 'Roblox', 'Game Dev', 'TypeScript'],
  },
  {
    company: 'Good Software Dev',
    period: '12/2024 – 07/2025',
    location: 'Remoto',
    tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    subProjects: [
      { name: 'Cover Badger' },
      { name: 'AudienceLab.io' },
    ],
  },
  {
    company: 'Trybe',
    period: '01/2024 – 12/2024',
    location: 'Remoto',
    tags: ['JavaScript', 'TypeScript', 'React', 'Mentoria'],
  },
]
