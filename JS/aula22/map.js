let numeros = [1,2,3,4,5,6,7,8,9,10]

//produzir um array de números dobrados (numero * 2) podemos ter duas abordagens:
// laço for
let numerosDobro=[]

for(let i = 0; i < numeros.length; i++){
    numerosDobro.push(numeros[i] * 2) //insere no final do array o valor dobrado 
}
console.log(numerosDobro)

// utilizando o método map
let numerosDobro2 = numeros.map((elementoArray)=>{
    return elementoArray * 2
})

console.log(`Array original: ${numeros} `) //Array original: (7) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (numeros)
console.log(`Array dobrado: ${numerosDobro2} `) //Array dobrado: (7) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] (numerosDobro2)


