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
  cardRole: string
  cardStack: string[]
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
    highlights: {
      title: string
      body: string
    }[]
    methodTitle: string
    methodBody: string
    availabilityTitle: string
    availability: string[]
    caseLabel: string
    frontendCaseLabel: string
    designCaseLabel: string
    emailLabel: string
    whatsappLabel: string
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    cta: string
    liveLabel: string
    profile: string
    contact: {
      title: string
      availability: string
      languages: string
      emailLabel: string
      linkedinLabel: string
    }
  }
  projectDetail: {
    indexLabel: string
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
        'Portfólio de Guilherme Caramori, desenvolvedor full stack sênior focado em e-commerces, sistemas de negócio, dashboards, integrações, automações e entrega em produção.',
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
        'Tenho mais de oito anos de experiência em produtos web e e-commerce. Trabalho com React, TypeScript e Node.js, do frontend às integrações e à entrega em produção. Passei três anos implementando vitrines fiéis ao visual das lojas e hoje também desenvolvo agentes de IA e uso Codex com MCP nas integrações.',
      mobileIntro:
        'Mais de oito anos em produtos web e e-commerce, com React, TypeScript e Node.js. Experiência em interfaces, integrações e agentes de IA.',
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
          label:
            'em um serviço de webhooks que desenvolvi para mais de 150 clientes conectados',
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
          title: 'E-commerces, sistemas de negócio e dashboards',
          description:
            'Desenvolvo painéis e ferramentas internas para acompanhar a operação, controlar permissões e consultar dados. O objetivo é reduzir retrabalho e dar ao time informações confiáveis para decidir.',
        },
        {
          title: 'Integrações, APIs e automações',
          description:
            'Integro plataformas por APIs e webhooks e desenvolvo rotinas internas com serviços cloud. Busco reduzir tarefas manuais com automações e dependências que o time consiga manter.',
        },
        {
          title: 'Frontend e fluxos de compra',
          description:
            'Implemento interfaces responsivas e layouts a partir de Figma e PSD. Minha experiência inclui vitrines de e-commerce, o design e frontend da Unit 5 e os fluxos de cadastro e assinatura da JSBJJ Kylemore.',
        },
      ],
      featuredTitle: 'Projetos freelance selecionados',
      featuredIntro:
        'Na Unit 5, criei o design e implementei o frontend. Na JSBJJ Kylemore, desenvolvi a interface e conectei captação, cadastro e pagamentos recorrentes.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Plataforma para academia com pagamentos recorrentes',
          title: 'JSBJJ Kylemore',
          summary:
            'Desenvolvi a interface completa e a plataforma, conectando captação de alunos, cadastro, autenticação e pagamentos recorrentes.',
        },
        {
          slug: 'unit5',
          kicker: 'Site para academia com foco no público local',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'Criei o design e implementei o frontend responsivo, com apresentação de serviços, prova social e chamadas para contato.',
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
            'Desenvolvedor full stack sênior e referência técnica do time na Performa.AI, plataforma de inteligência e conversão para e-commerce. Defino a arquitetura de projetos, apps e ferramentas, alinho o escopo com a equipe de produto e conduzo o desenvolvimento, os testes e o deploy, incluindo APIs, integrações e interfaces como o dashboard.',
          highlights: [
            'Frontend de e-commerce: durante três anos, implementei vitrines fiéis ao visual nativo das lojas e layouts personalizados a partir de arquivos PSD e designs no Figma. Cuidei da renderização, do posicionamento e dos estilos, incluindo buscas personalizadas e vitrines do tipo compre junto.',
            'Capacidade de entrega: passei de uma referência de uma loja por dia para três, chegando a cinco em dias com hora extra. Reaproveitei estruturas e estilos, analisei os componentes nativos antes de implementar e defini uma sequência de trabalho. O conhecimento dos temas reduziu a investigação e o retrabalho. Em um período, absorvi sozinho a demanda antes atendida por três desenvolvedores.',
            'Shopify: desenvolvi três apps completos usando Liquid e Remix. Os apps não chegaram à produção por questões internas da empresa.',
            'Uso de IA no desenvolvimento: trabalho com agentes de IA há 1,5 ano. Uso Codex conectado ao MCP da Performa para implementar e ajustar integrações de e-commerce. Reviso o código, executo verificações locais e confirmo as alterações por releitura da API; a validação nas lojas inclui testes manuais.',
            'E-mail marketing: criei templates de e-mail em HTML e MJML para campanhas de marketing.',
            'Confiabilidade no processamento de pedidos: implementei processamento idempotente de webhooks para evitar registros duplicados em um serviço com mais de 150 clientes conectados e milhares de requisições por minuto, mantendo dados consistentes para a avaliação das recomendações.',
            'Integrações de e-commerce: desenvolvi e mantive a sincronização de catálogos e pedidos com Shopify, Nuvemshop, Loja Integrada, Tray, VTEX e Magazord, respeitando os limites das APIs e automatizando atualizações para reduzir a intervenção manual.',
            'APIs e segurança: API com MongoDB replicado, JWT, HMAC e rate limiting, com milhares de acessos diários.',
            'Dashboard e interfaces: desenvolvi interfaces conectadas ao backend e às integrações, traduzindo requisitos de produto em ferramentas para a operação.',
            'Parcerias com plataformas: interlocução técnica para obter orientações de integração e apoiar o fechamento de parcerias.',
            'Suporte e clientes: apoio ao suporte, implementações específicas e resolução de problemas técnicos complexos.',
            'Orientação de iniciantes: apoio a profissionais em início de carreira nas dúvidas e decisões técnicas do dia a dia.',
            'Arquitetura e escala desde a implementação: planejo projetos, apps e ferramentas com atenção à eficiência e à capacidade de crescer dentro do escopo, assumindo as decisões técnicas, o desenvolvimento, os testes e o deploy.',
            'Agentes de IA: participei da criação de um agente de atendimento com RAG e assumi toda a estrutura de backend, WebSockets, validações e fluxos. A solução começou no WhatsApp com Baileys e evoluiu para um chat nas lojas, integrado ao catálogo para recomendar produtos a partir da intenção de compra.',
            'Consumo e qualidade da IA: ajustei o contexto enviado aos modelos, a seleção do modelo e o nível de raciocínio conforme a solicitação. Trabalhei com prompt caching e eliminação de chamadas desnecessárias, validando entradas para reduzir o risco de prompt injection. Avaliei tokens, tempo de resposta e relevância das respostas em testes e no dashboard da ferramenta.',
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
            'MJML', 'Liquid',
            'Remix',
            'HTML',
            'CSS',
            'Figma',
            'MCP',
            'RAG',
            'WebSockets',
            'Baileys',
            'Codex',
            'Prompt caching',
            'Docker',
            'Vitest',
            'Jest',
            'Grafana',
            'Prometheus',
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
            'JSBJJ Kylemore: desenvolvimento da interface completa e da plataforma, com captação de alunos, cadastro, autenticação, pagamentos recorrentes via GoCardless e PostgreSQL com Prisma ORM.',
            'Unit 5: criação de todo o design e implementação frontend responsiva, com apresentação de serviços, prova social e chamadas para entrar em contato.',
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
          'Aberto a oportunidades como desenvolvedor full stack sênior e a consultoria técnica.',
        items: [
          'Brasil · UTC-3 · disponível para vagas remotas no Brasil e no exterior',
          'Português · Inglês C1 (avançado) para comunicação com equipes, clientes e documentação',
          'Trabalho bem com times pequenos e posso assumir a responsabilidade técnica por produtos internos e integrações críticas que precisam de organização e acompanhamento',
        ],
        links: {
          whatsapp: 'WhatsApp',
          email: 'E-mail',
        },
      },
      closingTitle: 'Vamos conversar sobre uma oportunidade?',
      closingBody:
        'Desenvolvo SaaS, e-commerces, sistemas de negócio e integrações, do planejamento à manutenção em produção. Estou aberto a integrar uma equipe como full stack sênior ou trabalhar em projetos de consultoria técnica.',
      closingCta: 'Conversar sobre uma oportunidade',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Desenvolvedor Full Stack Sênior | React, TypeScript e Node.js',
      intro:
        'Tenho mais de oito anos de experiência em produtos web e e-commerce. Minha atuação reúne interfaces em React e Next.js, integrações e backend com Node.js. Também desenvolvo agentes de IA e uso essas ferramentas no trabalho diário.',
      storyTitle: 'Minha experiência',
      paragraphs: [
        'Comecei com interfaces web e ampliei minha atuação para APIs e produtos completos. Desde 2018, trabalho na Performa.AI, em colaboração com produto, suporte e equipes de plataformas de e-commerce. Também oriento profissionais iniciantes nas decisões técnicas do dia a dia.',
        'Em paralelo, desenvolvo projetos freelance diretamente com os clientes. Essa experiência inclui a plataforma da JSBJJ Kylemore e o design e frontend da Unit 5, combinando necessidades comerciais, interfaces e integrações.',
      ],
      highlightsTitle: 'Experiência e entregas selecionadas',
      highlights: [
        {
          title: 'Três anos implementando vitrines',
          body: 'Implementei vitrines fiéis ao visual das lojas e layouts enviados em PSD e Figma. Na Unit 5, criei o design e o frontend responsivo; na JSBJJ Kylemore, conectei a interface aos fluxos de cadastro e assinatura.',
        },
        {
          title: 'Backend de agentes de IA',
          body: 'Assumi o backend de um agente com RAG, inicialmente no WhatsApp via Baileys e depois em chats nas lojas. Desenvolvi conexões WebSocket, validações e fluxos, incluindo recomendações de produtos por intenção de compra.',
        },
        {
          title: 'IA no trabalho diário',
          body: 'Uso agentes de IA há 1,5 ano. Nas integrações da Performa, utilizo Codex com MCP, reviso o código e verifico a persistência das alterações. Também acompanhei tokens, tempo de resposta e relevância das respostas dos agentes que ajudei a desenvolver.',
        },

        {
          title: 'Webhooks em escala, sem pedidos duplicados',
          body: 'Desenvolvi um serviço com mais de 150 clientes conectados e milhares de requisições por minuto. Implementei processamento idempotente para evitar pedidos duplicados e manter consistentes os dados usados na avaliação das recomendações.',
        },
        {
          title: 'Integrações de catálogos e pedidos',
          body: 'Desenvolvi e mantive integrações com Shopify, Nuvemshop, Loja Integrada, Tray, VTEX e Magazord. A sincronização automatiza atualizações, respeita os limites das plataformas e reduz a necessidade de intervenção manual.',
        },
        {
          title: 'APIs com controle de acesso',
          body: 'Criei uma API conectada a MongoDB replicado, com JWT, HMAC e rate limiting para controlar o acesso às integrações, atendendo milhares de acessos diários.',
        },
        {
          title: 'Dashboard e interfaces da Performa.AI',
          body: 'Desenvolvi interfaces como o dashboard, conectando a apresentação dos dados ao backend e às integrações. Minha atuação em frontend e backend permite traduzir o escopo definido com produto em ferramentas para a operação.',
        },
        {
          title: 'Da interface comercial ao cadastro e pagamento',
          body: 'Na JSBJJ Kylemore, desenvolvi toda a interface, conectando páginas para públicos distintos aos fluxos de cadastro e assinatura. Na Unit 5, criei o design e o frontend responsivo, adaptando tipografia, imagens e chamadas para ação à leitura em celular.',
        },
      ],
      methodTitle: 'Como trabalho',
      methodBody:
        'Defino o escopo com produto ou com o cliente e assumo as decisões de arquitetura, implementação, testes e deploy. O volume esperado, a consistência dos dados e os limites das APIs externas orientam as escolhas técnicas. Na interface, considero o público e o percurso até a ação principal. A manutenção e a investigação de problemas após a entrega também fazem parte da minha responsabilidade.',
      availabilityTitle: 'Disponibilidade e contato',
      availability: [
        'Brasil · UTC-3 · disponível para vagas remotas no Brasil e no exterior',
        'Português · Inglês C1 (avançado) para comunicação com equipes, clientes e documentação',
      ],
      caseLabel: 'Ver case da Performa.AI',
      frontendCaseLabel: 'Ver interface da JSBJJ Kylemore',
      designCaseLabel: 'Ver design da Unit 5',
      emailLabel: 'Conversar por e-mail',
      whatsappLabel: 'Conversar pelo WhatsApp',
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'SaaS, integrações e produtos full stack em produção.',
      intro:
        'Arquitetura, desenvolvimento e manutenção: integrações para mais de 150 clientes, pagamentos recorrentes e interfaces web.',
      cta: 'Ler case',
      liveLabel: 'Abrir projeto',
      profile: 'Full Stack Sênior · React · TypeScript · Node.js',
      contact: {
        title: 'Vamos conversar sobre uma vaga?',
        availability:
          'Brasil · UTC−3 · disponível para oportunidades remotas no Brasil e no exterior',
        languages: 'Português · Inglês C1 (avançado)',
        emailLabel: 'Conversar por e-mail',
        linkedinLabel: 'Ver LinkedIn',
      },
    },
    projectDetail: {
      indexLabel: 'Neste case',
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
      title: 'Guilherme Caramori | Senior Full-Stack Developer',
      description:
        'Portfolio of Guilherme Caramori, a senior full stack developer focused on e-commerce platforms, internal products, dashboards, integrations, automations, and production delivery.',
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
      title: 'Senior Full-Stack Developer | React, TypeScript and Node.js',
      mobileTitle: 'Senior Full-Stack Developer',
      intro:
        'I have over eight years of experience in web products and e-commerce, working with React, TypeScript, and Node.js from frontend implementation through integrations and deployment. I spent three years matching product displays to storefront designs. I also build AI agents and use Codex with MCP for integrations.',
      mobileIntro:
        'Over eight years in web products and e-commerce with React, TypeScript, and Node.js. Experience in interfaces, integrations, and AI agents.',
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
          label: 'in a webhook service I built for 150+ connected clients',
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
          title: 'E-commerce platforms, internal products, and dashboards',
          description:
            'I build dashboards and internal tools to monitor operations, manage permissions, and filter data. The goal is to reduce rework and give the team reliable information for making decisions.',
        },
        {
          title: 'Integrations, APIs, and automations',
          description:
            'I connect platforms through APIs and webhooks and build internal routines using cloud services. I aim to reduce manual work with automations and dependencies the team can maintain.',
        },
        {
          title: 'Frontend and purchase flows',
          description:
            'I implement responsive interfaces and layouts from Figma and PSD files. My work includes e-commerce product displays, the Unit 5 design and frontend, and registration and subscription flows for JSBJJ Kylemore.',
        },
      ],
      featuredTitle: 'Selected freelance projects',
      featuredIntro:
        'For Unit 5, I created the design and built the frontend. For JSBJJ Kylemore, I built the interface and connected lead capture, registration, and recurring payments.',
      featuredProjects: [
        {
          slug: 'jsbjjkylemore',
          kicker: 'Academy platform with recurring payments',
          title: 'JSBJJ Kylemore',
          summary:
            'I built the complete interface and platform, connecting student acquisition, registration, authentication, and recurring payments.',
        },
        {
          slug: 'unit5',
          kicker: 'Gym website focused on a local audience',
          title: 'Unit 5 Strength & Fitness',
          summary:
            'I created the design and implemented the responsive frontend, with service information, social proof, and contact actions.',
        },
      ],
      experienceCaseLabel: 'View the Performa.AI case study',
      experienceTitle: 'Background',
      experienceIntro:
        'Experience in e-commerce SaaS and independent projects, taking responsibility for development, integrations, and production maintenance.',
      experience: [
        {
          period: '2018 - present',
          title: 'Performa.AI',
          caseSlug: 'performa-ai',
          description:
            'Senior full-stack developer and go-to engineer at Performa.AI, an intelligence and conversion platform for e-commerce. I define architecture for projects, apps, and tools, clarify scope with product teams, and handle development, testing, and deployment, including APIs, integrations, and interfaces such as the dashboard.',
          highlights: [
            'E-commerce frontend: during my first three years at Performa, I implemented product display rendering, placement, and styling, matching native storefront designs pixel for pixel. I also built custom displays from PSD files and Figma designs, custom search interfaces, and frequently bought together product displays.',
            'Delivery capacity: I integrated three stores per day, compared with the previous baseline of one, reaching five on days with overtime. I reused structures and styles, reviewed native components and insertion points before coding, and organized implementation into placement, rendering, styling, and behavior checks. Familiarity with themes and recurring issues reduced investigation time and rework. During one period, I handled the workload previously covered by three developers on my own.',
            'Shopify: I developed three complete apps using Liquid and Remix. The apps did not reach production due to internal company issues.',
            'AI-assisted development: I have used AI agents at work for 1.5 years. I use Codex connected to the Performa MCP server to implement and adjust e-commerce integrations, review the code, run local checks, and verify changes through API readbacks. Store validation includes manual testing.',
            'Email marketing: I created HTML and MJML email templates for marketing campaigns.',

            'Reliable order processing: I implemented idempotent webhook processing to prevent duplicate records in a service with more than 150 connected clients and thousands of requests per minute, keeping data consistent for recommendation evaluation.',
            'E-commerce integrations: I developed and maintained catalog and order synchronization with Shopify, Nuvemshop, Loja Integrada, Tray, VTEX, and Magazord, respecting API limits and automating updates to reduce manual intervention.',
            'APIs and security: an API backed by replicated MongoDB with JWT, HMAC, and rate limiting, handling thousands of requests per day.',
            'Dashboard and interfaces: I built interfaces connected to the backend and integrations, translating product requirements into operational tools.',
            'Platform partnerships: technical discussions to obtain integration guidance and support partnership agreements.',
            'Support and clients: assistance to the support team, client-specific implementations, and resolution of complex technical issues.',
            'Mentoring: helping early-career professionals with day-to-day technical questions and decisions.',
            'Architecture and scale from the initial implementation: I plan projects, apps, and tools for efficiency and growth within their scope, taking responsibility for technical decisions, development, testing, and deployment.',
            'AI agents: I helped build a support agent using RAG and owned the backend, WebSocket connections, validation, and conversation flows. The solution started on WhatsApp with Baileys and evolved into a storefront chat connected to the product catalog, recommending products based on shopping intent.',
            'AI cost and response quality: I adjusted input context, model selection, and reasoning effort for each request. I worked with prompt caching, removed unnecessary API calls, and validated inputs to reduce prompt injection risk. I evaluated token usage, response time, and answer relevance through tests and the tool dashboard.',
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
            'MJML', 'Liquid',
            'Remix',
            'HTML',
            'CSS',
            'Figma',
            'MCP',
            'RAG',
            'WebSockets',
            'Baileys',
            'Codex',
            'Prompt caching',
            'Docker',
            'Vitest',
            'Jest',
            'Grafana',
            'Prometheus',
            'GitHub Actions',
            'Supabase',
            'APIs',
            'Webhooks',
          ],
        },
        {
          period: '2017 - present',
          title: 'Freelance Full-Stack Developer',
          description:
            'My freelance experience includes websites, web platforms, corporate intranets, scheduling systems, and email marketing automations. I work from requirements gathering through production delivery, covering frontend, backend, integrations, and maintenance.',
          highlights: [
            'Corporate intranet: an internal communication system with a photo archive and a noticeboard.',
            'Email marketing: a sending queue built with BullMQ, Node.js, and Amazon SES, deployed to a DigitalOcean VPS.',
            'Dental clinic: an appointment scheduling system for managing dentists, staff, and available time slots.',
            'JSBJJ Kylemore: complete interface and platform development, with student acquisition, registration, authentication, recurring payments via GoCardless, and PostgreSQL with Prisma ORM.',
            'Unit 5: complete website design and responsive frontend implementation, with service information, social proof, and calls to action encouraging visitors to get in touch.',
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
          'Open to senior full stack opportunities and technical consulting.',
        items: [
          'Brazil · UTC-3 · available for remote roles in Brazil and internationally',
          'Portuguese · English C1 (advanced) for communication with teams, clients, and documentation',
          'I work well with small teams and can take technical responsibility for internal products and critical integrations that need organization and ongoing support',
        ],
        links: {
          whatsapp: 'WhatsApp',
          email: 'Email',
        },
      },
      closingTitle: 'Have a role in mind?',
      closingBody:
        'I develop SaaS, e-commerce platforms, business systems, and integrations, from planning through production maintenance. I am open to joining a team as a senior full stack developer or working on technical consulting projects.',
      closingCta: 'Discuss an opportunity',
    },
    about: {
      eyebrow: 'About',
      title: 'Senior Full-Stack Developer | React, TypeScript & Node.js',
      intro:
        'I have over eight years of experience in web products and e-commerce. My work covers React and Next.js interfaces, integrations, and Node.js backends. I also build AI agents and use them in my daily development work.',
      storyTitle: 'My experience',
      paragraphs: [
        'I started with web interfaces and expanded into APIs and complete products. Since 2018, I have worked at Performa.AI, collaborating with product, support, and e-commerce platform teams. I also mentor junior developers on day-to-day technical decisions.',
        'Alongside this work, I develop freelance projects directly with clients. These include the JSBJJ Kylemore platform and the Unit 5 design and frontend, combining commercial requirements, interfaces, and integrations.',
      ],
      highlightsTitle: 'Experience and selected projects',
      highlights: [
        {
          title: 'Three years building storefront displays',
          body: 'I matched product displays to storefront designs and implemented layouts from PSD files and Figma. For Unit 5, I created the design and responsive frontend; for JSBJJ Kylemore, I connected the interface to registration and subscription flows.',
        },
        {
          title: 'Backend for AI agents',
          body: 'I owned the backend of a RAG-based agent, initially on WhatsApp through Baileys and later in storefront chats. I built WebSocket connections, validation, and conversation flows, including product recommendations based on shopping intent.',
        },
        {
          title: 'AI in daily development',
          body: 'I have used AI agents at work for 1.5 years. For Performa integrations, I use Codex with MCP, review code, and verify that changes persist. I also monitored token usage, response time, and answer relevance for the agents I helped build.',
        },

        {
          title: 'Webhook processing at scale, without duplicate orders',
          body: 'I built a service with 150+ connected clients, handling thousands of requests per minute. I implemented idempotent processing to prevent duplicate orders and keep the data used to evaluate recommendations consistent.',
        },
        {
          title: 'Catalog and order integrations',
          body: 'I developed and maintained integrations with Shopify, Nuvemshop, Loja Integrada, Tray, VTEX, and Magazord. Synchronization automates updates, respects platform limits, and reduces the need for manual intervention.',
        },
        {
          title: 'APIs with controlled access',
          body: 'I built an API backed by replicated MongoDB, using JWT, HMAC, and rate limiting to control integration access, serving thousands of daily requests.',
        },
        {
          title: 'Performa.AI dashboard and interfaces',
          body: 'I built interfaces such as the dashboard, connecting data presentation with the backend and integrations. Working across frontend and backend allows me to translate requirements defined with product teams into operational tools.',
        },
        {
          title: 'From commercial pages to registration and payment',
          body: 'For JSBJJ Kylemore, I built the complete interface, connecting pages for different audiences to registration and subscription flows. For Unit 5, I created the design and responsive frontend, adapting typography, images, and calls to action for mobile reading.',
        },
      ],
      methodTitle: 'How I work',
      methodBody:
        'I define requirements with the product team or client and take responsibility for architecture, implementation, testing, and deployment. Expected request volume, data consistency, and external API limits guide technical choices. For interfaces, I consider the audience and the path to the main action. Maintenance and investigating issues after delivery are also part of my responsibility.',
      availabilityTitle: 'Availability and contact',
      availability: [
        'Brazil · UTC-3 · available for remote roles in Brazil and internationally',
        'Portuguese · English C1 (advanced) for communication with teams, clients, and documentation',
      ],
      caseLabel: 'View the Performa.AI case study',
      frontendCaseLabel: 'View the JSBJJ Kylemore interface',
      designCaseLabel: 'View the Unit 5 design',
      emailLabel: 'Discuss a role by email',
      whatsappLabel: 'Contact me on WhatsApp',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'SaaS, integrations, and full stack products in production.',
      intro:
        'Architecture, development, and maintenance: integrations for 150+ clients, recurring payments, and web interfaces.',
      cta: 'Read case study',
      liveLabel: 'Open project',
      profile: 'Senior Full-Stack Developer · React · TypeScript · Node.js',
      contact: {
        title: 'Let’s discuss an opportunity',
        availability:
          'Brazil · UTC−3 · open to remote opportunities in Brazil and internationally',
        languages: 'Portuguese · English C1 (advanced)',
        emailLabel: 'Contact by email',
        linkedinLabel: 'View LinkedIn',
      },
    },
    projectDetail: {
      indexLabel: 'In this case',
      backLabel: 'Back to projects',
      openLabel: 'Open project',
      roleLabel: 'Role',
      deliverablesLabel: 'Delivery',
      stackLabel: 'Stack',
      sourcesLabel: 'Company sources',
      sourcesNote:
        'Public context about the company and its platform distribution. The workloads and personal contributions described in this case study are based on my experience.',
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
        'Implementei vitrines, dashboards e integrações de e-commerce. Assumi o backend de um agente com RAG e de um serviço de webhooks para mais de 150 clientes, com milhares de requisições por minuto.',
      cardRole: 'Full stack sênior · arquitetura e integrações',
      cardStack: [
        'TypeScript',
        'Node.js',
        'PHP',
        'MongoDB',
        'NestJS',
        'React.js',
        'PostgreSQL',
        'MCP',
        'RAG',
      ],
      overview:
        'A Performa.AI é uma plataforma de inteligência e conversão para e-commerce, com busca, recomendações, vitrines, recuperação de carrinho e atendimento. Como desenvolvedor full stack sênior e referência técnica do time, desenvolvo e mantenho APIs, integrações de catálogos e pedidos e ferramentas embarcadas nas lojas.',
      role: 'Responsável por decisões de arquitetura de projetos, apps e ferramentas, levantamento do escopo com a equipe de produto, implementação full stack, testes, deploy e manutenção. Referência técnica do time.',
      deliverables:
        'API autenticada, serviço de webhooks para pedidos, integrações e apps para plataformas de e-commerce, sincronização de produtos e categorias, interfaces incluindo o dashboard, ferramentas JavaScript e automações com IA.',
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
          title: 'Agente de atendimento: do WhatsApp ao chat nas lojas',
          body: 'Participei da criação de um agente para responder mensagens em nome dos estabelecimentos a qualquer horário. Assumi toda a estrutura de backend, as conexões WebSocket, validações e fluxos de conversa. A primeira versão usava Baileys para integração com o WhatsApp e RAG para recuperar o contexto das respostas. A solução depois passou a oferecer chat dentro das lojas, também com comunicação por WebSockets.',
        },
        {
          title: 'Contexto de atendimento e busca por intenção',
          body: 'O agente respondia perguntas sobre a loja, contato, suporte e horário de funcionamento. Em uma adaptação para um escritório de advocacia, fornecia informações sobre casos em andamento e permitia marcar agendamentos. Também integramos o catálogo das lojas ao chat: diante de um pedido como encontrar um presente para a esposa, o agente recomendava produtos ou fazia perguntas para entender melhor a intenção de compra.',
        },
        {
          title: 'Decisões sobre contexto, modelos e consumo',
          body: 'Analisei o contexto das solicitações para selecionar o modelo e o nível de raciocínio. Ajustei o conteúdo enviado nas chamadas e trabalhei com prompt caching para reaproveitar o processamento de trechos recorrentes. Também revisei os fluxos para evitar chamadas desnecessárias. Acompanhei o consumo no dashboard da ferramenta e comparei tokens, tempo de resposta e relevância em testes.',
        },
        {
          title: 'Validação das entradas e ajustes da IA',
          body: 'Implementei validações de entrada para reduzir o risco de prompt injection e participei dos ajustes no comportamento e no uso dos modelos. A avaliação das respostas orientava novas alterações no contexto e nos fluxos.',
        },
        {
          title: 'Agentes de IA no desenvolvimento',
          body: 'Uso agentes de IA no trabalho há 1,5 ano. Atualmente, utilizo Codex conectado ao MCP da Performa nas integrações de e-commerce. Organizei o fluxo com registros por loja, backups e verificações locais. As alterações em stage são confirmadas por releitura da API, e os testes nas lojas são realizados manualmente.',
        },

        {
          title: 'Vitrines e fidelidade visual',
          body: 'durante três anos, implementei vitrines fiéis ao visual nativo das lojas e layouts personalizados a partir de arquivos PSD e designs no Figma. Cuidei da renderização, do posicionamento e dos estilos, incluindo buscas personalizadas e vitrines do tipo compre junto.',
        },
        {
          title: 'Capacidade de entrega',
          body: 'integrei três lojas por dia frente ao padrão anterior de uma, chegando a cinco em dias com hora extra. Em um período, absorvi sozinho a demanda antes atendida por três desenvolvedores.',
        },
        {
          title: 'Método: reaproveitar a base e adaptar cada loja',
          body: 'Identifiquei estruturas recorrentes nas vitrines e reaproveitei código e estilos, concentrando as adaptações em tipografia, cores, espaçamentos e comportamentos de cada loja. Antes de implementar, analisava os componentes nativos e os pontos de inserção para evitar refazer layouts ou interferir no funcionamento da loja.',
        },
        {
          title: 'Método: sequência de implementação e diagnóstico',
          body: 'Organizei o trabalho em posicionamento, renderização dos produtos, estilos e conferência dos comportamentos, deixando os ajustes finos para uma estrutura já funcionando. Com a experiência, reconhecia padrões dos temas e problemas recorrentes de CSS e JavaScript, reduzindo a investigação a cada integração. Essas práticas sustentaram o aumento da capacidade de entrega.',
        },
        {
          title: 'Apps Shopify com Liquid e Remix',
          body: 'desenvolvi três apps completos usando Liquid e Remix. Os apps não chegaram à produção por questões internas da empresa.',
        },
        {
          title: 'Templates de e-mail em HTML e MJML',
          body: 'criei templates de e-mail em HTML e MJML para campanhas de marketing.',
        },

        {
          title: 'Contexto',
          body: 'A Performa.AI oferece busca, recomendações e outras ferramentas de conversão para e-commerce. Os serviços precisavam consultar catálogos de diferentes plataformas, abastecer vitrines e registrar pedidos para avaliar recomendações.',
        },
        {
          title: 'Minha contribuição',
          body: 'Como full stack sênior e referência técnica, defini o escopo com produto e assumi decisões de arquitetura, implementação, testes, deploy e manutenção dos serviços sob minha responsabilidade. Desenvolvi APIs, webhooks, integrações e apps para plataformas, além de interfaces como o dashboard.',
        },
        {
          title: 'Decisão técnica: sincronização sob limites de API',
          body: 'Cada plataforma impunha limites de chamadas. Mantive rotinas em PHP que consultavam produtos e categorias respeitando essas restrições e persistiam os dados usados pelas ferramentas. As vitrines consultavam essa base; a sincronização precisava considerar tanto os limites externos quanto o volume de uso.',
        },
        {
          title: 'Decisão técnica: processamento idempotente de pedidos',
          body: 'Pedidos recebidos por webhooks precisavam ser registrados sem duplicação. Implementei idempotência baseada no identificador único do pedido para reconhecer registros existentes. Isso mantinha consistentes os dados usados na avaliação das recomendações.',
        },
        {
          title: 'Decisão técnica: controle de acesso à API',
          body: 'Implementei JWT para autenticação, HMAC para validação das requisições e rate limiting para controlar o consumo da API. O serviço consultava MongoDB replicado e atendia milhares de acessos diários durante minha atuação.',
        },
        {
          title: 'Resultados e escala',
          body: 'As integrações abasteciam vitrines com dados de catálogos, e o serviço de webhooks registrava pedidos sem duplicar o mesmo identificador. Durante minha atuação, havia mais de 150 clientes conectados ao serviço, com milhares de requisições por minuto em volume habitual. São volumes históricos da operação; este case não atribui um aumento de vendas individual às entregas.',
        },
        {
          title: 'Colaboração e outras entregas',
          body: 'Fiz a interlocução técnica com plataformas de e-commerce para apoiar integrações e parcerias. Apoio o suporte na investigação de problemas e oriento profissionais iniciantes nas decisões do dia a dia. Também trabalhei com pagamentos e auditoria.',
        },
      ],
    },
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Produto web + operação em produção',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'Desenvolvi a interface e a plataforma da academia, conectando captação de alunos, cadastro, autenticação e pagamentos recorrentes via GoCardless.',
      cardRole: 'Full stack · requisitos à produção',
      cardStack: [
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'GoCardless',
        'Tailwind CSS',
        'Vercel',
      ],
      overview:
        'Projeto full stack para organizar a captação de alunos e conectar o site à operação da academia. A entrega incluiu cadastro, autenticação e pagamentos recorrentes, com banco de dados relacional, tracking e deploy em produção.',
      role: 'Responsável pelo levantamento de requisitos, desenvolvimento da interface completa, arquitetura frontend e backend, modelagem de dados, integrações externas, eventos de tracking, testes, deploy e ajustes pós-lançamento.',
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
          body: 'A entrada de alunos envolvia interesse, aula experimental, cadastro e pagamento, com parte do processo realizada manualmente. O projeto precisava apresentar a academia para adultos e famílias e conectar a captação à operação.',
        },
        {
          title: 'Minha contribuição',
          body: 'Levantei requisitos e desenvolvi toda a interface e a plataforma, incluindo arquitetura frontend e backend, modelagem de dados, integrações, tracking, testes e deploy. Acompanhei também os ajustes após o lançamento.',
        },
        {
          title: 'Decisão técnica: separar as etapas do produto',
          body: 'Organizei páginas públicas, fluxos de cadastro, persistência e integrações como responsabilidades distintas. A interface direciona adultos e famílias para páginas e formulários específicos, conectando o interesse inicial ao cadastro e à assinatura.',
        },
        {
          title: 'Decisão técnica: persistência e assinaturas recorrentes',
          body: 'Usei PostgreSQL com Prisma para os dados de cadastro e GoCardless para assinaturas recorrentes. E-mails transacionais acompanham etapas do fluxo, enquanto eventos customizados do Meta Pixel registram ações do funil de aquisição.',
        },
        {
          title: 'Entregas em produção',
          body: 'A plataforma reúne apresentação da academia, captação, cadastro, autenticação e pagamentos recorrentes. Os dados de cadastro ficam persistidos em banco relacional, com e-mails transacionais e tracking integrados. O case apresenta essas funcionalidades entregues, sem atribuir percentuais de conversão não medidos.',
        },
      ],
    },
    unit5: {
      slug: 'unit5',
      category: 'Website fitness',
      title: 'Unit 5 Strength & Fitness',
      cardSummary:
        'Criei o design e implementei o frontend responsivo para apresentar serviços, depoimentos e chamadas para contato.',
      cardRole: 'Design e desenvolvimento frontend',
      cardStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      overview:
        'A Unit 5 precisava de um site com comunicação direta e uma identidade visual que transmitisse a energia e a força da academia. Desenvolvi uma interface responsiva que apresenta os serviços e dá destaque às chamadas para ação desde o início da página.',
      role: 'Responsável pela criação de todo o design do site e pela implementação frontend, incluindo layout, tipografia, hierarquia visual, responsividade e chamadas para ação.',
      deliverables:
        'Website promocional com hero de alto impacto, seções de serviços, prova social, contato e layout responsivo preparado para leitura rápida em mobile.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      sections: [
        {
          title: 'Contexto',
          body: 'A academia precisava apresentar seus serviços e facilitar o contato do público local. O design deveria comunicar a identidade da marca e manter as informações legíveis no celular.',
        },
        {
          title: 'Minha contribuição',
          body: 'Criei todo o design e implementei o frontend com Next.js, TypeScript e Tailwind CSS. Assumi layout, tipografia, seleção e disposição visual das imagens, responsividade e hierarquia das chamadas para ação.',
        },
        {
          title: 'Decisão de interface: adaptar o design ao celular',
          body: 'Imagens e títulos de destaque disputavam espaço com serviços e contato nas telas pequenas. Ajustei espaçamentos, proporções de imagens e quebras de texto para manter cada seção legível e a ação principal fácil de encontrar.',
        },
        {
          title: 'Entregas em produção',
          body: 'O site apresenta serviços, prova social e chamadas para contato em um layout responsivo. A entrega demonstra autoria do design e implementação frontend, com organização das informações para leitura em desktop e celular.',
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
        'I built storefront displays, dashboards, and e-commerce integrations. I owned the backend of a RAG-based agent and a webhook service for 150+ clients, handling thousands of requests per minute.',
      cardRole: 'Senior full stack · architecture and integrations',
      cardStack: [
        'TypeScript',
        'Node.js',
        'PHP',
        'MongoDB',
        'NestJS',
        'React.js',
        'PostgreSQL',
        'MCP',
        'RAG',
      ],
      overview:
        'Performa.AI is an intelligence and conversion platform for e-commerce, offering search, recommendations, product displays, cart recovery, and customer service. As a senior full stack developer and technical point of contact for the team, I develop and maintain APIs, catalog and order integrations, and tools embedded in stores.',
      role: 'Responsible for architecture decisions across projects, apps, and tools, defining project scope with the product team, full stack implementation, testing, deployment, and maintenance. A technical point of contact for the team.',
      deliverables:
        'Authenticated API, order webhook service, e-commerce integrations and platform apps, product and category synchronization, interfaces including the dashboard, JavaScript tools, and AI automations.',
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
          title: 'Support agent: from WhatsApp to storefront chat',
          body: 'I helped build an agent that answered messages on behalf of businesses at any hour. I owned the backend, WebSocket connections, validation, and conversation flows. The first version used Baileys to connect to WhatsApp and RAG to retrieve context for responses. The solution later expanded to chat embedded in storefronts, also communicating over WebSockets.',
        },
        {
          title: 'Support context and shopping intent',
          body: 'The agent answered questions about the store, contact details, support, and opening hours. An adaptation for a law firm provided information about ongoing cases and allowed clients to book appointments. We also connected store catalogs to the chat: when asked to find a gift for a spouse, the agent could recommend products or ask follow-up questions to clarify shopping intent.',
        },
        {
          title: 'Context, model selection, and token usage',
          body: 'I analyzed request context to select the model and reasoning effort, adjusted the content sent in API calls, and worked with prompt caching to reuse processing for recurring input. I also revised flows to avoid unnecessary calls. I monitored usage in the tool dashboard and compared token consumption, response time, and answer relevance in tests.',
        },
        {
          title: 'Input validation and model behavior',
          body: 'I implemented input validation to reduce prompt injection risk and contributed to adjustments in model behavior and usage. Response evaluation informed further changes to context and conversation flows.',
        },
        {
          title: 'AI agents in development',
          body: 'I have used AI agents at work for 1.5 years. I currently use Codex connected to the Performa MCP server for e-commerce integrations. I organized the workflow around store-specific records, backups, and local checks. Stage changes are verified through API readbacks, with manual testing in the stores.',
        },

        {
          title: 'Storefront frontend and visual fidelity',
          body: 'during my first three years at Performa, I implemented product display rendering, placement, and styling, matching native storefront designs pixel for pixel. I also built custom displays from PSD files and Figma designs, custom search interfaces, and frequently bought together product displays.',
        },
        {
          title: 'Delivery capacity',
          body: 'I integrated three stores per day, compared with the previous baseline of one, reaching five on days with overtime. During one period, I handled the workload previously covered by three developers on my own.',
        },
        {
          title: 'Method: reuse the foundation and adapt each store',
          body: 'I identified recurring product display structures and reused code and styles, focusing adaptations on each store’s typography, colors, spacing, and behavior. Before implementation, I reviewed native components and insertion points to avoid rebuilding layouts or interfering with storefront functionality.',
        },
        {
          title: 'Method: implementation sequence and troubleshooting',
          body: 'I organized the work into placement, product rendering, styling, and behavior checks, leaving fine adjustments until the structure was working. With experience, I recognized theme patterns and recurring CSS and JavaScript issues, reducing investigation time for each integration. These practices supported the increase in delivery capacity.',
        },
        {
          title: 'Shopify apps with Liquid and Remix',
          body: 'I developed three complete apps using Liquid and Remix. The apps did not reach production due to internal company issues.',
        },
        {
          title: 'HTML and MJML email templates',
          body: 'I created HTML and MJML email templates for marketing campaigns.',
        },

        {
          title: 'Context',
          body: 'Performa.AI provides search, recommendations, and other e-commerce conversion tools. Its services needed to access catalogs across platforms, populate product displays, and record orders for recommendation evaluation.',
        },
        {
          title: 'My contribution',
          body: 'As a senior full stack developer and a technical point of contact for the team, I defined project scope with product and owned architecture decisions, implementation, testing, deployment, and maintenance for my services. I built APIs, webhooks, integrations, platform apps, and interfaces including the dashboard.',
        },
        {
          title:
            'Technical decision: catalog synchronization within API limits',
          body: 'Each platform imposed request limits. I maintained PHP routines that fetched products and categories within those limits and persisted the data used by our tools. Product displays queried this database, while synchronization accounted for external API constraints and usage volume.',
        },
        {
          title: 'Technical decision: idempotent order processing',
          body: 'Orders received through webhooks needed to be recorded without duplication. I implemented idempotency using the unique order identifier to recognize existing records. This kept the data used for recommendation evaluation consistent.',
        },
        {
          title: 'Technical decision: API access control',
          body: 'I implemented JWT authentication, HMAC request validation, and rate limiting to control API consumption. The service used replicated MongoDB and handled thousands of daily accesses during my work on it.',
        },
        {
          title: 'Results and scale',
          body: 'Catalog integrations populated product displays, and the webhook service recorded orders without duplicating the same identifier. During my work on the service, it connected 150+ clients and handled thousands of requests per minute as a regular workload. These are historical operational volumes; this case study does not attribute an individual sales increase to these deliveries.',
        },
        {
          title: 'Collaboration and additional work',
          body: 'I worked with e-commerce platform teams on integrations and partnerships. I help support investigate issues and guide early-career developers through technical decisions. I also worked on payments and auditing.',
        },
      ],
    },
    jsbjjkylemore: {
      slug: 'jsbjjkylemore',
      category: 'Web product + production operations',
      title: 'JSBJJ Kylemore',
      cardSummary:
        'I built the academy’s interface and platform, connecting student acquisition, registration, authentication, and recurring payments through GoCardless.',
      cardRole: 'Full stack · requirements to production',
      cardStack: [
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'GoCardless',
        'Tailwind CSS',
        'Vercel',
      ],
      overview:
        "A full stack project to organize student acquisition and connect the website to the academy's operations. The delivery included registration, authentication, and recurring payments, with a relational database, tracking, and production deployment.",
      role: 'Responsible for requirements gathering, complete interface development, frontend and backend architecture, data modeling, external integrations, tracking events, testing, deployment, and post-launch adjustments.',
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
          body: 'Student acquisition involved initial interest, trial classes, registration, and payment, with some steps handled manually. The project needed to present the academy to adults and families and connect acquisition to its operations.',
        },
        {
          title: 'My contribution',
          body: 'I gathered requirements and built the complete interface and platform, including frontend and backend architecture, data modeling, integrations, tracking, testing, and deployment. I also handled post-launch adjustments.',
        },
        {
          title: 'Technical decision: separate product responsibilities',
          body: 'I separated public pages, registration workflows, persistence, and external integrations. Audience-specific pages and forms guide adults and families from initial interest to registration and subscriptions.',
        },
        {
          title: 'Technical decision: persistence and recurring subscriptions',
          body: 'I used PostgreSQL with Prisma for registration data and GoCardless for recurring subscriptions. Transactional emails accompany workflow steps, while custom Meta Pixel events track acquisition funnel actions.',
        },
        {
          title: 'Production deliverables',
          body: 'The platform brings together the academy website, lead capture, registration, authentication, and recurring payments. Registration data is stored in a relational database, with integrated transactional emails and tracking. This case study describes delivered functionality without claiming unmeasured conversion improvements.',
        },
      ],
    },
    unit5: {
      slug: 'unit5',
      category: 'Fitness website',
      title: 'Unit 5 Strength & Fitness',
      cardSummary:
        'I designed and built a responsive frontend presenting services, testimonials, and clear calls to action.',
      cardRole: 'Design and frontend development',
      cardStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      overview:
        "Unit 5 needed a website with direct messaging and a visual identity that conveyed the gym's energy and strength. I developed a responsive interface that presents its services and makes calls to action visible from the start of the page.",
      role: 'Responsible for the complete website design and frontend implementation, including layout, typography, visual hierarchy, responsiveness, and calls to action.',
      deliverables:
        'Promotional website with a high-impact hero, service sections, social proof, contact flows, and a responsive layout prepared for fast mobile reading.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      sections: [
        {
          title: 'Context',
          body: 'The gym needed to present its services and make contact easy for local visitors. The design had to communicate its identity while keeping information readable on mobile.',
        },
        {
          title: 'My contribution',
          body: 'I designed the complete website and built the frontend with Next.js, TypeScript, and Tailwind CSS. I owned layout, typography, image presentation, responsiveness, and calls to action.',
        },
        {
          title: 'Interface decision: adapt the design for mobile',
          body: 'Prominent images and headings competed with service information and contact actions on small screens. I adjusted spacing, image proportions, and text wrapping to keep sections readable and the main action easy to find.',
        },
        {
          title: 'Production deliverables',
          body: 'The website presents services, social proof, and contact actions in a responsive layout. The project demonstrates complete website design and frontend implementation, with information organized for desktop and mobile reading.',
        },
      ],
    },
  },
}

