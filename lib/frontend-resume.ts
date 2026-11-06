import siteContent, { type Locale } from './languages'

const frontendCopy = {
  'pt-BR': {
    title: 'Desenvolvedor Frontend Sênior | React, Next.js e Shopify',
    intro:
      '8+ anos em produtos web e e-commerce, incluindo três anos dedicados à implementação visual de vitrines em lojas. Experiência com layouts pixel perfect a partir de PSD e Figma, templates de e-mail em HTML e MJML e com o desenvolvimento de apps Shopify com Liquid e Remix. Criei também o design e implementei o frontend de sites com Next.js, TypeScript e Tailwind CSS, além de fluxos de cadastro e assinatura recorrente.',
    freelance:
      'Desenvolvimento de sites e plataformas para clientes, do levantamento de requisitos à implementação responsiva e entrega em produção.',
  },
  en: {
    title: 'Senior Frontend Developer | React, Next.js & Shopify',
    intro:
      '8+ years in web products and e-commerce, including three years focused on storefront product displays. Experience implementing pixel-perfect designs from PSD files and Figma designs, creating HTML and MJML email templates, and developing Shopify apps with Liquid and Remix. I have also designed and built websites with Next.js, TypeScript, and Tailwind CSS, including registration and recurring subscription flows.',
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
          highlights: performa.highlights?.slice(0, 5),
          stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Shopify', 'MJML', 'Liquid', 'Remix', 'Figma'],
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
