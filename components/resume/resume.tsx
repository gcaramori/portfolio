import Link from 'next/link'
import siteContent, { projectCases, type Locale } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'
import {
  CONTACT_EMAIL,
  emailHref,
  getResumePdfHref,
  getWhatsappHref,
} from '@/lib/contact'
import { projectOrder } from '@/lib/projects'
import { PrintButton } from './printButton'

export function Resume({ locale }: { locale: Locale }) {
  const content = siteContent[locale]
  const labels = content.resume
  const technologies = Array.from(
    new Set([
      ...projectCases[locale]['performa-ai'].stack,
      ...content.home.experience.flatMap((item) => item.stack ?? []),
    ]),
  )

  return (
    <article className="resume-page container max-w-4xl py-10 md:py-14">
      <div className="resume-controls mb-10 print:hidden">
        <div className="flex flex-wrap gap-3">
          <a
            href={getResumePdfHref(locale)}
            download
            className="primary-link"
          >
            {labels.downloadLabel}
          </a>
          <PrintButton label={labels.printLabel} />
        </div>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          {labels.printHint}
        </p>
      </div>

      <header className="border-b border-[var(--border)] pb-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Guilherme Caramori
        </h1>
        <p className="mt-3 text-lg font-semibold">{content.home.title}</p>
        <p className="mt-3 text-sm leading-6">{content.home.note}</p>
        <ul className="resume-contacts mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a href={emailHref}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/gcaramori">
              linkedin.com/in/gcaramori
            </a>
          </li>
          <li>
            <a href="https://github.com/gcaramori">github.com/gcaramori</a>
          </li>
          <li>
            <a href={getWhatsappHref(locale)}>WhatsApp: +55 19 98264-6119</a>
          </li>
        </ul>
      </header>

      <section className="resume-section">
        <h2>{labels.summaryTitle}</h2>
        <p className="mt-3 leading-7">{content.home.intro}</p>
      </section>

      <section className="resume-section">
        <h2>{labels.experienceTitle}</h2>
        {content.home.experience.map((item) => (
          <div key={item.title} className="resume-experience mt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.period}</p>
            </div>
            <p className="mt-2 leading-7">{item.description}</p>
            {item.highlights && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>{labels.skillsTitle}</h2>
        <p className="mt-3 leading-7">{technologies.join(' · ')}</p>
      </section>

      <section className="resume-section">
        <h2>{labels.projectsTitle}</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {projectOrder.map((slug) => (
            <li key={slug} className="resume-project">
              <Link
                href={getLocalizedPath(`/projects/${slug}`, locale)}
                className="font-semibold underline underline-offset-4"
              >
                {projectCases[locale][slug].title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h2>{labels.availabilityTitle}</h2>
        <ul className="mt-3 space-y-2 leading-7">
          {content.home.hiring.items.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
