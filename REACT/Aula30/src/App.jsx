import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' //folha de estilo do bootstrap
import Botoes from './componentes/Botoes'
import CardProduto from './componentes/CardProduto'
import { produtoExemplo } from './componentes/dados'
import CadastroProduto from './componentes/CadastroProduto'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [teste, setTeste] = useState('sou o valor inicial')
  const [exibir, setExibir] = useState(true)
  
  function mudar(evento){
    setTeste(evento.target.value)
    console.log(teste)
  }

  
  return (
    <>
      {exibir && <h1>Aula 30</h1>}
      <p>A renderização condicional considera qualquer valor iferente de false/undefinid/null como verdadeiro, ou seja se qualquer valor for verdadeiro seguido do && condicional, posteriormente o componente será renderizado</p>
      <button onClick={() => {setExibir(!exibir)}}>Alterar</button>
      <div id='exemplos' className='ocultar'>
        <Botoes></Botoes>

        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Aumentar</button>
      </div>

      <CardProduto imagem={produtoExemplo.imagem} nome={produtoExemplo.nome} preco={produtoExemplo.preco} descricao={produtoExemplo.descricao}></CardProduto>

      <div id='ExemploFormularios'>
       <input type="text" name="nome" id="nome" value={teste} onChange={(e) => mudar(e)} />
       {/* o atributo value deverá receber uma variável para que seja possivel controlar o valor do input mediante essa variável e capturar o valor digitado pelo usuário
       Para atualizar o valor dessa variável, utiliza-se o hook useState, em conjunto com o evento onChange.A cada caracter digitado no input, o valor dessa variável será atualizado, pois existe um evento onChange.       
       */}
       <p>{teste}</p>
      </div>

      <CadastroProduto></CadastroProduto>

      

      
    </>
  )
}

export default App
