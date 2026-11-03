'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/contact'
import { copyEmailContent, type Locale } from '@/lib/languages'

export function CopyEmailButton({ language }: { language: Locale }) {
  const content = copyEmailContent[language]
  const [state, setState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mounted = useRef(false)
  const pending = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  async function copyEmail() {
    if (pending.current) return
    pending.current = true
    if (timer.current) clearTimeout(timer.current)
    setState('pending')
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      if (!mounted.current) return
      setState('success')
      timer.current = setTimeout(() => setState('idle'), 2500)
    } catch {
      if (mounted.current) setState('error')
    } finally {
      pending.current = false
    }
  }

  const success = state === 'success'
  const transition = 'transition-opacity duration-[180ms] motion-reduce:transition-none'

  return (
    <div className="copy-email min-w-0 max-w-full">
      <button
        type="button"
        className="secondary-link w-full justify-center disabled:cursor-wait"
        onClick={copyEmail}
        disabled={state === 'pending'}
        aria-label={success ? content.success : content.label}
      >
        <span aria-hidden="true" className="grid items-center">
          <span className={`col-start-1 row-start-1 inline-flex items-center gap-2 ${transition} ${success ? 'opacity-0' : 'opacity-100'}`}>
            <Copy className="h-4 w-4 shrink-0" />{content.label}
          </span>
          <span className={`col-start-1 row-start-1 inline-flex items-center gap-2 ${transition} ${success ? 'opacity-100' : 'opacity-0'}`}>
            <Check className="h-4 w-4 shrink-0" />{content.success}
          </span>
        </span>
      </button>
      <div role="status" aria-atomic="true" className={`${state === 'error' ? 'mt-2 ' : ''}max-w-xs text-sm leading-5 text-[var(--muted-foreground)]`}>
        {success && <span className="sr-only">{content.success}</span>}
        {state === 'error' && <>
          <p>{content.error}</p>
          <p className="select-text break-all">{CONTACT_EMAIL}</p>
        </>}
      </div>
    </div>
  )
}
