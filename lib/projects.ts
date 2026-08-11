import type { StaticImageData } from 'next/image'
import kylemore from '@/public/projects/kylemore.png'
import unit5 from '@/public/projects/unit5.png'
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
  unit5: {
    slug: 'unit5',
    href: 'https://unit5strengthandfitness.com',
    image: unit5,
  },
}

export const projectOrder: ProjectSlug[] = [
  'jsbjjkylemore',
  'unit5',
]
