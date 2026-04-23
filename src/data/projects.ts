import type { ProjectStructure } from '../types'

export const projects: ProjectStructure[] = [
  {
    name: 'Conecta Paraná',
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'DDD', 'Oracle Cloud'],
    github: 'https://github.com/c-s-softwares/conecta-parana',
    live: 'https://admin.conectaparana.com.br/login',
    status: 'live',
  },
  {
    name: 'Orçamento Fácil',
    tags: ['React', 'Capacitor', 'TypeScript', 'Stryker', 'Android'],
    status: 'wip',
  },
  {
    name: 'Gabebet',
    tags: ['Vue.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/gabecmelo/gabebet',
    live: 'https://gabecmelo.github.io/gabebet/',
    status: 'live',
  },
  {
    name: 'RPGERAL',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/gabecmelo/RPGERAL',
    status: 'dev',
  },
]
