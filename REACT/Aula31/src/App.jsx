import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EfeitoColateral from './componentes/EfeitoColateral'
import ConsumoApi from './componentes/ConsumoApi'
import { Exemplo2 } from './componentes/ConsumoApi'
import ListagemProdutos from './componentes/ListagemProdutos'
import CadastrarProduto from './componentes/CadastrarProduto'
import ComponenteConteudoInterno from './componentes/ComponenteConteudoInterno'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Aula 31</h1>
      {/* <EfeitoColateral/>
      <ConsumoApi/>
      <Exemplo2/>
      <ListagemProdutos/> */}

      <ComponenteConteudoInterno>
        <CadastrarProduto/>
      </ComponenteConteudoInterno>
      

      <ComponenteConteudoInterno titulo="Conteudo Interno"> 
        <p>Sou um parágrafo que está dentro de um componente e serei atribuido ao props.children</p>

        <h2>Eu sou um h2</h2>
      </ComponenteConteudoInterno>

    </>
  )
}

export default App
