//utilize os métodos  utilize os métodos de array para realizar as seguintes operações
//1. Crie um array vazio e adicione os números de 1  ao número passado pelo usuário usando o método push (inserção no final do array) utilize um laço de repetição para isso


/*let numeros = Number(prompt('Digite o numero desejado'))
let num = []
//inicializando em 1 e incluindo o numero digitado pelo usuário (de 1 até o numero digitado)
for (let i = 1; i <= numeros; i = i + 1) {
    num.push(i);
    console.log(num)
}

console.log(num)*/




//2. Remova todos os itens do array ( do primeiro ao último) mostrando as letras no console após a remoção. Utilize o método shift (remoção do início do array)
let palavra1 = ['a','r','a','r','a']
let tamanho1 = palavra1.length //determinar quantas vezes o laço deve ser executado, ou seja, o número de itens do array

console.log(palavra1.length)

let letras2 = ['p','i', 'x']
let tamanho2 = letras2.length //3  1

for(let i=0; i < tamanho1; i++){
//variar 0 até 4 -> 5x ou 1 até 5 -> 5x
    let removido = palavra1.shift()
    console.log(removido)
} 
console.log(palavra1)

for(let i=0; i < tamanho2; i++){
//de 0 até 2 ou de 1 até 3 -> 3x
    let removido = letras2.shift()
    console.log(removido)
} 
console.log(letras2)