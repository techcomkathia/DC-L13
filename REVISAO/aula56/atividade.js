/*1. Cliente
Atributos
nome
telefone
endereco
Métodos
atualizarEndereco()
exibirDados()*/

class Cliente{
    #endereco
    constructor(nome, telefone, endereco){
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    atualizarEndereco(endereco){
        this.#endereco = endereco;
    }

    exibirDados(){
        return(`Nome: ${this.nome}, Telefone: ${this.telefone}, Endereco: ${this.#endereco}`)
    }
}


/*2. Pedido
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
exibirResumo()*/

class Pedido{
    #produtos
    constructor(cliente, produtos=[], pagamento){
        this.cliente = cliente;
        this.#produtos = produtos;
        this.pagamento = pagamento;
        this.status = 'Aberto';
    }

    //setProdutos
    adicionarProduto(produto){
        this.#produtos.push(produto);
    }

    //setProdutos
    removerProduto(produto){
        this.#produtos.splice(this.#produtos.indexOf(produto), 1);
    }

    //getProdutos
    listarProdutos(){
        return this.#produtos;
    }

    calcularTotal(){
        return this.#produtos.reduce((total, produto) => total + produto.preco, 0);
    }

    adicionarMetodoPagamento(pagamento){
        this.pagamento = pagamento;
    }

    finalizarPedido(){
        if(this.status === 'Aberto'){
            console.log('Pedido finalizado')
            this.status = 'Finalizado'
        }
        else{
            console.log('Pedido ja foi finalizado')
        }
        
    }

    exibirResumo(){
        return(`Cliente: ${this.cliente}, Produtos: ${this.#produtos}, Pagamento: ${this.pagamento}, Status: ${this.status}`)
    }
}    