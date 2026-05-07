function ComponenteExemplo() {
// retorna apenas um único elemento do JSX
    return <h1>ComponenteExemplo</h1>

}

export default ComponenteExemplo
//um arquivo pode ter apenas uma função com exportação padrão (export default)

function Funcao2() {
    return <h1>Componente 2 do arquivo ComponenteExemplo</h1>
}

function Funcao3() {
    return <h1>Componente 3 do arquivo ComponenteExemplo</h1>
}

function Funcao4() {
    return <h1>Componente 4 do arquivo ComponenteExemplo</h1>
}

//além do export default, podemos exportar outras funções do arquivo no formato de métodos de um objeto
export { Funcao2, Funcao3, Funcao4 }