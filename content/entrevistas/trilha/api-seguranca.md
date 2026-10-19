### Entenda primeiro

Autenticação responde quem está chamando. Autorização decide se essa pessoa pode acessar a operação e o recurso. Um token válido de B não autoriza ler um pedido de A.

O servidor deriva a conta de uma sessão verificada. Um `tenantId` no corpo, na URL ou num header pode ser manipulado. Alterar o filtro no frontend não é uma barreira de segurança.

### Exemplo comentado

Execute como `node authorization.mjs`. A sessão passada ao teste é uma dependência fictícia; a função não implementa login nem verifica tokens.

```js
import assert from 'node:assert/strict'
function visibleOrders(session, orders) {
  if (!session) return { status: 401, items: [] }
  return {
    status: 200,
    items: orders.filter((order) => order.tenantId === session.tenantId),
  }
}
const orders = [
  { tenantId: 'a', id: 'p1' },
  { tenantId: 'b', id: 'p1' },
]
assert.deepEqual(visibleOrders({ tenantId: 'a' }, orders).items, [orders[0]])
assert.equal(visibleOrders(null, orders).status, 401)
```

### Faça em 15 minutos

Adicione um teste para a conta B e outro para uma lista vazia. Explique por que checar apenas `order.id === 'p1'` falha.

### Continue até 45 minutos

Faça a API usar uma função servidor de sessão e teste ausência de sessão, leitura da própria conta e tentativa de leitura cruzada. Use 404 para detalhe de pedido inacessível se essa for a política documentada. Em um sistema real, use uma solução de autenticação mantida: validar assinatura, expiração e vínculo com conta não deve depender de código fictício do exercício. Documente também cookies seguros, proteção de operações mutáveis contra CSRF e limitação de requisições. CORS não substitui autorização.

### Revise sem consultar

1. Por que uma sessão válida ainda pode receber acesso negado?
2. A validação deve ocorrer só na listagem ou também em alterações?

### Critério de conclusão

Os testes demonstram isolamento com o mesmo ID de pedido em contas diferentes. Você distingue a sessão simulada do laboratório de autenticação pronta para produção.

### Ao retomar

Leve o filtro de conta para a consulta SQL, antes de retornar dados.

<!-- hints -->

Testar somente uma conta permite que um filtro ausente passe despercebido. Inclua sempre dados de uma segunda conta.

<!-- solution -->

O teste B deve devolver só `orders[1]`; a lista vazia deve continuar vazia. Listar, detalhar, editar, exportar e reprocessar exigem checagem de escopo. No banco, use o tenant autorizado em todos os filtros relevantes, não filtre dados de outras contas só depois de carregá-los no navegador.
