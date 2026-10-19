### Entenda primeiro

Vamos estudar com um painel de pedidos, em um repositório separado deste portfólio. Uma aplicação pequena permite acompanhar o caminho inteiro: filtro → requisição → autorização → consulta → resposta → interface.

Comece com Next.js App Router, React e TypeScript. Usaremos Route Handlers com runtime Node.js para a API; não é necessário adicionar Express ou NestJS. Se uma vaga pedir outro framework, compare os mesmos conceitos depois.

### Exemplo e contrato comum

Use o formato abaixo em todas as aulas. Valores monetários são inteiros em centavos; a moeda acompanha o valor. Contas diferentes podem ter pedidos com o mesmo ID.

```json
[
  {
    "tenantId": "a",
    "id": "p1",
    "status": "paid",
    "amountMinor": 1250,
    "currency": "BRL",
    "createdAt": "2026-10-01T12:00:00Z"
  },
  {
    "tenantId": "a",
    "id": "p2",
    "status": "pending",
    "amountMinor": 900,
    "currency": "BRL",
    "createdAt": "2026-10-02T12:00:00Z"
  },
  {
    "tenantId": "b",
    "id": "p1",
    "status": "paid",
    "amountMinor": 700,
    "currency": "USD",
    "createdAt": "2026-10-03T12:00:00Z"
  }
]
```

`GET /api/orders?status=paid&limit=20` retorna `{ "items": [...], "nextCursor": null }`. O tenant vem da sessão validada no servidor, nunca de um filtro confiado ao navegador. A primeira versão pode usar fixtures, isto é, dados fixos fictícios.

### Faça em 15 minutos

Crie uma pasta fora do portfólio e salve os dados como `fixtures/orders.json`. Escreva no README o contrato acima e o resultado esperado para a conta A: só `p1`, em BRL, quando o filtro for `paid`.

### Continue até 45 minutos

Instale uma linha Node.js LTS ainda suportada, conferindo o ciclo oficial na data da instalação. No diretório pai escolhido, execute:

```sh
npx create-next-app@16 painel-pedidos --ts --app --eslint --no-tailwind --use-npm --src-dir --import-alias "@/*"
cd painel-pedidos
npm run dev
```

Mova a fixture para o projeto gerado e abra apenas seu localhost. Guarde o lockfile e registre `node --version` e a versão instalada do Next. Se a instalação consumir a sessão, retome depois. PostgreSQL só será necessário no módulo de dados; nenhuma etapa exige cloud, cartão ou API de loja.

### Revise sem consultar

1. Por que o mesmo `p1` pode aparecer duas vezes?
2. Por que não somar BRL e USD diretamente?

### Critério de conclusão

A fixture e o README existem, você identifica os pedidos da conta A e explica a moeda. O ambiente pode ser completado antes da primeira aula prática de frontend.

### Ao retomar

Confira a fixture e comece a validação dos dados desconhecidos.

<!-- hints -->

Se a máquina tiver pouca memória, use um editor e as fixtures primeiro. Adie containers, Redis e ferramentas de observabilidade.

<!-- solution -->

O identificador completo é o par conta/pedido. A conta A tem `p1` pago e `p2` pendente. A conta B tem outro `p1`, em USD. O total pago da conta A é 1250 centavos de BRL.

Não publique tokens ou dados reais. O projeto é uma simulação local, não evidência de operação em produção.
