export interface ExperienceTranslation {
  role: string
  description: string
  bullets: string[]
  subProjects?: Array<{ bullets: string[] }>
}

export interface Translations {
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    contact: string
  }
  hero: {
    greeting: string
    role: string
    description: string
    cta: { contact: string; resume: string }
  }
  about: {
    heading: string
    bio: string[]
    stats: Array<{ value: string; label: string }>
  }
  experience: {
    heading: string
    remote: string
    items: ExperienceTranslation[]
  }
  projects: {
    heading: string
    status: { live: string; wip: string; dev: string }
    links: { code: string; viewLive: string; private: string }
    items: Array<{ description: string }>
  }
  skills: {
    heading: string
    groups: Array<{ label: string }>
  }
  education: {
    heading: string
    sections: { academic: string; courses: string }
    items: Array<{ degree: string }>
  }
  contact: {
    heading: string
    description: string
    cta: string
  }
}
