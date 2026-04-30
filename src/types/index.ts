export interface ExperienceStructure {
  company: string
  period: string
  location: string
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
