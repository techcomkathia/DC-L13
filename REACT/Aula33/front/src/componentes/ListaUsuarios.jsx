import { useState, useEffect } from "react";

export default function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);

    async function buscarUsuarios() {
        try{

            const resposta = await fetch("http://localhost:3001/usuarios");
            const dadosUsuarios = await resposta.json();
            setUsuarios(dadosUsuarios);

        }
        catch (error) {
            console.error("Erro ao buscar dados:", error);
            setErro("Erro ao buscar dados");
        }
    }

    useEffect(()=> {buscarUsuarios()}, []);

    return(

        <div>
            {usuarios.length >0 && <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome} - {usuario.email}</li>
                ))}
            </ul>}
            {erro && <p>{erro}</p>}


        </div>
    )


}