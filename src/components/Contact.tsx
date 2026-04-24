import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useTranslation } from '../i18n/context'

const contactLinks = [
  { Icon: Mail, label: 'contatogabemelo@gmail.com', href: 'mailto:contatogabemelo@gmail.com' },
  { Icon: Phone, label: '(44) 99113-0870', href: 'tel:+5544991130870' },
  { Icon: Github, label: 'github.com/gabecmelo', href: 'https://github.com/gabecmelo' },
  { Icon: Linkedin, label: 'linkedin.com/in/gabrielc-melo', href: 'https://linkedin.com/in/gabrielc-melo' }, // TODO: linkedin com param (?locale=pt-BR) se linguagem estiver em pt-br
]

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>{t.contact.heading}</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted text-lg leading-relaxed mb-6">
            {t.contact.description}
          </p>
          <a
            href="mailto:contatogabemelo@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-mono text-sm rounded transition-colors"
          >
            <Send size={16} />
            {t.contact.cta}
          </a>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          {contactLinks.map(({ Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 bg-surface border border-border rounded-lg px-5 py-3.5 text-muted hover:text-accent hover:border-accent/40 transition-colors group"
            >
              <Icon size={18} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
