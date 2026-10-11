import type { Metadata } from 'next'
import { InterviewGuide } from '@/components/interview-guide/interview-guide'
import { getInterviewGuide } from '@/lib/interview-guide'

const title = 'Guia de entrevistas internacionais | Guilherme Caramori'
const description =
  'Preparação técnica, inglês, plano de 14 dias e busca de vagas internacionais para desenvolvedores backend e full stack.'
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
