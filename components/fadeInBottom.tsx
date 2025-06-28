'use client'

import React, { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'

const INITIAL = { opacity: 0, y: 30 }
const ANIMATE = { opacity: 1, y: 0 }
const EXIT = { y: 30 }
const TRANSITION = { duration: 0.9, ease: 'easeOut' }

function FadeInBottom({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={INITIAL}
      animate={ANIMATE}
      transition={TRANSITION}
      exit={EXIT}
    >
      {children}
    </motion.div>
  )
}

export default memo(FadeInBottom)
