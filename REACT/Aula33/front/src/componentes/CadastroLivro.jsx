import { useState } from "react";

export default function CadastroLivro() {

    // titulo, autor, categoria, ano, capa
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ano, setAno] = useState("");
    const [capa, setCapa] = useState("");

    const [livro, setLivro] = useState({});


    async function cadastrarLivro(livro) {
        try {
            const resposta = await fetch("http://localhost:3001/livros",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(livro)
                })
            
                const dados = await resposta.json();
                console.log(dados);
            }
            catch (error) {
            console.log("Erro na requisição:", error);
        }
    }


    return(
            <div>
                <form action="" onSubmit={
                    (e) => {
                        e.preventDefault(); //evita o comportamento padrão do formulário
                        setLivro({titulo: titulo, autor: autor, categoria: categoria, ano: ano, capa: capa, disponivel: true});
                        //cria um objeto com os dados do usuário
                        cadastrarLivro({titulo: titulo, autor: autor, categoria: categoria, ano: ano, capa: capa, disponivel: true}); //chama a função para cadastrar o usuário

                        setTitulo("");
                        setAutor("");
                        setCategoria("");
                        setAno("");
                        setCapa("");
                        setLivro({});
                        console.log('livro cadastrado com sucesso!');
                    }
                }>
                    <input type="text" placeholder="titulo" onChange={(e)=> setTitulo(e.target.value)} value={titulo}/>
                    <input type="text" placeholder="autor" onChange={(e)=> setAutor(e.target.value)} value={autor}/>
                    <input type="text" placeholder="categoria" onChange={(e)=> setCategoria(e.target.value)} value={categoria} />
                    <input type="text" placeholder="ano" onChange={(e)=> setAno(e.target.value)} value={ano} />
                    <input type="text" placeholder="capa" onChange={(e)=> setCapa(e.target.value)} value={capa} />

                    <button type="submit">Cadastrar</button>
                </form>

            </div>
    )
}