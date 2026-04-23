export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: string
  bullets: string[]
  subProjects?: SubProject[]
  tags: string[]
}

export interface SubProject {
  name: string
  bullets: string[]
}

export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  status: 'live' | 'wip' | 'dev'
}

export interface SkillGroup {
  label: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon?: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  type: 'academic' | 'course'
}

export interface Stat {
  value: string
  label: string
}
