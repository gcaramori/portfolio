import { Resume } from '@/components/resume/resume'
import { getResumeMetadata } from '@/lib/seo'

export const metadata = getResumeMetadata('pt-BR')

export default function ResumePage() {
  return <Resume locale="pt-BR" />
}
