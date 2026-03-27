/*let letras = []
let numeros = [2,3,4,5,6,7,8,9]

//INSERIR ELEMENTOS EM UM ARRAY
//push -> inserir no final do array
console.log(numeros)
numeros.push(10)
console.log(numeros)
//unshift -> inserir no início do array
numeros.unshift(0)
console.log(numeros)
numeros.unshift(1)
console.log(numeros)

numeros[0] = 0
console.log(numeros)
numeros[1] = 1
console.log(numeros)

//EXCLUIR ELEMENTOS DE UM ARRAY
//pop -> excluir o último elemento do array
//shift -> excluir o primeiro elemento do array
let excluidoDoInicio = numeros.shift()
console.log(numeros)
console.log(excluidoDoInicio)

let excluidoDoFim = numeros.pop()
console.log(numeros)
console.log(excluidoDoFim)*/

let pessoas = ["João", "Ana", "Maria", "Pedro", "Ana", "Lucas", "Ana", "Cleitinho"]
//posição da ana na fila'
console.log(pessoas)
let posicao = pessoas.indexOf("Ana")
console.log(posicao)
//a ultima ocorrência da ana na fila
let ultimaPosicao = pessoas.lastIndexOf("Ana")
console.log(ultimaPosicao)
console.log(pessoas)
//fazer a remoção da ana da fila
pessoas.splice(3, 2)
console.log(pessoas)