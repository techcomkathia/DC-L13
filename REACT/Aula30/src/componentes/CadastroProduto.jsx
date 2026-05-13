//------------------------ Atividade 3 ------------------------
//Crie um componente chamado CadastroProduto. Esse componente será um formulario com os seguintes campos:
//nome, preco, descricao e imagem. Um botão do type submit deverá montar um objeto com as informações passadas e mostra-lo no console.log.
//DICA : use o hook useState para gerenciar cada um dos campos campos do formulario e adicionalmente uma variável de estado para controlar para o objeto que deverá ser mostrado no console.log
//Para o evento onChange, faça a atribuição de valor aos campos do formulario 
//Para o evento onSubmit, faça a atribuição de valor ao objeto que deverá ser mostrado no console.log

import { useState } from 'react'

//importação do cardproduto
import CardProduto from './CardProduto'

export default function CadastroProduto() {
    //campos do formulário
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    //objeto produto, que deverá ser mostrado no console
    const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '', imagem: '' })



    //função que será executada quando o formulário for enviado
    function cadastrar(e){
        //remoção do evento padrão do formulário
        e.preventDefault()

        //criação do objeto produto
        setProduto({
            nome: nome,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        })

        
        //limpa os campos do formulário
        setNome('')
        setPreco('')
        setDescricao('')
        setImagem('')

        console.log(produto)
        
    }

    return(
        <>
         <form action="" onSubmit={(e)=> cadastrar(e)}>
            <input type="text" name="nome" id="nome" placeholder='nome' value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <input type="number" name="preco" id="preco" placeholder='preco' value={preco}
            onChange={(e) => setPreco(e.target.value)}
              />
            <input type="text" name="descricao" id="descricao" placeholder='descricao' value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            />
            <input type="url" name="imagem" id="imagem" placeholder='imagem' value={imagem}
            onChange={(e) => setImagem(e.target.value)}
             />

            <button type='submit' >Cadastrar</button>
         </form>

         <CardProduto imagem={produto.imagem} nome={produto.nome} preco={produto.preco} descricao={produto.descricao}></CardProduto>
        </>
    )

}