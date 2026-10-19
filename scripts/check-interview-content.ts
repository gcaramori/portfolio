import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import {
  dueReviews,
  emptyProgress,
  guideSources,
  restoreProgress,
  studyModules,
} from '../lib/interview-curriculum.ts'

const root = path.resolve(import.meta.dirname, '..')
const directory = path.join(root, 'content', 'entrevistas')
const definitions = studyModules.flatMap((module) => module.lessons)
const ids = definitions.map((lesson) => lesson.id)
assert.equal(new Set(ids).size, ids.length, 'Lesson IDs must be unique')
assert.equal(
  new Set(studyModules.map((module) => module.id)).size,
  studyModules.length,
)
assert.equal(
  new Set(guideSources.map((source) => source.id)).size,
  guideSources.length,
)
const sources = new Set(guideSources.map((source) => source.id))
let executableCount = 0
let sqlCount = 0
for (const [index, definition] of definitions.entries()) {
  for (const prerequisite of definition.prerequisites) {
    assert.ok(
      ids.indexOf(prerequisite) >= 0 && ids.indexOf(prerequisite) < index,
      `${definition.id}: prerequisite must exist and precede lesson`,
    )
  }
  for (const reference of definition.references)
    assert.ok(sources.has(reference))
  assert.ok(
    definition.objective &&
      definition.minutes.minimum === 15 &&
      definition.minutes.extended === 45,
  )
  const markdown = await readFile(
    path.join(directory, 'trilha', `${definition.id}.md`),
    'utf8',
  )
  for (const heading of [
    '### Entenda primeiro',
    '### Faça em 15 minutos',
    '### Continue até 45 minutos',
    '### Revise sem consultar',
    '### Critério de conclusão',
    '### Ao retomar',
  ])
    assert.ok(
      markdown.includes(heading),
      `${definition.id}: missing ${heading}`,
    )
  const [body, remainder] = markdown.split('<!-- hints -->')
  const [hint, solution] = (remainder ?? '').split('<!-- solution -->')
  assert.ok(
    body.trim() && hint?.trim() && solution?.trim(),
    `${definition.id}: incomplete material`,
  )
  for (const [, code] of markdown.matchAll(/```js\r?\n([\s\S]*?)```/g)) {
    execFileSync(process.execPath, ['--input-type=module', '-'], {
      input: code,
      timeout: 10_000,
      stdio: ['pipe', 'pipe', 'pipe'],
    })
    executableCount++
  }
  sqlCount += [...markdown.matchAll(/```sql\r?\n/g)].length
}
const files = (await readdir(path.join(directory, 'trilha'))).filter((file) =>
  file.endsWith('.md'),
)
assert.deepEqual(files.sort(), ids.map((id) => `${id}.md`).sort())

// Completion timestamps and independent review intervals must survive reload.
const now = Date.parse('2026-10-19T12:00:00Z')
const progress = emptyProgress()
progress.lastLesson = ids[0]
progress.completed[ids[0]] = {
  completedAt: '2026-10-11T12:00:00Z',
  reviews: [1],
}
assert.deepEqual(dueReviews(progress, now), [{ id: ids[0], day: 7 }])
assert.deepEqual(dueReviews(progress, now + 6 * 86_400_000), [
  { id: ids[0], day: 7 },
  { id: ids[0], day: 14 },
])
assert.deepEqual(
  restoreProgress(JSON.parse(JSON.stringify(progress)), ids),
  progress,
)
assert.throws(() => restoreProgress([], ids))
assert.throws(() => restoreProgress({ version: 2, completed: [] }, ids))
const filtered = restoreProgress(
  {
    version: 2,
    lastLesson: 'removed',
    completed: {
      removed: { completedAt: new Date(now).toISOString(), reviews: [] },
      [ids[0]]: { completedAt: 'invalid', reviews: [] },
      [ids[1]]: {
        completedAt: '2026-10-19T00:00:00Z',
        reviews: [1, 1, 7, 999, '14'],
      },
    },
  },
  ids,
)
assert.equal(filtered.lastLesson, null)
assert.deepEqual(Object.keys(filtered.completed), [ids[1]])
assert.deepEqual(filtered.completed[ids[1]].reviews, [1, 7])
console.log(
  `Content checks passed: ${ids.length} lessons, prerequisites, sources, exercises, ${executableCount} executable JS examples, ${sqlCount} SQL lessons and progress/review boundaries.`,
)
