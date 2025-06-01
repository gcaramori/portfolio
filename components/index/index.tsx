import { IndexContent } from './content'

export function Index() {
  return (
    <section
      id="index"
      className="h-screen w-full flex flex-col lg:flex-row items-start justify-start overflow-y-hidden pt-6 2xl:pt-10"
    >
      <IndexContent />
    </section>
  )
}
