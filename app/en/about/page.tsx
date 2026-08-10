import { About } from '@/components/about/about'
import { getAboutMetadata } from '@/lib/seo'

export const metadata = getAboutMetadata('en')

export default function EnglishAboutPage() {
  return <About />
}
