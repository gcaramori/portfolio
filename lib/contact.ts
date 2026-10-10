const WHATSAPP_PHONE = '5519982646119'

export const CONTACT_EMAIL = 'gcaramori16@gmail.com'
export const emailHref = `mailto:${CONTACT_EMAIL}`

export function getResumePdfHref(language: string) {
  return `/resume/guilherme-caramori-${language === 'en' ? 'en' : 'pt-br'}.pdf`
}

const WHATSAPP_MESSAGES = {
  'pt-BR':
    'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional.',
  en: 'Hi! I checked your portfolio and would love to discuss a professional opportunity.',
}

export function getWhatsappHref(language: string) {
  const message =
    WHATSAPP_MESSAGES[language as keyof typeof WHATSAPP_MESSAGES] ??
    WHATSAPP_MESSAGES['pt-BR']

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`
}
