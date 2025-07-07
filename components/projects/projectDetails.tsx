'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'
import { MoveLeft } from 'lucide-react'

type ProjectDetailsProps = {
  imageSrc: StaticImageData
  alt: string
  link: string
  langKey: keyof (typeof Languages)['jsbjjkylemore']
}

export function ProjectDetails({
  imageSrc,
  alt,
  link,
  langKey,
}: ProjectDetailsProps) {
  const router = useRouter()
  const { language } = useContext(LanguageContext)

  const lang = Languages[language]?.[langKey]

  return (
    <div className="container block h-full relative py-6">
      <FadeInBottom>
        <div className="flex justify-between items-start relative">
          <button
            className="block relative text-[var(--primary-bg)] cursor-pointer"
            onClick={() => router.back()}
          >
            <MoveLeft size="2rem" />
          </button>

          <Link href={link} target="_blank">
            <Image
              src={imageSrc}
              alt={alt}
              width={350}
              height={150}
              placeholder="blur"
              objectFit="cover"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>

          <div className="flex flex-col justify-start items-start gap-6 max-w-lg font-inter">
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-lg xl:text-xl font-bold text-slate-100 drop-shadow-sm">
                {lang?.title1}
              </h2>
              <p className="text-md xl:text-lg text-[var(--primary-bg)] drop-shadow-sm">
                {lang?.text1}
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-lg xl:text-xl font-bold text-slate-100 drop-shadow-sm">
                {lang?.title2}
              </h2>
              <p className="text-md xl:text-lg text-[var(--primary-bg)] drop-shadow-sm">
                {lang?.text2}
              </p>
            </div>
          </div>
        </div>
      </FadeInBottom>
    </div>
  )
}
