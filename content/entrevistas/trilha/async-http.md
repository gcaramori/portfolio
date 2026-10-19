### Entenda primeiro

HTTP conecta cliente e servidor por requisições e respostas. Um status 200 informa sucesso; 400 indica entrada inválida; 401, ausência de autenticação válida; 403, falta de permissão. A política de exposição de recursos pode usar 404 para um pedido inacessível.

Uma Promise representa um resultado futuro. `await` permite esperar sem escrever uma cadeia de callbacks. Ele não transforma cálculo pesado em trabalho não bloqueante. O event loop coordena callbacks; se um callback gastar segundos calculando, outras requisições podem esperar.

### Exemplo comentado

Execute como `node async.mjs`. A resolução da Promise entra na fila de microtarefas; o trabalho síncrono termina antes dela.

```js
import assert from 'node:assert/strict'
const events = []
events.push('inicio')
const done = Promise.resolve().then(() => events.push('resposta'))
events.push('fim sincrono')
await done
assert.deepEqual(events, ['inicio', 'fim sincrono', 'resposta'])
```

Em uma busca real, verifique `response.ok`: `fetch` não rejeita automaticamente por status 500. Defina timeout com `AbortSignal.timeout(5000)` quando suportado no ambiente. Cancelar a espera no cliente não garante desfazer um efeito já iniciado no servidor.

### Faça em 15 minutos

Preveja a sequência do exemplo e execute. Desenhe o fluxo clique → navegador → HTTP → API → resposta. Marque onde pode haver erro de rede e onde pode haver resposta 500.

### Continue até 45 minutos

Na aplicação local, simule sucesso, status 500 e espera acima do timeout. Para cada um, defina mensagem, botão de tentar novamente e tratamento da Promise rejeitada. Compare `Promise.all` com `Promise.allSettled`: o primeiro rejeita ao encontrar uma rejeição; o segundo preserva o resultado de todas. Nenhum limita sozinho a concorrência.

### Revise sem consultar

1. Por que `async` em uma função de cálculo não impede bloqueio?
2. Um timeout prova que o servidor não processou a requisição?

### Critério de conclusão

Você explica a ordem do exemplo e distingue falha de rede, resposta de erro e timeout. No incremento completo, a interface sai do carregamento nos três cenários.

### Ao retomar

Anote os estados que o formulário do painel precisa apresentar.

<!-- hints -->

Use fixtures e atraso artificial no localhost. Não teste falhas enviando carga para serviços de terceiros.

<!-- solution -->

A sequência é início, fim síncrono, resposta. Em `fetch`, examine o status antes de ler o JSON como sucesso e trate a rejeição separadamente. Use `finally` para limpar o carregamento, respeitando se aquela busca ainda é a atual.

Retentar um GET costuma ser mais simples que repetir uma criação. Para repetir uma criação, primeiro estabeleça sua política de idempotência.
