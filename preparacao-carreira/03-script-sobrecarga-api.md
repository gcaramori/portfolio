# Correção de chamadas excessivas em lojas React

Base: incidente relatado pessoalmente. O impacto confirmado foi na API e no servidor; não há confirmação de impacto no CDN.

## Versão para contar

“Eu trabalhava no script que capturava informações dos produtos acessados nas lojas para alimentar recomendações personalizadas e analytics.

Introduzi uma alteração que passou a disparar chamadas desnecessárias à nossa API em lojas React. Percebemos o problema quando começaram os erros 504. A análise dos logs mostrou o aumento de tráfego no servidor.

Publiquei uma correção que eliminava essas chamadas desnecessárias e acompanhei os logs e os dados do servidor para confirmar a resolução.

Foi um erro meu, e assumi a correção. O episódio mostrou como o comportamento de um script distribuído pode multiplicar a carga sobre o backend. Hoje, minha análise desse tipo de código inclui a frequência dos disparos e o comportamento durante a navegação da loja.”

## Limites do que sabemos

O mecanismo exato do disparo repetido ainda não foi lembrado. Não afirmar que havia um loop de `useEffect`, listeners duplicados ou retentativas infinitas. Também não temos duração, número de lojas afetadas nem percentuais de redução de tráfego.

Um 504 indica timeout em algum intermediário; não identifica sozinho qual recurso ficou saturado. A associação com chamadas excessivas veio da investigação descrita, não apenas do código HTTP.

## Se perguntarem o que faria hoje

“Eu testaria inicialização repetida, navegação sem recarregar a página e troca de produto. Verificaria a quantidade de chamadas por ação e acompanharia tráfego e erros após publicar. Também definiria como interromper rapidamente uma versão problemática.”

Essa resposta descreve sua abordagem atual, sem afirmar que todos esses controles existiam no incidente.

## Perguntas para recuperar detalhes

- Qual condição a correção passou a verificar?
- Uma mesma visualização gerava várias chamadas?
- Quais logs ou indicadores confirmaram a normalização?
- O script tinha versão identificável para associar tráfego ao deploy?
