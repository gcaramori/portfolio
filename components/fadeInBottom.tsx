'use client'

import React, { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'

const INITIAL = { opacity: 0, y: 30 }
const ANIMATE = { opacity: 1, y: 0 }
const TRANSITION = { duration: 0.8 }

function FadeInBottom({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={INITIAL} animate={ANIMATE} transition={TRANSITION}>
      {children}
    </motion.div>
  )
}

export default memo(FadeInBottom)
