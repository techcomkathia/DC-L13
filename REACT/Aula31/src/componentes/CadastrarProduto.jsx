//ATIVIDADE 2 : com o método post na api The Fake Store, cadastre um produto. Faça um componente que tenha os seguintes campos:imagem, nome, preco e descricao e um botão para cadastrar o produto

//dica: use o hook useState para gerenciar os campos do formulario, com o evento onChange, faça a atribuição de valor aos campos do formulario
//ao interagir com o botão de cadastro, faça a chamada a api com os dados do formulario

//quando a api retornar o produto cadastrado mostre uma mensagem de sucesso "Produto cadastrado com sucesso"

import { useState } from "react";

export default function CadastrarProduto() {
    const [produto, setProduto] = useState({});
    const [mensagem, setMensagem] = useState('');

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');

    async function cadastrarProduto() {
        setProduto({
            title: nome,
            price: preco,
            description: descricao,
            category: categoria,
            image: imagem
        })

        try {
            const resposta = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                body: JSON.stringify(produto)
            })
            const produtoCadastrado = await resposta.json()
            setMensagem('Produto cadastrado com sucesso')
            console.log(produtoCadastrado)
            //limpar os campos do formulario
            setNome('')
            setPreco('')
            setDescricao('')
            setImagem('')   
            setCategoria('')
            setProduto({})
        } catch (erro) {
            console.log(erro)
            setMensagem('Erro ao cadastrar produto')
        }
    }


    return (
        <>
            <h1>Novo Produto</h1>

            <input type="text" placeholder="nome"  onChange={(e)=> setNome(e.target.value)} value={nome} />
            <input type="number" placeholder="preco" onChange={(e)=> setPreco(e.target.value) } value={preco} />
            <input type="text" placeholder="descricao"  onChange={(e)=> setDescricao(e.target.value) } value={descricao} />
            <input type="url" placeholder="imagem"  onChange={(e)=> setImagem(e.target.value) } value={imagem} />
            <input type="text" placeholder="categoria"  onChange={(e)=> setCategoria(e.target.value) } value={categoria} />

            <button onClick={cadastrarProduto}>Cadastrar</button>
            {/* renderização condicional da mensagem */}
            {mensagem && <p>{mensagem}</p>}
        </>
    );
}