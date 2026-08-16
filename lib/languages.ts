export const locales = ['pt-BR', 'en'] as const

export type Locale = (typeof locales)[number]
export type ProjectSlug = 'jsbjjkylemore' | 'unit5'

type NavItem = {
  href: string
  label: string
}

type Stat = {
  value: string
  label: string
}

type HomeCapability = {
  title: string
  description: string
}

type ExperienceItem = {
  period: string
  title: string
  description: string
}

type FeaturedProject = {
  slug: ProjectSlug
  kicker: string
  title: string
  summary: string
}

type ProjectCase = {
  slug: ProjectSlug
  category: string
  title: string
  cardSummary: string
  overview: string
  role: string
  deliverables: string
  stack: string[]
  sections: {
    title: string
    body: string
  }[]
}

type SiteContent = {
  metadata: {
    title: string
    description: string
  }
  topbar: {
    brand: string
    descriptor: string
    nav: NavItem[]
    cta: string
    languageLabel: string
  }
  home: {
    eyebrow: string
    title: string
    intro: string
    description: string
    primaryCta: string
    secondaryCta: string
    note: string
    stats: Stat[]
    manifestoTitle: string
    manifestoLead: string
    manifestoBody: string
    manifestoEvidence: string[]
    capabilitiesTitle: string
    capabilitiesIntro: string
    capabilities: HomeCapability[]
    featuredTitle: string
    featuredIntro: string
    featuredProjects: FeaturedProject[]
    experienceTitle: string
    experienceIntro: string
    experience: ExperienceItem[]
    hiring: {
      title: string
      intro: string
      items: string[]
      links: {
        whatsapp: string
      }
    }
    closingTitle: string
    closingBody: string
    closingCta: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    storyTitle: string
    paragraphs: string[]
    highlightsTitle: string
    highlights: string[]
    methodTitle: string
    method: {
      title: string
      body: string
    }[]
    cta: string
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    cta: string
    liveLabel: string
  }
  projectDetail: {
    backLabel: string
    openLabel: string
    roleLabel: string
    deliverablesLabel: string
    stackLabel: string
    moreProjectsLabel: string
  }
}

