### Entenda primeiro

Um contrato previsível permite que o frontend trate erros sem adivinhar. Usaremos `GET /api/orders`, filtros `status` e `limit`, limite padrão 20 e intervalo de 1 a 100. Status ausente ou vazio significa todos; valores aceitos são `paid` e `pending`.

Resposta de sucesso: `{ items: Order[], nextCursor: string | null }`. Erro: `{ error: { code: string, message: string } }`. Comece sem cursor: `nextCursor` fica nulo para uma fixture que cabe inteira no limite. Uma lista truncada precisa de paginação real antes de ser considerada completa.

### Exemplo comentado

Execute como `node query.mjs`. A expressão evita conversões permissivas como aceitar `2abc`. Confira também inteiros seguros para entradas grandes.

```js
import assert from 'node:assert/strict'
function parseLimit(raw) {
  if (raw === null) return 20
  if (!/^[1-9]\d*$/.test(raw)) return null
  const value = Number(raw)
  return Number.isSafeInteger(value) && value <= 100 ? value : null
}
assert.equal(parseLimit(null), 20)
assert.equal(parseLimit('2'), 2)
for (const raw of ['0', '-1', '2abc', '101', '']) {
  assert.equal(parseLimit(raw), null)
}
```

### Faça em 15 minutos

Execute e expanda os testes de limite. Escreva as respostas esperadas para filtro válido, status inválido e ausência de sessão. Uma resposta 400 não deve incluir stack trace.

### Continue até 45 minutos

Crie `src/app/api/orders/route.ts` com `export const runtime = 'nodejs'` e `export async function GET(request: Request)`. Leia `new URL(request.url).searchParams`, valide ambos os filtros, obtenha o tenant da sessão e devolva `Response.json(...)` com status apropriado. Use fixtures até o módulo SQL. No laboratório sem login, uma função servidor pode fornecer a conta A fictícia, claramente marcada como simulação; não aceite um header arbitrário como autenticação real.

### Revise sem consultar

1. Onde validar o filtro se a interface só oferece duas opções?
2. Por que não devolver 200 com um erro escondido em `items`?

### Critério de conclusão

Os casos inválidos são rejeitados com 400; o caso válido retorna a estrutura documentada. Ao implementar a rota, confirme também o isolamento da fixture.

### Ao retomar

Troque a conta fixa por uma dependência de sessão testável e revise as permissões.

<!-- hints -->

Separe parsing, autorização e leitura de dados. Teste essas funções com entradas controladas antes de integrar HTTP.

<!-- solution -->

Para `status=unknown`, devolva 400 com código `invalid_status`. Para ausência de sessão válida, 401. Sucesso com a sessão A e `status=paid` contém apenas o `p1` em BRL.

Ao adicionar cursor, use ordenação estável, limite e próxima posição coerentes. Não use `nextCursor: null` para esconder páginas que ainda existem.
