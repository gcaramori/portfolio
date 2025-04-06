import dynamic from 'next/dynamic'
import { MainTexts } from './mainTexts'

const Computer3D = dynamic(() =>
  import('./computer3d').then((mod) => mod.Computer3D)
)

export function Index() {
  return (
    <section
      id="index"
      className="h-screen w-full flex flex-col lg:flex-row items-start justify-start"
    >
      <MainTexts />

      <Computer3D />
    </section>
  )
}
