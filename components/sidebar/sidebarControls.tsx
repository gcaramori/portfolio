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

export function SidebarControls({ id, link }: ISidebarControlProps) {
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
      content={Languages[language] && Languages[language].sidebar[id]}
      position="right"
    >
      <Link
        href={link}
        className={`block relative p-3 rounded-lg transition-colors hover:bg-gray-300 ${
          isActive ? 'bg-gray-300' : ''
        }`}
      >
        {handleControlIcon(id)}
      </Link>
    </Tooltip>
  )
}
