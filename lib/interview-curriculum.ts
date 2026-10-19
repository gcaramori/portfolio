export const guideMetadata = {
  title: 'Guia full stack internacional 2026/2027',
  description:
    'Estude full stack em sessões de 15–45 minutos, com exercícios, revisões, inglês e preparação para entrevistas internacionais.',
  reviewedAt: '2026-10-19',
  reviewedLabel: '19 out. 2026',
}

export type LessonDefinition = {
  id: string
  title: string
  objective: string
  prerequisites: string[]
  minutes: { minimum: number; extended: number }
  references: string[]
}

export type StudyModule = {
  id: string
  title: string
  description: string
  lessons: LessonDefinition[]
}

function lesson(
  id: string,
  title: string,
  objective: string,
  prerequisites: string[],
  references: string[],
): LessonDefinition {
  return {
    id,
    title,
    objective,
    prerequisites,
    references,
    minutes: { minimum: 15, extended: 45 },
  }
}

export const studyModules: StudyModule[] = [
  {
    id: 'comecar',
    title: 'Começar e saber onde você está',
    description: 'Escolha uma lacuna e prepare um laboratório pequeno.',
    lessons: [
      lesson(
        'diagnostico',
        'Um diagnóstico sem julgamento',
        'Escolher a primeira lacuna com uma evidência, sem tentar estudar tudo.',
        [],
        ['mercado'],
      ),
      lesson(
        'laboratorio',
        'Seu painel de pedidos local',
        'Preparar dados fictícios, contratos e um repositório de estudo.',
        ['diagnostico'],
        ['node'],
      ),
    ],
  },
  {
    id: 'linguagem-web',
    title: 'JavaScript, TypeScript e web',
    description: 'Conecte tipos, execução assíncrona e requisições HTTP.',
    lessons: [
      lesson(
        'tipos-validacao',
        'Tipos não validam a entrada',
        'Validar dados desconhecidos e representar sucesso e falha.',
        ['laboratorio'],
        ['typescript'],
      ),
      lesson(
        'async-http',
        'Do clique à resposta',
        'Explicar HTTP, promises, falhas e trabalho bloqueante.',
        ['tipos-validacao'],
        ['node-loop', 'http'],
      ),
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend acessível',
    description: 'Uma interface utilizável por teclado e em telas pequenas.',
    lessons: [
      lesson(
        'html-formularios',
        'Formulários que as pessoas conseguem usar',
        'Construir filtros com rótulos, semântica e estados claros.',
        ['async-http'],
        ['acessibilidade', 'formularios'],
      ),
      lesson(
        'css-responsivo',
        'Layout sem perder informação',
        'Adaptar o painel ao celular, ao zoom e a conteúdo comprido.',
        ['html-formularios'],
        ['css', 'acessibilidade'],
      ),
    ],
  },
  {
    id: 'react-next',
    title: 'React e Next.js',
    description:
      'Estado mínimo, respostas atrasadas e fronteiras servidor/cliente.',
    lessons: [
      lesson(
        'react-estado',
        'Estado e respostas fora de ordem',
        'Evitar estado duplicado e impedir que uma resposta antiga vença.',
        ['css-responsivo'],
        ['react', 'react-effects'],
      ),
      lesson(
        'next-fronteiras',
        'Servidor, cliente e cache',
        'Justificar onde buscar dados e como evitar dados de outra conta.',
        ['react-estado'],
        ['next', 'next-cache'],
      ),
    ],
  },
  {
    id: 'api',
    title: 'Node.js e APIs',
    description: 'Contrato pequeno, validação, autorização e limites.',
    lessons: [
      lesson(
        'api-contrato',
        'Uma API previsível',
        'Especificar e implementar uma listagem com erros consistentes.',
        ['next-fronteiras'],
        ['http', 'node-loop'],
      ),
      lesson(
        'api-seguranca',
        'Quem pode acessar qual pedido?',
        'Separar autenticação de autorização e testar isolamento.',
        ['api-contrato'],
        ['owasp', 'autorizacao'],
      ),
    ],
  },
  {
    id: 'dados',
    title: 'PostgreSQL e modelagem',
    description: 'Consultas corretas antes de otimizações e filas.',
    lessons: [
      lesson(
        'sql-modelagem',
        'Pedidos, moedas e consultas',
        'Modelar pedidos e calcular totais sem misturar contas ou moedas.',
        ['api-seguranca'],
        ['postgres'],
      ),
      lesson(
        'sql-concorrencia',
        'Duplicatas, transações e índices',
        'Proteger uma gravação concorrente e interpretar um plano de consulta.',
        ['sql-modelagem'],
        ['postgres-explain', 'postgres-constraints'],
      ),
    ],
  },
  {
    id: 'entrega',
    title: 'Testes, segurança e operação',
    description:
      'Encontre falhas, revise IA e entregue uma mudança recuperável.',
    lessons: [
      lesson(
        'testes-ia',
        'Testar comportamento e revisar IA',
        'Detectar uma falha com um teste e defender a correção sem assistência.',
        ['sql-concorrencia'],
        ['node-test', 'mercado'],
      ),
      lesson(
        'operacao',
        'Diagnosticar, publicar e voltar atrás',
        'Preparar logs úteis, um deploy verificável e um plano de recuperação.',
        ['testes-ia'],
        ['otel', 'owasp'],
      ),
    ],
  },
  {
    id: 'entrevistas',
    title: 'Entrevistas e candidatura',
    description: 'Transforme prática em explicações e evidências verificáveis.',
    lessons: [
      lesson(
        'coding-design',
        'Coding e design com raciocínio visível',
        'Resolver uma tarefa delimitada e discutir as falhas do desenho.',
        ['operacao'],
        ['amazon', 'gitlab'],
      ),
      lesson(
        'ingles-candidatura',
        'Seu trabalho em inglês e sua próxima vaga',
        'Apresentar uma história real e enviar uma candidatura aderente.',
        ['coding-design'],
        ['gitlab', 'resend'],
      ),
    ],
  },
]

export type GuideSource = {
  id: string
  title: string
  href: string
  purpose: string
}

export const guideSources: GuideSource[] = [
  {
    id: 'mercado',
    title: 'CoderPad — State of Tech Hiring 2026',
    href: 'https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/',
    purpose:
      'Pesquisa de fornecedor com mais de 650 participantes globais; contexto sobre IA e avaliação, sem representar todas as vagas.',
  },
  {
    id: 'node',
    title: 'Node.js — ciclo de versões',
    href: 'https://nodejs.org/en/about/previous-releases',
    purpose:
      'Escolher uma linha LTS suportada; conferir o status ao instalar, sem assumir que a versão mais nova é LTS.',
  },
  {
    id: 'typescript',
    title: 'TypeScript — narrowing',
    href: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
    purpose: 'Reduzir tipos com verificações explícitas.',
  },
  {
    id: 'node-loop',
    title: 'Node.js — event loop',
    href: 'https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop',
    purpose: 'Diferenciar espera por I/O de cálculo que bloqueia execução.',
  },
  {
    id: 'http',
    title: 'MDN — HTTP',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
    purpose: 'Métodos, respostas e comunicação cliente/servidor.',
  },
  {
    id: 'acessibilidade',
    title: 'W3C — WCAG 2.2',
    href: 'https://www.w3.org/WAI/WCAG22/quickref/',
    purpose: 'Teclado, foco, contraste, rótulos e adaptação da interface.',
  },
  {
    id: 'formularios',
    title: 'MDN — formulários',
    href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms',
    purpose: 'Controles nativos, envio e validação.',
  },
  {
    id: 'css',
    title: 'MDN — design responsivo',
    href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design',
    purpose: 'Layout flexível e media queries.',
  },
  {
    id: 'react',
    title: 'React — Thinking in React',
    href: 'https://react.dev/learn/thinking-in-react',
    purpose: 'Componentes e estado mínimo.',
  },
  {
    id: 'react-effects',
    title: 'React — sincronização com efeitos',
    href: 'https://react.dev/learn/synchronizing-with-effects',
    purpose: 'Limpeza e sincronização com sistemas externos.',
  },
  {
    id: 'next',
    title: 'Next.js — servidor e cliente',
    href: 'https://nextjs.org/docs/app/getting-started/server-and-client-components',
    purpose:
      'Fronteiras de execução; confirmar a documentação da versão em uso.',
  },
  {
    id: 'next-cache',
    title: 'Next.js — cache',
    href: 'https://nextjs.org/docs/app/getting-started/caching',
    purpose: 'Cache e invalidação dependem da versão e da configuração.',
  },
  {
    id: 'owasp',
    title: 'OWASP Top 10:2025',
    href: 'https://top10.owasp.org/2025/',
    purpose:
      'Referência de riscos; não substitui análise de ameaças do projeto.',
  },
  {
    id: 'autorizacao',
    title: 'OWASP — autorização',
    href: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html',
    purpose: 'Verificar permissões para cada operação.',
  },
  {
    id: 'postgres',
    title: 'PostgreSQL — tutorial',
    href: 'https://www.postgresql.org/docs/current/tutorial.html',
    purpose: 'Tabelas, consultas, agregações e transações.',
  },
  {
    id: 'postgres-explain',
    title: 'PostgreSQL — EXPLAIN',
    href: 'https://www.postgresql.org/docs/current/using-explain.html',
    purpose: 'Comparar planos com o tamanho e a carga reais.',
  },
  {
    id: 'postgres-constraints',
    title: 'PostgreSQL — restrições',
    href: 'https://www.postgresql.org/docs/current/ddl-constraints.html',
    purpose: 'Garantias de unicidade e integridade no banco.',
  },
  {
    id: 'node-test',
    title: 'Node.js — test runner',
    href: 'https://nodejs.org/api/test.html',
    purpose: 'Executar testes locais sem serviço pago.',
  },
  {
    id: 'otel',
    title: 'OpenTelemetry — observabilidade',
    href: 'https://opentelemetry.io/docs/concepts/observability-primer/',
    purpose: 'Relacionar logs, métricas e traces.',
  },
  {
    id: 'amazon',
    title: 'Amazon — preparação técnica',
    href: 'https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics',
    purpose: 'Exemplo de processo; requisitos variam por empresa e vaga.',
  },
  {
    id: 'gitlab',
    title: 'GitLab — entrevistas técnicas',
    href: 'https://handbook.gitlab.com/handbook/hiring/interviewing/technical/',
    purpose: 'Exemplo público de avaliação técnica e colaboração.',
  },
  {
    id: 'resend',
    title: 'Resend — processo seletivo',
    href: 'https://resend.com/handbook/people/whats-the-hiring-process',
    purpose:
      'Consulta opcional sobre a empresa; conferir o processo da vaga atual.',
  },
]

export const glossary = [
  {
    term: 'API e contrato',
    definition:
      'Interface entre programas. O contrato descreve entrada, saída e erros esperados.',
  },
  {
    term: 'Autenticação e autorização',
    definition:
      'Autenticação identifica a pessoa. Autorização decide o que ela pode fazer com cada recurso.',
  },
  {
    term: 'Cache e invalidação',
    definition:
      'Cache reutiliza um resultado. Invalidar significa deixar de reutilizá-lo quando ele não serve mais.',
  },
  {
    term: 'Closure',
    definition:
      'Função que mantém acesso às variáveis do ambiente em que foi criada, mesmo ao ser executada depois.',
  },
  {
    term: 'Concorrência e paralelismo',
    definition:
      'Concorrência mantém tarefas em andamento. Paralelismo executa trabalho ao mesmo tempo em recursos distintos.',
  },
  {
    term: 'Cursor e paginação',
    definition:
      'Paginação divide uma lista. Cursor identifica de onde continuar usando uma ordenação estável.',
  },
  {
    term: 'Deploy e rollback',
    definition:
      'Deploy publica uma versão. Rollback restaura uma versão anterior compatível; mudanças no banco também precisam de planejamento.',
  },
  {
    term: 'Event loop e I/O',
    definition:
      'O event loop coordena callbacks. I/O é comunicação com rede, disco ou outros sistemas; cálculo pesado pode bloquear o atendimento.',
  },
  {
    term: 'Idempotência',
    definition:
      'Repetir a mesma operação preserva o efeito esperado. Exige definir a identidade da operação e proteger a gravação.',
  },
  {
    term: 'Índice e transação',
    definition:
      'Índice ajuda a localizar dados com custo de escrita e espaço. Transação agrupa operações que devem confirmar ou desfazer juntas.',
  },
  {
    term: 'Narrowing e runtime',
    definition:
      'Narrowing reduz possibilidades de um tipo após uma verificação. Runtime é quando o programa está executando; tipos TypeScript não validam dados nessa fase.',
  },
  {
    term: 'p95 e p99',
    definition:
      'Percentis de latência: 95% ou 99% das amostras ficaram naquele tempo ou abaixo dele, dentro de uma medição definida.',
  },
  {
    term: 'Promise e async/await',
    definition:
      'Promise representa um resultado futuro. Async/await organiza a espera; não torna um cálculo pesado automaticamente não bloqueante.',
  },
  {
    term: 'Race condition',
    definition:
      'Falha cujo resultado depende da ordem ou do momento em que operações concorrentes acontecem.',
  },
  {
    term: 'Semântica e responsividade',
    definition:
      'Semântica usa elementos de acordo com seu significado. Responsividade adapta o layout ao espaço disponível.',
  },
  {
    term: 'Tenant e multi-tenancy',
    definition:
      'Tenant é uma conta ou organização cliente. Multi-tenancy atende várias contas mantendo seus dados e permissões isolados.',
  },
  {
    term: 'Timeout, retry e backpressure',
    definition:
      'Timeout limita espera. Retry tenta de novo. Backpressure reduz a entrada ou o ritmo quando o sistema não acompanha a demanda.',
  },
  {
    term: 'Trade-off e SLO',
    definition:
      'Trade-off é uma escolha com ganhos e custos. SLO é um objetivo mensurável de serviço em uma janela definida.',
  },
  {
    term: 'Webhook e worker',
    definition:
      'Webhook é uma notificação HTTP enviada por outro sistema. Worker é um processo que executa tarefas, frequentemente fora da requisição principal.',
  },
]

export type StudyLesson = LessonDefinition & {
  moduleId: string
  markdown: string
  hints: string
  solution: string
}

export type StudyProgress = {
  version: 2
  lastLesson: string | null
  completed: Record<string, { completedAt: string; reviews: number[] }>
}

export const studyStorageKey = 'interview-guide:progress:v2'
export const legacyStorageKey = 'interview-guide:progress:v1'
export const reviewIntervals = [1, 7, 14]

export function emptyProgress(): StudyProgress {
  return { version: 2, lastLesson: null, completed: {} }
}

export function restoreProgress(
  value: unknown,
  validIds: string[],
): StudyProgress {
  if (
    !value ||
    typeof value !== 'object' ||
    !('version' in value) ||
    value.version !== 2
  ) {
    throw new Error('Invalid study progress')
  }
  const raw = value as Record<string, unknown>
  if (
    !raw.completed ||
    typeof raw.completed !== 'object' ||
    Array.isArray(raw.completed)
  ) {
    throw new Error('Invalid completions')
  }
  const result = emptyProgress()
  if (typeof raw.lastLesson === 'string' && validIds.includes(raw.lastLesson)) {
    result.lastLesson = raw.lastLesson
  }
  for (const [id, entry] of Object.entries(raw.completed)) {
    if (!validIds.includes(id) || !entry || typeof entry !== 'object') continue
    const record = entry as Record<string, unknown>
    if (
      typeof record.completedAt !== 'string' ||
      !Number.isFinite(Date.parse(record.completedAt))
    )
      continue
    result.completed[id] = {
      completedAt: record.completedAt,
      reviews: Array.isArray(record.reviews)
        ? [
            ...new Set(
              record.reviews.filter(
                (day): day is number =>
                  typeof day === 'number' && reviewIntervals.includes(day),
              ),
            ),
          ]
        : [],
    }
  }
  return result
}

export function dueReviews(progress: StudyProgress, now: number) {
  return Object.entries(progress.completed).flatMap(([id, entry]) =>
    reviewIntervals
      .filter(
        (day) =>
          !entry.reviews.includes(day) &&
          now >= Date.parse(entry.completedAt) + day * 86_400_000,
      )
      .map((day) => ({ id, day })),
  )
}
