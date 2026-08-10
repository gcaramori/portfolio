'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type ProjectLinkCardProps = {
  href: string
  imageSrc: StaticImageData
  category: string
  title: string
  summary: string
  cta: string
  liveLabel: string
  liveHref: string
}

export function ProjectLinkCard({
  href,
  imageSrc,
  category,
  title,
  summary,
  cta,
  liveLabel,
  liveHref,
}: ProjectLinkCardProps) {
  const liveHostname = new URL(liveHref).hostname.replace('www.', '')

  return (
    <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <Link href={href} aria-label={`${cta}: ${title}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-opacity hover:opacity-70"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${liveLabel}: ${title}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            {liveLabel}
            <span className="font-semibold text-[var(--foreground)]">
              {liveHostname}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
