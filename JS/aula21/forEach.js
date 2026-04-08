let numeros = [1,2,3,4]

//mostrar todos os itens no console ao quadrado
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i] ** 2)
}


//método forEach é utilizado para aplicar uma função de callback em cada elemento do array
//método não altera o array original e nem retorna nenhum valor

numeros.forEach((itemArray)=> console.log(itemArray ** 2))

//mostre no console apenas os números pares
let retorno = numeros.forEach((itemArray)=> {
    if(itemArray % 2 == 0){
        console.log(itemArray)
    }
})

console.log(numeros)
console.log(retorno)


