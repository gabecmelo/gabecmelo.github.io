import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Stat } from '../types'
import SectionHeading from './SectionHeading'

const stats: Stat[] = [
  { value: '3+', label: 'anos de experiência' },
  { value: '5', label: 'empresas atendidas' },
  { value: '3', label: 'idiomas' },
  { value: '∞', label: 'vontade de aprender' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeading>sobre-mim</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted leading-relaxed"
        >
          <p>
            Olá! Sou <span className="text-text font-medium">Gabriel Cabral Melo</span>,
            desenvolvedor Fullstack com mais de 3 anos de experiência construindo aplicações
            escaláveis — do backend ao frontend, passando por infraestrutura e liderança técnica.
          </p>
          <p>
            Tenho experiência sólida com <span className="text-accent">React, Angular, Vue,
            Node.js e NestJS</span>, além de arquitetura de microsserviços, CI/CD e
            testes automatizados. Atualmente também atuo com{' '}
            <span className="text-accent">AI-Assisted Development</span> usando Claude Code,
            Codex CLI e RAG Pipelines para acelerar entregas sem abrir mão de qualidade.
          </p>
          <p>
            Como Tech Lead no{' '}
            <span className="text-text">Conecta Paraná</span> e fundador da{' '}
            <span className="text-text">SoftKoe Games</span>, combino visão de produto
            com execução técnica — definindo arquitetura, conduzindo sprints e mentorando times.
          </p>
          <p>
            Sou graduando em <span className="text-text">Análise e Desenvolvimento de Sistemas</span>{' '}
            pela UniCesumar e falo Português (nativo), Inglês e Espanhol.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(stat => (
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
