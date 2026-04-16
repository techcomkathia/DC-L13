//selecionando a primeira ocorrência
let primeiroH2 = document.querySelector('.lista')
//retornar um objeto HTML
console.log(primeiroH2);

//selecionando TODAS as ocorrências
let todosH2 = document.querySelectorAll('.lista')
//retornar um NodeList
console.log(todosH2);
//Principal diferença entre o htmlCollection e nodeList: htmlCollection pode ser convertido em nodeList, mas nodeList não pode ser convertido em htmlCollection
//o nodeList é mais eficiente em termos de performance porque ele trabalha com arrays internamente, enquanto o htmlCollection trabalha com arrays externamente
//o nodelist mesmo trabalhando com arrays internamente não tem acesso aos métodos e propriedades do array nativo
//desestruturando o nodeList ou convertendo em array
let listaH2 = [...todosH2]
//ou
//let listaH2 = Array.from(todosH2)

listaH2.map((item)=>{
    item.style.color = 'red'
})