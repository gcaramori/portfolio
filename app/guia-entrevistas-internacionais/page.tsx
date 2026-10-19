import type { Metadata } from 'next'
import { InterviewGuide } from '@/components/interview-guide/interview-guide'
import { getInterviewGuide } from '@/lib/interview-guide'
import { guideMetadata } from '@/lib/interview-curriculum'

const title = `${guideMetadata.title} | Guilherme Caramori`
const description = guideMetadata.description
const pathname = '/guia-entrevistas-internacionais'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pathname, languages: {} },
  openGraph: { title, description, url: pathname, locale: 'pt_BR' },
  twitter: { title, description },
}

export default async function InterviewGuidePage() {
  const guide = await getInterviewGuide()
  return <InterviewGuide {...guide} />
}
