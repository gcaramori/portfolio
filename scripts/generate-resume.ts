import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const baseUrl = process.env.RESUME_BASE_URL ?? 'http://localhost:3000'
const publicUrl =
  process.env.RESUME_PUBLIC_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://www.guilhermecaramori.com.br'
const executablePath = process.env.RESUME_BROWSER_PATH
const outputDirectory = resolve(projectRoot, 'public/resume')

async function generateResumes() {
  const browser = await chromium.launch(
    executablePath ? { executablePath } : { channel: 'msedge' },
  )

  try {
    await mkdir(outputDirectory, { recursive: true })
    for (const locale of ['pt-br', 'en']) {
      const page = await browser.newPage()
      const pathname = locale === 'en' ? '/en/resume' : '/resume'
      const response = await page.goto(new URL(pathname, baseUrl).toString())
      if (!response?.ok()) {
        throw new Error(`Could not load ${pathname}: ${response?.status()}`)
      }
      await page.locator('.resume-page').waitFor()
      await page.evaluate(() => document.fonts.ready)
      await page.locator('.resume-page a[href^="/"]').evaluateAll(
        (links, publicUrl) => {
          for (const link of links) {
            const href = link.getAttribute('href')
            if (href) link.setAttribute('href', new URL(href, publicUrl).href)
          }
        },
        publicUrl,
      )
      await page.emulateMedia({ media: 'print' })
      const outputPath = resolve(
        outputDirectory,
        `guilherme-caramori-${locale}.pdf`,
      )
      await page.pdf({
        path: outputPath,
        format: 'A4',
        preferCSSPageSize: true,
        printBackground: true,
        displayHeaderFooter: false,
        tagged: true,
      })
      await page.close()
      console.log(`Generated ${outputPath}`)
    }
  } finally {
    await browser.close()
  }
}

generateResumes().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
