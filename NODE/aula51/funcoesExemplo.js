//3 funções com retornos diferentes para serem usadas nos arquivos de testes

function somar(a,b){
    return a+b
}

function montarProduto(nome, preco, quantidade){
    return{
        nome:nome,
        preco:preco,
        quantidade:quantidade,
        disponivel:true
    }
}

function palavraMaiuscula(palavra){
    return palavra.toUppercase()
}

module.exports ={ somar, montarProduto, palavraMaiuscula}