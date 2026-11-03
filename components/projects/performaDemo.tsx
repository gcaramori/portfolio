'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { motionContent } from '@/lib/languages'

export function PerformaDemo({ interactive = false, english = false }: { interactive?: boolean; english?: boolean }) {
  const [step, setStep] = useState(-1)
  const [registered, setRegistered] = useState(false)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const running = useRef(false)
  const reduced = useReducedMotion()
  const text = motionContent[english ? 'en' : 'pt-BR']
  const labels = text.labels
  function clear() { timers.current.forEach(clearTimeout); timers.current = []; running.current = false }
  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  function run(duplicate: boolean) {
    if (running.current || (duplicate && !registered)) return
    clear()
    running.current = true
    setBusy(true)
    setMessage('')
    const finish = () => {
      setRegistered(true)
      running.current = false
      setBusy(false)
      setMessage(duplicate ? text.ignored : text.success)
    }
    const count = duplicate ? 3 : 4
    if (reduced) { setStep(count - 1); finish(); return }
    setStep(0)
    for (let i = 1; i < count; i++) timers.current.push(setTimeout(() => setStep(i), i * 450))
    timers.current.push(setTimeout(finish, count * 450))
  }
  if (!interactive) {
    return (
      <div className="performa-demo">
        <p className="text-xs leading-5 text-[var(--muted-foreground)]">
          {text.disclaimer}
        </p>
        <ol className="mt-5">
          {labels.map((label, index) => (
            <li key={label} className="relative flex min-w-0 items-center gap-4 pb-5 last:pb-0">
              {index < labels.length - 1 && (
                <span aria-hidden="true" className="absolute top-5 bottom-0 left-[9px] w-px bg-[var(--border)]" />
              )}
              <motion.span
                aria-hidden="true"
                initial={false}
                whileInView={reduced ? undefined : {
                  backgroundColor: ['#efe6db', '#b9682f', '#efe6db'],
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25, duration: 0.6 }}
                className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--accent-soft)] bg-[var(--surface-strong)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" />
              </motion.span>
              <span className="min-w-0 text-sm leading-6">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  return <div className="performa-demo">
    <p className="text-sm text-[var(--muted-foreground)]">{text.disclaimer}</p>
    <ol className="my-6 grid gap-3 xl:grid-cols-4">
      {labels.map((label, index) => <motion.li key={label}
        initial={false}
        whileInView={!interactive && !reduced ? { backgroundColor: ['#f8f3ec', '#d9b79f', '#f8f3ec'] } : undefined}
        viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.4 }}
        className="rounded-lg border p-4 text-sm"
        style={interactive ? { backgroundColor: step === index ? 'var(--accent-soft)' : 'var(--surface)' } : undefined}>
        <span className="mb-2 block text-xs">{index + 1}</span>{label}
      </motion.li>)}
    </ol>
    {interactive && <><div className="flex flex-wrap gap-3">
      <button type="button" className="secondary-link disabled:opacity-40" disabled={busy || registered} onClick={() => run(false)}>{text.simulate}</button>
      <button type="button" className="secondary-link disabled:opacity-40" disabled={busy || !registered} onClick={() => run(true)}>{text.duplicate}</button>
      <button type="button" className="secondary-link" onClick={() => { clear(); setBusy(false); setRegistered(false); setStep(-1); setMessage('') }}>{text.reset}</button>
    </div><p role="status" aria-live="polite" className="mt-4 min-h-12 text-sm">{message}</p></>}
  </div>
}
