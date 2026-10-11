import 'server-only'

import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

export type GuideSection = {
  id: string
  title: string
  markdown: string
  kind: 'section' | 'story' | 'exercise'
}

export function guideAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
}

export async function getInterviewGuide() {
  const directory = path.join(process.cwd(), 'content', 'entrevistas')
  const source = await readFile(
    path.join(directory, 'guia-entrevistas-internacionais.md'),
    'utf8',
  )
  const sections: GuideSection[] = source
    .split(/^## /m)
    .slice(1)
    .filter((part) => /^\d+\./.test(part))
    .map((part) => {
      const newline = part.indexOf('\n')
      const title = part.slice(0, newline).trim()
      return {
        id: guideAnchor(title),
        title,
        markdown: part.slice(newline + 1).trim(),
        kind: 'section',
      }
    })
  const filenames = (await readdir(directory))
    .filter((filename) => /^0\d-.*\.md$/.test(filename))
    .sort()
  const supplements: GuideSection[] = await Promise.all(
    filenames.map(async (filename) => {
      const markdown = await readFile(path.join(directory, filename), 'utf8')
      const newline = markdown.indexOf('\n')
      return {
        id: filename.replace(/\.md$/, ''),
        title: markdown.slice(0, newline).replace(/^# /, '').trim(),
        markdown: markdown.slice(newline + 1).trim(),
        kind: /^0[67]-/.test(filename) ? 'exercise' : 'story',
      }
    }),
  )

  const introduction = source
    .split(/^## /m)[0]
    .replace(/^# .+\r?\n/, '')
    .trim()
  return { introduction, sections, supplements }
}
