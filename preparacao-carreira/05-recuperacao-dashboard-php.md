# Recuperação de um servidor PHP por snapshot

Base: incidente relatado pessoalmente. Usar preferencialmente em perguntas explícitas sobre erros e responsabilidade.

## Versão para contar

“Durante uma intervenção no servidor de um dashboard PHP, executei um `rm -rf` incorretamente e removi arquivos do ambiente da aplicação.

O erro foi meu. Precisei recuperar o servidor inteiro a partir de um snapshot. Esse ponto de recuperação foi essencial para reconstruir o ambiente.

O episódio tornou muito concreto o risco de uma operação destrutiva em produção. Hoje, antes de uma ação desse tipo, eu verificaria o caminho absoluto, o conteúdo afetado e a disponibilidade de recuperação.”

## O que ainda falta lembrar

- Como a restauração foi acionada e qual foi sua participação?
- Qual era a idade do snapshot?
- O banco estava no mesmo servidor?
- Como o funcionamento do dashboard foi validado?
- Alguma prática foi realmente alterada depois?

Não afirmar ausência de perda de dados, tempo de recuperação ou implantação posterior de permissões e procedimentos sem confirmação.

## Aprofundamento para estudo

Recuperar o servidor não garante, por si só, recuperar todas as alterações posteriores ao snapshot. Numa situação semelhante, eu verificaria dependências externas, dados persistidos e os principais fluxos da aplicação. A decisão de restauração também deve considerar o que pode ser sobrescrito.

## Como apresentar responsabilidade

Reconheça o erro sem justificativas longas. Dedique mais tempo à recuperação e ao que aprendeu. Se não houve mudança concreta depois, descreva o que faria hoje, sem inventar uma melhoria histórica.
