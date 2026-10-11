'use client'

import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectVisual } from './projectVisual'

type ProjectLinkCardProps = {
  href: string
  imageSrc?: StaticImageData
  metrics?: { value: string; label: string }[]
  category: string
  title: string
  summary: string
  role: string
  stack: string[]
  featured?: boolean
  cta: string
  liveLabel: string
  liveHref?: string
}

export function ProjectLinkCard({
  href,
  imageSrc,
  metrics,
  category,
  title,
  summary,
  role,
  stack,
  featured = false,
  cta,
  liveLabel,
  liveHref,
}: ProjectLinkCardProps) {
  const liveHostname = liveHref
    ? new URL(liveHref).hostname.replace('www.', '')
    : undefined

  return (
    <article
      className={`min-w-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] ${featured ? 'lg:grid lg:grid-cols-[1.2fr_0.8fr]' : ''}`}
    >
      <Link
        href={href}
        aria-label={`${cta}: ${title}`}
        className={`group block ${featured ? 'order-2 hidden lg:block lg:self-center' : ''}`}
      >
        <div className="overflow-hidden border-b border-[var(--border)]">
          <ProjectVisual
            image={imageSrc}
            title={title}
            metrics={metrics}
            compact={featured}
          />
        </div>
      </Link>

      <div className="p-6 md:p-8">
        <p className="section-label">{category}</p>
        <Link href={href} className="group/title block">
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.05em] text-[var(--foreground)] transition-opacity group-hover/title:opacity-75">
            {title}
          </h2>
        </Link>
        <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
          {summary}
        </p>

        <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">
          {role}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Stack">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-opacity hover:opacity-70"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {liveHref && (
            <Link
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${liveLabel}: ${title}`}
              className="inline-flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {liveLabel}
              <span className="font-semibold text-[var(--foreground)]">
                {liveHostname}
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
