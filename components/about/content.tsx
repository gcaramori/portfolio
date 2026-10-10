'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { ArrowRight } from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent from '@/lib/languages'
import {
  emailHref,
  getResumePdfHref,
  getWhatsappHref,
} from '@/lib/contact'
import { getLocalizedPath } from '@/lib/locale'

export function AboutContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].about
  const resume = siteContent[language].resume
  const resumeHref = getLocalizedPath('/resume', language)

  return (
    <div className="container py-10 md:py-14">
      <FadeInBottom>
        <section className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-16">
          <div>
            <p className="section-label">{content.eyebrow}</p>
          </div>

          <div>
            <h1 className="max-w-4xl font-display text-3xl leading-[1.08] font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl lg:text-[3.25rem]">
              {content.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--foreground)]">
              {content.intro}
            </p>
            <Link href={resumeHref} className="secondary-link mt-6">
              {resume.label}
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
          <div>
            <h2 className="section-label">{content.storyTitle}</h2>
          </div>

          <div className="grid gap-8">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.08}>
        <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-16">
          <div>
            <h2 className="section-label">{content.highlightsTitle}</h2>
          </div>

          <div className="space-y-4">
            {content.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
              >
                <h3 className="font-display text-xl leading-snug font-semibold text-[var(--foreground)] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--muted-foreground)]">
                  {item.body}
                </p>
              </article>
            ))}
            <div className="flex flex-wrap gap-3">
              {[
                { slug: 'performa-ai', label: content.caseLabel },
                { slug: 'jsbjjkylemore', label: content.frontendCaseLabel },
                { slug: 'unit5', label: content.designCaseLabel },
              ].map((project) => (
                <Link
                  key={project.slug}
                  href={getLocalizedPath(`/projects/${project.slug}`, language)}
                  className="secondary-link"
                >
                  {project.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.11}>
        <section className="grid gap-10 py-12 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-16">
          <div>
            <h2 className="section-label">{content.methodTitle}</h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
            {content.methodBody}
          </p>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.14}>
        <section className="grid gap-10 border-t border-[var(--border)] py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-16">
          <h2 className="section-label">{content.availabilityTitle}</h2>
          <div>
            <ul className="space-y-3 text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
              {content.availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={emailHref} className="primary-link">
                {content.emailLabel}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={getWhatsappHref(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-link"
              >
                {content.whatsappLabel}
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href={resumeHref} className="secondary-link">
                {resume.label}
              </Link>
              <a
                href={getResumePdfHref(language)}
                download
                className="secondary-link"
              >
                {resume.downloadLabel}
              </a>
            </div>
          </div>
        </section>
      </FadeInBottom>
    </div>
  )
}
