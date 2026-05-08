/* faça uma interface que tenha 8 botões. Com os numeros 2,3,4,5,6,7,8,9. Ao clicar em um dos botões ele deve alterar o valor da variável numeroTabuada. Essa variável será utilizada para mostrar a tabuada de um número. O seu valor inicial deve ser 2. Esse componente será chamado Tabuada.*/

//importação do hook useState
import { useState } from "react";

function Tabuada({numero}) {
    return(
        <>
        <h1>Tabuada de {numero}</h1>
        <ul>
            <li>2 x {numero} = {2 * numero}</li>
            <li>3 x {numero} = {3 * numero}</li>
            <li>4 x {numero} = {4 * numero}</li>
            <li>5 x {numero} = {5 * numero}</li>
            <li>6 x {numero} = {6 * numero}</li>
            <li>7 x {numero} = {7 * numero}</li>
            <li>8 x {numero} = {8 * numero}</li>
            <li>9 x {numero} = {9 * numero}</li>
            <li>10 x {numero} = {10 * numero}</li>
        </ul>
        </>
    )
}

export default function Atividade2() {
    //criar a varivel de estado controlado
    //deverá ser inicializada com o valor 2
    let [numeroTabuada, setNumeroTabuada] = useState(2)
    const numeros=[2,3,4,5,6,7,8,9]
    //os botões serão mostrados para alterar o valor e o estado da variável. Clicando no botão iremos renderizar novamente o componente Tabuada com o novo valor da variável, pois o estado E o valor da variável serão alterados

    return(
        <>
          {numeros.map((n) => (
            <button onClick={() => setNumeroTabuada(n)}>{n}</button>
          ))}
          <Tabuada numero={numeroTabuada}/>        
        </>
    )

}
