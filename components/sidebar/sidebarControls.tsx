'use client'

import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { House, ScrollText } from 'lucide-react'
import Languages from '@/lib/languages'
import { LanguageContext } from '@/contexts/languageContext'
import { useContext } from 'react'

interface ISidebarControlProps {
  id: string
  link: string
}

export function SidebarControls({ id, link }: ISidebarControlProps) {
  const { language } = useContext(LanguageContext)

  function handleControlIcon(id: string) {
    switch (id) {
      case 'about':
        return <ScrollText />
      default:
        return <House />
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={link}
            className="block relative p-3 rounded-lg transition-colors hover:bg-gray-300"
          >
            {handleControlIcon(id)}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{Languages[language] && Languages[language].sidebar[id]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
