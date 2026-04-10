//O Cleitinho decidiu atribuir um desconto ainda maior para os produtos do setor de eletrônicos. Então o setor de eletrônicos terá um desconto de 40% e os demais setores continuarão com o desconto de 30%. 
//Você deve produzir um array com os objetos com seu preço atualizado. Atenção nem todos os setores terão o mesmo desconto.

let listaProdutos = [
    {   nome: "Camiseta",
        quantidade: 10,
        preco: 29.99,
        setor: 'vestuario'
    },
    {   nome: "Calça",
        quantidade: 5,
        preco: 49.99,
        setor: 'vestuario'   
    },
    { nome: "Notebook",
        quantidade: 3,
        preco: 89.99,
        setor: 'eletronicos'}
    ,
    {   nome: "Tênis",
        quantidade: 3,
        preco: 89.99  ,
        setor: 'calcados'  
    },
    {nome: "Celular",
        quantidade: 2,
        preco: 500.00,
        setor: 'eletronicos'
    },
    {   nome: "Jaqueta",
        quantidade: 2,
        preco: 99.99,
        setor: 'vestuario'
    },
    {   nome: "Mouse",
        quantidade: 2,
        preco: 99.99,
        setor: 'eletronicos'  
    },
    {   nome: "Teclado",
        quantidade: 2,
        preco: 99.99,
        setor: 'eletronicos'    
    },
    {   nome: "Aparelho de jantar",
        quantidade: 2,
        preco: 99.99,
        setor: 'utilidades domésticas'    
    }
]
console.log(listaProdutos)
let produtosComDesconto = listaProdutos.map((item)=>{
    let novoItem = {...item}
    //criando uma copia do item
    //isso garante que o item original nao seja modificado
    if(item.setor == 'eletronicos'){   
        //atualizamos o atributo preco da copia do item ( e não do original por tabela)
        //será aplicado o desconto de 40%
        novoItem.preco = item.preco*0.6
    }
    else{
        //será aplicado o desconto de 30%
        novoItem.preco = item.preco*0.7
    }
    return novoItem
} )
console.log(listaProdutos)
console.log(produtosComDesconto)
