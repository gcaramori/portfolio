import type { MetadataRoute } from 'next'
import { projectOrder } from '@/lib/projects'
import { absoluteUrl } from '@/lib/seo'

const staticRoutes = [
  '/',
  '/about',
  '/projects',
  '/resume',
  '/en',
  '/en/about',
  '/en/projects',
  '/en/resume',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projectOrder.flatMap((slug) => [
    `/projects/${slug}`,
    `/en/projects/${slug}`,
  ])

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route.includes('/projects/') ? 'monthly' : 'weekly',
    priority: route === '/' || route === '/en' ? 1 : 0.8,
  }))
}
