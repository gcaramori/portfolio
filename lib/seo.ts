import type { Metadata } from 'next'
import siteContent, { projectCases, type Locale, type ProjectSlug } from './languages'
import { getLocalizedPath } from './locale'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export const siteName = 'Guilherme Caramori'
export const ogImage = '/projects/kylemore.png'

type SeoInput = {
  title: string
  description: string
  pathname: string
  locale?: Locale
}

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString()
}

export function buildMetadata({
  title,
  description,
  pathname,
  locale = 'pt-BR',
}: SeoInput): Metadata {
  const canonical = getLocalizedPath(pathname, locale)
  const ptPath = getLocalizedPath(pathname, 'pt-BR')
  const enPath = getLocalizedPath(pathname, 'en')

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'pt-BR': ptPath,
        en: enPath,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export function getHomeMetadata(locale: Locale) {
  return buildMetadata({
    ...siteContent[locale].metadata,
    pathname: '/',
    locale,
  })
}

export function getAboutMetadata(locale: Locale) {
  return buildMetadata({
    title:
      locale === 'pt-BR'
        ? 'Sobre Guilherme Caramori | Desenvolvedor Full Stack Sênior'
        : 'About Guilherme Caramori | Senior Full Stack Developer',
    description:
      locale === 'pt-BR'
        ? 'Desenvolvedor full stack sênior com 8 anos de experiência em produtos web, dashboards, e-commerce, integrações, sistemas de negócio e produção.'
        : 'Senior full stack developer with 8 years of experience in web products, dashboards, e-commerce, integrations, internal systems, and production.',
    pathname: '/about',
    locale,
  })
}

export function getProjectsMetadata(locale: Locale) {
  return buildMetadata({
    title:
      locale === 'pt-BR'
        ? 'Projetos | Guilherme Caramori'
        : 'Projects | Guilherme Caramori',
    description: siteContent[locale].projects.intro,
    pathname: '/projects',
    locale,
  })
}

export function getProjectMetadata(locale: Locale, slug: ProjectSlug) {
  const project = projectCases[locale][slug]

  return buildMetadata({
    title: `${project.title} | Guilherme Caramori`,
    description: project.overview,
    pathname: `/projects/${slug}`,
    locale,
  })
}
