import type { ExperienceStructure } from '../types'

export const experience: ExperienceStructure[] = [
  {
    company: 'Grupo UND',
    periodStart: '02/2026',
    periodEnd: 'present',
    location: 'remote',
    tags: ['Vue.js', 'Nuxt 4', 'Playwright', 'Vitest', 'Laravel', 'Stryker'],
  },
  {
    company: 'C&S Softwares',
    periodStart: '10/2025',
    periodEnd: 'present',
    location: 'remote',
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'RxJS', 'DDD'],
  },
  {
    company: 'SoftKoe Games',
    periodStart: '07/2025',
    periodEnd: 'present',
    location: 'remote',
    tags: ['Angular', 'Lua', 'Rojo', 'Roblox', 'Game Dev', 'TypeScript'],
  },
  {
    company: 'Good Software Dev',
    periodStart: '12/2024',
    periodEnd: '07/2025',
    location: 'remote',
    tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
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
