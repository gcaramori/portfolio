# Exercício: acessos massivos e API de recomendações

Status: cenário hipotético para discussão técnica. Não atribuir o incidente à Performa.AI nem inventar resultados de vendas.

## Situação proposta

Campanhas de Black Friday concentram acessos em algumas lojas. A API de recomendações passa a responder lentamente. A coleta de analytics compete por recursos com as respostas usadas nas vitrines.

O cenário combina com sua experiência em scripts de loja, recomendações, analytics, Node.js e MongoDB replicado. A arquitetura abaixo é uma proposta, não uma descrição confirmada do sistema original.

## Resposta para entrevista

“Eu investigaria se o crescimento das chamadas acompanha os acessos reais ou se existe amplificação causada pelo script. Essa distinção importa porque aumentar servidores não corrige disparos desnecessários.

Depois verificaria latência da API, consultas ao banco e consumo de recursos. Procuraria preservar a experiência de navegação: uma recomendação indisponível não deveria bloquear a página do produto.

Se analytics e recomendações disputassem capacidade, avaliaria desacoplar a coleta do processamento. Para recomendações reutilizáveis, consideraria cache com uma chave que respeitasse loja e contexto de personalização. Também definiria timeout e um fallback adequado ao produto.

Eu validaria a recuperação pela queda de erros e latência, pelo comportamento das páginas e pela integridade dos dados coletados. Comunicaria ao time qualquer atraso ou perda de analytics causada pela mitigação.”

## Cuidados que mostram profundidade

- Cache compartilhado de respostas personalizadas pode entregar conteúdo incorreto ou expor informações entre usuários.
- Cache de catálogo não deve ignorar mudanças de preço, disponibilidade e produtos removidos.
- MongoDB replicado não resolve automaticamente consultas lentas nem garante capacidade de leitura suficiente.
- Retentativas sem limite podem ampliar a sobrecarga.
- Descartar ou amostrar analytics é uma decisão de produto: pode prejudicar atribuição e avaliação das recomendações.
- A coleta precisa respeitar os consentimentos e as regras aplicáveis ao produto.

## Perguntas para praticar

- Quando você escolheria uma vitrine genérica como fallback?
- Que conteúdo pode ser armazenado em cache e por quanto tempo?
- Como evitar que uma loja esgote os recursos compartilhados?
- Como distinguir pico legítimo de execução repetida do script?
- Como verificar se a mitigação afetou a qualidade dos dados?

## Ligação com o incidente real

“Já corrigi um script em lojas React que fazia chamadas desnecessárias e sobrecarregava nossa API. Essa experiência me faria verificar amplificação no cliente antes de concluir que o problema é apenas capacidade.”
