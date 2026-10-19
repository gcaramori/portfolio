'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Check, Copy, ArrowUpRight } from 'lucide-react'
import type { Element, ElementContent } from 'hast'

export function elementText(node: ElementContent | Element): string {
  if (node.type === 'text') return node.value
  if ('children' in node) return node.children.map(elementText).join('')
  return ''
}

function CopyQuote({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) {
  const [status, setStatus] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('Copiado!')
    } catch {
      setStatus('Não foi possível copiar. Selecione o texto para copiar.')
    }
  }

  return (
    <blockquote className="guide-quote">
      {children}
      <button type="button" onClick={copy} className="guide-copy">
        {status === 'Copiado!' ? <Check size={14} /> : <Copy size={14} />}
        Copiar texto
      </button>
      <span role="status" className="guide-copy-status">
        {status}
      </span>
    </blockquote>
  )
}

type MarkdownContentProps = {
  disabled?: boolean
  markdown: string
  scope: string
  completed: string[]
  toggle: (id: string) => void
  openSupplement: (id: string) => void
}

const MarkdownContext = createContext<Omit<MarkdownContentProps, 'markdown'>>({
  scope: '',
  completed: [],
  toggle: () => {},
  openSupplement: () => {},
})

// Stable renderer identities preserve focus and copy feedback on updates.
const markdownComponents: Components = {
  h2: ({ children }) => <h3>{children}</h3>,
  h3: ({ children }) => <h3>{children}</h3>,
  blockquote: ({ children, node }) => (
    <CopyQuote text={node ? elementText(node).trim() : ''}>
      {children}
    </CopyQuote>
  ),
  a: function GuideLink({ href = '', children }) {
    const { openSupplement } = useContext(MarkdownContext)
    const local = /^0\d-.*\.md$/.test(href)
    const id = href.replace(/\.md$/, '')
    if (local) {
      return (
        <a href={`#${id}`} onClick={() => openSupplement(id)}>
          {children}
        </a>
      )
    }
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && (
          <ArrowUpRight
            className="guide-external-icon"
            size={13}
            aria-hidden="true"
          />
        )}
      </a>
    )
  },
  input: () => null,
  li: function ChecklistItem({ children, node, className }) {
    const { scope, completed, toggle, disabled } = useContext(MarkdownContext)
    if (className?.includes('task-list-item')) {
      const text = node ? elementText(node).trim() : ''
      const id = `${scope}:check:${encodeURIComponent(text)}`
      return (
        <li className={className}>
          <label>
            <input
              type="checkbox"
              disabled={disabled}
              checked={completed.includes(id)}
              onChange={() => toggle(id)}
              aria-label={text}
            />
            <span>{children}</span>
          </label>
        </li>
      )
    }
    return <li className={className}>{children}</li>
  },
  table: function GuideTable({ node, children }) {
    const { scope, completed, toggle, disabled } = useContext(MarkdownContext)
    // Only the preserved interview calendar has interactive day cards.
    if (scope === '3-rotina-e-plano-de-14-dias') {
      const body = node?.children.find(
        (child) => child.type === 'element' && child.tagName === 'tbody',
      ) as Element | undefined
      const rows =
        body?.children.filter(
          (child): child is Element =>
            child.type === 'element' && child.tagName === 'tr',
        ) ?? []
      return (
        <div className="guide-days">
          {rows.map((row) => {
            const cells = row.children
              .filter(
                (child): child is Element =>
                  child.type === 'element' && child.tagName === 'td',
              )
              .map(elementText)
            const id = `day:${cells[0]}`
            const done = completed.includes(id)
            return (
              <label
                key={id}
                className={`guide-day ${done ? 'is-complete' : ''}`}
              >
                <span className="guide-day-top">
                  <span>Dia {cells[0].padStart(2, '0')}</span>
                  <input
                    type="checkbox"
                    disabled={disabled}
                    checked={done}
                    onChange={() => toggle(id)}
                    aria-label={`Concluir dia ${cells[0]}: ${cells[1]}`}
                  />
                </span>
                <strong>{cells[1]}</strong>
                <span className="guide-day-evidence">{cells[2]}</span>
              </label>
            )
          })}
        </div>
      )
    }
    return (
      <div
        className="guide-table-wrap"
        tabIndex={0}
        role="region"
        aria-label="Tabela do guia"
      >
        <table>{children}</table>
      </div>
    )
  },
  td: ({ children, node }) => {
    const text = node ? elementText(node).trim() : ''
    if (/^P[012](?:\b|;)/.test(text)) {
      return (
        <td>
          <span
            className={`guide-priority guide-priority-${text.slice(0, 2).toLowerCase()}`}
          >
            {children}
          </span>
        </td>
      )
    }
    return <td>{children}</td>
  },
}

export function MarkdownContent({
  markdown,
  ...context
}: MarkdownContentProps) {
  const content = useMemo(
    () => (
      <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {markdown}
      </Markdown>
    ),
    [markdown],
  )
  return (
    <MarkdownContext.Provider value={context}>
      <div className="guide-prose">{content}</div>
    </MarkdownContext.Provider>
  )
}
