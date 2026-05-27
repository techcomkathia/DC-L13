import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Fruta({params}) {
    //para captar um parâmetro da rota, usamos o hook useParams do react router dom, que retorna um objeto com os parâmetros da rota, e podemos acessar o parâmetro id através do objeto params.id
        const id = useParams().id

    const [frutas, setFrutas] = useState([{
        id: 1,
        nome: 'Banana',
        preco: 5.00,
        descricao: 'A banana é uma fruta tropical que é rica em potássio e fibras. Ela é conhecida por seu sabor doce e textura macia, sendo uma escolha popular para lanches e sobremesas.'
    },
    {
        id: 2,
        nome: 'Maçã',
        preco: 3.00,
        descricao: 'A maçã é uma fruta amplamente consumida em todo o mundo, conhecida por sua variedade de sabores e texturas. Ela é rica em fibras, vitaminas e antioxidantes, sendo uma escolha saudável para lanches e sobremesas.'
    }
    ]); 
    return (
        <div>
            <h1>Fruta</h1>
            {/* percorremos o array frutas e verificamos se o id da fruta é igual ao id da rota, caso seja, retornamos o nome da fruta */}
            {frutas.map((fruta) => {
                if(fruta.id === parseInt(id)) {
                    return (
                        <div key={fruta.id}>
                            <h2>{fruta.nome}</h2>
                            <p>{fruta.descricao}</p>
                            <p>{fruta.preco}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}