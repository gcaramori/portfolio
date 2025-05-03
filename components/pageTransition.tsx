'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
}

const withPageTransition = (WrappedComponent: React.ComponentType) => {
  const ComponentWithTransition: React.FC = (props) => {
    const pathname = usePathname()

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={pageVariants}
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
