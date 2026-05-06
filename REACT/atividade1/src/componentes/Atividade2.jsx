/* 
Atividade 2:
Represente o primeiro objeto do array com um desconto de 10%. 
Detalhe, crie internamente ao componente da atividade 2 uma função chamada calcular valor com desconto, que recebe a porcentagem como parâmetro e retorna o valor final

let produtos = [
    { nome: "Maçã", preco: 4.50, categoria: "Frutas" },
    { nome: "Banana", preco: 3.20, categoria: "Frutas" },
    { nome: "Laranja", preco: 3.80, categoria: "Frutas" }
]*/

export default function Atividade2(){

let produtos = [
    { nome: "Maçã", preco: 4.50, categoria: "Frutas" },
    { nome: "Banana", preco: 3.20, categoria: "Frutas" },
    { nome: "Laranja", preco: 3.80, categoria: "Frutas" }
]

function calcularDesconto(produto,percentual){
    return (produto.preco * (1 - percentual/100)).toFixed(2)
}

return(
    <div>
        <h3>Produto: {produtos[0].nome}</h3>
        <p>Preço: R$ {calcularDesconto(produtos[0],10)}</p>
    </div>
)

}