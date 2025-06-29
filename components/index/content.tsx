'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'

export function IndexContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start">
      <FadeInBottom>
        <h1 className="block relative font-rounded text-5xl lg:text-4xl 2xl:text-6xl uppercase max-w-[800px] text-right lg:text-left text-[var(--primary-bg)] mb-4 lg:mb-6 2xl:mb-10 drop-shadow-sm">
          {Languages[language]?.index?.title1}

          <span className="block md:inline-block drop-shadow-sm">
            {Languages[language]?.index?.title2}
          </span>

          <span className="block whitespace-nowrap font-bold 2xl:ml-2 drop-shadow-sm">
            Guilherme Caramori!
          </span>
        </h1>

        <p className="block text-xl sm:text-2xl text-right lg:text-left text-gray-300 font-inter drop-shadow-sm">
          {Languages[language]?.index?.subtitle2} / Freelancer Sênior
        </p>

        <p className="block text-lg sm:text-xl text-right lg:text-left text-[var(--primary-bg)] mt-5 font-inter drop-shadow-sm">
          {Languages[language]?.index?.subtitle1}
        </p>

        <Link
          href={
            language === 'pt-BR'
              ? 'https://api.whatsapp.com/send?phone=5519982646119&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho%20como%20desenvolvedor%20Full%20Stack.%20Podemos%20conversar%3F'
              : 'https://api.whatsapp.com/send?phone=5519982646119&text=Hi!%20I%20checked%20out%20your%20portfolio%20and%20would%20love%20to%20learn%20more%20about%20your%20work%20as%20a%20Full%20Stack%20Developer.%20Can%20we%20chat%3F'
          }
          target="_blank"
          className="font-inter inline-block mt-12 xl:mt-10 p-7 w-full lg:w-auto shadow-md bg-transparent text-[var(--button)] text-lg md:text-xl border-2 border-[var(--button)] font-semibold text-center uppercase drop-shadow-sm transition-colors hover:bg-[var(--button-hover)] hover:border-[var(--button-hover)] hover:text-white"
        >
          {Languages[language]?.index?.button}
        </Link>
      </FadeInBottom>
    </div>
  )
}
