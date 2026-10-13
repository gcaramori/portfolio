# Integrações de catálogo e pedidos entre plataformas

Base: realização descrita no portfólio.

## Versão para contar

“Na Performa.AI, desenvolvi e mantive integrações de catálogos e pedidos com Shopify, Nuvemshop, Loja Integrada, Tray, VTEX e Magazord.

O objetivo era manter os dados que abasteciam o produto atualizados e reduzir a necessidade de intervenção manual. Meu trabalho envolvia conectar as APIs, respeitar seus limites e acompanhar o funcionamento em produção.

Também atuava na interlocução técnica com as plataformas e no apoio ao suporte quando surgiam problemas de integração. Isso exigia entender tanto o contrato da API quanto o efeito dos dados sobre a operação do cliente.

Essa experiência me deu uma visão do ciclo completo de uma integração: implementação, publicação, manutenção e investigação de falhas.”

## Como tornar a história específica

Escolha uma plataforma e um fluxo que você realmente lembra. Reconstrua a origem dos dados, autenticação, paginação, sincronização inicial, atualizações e tratamento de erros. A lista de plataformas demonstra amplitude; uma decisão concreta demonstra profundidade.

## Perguntas de aprofundamento

- Como você distinguia uma falha de credencial de um limite de consumo?
- Como produtos removidos ou indisponíveis eram refletidos no destino?
- Era possível retomar uma sincronização interrompida?
- Como o suporte identificava a loja afetada?
- Qual parte foi desenvolvida por você e qual já existia?

## Decisões possíveis para discutir, sem atribuí-las ao passado

Ao projetar uma integração, eu avaliaria retentativas limitadas, espera progressiva, indicação de atualização dos dados e limites por loja. Para chamadas que retornam 429, respeitaria a orientação da plataforma quando disponível. Para falhas permanentes de autenticação, interromperia repetições inúteis e sinalizaria a necessidade de ação.

Não afirme redução percentual de trabalho manual ou aumento de vendas sem uma medição real.
