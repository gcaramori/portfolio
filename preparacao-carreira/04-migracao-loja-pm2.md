# Diagnóstico de dados ausentes após migração

Base: incidente relatado pessoalmente. A intervenção é lembrada; a causa técnica precisa ser precisada.

## Versão para contar

“Uma loja estava sobrecarregando o ambiente e foi movida de servidor. Depois da migração, os dados dessa loja não apareciam no dashboard, apesar de os registros existirem e a conexão com o banco funcionar.

Identificamos uma inconsistência relacionada ao processo gerenciado pelo PM2 em produção e às referências do ambiente anterior. A intervenção que lembro foi uma limpeza do estado que chamávamos de cache do PM2.

Depois disso, acessamos o dashboard da loja e os dados carregaram. A validação confirmada foi pelo fluxo visível ao cliente.

O caso me ensinou a separar existência dos dados, conectividade e configuração efetiva da aplicação. Uma aplicação pode estabelecer uma conexão e ainda consultar um destino diferente do esperado.”

## Precisão necessária

Logs antigos podem revelar uma configuração antiga, mas não fazem a aplicação selecionar um banco. “Limpar cache” pode estar resumindo ações diferentes. Não inventar o comando nem afirmar que limpar logs atualizou a conexão.

Também não está definido qual etapa da investigação e da intervenção foi executada por você. Antes de usar o relato, substitua o plural pela descrição exata da sua contribuição quando lembrar.

## Evidências que poderiam confirmar a referência antiga

Estas são possibilidades de investigação, não evidências recuperadas do incidente:

- Comparar host e nome do banco usados pelo processo com o destino esperado.
- Inspecionar configuração de inicialização e variáveis efetivas, sem expor segredos.
- Verificar diretório e versão da aplicação em execução.
- Correlacionar uma requisição da loja com a resposta da API e a consulta realizada.

## Se perguntarem o comando exato

“Não lembro o comando. Lembro da intervenção no PM2 e da validação no dashboard. Para afirmar se foi atualização de ambiente, recriação do processo ou outra ação, precisaria conferir os registros.”
