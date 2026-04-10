//crie o array dos produtos por departamento

let produtos = [
    {
        id: 1,
        nome: 'Notebook',
        preco: 2500,
        categoria: 'eletrônico'
    },
    {
        id: 2,
        nome: 'Smartphone',
        preco: 1500,
        categoria: 'eletrônico'
    },
    {
        id: 3,
        nome: 'Camisa',
        preco: 80,
        categoria: 'vestuario'
    },
    {
        id: 4,
        nome: 'Calcão',
        preco: 50,
        categoria: 'vestuario'
    },
    {
        id: 5,
        nome: 'Teclado',
        preco: 100,
        categoria: 'eletrônico'
    },
    {
        id: 6,
        nome: 'Mouse',
        preco: 50,
        categoria: 'eletrônico'
    },
    {
        id: 7,
        nome: 'cadeira',
        preco: 800,
        categoria: 'mobilia'
    },
    {
        id: 8,
        nome: 'mesa',
        preco: 300,
        categoria: 'mobilia'
    },
    {
        id: 9,
        nome: 'cama',
        preco: 500,
        categoria: 'mobilia'
    },
    {
        id: 10,
        nome: 'estante',
        preco: 1200,
        categoria: 'mobilia'
    },
    {
        id: 11,
        nome: 'abajur',
        preco: 300,
        categoria: 'mobilia'
    }
];

//um array para eletronicos, vestuario e mobilia
let eletronicos = produtos.filter((itemArray)=> itemArray.categoria == 'eletrônico')

let vestuario = produtos.filter((itemArray)=> {
    if(itemArray.categoria == 'vestuario'){
        return itemArray
    }
})
let mobilia = produtos.filter((itemArray)=> {
    if(itemArray.categoria == 'mobilia'){
        return true
    }
})
//use o método filter para realizar a atividade
console.log(produtos, eletronicos, vestuario, mobilia)

