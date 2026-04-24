import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useTranslation } from '../i18n/context'

function renderBioParagraph(html: string) {
  const processed = html
    .replace(/<accent>/g, '<span class="text-accent">')
    .replace(/<\/accent>/g, '</span>')
    .replace(/<strong>/g, '<span class="text-text font-medium">')
    .replace(/<\/strong>/g, '</span>')
  return processed
}

export default function About() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>{t.about.heading}</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted leading-relaxed"
        >
          {t.about.bio.map((paragraph, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: renderBioParagraph(paragraph) }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {t.about.stats.map(stat => (
            <div
              key={stat.label}
              className="bg-surface border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors"
            >
              <div className="font-mono text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
