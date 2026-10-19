### Entenda primeiro

“Consultar e depois inserir” pode falhar se duas requisições consultarem antes de qualquer inserção. Uma restrição única no banco protege a identidade da operação sob concorrência.

Idempotência exige definir o efeito. Neste recorte, repetir a ingestão de um mesmo evento não pode somar duas vezes o valor de um pedido. Inserção do evento e alteração do pedido ficam na mesma transação: ambas confirmam ou nenhuma confirma.

### Exemplo comentado

Execute no banco local da aula anterior. Este evento fictício acrescenta 100 centavos ao pedido A/p1. Repetir o bloco `BEGIN`/`COMMIT` deve manter o total em 1350.

```sql
CREATE TABLE processed_events (
  tenant_id text NOT NULL,
  event_id text NOT NULL,
  PRIMARY KEY (tenant_id, event_id)
);
BEGIN;
WITH accepted AS (
  INSERT INTO processed_events VALUES ('a', 'evt-1')
  ON CONFLICT DO NOTHING
  RETURNING tenant_id
)
UPDATE orders SET amount_minor = amount_minor + 100
WHERE tenant_id = 'a' AND id = 'p1'
  AND EXISTS (SELECT 1 FROM accepted);
COMMIT;
SELECT amount_minor FROM orders WHERE tenant_id = 'a' AND id = 'p1';
```

O exemplo pressupõe que o pedido já existe. Em uma implementação real, verifique se a alteração afetou o pedido esperado; se não, desfaça a transação ou registre uma política de recuperação. Não confirme um evento perdido silenciosamente.

### Faça em 15 minutos

Desenhe a corrida de duas requisições e explique o papel da chave única. Execute o bloco transacional duas vezes se o banco já estiver pronto.

### Continue até 45 minutos

Rode o mesmo evento em duas sessões SQL simultâneas e confira um único efeito. Depois compare `EXPLAIN (ANALYZE, BUFFERS)` de uma listagem antes e depois de um índice `(tenant_id, status, created_at, id)`. Esse comando executa a consulta: use SELECT e dados locais. Com três linhas, uma varredura sequencial pode ser a melhor escolha; aumente o conjunto fictício e registre a comparação antes de concluir.

### Revise sem consultar

1. Por que uma variável em memória não protege dois processos?
2. Um índice sempre melhora toda consulta?

### Critério de conclusão

Você demonstra repetição sem duplicar o efeito e distingue a garantia transacional deste recorte de uma promessa de entrega exatamente uma vez entre sistemas.

### Ao retomar

Transforme as falhas de repetição e isolamento em testes de regressão.

<!-- hints -->

A segunda transação pode esperar a primeira confirmar. Preserve o mesmo `event_id` no teste de repetição. IDs diferentes representam operações diferentes neste contrato.

<!-- solution -->

O primeiro evento insere a chave e permite o UPDATE. O segundo não obtém linha em `accepted` e não soma de novo. A chave é por conta: outra conta pode receber um evento com o mesmo ID sem colisão.

Para webhooks reais, autentique a origem, valide o payload e discuta alterações fora de ordem. Para efeito externo, como um e-mail, a transação SQL sozinha não garante atomicidade com esse serviço; considere outbox, repetição e reconciliação como aprofundamento sênior.
