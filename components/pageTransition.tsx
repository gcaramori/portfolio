'use client'

import React from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface MotionVariants {
  variants: Variants
  transition?: {
    duration?: number
    ease?: string | number | number[]
    delay?: number
  }
}

const withPageTransition = (
  WrappedComponent: React.ComponentType,
  motionVariants: MotionVariants
) => {
  const ComponentWithTransition: React.FC = (props) => {
    const pathname = usePathname()

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={motionVariants.variants}
          transition={motionVariants.transition || { duration: 0.3 }}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ height: '100%' }}
        >
          <WrappedComponent {...props} />
        </motion.div>
      </AnimatePresence>
    )
  }

  ComponentWithTransition.displayName = `WithPageTransition(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return ComponentWithTransition
}

export default withPageTransition
