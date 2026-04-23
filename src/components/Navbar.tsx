import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '../i18n/context'
import LangHint from './LangHint'

export default function Navbar() {
  const { lang, toggle, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showHint, setShowHint] = useState(
    () => !localStorage.getItem('lang-hint-seen'),
  )

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  })

  const dismissHint = () => {
    localStorage.setItem('lang-hint-seen', '1')
    setShowHint(false)
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleHamburgerClick = () => {
    if (showHint) dismissHint()
    setIsOpen(v => !v)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : 'bg-transparent border-bg'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-mono text-lg font-bold text-text hover:text-accent transition-colors"
        >
          <span className="text-accent">{'<'}</span>
          gabe
          <span className="text-accent">{'/>'}</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`font-mono text-sm transition-colors hover:text-accent ${
                  activeSection === link.href.slice(1) ? 'text-accent' : 'text-muted'
                }`}
              >
                <span className="text-accent/60">#</span>
                {link.label}
              </button>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={toggle}
              className="font-mono text-sm flex items-center gap-1 border border-border rounded px-2 py-0.5 hover:border-accent/50 transition-colors"
              aria-label="Toggle language"
            >
              <span className={lang === 'pt' ? 'text-accent' : 'text-muted'}>PT</span>
              <span className="text-border">|</span>
              <span className={lang === 'en' ? 'text-accent' : 'text-muted'}>EN</span>
            </button>
          </li>
        </ul>

        {/* Mobile hamburger + hint balloon */}
        <div className="md:hidden relative">
          {/* Yellow blinking dot */}
          {showHint && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-yellow-400 animate-blink-dot pointer-events-none" />
          )}

          <button
            className="text-muted hover:text-accent transition-colors p-1"
            onClick={handleHamburgerClick}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Hint balloon */}
          <AnimatePresence>
            {showHint && <LangHint onDismiss={dismissHint} />}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`font-mono text-sm transition-colors hover:text-accent ${
                    activeSection === link.href.slice(1) ? 'text-accent' : 'text-muted'
                  }`}
                >
                  <span className="text-accent/60">#</span>
                  {link.label}
                </button>
              </li>
            ))}
            {/* Language toggle mobile */}
            <li>
              <button
                onClick={toggle}
                className="font-mono text-sm flex items-center gap-1 border border-border rounded px-2 py-0.5 hover:border-accent/50 transition-colors"
              >
                <span className={lang === 'pt' ? 'text-accent' : 'text-muted'}>PT</span>
                <span className="text-border">|</span>
                <span className={lang === 'en' ? 'text-accent' : 'text-muted'}>EN</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
