'use client'

import { useContext } from 'react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta, projectOrder } from '@/lib/projects'
import { ProjectLinkCard } from './projectLinkCard'
import { ProjectContact } from './projectContact'

export function ProjectsContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].projects

  return (
    <div className="container py-6 md:py-10">
      <FadeInBottom>
        <section className="border-b border-[var(--border)] pb-6 md:pb-8">
          <div>
            <p className="section-label">{content.eyebrow}</p>
          </div>

          <div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
              {content.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted-foreground)] md:text-base md:leading-7">
              {content.intro}
            </p>
            <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">
              {content.profile}
            </p>
          </div>
        </section>
      </FadeInBottom>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projectOrder.map((slug, index) => {
          const details = projectCases[language][slug]
          const meta = projectMeta[slug]

          return (
            <FadeInBottom
              key={slug}
              delay={index * 0.04}
              className={index === 0 ? 'lg:col-span-2' : undefined}
            >
              <ProjectLinkCard
                href={getLocalizedPath(`/projects/${slug}`, language)}
                imageSrc={meta.image}
                metrics={details.metrics}
                category={details.category}
                title={details.title}
                summary={details.cardSummary}
                role={details.cardRole}
                stack={details.cardStack}
                featured={index === 0}
                cta={content.cta}
                liveLabel={content.liveLabel}
                liveHref={meta.href}
              />
            </FadeInBottom>
          )
        })}
      </div>
      <ProjectContact />
    </div>
  )
}
