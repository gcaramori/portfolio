'use client'

import { useContext } from 'react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta, projectOrder } from '@/lib/projects'
import { ProjectLinkCard } from './projectLinkCard'

export function ProjectsContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].projects

  return (
    <div className="container py-10 md:py-14">
      <FadeInBottom>
        <section className="grid gap-8 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-16">
          <div>
            <p className="section-label">{content.eyebrow}</p>
          </div>

          <div>
            <h1 className="max-w-5xl font-display text-5xl leading-[0.96] font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-7xl">
              {content.title}
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
              {content.intro}
            </p>
          </div>
        </section>
      </FadeInBottom>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projectOrder.map((slug, index) => {
          const details = projectCases[language][slug]
          const meta = projectMeta[slug]

          return (
            <FadeInBottom key={slug} delay={index * 0.04}>
              <ProjectLinkCard
                href={getLocalizedPath(`/projects/${slug}`, language)}
                imageSrc={meta.image}
                category={details.category}
                title={details.title}
                summary={details.cardSummary}
                cta={content.cta}
                liveLabel={content.liveLabel}
                liveHref={meta.href}
              />
            </FadeInBottom>
          )
        })}
      </div>
    </div>
  )
}
