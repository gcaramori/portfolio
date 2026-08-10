'use client'

import type { ReactNode } from 'react'
import { memo } from 'react'
import { motion } from 'framer-motion'

type FadeInBottomProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}

function FadeInBottom({
  children,
  className,
  delay = 0,
  distance = 28,
}: FadeInBottomProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default memo(FadeInBottom)
