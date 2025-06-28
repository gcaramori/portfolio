'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'

export function ProjectsContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start relative py-6">
      <FadeInBottom>
        <p className="block relative text-gray-500 font-inter drop-shadow-sm text-xl mb-8">
          {Languages[language]?.projects?.text1}
        </p>

        <div className="flex flex-wrap justify-between items-start gap-10 relative">
          <div className="flex flex-col justify-start items-start relative">
            <Image
              src="/projects/kylemore.png"
              alt="jsbjjkylemore"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src="/projects/criptobeer.png"
              alt="criptobeer"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src="/projects/unit5.png"
              alt="unit5gym"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src="/projects/performa.png"
              alt="performapanel"
              width={300}
              height={300}
            />
          </div>
        </div>
      </FadeInBottom>
    </div>
  )
}