const siteContent: Record<Locale, SiteContent> = {
  'pt-BR': {
    metadata: {
      title:
        'Guilherme Caramori | Full stack sênior para sistemas de negócio e integrações',
      description:
        'Portfolio de Guilherme Caramori, desenvolvedor full stack sênior focado em sistemas de negócio, dashboards, integrações, automações e entrega em produção.',
    },
    topbar: {
      brand: 'Guilherme Caramori',
      descriptor: 'Produtos web, dashboards, integrações e entrega em produção',
      nav: [
        { href: '/', label: 'Início' },
        { href: '/about', label: 'Sobre' },
        { href: '/projects', label: 'Projetos' },
      ],
      cta: 'Abrir conversa',
      languageLabel: 'Idioma',
    },
    home: {
      eyebrow: 'Full stack sênior · produto, dados e integrações',
      title:
        'Projeto e desenvolvo sistemas web que sustentam operações críticas, com estabilidade, métricas e arquitetura para escala.',
      intro:
        'Desenvolvo dashboards, plataformas internas, e-commerces e integrações com responsabilidade real de produto, engenharia e entrega.',
      description:
        'Meu melhor encaixe é em times e negócios que precisam sair de planilhas, etapas manuais ou sistemas desconectados para uma base operável: requisitos claros, arquitetura simples de manter, interface usável, integrações estáveis e deploy acompanhado.',
      primaryCta: 'Conversar sobre contratação',
      secondaryCta: 'Ver cases técnicos',
      note: 'Stack principal: Next.js, React, TypeScript, Node.js, PHP, Prisma, PostgreSQL, APIs, webhooks, Docker, cloud, CI/CD e observabilidade. Uso essa base para entregar produtos integrados, mensuráveis e simples de manter.',
      stats: [
        {
          value: '8+ anos',
          label: 'criando, mantendo e evoluindo produtos web',
        },
        { value: '5+', label: 'plataformas de e-commerce integradas' },
        {
          value: '0 → produção',
          label: 'discovery, arquitetura, código, deploy e evolução',
        },
      ],
      manifestoTitle: 'Como eu gero valor',
      manifestoLead:
        'Entrego software que reduz atrito operacional, organiza dados e dá visibilidade para decisão.',
      manifestoBody:
        'Eu entro antes do código para entender fluxo, risco e prioridade. Depois traduzo isso em entidades, permissões, estados de interface, APIs, integrações, observabilidade básica e deploy, mantendo a solução simples o bastante para continuar evoluindo.',
      manifestoEvidence: [
        'Arquitetura e implementação full stack com Next.js, React, Node.js, PHP e bancos SQL/NoSQL',
        'Fluxos críticos: autenticação, pagamentos, webhooks, filtros, permissões, uploads e e-mails',
        'Mentalidade de produto: priorização, tradeoffs, entrega incremental e manutenção pós-lançamento',
      ],
      capabilitiesTitle: 'Melhor encaixe',
      capabilitiesIntro:
        'Projetos onde a interface precisa carregar operação de verdade: dados confiáveis, fluxos claros, integrações estáveis e manutenção previsível.',
      capabilities: [
        {
          title: 'Sistemas de negócio e dashboards',
          description:
            'Painéis e ferramentas internas para acompanhar operação, aplicar permissões, filtrar dados, reduzir retrabalho e apoiar decisões com informação confiável.',
        },
        {
          title: 'Integrações, APIs e automações',
          description:
            'Conexões entre plataformas, webhooks, rotinas internas, serviços cloud e automações que cortam trabalho manual sem criar dependência frágil.',
        },
        {
          title: 'MVPs e features com regra de negócio',
          description:
            'Lojas, catálogos, checkout, autenticação, pagamentos e fluxos comerciais implementados com base preparada para evoluir depois da primeira entrega.',
        },
      ],
      featuredTitle: 'Cases com escopo verificável',
      featuredIntro:
        'Cada case mostra contexto, papel, entregáveis, stack e decisões técnicas. A ideia é facilitar avaliação por recrutadores, founders e lideranças de engenharia.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Produto web + recorrência + operação',
          title: 'JSBJJ Kylemore',
          summary:
            'Plataforma para academia com captação de leads, cadastro, login, pagamentos recorrentes e integrações operacionais.',
        },
        {
          slug: 'unit5',
          kicker: 'Website fitness + presença local',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'Website comercial com linguagem forte, contraste alto e comunicação pensada para presença local.',
        },
      ],
      experienceTitle: 'Trajetória',
      experienceIntro:
        'Experiência combinando produto em empresa, freelance técnico, integrações de e-commerce, automações e sustentação de aplicações em produção.',
      experience: [
        {
          period: '2018 - atual',
          title: 'Performa.AI',
          description:
            'Desenvolvedor Full Stack Sênior nas principais ferramentas da empresa, com foco em compatibilidade, performance, segurança e continuidade operacional. Lidero decisões técnicas, apoio boas práticas e integro plataformas como Tray, NuvemShop, Bagy, Climba e Shopify.',
        },
        {
          period: '2017 - atual',
          title: 'Autônomo e freelance',
          description:
            'Entrego sites, e-commerces, apps para plataformas de venda e sistemas web com foco em SEO, conversão e operação. Também desenvolvi sistema de agendamentos, fila de e-mails marketing, configuração de servidores, deploys, protótipos e layouts.',
        },
        {
          period: 'Stack principal',
          title:
            'Arquitetura full stack para produtos web, integrações e operações digitais',
          description:
            'Construo aplicações com Next.js, React, TypeScript, Node.js, PHP, Prisma, Tailwind e bancos relacionais ou NoSQL. Tenho experiência com autenticação, pagamentos, frete, webhooks, e-mails transacionais, uploads, APIs, automações, Docker e cloud.',
        },
      ],
      hiring: {
        title: 'Disponibilidade e contato',
        intro:
          'Aberto a oportunidades full stack sênior, consultoria técnica e projetos com responsabilidade de ponta a ponta.',
        items: [
          'Brasil · UTC-3 · remoto ou híbrido conforme contexto',
          'Português e inglês para times, clientes e documentação',
          'Trabalho bem com times pequenos, produtos internos e integrações críticas que precisam sair do improviso e ganhar dono técnico',
        ],
        links: {
          whatsapp: 'WhatsApp',
        },
      },
      closingTitle: 'Pronto para discutir escopo, contrato ou oportunidade',
      closingBody:
        'Se o desafio envolve regra de negócio, dados, integração ou operação crítica, eu consigo ajudar a transformar a demanda em produto entregue e sustentável.',
      closingCta: 'Abrir conversa',
    },
    about: {
      eyebrow: 'Sobre',
      title:
        'Sou desenvolvedor full stack sênior para operações digitais que precisam transformar regra de negócio, dados e integrações em produto confiável.',
      intro:
        'Tenho 8 anos de experiência criando, mantendo e evoluindo produtos web em produção. Meu melhor encaixe é em sistemas de negócio, dashboards, e-commerce e integrações onde a entrega precisa sair da tela bonita e sustentar rotina, decisão, automação e crescimento.',
      storyTitle: 'Experiência aplicada',
      paragraphs: [
        'Minha trajetória começou em interfaces web e evoluiu para produtos completos. Hoje trabalho do diagnóstico à produção, conectando frontend, backend, banco de dados, permissões, integrações, automações, deploy e manutenção sem perder de vista o uso real.',
        'Na Performa.AI, mantenho e evoluo ferramentas críticas da empresa com foco em compatibilidade, performance, segurança e continuidade operacional. Também participo de decisões técnicas, apoio boas práticas no time e integro plataformas de e-commerce como Tray, NuvemShop, Bagy, Climba e Shopify.',
        'Em projetos externos, transformei presença pública em camada operacional: captação, cadastro, autenticação, pagamentos recorrentes, e-mails transacionais, tracking, banco relacional, cloud e ajustes pós-lançamento. No case JSBJJ Kylemore, por exemplo, o site deixou de ser só uma vitrine e passou a conectar aquisição, onboarding, assinatura recorrente e dados estruturados.',
        'Meu diferencial está em entrar antes da implementação para entender fluxo, gargalo, dependência externa e risco técnico. A partir disso, desenho uma solução que não dependa de improviso depois do deploy: entidades claras, integrações explícitas, estados de interface previsíveis e responsabilidades bem separadas entre produto, operação e engenharia.',
      ],
      highlightsTitle: 'Evidências de senioridade',
      highlights: [
        '8 anos criando, mantendo e evoluindo produtos web em empresa e projetos externos, com responsabilidade de ponta a ponta: diagnóstico, arquitetura, implementação, deploy e evolução pós-lançamento.',
        'Ownership técnico em ferramentas críticas, com atenção a compatibilidade, performance, segurança, manutenção de legado e integrações que impactam a operação diária.',
        'Experiência real com fluxos críticos: autenticação, pagamentos recorrentes, webhooks, frete, e-mails transacionais, uploads, tracking, permissões, APIs e integrações de e-commerce.',
        'Boa aderência para squads pequenos, consultoria técnica e negócios que precisam transformar planilhas, etapas manuais ou integrações frágeis em produto operável e mensurável.',
      ],
      methodTitle: 'Meu método',
      method: [
        {
          title: 'Diagnóstico do problema',
          body: 'Começo pelo fluxo real: objetivo do negócio, usuários, gargalos, dados confiáveis, regras de permissão, dependências externas e riscos técnicos antes de transformar demanda em tela ou backlog.',
        },
        {
          title: 'Arquitetura pragmática',
          body: 'Defino entidades, contratos, integrações, estados da interface, validações, erros e responsabilidades do backend para entregar uma base simples de operar, testar e evoluir.',
        },
        {
          title: 'Entrega com acabamento',
          body: 'Levo a solução até produção com atenção ao fluxo completo: interface responsiva, backend integrado, validações, estados de erro e vazio, tracking, deploy e ajustes pós-lançamento. Entrego uma base estável, simples de operar e preparada para evoluir sem retrabalho desnecessário.',
        },
      ],
      cta: 'Conversar sobre um sistema interno, dashboard ou integração crítica',
    },
    projects: {
      eyebrow: 'Projetos',
      title:
        'Projetos que mostram como penso produto, interface e engenharia em entregas reais.',
      intro:
        'Cada case destaca um contexto em que precisei transformar necessidade de negócio em experiência clara, usável e tecnicamente consistente.',
      cta: 'Ver case completo',
      liveLabel: 'Abrir projeto',
    },
    projectDetail: {
      backLabel: 'Voltar para projetos',
      openLabel: 'Abrir projeto',
      roleLabel: 'Papel',
      deliverablesLabel: 'Entrega',
      stackLabel: 'Stack',
      moreProjectsLabel: 'Outros projetos',
    },
  },
  en: {
    metadata: {
      title:
        'Guilherme Caramori | Senior full stack for internal products and integrations',
      description:
        'Portfolio of Guilherme Caramori, a senior full stack developer focused on internal products, dashboards, integrations, automations, and production delivery.',
    },
    topbar: {
      brand: 'Guilherme Caramori',
      descriptor:
        'Web products, dashboards, integrations, and production delivery',
      nav: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
      ],
      cta: 'Start a conversation',
      languageLabel: 'Language',
    },
    home: {
      eyebrow: 'Senior full stack · product, data, and integrations',
      title:
        'I design and build web systems that support critical operations, with stability, metrics, and architecture built to scale.',
      intro:
        'I build dashboards, internal platforms, e-commerce flows, and integrations with real ownership across product, engineering, and delivery.',
      description:
        'My strongest fit is with teams and businesses moving away from spreadsheets, manual steps, or disconnected systems into an operable foundation: clear requirements, maintainable architecture, usable interfaces, stable integrations, and supported deployment.',
      primaryCta: 'Discuss hiring',
      secondaryCta: 'View technical cases',
      note: 'Core stack: Next.js, React, TypeScript, Node.js, PHP, Prisma, PostgreSQL, APIs, webhooks, Docker, cloud, CI/CD, and observability. I use this foundation to deliver integrated, measurable products that are simple to maintain.',
      stats: [
        {
          value: '8+ years',
          label: 'building, maintaining, and evolving web products',
        },
        { value: '5+', label: 'e-commerce platforms integrated' },
        {
          value: '0 → prod',
          label: 'discovery, architecture, code, deployment, and iteration',
        },
      ],
      manifestoTitle: 'How I create value',
      manifestoLead:
        'I ship software that reduces operational friction, organizes data, and improves decision-making.',
      manifestoBody:
        'I get involved before code to understand workflows, risks, and priorities. Then I translate that into entities, permissions, interface states, APIs, integrations, basic observability, and deployment while keeping the solution simple enough to keep evolving.',
      manifestoEvidence: [
        'Full stack architecture and implementation with Next.js, React, Node.js, PHP, and SQL/NoSQL databases',
        'Critical flows: authentication, payments, webhooks, filters, permissions, uploads, and email',
        'Product mindset: prioritization, tradeoffs, incremental delivery, and post-launch maintenance',
      ],
      capabilitiesTitle: 'Best fit',
      capabilitiesIntro:
        'Projects where the interface carries real operations: reliable data, clear workflows, stable integrations, and predictable maintenance.',
      capabilities: [
        {
          title: 'Internal products and dashboards',
          description:
            'Panels and internal tools for monitoring operations, applying permissions, filtering data, reducing rework, and supporting decisions with trustworthy information.',
        },
        {
          title: 'Integrations, APIs, and automations',
          description:
            'Connections between platforms, webhooks, internal routines, cloud services, and automations that reduce manual work without creating fragile dependencies.',
        },
        {
          title: 'MVPs and features with business logic',
          description:
            'Stores, catalogs, checkout, authentication, payments, and commercial workflows implemented on a foundation that can evolve after the first release.',
        },
      ],
      featuredTitle: 'Cases with verifiable scope',
      featuredIntro:
        'Each case shows context, role, deliverables, stack, and technical decisions, making evaluation easier for recruiters, founders, and engineering leaders.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Web product + recurring payments + operations',
          title: 'JSBJJ Kylemore',
          summary:
            'An academy platform with lead capture, registration, login, recurring payments, and operational integrations.',
        },
        {
          slug: 'unit5',
          kicker: 'Fitness website + local presence',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'A commercial website with bold language, high contrast, and messaging designed for a stronger local presence.',
        },
      ],
      experienceTitle: 'Background',
      experienceIntro:
        'Experience across company product work, technical freelance projects, e-commerce integrations, automations, and production support.',
      experience: [
        {
          period: '2018 - now',
          title: 'Performa.AI',
          description:
            "Senior Full Stack Developer on the company's main tools, focused on compatibility, performance, security, and operational continuity. I lead technical decisions, support team practices, and integrate platforms such as Tray, NuvemShop, Bagy, Climba, and Shopify.",
        },
        {
          period: '2017 - now',
          title: 'Freelance and independent work',
          description:
            'I deliver websites, e-commerce stores, platform apps, and web systems focused on SEO, conversion, and operations. I have also built a clinic scheduling system, marketing email queue, server setup, production deployments, prototypes, and layouts.',
        },
        {
          period: 'Core stack',
          title:
            'Full stack architecture for web products, integrations, and digital operations',
          description:
            'I build applications with Next.js, React, TypeScript, Node.js, PHP, Prisma, Tailwind, and relational or NoSQL databases. I have experience with authentication, payments, shipping, webhooks, transactional email, uploads, APIs, automations, Docker, and cloud.',
        },
      ],
      hiring: {
        title: 'Availability and contact',
        intro:
          'Open to senior full stack opportunities, technical consulting, and projects with end-to-end responsibility.',
        items: [
          'Brazil · UTC-3 · remote or hybrid depending on context',
          'Portuguese and English for teams, clients, and documentation',
          'I work well with small teams, internal products, and critical integrations that need clear technical ownership',
        ],
        links: {
          whatsapp: 'WhatsApp',
        },
      },
      closingTitle: 'Ready to discuss scope, contract, or opportunity',
      closingBody:
        'If the challenge involves business logic, data, integration, or critical operations, I can help turn the request into delivered, sustainable product.',
      closingCta: 'Start a conversation',
    },
    about: {
      eyebrow: 'About',
      title:
        'I am a senior full stack developer for digital operations that need to turn business logic, data, and integrations into reliable product.',
      intro:
        'I have 8 years of experience building, maintaining, and evolving web products in production. I fit best in internal systems, dashboards, e-commerce, and integrations where the work must go beyond a polished interface and support routines, decisions, automation, and growth.',
      storyTitle: 'Applied experience',
      paragraphs: [
        'My path started with web interfaces and evolved into complete products. Today I work from diagnosis to production, connecting frontend, backend, databases, permissions, integrations, automations, deployment, and maintenance without losing sight of real usage.',
        'At Performa.AI, I maintain and evolve critical company tools with a focus on compatibility, performance, security, and operational continuity. I also contribute to technical decisions, support team practices, and integrate e-commerce platforms such as Tray, NuvemShop, Bagy, Climba, and Shopify.',
        'In external projects, I have turned public presence into an operational layer: lead capture, registration, authentication, recurring payments, transactional email, tracking, relational data, cloud, and post-launch iteration. In the JSBJJ Kylemore case, for example, the website became more than a brochure and started connecting acquisition, onboarding, recurring subscriptions, and structured data.',
        'My differentiator is getting involved before implementation to understand flows, bottlenecks, external dependencies, and technical risk. From there, I design solutions that do not depend on improvisation after deployment: clear entities, explicit integrations, predictable interface states, and well-separated responsibilities across product, operations, and engineering.',
      ],
      highlightsTitle: 'Evidence of seniority',
      highlights: [
        '8 years building, maintaining, and evolving web products across company work and external projects, with end-to-end responsibility: diagnosis, architecture, implementation, deployment, and post-launch evolution.',
        'Technical ownership of critical tools, with attention to compatibility, performance, security, legacy maintenance, and integrations that affect daily operations.',
        'Real experience with critical flows: authentication, recurring payments, webhooks, shipping, transactional email, uploads, tracking, permissions, APIs, and e-commerce integrations.',
        'Strong fit for small squads, technical consulting, and businesses that need to turn spreadsheets, manual steps, or fragile integrations into operable, measurable product.',
      ],
      methodTitle: 'My method',
      method: [
        {
          title: 'Problem diagnosis',
          body: 'I start with the real workflow: business goals, users, bottlenecks, reliable data, permission rules, external dependencies, and technical risks before turning a request into screens or backlog.',
        },
        {
          title: 'Pragmatic architecture',
          body: 'I define entities, contracts, integrations, interface states, validations, errors, and backend responsibilities to ship a foundation that is simple to operate, test, and evolve.',
        },
        {
          title: 'Delivery with polish',
          body: 'I take the solution to production with attention to the complete flow: responsive interface, integrated backend, validations, error and empty states, tracking, deployment, and post-launch adjustments. I deliver a stable foundation that is simple to operate and ready to evolve without unnecessary rework.',
        },
      ],
      cta: 'Talk about an internal system, dashboard, or critical integration',
    },
    projects: {
      eyebrow: 'Projects',
      title:
        'Projects that show how I think through product, interface, and engineering in real deliveries.',
      intro:
        'Each case highlights a context where I had to turn a business need into a clear, usable, and technically consistent experience.',
      cta: 'View full case',
      liveLabel: 'Open project',
    },
    projectDetail: {
      backLabel: 'Back to projects',
      openLabel: 'Open project',
      roleLabel: 'Role',
      deliverablesLabel: 'Delivery',
      stackLabel: 'Stack',
      moreProjectsLabel: 'More projects',
    },
  },
}

