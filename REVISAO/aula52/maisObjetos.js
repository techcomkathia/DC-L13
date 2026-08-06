//copias de objetos no js são por referência, ou seja, se o objeto original for modificado, o objeto copiado também será modificado
//modificando o objeto copiado, a modificação também irá alterar o objeto original

let coisa = {
    nome: 'coisa',
    quantidade: 10
}

let outraCoisa = coisa;

console.log(coisa)
console.log(outraCoisa)

//alterar a quantidade da cópia
outraCoisa.quantidade = 20;
console.log(coisa)
console.log(outraCoisa)

//como copiar sem manter a "ligação" entre os objetos? utiliza-se o operador spread (...)

const copiaCorretaCoisa = {...coisa}
copiaCorretaCoisa.quantidade = 30
console.log(coisa)
console.log(copiaCorretaCoisa)
copiaCorretaCoisa.novaProps = 'teste'

console.log(coisa)
console.log(copiaCorretaCoisa)
copiaCorretaCoisa = 'novo valor'


const bancoDados1={
    produtos: [],
    quantidadeProdutos:this.produtos.length,
    adicionarProduto: function (objProduto){
    //validar atributos obrigatórios
    if(!objProduto.nome || !objProduto.descricao || !objProduto.preco || !objProduto.quantidade){
        throw new Error('Objeto de produto incompleto. Informar atributos obrigatórios: nome, descricao, preco e quantidade');
    }

    //validar valores de preco e quantidade
    if(objProduto.preco <= 0 || objProduto.quantidade <= 0){
        throw new Error('Objeto de produto não é valido. Preço e quantidade devem ser maiores que zero');
    }

    const novoProd = {
        nome:objProduto.nome, 
        descricao:objProduto.descricao, 
        preco:objProduto.preco, 
        quantidade:objProduto.quantidade, 
        disponivel:true
    }

    // AGORA O BANCO NÃO SERÁ UMA VARIÁVEL EXTERNA E SIM UMA PROPRIEDADE DESSE MESMO OBJETO
    this.produtos.push(novoProd);
    console.log(this.produtos);
    return {mensagem:'Objeto adicionado ao banco de dados', objetoAdicionado:novoProd};
}
   
}

// Faça a modificação da função adicionarProduto para que ela não utilize uma variável externa e sim uma propriedade desse mesmo objeto. Em todos os locais onde a variável externa era usada, use a propriedade do objeto.
//teste 2x. Um caso de sucesso e um de erro