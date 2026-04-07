//Objetivo; explorar os conceitos de funções sem parâmetros e sem retornos 

//faça uma função que recebe como parâmetro 1 array. 
// Essa função vai mostrar quantos elementos esse array possui e depois deverá executar um loop para mostrar no console cada elemento do array.

//Dica: use a length do array  para saber quantos elementos ele possui, use o loop for para percorrer o array e mostrar cada elemento no console

function detalharArray(array = []){
    console.log(`O array possui ${array.length} elementos.`);
    let tamanho = array.length;

    for(let i = 0; i < tamanho; i++){
        console.log(`Elemento ${i + 1}: ${array[i]}`);
    }
}

let arrayExemplo = [ 'um', 'dois', 'três', 'quatro', 'cinco' ];

detalharArray(arrayExemplo);
detalharArray() //sem informar o parâmetro, utilizamos o valor padrão do parâmetro, que é um array vazio.

