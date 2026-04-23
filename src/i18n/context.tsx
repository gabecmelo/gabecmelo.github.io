import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Translations } from './types'
import { pt } from './pt'
import { en } from './en'

type Lang = 'pt' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('lang') as Lang) || 'pt',
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang(l => (l === 'pt' ? 'en' : 'pt'))
  const t = lang === 'pt' ? pt : en

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider')
  return ctx
}
