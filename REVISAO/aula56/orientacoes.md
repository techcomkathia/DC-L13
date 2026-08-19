# Desafio POO — Sistema de Delivery

## O problema

Você e sua equipe foram contratados para desenvolver um sistema para uma pequena empresa de delivery que está crescendo.

Atualmente, os pedidos são controlados de forma manual. Os funcionários recebem os pedidos, anotam os produtos, calculam os valores e registram a forma de pagamento.

Com o aumento da quantidade de pedidos, começaram a surgir alguns problemas:

- produtos sendo esquecidos nos pedidos;
- valores calculados incorretamente;
- dificuldade para saber o total de um pedido;
- diferentes formas de pagamento sendo tratadas de maneira diferente;
- dificuldade para adicionar novos tipos de produtos;
- alterações em informações importantes sem nenhum controle.

A empresa decidiu que precisa de um pequeno sistema para organizar esse processo.

---

# Missão

Você deverá analisar o problema e, antes de escrever qualquer código, **transformar as necessidades da empresa em uma estrutura de classes utilizando POO**.

Durante a atividade, vocês deverão descobrir:

- quais são as entidades importantes do sistema;
- quais informações cada entidade precisa guardar;
- quais comportamentos cada entidade deve possuir;
- quais informações precisam ser protegidas;
- quais entidades possuem características em comum;
- quais entidades são especializações de outras;
- quais comportamentos podem acontecer de maneiras diferentes.

> **Importante:** não vamos começar criando classes.
>
> Primeiro vamos entender o problema.

# Etapa 1 — Conhecendo o sistema

**Tempo: 15 min**

Leia o cenário:

A empresa recebe pedidos de clientes.

Um pedido pode possuir **um ou vários produtos**.

Por exemplo:

> João realiza um pedido com:
>
> - 2 hambúrgueres;
> - 1 refrigerante;
> - 1 sobremesa.

O sistema precisa registrar esse pedido e conseguir descobrir o valor total da compra.

Além disso, existem diferentes tipos de produtos vendidos pela empresa.

Alguns produtos possuem regras específicas para determinar seu preço final.

A empresa também trabalha com diferentes formas de pagamento: dinheiro, pix, cartão (débito ou crédito)

Depois que o cliente finaliza o pedido, o sistema precisa registrar a forma de pagamento escolhida e realizar o processamento correspondente.

### Questão 1 

Pensando apenas no problema apresentado:

**Quais são as principais "coisas" que precisam existir dentro do sistema?**

Liste as possíveis entidades que você acredita que deverão ser representadas no sistema.

Não pense ainda em atributos ou métodos.

```
- Cliente

- Pedido

- Produto 
  - tipos de produtos (Bebida, Sobremesa, Hamburguer ...)

- Pagamento
  - tipos de pagamento (Pix, Dinheiro, Cartão ...)
```


# Etapa 2 — Conhecendo cada entidade


Agora que temos uma primeira ideia das entidades do sistema, precisamos entender melhor cada uma delas.

Imagine que você precisa explicar para outro desenvolvedor como cada entidade funciona.

### Questão 2

Para cada entidade identificada anteriormente, responda:

1. Quais informações precisamos guardar sobre ela?
2. Quais ações ela precisa realizar?
3. Quais informações não deveriam ser alteradas livremente por qualquer parte do sistema?

Não é necessário escrever código.

Organize suas respostas pensando em:

> **O que essa entidade sabe?**
>
> **O que essa entidade faz?**

```
1. Cliente
Atributos
nome
telefone
endereco
Métodos
atualizarEndereco()
exibirDados()


2. Pedido
Atributos
numero
cliente
produtos
pagamento
status
Métodos
adicionarProduto()
removerProduto()
calcularTotal()
adicionarPagamento()
finalizarPedido()
exibirResumo()

3. Produto
Atributos
nome
preco
Métodos
calcularPrecoFinal()
exibirDescricao()

3.1 Hambúrguer
Atributos
tipoPao
adicionais
Métodos
adicionarAdicional()
removerAdicional()
calcularPrecoFinal()
exibirDescricao()

3.2 Bebida
Atributos
tamanho
possuiGelo
Métodos
adicionarGelo()
removerGelo()
calcularPrecoFinal()
exibirDescricao()

3.3 Sobremesa
Atributos
tipo
possuiEmbalagem
possuiDescartaveis
Métodos
adicionarEmbalagem()
adicionarDescartaveis()
calcularPrecoFinal()
exibirDescricao()


4. Pagamento
Atributos
valor
status
Métodos
processarPagamento()
cancelarPagamento()
exibirStatus()

4.1 Pix
Atributos
chavePix
Métodos
processarPagamento()
validarPagamento()

4.2 Dinheiro
Atributos
valorRecebido
Métodos
processarPagamento()
calcularTroco()

4.3 Cartão
Atributos
numeroCartao
bandeira
parcelas
Métodos
processarPagamento()
validarPagamento()

```



```
                           Cliente
                              │
                              ▼
                            Pedido
                       /              \
                      /                \
                   Produtos           Pagamento
                ┌──────┼──────┐       ┌───┼────┐
                ▼      ▼      ▼       ▼   ▼    ▼
        Hambúrguer Bebida Sobremesa  Pix Dinheiro Cartão




```

# Etapa 3 - Implementação do código


Agora vamos implementar a arquitetura planejada.

Durante a implementação, vamos identificar na prática:

Abstração: Quais características realmente precisamos representar?
Encapsulamento: Quais informações precisam ser protegidas?
Herança: Quais classes possuem características em comum?
Polimorfismo: Quais comportamentos podem existir em diferentes versões?

A implementação será construída junto adicionando os atributos e métodos definidos durante as etapas anteriores.

## Questão 3

Faça a definição das classes Pedido e Cliente 

## Questão 4 

Faça a definição das classes Produto, Bebida, Sobremesa e Hamburguer. 

## Questão 5
Faça a definição das classes Pagamento, Pix, Dinheiro e Cartao 