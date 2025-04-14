import { Index } from '@/components/home'
import { About } from '@/components/about/about'

export default function Home() {
  return (
    <main className="block relative h-full w-full overflow-x-hidden">
      <Index />

      <About />
    </main>
  )
}
