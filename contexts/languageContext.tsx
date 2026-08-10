'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/languages'
import { defaultLocale, getLocaleFromPath } from '@/lib/locale'

type LanguageContextValue = {
  language: Locale
  setLanguage: (lang: Locale) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: defaultLocale,
  setLanguage: () => null,
})

type LanguageProviderProps = {
  children: ReactNode
  initialLanguage?: Locale
}

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const LanguageProvider = ({
  children,
  initialLanguage = defaultLocale,
}: LanguageProviderProps) => {
  const pathname = usePathname()
  const [language, setLanguage] = useState<Locale>(initialLanguage)

  useEffect(() => {
    const pathLanguage = getLocaleFromPath(pathname)

    if (isLocale(pathLanguage)) {
      setLanguage(pathLanguage)
    }
  }, [pathname])

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language)
    }
  }, [language])

  const value: LanguageContextValue = { language, setLanguage }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
