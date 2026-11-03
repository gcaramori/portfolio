'use client'

import Link from 'next/link'
import { CaseReading, CaseIndex } from '@/components/readingMotion'
import { useContext } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases, type ProjectSlug } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta, projectOrder } from '@/lib/projects'
import { ProjectVisual } from './projectVisual'
import { ProjectContact } from './projectContact'

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
      <CaseReading><FadeInBottom>
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

            {meta.href && (
              <Link
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-link mt-8 inline-flex"
              >
                {labels.openLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="py-8 md:py-10">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <ProjectVisual
              image={meta.image}
              title={details.title}
              metrics={details.metrics}
              priority
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

      <div>
        <section className="grid gap-8 border-b border-[var(--border)] py-12 lg:grid-cols-[0.72fr_1.28fr] lg:py-16">
          <CaseIndex titles={details.sections.map(section => section.title)} label={labels.indexLabel} />

          <div className="grid gap-8">
            {details.sections.map((section, index) => (
              <article key={section.title}>
                <h2 id={`case-section-${index + 1}`} tabIndex={-1} className="case-heading font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {details.sources && (
        <section className="border-b border-[var(--border)] py-10">
          <h2 className="font-display text-2xl font-semibold">
            {labels.sourcesLabel}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
            {labels.sourcesNote}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {details.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                >
                  {source.title}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      </CaseReading>
      <ProjectContact />

      <section
        aria-labelledby="more-projects-title"
        className="border-t border-[var(--border)] py-12 lg:py-16"
      >
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4 md:mb-8">
          <h2
            id="more-projects-title"
            className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-[var(--foreground)]"
          >
            {labels.moreProjectsLabel}
          </h2>
          <Link
            href={getLocalizedPath('/projects', language)}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4"
          >
            {labels.backLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {moreProjects.map((item) => {
            const project = projectCases[language][item]

            return (
              <Link
                key={item}
                href={getLocalizedPath(`/projects/${item}`, language)}
                aria-labelledby={`related-${item}-title related-${item}-cta`}
                className="group flex min-w-0 flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-180 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)] motion-reduce:transition-none md:p-8"
              >
                <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                  {project.category}
                </p>
                <h3
                  id={`related-${item}-title`}
                  className="mt-3 font-display text-2xl leading-tight font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-3xl"
                >
                  {project.title}
                </h3>
                <p className="mt-4 max-w-[65ch] text-base leading-7 text-[var(--muted-foreground)]">
                  {project.cardSummary}
                </p>
                <span
                  id={`related-${item}-cta`}
                  className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold text-[var(--foreground)]"
                >
                  <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">
                    {siteContent[language].projects.cta}
                  </span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
