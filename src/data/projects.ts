import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Conecta Paraná',
    description: 'Plataforma cidadã com app mobile (Flutter) e backoffice web (Angular), arquitetada com DDD em monorepo NestJS. CI/CD completo com deploy automático ARM64 no Oracle Cloud.',
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'DDD', 'Oracle Cloud'],
    github: 'https://github.com/c-s-softwares/conecta-parana',
    live: 'https://admin.conectaparana.com.br/login',
    status: 'live',
  },
  {
    name: 'Orçamento Fácil',
    description: 'App mobile para orçamentos de construção civil com 50+ calculadoras em tempo real (< 500ms) e cobertura de testes de 96% via Mutation Testing com Stryker.',
    tags: ['React', 'Capacitor', 'TypeScript', 'Stryker', 'Android'],
    status: 'wip',
  },
  {
    name: 'Gabebet',
    description: 'Plataforma de apostas esportivas desenvolvida em Vue.js, com interface responsiva e experiência de usuário moderna.',
    tags: ['Vue.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/gabecmelo/gabebet',
    live: 'https://gabecmelo.github.io/gabebet/',
    status: 'live',
  },
  {
    name: 'RPGERAL',
    description: 'Aplicação React para gerenciamento e criação de personagens de RPG de mesa, com sistemas de fichas interativas e rolls de dados.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/gabecmelo/RPGERAL',
    status: 'dev',
  },
]
