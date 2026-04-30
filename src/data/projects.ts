import type { ProjectStructure } from '../types'

export const projects: ProjectStructure[] = [
  {
    name: 'Conecta Paraná',
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'DDD', 'Oracle Cloud'],
    github: 'https://github.com/c-s-softwares/conecta-parana',
    live: 'https://conectaparana.com.br/',
    status: 'live',
    screenshots: {
      type: 'desktop',
      images: ['/projects/conecta-parana.png'],
    },
  },
  {
    name: 'Gabebet',
    tags: ['Vue.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/gabecmelo/gabebet',
    live: 'https://gabecmelo.github.io/gabebet/',
    status: 'live',
    screenshots: {
      type: 'desktop',
      images: ['/projects/gabebet.png'],
    },
  },
  {
    name: 'Orçamento Fácil',
    tags: ['React', 'Capacitor', 'TypeScript', 'Stryker', 'Android'],
    status: 'wip',
  },
  {
    name: 'RPGERAL',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/gabecmelo/RPGERAL',
    status: 'dev',
  },
]
