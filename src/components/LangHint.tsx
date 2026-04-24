import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from '../i18n/context'

interface LangHintProps {
  onDismiss: () => void
}

export default function LangHint({ onDismiss }: LangHintProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -6 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute top-10 right-0 z-50 w-52"
    >
      {/* Arrow pointing up toward hamburger */}
      <div className="absolute -top-[6px] right-[10px] w-3 h-3 bg-surface border-t border-r border-yellow-400/70 rotate-[-45deg] animate-blink-border" />

      {/* Code box */}
      <div className="bg-surface border rounded-lg px-2 pt-4 pb-2.5 border border-yellow-400/50 animate-blink-border">
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
          <span className="text-muted">{t.hint.l1}</span>
          {'\n'}
          <span className="text-blue-300">{'lang'}</span><span>{' = '}</span>
          <span className="text-yellow-400">{t.hint.l2}</span><span>{';'}</span>
          {'\n'}
          <span className="text-muted">{t.hint.l3}</span>
          {'\n'}
          <span className="text-muted">{t.hint.l4}</span>
        </pre>
      </div>
    </motion.div>
  )
}
