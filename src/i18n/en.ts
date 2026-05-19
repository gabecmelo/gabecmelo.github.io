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
      '3 years building scalable applications with React and Node.js. Experience with AWS cloud infrastructure optimization, automated testing, accessibility, and CI/CD with automated deployment to Oracle Cloud.',
    cta: { contact: 'Contact', resume: 'Resume' },
    resume: '/Gabriel_Cabral_Melo_Full_Stack_Software_Engineer.pdf',
  },
  about: {
    heading: 'about-me',
    bio: [
      "Hi! I'm <strong>Gabriel Cabral Melo</strong>, a Full Stack Software Engineer with 3 years of experience developing modern, scalable applications with JavaScript and TypeScript — from frontend to backend, through infrastructure, automated testing, and cloud environments.",
      'I build robust interfaces in <accent>React</accent> and efficient backend ecosystems in <accent>Node.js and NestJS</accent>, with solid experience in TypeScript and microservices architectures. I specialize in ensuring software quality through automated testing (Playwright, Vitest) and accessibility (WCAG), delivering under agile methodologies.',
      'I have a proven track record in cloud infrastructure optimization — an 81% reduction in AWS costs and 50% in system latency — with strong experience in <accent>CI/CD and deployment pipelines</accent>, including automated deployment to cloud environments such as Oracle Cloud. I am an active user of <accent>AI-Assisted Development</accent> tools to accelerate deliveries.',
      'I am pursuing a degree in <strong>Systems Analysis and Development</strong> at UniCesumar and speak Portuguese (native), English (professional), and Spanish (conversational).',
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
        role: 'Principal Full Stack Software Engineer',
        description:
          'Responsible for the full stack development of two main products — Conecta Paraná (NestJS, Angular, and Flutter) and Orçamento Fácil (Firebase and React) — leading architectural decisions, cloud infrastructure, and code governance.',
        bullets: [
          'Led code review routines focused on performance and best practices, reducing the incidence of production bugs by more than 60% and ensuring codebase consistency.',
          'Designed standardized API contracts and implemented global frontend interceptors for error handling, reducing production debugging time and improving the user experience.',
          'Developed custom Guards and reusable decorators in NestJS for authentication and authorization, eliminating duplicated code and accelerating the creation of new secure routes.',
          'Structured the Docker environment and CI/CD pipelines (GitHub Actions) with automated deployment to Oracle Cloud, reducing new developer setup time from days to minutes.',
          "Raised the mobile app's test coverage from 60% to 96% using mutation testing (Stryker), shielding critical business flows.",
          'Integrated AI tools (Claude Code) into the workflow, optimizing the delivery cycle of complex features from weeks to under 2 days.',
        ],
      },
      {
        role: 'Software Development Engineer in Test (SDET) / Software Engineer',
        description:
          'Strategic role in quality assurance, performance auditing, and automated test architecture for robust systems based on Nuxt 4 (Vue.js) and Laravel 12.',
        bullets: [
          'Performed audits and implemented load testing using K6 across the project ecosystems, identifying and fixing algorithmic complexity bottlenecks (Big O) and memory leaks under high concurrency.',
          'Structured and deployed the automated testing infrastructure using Playwright (E2E) and Vitest (Unit) with TypeScript, integrating mutation testing to ensure effective coverage above 80%.',
          "Developed and accelerated the team's automation baseline using LLMs and agentic programming for the design and autonomous execution of complex test scenarios.",
          'Conducted code reviews of critical features and validation of API contracts, combining AI-assisted testing to reduce delivery delays and mitigate bugs.',
        ],
      },
      {
        role: 'Backend Software Engineer',
        description:
          'Backend engineering role focused on legacy system refactoring, infrastructure cost optimization, and microservices architecture design for multiple clients.',
        bullets: [
          'Reduced AWS infrastructure costs by 81% (US$ 3.4k/month) and latency by 50% through MongoDB index optimization and cleanup pipeline automation, enabling a safe downgrade from an M80 to an M40 instance.',
          'Recovered US$ 70k in annual revenue by refactoring critical automations and API integrations in Node.js (Axios/Express), eliminating communication failures and contractual errors in data processing.',
          'Designed and implemented the backend architecture for a real-time ticketing system based on Webhooks and messaging, reducing event processing latency by 35%.',
          'Reduced MTTR by 50% and ensured reliable deployments through container orchestration with Docker and Kubernetes, integrated into CI/CD pipelines via GitHub Actions.',
        ],
      },
      {
        role: 'Front End Development Instructor',
        description:
          'Mentoring and professional acceleration role for developers, focused on code quality, frontend architecture, and job market readiness.',
        bullets: [
          "Mentored more than 50 developers in the React, TypeScript, and JavaScript ecosystem, accelerating the group's technical proficiency by more than 30% through targeted study plans.",
          "Conducted hands-on workshops and code review routines, raising students' code quality standards in line with industry best practices.",
          'Structured technical scripts and documentation for mentoring sessions, standardizing support material and serving as a reference for the instructor team.',
          'Optimized the support flow via Slack, reducing the average resolution time for technical questions from 40 to 20 minutes.',
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
