import { useEffect, useState } from "react";

export default function ConsumoApi() {
    const [endereco, setEndereco] = useState({})

    async function obterEndereco() {
       try{ const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
        const endereco = await resposta.json()
        setEndereco(endereco)}
        catch(erro){console.log(erro)}
    }

    //obterEndereco()
    // teremos uma execução continua, pois a funcao atualiza o estado da variavel endereco toda vez que for executada, e a variavel endereco vai ser exibida na tela causando uma nova montagem de componente e uma execução continua

    useEffect(() => {
        obterEndereco()
    }, [])
    
    return(
        <>
            {endereco.cep && <p>CEP: {endereco.cep}</p>}
            {endereco.logradouro && <p>Rua: {endereco.logradouro}</p>}
            {endereco.bairro && <p>Bairro: {endereco.bairro}</p>}
            {endereco.localidade && <p>Cidade: {endereco.localidade}</p>}
            {endereco.uf && <p>UF: {endereco.uf}</p>}        
        </>
    )
 
}


export function Exemplo2(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function efeitoColateral() {
        console.log('Efeito colateral executado')
    }

    useEffect(()=>efeitoColateral(),[x])

    //todas as vezes que a variável x for atualizada deverá ser executada uma função de efeito colateral 

    return(
        <>
            <button onClick={() => setX(x + 1)}>Incrementar X {x}</button>
            <button onClick={() => setY(y + 1)}>Incrementar Y {y}</button>
        </>
    )
}