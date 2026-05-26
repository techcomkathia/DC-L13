import { useState, useEffect } from 'react'
import './App.css'
import ConsumoAPI from './componentes/ConsumoAPI';
import ListaUsuarios from './componentes/ListaUsuarios';
import CadastroUsuario from './componentes/CadastroUsuario';
import CadastroLivro from './componentes/CadastroLivro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Consumo de API com React</h1>
      <ConsumoAPI />
      <h2>Lista de Usuários</h2>
      <ListaUsuarios />
      <h2>Cadastro de Usuário</h2>
      <CadastroUsuario />

      <h2>Cadastro de Livro</h2>
      <CadastroLivro />
     
    </>
  )
}

export default App
