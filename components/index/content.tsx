'use client'

import Link from 'next/link'
import { useContext } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  Linkedin,
  MessageCircle,
  MoveRight,
} from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases } from '@/lib/languages'
import {
  CONTACT_EMAIL,
  emailHref,
  getWhatsappHref,
  getResumePdfHref,
} from '@/lib/contact'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta } from '@/lib/projects'
import { ProjectVisual } from '@/components/projects/projectVisual'

export function IndexContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].home
  const projectLabels = siteContent[language].projects
  const whatsappHref = getWhatsappHref(language)
  const contactLinks = [
    {
      href: emailHref,
      label: `${content.hiring.links.email}: ${CONTACT_EMAIL}`,
      icon: Mail,
    },
    {
      href: whatsappHref,
      label: content.hiring.links.whatsapp,
      icon: MessageCircle,
    },
    {
      href: 'https://linkedin.com/in/gcaramori',
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: 'https://github.com/gcaramori',
      label: 'GitHub',
      icon: Github,
    },
  ]

  return (
    <div className="home-content container py-5 md:py-8 lg:py-10">
      <FadeInBottom>
        <section className="home-hero grid gap-6 border-b border-[var(--border)] pb-8 md:gap-8 md:pb-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(20rem,0.85fr)] lg:gap-12 lg:pb-12 xl:grid-cols-[minmax(0,1.6fr)_minmax(21rem,0.8fr)]">
          <div className="min-w-0">
            <p className="section-label">{content.eyebrow}</p>

            <h1 className="home-hero-title mt-3 max-w-[58rem] font-display text-[1.75rem] leading-[1.08] font-semibold tracking-normal text-[var(--foreground)] min-[390px]:text-[1.875rem] sm:mt-4 sm:text-[3rem] sm:leading-[1.04] md:text-[3.65rem] lg:text-[3.75rem] xl:text-[3.95rem]">
              <span className="sm:hidden">{content.mobileTitle}</span>
              <span className="hidden sm:inline">{content.title}</span>
            </h1>

            <p className="home-hero-intro mt-5 max-w-2xl text-[1.0625rem] leading-7 text-[var(--foreground)] sm:mt-7 sm:max-w-3xl sm:text-xl sm:leading-9 lg:text-[1.35rem] lg:leading-10">
              <span className="sm:hidden">{content.mobileIntro}</span>
              <span className="hidden sm:inline">{content.intro}</span>
            </p>

            <div className="home-hero-actions mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={emailHref}
                className="primary-link"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={getLocalizedPath('/resume', language)}
                className="secondary-link"
              >
                {content.secondaryCta}
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="home-hero-note mt-4 max-w-2xl text-[0.875rem] leading-6 text-[var(--muted-foreground)] sm:mt-5 sm:text-[0.95rem] sm:leading-7">
              {content.note}
            </p>
          </div>

          <div className="home-hero-stats grid min-w-0 gap-4 self-start">
            {content.stats.map((stat) => (
              <article
                key={stat.label}
                className="home-hero-stat min-w-0 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
              >
                <p
                  className="home-hero-stat-value break-words font-display text-xl leading-tight font-semibold tracking-normal text-[var(--foreground)] md:text-2xl"
                >
                  {stat.value}
                </p>
                <p className="home-hero-stat-label mt-2 max-w-[15rem] text-[0.95rem] leading-6 text-[var(--muted-foreground)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="grid gap-10 border-y border-[var(--border)] py-12 lg:py-16">
          <div>
            <p className="section-label">{content.experienceTitle}</p>
            <p className="mt-4 max-w-[80ch] text-base leading-8 text-[var(--muted-foreground)]">
              {content.experienceIntro}
            </p>
          </div>

          <div className="space-y-6">
            {content.experience.map((item) => (
              <article
                key={item.title}
                className="grid gap-3 border-b border-[var(--border)] pb-6 last:border-none last:pb-0 md:grid-cols-[120px_minmax(0,1fr)] md:gap-8"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
                  {item.period}
                </p>
                <div className="min-w-0 max-w-[80ch]">
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.04em] text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--muted-foreground)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {item.caseSlug && (
                    <Link
                      href={getLocalizedPath(
                        `/projects/${item.caseSlug}`,
                        language,
                      )}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
                    >
                      {content.experienceCaseLabel}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  )}
                  {item.stack ? (
                    <ul className="mt-4 flex max-w-2xl flex-wrap gap-2">
                      {item.stack.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs leading-5 font-medium text-[var(--foreground)]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.12}>
        <section className="py-12 lg:py-16">
          <div className="border-b border-[var(--border)] pb-8">
            <div>
              <p className="section-label">{content.featuredTitle}</p>
            </div>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted-foreground)]">
              {content.featuredIntro}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {content.featuredProjects.map((project) => {
              const details = projectCases[language][project.slug]
              const meta = projectMeta[project.slug]

              return (
                <Link
                  key={project.slug}
                  href={getLocalizedPath(`/projects/${project.slug}`, language)}
                  className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-transform hover:-translate-y-1"
                >
                  <div className="overflow-hidden border-b border-[var(--border)]">
                    <ProjectVisual
                      image={meta.image}
                      title={project.title}
                      metrics={details.metrics}
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="section-label">{project.kicker}</p>
                    <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.05em] text-[var(--foreground)]">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
                      {project.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                      {projectLabels.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.16}>
        <section className="grid gap-10 border-y border-[var(--border)] py-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.hiring.title}</p>
            <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted-foreground)]">
              {content.hiring.intro}
            </p>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-[0.9fr_0.95fr_1.25fr]">
              {content.hiring.items.map((item) => (
                <article key={item} className="editorial-card">
                  <p className="text-base leading-7 text-[var(--foreground)]">
                    {item}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={getLocalizedPath('/resume', language)}
                className="secondary-link justify-center"
              >
                {content.secondaryCta}
                <MoveRight className="h-4 w-4" />
              </Link>
              <a
                href={getResumePdfHref(language)}
                download
                className="secondary-link justify-center"
              >
                <Download className="h-4 w-4" />
                {siteContent[language].resume.downloadLabel}
              </a>
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('https:') ? '_blank' : undefined}
                  rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
                  className="secondary-link justify-center"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.18}>
        <section className="py-12 lg:py-16">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-8 md:p-10">
            <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
              {content.closingTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
              {content.closingBody}
            </p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-link mt-8 inline-flex"
            >
              {content.closingCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </FadeInBottom>
    </div>
  )
}
