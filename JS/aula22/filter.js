let numeros = [1,2,3,4,5,6,7,8,9,10]

//criar um novo array apenas com os pares
let pares = numeros.filter((itemArray)=> itemArray % 2 == 0)

let pares2 = numeros.filter((itemArray)=>{
    if(itemArray % 2 == 0){
        return itemArray //terá sentido semelhante ao return true
    }
    else{
        return false
    }
})

console.log(numeros)
console.log(pares)
console.log(pares2)