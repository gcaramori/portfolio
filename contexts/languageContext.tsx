'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'

type LanguageContextValue = {
  language: string
  setLanguage: (lang: string) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'pt-BR',
  setLanguage: () => null,
})

type LanguageProviderProps = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'pt-BR'
    }
    return 'pt-BR'
  })

  useEffect(() => {
    if (language && typeof window !== 'undefined') {
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
