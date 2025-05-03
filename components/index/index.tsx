import { MainTexts } from './mainTexts'

export function Index() {
  return (
    <section
      id="index"
      className="h-screen w-full flex flex-col lg:flex-row items-start justify-start overflow-y-hidden"
    >
      <MainTexts />
    </section>
  )
}
