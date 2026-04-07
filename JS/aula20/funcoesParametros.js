function somar(num1, num2){
    console.log(num1 + num2);
    //recebe 2 numeros e mostra no console o resultado da soma
}

somar(100,2)
//passagem de parâmetros no js é posicional
//o primeiro valor é atribuido ao primeiro parâmetro, o segundo valor é atribuido ao segundo parâmetro e assim por diante
somar(2)
//se um parâmetro não receber um valor, ele recebe o valor undefined
//2 + undefined = NaN 
let x = 2
somar(x, 3, 4)
//o terceiro valor é ignorado, pois a função só tem 2 parâmetros




//valor padrão para parâmetros
function multiplicar(num1, num2 = 1){
    console.log(num1 * num2);
    //recebe 2 numeros e mostra no console o resultado da multiplicação
    //se o segundo parâmetro não receber um valor, ele recebe o valor padrão 1
}

multiplicar(5, 2) //informando os 2 parâmetros, o valor do segundo é sobrescrito por 2
multiplicar(5) //informando apenas o primeiro parâmetro, o valor do segundo é o valor padrão 1