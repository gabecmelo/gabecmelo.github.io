import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'
import { useTranslation } from '../i18n/context'

export default function Experience() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>{t.experience.heading}</SectionHeading>

      <div className="relative">
        <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experience.map((item, i) => {
            const tx = t.experience.items[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                <div className="absolute left-[-4px] md:left-[20px] top-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg" />

                <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-mono font-bold text-text text-base sm:text-lg leading-tight">
                        {tx.role}
                      </h3>
                      <p className="text-accent font-medium text-sm mt-0.5">{item.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <Calendar size={12} />
                        {item.periodStart} – {item.periodEnd === 'present' ? t.experience.present : item.periodEnd}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <MapPin size={12} />
                        {t.experience.remote}
                      </span>
                    </div>
                  </div>

                  {tx.description && (
                    <p className="text-muted text-sm mb-4">{tx.description}</p>
                  )}

                  {tx.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {tx.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent shrink-0 mt-0.5">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {tx.subProjects && item.subProjects && (
                    <div className="space-y-4">
                      {tx.subProjects.map((sub, k) => (
                        <div key={k} className="border-l-2 border-accent/30 pl-4">
                          <p className="font-mono text-sm font-semibold text-accent-light mb-2">
                            {'{'} {item.subProjects![k].name} {'}'}
                          </p>
                          <ul className="space-y-2">
                            {sub.bullets.map((bullet, l) => (
                              <li key={l} className="flex gap-2 text-sm text-muted">
                                <span className="text-accent/60 shrink-0 mt-0.5">▸</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
