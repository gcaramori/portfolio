'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export function ExperienceTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 35%'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24 })
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        ref.current?.querySelectorAll<HTMLElement>('.experience-entry').forEach(entry => {
          entry.dataset.active = String(entry.getBoundingClientRect().top <= innerHeight * 0.55)
        })
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return <div ref={ref} className="experience-timeline relative pl-7">
    <div aria-hidden="true" className="absolute inset-y-0 left-1 w-px bg-[var(--border)]">
      <motion.div className="h-full origin-top bg-[var(--accent)]"
        style={{ scaleY: reduced ? 1 : smooth }} />
    </div>
    {children}
  </div>
}

export function CaseReading({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28 })
  return <div ref={ref}>
    <motion.div aria-hidden="true" className="case-progress fixed inset-x-0 z-[101] h-0.5 origin-left bg-[var(--accent)] print:hidden"
      style={{ top: 'var(--topbar-height)', scaleX: reduced ? scrollYProgress : smooth }} />
    {children}
  </div>
}

export function CaseIndex({ titles, label }: { titles: string[]; label: string }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    let frame = 0
    function update() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--topbar-height')) || 116
        let current = 0
        titles.forEach((_, index) => {
          const heading = document.getElementById('case-section-' + (index + 1))
          if (heading && heading.getBoundingClientRect().top <= top + 64) current = index
        })
        setActive(previous => previous === current ? previous : current)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [titles])
  return <nav aria-label={label} className="case-index self-start print:hidden">
    <p className="mb-4 text-sm font-semibold">{label}</p>
    <ul className="space-y-3 border-l border-[var(--border)]">
      {titles.map((title, index) => <li key={title}>
        <a href={'#case-section-' + (index + 1)}
          aria-current={active === index ? 'location' : undefined}
          onClick={() => document.getElementById('case-section-' + (index + 1))?.focus({ preventScroll: true })}
          className="block border-l-2 border-transparent px-4 text-sm leading-6 text-[var(--muted-foreground)] aria-[current=location]:border-[var(--accent)] aria-[current=location]:text-[var(--foreground)]">
          {title}
        </a>
      </li>)}
    </ul>
  </nav>
}
