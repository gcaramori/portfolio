### Entenda primeiro

Observabilidade ajuda a responder o que aconteceu e onde investigar. Logs descrevem eventos; métricas agregam medidas ao longo do tempo; traces acompanham uma operação entre componentes. Um 504 indica timeout no caminho, não prova CPU saturada.

Comece com instrumentação pequena: identificador de requisição, rota, status, duração e código de erro. Não registre cookies, tokens ou payloads sensíveis. Use IDs de conta em logs restritos quando necessário; evite alta cardinalidade em rótulos de métricas.

### Exemplo comentado

Registro fictício de uma requisição; o tempo não é uma medição do seu projeto:

```json
{
  "requestId": "req-local-1",
  "route": "/api/orders",
  "status": 503,
  "durationMs": 5020,
  "errorCode": "database_timeout"
}
```

Uma hipótese é lentidão no banco. Outras incluem pool esgotado e rede. Procure tempo de espera, consultas e número de conexões antes de aumentar workers.

### Faça em 15 minutos

Escreva um roteiro de incidente: sintoma, impacto, hipótese, próxima medição, mitigação e confirmação da recuperação. Escolha uma queda simulada do banco local.

### Continue até 45 minutos

Adicione logs sanitizados e um timeout delimitado no acesso aos dados. Interrompa apenas seu banco de laboratório e confirme erro controlado, sem vazamento de detalhes. Rode lint, testes e build. Escreva um plano de deploy: configuração, migração compatível, verificação da versão e consulta de controle. Escreva o rollback incluindo a compatibilidade do esquema. Não é necessário publicar em cloud para concluir.

### Revise sem consultar

1. Por que média baixa não descarta usuários com requisições lentas?
2. Voltar o código sempre desfaz uma migração de banco?

### Critério de conclusão

Seu roteiro permite investigar uma falha sem adivinhar a causa. No incremento completo, você demonstra degradação local e recuperação e registra os comandos executados.

### Aprofundamento sênior

Meça p95/p99 com carga, janela, hardware e volume documentados. Discuta fila, backlog, retry com atraso e limites por conta se houver processamento assíncrono. Redis, Kubernetes e dashboards completos não são pré-requisitos desta aula.

### Ao retomar

Use o incidente simulado como exercício de design, claramente identificado como simulação.

<!-- hints -->

Desligar uma dependência testa um cenário. Não conclua que o sistema tolera todas as falhas só porque ele se recuperou dessa.

<!-- solution -->

Um roteiro razoável começa verificando impacto e conexões; mitiga com limite de carga ou desativação de uma função secundária; valida queda dos erros e consultas corretas após recuperação. O rollback exige que a versão antiga ainda leia o esquema atual ou uma migração reversível comprovada.

Nenhuma dessas simulações deve ser descrita como experiência de operação real em cloud.
