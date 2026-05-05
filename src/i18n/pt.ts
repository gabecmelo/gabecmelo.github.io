import type { Translations } from './types'

export const pt: Translations = {
  nav: {
    about: 'sobre',
    experience: 'experiência',
    projects: 'projetos',
    skills: 'skills',
    education: 'formação',
    contact: 'contato',
  },
  hero: {
    greeting: 'Olá, mundo! Eu sou',
    role: 'Engenheiro de Software Full Stack',
    description:
      '3+ anos construindo aplicações escaláveis com React, Angular, Vue e Node.js/NestJS. Arquitetura full stack, testes automatizados, CI/CD e AI-Assisted Development.',
    cta: { contact: 'Contato', resume: 'Currículo' },
    resume: '/Gabriel_Cabral_Melo_PT.pdf',
  },
  about: {
    heading: 'sobre-mim',
    bio: [
      'Olá! Sou <strong>Gabriel Cabral Melo</strong>, Engenheiro de Software Full Stack com mais de 3 anos de experiência construindo aplicações escaláveis — do backend ao frontend, passando por infraestrutura e liderança técnica.',
      'Tenho experiência sólida com <accent>React, Angular, Vue, Node.js, NestJS e TypeScript</accent>, além de RxJS, arquitetura de microsserviços, otimização de performance, acessibilidade (WCAG) e integração de APIs REST. Atualmente também atuo com <accent>AI-Assisted Development</accent> usando Claude Code, Codex CLI e RAG Pipelines para acelerar entregas sem abrir mão de qualidade.',
      'Como Tech Lead em projetos como <strong>Conecta Paraná</strong> e fundador da <strong>C&S Softwares</strong> , combino visão de produto com execução técnica — definindo arquitetura, conduzindo sprints e mentorando times.',
      'Sou graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> pela UniCesumar e falo Português (nativo), Inglês e Espanhol.',
    ],
    stats: [
      { value: '3+', label: 'anos de experiência' },
      { value: '8', label: 'empresas atendidas' },
      { value: '3', label: 'idiomas' },
      { value: '∞', label: 'vontade de aprender' },
    ],
  },
  experience: {
    heading: 'experiência',
    remote: 'Remoto',
    present: 'Presente',
    items: [
      {
        role: 'Quality Engineer Lead',
        description:
          'Liderança de qualidade em plataforma financeira com Nuxt 4 e Laravel 12.',
        bullets: [
          'Realizei auditorias de performance em Nuxt 4 (Vue.js) e Laravel 12, identificando e corrigindo gargalos críticos relacionados à complexidade algorítmica (Big O) e memory leaks em event listeners globais.',
          'Arquitetei e implantei infraestrutura de testes com Playwright (E2E) e Vitest (unitário) + Mutation Testing, atingindo cobertura acima de 80%.',
          'Acelerei a baseline de automação em ~60% utilizando LLMs e programação agêntica para design e execução de casos de teste complexos.',
          'Produzi 30+ páginas de documentação técnica de QA cobrindo regras financeiras, regulatórias e suítes Gherkin priorizadas por risco.',
          'Conduzi code reviews e testes de API via IA, aumentando satisfação de clientes internos em 30% e reduzindo atrasos em 40%.',
          'Executei testes manuais e testes de API em funcionalidades novas, validando fluxos críticos de pagamentos, containment e integrações com provedores externos antes de releases.',
        ],
      },
      {
        role: 'Fundador e Engenheiro de Software Full Stack Principal',
        description:
          'Fundador e Tech Lead de projetos monorepo com arquitetura DDD, CI/CD completo e times de 6+ desenvolvedores.',
        bullets: [
          'Conduzi a arquitetura do Conecta Paraná com DDD, separando contextos entre mobile (Flutter) e web admin (Angular).',
          'Arquitetei monorepo NestJS + Angular + Flutter com 4 ambientes Docker e CI/CD via GitHub Actions com deploy automático ARM64 em VPS Oracle, reduzindo setup de novos devs de dias para minutos.',
          'Desenvolvi componentes Angular com RxJS para gerenciamento reativo de estado e streams assíncronos, aplicando boas práticas de performance e acessibilidade (WCAG).',
          'Estruturei pipelines CI/CD completas com GitHub Actions (lint, testes unitários, e2e, build multi-arch com QEMU, deploy via SSH ao GHCR), com branch protection impedindo merge sem validação.',
          'Utilizei Claude Code para acelerar entregas que levariam 2-3 semanas para menos de 2 dias de desenvolvimento.',
          'Elevei cobertura de testes do Orçamento Fácil de 60% para 96% com Stryker (Mutation Testing).',
          'Prototipei interfaces do Orçamento Fácil com Claude Design, acelerando o ciclo de validação visual e reduzindo retrabalho de UI em 70%.',
          'Implementei pipelines RAG com IA em Docker (Ralph Loops), criando PRDs e desenvolvendo features de forma agêntica.',
          'Utilizei Codex CLI para revisão de atividades desenvolvidas com IA e code review contínuo, mantendo padrão de qualidade e consistência arquitetural.',
          'Orientei time de 6 devs juniores como Tech Lead e DevOps, coordenando sprints via Jira/Scrum.',
        ],
      },
      {
        role: 'Fundador e Desenvolvedor de Jogos Líder',
        description:
          'Fundador e desenvolvedor líder em estúdio de jogos web e Roblox, liderando roadmap técnico e desenvolvimento de gameplay.',
        bullets: [
          'Liderei roadmaps técnicos e mentoria via pair programming, aumentando produtividade do time em 50%.',
          'Refatorei integrações de APIs desenvolvidas pelo time, elevando performance e eficiência em 70%.',
          'Otimizei arquitetura de componentes Angular, reduzindo tempo de carregamento de 3s para 1s.',
          'Desenvolvi lógicas internas complexas em Lua com Rojo e VS Code, garantindo 100% de estabilidade sistêmica.',
          'Projetei Design System modular para interfaces e ambientes, acelerando criação de assets em 40%.',
          'Otimizei ambientes 3D e scripts, resultando em 30% de ganho de FPS em dispositivos mobile.',
        ],
      },
      {
        role: 'Engenheiro de Software Full Stack',
        description:
          'Consultor em projetos de alta escala para clientes internacionais, focando em microsserviços, redução de custos e confiabilidade.',
        bullets: [],
        subProjects: [
          {
            bullets: [
              'Recuperei US$ 5.8k mensais em receita ao mitigar erros contratuais via refatoração de cron jobs Node.js e integrações Axios/Express, reduzindo falhas em 60% e elevando a confiabilidade das tarefas em 45%.',
              'Reduzi MTTR em 50% e garanti deploys zero downtime com GitHub Actions, Docker e Kubernetes.',
              'Desenvolvi middlewares Node.js auth/log para padronizar a arquitetura de microsserviços, integrando 3 novos serviços no primeiro mês.',
            ],
          },
          {
            bullets: [
              'Reduzi custos de infraestrutura AWS em 81% (US$ 3.4k/mês) via otimização de índices MongoDB e automação de limpeza de dados, permitindo downsizing de instâncias M80 → M40.',
              'Reduzi latência em 50% com caching Redis e otimização de queries MongoDB.',
              'Construí sistema de tickets em tempo real em React com Webhooks, reduzindo latência de atualização em 35%.',
              'Documentei APIs via OpenAPI/Swagger, otimizando a integração e reduzindo erros pela metade.',
            ],
          },
        ],
      },
      {
        role: 'Instrutor de Desenvolvimento Front End',
        description:
          'Mentoria e instrução de desenvolvedores em JavaScript, TypeScript e React.',
        bullets: [
          'Mentorei desenvolvedores em JavaScript, TypeScript e React, acelerando a proficiência técnica em 40%.',
          'Conduzi code reviews e workshops, elevando a qualidade de código de mais de 50 desenvolvedores.',
          'Otimizei materiais e suporte via Slack, reduzindo tempo de resolução de tickets de 40 para 20 minutos.',
        ],
      },
    ],
  },
  projects: {
    heading: 'projetos',
    status: { live: 'Live', wip: 'Em testes', dev: 'Em desenvolvimento' },
    links: { code: 'Código', viewLive: 'Ver live', private: 'repositório privado' },
    items: [
      {
        description:
          'Plataforma cidadã com app mobile (Flutter) e backoffice web (Angular), arquitetada com DDD em monorepo NestJS. CI/CD completo com deploy automático ARM64 no Oracle Cloud.',
      },
      {
        description:
          'Plataforma de apostas simulada, construída com Vue.js, com interface responsiva e UX moderna, projetada para fins de demonstração técnica e testes.',
      },
      {
        description:
          'App mobile para orçamentos de construção civil com 50+ calculadoras em tempo real (< 500ms) e cobertura de testes de 96% via Mutation Testing com Stryker.',
      },
      {
        description:
          'Aplicação React para gerenciamento e criação de personagens de RPG de mesa, com sistemas de fichas interativas e rolls de dados.',
      },
    ],
  },
  skills: {
    heading: 'skills',
    groups: [
      { label: 'Frontend' },
      { label: 'Backend & APIs' },
      { label: 'Bancos de Dados' },
      { label: 'Testes' },
      { label: 'Cloud & DevOps' },
      { label: 'AI & Game Dev' },
    ],
  },
  education: {
    heading: 'formação',
    sections: { academic: 'Acadêmica', courses: 'Cursos & Certificações' },
    items: [
      { degree: 'Análise e Desenvolvimento de Sistemas' },
      { degree: 'Curso de Desenvolvimento Web Full-Stack' },
      { degree: 'GFT Start #7 - Java' },
      { degree: 'Quality Assurance: Plano de Testes e Gestão de Bugs' },
    ],
  },
  contact: {
    heading: 'contato',
    description:
      'Estou aberto a novas oportunidades, projetos freelance e conversas sobre tecnologia. Se você tem um projeto em mente ou quer trocar uma ideia, pode me chamar!',
    cta: 'Enviar mensagem',
  },
  hint: {
    l1: '// wanna see in English? 👀',
    l2: '"EN"',
    l3: '// TOGGLE IT IN MENUUU  ↑',
    l4: '// the resume also change 😉',
  },
}
