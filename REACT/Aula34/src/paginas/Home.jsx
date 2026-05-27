import Titulo from "../componentes/Titulo"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

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
            <Titulo nome='Página Home'/>

            <ul>
                {frutas.map((fruta) => (
                    <Link to={`/frutas/${fruta.id}`}><li key={fruta.id}>{fruta.nome} </li></Link>
                ))}
            </ul>
        </div>
    )
}