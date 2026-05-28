// arquivo que cria o provedor de contexto para o tema do site
import { createContext } from "react";
import { useState } from "react";

//criação do contexto
export const TemaContext = createContext()
//não é passado nenhum valor para o createContext, pois ele será passado pelo provider (componente que envolve os componentes que precisam acessar os valores do contexto)


//criação do provider
export function TemaProvider({children}) {
    const [tema, setTema] = useState({
        backgroundColor: 'white',
        color: 'black',
        fontSize: '30px',
        fontFamily: 'Arial, sans-serif'
    })

    return (
        <TemaContext.Provider value={{tema, setTema}} > 
            {children}
        </TemaContext.Provider>

    )


}