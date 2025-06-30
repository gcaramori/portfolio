'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/contexts/languageContext'
import Languages from '@/lib/languages'
import FadeInBottom from '../fadeInBottom'
import jsbjjkylemore from '../../public/projects/kylemore.png'
import { MoveLeft } from 'lucide-react'

export function JSBJJKylemoreContent() {
  const router = useRouter()

  const { language } = useContext(LanguageContext)

  return (
    <div className="container block h-full relative py-6">
      <FadeInBottom>
        <div className="flex justify-between items-start relative">
          <button
            className="block relative text-[var(--primary-bg)] cursor-pointer"
            onClick={() => router.back()}
          >
            <MoveLeft />
          </button>

          <Image
            src={jsbjjkylemore}
            alt="jsbjjkylemore"
            width={400}
            height={200}
            placeholder="blur"
            objectFit="cover"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />

          <div className="flex flex-col justify-start items-start max-w-lg font-inter text-[var(--primary-bg)]">
            <p className="block relative drop-shadow-sm mb-8">
              {Languages[language]?.jsbjjkylemore?.text1}
            </p>
          </div>
        </div>
      </FadeInBottom>
    </div>
  )
}
