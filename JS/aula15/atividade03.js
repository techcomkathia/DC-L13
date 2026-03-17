// escreva um loop for que mostre todos os números pares de 0 a 10
//utilize o operador % para verificar se o número é par ou ímpar, com a condional if 
// numero%2 == 0 é par, deverá ser mostrado no console.

//o laço será executado 11x
//trocar os números por 'Olá mundo'

//1º declaração e atribuição de valor ao contador
// condição de parada ( teste lógico que retorna true/false)
// atualização de valor do contador 

for(let contador=0; contador<=10; contador++){
    //par ou ímpar
    //caso par: mostrar no console
    //caso ímpar: não faz nada
    if(contador%2==0){ 
        console.log(contador)
    }
}
console.log('saí do laço for')

//0%2 = 0
//1%2 = 1
//2%2 = 0
//3%2 = 1
//4%2 = 0
