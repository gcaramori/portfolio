import { Projects } from '@/components/projects/projects'
import { getProjectsMetadata } from '@/lib/seo'

export const metadata = getProjectsMetadata('en')

export default function EnglishProjectsPage() {
  return <Projects />
}
