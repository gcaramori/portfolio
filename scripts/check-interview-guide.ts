import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { chromium, type Page } from 'playwright-core'
import {
  guideMetadata,
  legacyStorageKey,
  studyModules,
  studyStorageKey,
} from '../lib/interview-curriculum.ts'

execFileSync(
  process.execPath,
  [fileURLToPath(new URL('./check-interview-content.ts', import.meta.url))],
  { stdio: 'inherit' },
)
const baseUrl = process.env.GUIDE_BASE_URL ?? 'http://localhost:3000'
const origin = new URL(baseUrl)
assert.ok(
  ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname),
  'Guide checks must target localhost',
)
const url = new URL('/guia-entrevistas-internacionais', baseUrl).toString()
const browser = await chromium.launch(
  process.env.GUIDE_BROWSER_PATH
    ? { executablePath: process.env.GUIDE_BROWSER_PATH }
    : { channel: 'msedge' },
)
const lessons = studyModules.flatMap((module) => module.lessons)
const errors: string[] = []

async function loaded(page: Page) {
  await page.locator('.study-complete input:not(:disabled)').waitFor()
}

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
    permissions: ['clipboard-read', 'clipboard-write'],
  })
  // Prevent this test from fetching anything except local application assets.
  await context.route('**/*', (route) => {
    const requestUrl = new URL(route.request().url())
    return requestUrl.origin === origin.origin
      ? route.continue()
      : route.abort()
  })
  await context.addInitScript(
    ({ key }) => {
      if (!localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(['day:1', 'day:14']))
    },
    { key: legacyStorageKey },
  )
  const page = await context.newPage()
  page.on('pageerror', (error) => errors.push(error.message))
  assert.equal((await page.goto(url))?.status(), 200)
  await loaded(page)
  assert.ok((await page.title()).includes(guideMetadata.title))
  assert.equal(await page.locator('.study-lesson').count(), 1)
  assert.equal(await page.locator('.study-complete input').isChecked(), false)
  assert.equal(await page.locator('progress').getAttribute('value'), '0')
  assert.ok(
    (await page.locator('#biblioteca').innerText()).includes('2/14 dias'),
  )
  assert.equal(await page.locator('link[hreflang="en"]').count(), 0)

  // Every manifest lesson opens through the actual module navigation.
  for (const lesson of lessons) {
    const modulePanel = page
      .locator('.guide-sidebar .study-module')
      .filter({ has: page.locator(`a[href="#${lesson.id}"]`) })
    if (
      !(await modulePanel.getAttribute('open')) &&
      (await modulePanel.getAttribute('open')) !== ''
    ) {
      await modulePanel.locator('summary').click()
    }
    await modulePanel.locator(`a[href="#${lesson.id}"]`).click()
    await page.locator(`article[id="${lesson.id}"]`).waitFor()
    assert.equal(await page.locator('.study-lesson').count(), 1)
    assert.ok(
      (await page.locator('.study-lesson').innerText()).includes(
        'Critério de conclusão',
      ),
    )
    assert.equal(await page.locator('.study-help[open]').count(), 0)
    assert.equal(await page.locator('.study-complete input').isChecked(), false)
    assert.equal(await page.locator('progress').getAttribute('value'), '0')
  }

  await page.getByRole('link', { name: 'Começar', exact: true }).click()
  await page.locator(`#${lessons[0].id}`).waitFor()
  const complete = page.locator('.study-complete input')
  await complete.check()
  assert.ok(
    await complete.evaluate((element) => document.activeElement === element),
  )
  await page.getByRole('link', { name: 'Próxima aula', exact: true }).click()
  assert.equal(await complete.isChecked(), false)
  await complete.check()
  const resumeId = lessons[1].id
  await page.goto(url)
  await loaded(page)
  await page.locator(`article[id="${resumeId}"]`).waitFor()
  assert.ok(await complete.isChecked())
  assert.equal(await page.locator('progress').getAttribute('value'), '2')
  await complete.uncheck()
  await page.getByRole('link', { name: 'Começar', exact: true }).click()
  assert.ok(await complete.isChecked())
  assert.equal(await page.locator('progress').getAttribute('value'), '1')
  assert.deepEqual(
    await page.evaluate(
      (key) => JSON.parse(localStorage.getItem(key)!),
      legacyStorageKey,
    ),
    ['day:1', 'day:14'],
  )

  const search = page.getByRole('searchbox')
  await search.fill('NARROWING')
  await page.locator('.guide-search-results a[href="#tipos-validacao"]').click()
  await page.locator('article#tipos-validacao').waitFor()
  await page.locator('.study-help summary').first().click()
  assert.equal(await page.locator('.study-help[open]').count(), 1)
  await search.fill('AUTENTICACAO')
  const term = page
    .locator('.guide-search-results a')
    .filter({ hasText: 'Glossário · Autenticação' })
  await term.click()
  const termId = await term.getAttribute('href')
  assert.ok(await page.locator(termId!).isVisible())
  await search.fill('Resend')
  await page
    .locator(
      '.guide-search-results a[href="#17-estudar-em-casa-de-graça-para-uma-vaga-como-a-da-resend"]',
    )
    .click()
  assert.equal(
    await page
      .locator(
        '[id="17-estudar-em-casa-de-graça-para-uma-vaga-como-a-da-resend"]',
      )
      .getAttribute('open'),
    '',
  )
  await search.fill('zzzinexistentezzz')
  assert.ok(
    (await page.locator('.guide-search-results').innerText()).includes(
      'Nenhum resultado',
    ),
  )
  await page.getByRole('button', { name: 'Limpar busca' }).click()

  await page.getByRole('link', { name: 'Tenho entrevista marcada' }).click()
  const calendar = page.locator('[id="3-rotina-e-plano-de-14-dias"]')
  assert.equal(await calendar.getAttribute('open'), '')
  assert.ok(
    await calendar
      .getByRole('checkbox', { name: 'Concluir dia 1:', exact: false })
      .isChecked(),
  )
  await calendar
    .getByRole('checkbox', { name: 'Concluir dia 2:', exact: false })
    .check()
  await page.reload()
  await loaded(page)
  assert.ok(
    await calendar
      .getByRole('checkbox', { name: 'Concluir dia 2:', exact: false })
      .isChecked(),
  )
  assert.equal(await page.locator('progress').getAttribute('value'), '1')
  // Other tables mentioning days must remain ordinary tables.
  assert.equal(
    await page
      .locator(
        '[id="15-ansiedade-vergonha-e-comunicação-nas-entrevistas"] .guide-days',
      )
      .count(),
    0,
  )

  for (const id of [
    '06-cenario-black-friday-webhooks',
    '16-perguntas-sobre-seu-currículo-e-experiência',
  ]) {
    await page.goto(`${url}#${encodeURIComponent(id)}`)
    await loaded(page)
    assert.equal(await page.locator(`[id="${id}"]`).getAttribute('open'), '')
    const top = await page
      .locator(`[id="${id}"]`)
      .evaluate((element) => element.getBoundingClientRect().top)
    const headerBottom = await page
      .locator('header.fixed')
      .evaluate((element) => element.getBoundingClientRect().bottom)
    assert.ok(top >= headerBottom - 1, `Anchor ${id} must clear fixed header`)
  }
  const legacyIds = await page
    .locator('.study-library .guide-supplements > details')
    .evaluateAll((elements) => elements.map((element) => element.id))
  for (const id of legacyIds) {
    const result = await page.evaluate(
      (target) => Boolean(document.getElementById(target)),
      id,
    )
    assert.ok(result, `Missing legacy anchor ${id}`)
  }

  await page.goto(`${url}#ingles-candidatura`)
  await loaded(page)
  await page.locator('article#ingles-candidatura').waitFor()
  const quote = page.locator('.study-lesson .guide-quote').first()
  await quote.getByRole('button', { name: 'Copiar texto' }).click()
  await page.waitForFunction(
    () =>
      document.querySelector('.study-lesson .guide-copy-status')
        ?.textContent === 'Copiado!',
  )
  assert.ok(
    (await page.evaluate(() => navigator.clipboard.readText())).includes(
      'My responsibility',
    ),
  )
  await page.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => Promise.reject(new Error('Unavailable')) },
    }),
  )
  await quote.getByRole('button', { name: 'Copiar texto' }).click()
  await page.waitForFunction(() =>
    document
      .querySelector('.study-lesson .guide-copy-status')
      ?.textContent?.includes('Não foi possível'),
  )

  // Local back/forward must change the single selected lesson.
  await page.getByRole('link', { name: 'Aula anterior', exact: true }).click()
  await page.locator('article#coding-design').waitFor()
  await page.goBack()
  await page.locator('article#ingles-candidatura').waitFor()
  await page.goForward()
  await page.locator('article#coding-design').waitFor()

  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `Overflow at ${width}px`,
    )
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.locator('.guide-mobile-index > summary').click()
  await page
    .locator('.guide-mobile-index .study-module')
    .first()
    .locator('summary')
    .click()
  await page.locator('.guide-mobile-index a[href="#laboratorio"]').click()
  await page.locator('article#laboratorio').waitFor()
  assert.ok(
    await page
      .locator('.study-lesson h2')
      .evaluate((element) => element === document.activeElement),
  )
  // CSS zoom approximates a 200% content zoom and exercises wrapping.
  await page.evaluate(() => {
    document.documentElement.style.zoom = '2'
  })
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    'Overflow with 200% zoom',
  )
  await page.evaluate(() => {
    document.documentElement.style.zoom = ''
  })
  await page.locator('.study-complete input').focus()
  await page.keyboard.press('Space')
  assert.ok(await page.locator('.study-complete input').isChecked())

  const externalLinksSafe = await page
    .locator('.interview-guide a[href^="http"]')
    .evaluateAll((links) =>
      links.every(
        (link) =>
          link.getAttribute('target') === '_blank' &&
          link.getAttribute('rel')?.includes('noopener'),
      ),
    )
  assert.ok(externalLinksSafe)
  const brokenAnchors = await page
    .locator('.interview-guide a[href^="#"]')
    .evaluateAll(
      (links, lessonIds) =>
        links
          .map((link) => link.getAttribute('href') ?? '')
          .filter((href) => {
            if (href === '#') return false
            const id = decodeURIComponent(href.slice(1))
            return !lessonIds.includes(id) && !document.getElementById(id)
          }),
      lessons.map((lesson) => lesson.id),
    )
  assert.deepEqual(brokenAnchors, [], 'All reference links must resolve')
  assert.equal(await page.locator('.interview-guide a[href$=".md"]').count(), 0)
  await page.goto(`${url}#%invalid`)
  await loaded(page)

  for (const scenario of [
    'corrupt',
    'blocked',
    'write-failure',
    'reviews',
    'legacy-corrupt',
  ]) {
    const failureContext = await browser.newContext({ reducedMotion: 'reduce' })
    await failureContext.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin.origin
        ? route.continue()
        : route.abort(),
    )
    await failureContext.addInitScript(
      ({ scenario, key, oldKey, id }) => {
        if (scenario === 'corrupt') localStorage.setItem(key, '{broken')
        if (scenario === 'legacy-corrupt')
          localStorage.setItem(oldKey, '{broken')
        if (scenario === 'reviews' && !localStorage.getItem(key))
          localStorage.setItem(
            key,
            JSON.stringify({
              version: 2,
              lastLesson: id,
              completed: {
                [id]: {
                  completedAt: new Date(
                    Date.now() - 15 * 86_400_000,
                  ).toISOString(),
                  reviews: [],
                },
              },
            }),
          )
        if (scenario === 'blocked' || scenario === 'write-failure') {
          const read = Storage.prototype.getItem
          const write = Storage.prototype.setItem
          Storage.prototype.getItem = function (name) {
            if (scenario === 'blocked' && name === key)
              throw new Error('Blocked')
            return read.call(this, name)
          }
          Storage.prototype.setItem = function (name, value) {
            if (name === key) throw new Error('Quota')
            return write.call(this, name, value)
          }
        }
      },
      {
        scenario,
        key: studyStorageKey,
        oldKey: legacyStorageKey,
        id: lessons[0].id,
      },
    )
    const failurePage = await failureContext.newPage()
    failurePage.on('pageerror', (error) => errors.push(error.message))
    await failurePage.goto(url)
    await loaded(failurePage)
    if (scenario === 'reviews') {
      assert.equal(await failurePage.locator('.study-review-row').count(), 3)
      await failurePage.locator('.study-review-row button').first().click()
      assert.equal(await failurePage.locator('.study-review-row').count(), 2)
      await failurePage.reload()
      await loaded(failurePage)
      assert.equal(await failurePage.locator('.study-review-row').count(), 2)
      await failurePage.locator('.study-complete input').uncheck()
      assert.equal(await failurePage.locator('.study-review-row').count(), 0)
    } else {
      await failurePage.locator('.study-complete input').check()
      assert.ok(await failurePage.locator('.study-complete input').isChecked())
      await failurePage.locator('.guide-storage-notice').waitFor()
      if (scenario === 'corrupt')
        assert.equal(
          await failurePage.evaluate(
            (key) => localStorage.getItem(key),
            studyStorageKey,
          ),
          '{broken',
        )
      if (scenario === 'legacy-corrupt')
        assert.equal(
          await failurePage.evaluate(
            (key) => localStorage.getItem(key),
            legacyStorageKey,
          ),
          '{broken',
        )
    }
    await failureContext.close()
  }
  const sitemap = await page.request.get(
    new URL('/sitemap.xml', baseUrl).toString(),
  )
  assert.ok(
    !(await sitemap.text()).includes('/guia-entrevistas-internacionais'),
  )
  assert.deepEqual(errors, [])
  console.log(
    'Guide checks passed: navigation, manual completion, resume, independent legacy progress, search, hints, copy fallback, anchors, keyboard, mobile, zoom, reviews, storage failures and sitemap.',
  )
  await context.close()
} finally {
  await browser.close()
}
