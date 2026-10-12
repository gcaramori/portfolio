'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Search,
  X,
} from 'lucide-react'
import type { GuideSection } from '@/lib/interview-guide'
import { MarkdownContent } from './markdown-content'
import './interview-guide.css'

const storageKey = 'interview-guide:progress:v1'
const shortcuts = [
  { label: 'Começar hoje', index: 0 },
  { label: 'Plano de 14 dias', index: 2 },
  { label: 'Encontrar vagas', index: 8 },
  { label: 'Mensagens prontas', index: 10 },
]
const resources = [
  {
    name: 'LinkedIn Jobs',
    description: 'Vagas e contatos com recrutadores.',
    href: 'https://www.linkedin.com/jobs/',
    category: 'Vagas',
  },
  {
    name: 'Himalayas',
    description: 'Busca remota por localização e fuso.',
    href: 'https://himalayas.app/',
    category: 'Vagas',
  },
  {
    name: 'Wellfound',
    description: 'Startups e oportunidades de produto.',
    href: 'https://wellfound.com/jobs',
    category: 'Vagas',
  },
  {
    name: 'Get on Board',
    description: 'Tecnologia na América Latina.',
    href: 'https://www.getonbrd.com/',
    category: 'Vagas',
  },
  {
    name: 'TypeScript Handbook',
    description: 'Narrowing e modelagem de tipos.',
    href: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
    category: 'Estudo',
  },
  {
    name: 'Node.js',
    description: 'Event loop e trabalho bloqueante.',
    href: 'https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop',
    category: 'Estudo',
  },
]

