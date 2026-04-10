let numeros = [1,2,3,4,5,6,7,8,9,10]
let itens = [
    {nome: 'arroz', preco: 10},
    {nome: 'feijão', preco: 8},
    {nome: 'macarrão', preco: 5}
]

let totalNumeros =  numeros.reduce((total, elementoArray) => {
    total += elementoArray * 2
    return total
})

let totalPrecosItens = itens.reduce((total, elementoArray) => {
    total += elementoArray.preco
    return total
})

// podemos dar um valor inicial ao acumulador
let totalPrecosItens2 = itens.reduce((total, elementoArray) => {
    total += elementoArray.preco
    return total
}, 100) //será a soma dos preços dos itens mais 100
//em situações onde valores iniciais são conhecidos, podemos dar um valor inicial ao acumulador

