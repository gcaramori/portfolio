'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'
import Link from 'next/link'

export function AboutContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start relative py-6">
      <FadeInBottom>
        <div className="flex flex-col justify-start gap-6 2xl:gap-8 relative text-md 2xl:text-2xl">
          <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm">
            {Languages[language]?.about?.text1}
          </p>

          <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm">
            {Languages[language]?.about?.text2}
          </p>

          <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm">
            {Languages[language]?.about?.text3}
          </p>

          <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm">
            {Languages[language]?.about?.text4}

            <Link
              href={
                language === 'pt-BR'
                  ? 'https://api.whatsapp.com/send?phone=5519982646119&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho%20como%20desenvolvedor%20Full%20Stack.%20Podemos%20conversar%3F'
                  : 'https://api.whatsapp.com/send?phone=5519982646119&text=Hi!%20I%20checked%20out%20your%20portfolio%20and%20would%20love%20to%20learn%20more%20about%20your%20work%20as%20a%20Full%20Stack%20Developer.%20Can%20we%20chat%3F'
              }
              target="_blank"
              className="inline-block ml-1 drop-shadow-xs font-bold transition-opacity hover:opacity-60"
            >
              {Languages[language]?.about.cta}
            </Link>
          </p>
        </div>
      </FadeInBottom>
    </div>
  )
}
