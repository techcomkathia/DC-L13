import { useState } from "react";
import { ProdutosContext } from "../contextos/ProdutosContext";
import { useContext } from "react";

export default function CadastroProduto() {

    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[preco, setPreco] = useState("")
    const[imagem, setImagem] = useState("")
    const [cadastroSucesso, setCadastroSucesso] = useState(false)
    const {adicionarProduto,produtos} = useContext(ProdutosContext)


    function cadastrarProduto(event) {
        event.preventDefault()
        adicionarProduto({
            id: Date.now(),
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        })

                     

        setCadastroSucesso(true) //alterar o estado para exibir a mensagem de sucesso
    
        setDescricao("")
        setNome("")
        setPreco("")
        setImagem("")
    }


  return (
    <>
        <h1>Cadastro de Produto</h1>
        <form action="" onSubmit={cadastrarProduto}>
            <input type="text" placeholder="Nome do produto"  onChange={(e)=>setNome(e.target.value)} value={nome}/>

            <input type="text" placeholder="Descrição do produto"  onChange={(e)=> setDescricao(e.target.value)} value={descricao}/>
     
            <input type="number" placeholder="Preço do produto" onChange={(e)=> setPreco(e.target.value)} value={preco} />
            <input type="text" placeholder="URL da imagem do produto" onChange={(e)=> setImagem(e.target.value)} value={imagem} />
            <button type="submit">Cadastrar</button>
        </form>

        {cadastroSucesso && <p>Produto cadastrado com sucesso!</p>}
    </>
  );
}

