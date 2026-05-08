export default function ComponenteProps({nome, idade, cidade}){
    //receber atributos : nome, idade e cidade do componente pai e será utilizado para mostrar na tela informações diferentes a cada utilização
    return(
        <div>
            {/* <h2>Nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Cidade: {props.cidade}</h2> */}
            {/* desestruturação do objeto props */}
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Cidade: {cidade}</h2>
        </div>
    )

}

