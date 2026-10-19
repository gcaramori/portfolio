### Entenda primeiro

Uma chave composta distingue pedidos por conta e ID. Guarde centavos em inteiro e a moeda separadamente. `timestamptz` representa um instante; a apresentação pode usar o fuso do usuário. Para intervalos, prefira início inclusivo e fim exclusivo.

### Exemplo comentado

SQL executável em um PostgreSQL local, num banco vazio exclusivo do laboratório. Salve como `schema.sql` e execute `psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f schema.sql` no seu shell com a variável local configurada. Também pode colar no cliente SQL de sua preferência. Não aponte para banco de cliente ou produção.

```sql
CREATE TABLE orders (
  tenant_id text NOT NULL,
  id text NOT NULL,
  status text NOT NULL CHECK (status IN ('paid', 'pending')),
  amount_minor bigint NOT NULL CHECK (amount_minor >= 0),
  currency text NOT NULL CHECK (currency IN ('BRL', 'USD')),
  created_at timestamptz NOT NULL,
  PRIMARY KEY (tenant_id, id)
);
INSERT INTO orders VALUES
  ('a', 'p1', 'paid', 1250, 'BRL', '2026-10-01T12:00:00Z'),
  ('a', 'p2', 'pending', 900, 'BRL', '2026-10-02T12:00:00Z'),
  ('b', 'p1', 'paid', 700, 'USD', '2026-10-03T12:00:00Z');
SELECT currency, count(*) AS quantity, sum(amount_minor) AS total_minor
FROM orders
WHERE tenant_id = 'a' AND status = 'paid'
  AND created_at >= '2026-10-01T00:00:00Z'
  AND created_at < '2026-10-08T00:00:00Z'
GROUP BY currency;
```

Resultado esperado: BRL, quantidade 1, total 1250. A data é fixa para tornar a prática reproduzível.

### Faça em 15 minutos

Preveja o resultado, explique cada filtro e escreva uma consulta para a conta B. Se não instalou PostgreSQL, deixe a execução para a continuação e registre essa pendência.

### Continue até 45 minutos

Instale PostgreSQL local gratuito e rode o script num banco novo. No miniapp, instale `pg` e `@types/pg`; em um módulo servidor, crie `new Pool({ connectionString: process.env.DATABASE_URL })`. Guarde a conexão em `.env.local`, fora do Git. Use parâmetros: `pool.query('SELECT * FROM orders WHERE tenant_id = $1', [session.tenantId])`. Mapeie nomes SQL para o contrato JSON; o driver retorna `bigint` como texto por padrão. Converta para número somente após verificar limite seguro, ou mantenha uma representação textual documentada para valores grandes.

### Revise sem consultar

1. Por que o `GROUP BY` inclui moeda?
2. Por que concatenar o filtro recebido numa string SQL é perigoso?

### Critério de conclusão

Você obtém os totais esperados sem misturar contas ou moedas e explica a parametrização. A conexão real permanece como pendência explícita se ficou na sessão mínima.

### Ao retomar

Mantenha o banco e proteja uma inserção repetida contra concorrência.

<!-- hints -->

Se repetir o script inteiro, ele deve falhar ao criar a tabela existente. Use um banco novo ou execute só as consultas; não apague tabelas para contornar erros sem conferir o destino.

<!-- solution -->

A conta B retorna USD, 1, 700. Remover o filtro de tenant mistura clientes; remover o agrupamento por moeda soma unidades incompatíveis. O parâmetro `$1` representa um valor, não um pedaço arbitrário de SQL.

Para a listagem paginada, uma ordenação por `(created_at, id)` dentro do tenant oferece desempate estável. Documente o formato do cursor antes de implementá-lo.
