import { useState } from 'react'
import './App.css'
import EfeitoColateral from './componentes/EfeitoColateral'
import ConsumoApi from './componentes/ConsumoApi'
import { Exemplo2 } from './componentes/ConsumoApi'
import ListagemProdutos from './componentes/ListagemProdutos'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Aula 31</h1>
      <EfeitoColateral/>
      <ConsumoApi/>
      <Exemplo2/>
      <ListagemProdutos/>

    </>
  )
}

export default App
