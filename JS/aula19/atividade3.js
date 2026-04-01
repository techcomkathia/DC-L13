let produto = {
    nome: 'Computador',
    marca: 'Dell',
    preco: 3000,
    estoque: 10,
    descricao: 'Computador de alta performance para jogos e trabalho',
    categoria: 'Eletrônicos'
}

//mostre no terminal as informações no seguinte formato :
// chave e valor
//utilize o laço for in para percorrer o objeto e mostrar as informações
//exemplo:
// nome: Computador
// marca: Dell
// preco: 3000
for(let propriedade in produto){
    console.log(`${propriedade} : ${produto[propriedade]}`);
    console.log(propriedade + ' : ' + produto[propriedade]);
}

//verifique se existe a propriedade cores, caso exista mostre o valor dela, caso contrário mostre a mensagem: "A propriedade cores não existe no objeto produto" ao final do código
//DICA: utilize o método Object.keys(), que retorna um array e para esse array use o método includes para verificar se a chave existe. Use a condicional if para verificar se a chave existe no objeto

//1º passo : ter o array de chaves do objeto
let chavesProduto = Object.keys(produto);
console.log(chavesProduto);

//2º passo: verificar se existe a propriedade cores
//2 possibilidades: exite ou não existe
if(chavesProduto.includes('cores')){ //caso o método retorne true
    console.log(`cores: ${produto.cores}`);}
else{
    console.log("A propriedade cores não existe no objeto produto");
}