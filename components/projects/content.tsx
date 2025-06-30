'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'
import jsbjjkylemore from '../../public/projects/kylemore.png'
import criptobeer from '../../public/projects/criptobeer.png'
import unit5 from '../../public/projects/unit5.png'
import performapanel from '../../public/projects/performa.png'

export function ProjectsContent() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="container flex h-full flex-col justify-start relative py-6">
      <FadeInBottom>
        <p className="block relative text-[var(--primary-bg)] font-inter drop-shadow-sm mb-8">
          {Languages[language]?.projects?.text1}
        </p>

        <div className="flex flex-wrap justify-between items-start gap-10 relative">
          <Link
            href="/projects/jsbjjkylemore"
            className="flex flex-col justify-start items-start relative"
          >
            <Image
              src={jsbjjkylemore}
              alt="jsbjjkylemore"
              width={300}
              height={150}
              placeholder="blur"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src={criptobeer}
              alt="criptobeer"
              width={300}
              height={150}
              placeholder="blur"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src={unit5}
              alt="unit5gym"
              width={300}
              height={150}
              placeholder="blur"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div className="flex flex-col justify-start items-start relative">
            <Image
              src={performapanel}
              alt="performapanel"
              width={300}
              height={150}
              placeholder="blur"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </FadeInBottom>
    </div>
  )
}
