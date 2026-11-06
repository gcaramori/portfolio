import { Resume } from '@/components/resume/resume'
import { buildMetadata } from '@/lib/seo'
import { getFrontendResumeContent } from '@/lib/frontend-resume'

const locale = 'en'
const content = getFrontendResumeContent(locale)

export const metadata = buildMetadata({
  title: `${content.home.title} | Guilherme Caramori`,
  description: content.home.intro,
  pathname: '/resume/frontend',
  locale,
})

export default function FrontendResumePage() {
  return <Resume locale={locale} frontend />
}
