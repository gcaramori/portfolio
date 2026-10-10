export const locales = ['pt-BR', 'en'] as const

export type Locale = (typeof locales)[number]
export type ProjectSlug = 'performa-ai' | 'jsbjjkylemore' | 'unit5'

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
  stack?: string[]
  highlights?: string[]
  caseSlug?: ProjectSlug
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
  metrics?: Stat[]
  sources?: { title: string; url: string }[]
  flow?: { title: string; note: string; steps: string[] }
  sections: {
    title: string
    body: string
  }[]
}

type SiteContent = {
  resume: {
    label: string
    printLabel: string
    downloadLabel: string
    printHint: string
    summaryTitle: string
    experienceTitle: string
    skillsTitle: string
    projectsTitle: string
    availabilityTitle: string
  }
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
    mobileTitle: string
    intro: string
    mobileIntro: string
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
    experienceCaseLabel: string
    experienceTitle: string
    experienceIntro: string
    experience: ExperienceItem[]
    hiring: {
      title: string
      intro: string
      items: string[]
      links: {
        whatsapp: string
        email: string
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
    sourcesLabel: string
    sourcesNote: string
    moreProjectsLabel: string
  }
}

const siteContent: Record<Locale, SiteContent> = {
  'pt-BR': {
    resume: {
      label: 'Ver currículo',
      printLabel: 'Imprimir / salvar PDF',
      downloadLabel: 'Baixar currículo em PDF',
      printHint:
        'Na janela de impressão, escolha Salvar como PDF para baixar o currículo.',
      summaryTitle: 'Resumo profissional',
      experienceTitle: 'Experiência profissional',
      skillsTitle: 'Tecnologias',
      projectsTitle: 'Projetos selecionados',
      availabilityTitle: 'Disponibilidade e idiomas',
    },
    metadata: {
      title: 'Guilherme Caramori | Desenvolvedor Full Stack Sênior',
      description:
        'Portfólio de Guilherme Caramori, desenvolvedor full stack sênior focado em sistemas de negócio, dashboards, integrações, automações e entrega em produção.',
    },
    topbar: {
      brand: 'Guilherme Caramori',
      descriptor: 'Produtos web, dashboards, integrações e entrega em produção',
      nav: [
        { href: '/', label: 'Início' },
        { href: '/about', label: 'Sobre' },
        { href: '/projects', label: 'Projetos' },
      ],
      cta: 'Conversar sobre uma vaga',
      languageLabel: 'Idioma',
    },
    home: {
      eyebrow: 'SaaS · e-commerce · integrações',
      title: 'Desenvolvedor Full Stack Sênior | React, TypeScript e Node.js',
      mobileTitle: 'Desenvolvedor Full Stack Sênior',
      intro:
        '8+ anos desenvolvendo produtos web, integrações de e-commerce e sistemas em produção. Atuo do planejamento à entrega, conectando sistemas e automatizando processos para reduzir trabalho manual, manter dados confiáveis e sustentar operações em escala.',
      mobileIntro:
        '8+ anos em produtos web e integrações de e-commerce, do planejamento à produção. React, TypeScript e Node.js.',
      description:
        'Ajudo times e negócios a substituir planilhas, tarefas manuais e sistemas desconectados por aplicações com requisitos claros, interfaces fáceis de usar e integrações estáveis. Cuido da arquitetura e acompanho o deploy para facilitar a manutenção.',
      primaryCta: 'Conversar sobre uma oportunidade',
      secondaryCta: 'Ver currículo',
      note: 'Brasil · UTC-3 · disponível para vagas remotas no Brasil e no exterior.',
      stats: [
        {
          value: '8+ anos',
          label: 'desenvolvendo e mantendo produtos web',
        },
        {
          value: 'Milhares de requisições/min',
          label: 'em um serviço de webhooks que desenvolvi',
        },
        {
          value: 'Plataformas conectadas',
          label:
            'apps, catálogos e pedidos integrados entre Shopify, Nuvemshop, Loja Integrada, Tray, VTEX e Magazord',
        },
        {
          value: 'Da arquitetura à produção',
          label: 'frontend, backend, integrações, deploy e manutenção',
        },
      ],
      manifestoTitle: 'Como trabalho',
      manifestoLead:
        'Desenvolvo software para reduzir o trabalho manual e organizar os dados que apoiam as decisões do negócio.',
      manifestoBody:
        'Antes de escrever código, procuro entender como a operação funciona, onde estão os riscos e o que precisa ser resolvido primeiro. A partir disso, defino o modelo de dados, as permissões e os estados da interface. Implemento APIs e integrações, configuro o monitoramento básico e acompanho o deploy, com atenção à manutenção e às próximas mudanças.',
      manifestoEvidence: [
        'Arquitetura e implementação full stack com Next.js, React, Node.js, PHP e bancos SQL/NoSQL',
        'Fluxos críticos: autenticação, pagamentos, webhooks, filtros, permissões, uploads e e-mails',
        'Priorização junto ao time, avaliação de alternativas, entregas incrementais e manutenção após o lançamento',
      ],
      capabilitiesTitle: 'Onde posso ajudar',
      capabilitiesIntro:
        'Trabalho em projetos usados no dia a dia da operação, em que os dados precisam ser confiáveis e os fluxos, fáceis de seguir. Dou atenção à estabilidade das integrações e à manutenção do sistema.',
      capabilities: [
        {
          title: 'Sistemas de negócio e dashboards',
          description:
            'Desenvolvo painéis e ferramentas internas para acompanhar a operação, controlar permissões e consultar dados. O objetivo é reduzir retrabalho e dar ao time informações confiáveis para decidir.',
        },
        {
          title: 'Integrações, APIs e automações',
          description:
            'Integro plataformas por APIs e webhooks e desenvolvo rotinas internas com serviços cloud. Busco reduzir tarefas manuais com automações e dependências que o time consiga manter.',
        },
        {
          title: 'MVPs e funcionalidades de negócio',
          description:
            'Desenvolvo lojas, catálogos e fluxos comerciais, incluindo checkout, autenticação e pagamentos. Planejo a implementação para permitir novas funcionalidades depois da primeira entrega.',
        },
      ],
      featuredTitle: 'Projetos freelance selecionados',
      featuredIntro:
        'Projetos para clientes: minha contribuição, decisões técnicas e entregas em produção.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Plataforma para academia com pagamentos recorrentes',
          title: 'JSBJJ Kylemore',
          summary:
            'Plataforma para academia com captação de leads, cadastro, login, pagamentos recorrentes e integrações operacionais.',
        },
        {
          slug: 'unit5',
          kicker: 'Site para academia com foco no público local',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'Site comercial responsivo com apresentação de serviços, prova social e chamadas para entrar em contato.',
        },
      ],
      experienceTitle: 'Trajetória',
      experienceCaseLabel: 'Ver case da Performa.AI',
      experienceIntro:
        'Experiência em SaaS de e-commerce e projetos independentes, com responsabilidade pelo desenvolvimento, pelas integrações e pela manutenção em produção.',
      experience: [
        {
          period: '2018 - atual',
          title: 'Performa.AI',
          caseSlug: 'performa-ai',
          description:
            'Desenvolvedor full stack sênior e referência técnica do time na Performa.AI, plataforma de inteligência e conversão para e-commerce. Desenvolvo APIs, integrações de catálogos e pedidos e ferramentas embarcadas nas lojas.',
          highlights: [
            'Confiabilidade no processamento de pedidos: implementei processamento idempotente de webhooks para evitar registros duplicados em um serviço com mais de 150 clientes conectados e milhares de requisições por minuto, mantendo dados consistentes para a avaliação das recomendações.',
            'Automação de integrações de e-commerce: desenvolvi e mantive integrações de catálogos e pedidos com plataformas como Shopify, Nuvemshop, Loja Integrada, Tray, VTEX e Magazord, automatizando a atualização dos dados utilizados pelas ferramentas da Performa.AI e reduzindo a necessidade de intervenção manual.',
            'APIs e segurança: API com MongoDB replicado, JWT, HMAC e rate limiting, com milhares de acessos diários.',
            'Parcerias com plataformas: interlocução técnica para obter orientações de integração e apoiar o fechamento de parcerias.',
            'Suporte e clientes: apoio ao suporte, implementações específicas e resolução de problemas técnicos complexos.',
            'Orientação de iniciantes: apoio a profissionais em início de carreira nas dúvidas e decisões técnicas do dia a dia.',
            'Eficiência das ferramentas em produção: otimizei scripts JavaScript e rotinas de acesso aos dados, reduzindo o tempo de carregamento das ferramentas embarcadas nas lojas e o consumo dos bancos de dados.',
            'Automações com IA: fluxos de WhatsApp com IA, MCP e RAG, além de trabalho com pagamentos e auditoria.',
          ],
          stack: [
            'TypeScript',
            'React',
            'Node.js',
            'NestJS',
            'PHP',
            'MongoDB',
            'Redis',
            'JavaScript',
            'Sentry',
            'MCP',
            'RAG',
            'Docker',
            'Vitest',
            'Jest',
            'Grafana',
            'GitHub Actions',
            'Supabase',
            'APIs',
            'Webhooks',
          ],
        },
        {
          period: '2017 - atual',
          title: 'Desenvolvedor Full Stack Freelance',
          description:
            'Minha experiência freelance inclui sites, plataformas web, intranets corporativas, sistemas de agendamento e automações de e-mail marketing. Atuo do levantamento de requisitos à entrega em produção, com frontend, backend, integrações e manutenção.',
          highlights: [
            'Intranet corporativa: sistema interno de comunicação, com acervo de fotos e mural de recados.',
            'E-mail marketing: fila de envios com BullMQ, Node.js e Amazon SES, com deploy em VPS na DigitalOcean.',
            'Clínica odontológica: sistema de agendamento de consultas e gestão de médicos, funcionários e horários disponíveis.',
            'Plataforma para academia: captação de alunos, cadastro, autenticação, pagamentos recorrentes via GoCardless e banco de dados PostgreSQL com Prisma ORM.',
            'Site comercial para academia: interface responsiva com apresentação de serviços, prova social e chamadas para entrar em contato.',
          ],
          stack: [
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'Tailwind CSS',
            'Prisma',
            'PostgreSQL',
            'PHP',
            'BullMQ',
            'Vitest',
            'Jest',
            'GitHub Actions',
            'Integrações com gateways de pagamento',
          ],
        },
      ],
      hiring: {
        title: 'Disponibilidade e contato',
        intro:
          'Busco oportunidades como desenvolvedor full stack sênior. Também estou aberto a consultoria técnica.',
        items: [
          'Brasil · UTC-3 · disponível para vagas remotas no Brasil e no exterior',
          'Português e inglês para times, clientes e documentação',
          'Trabalho bem com times pequenos e posso assumir a responsabilidade técnica por produtos internos e integrações críticas que precisam de organização e acompanhamento',
        ],
        links: {
          whatsapp: 'WhatsApp',
          email: 'E-mail',
        },
      },
      closingTitle: 'Vamos conversar sobre uma oportunidade?',
      closingBody:
        'Busco oportunidades como desenvolvedor full stack sênior em times que desenvolvem SaaS, sistemas de negócio e integrações. Também estou aberto a consultoria técnica.',
      closingCta: 'Conversar sobre uma oportunidade',
    },
    about: {
      eyebrow: 'Sobre',
      title:
        'Desenvolvedor full stack sênior com experiência em SaaS, e-commerce e integrações.',
      intro:
        'Trabalho com SaaS, sistemas de negócio e integrações de e-commerce, acompanhando produtos desde o planejamento até a manutenção em produção.',
      storyTitle: 'Minha experiência',
      paragraphs: [
        'Comecei desenvolvendo interfaces web. Com o tempo, passei a trabalhar também com APIs, integrações e produtos completos. Na Performa.AI, desenvolvo e mantenho ferramentas que conectam catálogos, pedidos e recomendações nas lojas.',
        'Também ajudo o time de suporte a investigar problemas e converso com as equipes das plataformas sobre integrações. No dia a dia, oriento profissionais em início de carreira nas dúvidas técnicas. Nos projetos freelance, trabalho com os clientes desde o levantamento de requisitos até a entrega e a manutenção.',
      ],
      highlightsTitle: 'Meu trabalho na Performa.AI',
      highlights: [
        '8 anos criando, mantendo e evoluindo produtos web em empresa e projetos externos, com responsabilidade de ponta a ponta: diagnóstico, arquitetura, implementação, deploy e evolução pós-lançamento.',
        'Ownership técnico em ferramentas críticas, com atenção à compatibilidade, à performance, à segurança, à manutenção de legado e às integrações que impactam a operação diária.',
        'Experiência real com fluxos críticos: autenticação, pagamentos recorrentes, webhooks, frete, e-mails transacionais, uploads, tracking, permissões, APIs e integrações de e-commerce.',
        'Boa aderência para squads pequenos, consultoria técnica e negócios que precisam transformar planilhas, etapas manuais ou integrações frágeis em produto operável e mensurável.',
      ],
      methodTitle: 'Como trabalho',
      method: [
        {
          title: 'Entender o problema',
          body: 'Antes de definir telas ou tarefas, procuro entender como o trabalho acontece e o que o negócio precisa resolver. Converso sobre quem usa o sistema e onde estão os gargalos. Também verifico quais dados são confiáveis, as regras de permissão, as dependências externas e os riscos técnicos.',
        },
        {
          title: 'Organizar a implementação',
          body: 'Defino as entidades, os contratos e as integrações, junto com as responsabilidades do backend. Na interface, planejo os estados que o usuário vai encontrar, incluindo validações e erros. Busco uma estrutura que seja simples de operar e que facilite os testes e as próximas mudanças.',
        },
        {
          title: 'Acompanhar a entrega',
          body: 'Cuido da interface responsiva e da integração com o backend, incluindo validações, estados de erro e telas sem dados. Também implemento o tracking, acompanho o deploy e faço os ajustes após o lançamento. Esse cuidado ajuda a manter o sistema estável e simples de operar, com espaço para novas funcionalidades e menos retrabalho.',
        },
      ],
      cta: 'Conversar sobre uma oportunidade',
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
      sourcesLabel: 'Fontes sobre a empresa',
      sourcesNote:
        'Contexto público da empresa e de sua distribuição por plataformas. Os volumes e as contribuições pessoais descritos neste case são baseados na minha experiência.',
      moreProjectsLabel: 'Outros projetos',
    },
  },
  en: {
    resume: {
      label: 'View résumé',
      printLabel: 'Print / save PDF',
      downloadLabel: 'Download résumé PDF',
      printHint:
        'Choose Save as PDF in the print dialog to download the résumé.',
      summaryTitle: 'Professional summary',
      experienceTitle: 'Professional experience',
      skillsTitle: 'Technologies',
      projectsTitle: 'Selected projects',
      availabilityTitle: 'Availability and languages',
    },
    metadata: {
      title: 'Guilherme Caramori | Senior Full Stack Developer',
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
      cta: 'Discuss an opportunity',
      languageLabel: 'Language',
    },
    home: {
      eyebrow: 'SaaS · e-commerce · integrations',
      title: 'Senior Full Stack Developer | React, TypeScript and Node.js',
      mobileTitle: 'Senior Full Stack Developer',
      intro:
        '8+ years building web products, e-commerce integrations, and production systems. I work from planning through delivery, connecting systems and automating processes to reduce manual work, keep data reliable, and support operations at scale.',
      mobileIntro:
        '8+ years in web products and e-commerce integrations, from planning to production. React, TypeScript and Node.js.',
      description:
        'I help teams and businesses replace spreadsheets, manual tasks, and disconnected systems with applications that have clear requirements, usable interfaces, and stable integrations. I handle architecture and deployment with maintenance in mind.',
      primaryCta: 'Discuss an opportunity',
      secondaryCta: 'View résumé',
      note: 'Brazil · UTC-3 · available for remote roles in Brazil and internationally.',
      stats: [
        {
          value: '8+ years',
          label: 'developing and maintaining web products',
        },
        {
          value: 'Thousands of requests/min',
          label: 'in a webhook service I built',
        },
        {
          value: 'Connected platforms',
          label:
            'apps, catalogs, and orders integrated across Shopify, Nuvemshop, Loja Integrada, Tray, VTEX, and Magazord',
        },
        {
          value: 'From architecture to production',
          label: 'frontend, backend, integrations, deployment, and maintenance',
        },
      ],
      manifestoTitle: 'How I work',
      manifestoLead:
        'I develop software to reduce manual work and organize the data businesses use to make decisions.',
      manifestoBody:
        'Before writing code, I work to understand the operation, its risks, and what needs to be addressed first. From there, I define the data model, permissions, and interface states. I implement APIs and integrations, set up basic monitoring, and handle deployment with maintenance and future changes in mind.',
      manifestoEvidence: [
        'Full stack architecture and implementation with Next.js, React, Node.js, PHP, and SQL/NoSQL databases',
        'Critical flows: authentication, payments, webhooks, filters, permissions, uploads, and email',
        'Prioritization with the team, weighing alternatives, incremental delivery, and post-launch maintenance',
      ],
      capabilitiesTitle: 'Where I can help',
      capabilitiesIntro:
        'I work on projects used in day-to-day operations, where data needs to be reliable and workflows easy to follow. I pay attention to integration stability and system maintenance.',
      capabilities: [
        {
          title: 'Internal products and dashboards',
          description:
            'I build dashboards and internal tools to monitor operations, manage permissions, and filter data. The goal is to reduce rework and give the team reliable information for making decisions.',
        },
        {
          title: 'Integrations, APIs, and automations',
          description:
            'I connect platforms through APIs and webhooks and build internal routines using cloud services. I aim to reduce manual work with automations and dependencies the team can maintain.',
        },
        {
          title: 'MVPs and features with business logic',
          description:
            'I develop stores, catalogs, and commercial workflows, including checkout, authentication, and payments. I plan the implementation so new features can be added after the first release.',
        },
      ],
      featuredTitle: 'Selected freelance projects',
      featuredIntro:
        'Client projects: my contribution, technical decisions, and production delivery.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Academy platform with recurring payments',
          title: 'JSBJJ Kylemore',
          summary:
            'An academy platform with lead capture, registration, login, recurring payments, and operational integrations.',
        },
        {
          slug: 'unit5',
          kicker: 'Gym website focused on a local audience',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'A responsive commercial website with service information, social proof, and calls to action for contact.',
        },
      ],
      experienceCaseLabel: 'View the Performa.AI case study',
      experienceTitle: 'Background',
      experienceIntro:
        'Experience in e-commerce SaaS and independent projects, taking responsibility for development, integrations, and production maintenance.',
      experience: [
        {
          period: '2018 - now',
          title: 'Performa.AI',
          caseSlug: 'performa-ai',
          description:
            'Senior full stack developer and go-to engineer for technical questions at Performa.AI, an intelligence and conversion platform for e-commerce. I develop APIs, catalog and order integrations, and tools embedded in stores.',
          highlights: [
            'Reliable order processing: I implemented idempotent webhook processing to prevent duplicate records in a service with more than 150 connected clients and thousands of requests per minute, keeping data consistent for recommendation evaluation.',
            'E-commerce integration automation: I developed and maintained catalog and order integrations with platforms such as Shopify, Nuvemshop, Loja Integrada, Tray, VTEX, and Magazord, automating updates to the data used by Performa.AI tools and reducing the need for manual intervention.',
            'APIs and security: an API backed by replicated MongoDB with JWT, HMAC, and rate limiting, serving thousands of daily accesses.',
            'Platform partnerships: technical discussions to obtain integration guidance and support partnership agreements.',
            'Support and clients: assistance to the support team, client-specific implementations, and resolution of complex technical issues.',
            'Mentoring: helping early-career professionals with day-to-day technical questions and decisions.',
            'Production efficiency: I optimized JavaScript scripts and data access routines, reducing loading times for tools embedded in stores and database resource usage.',
            'AI automations: WhatsApp workflows with AI, MCP, and RAG, alongside work on payments and auditing.',
          ],
          stack: [
            'TypeScript',
            'React',
            'Node.js',
            'NestJS',
            'PHP',
            'MongoDB',
            'Redis',
            'JavaScript',
            'Sentry',
            'MCP',
            'RAG',
            'Docker',
            'Vitest',
            'Jest',
            'Grafana',
            'GitHub Actions',
            'Supabase',
            'APIs',
            'Webhooks',
          ],
        },
        {
          period: '2017 - now',
          title: 'Freelance Full Stack Developer',
          description:
            'My freelance experience includes websites, web platforms, corporate intranets, scheduling systems, and email marketing automations. I work from requirements gathering through production delivery, covering frontend, backend, integrations, and maintenance.',
          highlights: [
            'Corporate intranet: an internal communication system with a photo archive and a noticeboard.',
            'Email marketing: a sending queue built with BullMQ, Node.js, and Amazon SES, deployed to a DigitalOcean VPS.',
            'Dental clinic: an appointment scheduling system with management of doctors, staff, and available time slots.',
            'Academy platform: student acquisition, registration, authentication, recurring payments via GoCardless, and a PostgreSQL database with Prisma ORM.',
            'Gym website: a responsive commercial website with service information, social proof, and calls to action for contact.',
          ],
          stack: [
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'Tailwind CSS',
            'Prisma',
            'PostgreSQL',
            'PHP',
            'BullMQ',
            'Vitest',
            'Jest',
            'GitHub Actions',
            'Payment gateway integrations',
          ],
        },
      ],
      hiring: {
        title: 'Availability and contact',
        intro:
          'I am looking for senior full stack roles. I am also open to technical consulting.',
        items: [
          'Brazil · UTC-3 · available for remote roles in Brazil and internationally',
          'Portuguese and English for teams, clients, and documentation',
          'I work well with small teams and can take technical responsibility for internal products and critical integrations that need organization and ongoing support',
        ],
        links: {
          whatsapp: 'WhatsApp',
          email: 'Email',
        },
      },
      closingTitle: 'Have a role in mind?',
      closingBody:
        'I am looking for senior full stack roles in teams building SaaS, business systems, and integrations. I am also open to technical consulting.',
      closingCta: 'Discuss an opportunity',
    },
    about: {
      eyebrow: 'About',
      title:
        'Senior full stack developer with experience in SaaS, e-commerce, and integrations.',
      intro:
        'I work on SaaS, internal systems, and e-commerce integrations, taking products from planning through production maintenance.',
      storyTitle: 'My experience',
      paragraphs: [
        'I started by building web interfaces. Over time, I began working on APIs, integrations, and complete products too. At Performa.AI, I build and maintain tools that connect store catalogs, orders, and recommendations.',
        'I also help the support team investigate problems and work with platform teams on integrations. Day to day, I help developers who are starting their careers with technical questions. For freelance projects, I work with clients from requirements through delivery and ongoing maintenance.',
      ],
      highlightsTitle: 'My work at Performa.AI',
      highlights: [
        '8 years building, maintaining, and evolving web products across company work and external projects, with end-to-end responsibility: diagnosis, architecture, implementation, deployment, and post-launch evolution.',
        'Technical ownership of critical tools, with attention to compatibility, performance, security, legacy maintenance, and integrations that affect daily operations.',
        'Real experience with critical flows: authentication, recurring payments, webhooks, shipping, transactional email, uploads, tracking, permissions, APIs, and e-commerce integrations.',
        'Strong fit for small squads, technical consulting, and businesses that need to turn spreadsheets, manual steps, or fragile integrations into an operable, measurable product.',
      ],
      methodTitle: 'How I work',
      method: [
        {
          title: 'Understand the problem',
          body: 'Before defining screens or tasks, I try to understand how the work happens and what the business needs to solve. I ask who uses the system and where they get stuck. I also check which data is reliable, permission rules, external dependencies, and technical risks.',
        },
        {
          title: 'Plan the implementation',
          body: 'I define entities, contracts, and integrations, along with backend responsibilities. For the interface, I plan the states users will encounter, including validation and errors. I aim for a structure that is straightforward to operate and makes testing and future changes easier.',
        },
        {
          title: 'See the delivery through',
          body: 'I build the responsive interface and connect it to the backend, including validation, error handling, and empty states. I also implement tracking, handle deployment, and make adjustments after launch. This helps keep the system stable and straightforward to operate, with room for new features and less rework.',
        },
      ],
      cta: 'Discuss an opportunity',
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
      sourcesLabel: 'Company sources',
      sourcesNote: 'Public context about the company and its platform distribution. The workloads and personal contributions described in this case study are based on my experience.',
      moreProjectsLabel: 'More projects',
    },
  },
}

