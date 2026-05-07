// demonstrar a importação de imagens internas ao projeto, ou seja, imagens que estão dentro da pasta src/assets

import testeImagem from '../assets/patinho.jpg'
import reactImg from '../assets/react.svg'

export default function ImagemPato() {
    // evitar o caminho relativo, pois ele pode mudar de acordo com o projeto. Faça a importação de imagens internas ao projeto e utilize o nome dessa imagem dentro da função
    return (

        <>
            <h2>Exemplo de importação de imagens internas ao projeto</h2>
            <img src={testeImagem} alt="Patinho" />
        </>
        
    )
}

function ImagemLogo(){
    return(
        <>
            <img src={reactImg} alt="Logo React" />
        </>
    )

}

export {ImagemLogo}