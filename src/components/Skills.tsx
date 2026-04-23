import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiReact, SiAngular, SiVuedotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss, SiCapacitor,
  SiNodedotjs, SiNestjs, SiExpress, SiRedis,
  SiPostgresql, SiMongodb, SiFirebase, SiPrisma,
  SiVitest,
  SiDocker, SiKubernetes, SiGithubactions, SiNginx, SiLinux,
  SiLua,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscCode, VscBeaker, VscTerminalPowershell } from 'react-icons/vsc'
import SectionHeading from './SectionHeading'

interface SkillItem {
  name: string
  Icon?: IconType
  color?: string
}

interface Group {
  label: string
  skills: SkillItem[]
}

const skillGroups: Group[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
      { name: 'Vue.js', Icon: SiVuedotjs, color: '#42B883' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'RxJS', color: '#B7178C' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Capacitor', Icon: SiCapacitor, color: '#119EFF' },
    ],
  },
  {
    label: 'Backend & APIs',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
      { name: 'Express', Icon: SiExpress, color: '#8b949e' },
      { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
      { name: 'REST / Webhooks', Icon: VscTerminalPowershell, color: '#8b949e' },
      { name: 'OpenAPI/Swagger', color: '#6BA539' },
    ],
  },
  {
    label: 'Bancos de Dados',
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Firestore', Icon: SiFirebase, color: '#FFCA28' },
      { name: 'Prisma', Icon: SiPrisma, color: '#8b949e' },
    ],
  },
  {
    label: 'Testes',
    skills: [
      { name: 'Playwright', Icon: VscBeaker, color: '#2EAD33' },
      { name: 'Vitest', Icon: SiVitest, color: '#6E9F18' },
      { name: 'Testing Library', Icon: SiReact, color: '#E33332' },
      { name: 'Stryker / Mutation', color: '#8b949e' },
      { name: 'Gherkin / BDD', color: '#8b949e' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Nginx', Icon: SiNginx, color: '#009639' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    ],
  },
  {
    label: 'AI & Game Dev',
    skills: [
      { name: 'Claude Code', Icon: VscCode, color: '#a855f7' },
      { name: 'Codex CLI', Icon: VscCode, color: '#8b949e' },
      { name: 'RAG Pipelines', color: '#8b949e' },
      { name: 'Lua / Roblox', Icon: SiLua, color: '#00007C' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>skills</SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="bg-surface border border-border rounded-lg p-5"
          >
            <h3 className="font-mono text-sm font-bold text-accent mb-4 pb-2 border-b border-border">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => {
                const Icon = skill.Icon
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 bg-bg border border-border rounded px-2 py-1.5 text-xs font-mono text-muted hover:border-accent/40 hover:text-text transition-colors"
                  >
                    {Icon && <Icon size={13} color={skill.color} />}
                    {skill.name}
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
