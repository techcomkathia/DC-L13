//é possivel criar um array que contenha outros arrays, ou seja, um array de arrays.
//exemplo: matriz 3x3
let matriz = [
    [1, 2, 3], // 2 tem o indice 1 dentro desse array
    [4, 5, 6], //
    [7, 8, 9]  //
]

//como acessar o segundo valor do primeiro item de um array de arrays?
console.log(matriz[0])
console.log(matriz[0][1])

//uma matriz com infomações de alunos
let alunos = [
    ['João', 10, "manhã"], 
    ['Maria', 9, "tarde"], 
    ['Pedro', 8, "manhã"],  
    ['Ana', 7, "tarde"],
    ['Paulo', 6, "manhã"]
]

//como mostrar o turno que estuda a aluna Ana?
console.log(alunos[3])
console.log(alunos[3][2])

//alunos com notas
let alunos2 = [
    ['João', 10, "manhã", [9, 10, 8]], 
    ['Maria', 9, "tarde",[8, 9, 10]], 
    ['Pedro', 8, "manhã",[7, 8, 9]],  
    ['Ana', 7, "tarde",[6, 7, 8]],
    ['Paulo', 6, "manhã",[5, 6, 7]]
]
//como mostrar a segunda nota do aluno Maria?
console.log(alunos2[1])
console.log(alunos2[1][3])
//modificar a primeira nota da Maria
alunos2[1][3][0] = 10
console.log(alunos2[1][3])

