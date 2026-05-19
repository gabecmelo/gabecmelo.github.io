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
      '3 anos construindo aplicações escaláveis com React e Node.js. Experiência com otimização de infraestrutura cloud AWS, testes automatizados, acessibilidade, e CI/CD com deploy automatizado na Oracle Cloud.',
    cta: { contact: 'Contato', resume: 'Currículo' },
    resume: '/Gabriel_Cabral_Melo_Engenheiro_De_Software_Full_Stack.pdf',
  },
  about: {
    heading: 'sobre-mim',
    bio: [
      'Olá! Sou <strong>Gabriel Cabral Melo</strong>, Engenheiro de Software Full Stack com 3 anos de experiência desenvolvendo aplicações modernas e escaláveis com JavaScript e TypeScript — do frontend ao backend, passando por infraestrutura, testes automatizados e ambientes cloud.',
      'Construo interfaces robustas em <accent>React</accent> e ecossistemas de backend eficientes em <accent>Node.js e NestJS</accent>, com experiência sólida em TypeScript e arquitetura de microsserviços. Sou especialista em garantir a qualidade de software por meio de testes automatizados (Playwright, Vitest) e acessibilidade (WCAG), entregando sob metodologias ágeis.',
      'Tenho histórico comprovado na otimização de infraestrutura cloud — redução de 81% nos custos da AWS e 50% na latência do sistema — com forte atuação em <accent>pipelines de CI/CD e deploy</accent>, incluindo deploy automatizado em ambientes cloud como Oracle Cloud. Sou ativo no uso de ferramentas de <accent>AI-Assisted Development</accent> para acelerar entregas.',
      'Sou graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> pela UniCesumar e falo Português (nativo), Inglês (profissional) e Espanhol (conversacional).',
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
        role: 'Engenheiro de Software Full Stack Principal',
        description:
          'Responsável pelo desenvolvimento full stack de dois produtos principais: o Conecta Paraná (NestJS, Angular e Flutter) e o Orçamento Fácil (Firebase e React), liderando decisões arquiteturais, infraestrutura cloud e governança de código.',
        bullets: [
          'Liderei rotinas de code review focadas em performance e boas práticas, reduzindo em mais de 60% a incidência de bugs em produção e garantindo a consistência da base de código.',
          'Desenhei contratos de API padronizados e implementei interceptadores globais no frontend para tratamento de erros, reduzindo o tempo de depuração em produção e melhorando a experiência do usuário.',
          'Desenvolvi Guards customizados e decoradores reutilizáveis no NestJS para autenticação e autorização, eliminando código duplicado e acelerando a criação de novas rotas seguras.',
          'Estruturei o ambiente Docker e pipelines de CI/CD (GitHub Actions) com deploy automatizado na Oracle Cloud, reduzindo o tempo de setup de novos desenvolvedores de dias para minutos.',
          'Elevei a cobertura de testes do app mobile de 60% para 96% utilizando testes de mutação (Stryker), blindando fluxos críticos de negócio.',
          'Integrei ferramentas de IA (Claude Code) ao fluxo de trabalho, otimizando o ciclo de entrega de funcionalidades complexas de semanas para menos de 2 dias.',
        ],
      },
      {
        role: 'Software Development Engineer in Test (SDET) / Engenheiro de Software',
        description:
          'Atuação estratégica na garantia de qualidade, auditoria de performance e arquitetura de testes automatizados para sistemas robustos baseados em Nuxt 4 (Vue.js) e Laravel 12.',
        bullets: [
          'Realizei auditorias e implementei testes de carga utilizando K6 nos ecossistemas do projeto, identificando e corrigindo gargalos de complexidade algorítmica (Big O) e memory leaks sob alta concorrência.',
          'Estruturei e implantei a infraestrutura de testes automatizados utilizando Playwright (E2E) e Vitest (Unitários) com TypeScript, integrando testes de mutação para garantir cobertura efetiva acima de 80%.',
          'Desenvolvi e acelerei a baseline de automação do time utilizando LLMs e programação agêntica para o design e execução autônoma de cenários de testes complexos.',
          'Conduzi code reviews de funcionalidades críticas e validação de contratos de APIs, combinando testes assistidos por IA para reduzir atrasos em entregas e mitigar bugs.',
        ],
      },
      {
        role: 'Engenheiro de Software Backend',
        description:
          'Atuação focada em engenharia de backend, refatoração de sistemas legados, otimização de custos de infraestrutura e design de arquitetura de microsserviços para múltiplos clientes.',
        bullets: [
          'Reduzi custos de infraestrutura AWS em 81% (US$ 3.4k/mês) e latência em 50% através da otimização de índices no MongoDB e automação de pipelines de limpeza, permitindo o downgrade seguro de uma instância M80 para M40.',
          'Recuperei US$ 70k anuais em receita ao refatorar automações críticas e integrações de APIs em Node.js (Axios/Express), eliminando falhas de comunicação e erros contratuais no processamento de dados.',
          'Desenhei e implementei a arquitetura de backend para um sistema de tickets em tempo real baseado em Webhooks e mensageria, reduzindo a latência de processamento de eventos em 35%.',
          'Reduzi o MTTR em 50% e garanti deploys confiáveis através da orquestração de containers com Docker e Kubernetes, integrados a pipelines de CI/CD via GitHub Actions.',
        ],
      },
      {
        role: 'Instrutor de Desenvolvimento Front End',
        description:
          'Atuação na mentoria e aceleração profissional de desenvolvedores, com foco em qualidade de código, arquitetura frontend e preparação para o mercado de trabalho.',
        bullets: [
          'Mentorei mais de 50 desenvolvedores no ecossistema React, TypeScript e JavaScript, acelerando a proficiência técnica do grupo em mais de 30% através de planos de estudo direcionados.',
          'Conduzi workshops práticos e rotinas de code review, elevando o padrão de qualidade de código dos alunos de acordo com as boas práticas do mercado.',
          'Estruturei roteiros técnicos e documentações para mentorias, padronizando o material de apoio e servindo de referência para o time de instrutores.',
          'Otimizei o fluxo de suporte via Slack, reduzindo o tempo médio de resolução de dúvidas técnicas de 40 para 20 minutos.',
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
