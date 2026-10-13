# Exercício: pico de pedidos na Black Friday

Status: cenário hipotético. Não aconteceu de forma confirmada e não deve ser apresentado como uma entrega histórica na Performa.AI.

## Situação proposta

Durante a Black Friday, várias lojas aumentam simultaneamente o volume de pedidos. O recebimento de webhooks fica lento. Algumas plataformas reenviam eventos, e uma loja muito movimentada consome uma parcela desproporcional da capacidade.

Esse cenário é compatível com sua experiência descrita em webhooks, Node.js, Redis e e-commerce. O uso de BullMQ no portfólio está confirmado em e-mail marketing, não nesse serviço de pedidos.

## Resposta para entrevista de arquitetura

“Eu começaria verificando onde está o gargalo: recebimento HTTP, processamento ou banco. Compararia latência, erros, volume por loja e, se houver fila, a idade das mensagens pendentes.

Minha prioridade seria preservar os eventos aceitos e evitar duplicação. Se o processamento síncrono fosse o problema, avaliaria persistir os eventos em uma fila durável antes de responder à plataforma. Não enviaria uma confirmação de sucesso antes de garantir que o evento foi aceito de forma recuperável.

No processamento, definiria idempotência por loja e pedido, retentativas limitadas e tratamento de falhas permanentes. Também controlaria a concorrência para uma loja não ocupar toda a capacidade.

Antes de aumentar workers, verificaria se o banco suporta a carga adicional. Acompanharia a redução do atraso e reconciliaria pedidos para verificar a completude dos dados.”

## Decisões e concessões

- Processamento assíncrono pode aumentar o atraso visível no dashboard.
- Mais concorrência pode piorar a saturação do banco.
- Eventos repetidos e atualizações legítimas precisam de tratamento distinto.
- Falhas de persistência exigem resposta coerente com o contrato da plataforma.
- Uma fila precisa de configuração e operação compatíveis com a durabilidade desejada; apenas adicionar Redis não garante isso.

## Como validar a proposta

Simular entregas simultâneas do mesmo evento, falha de worker, indisponibilidade temporária do armazenamento e pico concentrado em uma loja. Medir latência, atraso acumulado e registros duplicados. Comparar pedidos da origem com os persistidos.

## Ligação com sua experiência real

“Já implementei idempotência em um serviço com mais de 150 clientes e milhares de requisições por minuto. Não estou dizendo que vivi esse incidente de Black Friday; essa experiência orienta como eu abordaria o cenário.”
