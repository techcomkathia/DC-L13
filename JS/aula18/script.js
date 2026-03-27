let pessoa = ['Cleitinho', 30, 'Masculino', 'Programador']

console.log(pessoa[0]) //acesso
console.log(pessoa)
pessoa[1] = 31 //alteração
console.log(pessoa)

//inserção de um novo elemento através do índice
pessoa[4] = 'Casado'
console.log(pessoa)

//utilizar a propriedade length para inserir um novo elemento
pessoa[pessoa.length] = 'Brasileiro'
console.log(pessoa)



//inserindo uma informação em um índice que é muito distante do último índice
pessoa[10] = 'Brasileiro'
console.log(pessoa)

//laço for para os arrays
for(let i = 0; i < pessoa.length; i++){
    console.log(pessoa[i])
}

pessoa[0]= "nova informação adicionada no início"
console.log(pessoa)

console.log(10.888.toFixed(2)) //arredondamento de casas decimais