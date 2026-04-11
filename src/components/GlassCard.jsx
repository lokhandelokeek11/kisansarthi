import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({
  children,
  className = '',
  hover = true,
  theme = 'teal', // 'teal' or 'amber'
  onClick,
}) => {
  const themeColors = {
    teal: {
      border: 'border-teal-200/50',
      hoverBorder: 'hover:border-teal-400/70',
      bg: 'bg-white/60',
      shadow: 'shadow-teal-500/10',
      glow: 'shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)]',
    },
    amber: {
      border: 'border-amber-200/50',
      hoverBorder: 'hover:border-amber-400/70',
      bg: 'bg-white/60',
      shadow: 'shadow-amber-500/10',
      glow: 'shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]',
    },
  }

  const colors = themeColors[theme]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={
        hover
          ? {
              scale: 1.02,
              y: -4,
              boxShadow: `0 20px 40px -15px ${theme === 'teal' ? 'rgba(20,184,166,0.3)' : 'rgba(245,158,11,0.3)'}`,
            }
          : {}
      }
      onClick={onClick}
      className={`
        backdrop-blur-xl
        ${colors.bg}
        ${colors.border}
        border
        rounded-3xl
        ${colors.shadow}
        shadow-lg
        transition-all
        duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
