import { useState, useEffect } from "react";

//será responsável por consumir a API e mostrar os dados na tela, apenas no primeiro carregamento da página, ou seja, quando o componente for montado.
export default function ConsumoAPI() {
  const [dados, setDados] = useState([]);

  async function buscarDados() {
    try{
        const resposta = await fetch("http://localhost:3001/livros"); //CHAMAOS A API PARA BUSCAR OS DADOS
        const dadosLivros = await resposta.json(); //CONVERTE A RESPOSTA PARA JSON
        setDados(dadosLivros); //ATUALIZA O ESTADO COM OS DADOS RECEBIDOS
        console.log(dadosLivros); 
    }
    catch(error){
        console.error("Erro ao buscar dados:", error);
    }
  }

    useEffect(buscarDados, []) //executado apenas na montagem do componente.

  return(
    <div>
        {!dados.length && <p>Carregando...</p>} {/*EXIBE UMA MENSAGEM DE CARREGAMENTO ENQUANTO OS DADOS ESTÃO SENDO BUSCADOS*/}
        {dados.length > 0 && (
            <ul>
                {dados.map((livro) => (
                    <li key={livro.id}>{livro.titulo} </li>
                ))}
            </ul>
        ) }

    </div>
  )
}

