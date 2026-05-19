//Revisar : componentização, exportação e uso das props

function ComponenteExemplo() {
//um componente que não possui props terá a mesma renderização todas as vezes que for utilizado, ou seja o conteudo do componente será sempre o mesmo

    return(
        <>
            <h1>Componente Exemplo</h1>
            <p>Todas as vezes que for utilizado, o conteudo do componente será o mesmo</p>
        </>        
    )

}


function ComponenteComProps(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.conteudo}</p>
            <h5>Esse componente recebe props e pode ter renderização diferente a cada uso dependendo das propriedades passadas. A única parte fixa será esse conteudo</h5>
        </div>
    )
}

function ComponenteComPropsChildren(props){
    return(
        <div className="borda">
            <h1>Título Fixo</h1>
            {/* O children recebe o conteudo do componente pai, isspo pode permitir que ele receba outros componentes ou tags de conteúdo. Funciona semelhante ao innerHTML, onde nós podemos passar o conteudo para dentro de uma tag div por exemplo */}
           {props.children}
        </div>
    )
}


export default ComponenteExemplo
export {ComponenteComProps, ComponenteComPropsChildren} //toda função de componente que não for o exportado default, deverá ser exportada com o export dentro de chaves. Podendo assim exporta uma ou mais funções de componentes