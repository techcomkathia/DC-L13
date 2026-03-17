//Escreva um loop while que exiba os números de 0 ao número passado pelo usuário (utilize prompt)

let numero = parseInt(prompt('Digite um número maior que 0: ')) //4

let contador = 0

while(contador <= numero){
    console.log(contador)
    contador= contador + 1
    //contador++ ( só pode ser usado quando o incremento for 1) para diminuir usar o --
    //contador += 1
    
}

//0 true
//1 true
//2 true
//3 true
//4 true

//5 laço é finalizado
