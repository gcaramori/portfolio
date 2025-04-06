'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'

export function MainTexts() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="flex h-full w-full lg:w-[60%] xl:w-[50%] flex-col justify-start lg:justify-center items-end lg:items-start py-4 px-8 lg:p-10 2xl:p-20 order-2 lg:order-1">
      <h1 className="block relative font-rounded text-5xl lg:text-4xl 2xl:text-6xl uppercase max-w-[800px] text-right lg:text-left text-[var(--primary-bg)] mb-4 lg:mb-6 2xl:mb-10">
        {Languages[language]?.home?.title1}

        <span className="block md:inline-block">
          {Languages[language]?.home?.title2}
        </span>

        <span className="font-bold ml-2">Guilherme Caramori</span>
      </h1>

      <p className="block text-xl sm:text-2xl text-right lg:text-left text-gray-400 font-inter">
        {Languages[language]?.home?.subtitle2} / Freelancer
      </p>

      <p className="block text-lg sm:text-xl text-right lg:text-left text-[var(--primary-bg)] mt-5 font-inter">
        {Languages[language]?.home?.subtitle1}
      </p>

      <a
        href={
          language === 'pt-BR'
            ? 'https://api.whatsapp.com/send?phone=5519982646119&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho%20como%20desenvolvedor%20Full%20Stack.%20Podemos%20conversar%3F'
            : 'https://api.whatsapp.com/send?phone=5519982646119&text=Hi!%20I%20checked%20out%20your%20portfolio%20and%20would%20love%20to%20learn%20more%20about%20your%20work%20as%20a%20Full%20Stack%20Developer.%20Can%20we%20chat%3F'
        }
        target="_blank"
        className="inline-block mt-12 xl:mt-10 p-7 w-full lg:w-auto shadow-md bg-transparent text-[var(--button)] text-lg md:text-xl border-2 border-[var(--button)] font-semibold text-center uppercase transition-colors hover:bg-[var(--button-hover)] hover:border-[var(--button-hover)] hover:text-white"
      >
        {Languages[language]?.home?.button}
      </a>
    </div>
  )
}
