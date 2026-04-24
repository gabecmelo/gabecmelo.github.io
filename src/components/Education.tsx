import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data/education'
import { useTranslation } from '../i18n/context'

export default function Education() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const academic = education
    .map((e, i) => ({ ...e, degree: t.education.items[i].degree }))
    .filter(e => e.type === 'academic')

  const courses = education
    .map((e, i) => ({ ...e, degree: t.education.items[i].degree }))
    .filter(e => e.type === 'course')

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>{t.education.heading}</SectionHeading>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-sm text-accent font-semibold mb-4">
            <GraduationCap size={16} />
            {t.education.sections.academic}
          </h3>
          <div className="space-y-4">
            {academic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-colors"
              >
                <p className="font-mono font-bold text-text text-sm">{item.degree}</p>
                <p className="text-accent text-sm mt-1">{item.institution}</p>
                <p className="text-muted text-xs font-mono mt-2">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-mono text-sm text-accent font-semibold mb-4">
            <BookOpen size={16} />
            {t.education.sections.courses}
          </h3>
          <div className="space-y-4">
            {courses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                className="bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-colors"
              >
                <p className="font-mono font-bold text-text text-sm">{item.degree}</p>
                <p className="text-accent text-sm mt-1">{item.institution}</p>
                <p className="text-muted text-xs font-mono mt-2">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
