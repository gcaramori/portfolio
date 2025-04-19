'use client'

import { useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { House, ScrollText, Code, Wrench } from 'lucide-react'
import Languages from '@/lib/languages'
import { LanguageContext } from '@/contexts/languageContext'
import { Tooltip } from '../tooltip'

interface ISidebarControlProps {
  id: string
  link: string
}

export function SidebarControls({ id, link }: ISidebarControlProps) {
  const searchParams = useSearchParams()

  const activeSession = searchParams.get('session')

  const { language } = useContext(LanguageContext)

  function handleScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function handleControlIcon(id: string) {
    switch (id) {
      case 'about':
        return <ScrollText />
      case 'projects':
        return <Code />
      case 'skills':
        return <Wrench />
      default:
        return <House />
    }
  }

  return (
    <Tooltip
      content={Languages[language] && Languages[language].sidebar[id]}
      position="right"
    >
      <Link
        href={link}
        className={`block relative p-3 rounded-lg transition-colors hover:bg-gray-300 ${
          activeSession === id ? 'bg-gray-300' : ''
        }`}
        onClick={() => handleScrollToSection(id)}
      >
        {handleControlIcon(id)}
      </Link>
    </Tooltip>
  )
}
