import Card from "./Card";

export default function RenderizacaoLista() {

    let produtos = [
        { nome: "Maçã", preco: 4.50, categoria: "Frutas" },
        { nome: "Banana", preco: 3.20, categoria: "Frutas" },
        { nome: "Laranja", preco: 3.80, categoria: "Frutas" }
    ]

    return(
        <div>
            <h2>Todos os produtos</h2>

            {
                produtos.map((produto) => {
                    return (
                        <>
                            <h1>{produto.nome}</h1>
                            <h2>{produto.preco}</h2>
                            <h3>{produto.categoria}</h3>
                        </>
                    ) 

                    // ou utilização de um componente
                    // return <Card {...produto} />

                })
            }
        </div>
    )


}