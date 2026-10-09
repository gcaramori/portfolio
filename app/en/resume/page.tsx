import { Resume } from '@/components/resume/resume'
import { getResumeMetadata } from '@/lib/seo'

export const metadata = getResumeMetadata('en')

export default function ResumePage() {
  return <Resume locale="en" />
}
