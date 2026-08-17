import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import { Topbar } from '@/components/topbar/topbar'
import { LanguageProvider } from '@/contexts/languageContext'
import { getLocaleFromPath } from '@/lib/locale'
import { getHomeMetadata, siteUrl } from '@/lib/seo'

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...getHomeMetadata('pt-BR'),
  applicationName: 'Guilherme Caramori Portfolio',
  authors: [{ name: 'Guilherme Caramori' }],
  creator: 'Guilherme Caramori',
  publisher: 'Guilherme Caramori',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? '/'
  const language = getLocaleFromPath(pathname)

  return (
    <html lang={language}>
      <body
        className={`${manrope.variable} ${fraunces.variable} min-h-svh bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <LanguageProvider initialLanguage={language}>
          <div className="relative isolate min-h-svh">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(201,106,44,0.12),transparent_60%)]" />
              <div className="absolute left-[-6rem] top-[18rem] h-72 w-72 rounded-full bg-[rgba(44,79,60,0.08)] blur-3xl" />
              <div className="absolute right-[-8rem] top-[32rem] h-80 w-80 rounded-full bg-[rgba(201,106,44,0.09)] blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-svh flex-col">
              <Topbar />
              <main className="min-w-0 flex-1">{children}</main>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
