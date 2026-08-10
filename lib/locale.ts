import type { Locale } from './languages'

export const defaultLocale: Locale = 'pt-BR'
export const localePrefix = '/en'

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === localePrefix || pathname.startsWith(`${localePrefix}/`)
    ? 'en'
    : defaultLocale
}

export function stripLocalePrefix(pathname: string) {
  const withoutPrefix = pathname.replace(/^\/en(?=\/|$)/, '')

  return withoutPrefix || '/'
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const basePath = stripLocalePrefix(pathname)

  if (locale === 'en') {
    return basePath === '/' ? localePrefix : `${localePrefix}${basePath}`
  }

  return basePath
}
