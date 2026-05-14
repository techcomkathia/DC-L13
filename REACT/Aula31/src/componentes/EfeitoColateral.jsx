//o hook useEffect() executa uma funcao quando o componente for montado ou atualizado
import { use, useEffect } from 'react'
import { useState } from 'react'

export default function EfeitoColateral() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log('Componente Efeito Colateral foi atualizado')
    }, []) //passando o array de dependencias vazio, ele executa apenas uma vez. Na montagem do componente

    //useEffect(() => {
    //    console.log('Componente Efeito Colateral foi atualizado')
    //}, [contador]) //todas as vezes que o contador for alterado, ele executa a função


    return(
        <>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    )

}