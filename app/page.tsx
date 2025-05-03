'use client'

import dynamic from 'next/dynamic'
import { Index } from '@/components/index'
import withPageTransition from '@/components/pageTransition'

const Computer = dynamic(() =>
  import('../components/index/computer').then((mod) => mod.Computer)
)

function IndexPage() {
  return (
    <>
      <Index />
      <Computer />
    </>
  )
}

export default withPageTransition(IndexPage)
