import { AboutContent } from './content'

export function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex flex-col lg:flex-row items-start justify-start"
    >
      <AboutContent />
    </section>
  )
}
