'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { House, ScrollText, Code, Wrench } from 'lucide-react'
import Languages from '@/lib/languages'
import { LanguageContext } from '@/contexts/languageContext'
import { Tooltip } from '../tooltip'

interface ISidebarControlProps {
  id: string
  link: string
}

export function SectionControls({ id, link }: ISidebarControlProps) {
  const pathname = usePathname()

  const { language } = useContext(LanguageContext)

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

  const isActive = pathname === link || (pathname === '/' && id === 'index')

  return (
    <Tooltip
      content={Languages[language] && Languages[language].topbar[id]}
      position="right"
    >
      <Link
        href={link}
        className={`block relative p-3 rounded-lg text-[var(--background-gradient)] transition-colors hover:bg-[#3A7CA5] ${
          isActive ? 'bg-[#3A7CA5]' : ''
        }`}
      >
        {handleControlIcon(id)}
      </Link>
    </Tooltip>
  )
}
