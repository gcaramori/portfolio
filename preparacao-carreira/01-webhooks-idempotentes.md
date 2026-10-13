# Consistência de pedidos em um serviço de webhooks

Base: realização descrita no portfólio. Não é um relato confirmado de Black Friday.

## Versão para contar

“Na Performa.AI, desenvolvi um serviço de webhooks de pedidos que atendia mais de 150 clientes conectados, com milhares de requisições por minuto no volume habitual da operação.

Os pedidos alimentavam os dados usados na avaliação das recomendações. Precisávamos impedir que o mesmo pedido fosse registrado mais de uma vez. Implementei processamento idempotente baseado no identificador único do pedido, reconhecendo registros existentes.

A entrega permitiu registrar os pedidos sem duplicar o mesmo identificador e manter consistentes os dados consumidos pelo produto. Minha responsabilidade incluía implementação e manutenção do serviço em produção.”

## O que demonstra

Conexão entre confiabilidade técnica e qualidade dos dados do negócio. Experiência com integrações em volume e responsabilidade pelo serviço após o deploy.

## Perguntas para reconstruir a implementação

- O identificador era único globalmente ou apenas dentro da loja?
- Como dois eventos simultâneos do mesmo pedido eram tratados?
- Havia restrição única, operação atômica ou outra proteção?
- Uma atualização legítima de pedido podia chegar pelo mesmo fluxo?
- Como eram tratados erros e reenvios?

O portfólio confirma idempotência por identificador, mas não descreve esses mecanismos. Não atribua ao projeto uma implementação específica sem lembrar.

## Aprofundamento para estudo

Uma consulta seguida de inserção pode sofrer condição de corrida. Numa proposta de arquitetura, considere uma chave que inclua loja e identificador do pedido, com garantia atômica no armazenamento. Distingua repetição de entrega de atualização de estado: descartar todo evento de um pedido já conhecido pode perder alterações legítimas.

## Ligação com Black Friday

“Não estou atribuindo esse volume à Black Friday. Mas essa experiência é relevante para picos sazonais: o processamento precisa continuar correto quando o volume e os reenvios aumentam.”
