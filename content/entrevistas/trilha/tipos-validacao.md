### Entenda primeiro

TypeScript verifica seu código durante o desenvolvimento. Um JSON recebido da rede continua podendo conter qualquer coisa. `as Order` não verifica o JSON: apenas pede ao compilador que confie em você.

Use `unknown` para entrada desconhecida e faça verificações antes de usar seus campos. Narrowing é reduzir as possibilidades do tipo após essas verificações. Uma união discriminada representa resultados diferentes com um campo comum, como `ok`.

### Exemplo comentado

Salve como `validate.mjs` e rode `node validate.mjs`. Este recorte valida o valor monetário; ele não valida sozinho um pedido completo.

```js
import assert from 'node:assert/strict'

function parseAmount(input) {
  if (!Number.isSafeInteger(input) || input < 0) {
    return { ok: false, error: 'invalid_amount' }
  }
  return { ok: true, value: input }
}

assert.deepEqual(parseAmount(1250), { ok: true, value: 1250 })
assert.equal(parseAmount('1250').ok, false)
assert.equal(parseAmount(-1).ok, false)
assert.equal(parseAmount(1.5).ok, false)
```

Em TypeScript, declare a entrada como `unknown`; antes de comparar com zero, verifique `typeof input === 'number'`. O retorno pode ser `{ ok: true; value: number } | { ok: false; error: string }`. Ao verificar `result.ok`, o compilador distingue os casos.

### Faça em 15 minutos

Execute o exemplo. Adicione testes para `null`, `NaN` e um inteiro maior que o limite seguro. Preveja os resultados antes de rodar.

### Continue até 45 minutos

Crie `parseOrder(input: unknown)`: verifique objeto não nulo, IDs não vazios, status `paid` ou `pending`, moeda `BRL` ou `USD`, centavos e data ISO válida. Retorne erro sem lançar para uma entrada inválida. Teste um campo errado por vez. Para sênior: explique limites do contrato e quando usaria uma biblioteca de validação.

### Revise sem consultar

1. Qual a diferença entre `unknown`, `any` e uma asserção com `as`?
2. Onde a validação precisa acontecer se o navegador já valida?

### Critério de conclusão

Os novos testes passam e você explica por que uma string numérica foi rejeitada. Para o incremento completo, a API só aceita pedidos que passaram pela validação.

### Ao retomar

Execute os testes e acompanhe o caminho de uma requisição HTTP.

<!-- hints -->

`typeof null` é `object`. Arrays também são objetos. Verifique ambos antes de acessar propriedades. Não converta silenciosamente uma entrada inválida para satisfazer o teste.

<!-- solution -->

Os três casos novos são inválidos: não são inteiros seguros não negativos. `unknown` exige verificação antes do uso; `any` desliga essa proteção naquele trecho. Uma asserção não adiciona validação em execução.

A API valida mesmo quando há formulário validado: clientes podem ignorar a interface. Em aplicações reais, a biblioteca escolhida deve produzir mensagens e tipos coerentes com o contrato, sem registrar payloads sensíveis.
