// utilização de operador ternário ou ainda condicionais e operadores lógicos


//terá duas possibilidades, caso a propriedade texto seja passada, irá mostrar um parágrafo com 'Resumo: props.texto' caso contrário irá mostrar apenas a imagem. 

export default function ComponenteCondicional({imagem, titulo, texto}) {

    return(
        <div>
            {/* elementos que serão mostrados independente da condição */}
            <img src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
            
            {/* elementos que serão mostrados dependendo da condição: Duas possibilidades*/}
            {/*1ª opção. Utilizar o operador ternário. avaliação de condição ? se verdadeiro : se falso */}
            {texto ? <p>Resumo: {texto}</p> : null} 
            {/* caso o texto seja passado, irá mostrar um parágrafo com 'Resumo: props.texto' caso contrário irá mostrar apenas a imagem */}

            {/* segunda opção: Utilizar os operadores lógicos && (condition1 && condition2) */}
            {texto && <p>Resumo: {texto}</p>}
        </div>
    )
    
}