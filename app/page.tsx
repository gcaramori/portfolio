import dynamic from 'next/dynamic'
import { Index } from '@/components/index'

const Computer = dynamic(() =>
  import('../components/index/computer').then((mod) => mod.Computer)
)

export default function IndexPage() {
  return (
    <>
      <Index />
      <Computer />
    </>
  )
}
