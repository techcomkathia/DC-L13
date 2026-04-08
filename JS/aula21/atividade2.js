//crie uma função que receba um callback e um array. 
//Essa função deve percorrer todo array e executar a função callback para cada elemento do array.
//Exemplo: função dobrar como callback
// minhaFuncao(dobar, [1,2,3])
// Mostrar cada item no console, dobrado, ou seja, 2, 4, 6 e retornar o array dobrado [2,4,6]

//Dicas: para o loop for use a propriedade length do array para determinar quantas vezes o laço será repetido
//utilize o indice para acessar cada item do array : array[indice]
// para construir o array dobrado use o método push para adicionar o item dobrado ao novo array

function manipularArray(callback, array ){
    let novoArray = []

    for(let i=0 ; i < array.length ; i++){
        
        //criar o elemento modificado
        let novoElemento = callback(array[i])
        console.log(novoElemento)
        //adicionar o novo elemento modificado pela função no novo array
        novoArray.push(novoElemento)
    }

    return novoArray
}

function dobrar(item){
  return item*item
}

let resultado = manipularArray(dobrar, [1,2,3])
console.log(resultado)


//OUTRA FORMA (resolução por Jonas Silva)
// Função que recebe um callback e um array
function percorrerArray(callback, array) {
    let novoArray = [];
    
    // Usa a propriedade length para determinar quantas vezes o laço repete
    for (let indice = 0; indice < array.length; indice++) {
        // Acessa cada item do array usando o índice
        let elemento = array[indice];
        
        // Executa a função callback para esse elemento
        let resultado = callback(elemento);

        // Mostra no console cada item dobrado
        console.log(resultado);
        
        // Adiciona o resultado ao novo array usando push
        novoArray.push(resultado);
    }
    
    return novoArray;
}

// Testando a função
let arrayOriginal = [1, 2, 3];
console.log("Array original:", arrayOriginal);

let arrayDobrado = percorrerArray(dobrar, arrayOriginal);
console.log("Array dobrado:", arrayDobrado);