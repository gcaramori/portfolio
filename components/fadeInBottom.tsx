'use client'

import type { ReactNode } from 'react'
import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default memo(FadeInBottom)
