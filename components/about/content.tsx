'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'

export function AboutContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start relative py-6">
      <FadeInBottom>
        <div className="flex flex-col justify-start gap-4 relative text-md 2xl:text-2xl">
          <p className="block relative text-gray-500 font-inter drop-shadow-sm">
            {Languages[language]?.about?.text1}
          </p>

          <p className="block relative text-gray-500 font-inter drop-shadow-sm">
            {Languages[language]?.about?.text2}
          </p>

          <p className="block relative text-gray-500 font-inter drop-shadow-sm">
            {Languages[language]?.about?.text3}
          </p>

          <p className="block relative text-gray-500 font-inter drop-shadow-sm">
            {Languages[language]?.about?.text4}
          </p>
        </div>
      </FadeInBottom>
    </div>
  )
}
