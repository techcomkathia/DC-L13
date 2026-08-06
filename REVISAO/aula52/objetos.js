const fruta={
    nome: 'Banana',
    preco: 5.00,
    estado: 'madura',
    quantidade: 10
}

console.log(`chaves: ${Object.keys(fruta)}`); 
console.log(`valores: ${Object.values(fruta)}`); 


//usando laço de repetição for em objetos-> for in

for(let i in fruta){
    console.log(`chave: ${i}, valor: ${fruta[i]}`)
    console.log(`chave: ${i}, valor: ${fruta.i}`)
}

//você vai receber um produto que deve ser adicionado a um "banco de dados". Esse banco de dados será um array. O objeto para ser adicionado ao banco deve ter os seguintes atributos: nome, descricao, preco,quantidade. Caso algum dos atributos obrigatórios não seja informado no objeto recebido como parâmetro da função, retorne um erro personalizado. 
//Caso o preço ou a quantidade sejam informados com valores nulos, indefinidos, zero ou negativos, retorne um erro personalizado.
//caso o objeto passe por todos as validacoes, adicione um atributo disponivel: true e insira o objeto no banco de dados.Retorne um objeto com 2 atributos: mensagem e objeto adicionado.
//DICA: para adicionar o objeto ao banco de dados, use o método push do array

let bancoDados=[{nome:'banana', descricao:'fruta', preco:5.00, quantidade:10, disponivel:true}];

function adicionarProduto(objProduto){
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

    bancoDados.push(novoProd);
    console.log(bancoDados);
    return {mensagem:'Objeto adicionado ao banco de dados', objetoAdicionado:novoProd};
}


try{
    const res = adicionarProduto({nome:'banana', descricao:'fruta',preco:5.00, quantidade:10,outroAtributo:'teste'});
    console.log(res);
}
catch(e){
    console.log(e.message);
}