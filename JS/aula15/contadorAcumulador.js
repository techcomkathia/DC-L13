//some todos os numeros de 1 a 10 

//contador ( que varia de 1 a 10 e é a condição de parada do laço) 
// acumulador ( que vai acumulando a soma dos numeros que já foram mostrados no console, valores do contador)

//contador = 1
//acumulador = 1
// [...]
//contador = 9
//acumulador = 36 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45

let contador = 1
let acumulador = 0

while(contador <= 10){
    //mostrar no console
    console.log(contador)
    //somar ao valor anterior do acumulador o valor do contador
    acumulador = acumulador + contador
    //acumulador += contador

    //atualizar o valor do contador para que o laço seja finalizado em algum momento
    contador++
}

console.log('A soma dos números de 1 a 10 é: ' + acumulador)