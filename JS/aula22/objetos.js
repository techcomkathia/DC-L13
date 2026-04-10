let obj1 = {
    nome: 'João',
    idade: 20
}

console.log(obj1)

let obj2 = {... obj1}

console.log(obj2)
//modificação do valor do nome do objeto 2
obj2.nome = 'Maria'
console.log('objeto 2', obj2)
console.log('objeto 1', obj1)