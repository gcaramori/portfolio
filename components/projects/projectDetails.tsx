'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases, type ProjectSlug } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta, projectOrder } from '@/lib/projects'

type ProjectDetailsProps = {
  slug: ProjectSlug
}

export function ProjectDetails({ slug }: ProjectDetailsProps) {
  const { language } = useContext(LanguageContext)
  const labels = siteContent[language].projectDetail
  const details = projectCases[language][slug]
  const meta = projectMeta[slug]
  const moreProjects = projectOrder.filter((item) => item !== slug).slice(0, 3)

  return (
    <div className="container py-10 md:py-14">
      <FadeInBottom>
        <section className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pb-16">
          <div>
            <Link
              href={getLocalizedPath('/projects', language)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-opacity hover:opacity-70"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.backLabel}
            </Link>
          </div>

          <div>
            <p className="section-label">{details.category}</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.96] font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-7xl">
              {details.title}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
              {details.overview}
            </p>

            <Link
              href={meta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-link mt-8 inline-flex"
            >
              {labels.openLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="py-8 md:py-10">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src={meta.image}
              alt={details.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.08}>
        <section className="grid gap-6 border-y border-[var(--border)] py-12 lg:grid-cols-3">
          <article className="editorial-card h-full">
            <p className="section-label">{labels.roleLabel}</p>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
              {details.role}
            </p>
          </article>

          <article className="editorial-card h-full">
            <p className="section-label">{labels.deliverablesLabel}</p>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
              {details.deliverables}
            </p>
          </article>

          <article className="editorial-card h-full">
            <p className="section-label">{labels.stackLabel}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {details.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.16}>
        <section className="grid gap-8 border-b border-[var(--border)] py-12 lg:grid-cols-[0.72fr_1.28fr] lg:py-16">
          <div>
            <p className="section-label">{details.title}</p>
          </div>

          <div className="grid gap-8">
            {details.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.2}>
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">{labels.moreProjectsLabel}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {moreProjects.map((item) => {
                const project = projectCases[language][item]

                return (
                  <Link
                    key={item}
                    href={getLocalizedPath(`/projects/${item}`, language)}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <p className="section-label">{project.category}</p>
                    <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-[var(--foreground)]">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                      {project.cardSummary}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </FadeInBottom>
    </div>
  )
}
