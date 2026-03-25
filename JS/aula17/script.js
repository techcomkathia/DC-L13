let x = 'uma informação' // string
console.log(x)
x = 10 // number
console.log(x)

let y= [] //array vazio
console.log(y)
y = ['Cleitinho', 'gato', 'laranha', 14, true] //array com vários tipos de dados diferentes (inclusive outro array, diversos tipos de dados)
console.log(y)
console.log(y[0])
console.log(y[1])
console.log(y[2])
console.log(y[3])
console.log(y[4])

//Crie um array com as seguintes informações: nome, idade, cidade, profissão, estado civil. Depois imprima cada uma dessas informações usando o índice do array no seguinte formato:
//Nome: variavel[indice]
//Idade: variavel[indice]
//Cidade: variavel[indice]
//Profissão: variavel[indice]
//Estado Civil: variavel[indice]

//inserir informações no array a partir do prompt
let notas= []
//adicionar 3 notas no array de notas
notas[0] = Number(prompt('Digite a primeira nota:'))
notas[1] = Number(prompt('Digite a segunda nota:'))
notas[2] = Number(prompt('Digite a terceira nota:'))
console.log(notas)
//atualizar a primeira nota
notas[0] = Number(prompt('Digite a nova primeira nota:'))
console.log(notas)

//adicionando um elemento no final do array
notas[notas.length] = 7.5
console.log(notas)
//ou utilizar a propriedade length