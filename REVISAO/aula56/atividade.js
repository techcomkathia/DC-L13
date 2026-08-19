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
        this.#endereco = endereco;
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
    constructor(cliente,numero, produtos=[], pagamento){
        this.numero = numero;
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
        //todos os produtos possuem o metodo calcularPrecoFinal, ajuda o polimorfismo para fazer o calculo considerando que existem diferentes tipos de produtos e suas regras
        return this.#produtos.reduce((total, produto) => total + produto.calcularPrecoFinal(), 0);
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


/*Produto, Bebida, Sobremesa e Hamburguer*/


/*3. Produto
Atributos
nome
preco
Métodos
calcularPrecoFinal()
exibirDescricao()*/

// abstração



class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    calcularPrecoFinal(desconto=0){
        return this.preco - (this.preco * desconto);
    }

    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.preco}`)
    }
}

/*3.2 Bebida
Atributos
tamanho
possuiGelo
Métodos
adicionarGelo()
removerGelo()
calcularPrecoFinal()
exibirDescricao()
*/

//heranca e polimorfismo
class Bebida extends Produto{
    constructor(nome, preco, tamanho, possuiGelo=false){
        super(nome, preco);
        this.tamanho = tamanho;
        this.possuiGelo = possuiGelo;
    }

     
    adicionarGelo(){
        this.possuiGelo = true;
    }

    removerGelo(){
        this.possuiGelo = false;
    }

    //polimorfismo
    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.preco}, Tamanho: ${this.tamanho}, Possui gelo: ${this.possuiGelo}`)
    }

}

/*3.1 Hambúrguer
Atributos
tipoPao
adicionais
Métodos
adicionarAdicional()
removerAdicional()
calcularPrecoFinal()
exibirDescricao()*/
class Hamburguer extends Produto{
 constructor(nome, preco, tipoPao, adicionais=[]){
    super(nome, preco);
    this.tipoPao = tipoPao;
    this.adicionais = adicionais;
    this.precoFinal = preco;
 }

    adicionarAdicional(adicional){
        //queijo, ovos, bacon, hamburger
        switch(adicional){
            case 'queijo':
                this.adicionais.push({
                    tipo: 'queijo',
                    preco: 3
                });
                break;
            case 'ovos':
                this.adicionais.push({
                    tipo: 'ovos',
                    preco: 2
                });
                break;
            case 'bacon':
                this.adicionais.push({
                    tipo: 'bacon',
                    preco: 4
                });
                break;
            case 'hamburger':
                this.adicionais.push({
                    tipo: 'hamburger',
                    preco: 7
                });
                break;
            default:
                console.log('Adicional nao encontrado');
        }
    }

    removerAdicional(tipoAdicional){
        //buscar pelo atributo tipo
        //buscar o indice do adicional pelo atributo e fazer a exclusão
        const adicional = this.adicionais.find(adicional => adicional.tipo === tipoAdicional);
        if(!adicional){
            console.log('Adicional nao encontrado');
            return;
        }
        
        this.adicionais.splice(this.adicionais.indexOf(adicional), 1);
    }

    calcularPrecoFinal(){
        //verifica se existe adicional e soma o preco
        let precoFinal = this.preco;
        if(this.adicionais.length > 0){
            precoFinal += this.adicionais.reduce((total, adicional) => total + adicional.preco, 0);
        }
        this.precoFinal = precoFinal;
        return precoFinal;   
    }

    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.preco}, Tipo de pao: ${this.tipoPao}, Adicionais: ${this.adicionais.map(adicional => adicional.tipo)}, Preço final: ${this.precoFinal}`)
    }

}


/*3.3 Sobremesa
Atributos
tipo
possuiEmbalagem
possuiDescartaveis
Métodos
adicionarEmbalagem()
adicionarDescartaveis()
calcularPrecoFinal()
exibirDescricao()*/

class Sobremesa extends Produto{
    constructor(nome, preco, tipo, possuiEmbalagem=false, possuiDescartaveis=false){
        super(nome, preco);
        this.tipo = tipo;
        this.possuiEmbalagem = possuiEmbalagem;
        this.possuiDescartaveis = possuiDescartaveis;
    }

    adicionarEmbalagem(){
        this.possuiEmbalagem = true;
    }

    adicionarDescartaveis(){
        this.possuiDescartaveis = true;
    }


    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.preco}, Tipo: ${this.tipo}, Possui embalagem: ${this.possuiEmbalagem}, Possui descartaveis: ${this.possuiDescartaveis}`)
    }
}

