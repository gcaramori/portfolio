import siteContent, { type Locale } from './languages'

const frontendCopy = {
  'pt-BR': {
    title: 'Desenvolvedor Frontend Sênior | Next.js, React e Shopify',
    intro:
      'Mais de oito anos em produtos web e e-commerce, incluindo três anos implementando vitrines fiéis ao visual das lojas e designs em PSD e Figma. Desenvolvi apps Shopify com Liquid e Remix e templates de e-mail em HTML e MJML. Em projetos com Next.js, TypeScript e Tailwind CSS, criei interfaces e conectei cadastro e assinaturas recorrentes.',
    freelance:
      'Desenvolvimento de sites e plataformas para clientes, do levantamento de requisitos à implementação responsiva e entrega em produção.',
  },
  en: {
    title: 'Senior Frontend Developer | Next.js, React & Shopify',
    intro:
      'Over eight years in web products and e-commerce, including three years matching product displays to storefront designs and implementing layouts from PSD files and Figma. I built Shopify apps with Liquid and Remix and email templates in HTML and MJML. My Next.js, TypeScript, and Tailwind CSS projects include interface design, registration, and recurring subscriptions.',
    freelance:
      'Built client websites and platforms, from requirements gathering through responsive implementation and production delivery.',
  },
}

export function getFrontendResumeContent(locale: Locale) {
  const content = siteContent[locale]
  const copy = frontendCopy[locale]
  const [performa, freelance] = content.home.experience

  return {
    ...content,
    home: {
      ...content.home,
      title: copy.title,
      intro: copy.intro,
      experience: [
        {
          ...performa,
          description: locale === 'en'
            ? 'Senior full-stack developer with hands-on responsibility for storefront interfaces, e-commerce integrations, and operational dashboards.'
            : 'Desenvolvedor full stack sênior com atuação direta em interfaces de lojas, integrações de e-commerce e dashboards operacionais.',
          highlights: [
            ...(performa.highlights?.slice(0, 1) ?? []),
            locale === 'en'
              ? 'Shopify: I developed three complete apps using Liquid and Remix. They did not reach production due to internal company issues.'
              : 'Shopify: desenvolvi três apps completos com Liquid e Remix, que não chegaram à produção por questões internas da empresa.',
            ...(performa.highlights?.slice(2) ?? []),
          ],
          stack: [
            'Next.js',
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Shopify',
            'Liquid',
            'Remix',
            'MJML',
            'Figma',
            'Codex',
            locale === 'en' ? 'AI agents' : 'Agentes de IA',
            'MCP',
            'Node.js',
            'Git',
            'Vercel',
            'MongoDB',
          ],
        },
        {
          ...freelance,
          description: copy.freelance,
          highlights: freelance.highlights?.slice(-2),
          stack: ['Next.js', 'Tailwind CSS', 'Vercel', 'GoCardless', 'Prisma', 'PostgreSQL'],
        },
      ],
    },
  }
}
