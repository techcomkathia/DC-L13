import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' //folha de estilo do bootstrap
import Botoes from './componentes/Botoes'
import CardProduto from './componentes/CardProduto'
import { produtoExemplo } from './componentes/dados'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Aula 30</h1>
      <Botoes/>
      <CardProduto imagem={produtoExemplo.imagem} nome={produtoExemplo.nome} preco={produtoExemplo.preco} descricao={produtoExemplo.descricao}></CardProduto>

      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Aumentar</button>
    </>
  )
}

export default App
