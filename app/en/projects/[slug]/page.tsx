import { notFound } from 'next/navigation'
import { ProjectDetails } from '@/components/projects/projectDetails'
import type { ProjectSlug } from '@/lib/languages'
import { projectOrder } from '@/lib/projects'
import { getProjectMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return projectOrder.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!projectOrder.includes(slug as ProjectSlug)) {
    return {}
  }

  return getProjectMetadata('en', slug as ProjectSlug)
}

export default async function EnglishProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!projectOrder.includes(slug as ProjectSlug)) {
    notFound()
  }

  return <ProjectDetails slug={slug as ProjectSlug} />
}
