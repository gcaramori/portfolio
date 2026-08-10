'use client'

import { useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { LanguageContext } from '@/contexts/languageContext'
import { locales } from '@/lib/languages'
import { getLocalizedPath } from '@/lib/locale'

type LanguageSwitchProps = {
  className?: string
}

export function LanguageSwitch({ className = '' }: LanguageSwitchProps) {
  const { language, setLanguage } = useContext(LanguageContext)
  const pathname = usePathname()
  const router = useRouter()

  function handleLanguageChange(locale: typeof language) {
    setLanguage(locale)
    router.push(getLocalizedPath(pathname, locale))
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative inline-grid h-9 w-20 cursor-pointer grid-cols-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-0.5 lg:h-10 lg:w-24 lg:p-1">
        <span
          aria-hidden="true"
          className={`absolute top-0.5 bottom-0.5 left-0.5 w-[2.375rem] rounded-full bg-[var(--foreground)] transition-transform duration-300 ease-out lg:top-1 lg:bottom-1 lg:left-1 lg:w-11 ${
            language === 'en'
              ? 'translate-x-[2.375rem] lg:translate-x-11'
              : 'translate-x-0'
          }`}
        />

        {locales.map((locale) => {
          const active = locale === language

          return (
            <button
              key={locale}
              type="button"
              onClick={() => handleLanguageChange(locale)}
              aria-label={locale === 'pt-BR' ? 'Português' : 'English'}
              aria-pressed={active}
              className={`relative z-10 inline-flex h-8 w-[2.375rem] cursor-pointer items-center justify-center rounded-full text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 lg:w-11 lg:text-xs lg:tracking-[0.18em] ${
                active
                  ? 'text-[var(--background)]'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              {locale === 'pt-BR' ? 'PT' : 'EN'}
            </button>
          )
        })}
      </div>
    </div>
  )
}
