import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import { useTranslation } from '../i18n/context'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const { t } = useTranslation()

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-accent text-sm mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-4"
          >
            Gabriel
            <br />
            <span className="text-accent">Cabral Melo</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="font-mono text-lg sm:text-xl text-muted mb-2"
          >
            {'>'} <span className="text-accent">{t.hero.role}</span>
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="text-muted text-base leading-relaxed mb-8 max-w-md"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-mono text-sm rounded transition-colors"
            >
              <Mail size={16} />
              {t.hero.cta.contact}
            </a>
            <a
              href={t.hero.resume}
              download
              className="flex items-center gap-2 px-5 py-2.5 border border-accent text-accent hover:bg-accent/10 font-mono text-sm rounded transition-colors"
            >
              <FileText size={16} />
              {t.hero.cta.resume}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.6)} className="flex gap-4">
            <a
              href="https://github.com/gabecmelo"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gabrielc-melo"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img
                src="/avatar.jpg"
                alt="Gabriel Cabral Melo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
