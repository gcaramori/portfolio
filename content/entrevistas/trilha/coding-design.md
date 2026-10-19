### Entenda primeiro

Uma entrevista técnica avalia como você esclarece o problema, implementa, testa e discute limites. Não é necessário narrar cada tecla. Mostre as decisões que mudam a solução.

No design, comece por requisitos e uma arquitetura simples. Adicione cache, fila ou serviços separados apenas quando explicar o problema que resolvem e o custo que introduzem.

### Exemplo comentado

Pergunta: “Some pedidos pagos de uma conta por moeda.” Antes de codar, esclareça se existem duplicatas, atualização de pedidos, moedas diferentes e valores grandes. Use a fixture do laboratório e espere `{ BRL: 1250 }` para a conta A.

> “I’ll clarify the input, implement a simple version, and test the edge cases.”

Tradução: “Vou esclarecer a entrada, implementar uma versão simples e testar os casos de borda.”

### Faça em 15 minutos

Use 2 minutos para esclarecer, 8 para implementar, 3 para testar vazio e duas contas, e 2 para explicar complexidade. Percorrer `n` pedidos uma vez custa O(n); armazenar totais por `m` moedas custa O(m).

### Continue até 45 minutos

Desenhe o painel com navegador, API e banco. Dedique 5 minutos aos requisitos, 10 ao fluxo, 10 às falhas e 5 aos trade-offs. Discuta isolamento, paginação, duplicação, timeout e rollback. Para sênior, estime volume com números explicitamente hipotéticos e diga como mediria a capacidade; não atribua as estimativas ao seu currículo.

### Revise sem consultar

1. Que requisito mudaria sua estrutura de dados?
2. O que acontece se o banco falhar depois de uma escrita e antes da resposta?

### Critério de conclusão

Você resolve e testa o caso básico, explica os limites e responde duas perguntas de aprofundamento. Se só leu a solução, refaça antes de marcar.

### Ao retomar

Grave uma explicação curta em inglês e escolha uma história real para acompanhar o exercício.

<!-- hints -->

Um Map por moeda é suficiente para a soma em memória. Para deduplicação, primeiro defina se a identidade é pedido ou evento e como tratar atualizações; não escolha uma chave sem esclarecer o contrato.

<!-- solution -->

Filtre tenant e status, agrupe por moeda e acumule `amountMinor`. Teste lista vazia, pendentes, duas contas com o mesmo ID e duas moedas. Se houver pedidos repetidos, definir “último estado” requer regra de versão ou horário; simplesmente ignorar duplicatas pode perder atualizações.

Um timeout depois de gravar deixa o cliente sem saber o resultado. Uma repetição segura depende da identidade da operação e de uma proteção persistente, como no exercício transacional.
