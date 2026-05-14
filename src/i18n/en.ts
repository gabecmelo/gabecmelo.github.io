import type { Translations } from './types'

export const en: Translations = {
  nav: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    education: 'education',
    contact: 'contact',
  },
  hero: {
    greeting: "Hello, world! I'm",
    role: 'Full Stack Software Engineer',
    description:
      '3+ years building scalable applications with React, Angular, Vue, and Node.js/NestJS. Full stack architecture, automated testing, CI/CD, and AI-Assisted Development.',
    cta: { contact: 'Contact', resume: 'Resume' },
    resume: '/Gabriel_Cabral_Melo_EN.pdf',
  },
  about: {
    heading: 'about-me',
    bio: [
      "Hi! I'm <strong>Gabriel Cabral Melo</strong>, a Full Stack Software Engineer with over 3 years of experience building scalable applications — from backend to frontend, including infrastructure and technical leadership.",
      'I have solid experience with <accent>React, Angular, Vue, Node.js, NestJS, and TypeScript</accent>, along with RxJS, microservices architecture, performance optimization, accessibility (WCAG), and REST API integration. I also work with <accent>AI-Assisted Development</accent> using Claude Code, Codex CLI, and RAG Pipelines to accelerate delivery without compromising quality.',
      'As Tech Lead at <strong>Conecta Paraná</strong> and founder of <strong>C&S Softwares</strong>, I combine product vision with technical execution — defining architecture, running sprints, and mentoring teams.',
      'I am pursuing a degree in <strong>Systems Analysis and Development</strong> at UniCesumar and speak Portuguese (native), English, and Spanish.',
    ],
    stats: [
      { value: '3+', label: 'years of experience' },
      { value: '8', label: 'companies served' },
      { value: '3', label: 'languages' },
      { value: '∞', label: 'passion for learning' },
    ],
  },
  experience: {
    heading: 'experience',
    remote: 'Remote',
    present: 'Present',
    // SoftKoe Games — side project (reserved for future section)
    // {
    //   role: 'Founder & Lead Game Developer',
    //   description: 'Founder and lead developer at a web and Roblox games studio, leading the technical roadmap and gameplay development.',
    //   bullets: [
    //     'Led technical roadmaps and pair programming mentorship, increasing team productivity by 50%.',
    //     'Refactored team-built API integrations, improving performance and code efficiency by 70%.',
    //     'Optimized Angular component architecture, reducing interface load time from 3s to 1s.',
    //     'Developed complex internal logic in Lua with Rojo and VS Code, ensuring 100% systemic stability.',
    //     'Designed a modular Design System for interfaces and environments, speeding up asset creation by 40%.',
    //     'Optimized 3D environments and scripts, resulting in a 30% FPS improvement on mobile devices.',
    //   ],
    // },
    items: [
      {
        role: 'Full Stack Software Engineer',
        description:
          "Part of the development and quality assurance team for Grupo UND's systems, focusing on automated test architecture and performance audits across Nuxt 4 (Vue.js) and Laravel 12 stacks.",
        bullets: [
          'Performed performance audits on Nuxt 4 (Vue.js) and Laravel 12, identifying and fixing critical bottlenecks related to algorithmic complexity (Big O) and memory leaks in global event listeners.',
          'Structured and deployed automated testing infrastructure with Playwright (E2E) and Vitest (Unit), integrating Mutation Testing to achieve effective code coverage above 80%.',
          'Accelerated the automation baseline by approximately 60% using LLMs and agentic programming for the design and execution of complex test cases.',
          'Conducted code reviews of critical features and AI-assisted API testing (PRDs for endpoint validation), combining manual, automated, and AI-assisted tests, increasing internal client satisfaction by 30% and reducing delivery delays by 40%.',
        ],
      },
      {
        role: 'Full Stack Software Engineer',
        description:
          'Responsible for full stack development of two main products: Conecta Paraná (urban guide in a NestJS monorepo with Angular SPA and Flutter) and Orçamento Fácil (mobile app for civil construction in React and Capacitor).',
        bullets: [
          'Structured complete monorepo infrastructure (NestJS + Angular SPA + Flutter) with 4 Docker environments, CI/CD via GitHub Actions, and automated ARM64 deployment on Oracle VPS, reducing new developer setup from days to minutes.',
          'Developed Angular components with RxJS for reactive state management and async data streams, applying best practices for performance and accessibility (WCAG).',
          'Used Claude Code + Codex CLI for continuous deliveries, accelerating features that would take 2–3 weeks to under 2 days of development, and assisting in CI/CD configuration.',
          'Elevated test coverage of the Orçamento Fácil project (mobile app) from 60% to 96% with Stryker (Mutation Testing), ensuring mutant coverage in critical business flows.',
          'Integrated Firebase into the Orçamento Fácil mobile app, developing an auto-save system with debounce for complex forms, increasing application reliability and reducing unnecessary database calls.',
        ],
      },
      {
        role: 'Full Stack Software Engineer',
        description:
          'Consultant on large-scale projects for international clients, focusing on microservices, cost reduction, and system reliability.',
        bullets: [],
        subProjects: [
          {
            bullets: [
              'Recovered US$ 70k annually in revenue by mitigating contractual errors through refactoring Node.js cron jobs and Axios/Express integrations, reducing failures by 60% and increasing task reliability by 45%.',
              'Reduced MTTR by 50% and ensured zero-downtime deployments with GitHub Actions, Docker, and Kubernetes.',
              'Developed Node.js auth/log middleware to standardize the microservices architecture, onboarding 3 new services within the first month.',
            ],
          },
          {
            bullets: [
              'Reduced AWS infrastructure costs by 81% (US$ 3.4k/month) through MongoDB index optimization and data cleanup pipeline automation, enabling instance downsizing from M80 to M40.',
              'Reduced latency by 50% through Redis caching layers and complex MongoDB query optimization.',
              'Built a real-time ticketing system in React using Webhooks, reducing data update latency by 35%.',
              'Documented APIs via OpenAPI/Swagger, optimizing integration and cutting errors in half.',
            ],
          },
        ],
      },
      {
        role: 'Front End Developer Instructor',
        description:
          'As a Front End Instructor, mentored cohorts of aspiring developers in JavaScript, TypeScript, and React, focusing on code quality, best practices, and accelerating the path to professional readiness.',
        bullets: [
          'Documented classes and structured scripts for mentorships and workshops, supporting the mentors team in conducting specific content and resolving recurring class questions.',
          'Mentored developers in JavaScript, TypeScript, and React, accelerating technical proficiency by 40%.',
          'Conducted code reviews and workshops, elevating code quality for over 50 developers.',
          'Optimized course materials and Slack support, reducing ticket resolution time from 40 to 20 minutes.',
        ],
      },
    ],
  },
  projects: {
    heading: 'projects',
    status: { live: 'Live', wip: 'In testing', dev: 'In development' },
    links: { code: 'Code', viewLive: 'View live', private: 'private repository' },
    items: [
      {
        description:
          'Citizen platform with mobile app (Flutter) and web backoffice (Angular), architected with DDD in a NestJS monorepo. Complete CI/CD with automatic ARM64 deployment on Oracle Cloud.',
      },
      {
        description:
          'A simulated betting platform built with Vue.js, featuring a responsive interface and modern UX designed for technical demonstration and testing purposes.',
      },
      {
        description:
          'Mobile app for civil construction budgets with 50+ real-time calculators (< 500ms) and 96% test coverage via Mutation Testing with Stryker.',
      },
      {
        description:
          'React application for managing and creating tabletop RPG characters, with interactive character sheets and dice rolling systems.',
      },
    ],
  },
  skills: {
    heading: 'skills',
    groups: [
      { label: 'Frontend' },
      { label: 'Backend & APIs' },
      { label: 'Databases' },
      { label: 'Testing' },
      { label: 'Cloud & DevOps' },
      { label: 'AI-Assisted Dev' },
    ],
  },
  education: {
    heading: 'education',
    sections: { academic: 'Academic', courses: 'Courses & Certifications' },
    items: [
      { degree: 'Systems Analysis and Development' },
      { degree: 'Full-Stack Web Development Bootcamp' },
      { degree: 'GFT Start #7 - Java' },
      { degree: 'Quality Assurance: Test Planning and Bug Management' },
    ],
  },
  contact: {
    heading: 'contact',
    description:
      "I'm open to new opportunities, freelance projects, and conversations about technology. If you have a project in mind or just want to connect, feel free to reach out!",
    cta: 'Send message',
  },
  hint: {
    l1: '// quer ver em Português? 👀',
    l2: '"PT"',
    l3: '// TROQUE NO MENUUUU ↑',
    l4: '// o curriculo também muda 😉',
  },
}