/*4. Pagamento
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
validarPagamento()*/

class Pagamento {
    constructor(valor) {
        this.valor = valor;
        this.status = 'Pendente';
    }

    processarPagamento() {
        this.status = 'Pago';
        return 'Pagamento processado com sucesso';
    }

    cancelarPagamento() {
        if (this.status === 'Pago') {
            this.status = 'Cancelado';
            return 'Pagamento cancelado';
        }

        return 'Não é possível cancelar um pagamento que não foi realizado';
    }

    exibirStatus() {
        return `Valor: R$ ${this.valor}, Status: ${this.status}`;
    }
}




class Pix extends Pagamento {
    constructor(valor, chavePix) {
        super(valor);
        this.chavePix = chavePix;
    }

    validarPagamento() {
        if(this.chavePix !== '') {
            return true;
        }
        return false;
    }

    processarPagamento() {
        if (!this.validarPagamento()) {
            return 'Chave Pix inválida';
        }

        this.status = 'Pago';

        return `Pagamento de R$ ${this.valor} realizado via Pix`;
    }
}

class Dinheiro extends Pagamento {
    constructor(valor, valorRecebido) {
        super(valor);
        this.valorRecebido = valorRecebido;
    }

    calcularTroco() {
        return this.valorRecebido - this.valor;
    }

    processarPagamento() {
        if (this.valorRecebido < this.valor) {
            return 'Valor recebido insuficiente';
        }
        else if(this.valorRecebido > this.valor) {
            this.status = 'Pago';
            return 'Troco: R$ ' + this.calcularTroco();
        }

        this.status = 'Pago';

        return `Pagamento realizado.`;
    }
}


class Cartao extends Pagamento {
    constructor(valor, numeroCartao, bandeira, tipo, parcelas = 1) {
        super(valor);
        this.numeroCartao = numeroCartao;
        this.bandeira = bandeira;
        this.tipo = tipo;
        this.parcelas = parcelas;
    }

    validarPagamento() {
        const tiposValidos = ['debito', 'credito'];

        return (
            this.numeroCartao.length >= 4 &&
            tiposValidos.includes(this.tipo)
        );
    }

    processarPagamento() {
        if (!this.validarPagamento()) {
            return 'Dados do cartão inválidos';
        }

        if (this.tipo === 'debito') {
            this.status = 'Pago';

            return `Pagamento de R$ ${this.valor} realizado no cartão de débito`;
        }

        this.status = 'Pago';

        return `Pagamento de R$ ${this.valor} realizado no cartão de crédito em ${this.parcelas}x`;
    }
}


/* Cliente */

const cliente = new Cliente(
    'Maria',
    '82999999999',
    'Rua das Flores, 100'
);


/* Produtos */

const hamburguer = new Hamburguer(
    'X-Bacon',
    25,
    'Brioche'
);

hamburguer.adicionarAdicional('bacon');
hamburguer.adicionarAdicional('queijo');


const bebida = new Bebida(
    'Coca-Cola',
    8,
    '500ml'
);

bebida.adicionarGelo();


const sobremesa = new Sobremesa(
    'Brownie',
    12,
    'Chocolate'
);

sobremesa.adicionarEmbalagem();
sobremesa.adicionarDescartaveis();


/* Pedido */

const pedido = new Pedido(
    cliente,
    1
);

pedido.adicionarProduto(hamburguer);
pedido.adicionarProduto(bebida);
pedido.adicionarProduto(sobremesa);


/* Pagamento via Pix */

const pagamentoPix = new Pix(
    pedido.calcularTotal(),
    'adashd,jadbn,asnd,mand,masmd.,ada,md,asd,adjmahdjkah'
);

pedido.adicionarMetodoPagamento(pagamentoPix);


/* Processando pagamento */

console.log(pagamentoPix.processarPagamento());


/* Finalizando pedido */

pedido.finalizarPedido();
