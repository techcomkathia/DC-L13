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

    async function cadastrarProduto() {}


    return (
        <>
            <h1>Novo Produto</h1>

            <input type="text" placeholder="nome"  />
            <input type="number" placeholder="preco"  />
            <input type="text" placeholder="descricao"  />
            <input type="url" placeholder="imagem"  />

            <button>Cadastrar</button>
            {/* renderização condicional da mensagem */}
            {mensagem && <p>{mensagem}</p>}
        </>
    );
}