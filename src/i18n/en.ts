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
    role: 'Fullstack Developer',
    description:
      '3+ years building modern applications with React, Angular, Vue, and Node.js. Tech Lead on large-scale projects, CI/CD, and AI\u2011Assisted Development.',
    cta: { contact: 'Contact', resume: 'Resume' },
    resume: "/Gabriel_Cabral_Melo_EN.pdf",
  },
  about: {
    heading: 'about-me',
    bio: [
      "Hi! I'm <strong>Gabriel Cabral Melo</strong>, a Fullstack developer with over 3 years of experience building scalable applications — from backend to frontend, including infrastructure and technical leadership.",
      'I have solid experience with <accent>React, Angular, Vue, Node.js, and NestJS</accent>, along with microservices architecture, CI/CD, and automated testing. I also work with <accent>AI-Assisted Development</accent> using Claude Code, Codex CLI, and RAG Pipelines to accelerate delivery without compromising quality.',
      'As Tech Lead at <strong>Conecta Paraná</strong> and founder of <strong>SoftKoe Games</strong>, I combine product vision with technical execution — defining architecture, running sprints, and mentoring teams.',
      'I am pursuing a degree in <strong>Systems Analysis and Development</strong> at UniCesumar and speak Portuguese (native), English, and Spanish.',
    ],
    stats: [
      { value: '3+', label: 'years of experience' },
      { value: '5', label: 'companies served' },
      { value: '3', label: 'languages' },
      { value: '∞', label: 'passion for learning' },
    ],
  },
  experience: {
    heading: 'experience',
    remote: 'Remote',
    items: [
      {
        role: 'Quality Engineer Lead / Frontend Developer',
        description:
          'Quality leadership and frontend development on a financial platform with Nuxt 4 and Laravel 12.',
        bullets: [
          'Performed performance audits on Nuxt 4 (Vue.js) and Laravel 12, identifying and fixing memory leaks and algorithmic complexity bottlenecks.',
          'Architected and deployed a testing infrastructure with Playwright (E2E) and Vitest (unit) + Mutation Testing, achieving over 80% effective code coverage.',
          'Accelerated automation baseline by ~60% using LLMs and agentic programming to design and execute complex test cases.',
          'Produced 30+ pages of QA technical documentation covering financial and regulatory business rules and risk-prioritized Gherkin test suites.',
          'Conducted code reviews and AI-assisted API testing, increasing internal client satisfaction by 30% and reducing delivery delays by 40%.',
        ],
      },
      {
        role: 'Senior Fullstack Developer & Tech Lead',
        description:
          'Tech Lead on monorepo projects with DDD architecture, complete CI/CD, and teams of 6+ developers.',
        bullets: [
          'Led the architecture of Conecta Paraná with DDD, separating business contexts between mobile (Flutter) and web admin (Angular).',
          'Architected a NestJS + Angular + Flutter monorepo with 4 Docker environments and CI/CD via GitHub Actions with ARM64 auto-deploy on Oracle Cloud.',
          'Used Claude Code to accelerate deliveries that would take 2–3 weeks to less than 2 days of development.',
          'Raised test coverage of Orçamento Fácil from 60% to 96% with Stryker (Mutation Testing).',
          'Implemented AI RAG pipelines in Docker (Ralph Loops), autonomously creating PRDs and developing features.',
          'Mentored a team of 6 junior developers as Tech Lead and DevOps, coordinating sprints via Jira/Scrum.',
        ],
      },
      {
        role: 'Founder & Lead Game Developer',
        description:
          'Founder and lead developer at a web and Roblox games studio, leading the technical roadmap and gameplay development.',
        bullets: [
          'Led technical roadmaps and pair programming mentorship, increasing team productivity by 50%.',
          'Refactored team-built API integrations, improving performance and code efficiency by 70%.',
          'Optimized Angular component architecture, reducing interface load time from 3s to 1s.',
          'Developed complex internal logic in Lua with Rojo and VS Code, ensuring 100% systemic stability.',
          'Designed a modular Design System for interfaces and environments, speeding up asset creation by 40%.',
          'Optimized 3D environments and scripts, resulting in a 30% FPS improvement on mobile devices.',
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
              'Recovered US$ 70k in annual revenue by mitigating contractual errors through refactoring Node.js cron jobs and Axios/Express API integrations, reducing failures by 60%.',
              'Reduced MTTR by 50% and ensured zero-downtime deploys through CI/CD pipeline orchestration with GitHub Actions, Docker, and Kubernetes.',
            ],
          },
          {
            bullets: [
              'Reduced AWS infrastructure costs by 81% (US$ 3.4k/month) through MongoDB index optimization and data cleanup pipeline automation, enabling downsizing from M80 to M40 instances.',
              'Reduced latency by 50% through Redis caching layers and complex MongoDB query optimization.',
              'Built a real-time ticket system in React using Webhooks, reducing data update latency by 35%.',
            ],
          },
        ],
      },
      {
        role: 'Front End Development Instructor',
        description:
          'Mentoring and instruction of developers in JavaScript, TypeScript, and React.',
        bullets: [
          'Mentored developers in JavaScript, TypeScript, and React, accelerating technical proficiency by 40%.',
          'Conducted code reviews and workshops, improving code quality for over 50 developers.',
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
          'Mobile app for civil construction budgets with 50+ real-time calculators (< 500ms) and 96% test coverage via Mutation Testing with Stryker.',
      },
      {
        description:
          'Sports betting platform built with Vue.js, featuring a responsive interface and modern user experience.',
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
      { label: 'AI & Game Dev' },
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
