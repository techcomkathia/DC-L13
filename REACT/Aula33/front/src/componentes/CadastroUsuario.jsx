import { useState } from "react";

export default function CadastroUsuario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const [usuario, setUsuario] = useState({});

    async function cadastrarUsuario(usuario) {
       try{
         const resposta = await fetch("http://localhost:3001/usuarios", 
            {   method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(usuario)
            })

        if(resposta.ok) {
            console.log("Usuário cadastrado com sucesso!");
            const dados = await resposta.json();
            console.log(dados);
        } else {
            console.log("Erro ao cadastrar usuário");
        }
       }
       catch(error) {
        console.log("Erro na requisição:", error);
       }
            
    }


    return(
         <div>
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault(); //evita o comportamento padrão do formulário
                    const usuario = {nome, email, telefone, ativo: true}; //cria um objeto com os dados do usuário
                    cadastrarUsuario(usuario);

                    setNome("");
                    setEmail("");
                    setTelefone("");
                    setUsuario({});
                }
            }>
                <input type="text" placeholder="nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>
                <input type="email"  placeholder="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <input type="text" placeholder="telefone" onChange={(e)=> setTelefone(e.target.value)} value={telefone} />
                <button type="submit">Cadastrar</button>   
            </form>
         </div>
    )


}