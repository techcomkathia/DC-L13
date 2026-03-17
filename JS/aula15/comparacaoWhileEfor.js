/*let contador = 0
while(contador <= 10){
    console.log(contador)
    //atualizar o valor do contador / condição de parada
    contador++
}
console.log('Fim do laço de repetição while')

//laço de repetição for
for(let contador = 0; contador <= 10; contador++){
    console.log(contador)
}
console.log('Fim do laço de repetição for')*/


// escreva um loop for que mostre todos os números pares de 0 a 10
//utilize o operador % para verificar se o número é par ou ímpar, com a condional if 
// numero%2 == 0 é par, deverá ser mostrado no console.


//leia 10 notas de um aluno e mostre a média no console
let soma = 0;
for(let contador = 1; contador <= 10; contador++){
    let nota = Number(prompt(`Digite a nota ${contador}:`))
    soma += nota //soma = soma + nota
}
let media = soma / 10


//somatório de uma conta de supercado
//o caixa não sabe quantos produtos o cliente irá comprar, mas ele sabe que o cliente irá digitar 0 para finalizar a compra
//se o preço for acima dos 500 tem um desconto de 2%
let total = 0;
let preco = Number(prompt('Digite o preço do produto (0 para finalizar):')) //100

while(preco!==0){ //100
    //tem desconto -> preco>500
    if(preco>500){
        preco = preco*0.98
        //preço atualizado com desconto será somado
        total += preco
    }
    else{
        //não tem desconto
        total += preco
    }
    
    preco= Number(prompt('Digite o preço do produto (0 para finalizar):'))
}

//100
//100+100
//100+100+100
