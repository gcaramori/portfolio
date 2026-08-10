import type { StaticImageData } from 'next/image'
import kylemore from '@/public/projects/kylemore.png'
import type { ProjectSlug } from './languages'

type ProjectMeta = {
  slug: ProjectSlug
  href: string
  image: StaticImageData
}

export const projectMeta: Record<ProjectSlug, ProjectMeta> = {
  jsbjjkylemore: {
    slug: 'jsbjjkylemore',
    href: 'https://jsbjjkylemore.com',
    image: kylemore,
  },
}

export const projectOrder: ProjectSlug[] = ['jsbjjkylemore']
