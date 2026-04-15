// selecionar os LIs da página

const LIs = document.getElementsByTagName('li') //html collection
//transformação do html collection em array
const arrayLIs = Array.from(LIs)
//const arrayLIs = [...LIs] //spread operator

//vamos utilizar o forEach para percorrer o array aplicando uma função de callback a cada um dos itens do array. 
//o forEach não altera o array original e nem retorna nenhum valor, será escolhido pois a necessidade é apenas de manipulação de cada um dos objetos do array

arrayLIs.forEach((item, indexElemento)=>{
    //temos duas possibilidades: onde a data é inferior ou igual dia 05 ou não 
    if(indexElemento<=4){
        // caso seja menor ou igual concatenar o texto disponívek
        item.innerText+= " - Disponível"
    }
    else{
        item.innerText+= " - Indisponível"
    }
})