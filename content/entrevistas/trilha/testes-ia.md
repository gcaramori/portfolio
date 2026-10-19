### Entenda primeiro

Teste útil verifica um comportamento que poderia quebrar: isolamento, duplicação, erro ou resposta fora de ordem. Um teste que apenas repete a implementação oferece pouca proteção.

IA pode ajudar a propor hipóteses e revisar uma solução. Você continua responsável por entender o código, verificar as referências e testar limites. Nunca envie credenciais ou dados de clientes ao pedir ajuda.

### Exemplo comentado

Execute como `node --test totals.test.mjs`. A função é um exercício em memória, não uma soma monetária completa para produção. O teste escolhe uma segunda conta com valor alto para tornar uma fuga de dados perceptível.

```js
import test from 'node:test'
import assert from 'node:assert/strict'
function paidTotal(orders, tenantId, currency) {
  return orders
    .filter(
      (order) =>
        order.tenantId === tenantId &&
        order.status === 'paid' &&
        order.currency === currency,
    )
    .reduce((sum, order) => sum + order.amountMinor, 0)
}
test('total respeita conta, status e moeda', () => {
  const base = {
    tenantId: 'a',
    status: 'paid',
    currency: 'BRL',
    amountMinor: 1250,
  }
  assert.equal(
    paidTotal(
      [
        base,
        { ...base, tenantId: 'b', amountMinor: 99999 },
        { ...base, status: 'pending' },
        { ...base, currency: 'USD' },
      ],
      'a',
      'BRL',
    ),
    1250,
  )
})
```

### Faça em 15 minutos

Remova o filtro de tenant de propósito e confira que o teste falha; depois restaure. Adicione um teste para nenhuma correspondência. Esse processo confirma que o teste detecta o risco escolhido.

### Continue até 45 minutos

Peça a uma IA uma revisão desse recorte, usando só dados fictícios, ou faça você mesmo sem ferramenta. Registre uma hipótese antes de aceitar a sugestão. Introduza uma falha pequena, escreva um teste que a detecta e corrija. No dia seguinte, explique e refaça a parte central sem assistência. Adicione testes de integração para idempotência SQL quando o banco estiver disponível.

### Revise sem consultar

1. Que bug real o teste consegue detectar?
2. Como você percebe se a sugestão da IA inventou uma API?

### Critério de conclusão

Você viu um teste falhar pelo motivo certo e passar após a correção. Consegue explicar a mudança sem ler a resposta da ferramenta.

### Ao retomar

Escolha quais sinais mostrariam a mesma falha depois do deploy.

<!-- hints -->

Use documentação da versão instalada para conferir métodos sugeridos. Não transforme uma resposta plausível em evidência de que o código foi executado.

<!-- solution -->

Sem filtro de tenant, o teste soma o pedido da conta B e falha. A lista vazia deve produzir zero. Um teste de integração ainda é necessário para garantias do banco: este teste unitário não prova isolamento da API nem transações concorrentes.

Em entrevistas, confirme se IA é permitida e em quais condições. Pratique tanto depuração assistida quanto resolução sem assistência; não presuma uma regra universal em 2026/2027.
