import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from '../i18n/context'

interface LangHintProps {
  onDismiss: () => void
}

export default function LangHint({ onDismiss }: LangHintProps) {
  const { lang } = useTranslation()

  const hint =
    lang === 'pt'
      ? { l1: '// 🌐 also in English', l2: '"EN" available', l3: '// toggle in menu  ↑' }
      : { l1: '// 🌐 também em Português', l2: '"PT" disponível', l3: '// menu  ↑' }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="absolute top-10 right-0 z-50 w-52"
    >
      {/* Arrow pointing up toward hamburger */}
      <div className="absolute -top-[7px] right-[10px] w-3 h-3 bg-surface border-t border-r border-yellow-400/70 rotate-[-45deg]" />

      {/* Code box */}
      <div className="relative bg-surface border rounded-lg px-3 py-2.5 shadow-lg shadow-yellow-400/10 animate-blink-border">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-1.5 right-1.5 text-muted hover:text-text transition-colors"
          aria-label="Dismiss"
        >
          <X size={12} />
        </button>

        {/* Code content */}
        <pre className="font-mono text-[11px] leading-relaxed select-none pr-3">
          <span className="text-muted">{hint.l1}</span>
          {'\n'}
          <span className="text-muted">{'lang = '}</span>
          <span className="text-yellow-400">{hint.l2}</span>
          {'\n'}
          <span className="text-muted">{hint.l3}</span>
        </pre>
      </div>
    </motion.div>
  )
}
