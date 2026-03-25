// Crie um array vazio chamado aluno 
let aluno= []
// Peça 3 notas e um nome para o usuário. Adicione todas essas informações em um array. 

aluno[0]= Number(prompt('Digite a primeira nota'))
console.log(aluno)
aluno[1]= Number(prompt('Digite a segunda nota'))
console.log(aluno)
aluno[2]= Number(prompt('Digite a terceira nota'))
console.log(aluno)
aluno[3]= prompt('Digite o nome do aluno')

// Imprima todas as informações acessando diretamente a variável do array ( todas elas juntas)
console.log(aluno) //todo o array

// Faça o cálculo da média das notas e adicione ao final do array. 
aluno[aluno.length]= (aluno[0] + aluno[1] + aluno[2])/3 //adicionado como 5º elemento do array
console.log(aluno)