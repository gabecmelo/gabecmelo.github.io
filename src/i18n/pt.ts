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
      'Olá! Sou <strong>Gabriel Cabral Melo</strong>, Engenheiro de Software Full Stack com mais de 3 anos de experiência construindo aplicações escaláveis — do frontend ao backend, passando por infraestrutura, testes automatizados e ambientes cloud.',
      'Especializado em <accent>React, Angular e Node.js</accent>, tenho experiência sólida com TypeScript, RxJS, arquitetura monolítica e microsserviços. Histórico comprovado em otimização de performance, acessibilidade (WCAG), testes automatizados com Playwright, Vitest e Testing Library, e entrega contínua com metodologias ágeis (Scrum/Jira).',
      'No backend e infraestrutura, construo APIs de produção, serviços de automação e integrações robustas com TypeScript e Node.js — incluindo redução de 81% em custos AWS e 50% na latência de sistemas. Atuo ativamente com <accent>AI-Assisted Development</accent>: agentes de IA, LLMs (Claude, OpenAI), pipelines RAG, LangChain e programação agêntica, entregando produtos nativos de IA em produção, não apenas protótipos.',
      'Sou graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> pela UniCesumar e falo Português (nativo), Inglês (fluente) e Espanhol.',
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
    // SoftKoe Games — side project (reservado para futura seção)
    // {
    //   role: 'Fundador e Desenvolvedor de Jogos Líder',
    //   description: 'Fundador e desenvolvedor líder em estúdio de jogos web e Roblox, liderando roadmap técnico e desenvolvimento de gameplay.',
    //   bullets: [
    //     'Liderei roadmaps técnicos e mentoria via pair programming, aumentando produtividade do time em 50%.',
    //     'Refatorei integrações de APIs desenvolvidas pelo time, elevando performance e eficiência em 70%.',
    //     'Otimizei arquitetura de componentes Angular, reduzindo tempo de carregamento de 3s para 1s.',
    //     'Desenvolvi lógicas internas complexas em Lua com Rojo e VS Code, garantindo 100% de estabilidade sistêmica.',
    //     'Projetei Design System modular para interfaces e ambientes, acelerando criação de assets em 40%.',
    //     'Otimizei ambientes 3D e scripts, resultando em 30% de ganho de FPS em dispositivos mobile.',
    //   ],
    // },
    items: [
      {
        role: 'Engenheiro de Software Full Stack Pleno com Foco em Qualidade',
        description:
          'Participo do desenvolvimento e na garantia de qualidade dos sistemas do Grupo UND, com foco em arquitetura de testes automatizados e auditorias de performance nos stacks Nuxt 4 (Vue.js) e Laravel 12.',
        bullets: [
          'Realizei auditorias de performance em Nuxt 4 (Vue.js) e Laravel 12, identificando e corrigindo gargalos críticos relacionados à complexidade algorítmica (Big O) e memory leaks em event listeners globais.',
          'Estruturei e implantei infraestrutura de testes automatizados com Playwright (E2E) e Vitest (Unitário), integrando Mutation Testing para atingir cobertura de código efetiva acima de 80%.',
          'Acelerei a baseline de automação em aproximadamente 60% utilizando LLMs e programação agêntica para design e execução de casos de teste complexos.',
          'Conduzi code reviews de funcionalidades críticas e testes de API via IA (PRDs para validação de endpoints), combinando testes manuais, automatizados e assistidos por IA, aumentando a satisfação de clientes internos em 30% e reduzindo atrasos em entregas em 40%.',
        ],
      },
      {
        role: 'Engenheiro de Software Full Stack Pleno',
        description:
          'Responsável pelo desenvolvimento full stack de dois produtos principais: o Conecta Paraná (guia urbano em monorepo com NestJS, Angular SPA e Flutter) e o Orçamento Fácil (aplicativo mobile para construção civil em React e Capacitor).',
        bullets: [
          'Estruturei infraestrutura completa de monorepo (NestJS + Angular SPA + Flutter) com 4 ambientes Docker, CI/CD via GitHub Actions e deploy automático ARM64 em VPS Oracle, reduzindo setup de novos devs de dias para minutos.',
          'Desenvolvi componentes Angular com RxJS para gerenciamento reativo de estado e streams de dados assíncronos, aplicando boas práticas de performance e acessibilidade (WCAG).',
          'Utilizei Claude Code + Codex CLI para entregas contínuas, acelerando funcionalidades que levariam 2–3 semanas para menos de 2 dias de desenvolvimento, e auxiliando na configuração de CI/CD.',
          'Elevei a cobertura de testes do projeto Orçamento Fácil (app mobile) de 60% para 96% com Stryker (Mutation Testing), garantindo cobertura de mutantes em fluxos críticos de negócio.',
          'Integrei o Firebase ao aplicativo mobile Orçamento Fácil, desenvolvendo um sistema de auto-save automático com debounce para formulários complexos, elevando a confiabilidade da aplicação e reduzindo chamadas desnecessárias ao banco de dados.',
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
              'Recuperei US$ 70k anuais em receita ao mitigar erros contratuais via refatoração de cron jobs Node.js e integrações Axios/Express, reduzindo falhas em 60% e elevando a confiabilidade das tarefas em 45%.',
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
          'Como Instrutor Front End, mentorei turmas de desenvolvedores aspirantes em JavaScript, TypeScript e React, com foco em qualidade de código, boas práticas e aceleração do caminho para prontidão profissional.',
        bullets: [
          'Documentei aulas e estruturei roteiros para mentorias e workshops, apoiando o time de mentores na condução de conteúdos específicos e na resolução de dúvidas recorrentes da turma.',
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
      { label: 'AI-Assisted Dev' },
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
