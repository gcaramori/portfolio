### Entenda primeiro

Responsividade é manter o conteúdo utilizável conforme muda o espaço disponível. Comece pela largura pequena, permita que textos quebrem e imponha largura mínima apenas onde a leitura realmente exigir.

Um item de grid pode transbordar mesmo com uma coluna aparentemente flexível. `minmax(0, 1fr)` e `min-width: 0` permitem que o conteúdo encolha. Uma tabela extensa pode rolar dentro de uma região identificada, sem empurrar a página inteira.

### Exemplo comentado

Recorte CSS para o painel. A tabela continua sendo uma tabela HTML, dentro de uma `div` com a classe abaixo, `tabindex="0"`, `role="region"` e `aria-label="Pedidos"`.

```css
.painel {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}
.painel > * {
  min-width: 0;
}
.pedidos-scroll {
  overflow-x: auto;
}
.pedidos-scroll:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
@media (min-width: 60rem) {
  .painel {
    grid-template-columns: 16rem minmax(0, 1fr);
  }
}
```

### Faça em 15 minutos

Abra o painel a 320 pixels de largura. Adicione um nome de cliente comprido. Verifique se consegue ler e acionar o filtro sem rolar a página horizontalmente.

### Continue até 45 minutos

Confira 390, 768 e 1440 pixels, zoom de 200% e texto ampliado. Faça o filtro quebrar em linhas. Use contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande segundo a referência WCAG; confira também controles e foco. Evite altura fixa para cartões de texto. Preserve movimento reduzido se adicionar animações.

### Revise sem consultar

1. Por que esconder o transbordamento do `body` pode mascarar conteúdo inacessível?
2. Por que um layout só testado com nomes curtos pode falhar?

### Critério de conclusão

Você documentou os tamanhos conferidos e consegue usar o filtro em 320 pixels. A tabela pode ter rolagem própria, com foco visível e nome acessível.

### Ao retomar

Agora conecte o filtro ao estado React, mantendo este layout.

<!-- hints -->

Use `overflow-wrap: anywhere` para identificadores longos quando necessário. Não transforme toda célula em uma palavra quebrada: prefira rolagem localizada em tabelas.

<!-- solution -->

O CSS permite uma coluna pequena e duas no desktop. Se o formulário ainda transbordar, verifique larguras fixas dos controles e itens flexíveis com `min-width` implícito. A correção deve permitir alcançar todo o conteúdo; escondê-lo não resolve a tarefa.
