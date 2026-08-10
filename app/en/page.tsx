import { Index } from '@/components/index'
import { getHomeMetadata } from '@/lib/seo'

export const metadata = getHomeMetadata('en')

export default function EnglishIndexPage() {
  return <Index />
}
