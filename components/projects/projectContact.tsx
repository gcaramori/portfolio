'use client'

import { useContext } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent from '@/lib/languages'
import { emailHref, getResumePdfHref } from '@/lib/contact'

export function ProjectContact() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].projects.contact

  return (
    <section className="mt-10 border-t border-[var(--border)] py-10 md:py-12">
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">
        {content.title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
        {content.availability}
      </p>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        {content.languages}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a href={emailHref} className="primary-link">
          {content.emailLabel}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <a
          href="https://linkedin.com/in/gcaramori"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-link"
        >
          {content.linkedinLabel}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <a
          href={getResumePdfHref(language)}
          download
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
        >
          {siteContent[language].resume.downloadLabel}
          <Download aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
