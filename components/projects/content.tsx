'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'
import { ProjectLinkCard } from './projectLinkCard'
import jsbjjkylemore from '../../public/projects/kylemore.png'
import criptobeer from '../../public/projects/criptobeer.png'
import unit5 from '../../public/projects/unit5.png'
import performapanel from '../../public/projects/performa.png'

export function ProjectsContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start relative py-6">
      <FadeInBottom>
        <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm mb-8 text-md xl:text-lg 2xl:text-2xl">
          {Languages[language]?.projects?.text1}
        </p>

        <div className="flex flex-wrap justify-between items-start gap-10 relative">
          <ProjectLinkCard
            href="/projects/jsbjjkylemore"
            imageSrc={jsbjjkylemore}
            alt="jsbjjkylemore"
          />

          <ProjectLinkCard
            href="/projects/criptobeer"
            imageSrc={criptobeer}
            alt="criptobeer"
          />

          <ProjectLinkCard
            href="/projects/unit5"
            imageSrc={unit5}
            alt="unit5"
          />

          <ProjectLinkCard
            href="/projects/performapanel"
            imageSrc={performapanel}
            alt="performapanel"
          />
        </div>
      </FadeInBottom>
    </div>
  )
}