export const projectCases: Record<Locale, Record<ProjectSlug, ProjectCase>> = {
  'pt-BR': {
    'performa-ai': {
      slug: 'performa-ai',
      category: 'SaaS de e-commerce · integrações e processamento de pedidos',
      title: 'Performa.AI',
      cardSummary:
        'APIs, webhooks e sincronização de catálogos para mais de 150 clientes conectados, com milhares de requisições por minuto em volume habitual.',
      overview:
        'A Performa.AI é uma plataforma de inteligência e conversão para e-commerce, com busca, recomendações, vitrines, recuperação de carrinho e atendimento. Como desenvolvedor full stack sênior e referência técnica do time, desenvolvo e mantenho APIs, integrações de catálogos e pedidos e ferramentas embarcadas nas lojas.',
      role: 'Desenvolvedor full stack sênior e referência técnica do time, responsável pela criação, manutenção e melhoria das ferramentas e integrações.',
      deliverables:
        'API autenticada, serviço de webhooks para pedidos, integrações e apps para plataformas de e-commerce, sincronização de produtos e categorias, melhorias nos scripts JavaScript e automações com IA.',
      stack: [
        'JavaScript',
        'TypeScript',
        'PHP',
        'NestJS',
        'Node.js',
        'Next.js',
        'React',
        'CSS',
        'MongoDB',
        'PostgreSQL',
      ],
      metrics: [
        { value: '150+', label: 'clientes conectados ao serviço de webhooks' },
        {
          value: 'Milhares/min',
          label: 'requisições em volume habitual no serviço de webhooks',
        },
        { value: 'Milhares/dia', label: 'acessos à API com MongoDB replicado' },
      ],
      flow: {
        title: 'Fluxo de pedidos',
        note: 'Visão simplificada do fluxo descrito neste case.',
        steps: [
          'Plataformas de e-commerce',
          'Serviço de webhooks',
          'Registro de pedidos sem duplicação',
          'Avaliação de recomendações',
        ],
      },
      sources: [
        {
          title: 'Site institucional da Performa.AI',
          url: 'https://performa.ai/',
        },
        {
          title: 'Quem somos — Performa.AI',
          url: 'https://performa.ai/quem-somos',
        },
        {
          title: 'Aplicativo Performa.AI na Nuvemshop',
          url: 'https://www.nuvemshop.com.br/loja-aplicativos-nuvem/performa-ai-oficial',
        },
      ],
      sections: [
        {
          title: 'Contexto',
          body: 'As ferramentas da empresa precisavam acessar dados de catálogos, renderizar vitrines nos e-commerces e registrar pedidos recebidos de diferentes plataformas. Minha atuação abrangia tanto novas entregas quanto manutenção e melhorias nos sistemas em produção.',
        },
        {
          title: 'Contribuição individual',
          body: 'Criei uma API conectada a um MongoDB com réplicas e um serviço para receber webhooks de plataformas como Nuvemshop, Loja Integrada e Shopify. Esse serviço registrava pedidos nos sistemas da empresa e avaliava pedidos relacionados às recomendações das ferramentas. Também implementei integrações via API e aplicativos nas lojas de apps das plataformas.',
        },
        {
          title: 'Decisão: evitar pedidos duplicados',
          body: 'O processamento de pedidos precisava evitar registros repetidos. Implementei idempotência baseada na identificação única do pedido, usada para reconhecer um pedido já registrado. Isso permitia manter os registros usados na avaliação das recomendações sem duplicar o mesmo pedido.',
        },
        {
          title: 'Decisão: respeitar os limites das plataformas',
          body: 'As plataformas de e-commerce impõem limites de requisições às APIs. Mantive rotinas em PHP que consultavam produtos e categorias respeitando esses limites e abasteciam o banco usado pelas vitrines. A sincronização precisava considerar tanto a obtenção dos dados quanto as restrições de cada integração.',
        },
        {
          title: 'Decisão: controlar acesso à API',
          body: 'A API precisava atender integrações com acesso controlado. Implementei autenticação com JWT, HMAC e rate limiting: os mecanismos de autenticação protegem o acesso e a validação das requisições, enquanto o limite de chamadas controla o consumo. A API se conectava a um MongoDB com réplicas.',
        },
        {
          title: 'Escala da operação',
          body: 'No serviço descrito, mais de 150 clientes estavam conectados e o volume habitual era de milhares de requisições por minuto. A API com MongoDB replicado atendia milhares de acessos por dia. Esses números descrevem a operação durante minha atuação nos serviços, sem representar uma medição atual.',
        },
        {
          title: 'Resultados e evolução',
          body: 'As integrações de catálogos abasteciam as vitrines nas lojas. O serviço de webhooks registrava pedidos para avaliar recomendações, com identificação única para evitar registros duplicados. As otimizações em JavaScript reduziram o carregamento das ferramentas e o consumo dos bancos de dados. Essas entregas sustentavam ferramentas voltadas à conversão e à operação dos lojistas; aumentar vendas era um objetivo do produto, sem resultado comercial individual medido neste case.',
        },
        {
          title: 'Referência técnica e colaboração',
          body: 'Faço a interlocução técnica com plataformas de e-commerce para obter informações e orientações sobre integrações e apoiar o fechamento de parcerias. Apoio o suporte na investigação de problemas, desenvolvo implementações específicas para clientes e resolvo questões técnicas complexas. Também oriento profissionais iniciantes em dúvidas e decisões técnicas do dia a dia.',
        },
        {
          title: 'Entrega adicional: automações com IA',
          body: 'Também trabalhei em automações de WhatsApp utilizando IA, MCP, modelos e RAG. Essa experiência complementa minha atuação em sistemas de negócio e integrações.',
        },
      ],
    },
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Produto web + operação em produção',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'Plataforma para academia com captação, autenticação, pagamentos recorrentes, tracking, dados e integrações operacionais.',
      overview:
        'Projeto full stack para organizar a captação de alunos e conectar o site à operação da academia. A entrega incluiu cadastro, autenticação e pagamentos recorrentes, com banco de dados relacional, tracking e deploy em produção.',
      role: 'Responsável por discovery, direção visual, arquitetura da interface, frontend, backend, modelagem de dados, integrações externas, eventos de tracking, deploy e ajustes pós-lançamento.',
      deliverables:
        'Site institucional responsivo, páginas de captação para adultos e kids/teens, cadastro e login, assinatura recorrente, e-mails transacionais, Google Maps, GoCardless, Meta Pixel, banco de dados PostgreSQL com Prisma ORM e deploy em produção.',
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
          title: 'Decisão: separar os fluxos do produto',
          body: 'O projeto reunia apresentação comercial, cadastro e assinatura. Organizei a base separando site público, fluxos de cadastro, persistência e integrações externas. Essa separação explicita a responsabilidade de cada parte ao acompanhar um aluno desde o interesse até o pagamento.',
        },
        {
          title: 'Decisão: dados relacionais e pagamento integrado',
          body: 'Usei PostgreSQL com Prisma para persistir os dados principais dos fluxos de cadastro e GoCardless para integrar assinaturas recorrentes. Os e-mails transacionais acompanham etapas importantes do fluxo, e os eventos customizados do Meta Pixel permitem acompanhar ações do funil. São responsabilidades distintas: guardar dados do produto, conectar o pagamento e acompanhar a aquisição.',
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
        'A Unit 5 precisava de um site com comunicação direta e uma identidade visual que transmitisse a energia e a força da academia. Desenvolvi uma interface responsiva que apresenta os serviços e dá destaque às chamadas para ação desde o início da página.',
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
          body: 'A interface foi organizada para valorizar headline, imagem e chamadas para ação, usando contraste forte, tipografia pesada e ritmo visual direto. As seções foram pensadas para leitura escaneável: proposta, serviços, prova e contato sem excesso de ornamentação.',
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
    'performa-ai': {
      slug: 'performa-ai',
      category: 'E-commerce SaaS · integrations and order processing',
      title: 'Performa.AI',
      cardSummary:
        'APIs, webhooks, and catalog synchronization for more than 150 connected clients, handling thousands of requests per minute as a regular workload.',
      overview:
        'Performa.AI is an intelligence and conversion platform for e-commerce, offering search, recommendations, product displays, cart recovery, and customer service. As a senior full stack developer and go-to engineer for technical questions, I develop and maintain APIs, catalog and order integrations, and tools embedded in stores.',
      role: 'Senior full stack developer and a go-to engineer for the team, responsible for building, maintaining, and improving tools and integrations.',
      deliverables:
        'Authenticated API, order webhook service, e-commerce integrations and platform apps, product and category synchronization, JavaScript optimizations, and AI automations.',
      stack: [
        'JavaScript',
        'TypeScript',
        'PHP',
        'NestJS',
        'Node.js',
        'Next.js',
        'React',
        'CSS',
        'MongoDB',
        'PostgreSQL',
      ],
      metrics: [
        { value: '150+', label: 'clients connected to the webhook service' },
        {
          value: 'Thousands/min',
          label: 'requests as a regular workload in the webhook service',
        },
        {
          value: 'Thousands/day',
          label: 'accesses to the API backed by replicated MongoDB',
        },
      ],
      flow: {
        title: 'Order processing flow',
        note: 'Simplified view of the workflow described in this case.',
        steps: [
          'E-commerce platforms',
          'Webhook service',
          'Order records without duplicates',
          'Recommendation evaluation',
        ],
      },
      sources: [
        {
          title: 'Performa.AI official website',
          url: 'https://performa.ai/',
        },
        {
          title: 'About Performa.AI',
          url: 'https://performa.ai/quem-somos',
        },
        {
          title: 'Performa.AI app on Nuvemshop',
          url: 'https://www.nuvemshop.com.br/loja-aplicativos-nuvem/performa-ai-oficial',
        },
      ],
      sections: [
        {
          title: 'Context',
          body: 'The company tools needed to access catalog data, render product showcases in online stores, and register orders from different platforms. My work covered new deliveries as well as maintenance and improvements to production systems.',
        },
        {
          title: 'Individual contribution',
          body: 'I built an API backed by replicated MongoDB and a service that received webhooks from platforms such as Nuvemshop, Loja Integrada, and Shopify. The service registered orders in company systems and evaluated orders associated with tool recommendations. I also implemented API integrations and apps for platform app stores.',
        },
        {
          title: 'Decision: prevent duplicate orders',
          body: 'Order processing needed to avoid repeated records. I implemented idempotency based on the unique order identifier to recognize orders that had already been recorded. This kept the records used to evaluate recommendations from duplicating the same order.',
        },
        {
          title: 'Decision: respect platform API limits',
          body: 'E-commerce platforms impose request limits on their APIs. I maintained PHP routines that queried products and categories within those limits and populated the database used by product displays. Synchronization had to account for both data retrieval and the constraints of each integration.',
        },
        {
          title: 'Decision: control API access',
          body: 'The API needed to serve integrations with controlled access. I implemented authentication with JWT, HMAC, and rate limiting: authentication mechanisms protect access and request validation, while call limits control consumption. The API connected to a replicated MongoDB database.',
        },
        {
          title: 'Operational scale',
          body: 'In the service described, more than 150 clients were connected and thousands of requests per minute were a regular workload. The API backed by replicated MongoDB handled thousands of daily accesses. These figures describe the operation during my work on these services rather than a current measurement.',
        },
        {
          title: 'Technical expertise and collaboration',
          body: 'I work with e-commerce platform teams to obtain information and integration guidance and support partnership agreements. I help the support team investigate issues, develop client-specific implementations, and resolve complex technical problems. I also guide early-career professionals through day-to-day technical questions and decisions.',
        },
        {
          title: 'Results and operational contribution',
          body: 'Catalog integrations fed product displays in stores. The webhook service recorded orders to evaluate recommendations, using unique identifiers to prevent duplicate records. JavaScript optimizations reduced tool loading times and database consumption. These deliveries supported tools designed for conversion and merchant operations; increasing sales was a product objective, with no individual commercial outcome measured in this case study.',
        },
        {
          title: 'Additional delivery: AI automations',
          body: 'I also worked on WhatsApp automations using AI, MCP, models, and RAG. This experience complements my work on business systems and integrations.',
        },
      ],
    },
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Web product + production operations',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'A platform for a martial arts academy with lead capture, authentication, recurring payments, tracking, data, and operational integrations.',
      overview:
        "A full stack project to organize student acquisition and connect the website to the academy's operations. The delivery included registration, authentication, and recurring payments, with a relational database, tracking, and production deployment.",
      role: 'Responsible for discovery, visual direction, interface architecture, frontend, backend, data modeling, external integrations, tracking events, deployment, and post-launch adjustments.',
      deliverables:
        'Responsive institutional website, adult and kids/teens lead capture pages, registration and login, recurring subscriptions, transactional emails, Google Maps, GoCardless, Meta Pixel, a PostgreSQL database with Prisma ORM, and production deployment.',
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
          title: 'Decision: separate product workflows',
          body: 'The project combined a commercial website, registration, and subscriptions. I organized the foundation around separate responsibilities for the public website, registration flows, persistence, and external integrations. This makes each part of the journey from initial interest to payment explicit.',
        },
        {
          title: 'Decision: relational data and integrated payments',
          body: 'I used PostgreSQL with Prisma to persist the core registration data and GoCardless to integrate recurring subscriptions. Transactional emails accompany key steps, and custom Meta Pixel events track funnel actions. These serve different responsibilities: storing product data, connecting payments, and tracking acquisition.',
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
        "Unit 5 needed a website with direct messaging and a visual identity that conveyed the gym's energy and strength. I developed a responsive interface that presents its services and makes calls to action visible from the start of the page.",
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
