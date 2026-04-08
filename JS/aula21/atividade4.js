//para o array a seguir mostre no console apenas os elementos que não forem números
let array = [1,'a',3,4,'b',5,'1','!']
//utilize o método forEach e uma função de callback para resolver esse problema

array.forEach((item)=>{  

    if(isNaN(item)){
        console.log(item)
    }
})

//mostrar o array original que não foi modificado
console.log(array)