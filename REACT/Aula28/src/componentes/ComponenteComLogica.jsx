// encapsular tanto a representação visual quanto a lógica do componente: validação de campos, execução de funções para produção de informação e etc

// exportação para possibilidade de uso em outro arquivo
export default function ComponenteComLogica(){
    const objeto = {
        id: 1,
        nome: 'João',
        idade: 20, 
        notas : [8, 7, 9, 6]
    }

    function calcularMedia(notas){
        return (notas[0] + notas[1] + notas[2] + notas[3]) / 4
    }
    // todo o conteúdo dentro de {} no retorno de função que retorna JSX será js puro, ou seja podemos processar funções, calculos matemáticos, etc

    return (
        <>
            <h1>{objeto.nome}</h1>
            <p>{objeto.idade}</p>
            <p>Média: {calcularMedia(objeto.notas)}</p>
        </>
    )
}