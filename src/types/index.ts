export interface ExperienceStructure {
  company: string
  periodStart: string
  periodEnd: string | 'present'
  location: 'remote'
  tags: string[]
  subProjects?: Array<{ name: string }>
}

export interface ProjectScreenshots {
  type: 'desktop' | 'mobile'
  images: string[]
}

export interface ProjectStructure {
  name: string
  tags: string[]
  github?: string
  live?: string
  status: 'live' | 'wip' | 'dev'
  screenshots?: ProjectScreenshots
}

export interface EducationStructure {
  institution: string
  period: string
  type: 'academic' | 'course'
}
