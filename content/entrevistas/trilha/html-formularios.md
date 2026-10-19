### Entenda primeiro

HTML semântico dá significado aos elementos: um botão é uma ação, um link navega, um formulário reúne entradas. Controles nativos já oferecem comportamento por teclado. Uma `div` clicável exige reconstruir parte desse comportamento e frequentemente perde acessibilidade.

Um placeholder desaparece durante a digitação e não substitui um rótulo. Mensagens precisam dizer o que aconteceu e como continuar, sem depender apenas de cor.

### Exemplo comentado

Recorte HTML para o filtro; em JSX, use `htmlFor` no lugar de `for`. O texto de estado deve mudar quando a busca terminar; os resultados são renderizados em uma lista ou tabela separada.

```html
<form aria-label="Filtrar pedidos">
  <label for="status">Status do pedido</label>
  <select id="status" name="status">
    <option value="">Todos</option>
    <option value="paid">Pagos</option>
    <option value="pending">Pendentes</option>
  </select>
  <button type="submit">Aplicar filtro</button>
</form>
<p role="status">2 pedidos encontrados.</p>
```

### Faça em 15 minutos

Coloque o filtro no painel e navegue usando Tab, Shift+Tab, setas e Enter. Confira o nome de cada controle e se o foco está visível. Com dados fixos, mostre “Nenhum pedido encontrado” para um filtro vazio de resultados.

### Continue até 45 minutos

Implemente estados de carregamento, erro, vazio e sucesso. Preserve o filtro após erro e ofereça uma nova tentativa. Em uma tabela, use `caption` e cabeçalhos `th` com `scope="col"`. Explique por escrito como uma pessoa sabe que a busca terminou. Teste com um leitor de tela disponível no sistema, se possível; registre o que realmente conferiu.

### Revise sem consultar

1. Quando usar botão e quando usar link?
2. Como diferenciar um resultado vazio de uma falha?

### Critério de conclusão

O filtro funciona sem mouse, todos os controles têm rótulos e os estados têm texto compreensível. Não declare conformidade WCAG completa a partir desse exercício.

### Ao retomar

Use o mesmo formulário para adaptar o painel a telas pequenas.

<!-- hints -->

Evite remover `outline` sem reposição. `role="status"` comunica atualizações sem mover o foco à força; não coloque toda a lista dentro da região de status.

<!-- solution -->

“Nenhum pedido pago encontrado; experimente outro status” é um resultado válido. “Não foi possível carregar os pedidos; tentar novamente” indica erro. A diferença mantém o usuário orientado.

O botão aplica o filtro. Um link pode abrir os detalhes de um pedido em outra rota. O foco deve continuar previsível após a atualização.
