import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'

const baseUrl = process.env.GUIDE_BASE_URL ?? 'http://localhost:3000'
const url = new URL('/guia-entrevistas-internacionais', baseUrl).toString()
const storageKey = 'interview-guide:progress:v1'
const browser = await chromium.launch(
  process.env.GUIDE_BROWSER_PATH
    ? { executablePath: process.env.GUIDE_BROWSER_PATH }
    : { channel: 'msedge' },
)

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    permissions: ['clipboard-read', 'clipboard-write'],
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  const response = await page.goto(url)
  assert.equal(response?.status(), 200)
  await page.locator('.guide-days').waitFor()
  assert.equal(await page.locator('.guide-section-heading').count(), 16)
  assert.equal(await page.locator('.guide-supplements details').count(), 7)
  assert.equal(await page.locator('.guide-day').count(), 14)
  assert.equal(await page.locator('.task-list-item input').count(), 9)
  assert.equal(
    await page.getByRole('button', { name: 'English', exact: true }).count(),
    0,
  )
  assert.equal(await page.locator('link[hreflang="en"]').count(), 0)
  assert.equal(await page.locator('.guide-priority').count(), 16)

  const brokenAnchors = await page
    .locator('.interview-guide a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((link) => link.getAttribute('href') ?? '')
        .filter(
          (href) =>
            href.length > 1 &&
            !document.getElementById(decodeURIComponent(href.slice(1))),
        ),
    )
  assert.deepEqual(brokenAnchors, [])
  assert.equal(await page.locator('.interview-guide a[href$=".md"]').count(), 0)
  const externalLinks = await page
    .locator('.interview-guide a[href^="http"]')
    .evaluateAll((links) =>
      links.every(
        (link) =>
          link.getAttribute('target') === '_blank' &&
          link.getAttribute('rel')?.includes('noopener'),
      ),
    )
  assert.ok(externalLinks)

  const day = page
    .getByRole('checkbox', { name: 'Concluir dia 1:', exact: false })
    .first()
  await day.check()
  const checklist = page.locator('.task-list-item input')
  await checklist.nth(0).check()
  assert.ok(
    await checklist
      .nth(0)
      .evaluate((element) => document.activeElement === element),
    'Toggling progress must preserve keyboard focus',
  )
  await checklist.nth(1).check()
  assert.ok(
    !(await checklist.nth(2).isChecked()),
    'Checklist items must be independent',
  )
  await page.reload()
  await page.waitForFunction(() =>
    document
      .querySelector('.guide-check-count')
      ?.textContent?.includes('2 de 9'),
  )
  assert.ok(await day.isChecked())
  assert.ok(await checklist.nth(0).isChecked())
  assert.ok(await checklist.nth(1).isChecked())
  await checklist.nth(0).uncheck()
  assert.ok(await checklist.nth(1).isChecked())

  const search = page.getByRole('searchbox')
  const experience = page.locator(
    '[id="16-perguntas-sobre-seu-currículo-e-experiência"]',
  )
  assert.equal(await experience.locator('h4').count(), 27)
  await search.fill('Como você otimizou o serviço de webhook')
  const experienceResult = page.locator(
    '.guide-search-results a[href="#16-perguntas-sobre-seu-currículo-e-experiência"]',
  )
  await experienceResult.click()
  assert.ok(await experience.isVisible())
  assert.ok((await experience.innerText()).includes('garantia atômica'))
  const communicationHref =
    '#15-ansiedade-vergonha-e-comunicação-nas-entrevistas'
  for (const term of ['ansiedade', 'vergonha', 'ORATORIA', 'postura']) {
    await search.fill(term)
    assert.equal(
      await page
        .locator('.guide-search-results')
        .getByRole('link')
        .filter({ hasText: '15. Ansiedade, vergonha e comunicação' })
        .count(),
      1,
      `Communication section must be searchable by ${term}`,
    )
  }
  await page
    .locator('.guide-search-results')
    .getByRole('link')
    .filter({ hasText: '15. Ansiedade, vergonha e comunicação' })
    .click()
  assert.equal(decodeURIComponent(new URL(page.url()).hash), communicationHref)
  await search.fill('CURRICULO')
  await page.locator('.guide-search-results a').first().waitFor()
  assert.ok((await page.locator('.guide-search-results a').count()) > 0)
  await search.fill('snapshot')
  const supplementResult = page.locator(
    '.guide-search-results a[href="#05-recuperacao-dashboard-php"]',
  )
  await supplementResult.click()
  assert.equal(
    await page
      .locator('[id="05-recuperacao-dashboard-php"]')
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
  assert.equal(await page.locator('.guide-search-results').count(), 0)

  const quote = page.locator('.guide-quote').first()
  await quote.getByRole('button', { name: 'Copiar texto' }).click()
  await page.waitForFunction(
    () =>
      document.querySelector('.guide-copy-status')?.textContent === 'Copiado!',
  )
  assert.equal(await quote.getByRole('status').innerText(), 'Copiado!')
  const clipboard = await page.evaluate(() => navigator.clipboard.readText())
  assert.ok(clipboard.includes('I’m open to either level'))
  const communication = page.locator(
    '[id="15-ansiedade-vergonha-e-comunicação-nas-entrevistas"]',
  )
  assert.equal(await communication.locator('.guide-days').count(), 0)
  assert.equal(await communication.locator('.task-list-item').count(), 0)
  for (const phrase of [
    'Vou pensar por alguns segundos',
    'Let me take a moment to organize my thoughts.',
  ]) {
    const recoveryQuote = communication
      .locator('.guide-quote')
      .filter({ hasText: phrase })
    await recoveryQuote.getByRole('button', { name: 'Copiar texto' }).click()
    assert.ok(
      (await page.evaluate(() => navigator.clipboard.readText())).includes(
        phrase,
      ),
    )
  }
  await page.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: () => Promise.reject(new Error('Clipboard unavailable')),
      },
    }),
  )
  await quote.getByRole('button', { name: 'Copiar texto' }).click()
  await page.waitForFunction(() =>
    document
      .querySelector('.guide-copy-status')
      ?.textContent?.includes('Não foi possível'),
  )

  await page.locator('.guide-sidebar a').nth(8).click()
  const headingTop = await page
    .locator('[id="9-onde-e-como-encontrar-vagas"]')
    .evaluate((element) => element.getBoundingClientRect().top)
  const headerBottom = await page
    .locator('header.fixed')
    .evaluate((element) => element.getBoundingClientRect().bottom)
  assert.ok(
    headingTop >= headerBottom,
    'Anchor must remain below the fixed topbar',
  )
  await page.waitForFunction(
    () =>
      document
        .querySelector('.guide-sidebar a[aria-current="location"]')
        ?.getAttribute('href') === '#9-onde-e-como-encontrar-vagas',
  )

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
  await page.locator('.guide-mobile-index summary').click()
  assert.equal(
    await page.locator('.guide-mobile-index').getAttribute('open'),
    '',
  )
  await page.locator('.guide-mobile-index a').nth(2).click()
  const mobileTop = await page
    .locator('[id="3-rotina-e-plano-de-14-dias"]')
    .evaluate((element) => element.getBoundingClientRect().top)
  assert.ok(
    mobileTop >=
      (await page
        .locator('header.fixed')
        .evaluate((element) => element.getBoundingClientRect().bottom)),
  )
  const tableOverflow = await page
    .locator('.guide-table-wrap')
    .evaluateAll((tables) =>
      tables.some((table) => table.scrollWidth > table.clientWidth),
    )
  assert.ok(
    tableOverflow,
    'Wide tables should scroll inside their own container',
  )

  await page.goto(`${url}#06-cenario-black-friday-webhooks`)
  await page.waitForFunction(() =>
    document
      .getElementById('06-cenario-black-friday-webhooks')
      ?.hasAttribute('open'),
  )
  await page.goto(`${url}#%invalid`)

  for (const scenario of ['corrupt', 'blocked']) {
    const failureContext = await browser.newContext()
    await failureContext.addInitScript(
      ({ key, scenario }) => {
        if (scenario === 'corrupt') localStorage.setItem(key, '{broken json')
        else {
          const getItem = Storage.prototype.getItem
          const setItem = Storage.prototype.setItem
          Storage.prototype.getItem = function (name) {
            if (name === key) throw new Error('Storage blocked')
            return getItem.call(this, name)
          }
          Storage.prototype.setItem = function (name, value) {
            if (name === key) throw new Error('Storage blocked')
            setItem.call(this, name, value)
          }
        }
      },
      { key: storageKey, scenario },
    )
    const failurePage = await failureContext.newPage()
    failurePage.on('pageerror', (error) => errors.push(error.message))
    await failurePage.goto(url)
    await failurePage.locator('.guide-storage-notice').waitFor()
    const failureDay = failurePage.locator('.guide-day input').first()
    await failureDay.check()
    assert.ok(
      await failureDay.isChecked(),
      `Progress must work with ${scenario} storage`,
    )
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
    'Guide checks passed: content, links, search, independent progress, reload, clipboard, anchors, mobile, storage failures and sitemap.',
  )
  await context.close()
} finally {
  await browser.close()
}