function normalize(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function snippet(markdown: string, query: string) {
  const plain = markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*`>|]/g, '')
    .replace(/\s+/g, ' ')
  const index = normalize(plain).indexOf(normalize(query))
  const start = Math.max(0, index - 55)
  return `${start ? '…' : ''}${plain.slice(start, start + 180)}…`
}

export function InterviewGuide({
  introduction,
  sections,
  supplements,
}: {
  introduction: string
  sections: GuideSection[]
  supplements: GuideSection[]
}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(sections[0].id)
  const [completed, setCompleted] = useState<string[]>([])
  const [opened, setOpened] = useState<string[]>([])
  const [storageNotice, setStorageNotice] = useState('')
  const ready = useRef(false)
  const storageAvailable = useRef(true)
  const progress = useRef<string[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const parsed: unknown = JSON.parse(saved)
        if (
          !Array.isArray(parsed) ||
          !parsed.every((item) => typeof item === 'string')
        ) {
          throw new Error('Invalid progress')
        }
        const valid = new Set([
          ...Array.from({ length: 14 }, (_, index) => `day:${index + 1}`),
          ...Array.from(
            sections[12].markdown.matchAll(/^- \[ \] (.+)$/gm),
            (match) =>
              `${sections[12].id}:check:${encodeURIComponent(match[1].trim())}`,
          ),
        ])
        const restored = [...new Set(parsed)].filter((id) => valid.has(id))
        progress.current = restored
        // Restore browser-local state only after hydration.
        requestAnimationFrame(() => setCompleted(restored))
      }
    } catch {
      storageAvailable.current = false
      requestAnimationFrame(() =>
        setStorageNotice('O progresso ficará salvo apenas nesta sessão.'),
      )
    }
    ready.current = true

    function revealHash() {
      let id: string
      try {
        id = decodeURIComponent(window.location.hash.slice(1))
      } catch {
        return
      }
      if (supplements.some((item) => item.id === id)) {
        setOpened((previous) =>
          previous.includes(id) ? previous : [...previous, id],
        )
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView(),
        )
      }
    }
    revealHash()
    window.addEventListener('hashchange', revealHash)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-180px 0px -55% 0px', threshold: 0 },
    )
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', revealHash)
    }
  }, [sections, supplements])

  function toggle(id: string) {
    const next = progress.current.includes(id)
      ? progress.current.filter((item) => item !== id)
      : [...progress.current, id]
    progress.current = next
    setCompleted(next)
    if (ready.current && storageAvailable.current) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        storageAvailable.current = false
        setStorageNotice('O progresso ficará salvo apenas nesta sessão.')
      }
    }
  }

  function openSupplement(id: string) {
    setOpened((previous) =>
      previous.includes(id) ? previous : [...previous, id],
    )
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }

  const trimmed = query.trim()
  const results = trimmed
    ? [...sections, ...supplements].filter((item) =>
        normalize(`${item.title} ${item.markdown}`).includes(
          normalize(trimmed),
        ),
      )
    : []
  const days = completed.filter((id) =>
    /^day:(?:[1-9]|1[0-4])$/.test(id),
  ).length
  const checks = completed.filter((id) =>
    id.startsWith(`${sections[12].id}:check:`),
  ).length
  const rendererProps = { completed, toggle, openSupplement }

  const indexLinks = (
    <nav aria-label="Seções do guia">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? 'location' : undefined}
          className={active === section.id ? 'is-active' : ''}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          {section.title.replace(/^\d+\. /, '')}
        </a>
      ))}
      <a href="#materiais-complementares">
        <span>
          <BookOpen size={13} />
        </span>
        Histórias e exercícios
      </a>
    </nav>
  )

  return (
    <div className="interview-guide container py-10 md:py-14">
      <header className="guide-hero">
        <div>
          <p className="section-label">
            Carreira internacional / Guia de preparação
          </p>
          <h1>
            Seu próximo passo
            <br />
            começa com preparo.
          </h1>
          <p className="guide-intro">
            Um guia para transformar experiência em boas entrevistas. Técnica,
            inglês, comunicação e manejo da ansiedade, com um plano que cabe
            na sua rotina e orienta a busca de vagas.
          </p>
          <div className="guide-hero-meta">
            <span>
              <Clock3 size={15} />
              45 min ou 2 h por dia
            </span>
            <span>Atualizado em 12 out. 2026</span>
          </div>
          <div className="guide-shortcuts">
            {shortcuts.map(({ label, index }, i) => (
              <a
                key={label}
                href={`#${sections[index].id}`}
                className={i === 0 ? 'primary-link' : 'secondary-link'}
              >
                {label}
                <ArrowDown size={15} />
              </a>
            ))}
          </div>
        </div>
        <aside
          className="guide-progress"
          aria-label="Seu progresso de preparação"
        >
          <span className="section-label">Um dia de cada vez</span>
          <div className="guide-progress-number">
            {days}
            <span>/ 14 dias</span>
          </div>
          <p>Preparação em movimento</p>
          <progress value={days} max={14} aria-label="Dias concluídos" />
          <div className="guide-check-count">
            <Check size={16} />
            {checks} de 9 itens de prontidão
          </div>
          <p className="guide-local-note">
            Marque suas entregas ao longo do guia. Seu progresso fica neste
            navegador.
          </p>
          {storageNotice && (
            <p role="status" className="guide-storage-notice">
              {storageNotice}
            </p>
          )}
        </aside>
      </header>

      <section className="guide-search-area" aria-label="Buscar no guia">
        <label className="guide-search">
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busque um assunto: inglês, webhooks, currículo…"
            aria-label="Buscar no guia e nos materiais"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpar busca"
            >
              <X size={17} />
            </button>
          )}
        </label>
        <p className="guide-search-hint" role="status">
          {trimmed
            ? `${results.length} resultado${results.length === 1 ? '' : 's'} para “${trimmed}”`
            : `${sections.length} seções · ${supplements.length} materiais complementares · Leia no seu ritmo`}
        </p>
        {trimmed && (
          <div className="guide-search-results">
            {results.length === 0 ? (
              <p>Nenhum resultado. Tente outro assunto ou limpe a busca.</p>
            ) : (
              results.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    if (item.kind !== 'section') openSupplement(item.id)
                  }}
                >
                  <strong>
                    {item.title}
                    <ArrowDown size={14} />
                  </strong>
                  <span>{snippet(item.markdown, trimmed)}</span>
                </a>
              ))
            )}
          </div>
        )}
      </section>

      <div className="guide-layout">
        <aside className="guide-sidebar">
          <p className="section-label">Neste guia</p>
          {indexLinks}
          <p className="guide-sidebar-note">
            Prepare respostas com experiências reais. Use os exercícios para
            explorar novas decisões.
          </p>
        </aside>
        <div className="guide-reading">
          <details className="guide-mobile-index">
            <summary>
              Explorar as seções
              <ChevronDown size={17} />
            </summary>
            {indexLinks}
          </details>
          <div className="guide-context">
            <BookOpen size={19} aria-hidden="true" />
            <MarkdownContent
              markdown={introduction}
              scope="introducao"
              {...rendererProps}
            />
          </div>
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="guide-section">
              <div className="guide-section-heading">
                <span className="guide-section-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>{section.title.replace(/^\d+\. /, '')}</h2>
              </div>
              {index === 8 && (
                <div className="guide-resource-grid">
                  {resources
                    .filter((item) => item.category === 'Vagas')
                    .map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="guide-resource"
                      >
                        <span>
                          {item.category}
                          <ArrowUpRight size={16} />
                        </span>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                      </a>
                    ))}
                </div>
              )}
              {index === 3 && (
                <div className="guide-resource-grid">
                  {resources
                    .filter((item) => item.category === 'Estudo')
                    .map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="guide-resource"
                      >
                        <span>
                          {item.category}
                          <ArrowUpRight size={16} />
                        </span>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                      </a>
                    ))}
                </div>
              )}
              <MarkdownContent
                markdown={section.markdown}
                scope={section.id}
                {...rendererProps}
              />
            </section>
          ))}
          <section id="materiais-complementares" className="guide-section">
            <p className="section-label">Para aprofundar</p>
            <h2 className="guide-supplements-title">Histórias e exercícios</h2>
            <p className="guide-supplements-intro">
              Pratique sua contribuição, as decisões e a validação. Os cenários
              de Black Friday são hipotéticos; os relatos mantêm os limites do
              que está confirmado.
            </p>
            <div className="guide-supplements">
              {supplements.map((item) => (
                <details
                  key={item.id}
                  id={item.id}
                  open={opened.includes(item.id)}
                  onToggle={(event) => {
                    const isOpen = event.currentTarget.open
                    setOpened((previous) =>
                      isOpen
                        ? previous.includes(item.id)
                          ? previous
                          : [...previous, item.id]
                        : previous.filter((id) => id !== item.id),
                    )
                  }}
                >
                  <summary>
                    <span>
                      <span className="guide-material-label">
                        {item.kind === 'exercise'
                          ? 'Exercício hipotético'
                          : /^0[12]-/.test(item.id)
                            ? 'Realização do portfólio'
                            : 'Relato pessoal'}
                      </span>
                      <strong>{item.title}</strong>
                    </span>
                    <ChevronDown size={19} />
                  </summary>
                  <MarkdownContent
                    markdown={item.markdown}
                    scope={item.id}
                    {...rendererProps}
                  />
                </details>
              ))}
            </div>
          </section>
          <footer className="guide-footer">
            <span>Guia de entrevistas internacionais</span>
            <a href="#">Voltar ao início ↑</a>
          </footer>
        </div>
      </div>
    </div>
  )
}
