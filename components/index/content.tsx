'use client'

import Link from 'next/link'
import { useContext } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Dot,
  Github,
  Linkedin,
  MessageCircle,
  MoveRight,
} from 'lucide-react'
import FadeInBottom from '@/components/fadeInBottom'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent, { projectCases } from '@/lib/languages'
import { getWhatsappHref } from '@/lib/contact'
import { getLocalizedPath } from '@/lib/locale'
import { projectMeta } from '@/lib/projects'
import Image from 'next/image'

export function IndexContent() {
  const { language } = useContext(LanguageContext)
  const content = siteContent[language].home
  const projectLabels = siteContent[language].projects
  const whatsappHref = getWhatsappHref(language)
  const contactLinks = [
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
    <div className="container py-6 md:py-8 lg:py-10">
      <FadeInBottom>
        <section className="grid gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(20rem,0.85fr)] lg:gap-12 lg:pb-12 xl:grid-cols-[minmax(0,1.6fr)_minmax(21rem,0.8fr)]">
          <div>
            <p className="section-label">{content.eyebrow}</p>

            <h1 className="mt-4 max-w-[58rem] font-display text-[2.75rem] leading-[1.03] font-semibold tracking-normal text-[var(--foreground)] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.15rem] xl:text-[4.35rem]">
              {content.title}
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--foreground)] lg:text-[1.35rem] lg:leading-10">
              {content.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-link"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={getLocalizedPath('/projects', language)}
                className="secondary-link"
              >
                {content.secondaryCta}
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-[var(--muted-foreground)]">
              {content.note}
            </p>
          </div>

          <div className="grid gap-4 self-start">
            {content.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
              >
                <p className="whitespace-nowrap font-display text-[2.35rem] font-semibold tracking-normal text-[var(--foreground)] md:text-[2.75rem] lg:text-[2.65rem] xl:text-[2.85rem]">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[15rem] text-[0.95rem] leading-6 text-[var(--muted-foreground)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.05}>
        <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.manifestoTitle}</p>
          </div>

          <div className="max-w-3xl">
            <p className="font-display text-3xl leading-tight tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
              {content.manifestoLead}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
              {content.manifestoBody}
            </p>

            <ul className="mt-8 grid gap-4 border-t border-[var(--border)] pt-6 md:grid-cols-3">
              {content.manifestoEvidence.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[var(--foreground)]"
                >
                  <Dot className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeInBottom>

      <FadeInBottom delay={0.08}>
        <section className="grid gap-10 border-b border-[var(--border)] py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.capabilitiesTitle}</p>
            <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted-foreground)]">
              {content.capabilitiesIntro}
            </p>
          </div>

          <div className="space-y-4">
            {content.capabilities.map((item) => (
              <article
                key={item.title}
                className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform hover:-translate-y-0.5 md:p-8"
              >
                <div className="flex items-start gap-3">
                  <Dot className="mt-1 h-7 w-7 shrink-0 text-[var(--accent)]" />

                  <div>
                    <h2 className="font-display text-2xl leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted-foreground)]">
                      {item.description}
                    </p>
                  </div>
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

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {content.featuredProjects.map((project) => {
              const details = projectCases[language][project.slug]
              const meta = projectMeta[project.slug]

              return (
                <Link
                  key={project.slug}
                  href={getLocalizedPath(`/projects/${project.slug}`, language)}
                  className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
                    <Image
                      src={meta.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
                    <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                      {details.overview}
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

      <FadeInBottom delay={0.14}>
        <section className="grid gap-10 border-y border-[var(--border)] py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-16">
          <div>
            <p className="section-label">{content.experienceTitle}</p>
            <p className="mt-4 max-w-md text-base leading-8 text-[var(--muted-foreground)]">
              {content.experienceIntro}
            </p>
          </div>

          <div className="space-y-6">
            {content.experience.map((item) => (
              <article
                key={item.title}
                className="grid gap-3 border-b border-[var(--border)] pb-6 last:border-none last:pb-0 md:grid-cols-[120px_1fr]"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
                  {item.period}
                </p>
                <div>
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.04em] text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
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
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
