let objeto={
    cor: 'azul',
    forma: 'quadrado',
    tamanho: 'grande',
    material: 'plástico'
}

//todas as chaves do objeto
let chavesPropriedades = Object.keys(objeto); //retorna um array com as chaves do objeto
console.log(chavesPropriedades);
console.log(chavesPropriedades.includes('preco'))
objeto.preco = 10
console.log(objeto)
//criar uma nova propriedade 
objeto.tamanho = '100cm'
console.log(objeto)

//todos os valores do objeto
let valoresPropriedades = Object.values(objeto); //retorna um array com os valores do objeto
console.log(valoresPropriedades);


let coisa = {
    nome: 'coisa',
    tipo: 'coisado',
    cor: 'preto',
    tamanho: 'médio'
}


//for para objetos  (for in)
for (let x in coisa) {
    console.log(coisa[x]); //imprime a chave
}