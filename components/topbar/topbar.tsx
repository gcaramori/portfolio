'use client'

import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { LanguageContext } from '@/contexts/languageContext'
import siteContent from '@/lib/languages'
import { getWhatsappHref } from '@/lib/contact'
import { getLocalizedPath, stripLocalePrefix } from '@/lib/locale'
import { LanguageSwitch } from './languageSwitch'

const socialLinks = [
  {
    href: 'https://github.com/gcaramori',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/gcaramori',
    label: 'LinkedIn',
    icon: Linkedin,
  },
]

export function Topbar() {
  const { language } = useContext(LanguageContext)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const content = siteContent[language].topbar
  const currentPath = stripLocalePrefix(pathname)
  const compactCta = language === 'pt-BR' ? 'Contato' : 'Contact'

  useEffect(() => {
    const header = headerRef.current

    if (!header) {
      return
    }

    const updateHeaderHeight = () => {
      setHeaderHeight(header.getBoundingClientRect().height)
    }

    updateHeaderHeight()

    const observer = new ResizeObserver(updateHeaderHeight)
    observer.observe(header)
    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--border)] backdrop-blur-xl"
        style={{ backgroundColor: 'rgb(244 239 231 / 0.88)' }}
      >
        <div className="container flex flex-col gap-2 py-2 lg:min-h-20 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-4">
          <div className="flex items-center justify-between gap-3 lg:w-[22rem] lg:flex-none lg:gap-4 xl:w-[30rem]">
            <Link
              href={getLocalizedPath('/', language)}
              className="min-w-0 flex-1 lg:flex-none"
            >
              <p className="truncate font-display text-base leading-tight font-semibold tracking-[-0.03em] text-[var(--foreground)] min-[360px]:text-lg sm:text-xl lg:tracking-[-0.04em]">
                {content.brand}
              </p>
              <p className="mt-0.5 hidden max-w-[15rem] text-sm leading-snug text-[var(--muted-foreground)] lg:block sm:max-w-md xl:max-w-lg">
                {content.descriptor}
              </p>
            </Link>

            <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
              <LanguageSwitch />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-[37rem] lg:flex-none lg:items-end lg:gap-4 xl:w-[42rem]">
            <div className="hidden items-center justify-end gap-2 lg:flex lg:w-full">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-2 lg:flex lg:w-full lg:flex-row lg:justify-end lg:gap-3">
              <nav className="grid min-w-0 grid-cols-3 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 lg:flex lg:flex-wrap lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0">
                {content.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedPath(item.href, language)}
                    className={`min-w-0 truncate rounded-full px-2 py-1.5 text-center text-xs font-medium transition-colors min-[390px]:px-3 min-[390px]:text-sm lg:min-w-[5.5rem] lg:px-4 lg:py-2 ${
                      currentPath === item.href ||
                      (item.href !== '/' &&
                        currentPath.startsWith(`${item.href}/`))
                        ? 'bg-[var(--surface-strong)] text-[var(--foreground)] lg:bg-[var(--surface-strong)]'
                        : 'text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center lg:gap-3">
                <LanguageSwitch className="hidden shrink-0 lg:flex" />

                <Link
                  href={getWhatsappHref(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={content.cta}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] transition-transform hover:-translate-y-0.5 min-[360px]:w-auto min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-xs min-[360px]:font-semibold min-[480px]:px-4 min-[480px]:text-sm lg:h-auto lg:min-w-[13rem] lg:flex-none lg:px-5 lg:py-3"
                >
                  <span className="hidden min-[360px]:inline min-[480px]:hidden">
                    {compactCta}
                  </span>
                  <span className="hidden min-[480px]:inline">
                    {content.cta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        aria-hidden="true"
        className="h-[6.5rem] shrink-0 lg:h-[7.25rem]"
        style={headerHeight ? { height: `${headerHeight}px` } : undefined}
      />
    </>
  )
}