export default siteContent


export const motionContent = {
  'pt-BR': {
    labels: ['Plataforma', 'Webhook', 'Pedido \u00fanico', 'Recomenda\u00e7\u00f5es'],
    disclaimer: 'Demonstra\u00e7\u00e3o ilustrativa \u00b7 dados fict\u00edcios',
    simulate: 'Simular pedido',
    duplicate: 'Simular pedido duplicado',
    reset: 'Reiniciar',
    success: 'Pedido DEMO-001 registrado e avaliado. Total: 1 pedido.',
    ignored: 'Duplicado ignorado. Continua um pedido; a avalia\u00e7\u00e3o n\u00e3o foi repetida.',
  },
  en: {
    labels: ['Platform', 'Webhook', 'Unique order', 'Recommendations'],
    disclaimer: 'Illustrative demo \u00b7 fictional data',
    simulate: 'Simulate order',
    duplicate: 'Simulate duplicate',
    reset: 'Reset',
    success: 'Order DEMO-001 registered and evaluated. Total: 1 order.',
    ignored: 'Duplicate ignored. Still one order; evaluation was not repeated.',
  },
}

export const copyEmailContent = {
  'pt-BR': {
    label: 'Copiar e-mail',
    success: 'E-mail copiado',
    error: 'Não foi possível copiar. Selecione o endereço abaixo.',
  },
  en: {
    label: 'Copy email',
    success: 'Email copied',
    error: 'Could not copy. Select the address below.',
  },
} satisfies Record<Locale, { label: string; success: string; error: string }>
