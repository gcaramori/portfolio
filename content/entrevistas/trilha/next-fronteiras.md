### Entenda primeiro

No App Router, um Server Component pode buscar dados no servidor. Um Client Component permite eventos, estado e APIs do navegador. Marcar uma fronteira com `'use client'` inclui suas dependências no lado cliente; isso não é um lugar para colocar segredos.

Dados enviados como props podem chegar ao navegador. Nunca passe a senha do banco ou um token privado. A autorização acontece antes de consultar ou retornar dados, independentemente da forma de renderização.

### Exemplo comentado

Mapa de responsabilidades para o painel:

```text
src/app/page.tsx              → estrutura e conteúdo inicial
src/components/order-filter.tsx → interação do filtro ('use client')
src/app/api/orders/route.ts   → contrato HTTP, sessão e consulta
src/lib/orders.ts            → acesso aos dados no servidor
```

Se a página servidor precisar dos mesmos dados, chame a função servidor diretamente; não faça uma chamada HTTP ao próprio endpoint sem necessidade. O componente cliente pode chamar o endpoint ao mudar o filtro.

### Faça em 15 minutos

Desenhe a fronteira servidor/cliente do painel. Liste o que cruza essa fronteira: status selecionado e dados autorizados, sem credenciais. Localize a versão do Next no `package.json` do laboratório.

### Continue até 45 minutos

Separe o filtro em um componente cliente. Documente se a listagem deve ser fresca ou pode ser reutilizada e por quanto tempo. Primeiro implemente sem cache compartilhado entre usuários; só introduza cache com chave e política de invalidação explícitas. Use a documentação correspondente à versão instalada e à configuração, especialmente se habilitar Cache Components. Não memorize uma regra de cache como universal entre versões.

### Revise sem consultar

1. Por que um Server Component não dispensa autorização?
2. Que risco existe numa chave de cache que contém só `status=paid`?

### Critério de conclusão

Você identifica onde cada trecho executa e registra uma política de atualização. Nenhuma credencial ou informação de outra conta cruza a fronteira.

### Ao retomar

Implemente o contrato HTTP no Route Handler do laboratório.

<!-- hints -->

Um arquivo servidor pode usar `import 'server-only'` para sinalizar dependências que não devem ser importadas por componentes cliente. Isso não substitui controles de acesso.

<!-- solution -->

Um cache de pedidos compartilhado apenas por status pode devolver dados da conta A para B. Quando existir reutilização autorizada, a chave precisa incluir o escopo correto, e a leitura ainda deve verificar permissões. Para o primeiro protótipo, dados por requisição são uma escolha mais simples.

Frescor, custo e latência são escolhas que você deve explicar para a necessidade daquele produto.
