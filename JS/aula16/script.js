// uma turma tem 10 alunos. Cada aluno possui 2 notas. Faça um programa que calcule a média de cada aluno e mostre no console.
// as duas notas dos alunos devem ser informadas pelo usuário

//while -> sempre pode ser usado nas duas situações. Porém é mais indicado para quando não sabemos o número de repetições. Exemplo: ler um número do usuário e repetir até que ele digite um número negativo.
//for -> é mais indicado para quando sabemos o número de repetições. A sua estrutura é mais compacta e fácil de ler. Exemplo: ler as notas de 10 alunos.

/*let quantidadeAlunos = 3
// contador/iterador
// condição
// a atualização do contador
for(let i = 1; i <= quantidadeAlunos; i++ ){
    let nota1 = Number(prompt(`Digite a primeira nota do ${i}º aluno`))
    let nota2 = Number(prompt(`Digite a segunda nota do ${i}º aluno`))

    let media = (nota1 + nota2) /2
    console.log(`A média do ${i}º aluno é ${media}`)
}*/

//faça um programa que contabilize quantas tentativas foram necessarias para um usuário acertar um número sorteado entre 1 e 10. O programa deve informar o número de tentativas e o número sorteado.

/*let numeroUsuario = Number(prompt('Digite um número de 1 a 10'))
let contadorDeTentativas = 1 //pois a primeira leitura já é contabilizada
let numeroSorteado = 7
while(numeroUsuario != numeroSorteado){
    //enquanto o usuario não acertar ( o número for diferente do sorteado), o laço é repetido. Pedindo um novo valor e contabilizando uma nova tentativa
    alert('Número errado, tente novamente')
    numeroUsuario = Number(prompt('Digite um número de 1 a 10'))
    //adicionar mais uma tentativa ao contador
    contadorDeTentativas++
    //iterador é o numeroUsuario, pois ele é atualizado a cada novo laço
    //contador é o contadorDeTentativas, pois ele é atualizado contando cada vez que o laço é repetido
}

alert(`Parabéns, você acertou o número ${numeroSorteado} em ${contadorDeTentativas} tentativas!`)*/


// --------------------CONDICIONAIS-------------------

//uma condição ou outra (apenas duas possibilidades)
//ou um número é par ou é ímpar
/*let numero = 633
//se o número for divisível por 2 com resto 0, ele é par. Caso contrário, ele é ímpar
if(numero % 2 === 0){
    //executado se a condição for verdadeira
    console.log(`O número ${numero} é par`)
}
else{
    //executado se a primeira condição for falsa
    console.log(`O número ${numero} é ímpar`)
}*/

//situação com mais de duas possibilidades
//sistema que tem 4 opções
// 5º opção será o tratamento de erro, caso o usuário digite uma opção inválida
/*let usuarioOpcao = Number(prompt('Digite uma opção de 1 a 4'))*/



if(usuarioOpcao === 1){
 alert('Opção 1 selecionada')
}
else if(usuarioOpcao === 2){
 alert('Opção 2 selecionada')
}
else if(usuarioOpcao === 3){
 alert('Opção 3 selecionada')
}
else if(usuarioOpcao === 4){
 alert('Opção 4 selecionada')
}
else{
    alert('Opção inválida, por favor digite um número de 1 a 4')
}


// trabalhando com mais de uma condição ao mesmo tempo
//um número positivo e par (and / e / && - as duas condições precisam ser verdadeiras )
//um número par e divisível por 5 ao mesmo tempo (and / e / && - as duas condições precisam ser verdadeiras )
//um número ímpar ou negativo (or/ ou / || - apenas uma das condições precisa ser verdadeira para que a mensagem seja exibida) 
//caso nenhuma das 3 possibilidades seja verdadeira, exibir uma mensagem de erro (else)

let numero = 0.56

if(numero > 0 && numero % 2 === 0){
    alert(`O número ${numero} é positivo e par`)
}
else if(numero % 2 === 0 && numero % 5 === 0){
    alert(`O número ${numero} é par e divisível por 5`)
}
else if(numero % 2 === 1 || numero < 0){
    alert(`O número ${numero} é ímpar ou negativo`)
}
else{  
    alert(`O número ${numero} não atende a nenhuma das condições da questão`)
}