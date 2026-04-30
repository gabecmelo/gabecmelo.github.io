import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Construction, Rocket } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'
import { useTranslation } from '../i18n/context'
import type { ProjectStructure, ProjectScreenshots } from '../types'

type Status = ProjectStructure['status']

const statusIcons: Record<Status, typeof Rocket> = {
  live: Rocket,
  wip: Construction,
  dev: Construction,
}

const statusColors: Record<Status, string> = {
  live: 'text-green-400 border-green-400/30 bg-green-400/10',
  wip: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  dev: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
}

function ProjectPreview({ screenshots, name, url }: { screenshots?: ProjectScreenshots; name: string; url?: string }) {
  if (!screenshots) {
    return (
      <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-surface to-bg border-b border-border">
        <span className="font-mono text-3xl text-border/40 select-none">{`{ }`}</span>
      </div>
    )
  }

  if (screenshots.type === 'desktop') {
    return (
      <div className="aspect-video w-full overflow-hidden border-b border-border bg-bg">
        <a href={url} target='_blank'>
          <img
            src={screenshots.images[0]}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        </a>
      </div>
    )
  }

  return (
    <div className="w-full border-b border-border bg-bg flex justify-center items-end gap-3 px-6 pt-5 pb-0 overflow-hidden">
      {screenshots.images.slice(0, 3).map((src, i) => (
        <div
          key={i}
          className="w-[26%] max-w-[90px] aspect-[9/19.5] rounded-t-xl overflow-hidden border border-border/60 shadow-lg shrink-0"
        >
          <img
            src={src}
            alt={`${name} screen ${i + 1}`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>{t.projects.heading}</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const StatusIcon = statusIcons[project.status]
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col hover:border-accent/40 transition-colors group"
            >
              <ProjectPreview screenshots={project.screenshots} name={project.name} url={project.live} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-mono font-bold text-text text-base group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <span className={`flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded border shrink-0 ${statusColors[project.status]}`}>
                    <StatusIcon size={11} />
                    {t.projects.status[project.status]}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {t.projects.items[i].description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-muted hover:text-accent text-xs font-mono transition-colors"
                    >
                      <Github size={14} />
                      {t.projects.links.code}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-muted hover:text-accent text-xs font-mono transition-colors"
                    >
                      <ExternalLink size={14} />
                      {t.projects.links.viewLive}
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-muted/50 text-xs font-mono">{t.projects.links.private}</span>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
