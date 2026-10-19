### Entenda primeiro

Estado é a memória que muda durante a interação. Props são entradas recebidas de outro componente. Se você calcula a lista filtrada com pedidos e status, não precisa salvar uma segunda cópia da lista em estado. Menos cópias reduzem divergências.

Uma race condition ocorre quando o resultado depende da ordem de execução. Se a busca A começa antes de B, mas termina depois, A não deve sobrescrever o resultado de B.

### Exemplo comentado

Recorte de um efeito dentro de um componente cliente. `status`, `setItems`, `setError` e `setLoading` vêm do estado do componente. A limpeza marca a busca como antiga e cancela sua espera.

```tsx
useEffect(() => {
  let current = true
  const controller = new AbortController()
  setLoading(true)
  setError('')
  fetch(`/api/orders?status=${encodeURIComponent(status)}`, {
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error('Falha ao carregar pedidos')
      return response.json()
    })
    .then((data) => {
      if (current) setItems(data.items)
    })
    .catch(() => {
      if (current) setError('Tente novamente.')
    })
    .finally(() => {
      if (current) setLoading(false)
    })
  return () => {
    current = false
    controller.abort()
  }
}, [status])
```

### Faça em 15 minutos

Na versão com fixtures, guarde apenas `status` e derive `filtered = orders.filter(...)` durante a renderização. Use a combinação conta/ID como chave estável se a lista contiver várias contas de teste. Não use o índice como identidade de linhas reordenáveis.

### Continue até 45 minutos

Quando a API local existir, integre o efeito. Force a primeira resposta a demorar mais que a segunda. Verifique que itens, erro e carregamento pertencem à busca atual. Até lá, use uma Promise com atraso e os dados fictícios. Para sênior: discuta biblioteca de dados, deduplicação e por que um efeito pode executar uma etapa extra de configuração/limpeza no desenvolvimento.

### Revise sem consultar

1. Qual estado você consegue derivar?
2. Por que proteger apenas `setItems` não é suficiente?

### Critério de conclusão

O filtro não mantém cópia desnecessária dos resultados e você demonstra A terminando depois de B sem substituir o resultado atual. Se só fez a sessão mínima, registre esse segundo teste como continuação.

### Ao retomar

Decida quais partes do painel precisam executar no navegador.

<!-- hints -->

Não use um booleano compartilhado entre todas as requisições. Cada execução do efeito precisa de sua própria identidade ou marca de validade.

<!-- solution -->

A limpeza da execução A deixa seu `current` falso; B tem outro `current`. Mesmo se o cancelamento não impedir uma resposta já produzida, os setters de A não alteram a interface. O mesmo cuidado vale para erro e `finally`.

Em produção, valide também a estrutura do JSON. O exemplo foca a ordem das respostas e pressupõe o contrato da fixture/API local.
