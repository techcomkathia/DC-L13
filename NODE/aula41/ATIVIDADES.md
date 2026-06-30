# Atividades

## Atividade 1

Crie um arquivo chamado operacoesBancarias com 4 funções: 

* criar conta: função que recebe um nome, uma agência, um número e opcionalmente um saldo. Caso o saldo não seja informado, o objeto retornado pela função terá o atributo saldo zerado.

* Sacar: função que recebe 2 parâmetros, conta(objeto) e valor saque

* Depositar: função função que recebe 2 parâmetros, conta(objeto) e valor depósito

* Ver extrato: função que recebe 1 parâmetros, conta(objeto) e retorna os dados dessa conta formatos de forma textual. 

Todas as funções serão criadas e exportadas para serem utilizadas no arquivo principal. 

## Atividade 3

Faça a adaptação do módulo operacoesBancarias, criando um novo arquivo chamado operacoesBancariasJson. Nele você usará o módulo fs para fazer a persistência dos dados no arquivo json. 
A função criar conta deverá adicionar a nova conta ao array de contas do atributo do json. 
As funções de depositar e sacar deverão fazer a alteração dos valores do saldo no objeto correto no arquivo json. 

** Dica: use o método find para arrays, de forma que consiga encontrar a conta pelo número :)
