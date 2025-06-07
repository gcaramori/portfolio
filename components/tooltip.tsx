'use client'

import React, { ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({
  children,
  content,
  position = 'right',
}: TooltipProps) {
  const positionStyles = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  }

  const caretStyles = {
    top: 'bottom-[-4px] left-1/2 transform -translate-x-1/2 border-t-[#0F172A] border-t-8 border-x-transparent border-x-4 border-b-0',
    bottom:
      'top-[-4px] left-1/2 transform -translate-x-1/2 border-b-[#0F172A] border-b-8 border-x-transparent border-x-4 border-t-0',
    left: 'right-[-4px] top-1/2 transform -translate-y-1/2 border-l-[#0F172A] border-l-8 border-y-transparent border-y-4 border-r-0',
    right:
      'left-[-4px] top-1/2 transform -translate-y-1/2 border-r-[#0F172A] border-r-8 border-y-transparent border-y-4 border-l-0',
  }

  return (
    <div className="relative group">
      {children}

      <div
        className={`block whitespace-nowrap absolute z-10 bg-[var(--background-gradient)] text-[#F1F5F9] text-sm px-3 py-1 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${positionStyles[position]}`}
      >
        {content}
        <span className={`absolute border-solid ${caretStyles[position]}`} />
      </div>
    </div>
  )
}
