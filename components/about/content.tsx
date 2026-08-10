'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { ArrowRight } from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent from '@/lib/languages'
import { getWhatsappHref } from '@/lib/contact'

export function AboutContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].about
  const whatsappHref = getWhatsappHref(language)

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
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.storyTitle}</p>
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
            <p className="section-label">{content.highlightsTitle}</p>
          </div>

          <div className="space-y-4">
            {content.highlights.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-base leading-8 text-[var(--foreground)] md:p-8"
              >
                {item}
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.11}>
        <section className="grid gap-10 py-12 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.methodTitle}</p>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {content.method.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 py-7 md:grid-cols-[5rem_1fr] md:gap-8 md:py-8"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
                  0{index + 1}
                </p>

                <div>
                  <h2 className="max-w-xl font-display text-2xl leading-tight text-[var(--foreground)] md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.14}>
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-link inline-flex"
          >
            {content.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </FadeInBottom>
    </div>
  )
}