export const projectCases: Record<Locale, Record<ProjectSlug, ProjectCase>> = {
  'pt-BR': {
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Produto web + operação em produção',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'Plataforma para academia com captação, autenticação, pagamentos recorrentes, tracking, dados e integrações operacionais.',
      overview:
        'Projeto full stack criado para tirar a aquisição de alunos de um fluxo solto e transformar o site em uma camada operacional. Além da presença pública, a entrega conectou captação, cadastro, autenticação, pagamento recorrente, banco relacional, tracking e deploy em produção.',
      role: 'Responsável por discovery, direção visual, arquitetura da interface, frontend, backend, modelagem de dados, integrações externas, eventos de tracking, deploy e ajustes pós-lançamento.',
      deliverables:
        'Site institucional responsivo, páginas de captação para adultos e kids/teens, cadastro e login, assinatura recorrente, emails transacionais, Google Maps, GoCardless, Meta Pixel, banco PostgreSQL/Prisma e deploy em produção.',
      stack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
        'Framer Motion',
        'Google APIs',
        'GoCardless API',
        'Vercel',
        'Cloud deployment',
      ],
      sections: [
        {
          title: 'Contexto',
          body: 'A academia precisava de mais do que uma vitrine. A entrada de novos alunos passava por interesse, trial, cadastro, confirmação e pagamento, mas parte desse fluxo ainda dependia de etapas manuais. O desafio era comunicar confiança para iniciantes e famílias sem perder a base operacional por trás da interface.',
        },
        {
          title: 'Solução',
          body: 'Estruturei a experiência em torno de conversão e clareza: páginas específicas para adultos, kids e teens, CTAs consistentes, formulários direcionados e uma hierarquia visual voltada para trial e contato. No backend, organizei cadastro, autenticação, dados relacionais e integração com pagamento recorrente.',
        },
        {
          title: 'Arquitetura e decisões',
          body: 'A base foi desenhada para separar site público, fluxos de cadastro, persistência de dados e integrações externas. Prisma/PostgreSQL sustentam os dados principais, GoCardless cobre assinatura recorrente, emails transacionais fecham etapas críticas e eventos customizados no Meta Pixel ajudam a acompanhar ações relevantes do funil.',
        },
        {
          title: 'Impacto',
          body: 'O resultado foi um produto mais maduro do que um site institucional comum: presença digital com posicionamento claro, captura de leads, onboarding, pagamentos conectados e dados estruturados. A operação passou a depender menos de processos soltos e ganhou mais visibilidade sobre aquisição, cadastro e conversão.',
        },
      ],
    },
    unit5: {
      slug: 'unit5',
      category: 'Website fitness',
      title: 'Unit 5 Strength & Fitness',
      cardSummary:
        'Website comercial com direção visual forte, hierarquia de conversão e comunicação pensada para presença local.',
      overview:
        'Unit 5 exigia uma presença digital direta, energética e mais confiante. O trabalho foi transformar a direção visual em uma experiência responsiva que comunicasse força, serviço e ação logo nos primeiros segundos.',
      role: 'Responsável por interface, frontend, responsividade, ritmo visual, hierarquia de CTA e tradução da identidade em experiência web.',
      deliverables:
        'Website promocional com hero de alto impacto, seções de serviços, prova social, contato e layout responsivo preparado para leitura rápida em mobile.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      sections: [
        {
          title: 'Contexto',
          body: 'O projeto pedia uma identidade com mais presença e contraste, capaz de comunicar energia e especialização logo no primeiro scroll. O risco era virar mais um site genérico de academia, com pouca clareza de oferta e CTAs sem prioridade.',
        },
        {
          title: 'Solução',
          body: 'A interface foi organizada para valorizar headline, imagem e chamadas de ação, usando contraste forte, tipografia pesada e ritmo visual direto. As seções foram pensadas para leitura escaneável: proposta, serviços, prova e contato sem excesso de ornamentação.',
        },
        {
          title: 'Execução responsiva',
          body: 'O frontend foi implementado com atenção a espaçamento, proporção de imagens, quebras de texto e prioridade dos CTAs em telas pequenas. A entrega preserva impacto visual no desktop sem sacrificar leitura e ação no mobile.',
        },
        {
          title: 'Impacto',
          body: 'O site ficou mais convincente como peça comercial e mais coerente com o tipo de serviço oferecido. A marca ganhou uma apresentação mais confiante, direta e adequada para tráfego local e primeiro contato.',
        },
      ],
    },
  },
  en: {
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Web product + production operations',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'A platform for a martial arts academy with lead capture, authentication, recurring payments, tracking, data, and operational integrations.',
      overview:
        'A full stack project built to move student acquisition out of a loose manual flow and turn the website into an operational layer. Beyond public presence, the delivery connected lead capture, registration, authentication, recurring payments, relational data, tracking, and production deployment.',
      role: 'Responsible for discovery, visual direction, interface architecture, frontend, backend, data modeling, external integrations, tracking events, deployment, and post-launch adjustments.',
      deliverables:
        'Responsive institutional website, adult and kids/teens lead capture pages, registration and login, recurring subscriptions, transactional emails, Google Maps, GoCardless, Meta Pixel, PostgreSQL/Prisma, and production deployment.',
      stack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
        'Framer Motion',
        'Google APIs',
        'GoCardless API',
        'Vercel',
        'Cloud deployment',
      ],
      sections: [
        {
          title: 'Context',
          body: 'The academy needed more than a brochure site. New student acquisition involved interest, trial, registration, confirmation, and payment, but part of that flow still depended on manual steps. The challenge was to build trust with beginners and families while supporting the operational workflow behind the interface.',
        },
        {
          title: 'Solution',
          body: 'I structured the experience around conversion and clarity: dedicated pages for adults, kids, and teens, consistent CTAs, directed forms, and a visual hierarchy focused on trial and contact. On the backend, I organized registration, authentication, relational data, and recurring payment integration.',
        },
        {
          title: 'Architecture and decisions',
          body: 'The foundation separates the public website, registration flows, data persistence, and external integrations. Prisma/PostgreSQL supports core data, GoCardless handles recurring subscriptions, transactional emails close critical steps, and custom Meta Pixel events help track relevant funnel actions.',
        },
        {
          title: 'Impact',
          body: 'The result was more mature than a standard institutional website: clear positioning, lead capture, onboarding, connected payments, and structured data. The operation became less dependent on disconnected manual processes and gained better visibility over acquisition, registration, and conversion.',
        },
      ],
    },
    unit5: {
      slug: 'unit5',
      category: 'Fitness website',
      title: 'Unit 5 Strength & Fitness',
      cardSummary:
        'A commercial website with strong visual direction, conversion hierarchy, and messaging designed for local presence.',
      overview:
        'Unit 5 needed a direct, energetic, and more confident digital presence. The work translated the visual direction into a responsive experience that communicates strength, service, and action within the first few seconds.',
      role: 'Responsible for interface, frontend, responsiveness, visual rhythm, CTA hierarchy, and translating the identity into a web experience.',
      deliverables:
        'Promotional website with a high-impact hero, service sections, social proof, contact flows, and a responsive layout prepared for fast mobile reading.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      sections: [
        {
          title: 'Context',
          body: 'The project called for a visual identity with more presence and contrast, able to communicate energy and specialization in the first scroll. The risk was ending up with a generic gym website, weak offer clarity, and CTAs without priority.',
        },
        {
          title: 'Solution',
          body: 'The interface was structured to give more weight to headline, imagery, and calls to action, using strong contrast, heavy typography, and direct visual rhythm. The sections were designed for scanning: proposition, services, proof, and contact without unnecessary ornament.',
        },
        {
          title: 'Responsive execution',
          body: 'The frontend implementation paid close attention to spacing, image proportions, text breaks, and CTA priority on small screens. The delivery preserves visual impact on desktop without sacrificing readability and action on mobile.',
        },
        {
          title: 'Impact',
          body: 'The website became more convincing as a commercial asset and more aligned with the service itself. The brand gained a more confident, direct presentation suited for local traffic and first contact.',
        },
      ],
    },
  },
}

export default siteContent
