import 'server-only'

import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import {
  guideMetadata,
  guideSources,
  glossary,
  studyModules,
  type StudyLesson,
} from './interview-curriculum'

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
  const lessons: StudyLesson[] = await Promise.all(
    studyModules.flatMap((module) =>
      module.lessons.map(async (definition) => {
        const source = await readFile(
          path.join(directory, 'trilha', `${definition.id}.md`),
          'utf8',
        )
        const [markdown, remainder] = source.split('<!-- hints -->')
        const [hints, solution] = (remainder ?? '').split('<!-- solution -->')
        if (!markdown?.trim() || !hints?.trim() || !solution?.trim()) {
          throw new Error(`Incomplete lesson: ${definition.id}`)
        }
        return {
          ...definition,
          moduleId: module.id,
          markdown: markdown.trim(),
          hints: hints.trim(),
          solution: solution.trim(),
        }
      }),
    ),
  )
  return {
    introduction,
    sections,
    supplements,
    lessons,
    modules: studyModules,
    sources: guideSources,
    glossary,
    metadata: guideMetadata,
  }
}
