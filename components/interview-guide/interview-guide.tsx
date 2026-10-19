'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Search,
  X,
} from 'lucide-react'
import type { getInterviewGuide } from '@/lib/interview-guide'
import {
  dueReviews,
  emptyProgress,
  legacyStorageKey,
  restoreProgress,
  studyStorageKey,
  type StudyProgress,
} from '@/lib/interview-curriculum'
import { MarkdownContent } from './markdown-content'
import './interview-guide.css'

type GuideProps = Awaited<ReturnType<typeof getInterviewGuide>>
const interviewPlan = '3-rotina-e-plano-de-14-dias'

function normalize(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function excerpt(markdown: string, query: string) {
  const plain = markdown.replace(/[#*`>|]/g, '').replace(/\s+/g, ' ')
  const offset = Math.max(0, normalize(plain).indexOf(normalize(query)) - 45)
  return `${offset ? '…' : ''}${plain.slice(offset, offset + 170)}…`
}

export function InterviewGuide({
  introduction,
  sections,
  supplements,
  lessons,
  modules,
  sources,
  glossary,
  metadata,
}: GuideProps) {
  const [activeId, setActiveId] = useState(lessons[0].id)
  const [progress, setProgress] = useState<StudyProgress>(emptyProgress)
  const progressRef = useRef<StudyProgress>(emptyProgress())
  const [legacy, setLegacy] = useState<string[]>([])
  const legacyRef = useRef<string[]>([])
  const [opened, setOpened] = useState<string[]>([])
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [ready, setReady] = useState(false)
  const [clock, setClock] = useState<number | null>(null)
  const available = useRef({ study: true, legacy: true })
  const lessonHeading = useRef<HTMLHeadingElement>(null)
  const current = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0]
  const position = lessons.findIndex((lesson) => lesson.id === current.id)
  const currentModule = modules.find(
    (module) => module.id === current.moduleId,
  )!
  const references = [...sections, ...supplements]
  const validIds = lessons.map((lesson) => lesson.id)
  const done = progress.completed[current.id]
  const reviews = clock === null ? [] : dueReviews(progress, clock)
  const completionCount = Object.keys(progress.completed).length
  const nextLesson =
    lessons.find((lesson) => !progress.completed[lesson.id]) ?? lessons[0]

  function save(next: StudyProgress) {
    progressRef.current = next
    setProgress(next)
    if (ready && available.current.study) {
      try {
        localStorage.setItem(studyStorageKey, JSON.stringify(next))
      } catch {
        available.current.study = false
        setNotice(
          'Não foi possível salvar a trilha. O progresso desta visita fica apenas na sessão.',
        )
      }
    }
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let restored = emptyProgress()
      const notices: string[] = []
      try {
        const stored = localStorage.getItem(studyStorageKey)
        if (stored)
          restored = restoreProgress(
            JSON.parse(stored),
            lessons.map((lesson) => lesson.id),
          )
      } catch {
        available.current.study = false
        notices.push(
          'Não foi possível restaurar a trilha; esta visita usa progresso de sessão. O registro anterior foi preservado.',
        )
      }
      progressRef.current = restored
      setProgress(restored)
      if (restored.lastLesson) setActiveId(restored.lastLesson)
      try {
        const stored = localStorage.getItem(legacyStorageKey)
        if (stored) {
          const parsed: unknown = JSON.parse(stored)
          if (
            !Array.isArray(parsed) ||
            !parsed.every((item) => typeof item === 'string')
          )
            throw new Error('Invalid legacy progress')
          legacyRef.current = [...new Set(parsed)]
          setLegacy(legacyRef.current)
        }
      } catch {
        available.current.legacy = false
        notices.push(
          'O plano antigo não pôde ser restaurado; suas marcações anteriores foram preservadas no armazenamento.',
        )
      }
      setNotice(notices.join(' '))
      setReady(true)
      revealHash()
    })

    function revealHash() {
      let id: string
      try {
        id = decodeURIComponent(window.location.hash.slice(1))
      } catch {
        return
      }
      if (lessons.some((lesson) => lesson.id === id)) {
        setActiveId(id)
        const next = { ...progressRef.current, lastLesson: id }
        progressRef.current = next
        setProgress(next)
        if (available.current.study) {
          try {
            localStorage.setItem(studyStorageKey, JSON.stringify(next))
          } catch {
            available.current.study = false
            setNotice('O progresso da trilha fica apenas nesta sessão.')
          }
        }
      }
      if ([...sections, ...supplements].some((section) => section.id === id)) {
        setOpened((previous) =>
          previous.includes(id) ? previous : [...previous, id],
        )
      }
      if (id)
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView(),
        )
    }
    const tick = () => setClock(Date.now())
    const clockFrame = requestAnimationFrame(tick)
    const interval = window.setInterval(tick, 60_000)
    window.addEventListener('focus', tick)
    window.addEventListener('hashchange', revealHash)
    window.addEventListener('popstate', revealHash)
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(clockFrame)
      clearInterval(interval)
      window.removeEventListener('focus', tick)
      window.removeEventListener('hashchange', revealHash)
      window.removeEventListener('popstate', revealHash)
    }
  }, [lessons, sections, supplements])

  function navigate(id: string, event?: MouseEvent<HTMLAnchorElement>) {
    if (
      event &&
      (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
    )
      return
    event?.preventDefault()
    if (validIds.includes(id)) {
      setActiveId(id)
      save({ ...progressRef.current, lastLesson: id })
    } else if (references.some((section) => section.id === id)) {
      setOpened((previous) =>
        previous.includes(id) ? previous : [...previous, id],
      )
    }
    if (window.location.hash !== `#${encodeURIComponent(id)}`) {
      window.history.pushState(null, '', `#${encodeURIComponent(id)}`)
    }
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
      if (validIds.includes(id))
        lessonHeading.current?.focus({ preventScroll: true })
      else {
        const element = document.getElementById(id)
        const target =
          element?.tagName === 'DETAILS'
            ? element.querySelector('summary')
            : element
        target?.focus({ preventScroll: true })
      }
    })
  }

  function toggleLesson() {
    const completedAt = new Date().toISOString()
    const next = {
      ...progressRef.current,
      completed: { ...progressRef.current.completed },
    }
    if (next.completed[current.id]) delete next.completed[current.id]
    else next.completed[current.id] = { completedAt, reviews: [] }
    setClock(Date.parse(completedAt))
    save(next)
  }

  function toggleLegacy(id: string) {
    const next = legacyRef.current.includes(id)
      ? legacyRef.current.filter((item) => item !== id)
      : [...legacyRef.current, id]
    legacyRef.current = next
    setLegacy(next)
    if (available.current.legacy) {
      try {
        localStorage.setItem(legacyStorageKey, JSON.stringify(next))
      } catch {
        available.current.legacy = false
        setNotice('O progresso do plano antigo fica apenas nesta sessão.')
      }
    }
  }

  const legacyRenderer = {
    disabled: !ready,
    completed: legacy,
    toggle: toggleLegacy,
    openSupplement: (id: string) => navigate(id),
  }
  const lessonRenderer = {
    completed: [],
    toggle: () => {},
    openSupplement: (id: string) => navigate(id),
  }
  const trimmed = normalize(query.trim())
  const searchable = [
    ...lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      markdown: `${lesson.objective}\n${lesson.markdown}\n${lesson.hints}\n${lesson.solution}`,
      label: 'Aula',
    })),
    ...references.map((section) => ({ ...section, label: 'Biblioteca' })),
    ...glossary.map((entry, index) => ({
      id: `termo-${index}`,
      title: entry.term,
      markdown: entry.definition,
      label: 'Glossário',
    })),
  ]
  const results = trimmed
    ? searchable.filter((item) =>
        normalize(`${item.title} ${item.markdown}`).includes(trimmed),
      )
    : []

  const moduleIndex = (
    <nav aria-label="Módulos e aulas">
      {modules.map((module, index) => {
        const count = module.lessons.filter(
          (lesson) => progress.completed[lesson.id],
        ).length
        return (
          <details
            key={module.id}
            open={module.id === current.moduleId}
            className="study-module"
          >
            <summary>
              <span>
                {String(index + 1).padStart(2, '0')} · {module.title}
              </span>
              <small>
                {count}/{module.lessons.length}
              </small>
            </summary>
            <p>{module.description}</p>
            {module.lessons.map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={(event) => navigate(lesson.id, event)}
                aria-current={current.id === lesson.id ? 'step' : undefined}
              >
                {progress.completed[lesson.id] ? (
                  <Check size={14} aria-label="Concluída" />
                ) : (
                  <span aria-hidden="true">○</span>
                )}
                {lesson.title}
              </a>
            ))}
          </details>
        )
      })}
      <a href="#biblioteca" onClick={(event) => navigate('biblioteca', event)}>
        Biblioteca pessoal e revisão de 14 dias
      </a>
      <a href="#glossario" onClick={(event) => navigate('glossario', event)}>
        Glossário
      </a>
      <a href="#fontes" onClick={(event) => navigate('fontes', event)}>
        Fontes e atualização
      </a>
    </nav>
  )

  return (
    <div className="interview-guide study-guide container py-10 md:py-14">
      <header className="guide-hero">
        <div>
          <p className="section-label">Full stack / Carreira internacional</p>
          <h1>{metadata.title}</h1>
          <p className="guide-intro">
            Uma tarefa de cada vez. Aprenda, pratique e explique com suas
            palavras. Para quem já programa e quer se preparar para vagas pleno
            e sênior.
          </p>
          <div className="guide-hero-meta">
            <span>15–45 min por sessão</span>
            <span>
              Revisado em{' '}
              <time dateTime={metadata.reviewedAt}>
                {metadata.reviewedLabel}
              </time>
            </span>
          </div>
          <div className="guide-shortcuts">
            <a
              className="primary-link"
              href={`#${lessons[0].id}`}
              onClick={(event) => navigate(lessons[0].id, event)}
            >
              Começar <ArrowDown size={15} />
            </a>
            <a
              className="secondary-link"
              href={`#${progress.lastLesson ?? nextLesson.id}`}
              aria-disabled={!ready}
              onClick={(event) => {
                if (!ready) event.preventDefault()
                else navigate(progress.lastLesson ?? nextLesson.id, event)
              }}
            >
              Continuar estudando
            </a>
            <a
              className="secondary-link"
              href={`#${interviewPlan}`}
              onClick={(event) => navigate(interviewPlan, event)}
            >
              Tenho entrevista marcada
            </a>
          </div>
        </div>
        <aside className="guide-progress" aria-label="Progresso da trilha">
          <p className="section-label">No seu ritmo</p>
          <div className="guide-progress-number">
            {completionCount}
            <span>/ {lessons.length} aulas</span>
          </div>
          <progress
            value={completionCount}
            max={lessons.length}
            aria-label="Aulas concluídas"
          />
          <p>
            Concluir significa praticar e explicar. Abrir uma aula não conta
            como conclusão.
          </p>
          <p className="guide-local-note">
            Progresso neste navegador, sem login. Dias perdidos não apagam o que
            você aprendeu.
          </p>
          <a
            href={`#${nextLesson.id}`}
            onClick={(event) => navigate(nextLesson.id, event)}
          >
            {completionCount === lessons.length
              ? 'Revisitar o diagnóstico'
              : `Próxima pendência: ${nextLesson.title}`}
          </a>
        </aside>
      </header>

      {notice && (
        <p role="status" className="guide-storage-notice">
          {notice}
        </p>
      )}
      <section className="guide-search-area" aria-label="Buscar no guia">
        <label className="guide-search">
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Buscar aulas, materiais e glossário"
            placeholder="Busque: SQL, inglês, cache, currículo…"
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
        <p role="status" className="guide-search-hint">
          {trimmed
            ? `${results.length} resultado(s)`
            : `${modules.length} módulos · ${lessons.length} aulas · Recursos gratuitos e prática local`}
        </p>
        {trimmed && (
          <div className="guide-search-results">
            {!results.length && <p>Nenhum resultado. Tente outro termo.</p>}
            {results.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => navigate(item.id, event)}
              >
                <strong>
                  {item.label} · {item.title}
                </strong>
                <span>{excerpt(item.markdown, query.trim())}</span>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="study-reviews" aria-labelledby="revisoes-titulo">
        <h2 id="revisoes-titulo">Revisar sem consultar</h2>
        <p>
          Tente explicar e refazer a parte central após 1, 7 e 14 dias. São
          intervalos sugeridos; você pode revisar quando puder.
        </p>
        {!reviews.length && (
          <p>
            {completionCount
              ? 'Nenhuma revisão pendente agora.'
              : 'As sugestões aparecem depois que você concluir uma aula.'}
          </p>
        )}
        {reviews.map(({ id, day }) => (
          <div key={`${id}:${day}`} className="study-review-row">
            <a href={`#${id}`} onClick={(event) => navigate(id, event)}>
              {lessons.find((lesson) => lesson.id === id)?.title} · revisão de{' '}
              {day} dia(s)
            </a>
            <button
              type="button"
              onClick={() => {
                const next = progressRef.current
                const entry = next.completed[id]
                if (!entry) return
                save({
                  ...next,
                  completed: {
                    ...next.completed,
                    [id]: {
                      ...entry,
                      reviews: [...new Set([...entry.reviews, day])],
                    },
                  },
                })
              }}
            >
              Revisei sem consulta
            </button>
          </div>
        ))}
      </section>

      <div className="guide-layout">
        <aside className="guide-sidebar">
          <p className="section-label">Sua trilha</p>
          {moduleIndex}
        </aside>
        <div className="guide-reading">
          <details className="guide-mobile-index">
            <summary>Escolher módulo ou aula</summary>
            {moduleIndex}
          </details>
          <article
            id={current.id}
            key={current.id}
            className="study-lesson guide-section"
          >
            <p className="section-label">
              {currentModule.title} · Aula {position + 1} de {lessons.length}
            </p>
            <h2 ref={lessonHeading} tabIndex={-1}>
              {current.title}
            </h2>
            <p className="study-objective">
              <strong>Você vai conseguir:</strong> {current.objective}
            </p>
            <p className="study-duration">
              {current.minutes.minimum} min para uma tarefa · até{' '}
              {current.minutes.extended} min com continuação
            </p>
            {current.prerequisites.length > 0 && (
              <p className="study-prerequisites">
                Antes desta aula:{' '}
                {current.prerequisites.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(event) => navigate(id, event)}
                  >
                    {lessons.find((lesson) => lesson.id === id)?.title}
                  </a>
                ))}
              </p>
            )}
            <div className="study-session-note">
              Pouca concentração hoje? Faça só a tarefa de 15 minutos e anote o
              próximo passo. Conclua a aula quando conseguir demonstrar o
              critério; você pode dividi-la em várias sessões.
            </div>
            <MarkdownContent
              markdown={current.markdown}
              scope={current.id}
              {...lessonRenderer}
            />
            <details className="study-help">
              <summary>Preciso de uma pista</summary>
              <MarkdownContent
                markdown={current.hints}
                scope={`${current.id}:hint`}
                {...lessonRenderer}
              />
            </details>
            <details className="study-help">
              <summary>Ver solução comentada depois de tentar</summary>
              <MarkdownContent
                markdown={current.solution}
                scope={`${current.id}:solution`}
                {...lessonRenderer}
              />
            </details>
            <div className="study-sources">
              <h3>Leia só o trecho necessário</h3>
              <ul>
                {current.references.map((id) => {
                  const source = sources.find((source) => source.id === id)!
                  return (
                    <li key={id}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                      <p>{source.purpose}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <label className="study-complete">
              <input
                type="checkbox"
                checked={Boolean(done)}
                disabled={!ready}
                onChange={toggleLesson}
              />
              Pratiquei, expliquei sem consulta e cumpri o critério desta aula.
            </label>
            <p className="study-save-status" role="status">
              {done
                ? 'Aula concluída. Você pode desmarcar e praticar novamente.'
                : 'Seu progresso só muda quando você marca a conclusão.'}
            </p>
            <nav
              className="study-pagination"
              aria-label="Navegação entre aulas"
            >
              {lessons[position - 1] && (
                <a
                  href={`#${lessons[position - 1].id}`}
                  onClick={(event) => navigate(lessons[position - 1].id, event)}
                >
                  <ArrowLeft size={16} /> Aula anterior
                </a>
              )}
              {lessons[position + 1] && (
                <a
                  href={`#${lessons[position + 1].id}`}
                  onClick={(event) => navigate(lessons[position + 1].id, event)}
                >
                  Próxima aula <ArrowRight size={16} />
                </a>
              )}
            </nav>
          </article>

          <section
            id="biblioteca"
            tabIndex={-1}
            className="guide-section study-library"
          >
            <span id="materiais-complementares" className="study-anchor" />
            <p className="section-label">
              <BookOpen size={16} aria-hidden="true" /> Para consultar quando
              precisar
            </p>
            <h2>Biblioteca pessoal e preparação paralela</h2>
            <p>
              Continue se candidatando enquanto estuda. Aqui ficam currículo,
              busca de vagas, inglês, comunicação e suas experiências. O plano
              de 14 dias revisa conhecimentos; o laboratório Resend é uma
              especialização opcional.
            </p>
            <p>
              As marcações antigas ficam separadas da trilha:{' '}
              {legacy.filter((id) => /^day:(?:[1-9]|1[0-4])$/.test(id)).length}
              /14 dias. Elas não são convertidas em aulas concluídas.
            </p>
            <div className="guide-prose">
              <ul>
                {references.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => navigate(item.id, event)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <MarkdownContent
              markdown={introduction}
              scope="introducao"
              {...legacyRenderer}
            />
            <div className="guide-supplements">
              {references.map((item) => (
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
                          : item.kind === 'story'
                            ? 'História pessoal · confirme os fatos antes de usar'
                            : item.id.startsWith('17-')
                              ? 'Aprofundamento opcional'
                              : 'Consulta e preparação'}
                      </span>
                      <strong>{item.title}</strong>
                    </span>
                  </summary>
                  <MarkdownContent
                    markdown={item.markdown}
                    scope={item.id}
                    {...legacyRenderer}
                  />
                </details>
              ))}
            </div>
          </section>

          <section id="glossario" tabIndex={-1} className="guide-section">
            <h2>Glossário em linguagem direta</h2>
            <p>Use a busca para encontrar um termo e voltar à prática.</p>
            <dl className="study-glossary">
              {glossary.map((entry, index) => (
                <div key={entry.term} id={`termo-${index}`} tabIndex={-1}>
                  <dt>{entry.term}</dt>
                  <dd>{entry.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section id="fontes" tabIndex={-1} className="guide-section">
            <h2>Fontes e atualização</h2>
            <p>
              Revisão da trilha em {metadata.reviewedLabel}. As fontes
              históricas da biblioteca mantêm suas datas de consulta. Os tempos,
              intervalos de revisão e prioridades são propostas deste guia, sem
              garantia de aprendizagem ou contratação.
            </p>
            <p>
              2026: documentação e processos consultados. 2027: preparação
              recomendada, sem apresentar previsão como fato. Confirme versões,
              elegibilidade e regras de IA na vaga atual.
            </p>
            <ul className="study-source-list">
              {sources.map((source) => (
                <li key={source.id}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title}
                  </a>
                  <p>{source.purpose}</p>
                </li>
              ))}
            </ul>
          </section>
          <footer className="guide-footer">
            <span>{metadata.title}</span>
            <a href="#">Voltar ao início ↑</a>
          </footer>
        </div>
      </div>
    </div>
  )
}
