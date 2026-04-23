import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'Quality Engineer Lead / Desenvolvedor Frontend',
    company: 'Grupo UND',
    period: '02/2026 – Presente',
    location: 'Remoto',
    description: 'Liderança de qualidade e desenvolvimento frontend em plataforma financeira com Nuxt 4 e Laravel 12.',
    bullets: [
      'Auditorias de performance em Nuxt 4 (Vue.js) e Laravel 12, identificando e corrigindo memory leaks e gargalos de complexidade algorítmica.',
      'Arquitetei e implantei infraestrutura de testes com Playwright (E2E) e Vitest (unitário) + Mutation Testing, atingindo cobertura acima de 80%.',
      'Acelerei a baseline de automação em ~60% utilizando LLMs e programação agêntica para design e execução de casos de teste.',
      'Produzi 30+ páginas de documentação técnica de QA cobrindo regras financeiras, regulatórias e suítes Gherkin priorizadas por risco.',
      'Conduzi code reviews e testes de API via IA, aumentando satisfação de clientes internos em 30% e reduzindo atrasos em 40%.',
    ],
    tags: ['Vue.js', 'Nuxt 4', 'Playwright', 'Vitest', 'Laravel', 'Stryker'],
  },
  {
    role: 'Desenvolvedor Fullstack Sênior & Tech Lead',
    company: 'C&S Softwares',
    period: '10/2025 – Presente',
    location: 'Remoto',
    description: 'Tech Lead de projetos monorepo com arquitetura DDD, CI/CD completo e times de 6+ desenvolvedores.',
    bullets: [
      'Conduzi a arquitetura do Conecta Paraná com DDD, separando contextos entre mobile (Flutter) e web admin (Angular).',
      'Arquitetei monorepo NestJS + Angular + Flutter com 4 ambientes Docker e CI/CD via GitHub Actions com deploy ARM64 no Oracle Cloud.',
      'Utilizei Claude Code para acelerar entregas que levariam 2–3 semanas para menos de 2 dias de desenvolvimento.',
      'Elevei cobertura de testes do Orçamento Fácil de 60% para 96% com Stryker (Mutation Testing).',
      'Implementei pipelines RAG com IA em Docker (Ralph Loops), criando PRDs e desenvolvendo features de forma agêntica.',
      'Orientei time de 6 devs juniores como Tech Lead e DevOps, coordenando sprints via Jira/Scrum.',
    ],
    tags: ['NestJS', 'Angular', 'Flutter', 'Docker', 'GitHub Actions', 'RxJS', 'DDD'],
  },
  {
    role: 'Founder & Lead Game Developer',
    company: 'SoftKoe Games',
    period: '07/2025 – Presente',
    location: 'Remoto',
    description: 'Fundador e desenvolvedor líder em estúdio de jogos web e Roblox, liderando roadmap técnico e desenvolvimento de gameplay.',
    bullets: [
      'Liderei roadmaps técnicos e mentoria via pair programming, aumentando produtividade do time em 50%.',
      'Refatorei integrações de APIs desenvolvidas pelo time, elevando performance e eficiência em 70%.',
      'Otimizei arquitetura de componentes Angular, reduzindo tempo de carregamento de 3s para 1s.',
      'Desenvolvi lógicas internas complexas em Lua com Rojo e VS Code, garantindo 100% de estabilidade sistêmica.',
      'Projetei Design System modular para interfaces e ambientes, acelerando criação de assets em 40%.',
      'Otimizei ambientes 3D e scripts, resultando em 30% de ganho de FPS em dispositivos mobile.',
    ],
    tags: ['Angular', 'Lua', 'Rojo', 'Roblox', 'Game Dev', 'TypeScript'],
  },
  {
    role: 'Engenheiro de Software Full Stack',
    company: 'Good Software Dev',
    period: '12/2024 – 07/2025',
    location: 'Remoto',
    description: 'Consultor em projetos de alta escala para clientes internacionais, focando em microsserviços, redução de custos e confiabilidade.',
    bullets: [],
    subProjects: [
      {
        name: 'Cover Badger',
        bullets: [
          'Recuperei US$ 70k anuais em receita ao mitigar erros contratuais via refatoração de cron jobs Node.js e integrações Axios/Express, reduzindo falhas em 60%.',
          'Reduzi MTTR em 50% e garanti deploys zero downtime com GitHub Actions, Docker e Kubernetes.',
        ],
      },
      {
        name: 'AudienceLab.io',
        bullets: [
          'Reduzi custos de infraestrutura AWS em 81% (US$ 3.4k/mês) via otimização de índices MongoDB e automação de pipelines de limpeza, permitindo downsizing de instâncias M80 → M40.',
          'Reduzi latência em 50% com caching Redis e otimização de queries MongoDB.',
          'Construí sistema de tickets em tempo real em React com Webhooks, reduzindo latência de atualização em 35%.',
        ],
      },
    ],
    tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    role: 'Instrutor de Desenvolvimento Front End',
    company: 'Trybe',
    period: '01/2024 – 12/2024',
    location: 'Remoto',
    description: 'Mentoria e instrução de desenvolvedores em JavaScript, TypeScript e React.',
    bullets: [
      'Mentorei desenvolvedores em JavaScript, TypeScript e React, acelerando a proficiência técnica em 40%.',
      'Conduzi code reviews e workshops, elevando a qualidade de código de mais de 50 desenvolvedores.',
      'Otimizei materiais e suporte via Slack, reduzindo tempo de resolução de tickets de 40 para 20 minutos.',
    ],
    tags: ['JavaScript', 'TypeScript', 'React', 'Mentoria'],
  },
]
