import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">{'<'}</span>
          gabe
          <span className="text-accent">{'/>'}</span>
          {' '}© {new Date().getFullYear()} Gabriel Cabral Melo
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/gabecmelo"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/gabrielc-melo"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:contatogabemelo@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
